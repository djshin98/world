const { Text } = require('./text');
const { Group } = require('./group')

class CameraAngleBox extends Group {
    constructor(dashboard, options) {
        super(dashboard);
        this.map = dashboard.map;
        this.width = 0;
        this.height = 0;
        let _this = this;


        this.changedEvent = this.map.oliveCamera.listenEvent("changed", (v) => {
            if (_this.texts) {
                if (v) {
                    let d = CTX.c2d(v.position);

                    let wc = _this.map.center();
                    if (wc.x > 0 && wc.y > 0) {
                        let w = CTX.w2c(wc.x, wc.y);
                        if (w) {
                            let dist = CTX.distance(v.position, w);
                            _this.texts.cameraDist.text(displayMeter(dist, 2));
                        }
                    }

                    _this.texts.cameraLng.text(d.longitude.toFixed(5));
                    _this.texts.cameraLat.text(d.latitude.toFixed(5));

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

            this.svg = d3.select("#" + this.options.id);
        });
    }

    refresh() {
        super.refresh();

        this.texts = {
            heading: new Text(this.svg, { label: "heading", x: 15, y: 150 }),
            pitch: new Text(this.svg, { label: "pitch", x: 15, y: 170 }),
            roll: new Text(this.svg, { label: "roll", x: 15, y: 290 })
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