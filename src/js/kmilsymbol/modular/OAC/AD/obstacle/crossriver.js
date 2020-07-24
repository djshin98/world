"use strict";
const { calc, rect } = require("../../../../graphics/math");
const { centerRightAngle } = require("../../../../graphics/prework");

function crossriver(turnPlane, properties, bcompleted) {
    let arrowSize = properties.pixelBySize.arrow;
    let a = properties.pixelBySize;
    let orders = [
        [0, 2],
        [1, 3]
    ];
    return turnPlane.map((prev, p, i, buffer) => {
        if (i == 0) {
            let ret = [];
            if (properties.log == "G-M-BCL") {
                ret.push(calc.arrow(turnPlane, { x: p[2].x, y: p[2].y + 10 }, p[2], a.arrow));
                ret.push(calc.arrow(turnPlane, { x: p[0].x, y: p[0].y - 10 }, p[0], a.arrow));
                ret.push({ type: "polyline", geometry: [p[0], p[2]] });
            } else if (properties.log == "G-M-BCR") {
                ret.push(calc.arrow(turnPlane, { x: p[2].x, y: p[2].y + 10 }, p[2], a.arrow, 70));
                ret.push(calc.arrow(turnPlane, { x: p[0].x, y: p[0].y - 10 }, p[0], a.arrow, 70));
                ret.push({ type: "polyline", geometry: [p[0], p[2]] });
            } else if (properties.log == "G-M-SW") {
                ret.push({ type: "polyline", geometry: [p[0], { x: p[0].x + a.arrow, y: p[0].y }] });
                ret.push({ type: "polyline", geometry: [p[2], { x: p[2].x + a.arrow, y: p[2].y }] });
                ret.push({ type: "polyline", geometry: [p[0], p[2]] });
            }
            return ret;

        }
    }, centerRightAngle, orders).end();
}

module.exports = {
    modular: crossriver,
    minPointCount: 2,
    maxPointCount: 2,
    properties: {
        size: {
            arrow: 20,
        }
    }
};