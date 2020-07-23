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
            if (properties.log == "G-M-BCE") {
                for (let count = 0; count < distance / width; count++) {
                    ret.push({ type: "polyline", geometry: [{ x: 0, y: count * width }, { x: 0, y: (count + 1) * width - width / 7 }] });
                }
                if (p[3]) {
                    for (let count = 0; count < distance / width; count++) {
                        ret.push({ type: "polyline", geometry: [{ x: p[3].x, y: count * width }, { x: p[3].x, y: (count + 1) * width - width / 7 }] });
                    }
                }
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