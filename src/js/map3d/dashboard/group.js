class Group {
    constructor(svgObj) {
        let svg = svgObj.svg;
    }

    refresh() {
        this.svg = svg.append("g");
        this.rect = this.svg.append(rect);
        let _this = this;
        this.rect
            .attr("x", this.x)
            .attr("y", this.y_min)
            .attr("width", 200)
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