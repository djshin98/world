const { Text } = require('./text');
const { Group } = require('./group');

class CameraAngleBox extends Group {
    constructor(dashboard, options) {
        super(dashboard, options);
        this.map = dashboard.map;
        let _this = this;
        this.changedEvent = this.map.oliveCamera.listenEvent("changed", (v) => {
            if (_this.texts) {
                if (v) {
                    _this.texts.heading.text(CTX.radian2degree(v.heading).toFixed(2) + "°");
                    _this.texts.pitch.text(CTX.radian2degree(v.pitch).toFixed(2) + "°");
                    _this.texts.roll.text(CTX.radian2degree(v.roll).toFixed(2) + "°");
                } else {
                    _this.texts.cameraDist.text('');
                    _this.texts.cameraLng.text('');
                    _this.texts.cameraLat.text('');

                    _this.texts.heading.text('');
                    _this.texts.pitch.text('');
                    _this.texts.roll.text('');
                }
            }
        });

        this.width(100);
        this.height(80);

        this.data = [
            { type: "text", name: "heading", label: "heading" },
            { type: "text", name: "pitch", label: "pitch" },
            { type: "text", name: "roll", label: "roll" }
        ]
    }

    refresh() {
        super.refresh(this.data);
    }

    destroy() {
        if (this.changedEvent) {
            this.map.oliveCamera.removeEvent(this.changedEvent);
            delete(this.changedEvent);
        }
    }

}

module.exports = { CameraAngleBox: CameraAngleBox }