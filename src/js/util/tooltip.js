var d3 = require('d3');

class Tooltip {
    constructor(options) {
        this.options = Object.assign({
            text: "Hello",
            backgroundColor: "#ddd",
            color: "black",
            strokeColor: "black",
            border: 2,
            fontSize: 12,
            bold: false,
            fontFamily: "굴림",
            tailHeight: 30,
            tailWidth: 10,
            outlineWidth: 1,
            textLineMargin: 4
        }, options);

        var textFont = this.options.bold == true ? "bold " + this.options.fontSize + "px " + this.options.fontFamily : this.options.fontSize + "px " + this.options.fontFamily;
        var textWidth = 0;
        var textHeight = 0;
        var multipleLine = false;
        if (this.options.text.indexOf("\n") > 0) {
            multipleLine = true;
            var texts = this.options.text.split("\n");
            textWidth = texts.reduce((prev, curr) => {
                return Math.max(prev, this.getTextWidth(curr, textFont))
            }, 0);
            textHeight = this.options.fontSize * texts.length + this.options.textLineMargin * (texts.length - 1);
        } else {
            textWidth = this.getTextWidth(this.options.text, textFont);
            textHeight = this.options.fontSize;
        }
        var padding = {
            left: this.options.fontSize / 2,
            top: this.options.fontSize / 2,
            right: this.options.fontSize / 2,
            bottom: this.options.fontSize,
        }
        var border = this.options.border;
        var box = {
            width: border * 2 + padding.left + padding.right + textWidth + this.options.outlineWidth * 2,
            height: border * 2 + padding.top + padding.bottom + textHeight + this.options.tailHeight + this.options.outlineWidth * 2
        }
        var html = d3.selectAll("body")
            .append("svg")
            .attr('width', box.width)
            .attr('height', box.height)
            .append('g');

        var rect = html.append("rect")
            .attr('x', this.options.outlineWidth)
            .attr('y', this.options.outlineWidth)
            .attr('rx', this.options.fontSize / 2)
            .attr('ry', this.options.fontSize / 2)
            .attr('width', box.width - (this.options.outlineWidth * 2))
            .attr('height', box.height - this.options.tailHeight)
            .attr("stroke", this.options.strokeColor)
            .attr("stroke-width", this.options.outlineWidth)
            .style('fill', this.options.backgroundColor);

        if (multipleLine) {
            var texts = this.options.text.split("\n");
            texts.forEach((text, i) => {
                html.append('text').text(text).attr("x", box.width / 2)
                    .attr("y", this.options.outlineWidth + padding.top + (i + 1) * (this.options.fontSize) + i * this.options.textLineMargin)
                    .attr("text-anchor", "middle").attr("alignment-baseline", "bottom")
                    .attr("font-family", this.options.fontFamily)
                    .attr("font-size", this.options.fontSize + "px").attr("fill", this.options.color);
            });
        } else {
            html.append('text').text(this.options.text).attr("x", box.width / 2).attr("y", (box.height - this.options.tailHeight - padding.bottom / 2))
                .attr("text-anchor", "middle").attr("alignment-baseline", "bottom")
                .attr("font-family", this.options.fontFamily)
                .attr("font-size", this.options.fontSize + "px").attr("fill", this.options.color);
        }


        var path = html.append("path");

        var data = [{
            x: box.width / 2 - this.options.tailWidth / 2,
            y: box.height - this.options.tailHeight // - (this.options.outlineWidth)
        }, {
            x: box.width / 2,
            y: box.height
        }, {
            x: box.width / 2 + this.options.tailWidth / 2,
            y: box.height - this.options.tailHeight // - (this.options.outlineWidth)
        }];

        var lineFunction = d3.svg.line().x(function(d) {
            return d.x;
        }).y(function(d) {
            return d.y;
        }).interpolate("linear");

        path.attr("d", lineFunction(data)).attr("stroke", this.options.strokeColor).attr("fill", this.options.backgroundColor);
    }

    getTextWidth(text, font) {
        // re-use canvas object for better performance
        var canvas = this.getTextWidth.canvas || (this.getTextWidth.canvas = document.createElement("canvas"));
        var context = canvas.getContext("2d");
        context.font = font;
        var metrics = context.measureText(text);
        return metrics.width;
    }
}

module.exports = { Tooltip: Tooltip };