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
        }
        return this.options.width;
    }
    height(value) {
        if (value) {
            this.options.height = value;
        }
        return this.options.height;
    }
    refresh() {
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
    }

    destory() {
        this.svg.remove();
    }

}

module.exports = { Group: Group };