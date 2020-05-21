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

    refresh() {
        this.svg = this.parent.svg.append("g");
        this.rect = this.svg.append("rect");
        let _this = this;
        this.rect
            .attr("x", this.options.x)
            .attr("y", this.options.y)
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