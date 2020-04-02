
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

                _this.getSelectedObjFromPoint(movement.endPosition);
            }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
        }
    }

    getSelectedObjFromPoint(position){
        var valueToReturn= null;
        var pickedObject = this.viewer.scene.pick(position);
        var pickedObjects = this.viewer.scene.drillPick(position);
        var picked = pickedObjects[0];
        if (!Cesium.defined(pickedObject)) {
            picked = null;
            valueToReturn = null;
        }
        else {
            valueToReturn = Cesium.defaultValue(picked.id, picked.primitive.id);
        }
        return valueToReturn;
    }
}

module.exports = { OliveCursor : Cursor };