const d3 = require('d3');
const { center } = require('./dashboard/center');
const { Text } = require('./dashboard/text');
const { Group } = require('./dashboard/group');
const { CursorInfoBox } = require('./dashboard/cursorinfobox');
const { CameraInfoBox } = require('./dashboard/camerainfobox');
const { CameraAngleBox } = require('./dashboard/cameraanglebox');
const { SlopeGraphBox } = require('./dashboard/slopegraphbox');
const { Animate } = require('./dashboard/animate');
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
            new CursorInfoBox(this, { alignment: "lefttop", border: false, transparent: true, labelWidth: 50 }),
            new CameraInfoBox(this, { alignment: "lefttop", labelWidth: 50 }),
            new CameraAngleBox(this, { alignment: "lefttop", labelWidth: 50 }),

            new Animate(this, { alignment: "leftbottom", border: false, transparent: true }),
            new SlopeGraphBox(this, { alignment: "leftbottom", buttons: ["close", "min", "horizontal-max"] }),
        ]
    }
    refresh() {
        this.svg = d3.select("#" + this.options.id);
        this.svg.selectAll("*").remove();

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

        this.children.forEach((groupbox) => { groupbox.refresh(); });
        this.alignment();
    }
    alignment() {
        let padding = 5;
        let wright = this.width - padding;
        let wbottom = this.height - padding;

        let assignValue = {
            top: { left: padding, right: wright },
            bottom: { left: padding, right: wright },
            left: { top: padding, bottom: wbottom },
            right: { top: padding, bottom: wbottom },
        }
        let alignOrder = ["lefttop", "leftbottom", "righttop", "rightbottom"];
        let _this = this;
        let alignList = alignOrder.map(align => {
            let list = _this.children.filter(d => { if (d.alignment() == align) { return true; } return false; });
            return { align: align, list: list };
        }).filter(d => { return d.list.length > 0 ? true : false; });

        let margin = 3;
        alignList.forEach(av => {
            switch (av.align) {
                case "lefttop": //left,top을 기준으로 아래로 정렬된다.
                    {
                        av.list.forEach(group => {
                            let x = padding;
                            let y = assignValue.left.top;
                            group.translate(x, y);
                            assignValue.top.left = Math.max(assignValue.top.left, padding + group.width() + margin);
                            assignValue.left.top += group.height() + margin;
                        });
                    }
                    break;
                case "leftbottom":
                    {
                        av.list.forEach(group => {
                            let x = padding;
                            let y = assignValue.left.bottom - group.height();
                            group.translate(x, y);
                            assignValue.left.bottom = y - margin;
                            assignValue.bottom.left = Math.max(assignValue.bottom.left, x + group.width() + margin);
                        });
                    }
                    break;
                case "righttop":
                    {
                        av.list.forEach(group => {
                            let x = wright - group.width();
                            let y = assignValue.right.top;
                            group.translate(x, y);
                            assignValue.top.right = Math.min(assignValue.top.right, x - margin);
                            assignValue.right.top += group.height() + margin;
                        });
                    }
                    break;
                case "rightbottom":
                    {
                        av.list.forEach(group => {
                            let x = wright - group.width();
                            let y = assignValue.right.bottom - group.height();
                            group.translate(x, y);
                            assignValue.right.bottom = y - margin;
                            assignValue.bottom.right = Math.min(assignValue.bottom.right, x - margin);
                        });
                    }
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