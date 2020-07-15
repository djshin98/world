const { SvgImage } = require("./svg");
class Annotation extends SvgImage {
    constructor(options) {
        super(Object.assign({
            outlineWidth: 0,
            fontSize: 20,
            fontFamily: "Sans-serif",
            textLineMargin: 5,
            color: "black"
        }, options));

    }
    create(svg) {
        let border = 0;
        let padding = { left: 0, top: 0, right: 0, bottom: 0 }
        let textWidth = 0;
        let textHeight = 0;
        let multipleLine = false;
        let textFont = this.options.fontSize + "px " + this.options.fontFamily;
        if (this.options.text.indexOf("\n") > 0) {
            multipleLine = true;
            let texts = this.options.text.split("\n");
            textWidth = texts.reduce((prev, curr) => {
                return Math.max(prev, this.textWidth(curr, textFont))
            }, 0);
            textHeight = this.options.fontSize * texts.length + this.options.textLineMargin * (texts.length - 1);
        } else {
            textWidth = this.textWidth(this.options.text, textFont);
            textHeight = this.options.fontSize;
        }

        this.box = {
            width: border * 2 + padding.left + padding.right + textWidth,
            height: border * 2 + padding.top + padding.bottom + textHeight
        };
        /*
                if (this.options.taildirection == "bottom" || this.options.taildirection == "top") {
                    box.width = border * 2 + padding.left + padding.right + textWidth
                    box.height = border * 2 + padding.top + padding.bottom + textHeight;

                } else if (this.option.taildirection == "left" || this.options.taildirection == "right") {
                    box.width = border * 2 + padding.left + padding.right + textWidth + this.options.outlineWidth * 2 + this.options.tailHeight
                    box.height = border * 2 + padding.top + padding.bottom + textHeight + this.options.outlineWidth * 2
                }
        */
        if (multipleLine) {
            var texts = this.options.text.split("\n");
            texts.forEach((text, i) => {
                svg.append('text').text(text).attr("x", this.box.width / 2)
                    .attr("y", this.options.outlineWidth + padding.top + (i + 1) * (this.options.fontSize) + i * this.options.textLineMargin)
                    .attr("text-anchor", "middle").attr("alignment-baseline", "bottom")
                    .attr("font-family", this.options.fontFamily)
                    .attr("font-size", this.options.fontSize + "px").attr("fill", this.options.color);
            });
        } else {
            svg.append('text').text(this.options.text).attr("x", this.box.width / 2).attr("y", (this.box.height - padding.bottom / 2))
                .attr("text-anchor", "middle").attr("alignment-baseline", "bottom")
                .attr("font-family", this.options.fontFamily)
                .attr("font-size", this.options.fontSize + "px").attr("fill", this.options.color);
        }
    }
    width() {
        return this.box.width;
    }
    height() {
        return this.box.height;
    }
}

module.exports = { Annotation: Annotation };