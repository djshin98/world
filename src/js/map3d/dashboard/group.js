const { Text } = require("./text");
class Group {
    constructor(svgObj, options) {
        this.parent = svgObj;
        this.options = Object.assign({
            x: 0,
            y: 0,
            width: 200,
            height: 200
        }, options);
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
    refresh(contents) {
        this.svg = this.parent.svg.append("g");
        this.svg.attr("transform", "translate(" + this.options.x + "," + this.options.y + ")")
        this.rect = this.svg.append("rect");
        let _this = this;
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
        if (contents) {
            let fontSize = parseInt(this.svg.style("font-size"));
            let padding = { x: fontSize / 2, y: fontSize / 2 };
            let lineMargin = 2;
            let lineHeight = fontSize;
            //let _this = this;
            this.texts = {};
            this.height(2 * padding.y + (this.data.length * (lineMargin + lineHeight)));
            contents.forEach((row, i) => {
                if (row.type == "text") {
                    let y = padding.y + (i * lineMargin) + (i * lineHeight);
                    _this.texts[row.name] = new Text(_this.svg, { label: row.label, x: padding.x, y: y });
                }
            });
        }
    }

    destory() {
        this.svg.remove();
    }

}

module.exports = { Group: Group };