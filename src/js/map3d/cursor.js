var { dom } = require('../util/comm');
var { Eventable } = require('../core/eventable');
var { Q } = require('../core/e');

class Cursor extends Eventable {
    constructor(viewer) {
        super();
        this.viewer = viewer;
        this.cursorWidgetHandler = undefined;
        //this.load();
    }
    destroy() {
        if (this.cursorWidgetHandler) {
            this.cursorWidgetHandler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);
            this.cursorWidgetHandler.destroy();
            this.cursorWidgetHandler = undefined;
        }
    }
    load() {
        let _this = this;
        this.cursorWidgetHandler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
        this.cursorWidgetHandler.setInputAction(function(movement) {
            var cartographic = CTX.w2r(movement.endPosition.x, movement.endPosition.y);
            var degree = CTX.r2d(cartographic);

            _this.getSelectedObjFromPoint(movement.endPosition);

            _this.fireEvent("move", degree);
        }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);


        this.cursorWidgetHandler.setInputAction(function(movement) {
            //var cartesian = CTX.w2c(movement.position.x, movement.position.y);
            //_this.viewer.camera.pickEllipsoid(movement.position, _this.viewer.scene.globe.ellipsoid);

            var pickedObject = _this.viewer.scene.pick(movement.position);

            if (Cesium.defined(pickedObject)) {
                //var d = new Dialog({ width: "300px", height: "500px" });
                //var description = pickedObject.id._description;
                //$("#" + d.id + ">.panel-body").append(description.getValue(Cesium.JulianDate.now()))
                //_this.getSelectedObjFromPoint(movement.position, longitude, latitude);
                //console.log("pick :");

                let ent = {};
                let desc = ent["Description"] = [];
                if (Q.isValid(pickedObject.id._olive_description)) {
                    pickedObject.id._olive_description.forEach(item => {
                        desc.push({ key: item.name, value: item.value });
                    });
                }

                let option = ent["Option"] = [];
                let other = Object.keys(pickedObject.id._olive_option).filter(item => { return item == "degree" ? false : true; });

                other.forEach(key => {
                    let item = pickedObject.id._olive_option;

                    option.push({ key: key, value: item[key] });
                });
                let degreeOption = ent["위치"] = [];
                let d = CTX.c2d(pickedObject.primitive.position);
                degreeOption.push({ key: "경도", value: d.longitude });
                degreeOption.push({ key: "위도", value: d.latitude });
                degreeOption.push({ key: "높이", value: d.height });
                _this.fireEvent("selected", ent);
            }
            // (pickedObject.id._description)
            // _this.getSelectedObjFromPoint(movement.position, longitude, latitude);
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    }

    getSelectedObjFromPoint(position) {
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

            //this.fireEvent("selected", picked);
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