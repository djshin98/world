var Cesium = require('cesium/Cesium');
// widget 에 대한 표준을 만든다.

class DrawInCesium{
    constructor( viewer , baseLayerPicker ){
        this.viewer = viewer;
        this.baseLayerPicker = baseLayerPicker;
        this.drawingMode = 'view';

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
                        if (_this.drawingMode === 'polygon') {
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
    
    draw( mode ){
        this.drawingMode = mode;
        if( this.drawingMode == "view" ){
            this.handler.removeInputAction(Cesium.ScreenSpaceEventType.RIGHT_CLICK);
            this.handler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);
            this.handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK);
        }else{
            this.init();
            this.terminateShape();
        }        
    }

    createPoint(worldPosition) {
        var point = this.viewer.entities.add({
            position : worldPosition,
            point : {
                color : Cesium.Color.WHITE,
                pixelSize : 5,
                heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
            }
        });
        return point;
    }
    
    drawShape(positionData) {
        var shape;
        if(this.drawingMode === 'line') {
            shape = this.viewer.entities.add({
                polyline : {
                    positions : positionData,
                    clampToGround : true,
                    width : 3
                }
            });
        }else if (this.drawingMode === 'polygon') {
            shape = this.viewer.entities.add({
                polygon: {
                    hierarchy: positionData,
                    material: new Cesium.ColorMaterialProperty(Cesium.Color.WHITE.withAlpha(0.7))
                }
            });
        }else if (this.drawingMode === 'ellipse') {
            shape = this.viewer.entities.add({
                polygon: {
                    hierarchy: positionData,
                    material: new Cesium.ColorMaterialProperty(Cesium.Color.WHITE.withAlpha(0.7))
                }
            });
        }else if (this.drawingMode === 'dom') {
            shape = this.viewer.entities.add({
                polygon: {
                    hierarchy: positionData,
                    material: new Cesium.ColorMaterialProperty(Cesium.Color.WHITE.withAlpha(0.7))
                }
            });
        }else if (this.drawingMode === 'rought') {
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
/*
var viewer = new Cesium.Viewer('cesiumContainer',  {
    selectionIndicator : false,
    infoBox : false,
    terrainProvider : Cesium.createWorldTerrain()
});


*/

/*
var options = [{
    text : 'Draw Lines',
    onselect : function() {
        if (!Cesium.Entity.supportsPolylinesOnTerrain(viewer.scene)) {
            window.alert('This browser does not support polylines on terrain.');
        }

        terminateShape();
        drawingMode = 'line';
    }
}, {
    text : 'Draw Polygons',
    onselect : function() {
        terminateShape();
        drawingMode = 'polygon';
    }
}];

Sandcastle.addToolbarMenu(options);
*/
// Zoom in to an area with mountains
//viewer.camera.lookAt(Cesium.Cartesian3.fromDegrees(-122.2058, 46.1955, 1000.0), new Cesium.Cartesian3(5000.0, 5000.0, 5000.0));
//viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);

module.exports = {DrawInCesium : DrawInCesium};
