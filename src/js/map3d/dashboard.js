const d3 = require('d3');
const { center } = require('./dashboard/center');
const { Text } = require('./dashboard/text');
const { Group } = require('./dashboard/group');
const { CameraInfoBox } = require('./dashboard/camerainfobox');

function displayMeter(f, d) {
    if (f >= 1000) {
        return (f / 1000).toFixed(d) + " km";
    }
    return f.toFixed(d) + "m";
}
class Dashboard {
    constructor(map, options) {
        this.map = map;
        this.width = 0;
        this.height = 0;
        this.update(options);
        let _this = this;
        this.moveEvent = this.map.oliveCursor.listenEvent("move", (v) => {
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

        });
        this.selectedEvent = this.map.oliveCursor.listenEvent("selected", (v) => {

        });
        this.changedEvent = this.map.oliveCamera.listenEvent("changed", (v) => {
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

        });

    }
    update(options) {
        this.options = Object.assign({}, options);
        if (this.width > 0 && this.height > 0) {
            this.refresh();
        }

    }
    refresh() {
        let svg = d3.select("#" + this.options.id);
        svg.selectAll("*").remove();

        if (this.options.center) {
            center(svg, {
                width: this.width,
                height: this.height,
                type: this.options.center.type,
                lineLength: 100,
                forcusMargin: 10,
                color: this.options.center.color ? this.options.center.color : "gray"
            });
        }

        this.groupboxs.forEach((groupbox) => { groupbox.refresh(); });
    }
    resize(x, y, width, height) {
        this.width = parseInt(width);
        this.height = parseInt(height);
        this.refresh();
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

module.exports = { Dashboard: Dashboard };