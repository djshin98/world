const { calc } = require("../graphics/math");

function barrier(turnPlane, properties, bcompleted) {
    return turnPlane.map((prev, points, index, buffer) => {
        if (index == 0) {
            let distance = calc.distance(points[0], points[1]);
            let result = [];

            let p1 = { x: 0, y: (properties.pixelBySize.arrow / 2) };
            let p2 = { x: -(properties.pixelBySize.arrow), y: (properties.pixelBySize.arrow / 2) };
            let arrow = calc.arrow(turnPlane, p1, p2, properties.pixelBySize.arrow);
            result = result.concat(arrow.geometry.reverse());
            result.push(points[1]);

            return {
                type: "polyline",
                geometry: result
            };
        } else {
            return {
                type: "polyline",
                geometry: [points[index], points[index + 1]]
            }
        }
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