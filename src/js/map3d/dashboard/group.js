class Group {
    constructor(svgObj) {
        this.parent = svgObj;
        this.x = 0;
        this.y = 0;
        this.width = 200;
        this.height = 200;
    }

    refresh() {
        this.svg = this.parent.svg.append("g");
        this.rect = this.svg.append("rect");
        let _this = this;
        this.rect
            .attr("x", this.x)
            .attr("y", this.y)
            .attr("width", this.width)
            .attr("height", this.height)
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