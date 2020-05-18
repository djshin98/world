const d3 = require('d3');
const { center } = require('./dashboard/center');
const { Text } = require('./dashboard/text');
class Dashboard {
    constructor(map, options) {
        this.map = map;
        this.width = 0;
        this.height = 0;
        this.update(options);
        let _this = this;
        this.moveEvent = this.map.oliveCursor.listenEvent("move", (v) => {
            _this.texts.longtitude.text(v.longitude);
            _this.texts.latitude.text(v.latitude);
            _this.texts.height.text(v.height);

            let wc = _this.map.center();
            let w = CTX.w2d(wc.x, wc.y);
            let dist = CTX.distanceD(v, w);

            _this.texts.distance.text(dist);

        });
        this.selectedEvent = this.map.oliveCursor.listenEvent("selected", (v) => {

        });
        this.changedEvent = this.map.oliveCamera.listenEvent("changed", (v) => {

            let d = CTX.c2d(v.position);
            let wc = _this.map.center();
            let w = CTX.w2c(wc.x, wc.y);
            let dist = CTX.distance(v.position, w);
            _this.texts.cameraLng.text(d.longitude);
            _this.texts.cameraLat.text(d.latitude);
            _this.texts.cameraDist.text(dist);
            _this.texts.heading.text(v.heading);
            _this.texts.pitch.text(v.pitch);
            _this.texts.roll.text(v.roll);

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
                type: this.options.center,
                lineLength: 100,
                forcusMargin: 10,
                color: "gray"
            });
        }
        this.texts = {
            longtitude: new Text(svg, { label: "경도", x: 15, y: 10 }),
            latitude: new Text(svg, { label: "위도", x: 15, y: 30 }),
            height: new Text(svg, { label: "높이", x: 15, y: 50 }),
            distance: new Text(svg, { label: "거리", x: 15, y: 70 }),
            cameraLng: new Text(svg, { label: "중심 경도", x: 15, y: 90 }),
            cameraLat: new Text(svg, { label: "중심 위도", x: 15, y: 110 }),
            cameraDist: new Text(svg, { label: "거리", x: 15, y: 130 }),
            heading: new Text(svg, { label: "heading", x: 15, y: 150 }),
            pitch: new Text(svg, { label: "pitch", x: 15, y: 170 }),
            roll: new Text(svg, { label: "roll", x: 15, y: 190 })
        }
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