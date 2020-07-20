const { calc } = require("../graphics/math");

function barrier(turnPlane, properties, bcompleted) {
    return turnPlane.map((prev, points, index, buffer) => {
        let distance = calc.distance(points[index], points[index + 1]);
        let result = [];

        if (index != 0)
            result.push(points[index]);

        let arrowSize = properties.pixelBySize.arrow;
        let p1 = { x: 0, y: (arrowSize / 2) };
        let p2 = { x: -(arrowSize), y: (arrowSize / 2) };
        let arrow = calc.arrow(turnPlane, p1, p2, arrowSize);
        result = result.concat(arrow.geometry.reverse());
        result.push(points[index + 1]);

        return {
            type: "polyline",
            geometry: result
        };
    }).end();
}

module.exports = {
    modular: barrier,
    minPointCount: 1,
    properties: {
        size: {
            arrow: 40, //화살표 한쪽 선의 길이
        },
        pixelBySize: {}
    }
};