const { Text } = require('./text');
const { Group } = require('./group');
const { CTX } = require('../ctx');
const { $$ } = require('../../core/e');
class CursorInfoBox extends Group {
    constructor(dashboard, options) {
        super(dashboard, options);
        this.map = dashboard.map;

        //this.update(options);
        let _this = this;
        this.moveEvent = this.map.oliveCursor.listenEvent("move", (v) => {
            if (_this.texts) {
                if (v) {
                    _this.texts.longtitude.text(v.longitude.toFixed(5));
                    _this.texts.latitude.text(v.latitude.toFixed(5));
                    _this.texts.height.text(CTX.displayMeter(v.height, 2));
                    let cc = _this.map.oliveCamera.position();
                    let vc = CTX.d2c(v);
                    let dist = CTX.distance(cc, vc);

                    _this.texts.distance.text(CTX.displayMeter(dist, 2));
                } else {
                    _this.texts.longtitude.text("");
                    _this.texts.latitude.text("");
                    _this.texts.height.text("");
                    _this.texts.distance.text("");
                }
            }
        });
        this.width(100);
        this.width(100);
    }
    refresh() {
        super.refresh();
        //$$(this.svg).style("font-size")
        this.texts = {
            longtitude: new Text(this.svg, { label: "경도", x: 15, y: 10 }),
            latitude: new Text(this.svg, { label: "위도", x: 15, y: 30 }),
            height: new Text(this.svg, { label: "높이", x: 15, y: 50 }),
            distance: new Text(this.svg, { label: "거리", x: 15, y: 70 })
        }
    }
    destroy() {

        if (this.moveEvent) {
            this.map.oliveCursor.removeEvent(this.moveEvent);
            delete(this.moveEvent);
        }
    }
}
module.exports = { CursorInfoBox: CursorInfoBox };