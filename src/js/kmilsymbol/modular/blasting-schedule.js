const { calc } = require("../graphics/math");

function blasting_schedule(turnPlane, properties, bcompleted) {
    return turnPlane.map((prev, points, index, buffer) => {
        let distance = calc.distance(points[0], points[1]);
        let len = properties.pixelBySize.len;
        let count = distance / len;

        if (index == 0) {
            let result = [];

            if (properties.log == "G-M-ORP") {
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
            } else if (properties.log == "G-M-ORS") {
                if (points[2]) {
                    let width = points[2].x;
                    for (let i = 0; i < count; i++) {
                        if (i % 2 == 0) {
                            let tmpPoints = [];
                            tmpPoints.push({ x: -width, y: i * len });
                            tmpPoints.push({ x: -width, y: i * len + len });
                            result.push({ type: "polyline", geometry: tmpPoints });
                        }
                    }
                    let tmpPoints = [];
                    tmpPoints.push({ x: width, y: 0 });
                    tmpPoints.push({ x: width, y: points[1].y });
                    result.push({ type: "polyline", geometry: tmpPoints });
                } else {
                    let tmpPoints = [];
                    tmpPoints.push({ x: 0, y: 0 });
                    tmpPoints.push({ x: 0, y: points[1].y });
                    result.push({ type: "polyline", geometry: tmpPoints });
                }
            } else if (properties.log == "G-M-ORA") {
                if (points[2]) {
                    let width = points[2].x;

                    let tmpPoints = [];
                    tmpPoints.push({ x: -width, y: 0 });
                    tmpPoints.push({ x: -width, y: points[1].y });
                    result.push({ type: "polyline", geometry: tmpPoints });

                    tmpPoints = [];
                    tmpPoints.push({ x: width, y: 0 });
                    tmpPoints.push({ x: width, y: points[1].y });
                    result.push({ type: "polyline", geometry: tmpPoints });
                } else {
                    let tmpPoints = [];
                    tmpPoints.push({ x: 0, y: 0 });
                    tmpPoints.push({ x: 0, y: points[1].y });
                    result.push({ type: "polyline", geometry: tmpPoints });
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
            len: 50
        },
        pixelBySize: {}
    }
};