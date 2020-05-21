const { Text } = require('./text');
const { Group } = require('./group')
const { $$ } = require('../../core/e');

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
    }

    refresh() {
        super.refresh();
        let fontSizeStr = this.svg.style("font-size");
        let fontSize = fontSizeStr.split("px")[0];

        this.texts = {
            heading: new Text(this.svg, { label: "heading", x: 15, y: fontSize + "px" }),
            pitch: new Text(this.svg, { label: "pitch", x: 15, y: fontSize * 2 + "px" }),
            roll: new Text(this.svg, { label: "roll", x: 15, y: fontSize * 3 + "px" })
        }
    }

    destroy() {
        if (this.changedEvent) {
            this.map.oliveCamera.removeEvent(this.changedEvent);
            delete(this.changedEvent);
        }
    }

}

module.exports = { CameraAngleBox: CameraAngleBox }