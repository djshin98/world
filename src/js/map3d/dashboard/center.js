function center(svg, options) {
    options = Object.assign({
        width: 100,
        height: 100,
        type: "cross",
        lineLength: 100,
        forcusMargin: 10,
        color: "gray"
    }, options);
    let center = { x: options.width / 2, y: options.height / 2 };
    let lineLength = options.lineLength;
    let forcusMargin = options.forcusMargin;
    let radius = lineLength + forcusMargin;
    let color = options.color;
    if (options.type == "box") {
        let inRadius = radius - forcusMargin;
        svg.append("line")
            .attr("x1", center.x - radius)
            .attr("x2", center.x - inRadius)
            .attr("y1", center.y - radius).attr("y2", center.y - radius).attr("stroke", color);

        svg.append("line")
            .attr("x1", center.x + inRadius)
            .attr("x2", center.x + radius)
            .attr("y1", center.y - radius).attr("y2", center.y - radius).attr("stroke", color);

        svg.append("line")
            .attr("x1", center.x - radius)
            .attr("x2", center.x - inRadius)
            .attr("y1", center.y + radius).attr("y2", center.y + radius).attr("stroke", color);

        svg.append("line")
            .attr("x1", center.x + inRadius)
            .attr("x2", center.x + radius)
            .attr("y1", center.y + radius).attr("y2", center.y + radius).attr("stroke", color);

        svg.append("line")
            .attr("x1", center.x - radius)
            .attr("x2", center.x - radius)
            .attr("y1", center.y - radius).attr("y2", center.y - inRadius).attr("stroke", color);

        svg.append("line")
            .attr("x1", center.x - radius)
            .attr("x2", center.x - radius)
            .attr("y1", center.y + radius).attr("y2", center.y + inRadius).attr("stroke", color);

        svg.append("line")
            .attr("x1", center.x + radius)
            .attr("x2", center.x + radius)
            .attr("y1", center.y - radius).attr("y2", center.y - inRadius).attr("stroke", color);

        svg.append("line")
            .attr("x1", center.x + radius)
            .attr("x2", center.x + radius)
            .attr("y1", center.y + radius).attr("y2", center.y + inRadius).attr("stroke", color);


    } else if (options.type == "brace") {
        let inRadius = radius - forcusMargin;
        svg.append("line")
            .attr("x1", center.x - radius)
            .attr("x2", center.x - inRadius)
            .attr("y1", center.y - radius).attr("y2", center.y - radius).attr("stroke", color);

        svg.append("line")
            .attr("x1", center.x + inRadius)
            .attr("x2", center.x + radius)
            .attr("y1", center.y - radius).attr("y2", center.y - radius).attr("stroke", color);

        svg.append("line")
            .attr("x1", center.x - radius)
            .attr("x2", center.x - inRadius)
            .attr("y1", center.y + radius).attr("y2", center.y + radius).attr("stroke", color);

        svg.append("line")
            .attr("x1", center.x + inRadius)
            .attr("x2", center.x + radius)
            .attr("y1", center.y + radius).attr("y2", center.y + radius).attr("stroke", color);

        svg.append("line")
            .attr("x1", center.x - radius)
            .attr("x2", center.x - radius)
            .attr("y1", center.y - radius).attr("y2", center.y - inRadius).attr("stroke", color);

        svg.append("line")
            .attr("x1", center.x - radius)
            .attr("x2", center.x - radius)
            .attr("y1", center.y + radius).attr("y2", center.y + inRadius).attr("stroke", color);

        svg.append("line")
            .attr("x1", center.x + radius)
            .attr("x2", center.x + radius)
            .attr("y1", center.y - radius).attr("y2", center.y - inRadius).attr("stroke", color);

        svg.append("line")
            .attr("x1", center.x + radius)
            .attr("x2", center.x + radius)
            .attr("y1", center.y + radius).attr("y2", center.y + inRadius).attr("stroke", color);


    } else if (options.type == "circle") {
        svg.append("circle")
            .attr("cx", center.x)
            .attr("cy", center.y)
            .attr("r", radius).style("fill", "none").attr("stroke", color);
    } else {
        svg.append("line")
            .attr("x1", center.x - radius)
            .attr("x2", center.x - forcusMargin)
            .attr("y1", center.y).attr("y2", center.y).attr("stroke", color);

        svg.append("line")
            .attr("x1", center.x + forcusMargin)
            .attr("x2", center.x + radius)
            .attr("y1", center.y).attr("y2", center.y).attr("stroke", color)

        svg.append("line")
            .attr("x1", center.x).attr("x2", center.x)
            .attr("y1", center.y - radius).attr("y2", center.y - forcusMargin).attr("stroke", color)

        svg.append("line")
            .attr("x1", center.x).attr("x2", center.x)
            .attr("y1", center.y + radius).attr("y2", center.y + forcusMargin).attr("stroke", color)
    }

}

module.exports = { center: center };