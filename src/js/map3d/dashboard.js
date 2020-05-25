const d3 = require('d3');
const { center } = require('./dashboard/center');
const { Text } = require('./dashboard/text');
const { Group } = require('./dashboard/group');
const { CursorInfoBox } = require('./dashboard/cursorinfobox');
const { CameraInfoBox } = require('./dashboard/camerainfobox');
const { CameraAngleBox } = require('./dashboard/cameraanglebox');
const { SlopeGraphBox } = require('./dashboard/slopegraphbox');
class Dashboard {
    constructor(map, options) {
        this.map = map;
        this.width = 0;
        this.height = 0;
        this.update(options);
        let _this = this;


    }
    update(options) {
        this.options = Object.assign({}, options);
        if (this.width > 0 && this.height > 0) {
            this.refresh();
        }
        this.children = [
            //new CursorInfoBox(this, { alignment: "lefttop", x: 10, y: 0 }),
            //new CameraInfoBox(this, { alignment: "lefttop", x: 10, y: 70 }),
            //new CameraAngleBox(this, { alignment: "lefttop", x: 10, y: 130 }),
            //new SlopeGraphBox(this, { alignment: "bottom" })
        ]
    }
    refresh() {
        this.svg = d3.select("#" + this.options.id);
        this.svg.selectAll("*").remove();

        /*
        if (this.options.center) {
            center(this.svg, {
                width: this.width,
                height: this.height,
                type: this.options.center.type,
                lineLength: 100,
                forcusMargin: 10,
                color: this.options.center.color ? this.options.center.color : "gray"
            });
        }
        */

        this.children.forEach((groupbox) => { groupbox.refresh(); });
        this.alignment();
    }
    alignment() {
        let padding = 5;
        let margin = 3;
        let assignValue = {
            top: { left: 0, right: 0 },
            bottom: { left: 0, right: 0 },
            left: { top: 0, bottom: 0 },
            right: { top: 0, bottom: 0 },
        }
        let alignOrder = ["top", "bottom", "left", "right", "lefttop", "leftbottom", "righttop", "rightbottom"];
        let _this = this;
        let alignList = alignOrder.map(align => {
            let list = _this.children.filter(d => { if (d.alignment() == align) { return true; } return false; });
            return { align: align, list: list };
        }).filter(d => { return d.list.length > 0 ? true : false; });

        alignList.forEach(av => {
            switch (av.align) {
                case "top":
                    {}
                    break;
                case "bottom":
                    {
                        av.list.forEach(group => {
                            //left.bottom = 
                            //group.translate(bottom.left,)
                        });
                    }
                    break;
                case "left":
                    {}
                    break;
                case "right":
                    {}
                    break;
                case "lefttop":
                    {}
                    break;
                case "leftbottom":
                    {}
                    break;
                case "righttop":
                    {}
                    break;
                case "rightbottom":
                    {}
                    break;
            }
        });
    }

    resize(x, y, width, height) {
        this.width = parseInt(width);
        this.height = parseInt(height);
        this.refresh();
    }
    destroy() {}
}

module.exports = { Dashboard: Dashboard };