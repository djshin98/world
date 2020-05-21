const { Text } = require('./text');
const { Group } = require('./group');


class CameraInfoBox extends Group {
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

        });

        this.texts = {
            cameraLng: new Text(svg, { label: "중심 경도", x: 15, y: 90 }),
            cameraLat: new Text(svg, { label: "중심 위도", x: 15, y: 110 }),
            cameraDist: new Text(svg, { label: "거리", x: 15, y: 130 }),
        }
    }

    refresh() {
        super.refresh();
        this.texts = {
            cameraLng: new Text(svg, { label: "중심 경도", x: 15, y: 90 }),
            cameraLat: new Text(svg, { label: "중심 위도", x: 15, y: 110 }),
            cameraDist: new Text(svg, { label: "거리", x: 15, y: 130 })
        }
    }
    destroy() {
        if (this.moveEvent) {
            this.map.oliveCursor.removeEvent(this.moveEvent);
            delete(this.moveEvent);
        }
        if (this.selectedEvent) {
            this.map.oliveCursor.removeEvent(this.selectedEvent);
            delete(this.selectedEvent);
        }
        if (this.changedEvent) {
            this.map.oliveCamera.removeEvent(this.changedEvent);
            delete(this.changedEvent);
        }

    }
}

module.exports = { CameraInfoBox: CameraInfoBox };