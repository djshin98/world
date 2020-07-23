const { SvgImage } = require("./svg");
class Slash extends SvgImage {
    constructor(options) {
        super(Object.assign({
            outlineWidth: 0,
            fontSize: 30,
            fontFamily: "Sans-serif",
            textLineMargin: 5,
            color: "white",
            width: 100,
            height: 100,
            div: 10
        }, options));

    }
    create(svg) {
        let div = this.options.div;
        let startx = -this.options.width / 2;
        let starty = this.options.height / 2;

        for (let i = 0; i < this.options.width; i += div) {
            svg.append("svg:line").attr("x1", startx).attr("y1", starty - (i))
                .attr("x2", startx + (i)).attr("y2", starty)
                .style("stroke", this.options.color);

            svg.append("svg:line").attr("x1", -startx).attr("y1", -starty + (i))
                .attr("x2", -startx - (i)).attr("y2", starty)
                .style("stroke", this.options.color);
        }

    }

}

module.exports = { Slash: Slash };