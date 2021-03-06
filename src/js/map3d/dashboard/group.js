const { Text } = require("./text");
const { Eventable } = require("../../core/eventable");
class Group extends Eventable {
    constructor(svgObj, options) {
        super();
        this.parent = svgObj;
        this.options = Object.assign({
            alignment: "",
            x: 0,
            y: 0,
            width: 200,
            height: 200,
            border: true,
            transparent: false,
            labelWidth: 0
        }, options);
        this.windowLayoutStatus = "none";
    }
    alignment(align) {
        if (align) {
            return this.options.alignment = align;
        }
        return this.options.alignment;
    }
    width(value) {
        if (value) {
            this.options.width = value;
            if (this.rect) {
                this.rect.attr("width", this.options.width);
            }
        }
        return this.options.width;
    }
    height(value) {
        if (value) {
            this.options.height = value;
            if (this.rect) {
                this.rect.attr("height", this.options.height);
            }
        }
        return this.options.height;
    }
    translate(x, y) {
        if (this.svg) {
            this.options.x = x;
            this.options.y = y;
            this.svg.attr("transform", "translate(" + x + "," + y + ")");
        }
    }
    left() {
        return this.options.x;
    }
    top() {
        return this.options.y;
    }
    refresh(contents) {
        if (this.svg) {
            this.svg.remove();
        }
        switch (this.windowLayoutStatus) {
            case "horizontal-max":
                {
                    this.width(this.parent.width - (this.padding.x * 2));
                }
                break;
            case "max":
                {
                    this.width(this.parent.width - (this.padding.x * 2));
                    this.height(this.parent.height - (this.padding.y * 2));
                }
                break;
        }
        this.svg = this.parent.svg.append("g");

        let fontSize = parseInt(this.svg.style("font-size"));
        this.padding = { x: fontSize / 2, y: fontSize / 2 };

        this.svg.attr("transform", "translate(" + this.options.x + "," + this.options.y + ")");
        if (this.options.border == true || this.options.transparent == false) {
            this.rect = this.svg.append("rect");
            this.rect
                .attr("x", 0)
                .attr("y", 0)
                .attr("width", this.options.width)
                .attr("height", this.options.height)
                .attr("fill", "black")
                .attr("rx", "5")
                .attr("ry", "5")
                .attr("opacity", "0.2")
                .attr("stroke", "white")
                .attr("stroke-width", "1");
        }
        if (this.options.buttons && this.options.buttons.length > 0) {
            //this.options.buttons.reverse();
            let topMargin = 5;
            let margin = 5;
            let rightStartX = this.width() - this.padding.x;
            let radius = 5;
            let _this = this;
            this.options.buttons.forEach((button, i) => {
                let x = rightStartX - (radius * 2) * (i + 1) - margin * i;
                var g = this.svg.append("g")
                    .attr("transform", "translate(" + x + "," + topMargin + ")");
                _this.createButton(button, g, radius * 2, radius * 2, function(msg) {
                    _this.windowLayoutStatus = msg;
                    switch (msg) {
                        case "close":
                            _this.close();
                            break;
                        case "min":
                            _this.min();
                            break;
                        case "max":
                            _this.max();
                            break;
                        case "horizontal-max":
                            _this.horizontalMax();
                            break;
                        case "vertical-max":
                            _this.verticalMax();
                            break;
                        case "attribute":
                            _this.attribute();
                            break;
                    }
                });
            });
        }
        if (contents) {

            let lineMargin = 2;
            let lineHeight = fontSize;
            //let _this = this;
            this.texts = {};
            this.height(this.padding.y + (this.data.length * (lineMargin + lineHeight)) - lineMargin);
            let _this = this;
            contents.forEach((row, i) => {
                if (row.type == "text") {
                    let y = _this.padding.y + (i * lineMargin) + (i * lineHeight);
                    _this.texts[row.name] = new Text(_this.svg, { label: row.label, x: _this.padding.x, y: y, labelWidth: _this.options.labelWidth });
                }
            });
        }
    }

    destory() {
        this.svg.remove();
    }
    createButton(type, g, width, height, onclick) {
        let lineColor = "rgb(192, 192, 192)";

        let box = g.append("rect").attr("x", 0).attr("y", 0).attr("width", width).attr("height", height).attr("fill", "rgba(255, 255, 255, 0.1)")
            .attr("pointer-events", "fill").style('cursor', 'pointer');
        switch (type) {
            case "close":
                g.append("line").attr("x1", 0).attr("y1", 0).attr("x2", width).attr("y2", height).style("stroke", lineColor).style("stroke-width", 2);
                g.append("line").attr("x1", width).attr("y1", 0).attr("x2", 0).attr("y2", height).style("stroke", lineColor).style("stroke-width", 2);
                break;
            case "min":
                g.append("line").attr("x1", 0).attr("y1", height - 1).attr("x2", width).attr("y2", height - 1).style("stroke", lineColor).style("stroke-width", 2);
                break;
            case "max":
                g.append("rect").attr("x", 0).attr("y", 0).attr("width", width).attr("height", height).style("stroke", lineColor);
                break;
            case "horizontal-max":
                g.append("line").attr("x1", 0).attr("y1", 0).attr("x2", width).attr("y2", height / 2).style("stroke", lineColor);
                g.append("line").attr("x1", 0).attr("y1", height).attr("x2", width).attr("y2", height / 2).style("stroke", lineColor);
                break;
            case "vertical-max":
                g.append("line").attr("x1", 0).attr("y1", height / 2).attr("x2", width / 2).attr("y2", 0).style("stroke", lineColor);
                g.append("line").attr("x1", width).attr("y1", height / 2).attr("x2", width / 2).attr("y2", 0).style("stroke", lineColor);
                break;
            case "attribute":
                g.append("text").text("A").attr("x", width / 2).attr("y", 0).attr("text-anchor", "middle").attr("alignment-baseline", "hanging").style("fill", lineColor);
                break;
        }
        if (box) {
            box.on("click", function() { if (onclick) { onclick(type); } });
        }
    }
    close() {
        this.destory();
    }
    min() {

    }
    max() {
        this.translate(0, 0);
        this.width(this.parent.width - (this.padding.x * 2));
        this.height(this.parent.height - (this.padding.y * 2));
        this.refresh();
        this.hmax = true;
        this.vmax = true;
    }
    horizontalMax() {
        this.width(this.parent.width - (this.padding.x * 2));
        this.refresh();
        this.hmax = true;
    }
    verticalMax() {
        this.height(this.parent.height - (this.padding.y * 2));
        this.refresh();
        this.vmax = true;
    }
    attribute() {

    }
}

module.exports = { Group: Group };