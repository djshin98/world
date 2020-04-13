var { dom } = require('../util/comm');

class Cursor {
    constructor(viewer) {
        this.viewer = viewer;
        this.cursorWidgetHandler = undefined;
        this.cursorWidgetCallback = undefined;
    }
    destroy() {
        if (this.cursorWidgetHandler) {
            this.cursorWidgetHandler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);
            this.cursorWidgetHandler.destroy();
            this.cursorWidgetHandler = undefined;
        }
        if (this.cursorWidgetCallback) {
            this.cursorWidgetCallback = undefined;
        }
    }
    widget(callback) {
        this.destroy();
        this.cursorWidgetCallback = callback;
        let _this = this;
        if (callback) {
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

                _this.getSelectedObjFromPoint(movement.endPosition, longitude, latitude);
            }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);


            this.cursorWidgetHandler.setInputAction(function(movement) {
                var cartesian = _this.viewer.camera.pickEllipsoid(movement.position, _this.viewer.scene.globe.ellipsoid);
                if (cartesian) {
                    var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
                    var longitude = Cesium.Math.toDegrees(cartographic.longitude).toFixed(5);
                    var latitude = Cesium.Math.toDegrees(cartographic.latitude).toFixed(5);
                } else {
                    //entity.label.show = false;
                }
                var pickedObject = _this.viewer.scene.pick(movement.position);
                if (Cesium.defined(pickedObject)) {
                    var d = new Dialog({ width: "300px", height: "500px" });
                    var description = pickedObject.id._description;
                    $("#" + d.id + ">.panel-body").append(description.getValue(Cesium.JulianDate.now()))
                }
                // (pickedObject.id._description)
                // _this.getSelectedObjFromPoint(movement.position, longitude, latitude);
            }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

        }
    }

    getSelectedObjFromPoint(position, longitude, latitude) {
        var valueToReturn = null;
        var pickedObject = this.viewer.scene.pick(position);
        if (!Cesium.defined(pickedObject)) {
            picked = null;
            valueToReturn = null;
            if (this.labelEntity) {
                this.labelEntity.label.show = false;
                this.labelEntity.ref = undefined;
            }
        } else {
            var pickedObjects = this.viewer.scene.drillPick(position);
            var picked = pickedObjects[0];

            valueToReturn = Cesium.defaultValue(picked.id, picked.primitive.id);

            if (this.labelEntity) {
                if (this.labelEntity.ref && this.labelEntity.ref == picked.id) {

                } else if (Cesium.defined(picked.id) && Cesium.defined(picked.id.position)) {
                    if (Cesium.defined(picked.id.position._value)) {
                        var cartesian = picked.id.position._value; //this.viewer.scene.pickPosition(position);
                        var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
                        var longitudeString = Cesium.Math.toDegrees(cartographic.longitude).toFixed(2);
                        var latitudeString = Cesium.Math.toDegrees(cartographic.latitude).toFixed(2);
                        var heightString = cartographic.height.toFixed(2);

                        this.labelEntity.position = cartesian;
                        this.labelEntity.label.show = true;
                        this.labelEntity.label.text =
                            '경도: ' + ('   ' + longitudeString).slice(-7) + '\u00B0' +
                            '\n위도: ' + ('   ' + latitudeString).slice(-7) + '\u00B0' +
                            '\n높이: ' + ('   ' + heightString).slice(-7) + 'm';

                        //this.labelEntity.label.eyeOffset = new Cesium.Cartesian3(0.0, 0.0, -cartographic.height * (scene.mode === Cesium.SceneMode.SCENE2D ? 1.5 : 1.0));
                        this.labelEntity.ref = picked.id;
                    }

                }

            }
        }
        return valueToReturn;
    }

    tooltip(bshow) {
        if (dom.trueOrundef(bshow)) {
            if (!this.labelEntity) {
                this.labelEntity = this.viewer.entities.add({
                    label: {
                        show: false,
                        showBackground: true,
                        font: '24px Helvetica',
                        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
                        outlineWidth: 4,
                        horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                        pixelOffset: new Cesium.Cartesian2(0, -60)
                    }
                });
            }
        } else {
            if (this.labelEntity) {
                this.viewer.entities.remove(this.labelEntity);
            }
            this.labelEntity = undefined;
        }

    }


}

module.exports = { OliveCursor: Cursor };