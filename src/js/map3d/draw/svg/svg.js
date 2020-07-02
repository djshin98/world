const d3 = require('d3');
const { Q } = require("../../../core/e");
const b64start = 'data:image/svg+xml;base64,';
const svgImages = {};

function svg2Image(svg) {
    return b64start + btoa(new XMLSerializer().serializeToString(svg));
}
class SvgImage {
    constructor(options) {
        this.options = Object.assign({
            width: 100,
            height: 100
        }, options);
        this._create();
    }
    _create() {
        let template = d3.selectAll("body").append("template");
        let svg = template.append("svg").attr('width', this.options.width).attr('height', this.options.height);
        this.create(svg);
        let key;
        if (Q.isValid(this.options.index)) {
            key = this.constructor.name + this.options.index;
        } else {
            key = this.constructor.name;
        }
        svgImages[key] = {
            width: this.options.width,
            height: this.options.height,
            img: svg2Image(svg.node())
        }
        template.remove();
    }
    image() {
        let key;
        if (Q.isValid(this.options.index)) {
            key = this.constructor.name + this.options.index;
        } else {
            key = this.constructor.name;
        }
        return svgImages[key];
    }
}

module.exports = { SvgImage: SvgImage, images: svgImages };