"use strict";
const { calc, rect } = require("../../../../graphics/math");
const { centerRightAngle } = require("../../../../graphics/prework");

function wade(turnPlane, properties, bcompleted) {
    let arrowSize = properties.pixelBySize.arrow;
    let a = properties.pixelBySize;
    let orders = [
        [0, 2],
        [1, 3]
    ];
    return turnPlane.map((prev, p, i, buffer) => {
        if (i == 0) {
            let ret = [];
            let distance = calc.distance(p[0], p[2]);
            let width = distance / 3;

            for (let count = 0; count < distance / width; count++) {
                ret.push({ type: "polyline", geometry: [{ x: 0, y: count * width }, { x: 0, y: (count + 1) * width - width / 7 }] });
            }
            if (p[3]) {
                for (let count = 0; count < distance / width; count++) {
                    ret.push({ type: "polyline", geometry: [{ x: p[3].x, y: count * width }, { x: p[3].x, y: (count + 1) * width - width / 7 }] });
                }
            }

            if (properties.log == "G-M-BCE") {

            } else if (properties.log == "G-M-BCD") {
                ret.push(turnPlane.turnStack(p, 1, 3, (points) => {
                    let result;
                    let d = calc.distance(points[1], points[3]);
                    let tmpPoints = [];
                    for (let i = 0; i < d / a.arrow; i++) {
                        tmpPoints.push({ x: 0, y: i * a.arrow });
                        tmpPoints.push({ x: -a.arrow, y: i * a.arrow + a.arrow / 2 });
                    }
                    result = { type: "polyline", geometry: tmpPoints };
                    return result;
                }));
            }
            return ret;

        }
    }, centerRightAngle, orders).end();
}

module.exports = {
    modular: wade,
    minPointCount: 1,
    maxPointCount: 3,
    properties: {
        size: {
            arrow: 20,
        }
    }
};