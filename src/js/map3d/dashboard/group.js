class Group {
    constructor(svg, texts) {
        this.svg = svg.append("rect");
        this.texts = texts; //파라메터로 받은 것을 저장
        this.x = 0;
        this.y_min = Infinity;
        this.y_max = 0;
        this.height = 0;
        this.refresh();
    }

    refresh() {
        let _this = this;

        this.texts.forEach((text) => {
            this.x = text.options.x;
            if (this.y_min > text.options.y)
                this.y_min = text.options.y;
            if (this.y_max < text.options.y)
                this.y_max = text.options.y
        });

        this.height = this.y_max - this.y_min + 20;

        this.svg
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

}

module.exports = { Group: Group };