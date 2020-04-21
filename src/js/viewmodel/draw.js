var Cesium = require('cesium/Cesium');

var { MarkerCollection } = require('../collection/markercollection');
var { DrawCollection,PinMarkers } = require('../collection/drawcollection');


// widget 에 대한 표준을 만든다.

class Draw{
    constructor( map , baseLayerPicker ){
        this.viewer = map.getView();
        this.baseLayerPicker = baseLayerPicker;
        this.collection = new MarkerCollection(map,{name:"DRAW"});
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
            _this.terminateShape();
        }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);

    }
    dashPatternFromString(str,width){
        if( str == "line"){
            return parseInt('11111111111', 2);
        }else if( str == "dot"){
            return parseInt('1'.repeat(width), 2);
        }else if( str == "long-dot"){
            return parseInt('1'.repeat(width*2), 2);
        }else if( str == "dot-dot-line"){
            return parseInt('1'.repeat(width) + '0'.repeat(width), 2);
        }
    }
    update( viewModel ){
        this.viewModel = Object.assign(this.viewModel, viewModel );
        this.viewModel.lineColor = Cesium.Color.fromCssColorString(this.viewModel.lineColor).withAlpha(this.viewModel.lineTransparent);
        this.viewModel.faceColor = Cesium.Color.fromCssColorString(this.viewModel.faceColor).withAlpha(this.viewModel.faceTransparent);
        this.viewModel.frameColor = Cesium.Color.fromCssColorString(this.viewModel.frameColor);
        this.viewModel.shapeColor = Cesium.Color.fromCssColorString(this.viewModel.shapeColor);
        
        if( this.viewModel.mode == "view" ){
            this.handler.removeInputAction(Cesium.ScreenSpaceEventType.RIGHT_CLICK);
            this.handler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);
            this.handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK);
        }else{
            this.init();
            this.terminateShape();
        }        
    }

    createPoint(worldPosition) {
        let _this = this;
        var point = this.collection.add( CTX.c2d(worldPosition),PinMarkers.start);
        /*
        var point = this.viewer.entities.add({
            position : worldPosition,
            point : {
                color : _this.viewModel.shapeColor,
                pixelSize : _this.viewModel.shapeSize,
                heightReference: Cesium.HeightReference.NONE
            }
        });
        return point;
        */
    }
    
    drawShape(positionData) {
        var shape;
        if(this.viewModel.mode === 'line') {
            let _this = this;
            let option = {
                positions : positionData,
                clampToGround : true,
                color : _this.viewModel.lineColor,
                width : _this.viewModel.lineWidth
            };
            if( this.viewModel.lineStyle != "line"){
                option.material = new Cesium.PolylineDashMaterialProperty({
                    color : _this.viewModel.lineColor,
                    dashPattern: _this.dashPatternFromString(_this.viewModel.lineStyle,_this.viewModel.lineWidth)
                });
            }
            shape = this.viewer.entities.add({
                polyline : option
            });

        }else if (this.viewModel.mode === 'polygon') {
            shape = this.viewer.entities.add({
                polygon: {
                    hierarchy: positionData,
                    material: new Cesium.ColorMaterialProperty(Cesium.Color.WHITE.withAlpha(0.7))
                }
            });
        }else if (this.viewModel.mode === 'ellipse') {
            if( positionData && positionData.length > 1 ){
                var distance = Cesium.Cartesian3.distance(positionData[0], positionData[positionData.length-1]);
                shape = this.viewer.entities.add({
                    position: positionData[0],
                    ellipse: {
                        semiMinorAxis : distance,
                        semiMajorAxis : distance,
                        //hierarchy: positionData,
                        fill:true,
                        material: new Cesium.ColorMaterialProperty(Cesium.Color.WHITE.withAlpha(0.7))
                    }
                });
            }
        }else if (this.viewModel.mode === 'dom') {
            shape = this.viewer.entities.add({
                polygon: {
                    hierarchy: positionData,
                    material: new Cesium.ColorMaterialProperty(Cesium.Color.WHITE.withAlpha(0.7))
                }
            });
        }else if (this.viewModel.mode === 'rought') {
            shape = this.viewer.entities.add({
                polygon: {
                    hierarchy: positionData,
                    material: new Cesium.ColorMaterialProperty(Cesium.Color.WHITE.withAlpha(0.7))
                }
            });
        }
        return shape;
    }

    terminateShape() {
        this.activeShapePoints.pop();
        this.drawShape(this.activeShapePoints);
        this.viewer.entities.remove(this.floatingPoint);
        this.viewer.entities.remove(this.activeShape);
        this.floatingPoint = undefined;
        this.activeShape = undefined;
        this.activeShapePoints = [];
    }

}
module.exports = {Draw : Draw};
