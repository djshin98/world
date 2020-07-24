const { calc } = require("../graphics/math");

function blasting_schedule(turnPlane, properties, bcompleted) {
    return turnPlane.map((prev, points, index, buffer) => {
        let distance = calc.distance(points[0], points[1]);
        let len = 10;
        let count = distance / len;

        if (index == 0) {
            let result = [];

            if (points[2]) {
                let width = points[2].x;
                for (let i = 0; i < count; i++) {
                    if (i % 2 == 0) {
                        let points = [];
                        points.push({ x: -width, y: i * len });
                        points.push({ x: -width, y: i * len + len });
                        result.push({ type: "polyline", geometry: points });
                        points = [];
                        points.push({ x: width, y: i * len });
                        points.push({ x: width, y: i * len + len });
                        result.push({ type: "polyline", geometry: points });
                    }
                }
            } else {
                for (let i = 0; i < count; i++) {
                    if ((i % 2) == 0) {
                        let points = [];
                        points.push({ x: 0, y: i * len });
                        points.push({ x: 0, y: i * len + len });
                        result.push({ type: "polyline", geometry: points });
                    }
                }
            }

            return result;
        }
    }).end();
}

module.exports = {
    modular: blasting_schedule,
    minPointCount: 2,
    maxPointCount: 3,
    properties: {
        size: {
            arrow: 50, //화살표 한쪽 선의 길이
        },
        pixelBySize: {}
    }
};