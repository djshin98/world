class Text {
    constructor(svg, options) {
        this.options = Object.assign({
            x: 0,
            y: 0,
            text: "__",
            fontFamily: "sans-serif",
            fontSize: "16px",
            fill: "black"
        }, options);
        this.svg = svg.append("text");

        this.refresh();
    }
    refresh() {
        let _this = this;
        let text = "";
        if (this.options.label) {
            text = this.options.label + " : " + this.options.text;
        } else {
            text = this.options.text;
        }
        this.svg.text(text)
            .attr("x", function(d) { return _this.options.x; })
            .attr("y", function(d) { return _this.options.y; })
            .attr("font-family", _this.options.fontFamily)
            .attr("font-size", _this.options.fontSize)
            .attr("fill", _this.options.fill)
            .attr("alignment-baseline", "hanging")
            .attr("text-anchor", "start");
    }
    pos(x, y) {
        this.options.x = x;
        this.options.y = y;
        this.svg.attr("x", this.options.x);
        this.svg.attr("y", this.options.y);
    }
    text(t) {
        this.options.text = t;
        let text = "";
        if (this.options.label) {
            text = this.options.label + " : " + this.options.text;
        } else {
            text = this.options.text;
        }

        this.svg.text(text);
    }
    fill(t) {
        this.options.fill = t;
        this.svg.attr("fill", _this.options.fill);
    }
    destory() {
        this.svg.remove();
    }
}
module.exports = { Text: Text };