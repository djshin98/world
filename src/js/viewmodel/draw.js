var Cesium = require('cesium/Cesium');

var { MarkerCollection } = require('../collection/markercollection');
var { DrawCollection,PinMarkers } = require('../collection/drawcollection');

var { Circle } = require('../map3d/draw/circle');
var { Dom } = require('../map3d/draw/dom');
var { Line } = require('../map3d/draw/line');
var { Polygon } = require('../map3d/draw/polygon');
var { Radar } = require('../map3d/draw/radar');

var drawLinker = {
    circle : { name : "원" , createFunc : function(){ return new Circle(); }},
    dom : { name : "탐지영역" , createFunc : function(){ return new Dom(); }},
    line : { name : "선" , createFunc : function(){ return new Line(); }},
    polygon : { name : "다각형" , createFunc : function(){ return new Polygon(); }},
    radar : { name : "레이더" , createFunc : function(){ return new Radar(); }},
}
// widget 에 대한 표준을 만든다.

class Draw{
    constructor( map , baseLayerPicker ){
        this.viewer = map.getView();
        this.baseLayerPicker = baseLayerPicker;
        this.markerCollection = new MarkerCollection(map,{name:"DRAW"});
        this.drawCollection = new DrawCollection(map,{name:"DRAW"});
        this.viewModel = {
            mode: 'view',
            enableStyle:false,
            lineWidth: 1,
            lineColor: Cesium.Color.WHITE,
            lineTransparent: 1,
            lineStyle:'line',
            faceColor: Cesium.Color.WHITE,
            faceTransparent: 1,
            frameEnable:false,
            frameColor: Cesium.Color.WHITE,
            shapeStyle: 'point',
            shapeColor: Cesium.Color.WHITE,
            shapeSize: 5
        };

        if (!this.viewer.scene.pickPositionSupported) {
            window.alert('This browser does not support pickPosition.');
        }
        this.index = 1;
        this.activeShapePoints = [];
        this.activeShape;
        this.floatingPoint;
        this.handler = new Cesium.ScreenSpaceEventHandler(this.viewer.canvas);
    }

    init(){
        this.viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);

        var _this = this;
        this.handler.setInputAction(function(event) {
            //console.log( event.position.x + "," + event.position.y );
            // We use `viewer.scene.pickPosition` here instead of `viewer.camera.pickEllipsoid` so that
            // we get the correct point when mousing over terrain.
            _this.appendPoint(event);
            
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
        
        this.handler.setInputAction(function(event) {
            if (Cesium.defined(_this.floatingPoint)) {

                var newPosition = _this.baseLayerPicker ? _this.viewer.scene.pickPosition(event.endPosition) :  
                        _this.viewer.camera.pickEllipsoid(new Cesium.Cartesian3(event.endPosition.x, event.endPosition.y), _this.viewer.scene.globe.ellipsoid);

                if (Cesium.defined(newPosition)) {
                    _this.floatingPoint.position.setValue(newPosition);
                    _this.activeShapePoints.pop();
                    _this.activeShapePoints.push(newPosition);
                }
            }
        }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
        
        this.handler.setInputAction(function(event) {
            //_this.appendPoint(event);
            _this.terminateShape();
        }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);

    }
    appendPoint(event){
        let _this = this;
        var earthPosition = _this.baseLayerPicker ? _this.viewer.scene.pickPosition(event.position) :  
                _this.viewer.camera.pickEllipsoid(new Cesium.Cartesian3(event.position.x, event.position.y), _this.viewer.scene.globe.ellipsoid);

        if (Cesium.defined(earthPosition)) {
        if (_this.activeShapePoints.length === 0) {
            _this.floatingPoint = _this.createPoint(earthPosition);
            _this.activeShapePoints.push(earthPosition);
            var dynamicPositions = new Cesium.CallbackProperty(function () {
                if (_this.viewModel.mode === 'polygon') {
                    return new Cesium.PolygonHierarchy(_this.activeShapePoints);
                }
                return _this.activeShapePoints;
            }, false);
            _this.activeShape = _this.drawShape(dynamicPositions);
        }
        _this.activeShapePoints.push(earthPosition);
        _this.createPoint(earthPosition);
        }
    }
    update( viewModel ){
        this.viewModel = Object.assign(this.viewModel, viewModel );
        if( this.viewModel.lineColor && typeof(this.viewModel.lineColor) == "string"){
            this.viewModel.lineColor = Cesium.Color.fromCssColorString(this.viewModel.lineColor);
        }
        if( this.viewModel.faceColor && typeof(this.viewModel.faceColor) == "string"){
            this.viewModel.faceColor = Cesium.Color.fromCssColorString(this.viewModel.faceColor);
        }
        if( this.viewModel.frameColor && typeof(this.viewModel.frameColor) == "string"){
            this.viewModel.frameColor = Cesium.Color.fromCssColorString(this.viewModel.frameColor);
        }
        if( this.viewModel.shapeColor && typeof(this.viewModel.shapeColor) == "string"){
            this.viewModel.shapeColor = Cesium.Color.fromCssColorString(this.viewModel.shapeColor);
        }
        if( this.viewModel.faceTransparent && typeof(this.viewModel.faceTransparent) == "string"){
            this.viewModel.faceTransparent = parseFloat(this.viewModel.faceTransparent) / 100;
        }
        if( this.viewModel.lineTransparent && typeof(this.viewModel.lineTransparent) == "string"){
            this.viewModel.lineTransparent = parseFloat(this.viewModel.lineTransparent) / 100;
        }

        this.viewModel.lineColor = this.viewModel.lineColor.withAlpha(this.viewModel.lineTransparent);
        this.viewModel.faceColor = this.viewModel.faceColor.withAlpha(this.viewModel.faceTransparent);
        //this.viewModel.frameColor = Cesium.Color.fromCssColorString(this.viewModel.frameColor);
        //this.viewModel.shapeColor = Cesium.Color.fromCssColorString(this.viewModel.shapeColor);
        
        if( this.viewModel.mode == "view" ){
            this.handler.removeInputAction(Cesium.ScreenSpaceEventType.RIGHT_CLICK);
            this.handler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);
            this.handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK);
        }else{
            this.init();
            this.terminateShape();

            this.activeDrawHandler = this.getHandler(this.viewModel.mode);
        }        
    }
    getHandler(name){
        if( Cesium.defined(drawLinker[name]) ){
            return drawLinker[name].createFunc();
        }
    }
    getHandlerList(){
        return Object.keys(drawLinker).map(name=>{
            return { key:name, name:drawLinker[name].name };
        });
    }
    createPoint(worldPosition) {
        if( Cesium.defined(this.activeDrawHandler) ){
            let pin = this.activeDrawHandler.pin(this.activeShapePoints.length);
            var point = this.markerCollection.add( CTX.c2d(worldPosition),pin);
        }
    }
    
    drawShape(positionData) {
        if( Cesium.defined(this.activeDrawHandler) ){
            return this.activeDrawHandler.create(this.drawCollection,positionData,this.viewModel);
        }
    }

    terminateShape() {
        //this.activeShapePoints.pop();
        this.drawShape(this.activeShapePoints);
        this.drawCollection.remove(this.floatingPoint);
        this.drawCollection.remove(this.activeShape);
        this.floatingPoint = undefined;
        this.activeShape = undefined;
        this.activeShapePoints = [];
        this.index++;
    }

}
module.exports = {Draw : Draw};
