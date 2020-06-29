const { Q } = require("../../core/e");
const { SvgImage } = require("./svg");
class Alert extends SvgImage {
    constructor(options) {
        super(options);
    }
    create(svg) {
        let opt = this.options;
        if (opt.data instanceof Array) {
            opt.data.forEach(d => {
                this._circle(svg, d, opt);
            });
        } else {
            this._circle(svg, opt.data, opt);
        }
    }
    _circle(svg, d, opt) {
        let circle = svg.append("circle").attr("cx", opt.width / 2).attr("cy", opt.height / 2);
        if (d.r) {
            circle.attr("r", d.r);
        }
        if (d.fill) {
            circle.attr("fill", d.fill);
        } else {
            circle.attr("fill", "transparent");
        }
        if (d.stroke) {
            circle.attr("stroke", d.stroke);
        }
        if (d["stroke-width"]) {
            circle.attr("stroke-width", d["stroke-width"]);
        }
    }
}

module.exports = { Alert: Alert };