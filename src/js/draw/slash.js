const { SvgImage } = require("./svg");
class Slash extends SvgImage {
    constructor(options) {
        super(Object.assign({
            outlineWidth: 0,
            fontSize: 30,
            fontFamily: "Sans-serif",
            textLineMargin: 5,
            color: "white",
            width: 10,
            height: 10
        }, options));

    }
    create(svg) {
        svg.append("svg:line").attr("x1", "10").attr("y1", "0")
            .attr("x2", "0").attr("y2", "10")
            .style("stroke", "rgb(0, 0, 0)");
    }

}

module.exports = { Slash: Slash };