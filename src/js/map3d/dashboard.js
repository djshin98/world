const d3 = require('d3');
const { center } = require('./dashboard/center');
const { Text } = require('./dashboard/text');
const { Group } = require('./dashboard/group');

const { CursorInfoBox } = require('./dashboard/cursorinfobox');
const { CameraInfoBox } = require('./dashboard/camerainfobox');
const { CameraAngleBox } = require('./dashboard/cameraanglebox');


class Dashboard {
    constructor(map, options) {
        this.map = map;
        this.width = 0;
        this.height = 0;
        this.update(options);
        let _this = this;

        this.selectedEvent = this.map.oliveCursor.listenEvent("selected", (v) => {

        });
        this.svg = d3.select("#" + this.options.id);
    }
    update(options) {
        this.options = Object.assign({}, options);
        if (this.width > 0 && this.height > 0) {
            this.refresh();
        }
        this.children = [
            new CursorInfoBox(this, { alignment: "lefttop" }),
            new CameraInfoBox(this, { alignment: "lefttop" }),
            new CameraAngleBox(this, { alignment: "lefttop" }),
        ]
    }
    refresh() {

        this.svg.selectAll("*").remove();

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
        this.children.forEach((group) => { group.refresh(); });
    }
    resize(x, y, width, height) {
        this.width = parseInt(width);
        this.height = parseInt(height);
        this.refresh();
    }
    destroy() {

        if (this.selectedEvent) {
            this.map.oliveCursor.removeEvent(this.selectedEvent);
            delete(this.selectedEvent);
        }
    }
}

module.exports = { Dashboard: Dashboard };