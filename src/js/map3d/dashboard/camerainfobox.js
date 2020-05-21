const { Text } = require('./text');
const { Group } = require('./group');


class CameraInfoBox extends Group {
    constructor(dashboard, options) {

        super(dashboard, options);

        this.map = dashboard.map;
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
                            _this.texts.cameraDist.text(CTX.displayMeter(dist, 2));
                        }
                    }

                    _this.texts.cameraLng.text(d.longitude.toFixed(5));
                    _this.texts.cameraLat.text(d.latitude.toFixed(5));

                } else {
                    _this.texts.cameraDist.text('');
                    _this.texts.cameraLng.text('');
                    _this.texts.cameraLat.text('');



                }
            }

        });
        this.width(200);
        this.height(80);


        this.data = [
            { type: "text", name: "중심 경도", label: "중심 경도" },
            { type: "text", name: "중심 위도", label: "중심 위도" },
            { type: "text", name: "거리", label: "거리" }
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

module.exports = { CameraInfoBox: CameraInfoBox };