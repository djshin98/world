
class Cursor{
    constructor(viewer){
        this.viewer = viewer;
        this.cursorWidgetHandler = undefined;
        this.cursorWidgetCallback = undefined;
    }
    destroy(){
        if( this.cursorWidgetHandler ){
            this.cursorWidgetHandler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);
            this.cursorWidgetHandler.destroy();
            this.cursorWidgetHandler = undefined;
        }
        if( this.cursorWidgetCallback ){
            this.cursorWidgetCallback = undefined;
        }
    }
    widget(callback){
        this.destroy();
        this.cursorWidgetCallback = callback;
        let _this = this;
        if( callback ){
            this.cursorWidgetHandler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
            this.cursorWidgetHandler.setInputAction(function(movement) {
                var cartesian = _this.viewer.camera.pickEllipsoid(movement.endPosition, _this.viewer.scene.globe.ellipsoid);
                if (cartesian) {
                    var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
                    var longitude = Cesium.Math.toDegrees(cartographic.longitude).toFixed(5);
                    var latitude = Cesium.Math.toDegrees(cartographic.latitude).toFixed(5);

                    if (callback) {
                        callback({
                            latitude: latitude,
                            longitude: longitude
                        });
                    }
                } else {
                    //entity.label.show = false;
                }
            }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
        }
    }
}

module.exports = { OliveCursor : Cursor };