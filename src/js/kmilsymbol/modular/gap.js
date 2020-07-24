const { calc } = require("../graphics/math");

function gap(turnPlane, properties, bcompleted) {
    return turnPlane.map((prev, points, index, buffer) => {
        let distance = calc.distance(points[0], points[1]);
        let width = distance / 4;
        if (index == 0) {
            let result = [];
            result.push({ x: width, y: -width });
            result.push(points[0]);
            result.push(points[1]);
            result.push({ x: width, y: points[1].y + width });

            return {
                type: "polyline",
                geometry: result
            };
        } else if (index == 2) {
            if (points[3]) {
                let result = [];
                result.push({ x: -width, y: -width });
                result.push(points[2]);
                result.push(points[3]);
                result.push({ x: -width, y: points[3].y + width });

                return {
                    type: "polyline",
                    geometry: result
                };
            }
        }
    }).end();
}

module.exports = {
    modular: gap,
    minPointCount: 2,
    maxPointCount: 4,
    properties: {
        size: {
            arrow: 50, //화살표 한쪽 선의 길이
        },
        pixelBySize: {}
    }
};