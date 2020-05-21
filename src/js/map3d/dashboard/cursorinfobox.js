const { Text } = require('./text');
const { Group } = require('./group');
class CursorInfoBox extends Group {
    constructor(dashboard, options) {
        super(dashboard);
        this.map = dashboard.map;
        this.width = 0;
        this.height = 0;
        //this.update(options);
        let _this = this;
        this.moveEvent = this.map.oliveCursor.listenEvent("move", (v) => {
            if (_this.texts) {
                if (v) {
                    _this.texts.longtitude.text(v.longitude.toFixed(5));
                    _this.texts.latitude.text(v.latitude.toFixed(5));
                    _this.texts.height.text(v.height.toFixed(2) + " m");
                    let cc = _this.map.oliveCamera.position();
                    let vc = CTX.d2c(v);
                    let dist = CTX.distance(cc, vc);

                    _this.texts.distance.text(displayMeter(dist, 2));
                } else {
                    _this.texts.longtitude.text("");
                    _this.texts.latitude.text("");
                    _this.texts.height.text("");
                    _this.texts.distance.text("");
                }
            }
        });

    }
    refresh() {
        super.refresh();
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