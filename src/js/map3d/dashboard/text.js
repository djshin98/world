class Text {
    constructor(svg, options) {
        this.options = Object.assign({
            x: 0,
            y: 0,
            text: "",
            labelWidth: 0,
            //fontFamily: "sans-serif",
            fontSize: "10",
            //fill: "black"
        }, options);
        this.svg = svg.append("g").attr("transform", "translate(" + this.options.x + "," + this.options.y + ")");
        if (this.options.label) {
            this.svgLabel = this.svg.append("text");
        }
        this.svgText = this.svg.append("text");
        this.refresh();
    }
    refresh() {
        let _this = this;
        let t = this.options.text;
        if (this.options.label && this.options.labelWidth > 0) {
            let labelText = this.options.label + " : ";
            this.svgLabel.text(labelText)
                .attr("x", _this.options.labelWidth)
                .attr("y", 0)
                .attr("text-anchor", "end")
                .attr("font-family", _this.options.fontFamily)
                .attr("font-size", _this.options.fontSize)
                .attr("fill", _this.options.fill)
                .attr("alignment-baseline", "hanging");
        } else if (this.options.label) {
            t = this.options.label + " : " + this.options.text;
        }
        this.svgText.text(t)
            .attr("x", function(d) { return _this.options.x + _this.options.labelWidth + 3; })
            .attr("y", 0)
            .attr("font-family", _this.options.fontFamily)
            .attr("font-size", _this.options.fontSize)
            .attr("fill", _this.options.fill)
            .attr("alignment-baseline", "hanging")
            .attr("text-anchor", "start");
    }
    translate(x, y) {
        this.options.x = x;
        this.options.y = y;
        this.svg.attr("transform", "translate(" + this.options.x + "," + this.options.y + ")");
    }
    text(t) {
        this.options.text = t;
        let lt = this.options.text;
        if (this.options.label && this.options.labelWidth == 0) {
            lt = this.options.label + " : " + this.options.text;
        }
        this.svgText.text(lt);
    }
    fill(t) {
        this.options.fill = t;
        this.svgText.attr("fill", _this.options.fill);
    }
    destory() {
        this.svgText.remove();
        if (this.options.label) {
            this.svgLabel.remove();
        }
        this.svg.remove();
    }
}
module.exports = { Text: Text };