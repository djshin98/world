const d3 = require('d3');
const b64start = 'data:image/svg+xml;base64,';
//const svgImages = {};

function svg2Image(svg) {
    return b64start + new Buffer(new XMLSerializer().serializeToString(svg)).toString('base64');
    //btoa(new XMLSerializer().serializeToString(svg));
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
        svg.attr('width', this.options.width).attr('height', this.options.height);
        let key;
        if (Q.isValid(this.options.index)) {
            key = this.constructor.name + this.options.index;
        } else {
            key = this.constructor.name;
        }
        this.output = {
            width: this.options.width,
            height: this.options.height,
            img: svg2Image(svg.node())
        };
        template.remove();
    }
    image() {
        let key;
        if (Q.isValid(this.options.index)) {
            key = this.constructor.name + this.options.index;
        } else {
            key = this.constructor.name;
        }
        return this.output;
    }
    textWidth(text, font) {
        // re-use canvas object for better performance
        var canvas = this.textWidth.canvas || (this.textWidth.canvas = document.createElement("canvas"));
        var context = canvas.getContext("2d");
        context.font = font;
        var metrics = context.measureText(text);
        return metrics.width;
    }
    width() {
        return this.options.width;
    }
    height() {
        return this.options.height;
    }
}

module.exports = { SvgImage: SvgImage };