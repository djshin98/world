"use strict";
const { calc, rect } = require("../../../../graphics/math");
const { centerRightAngle } = require("../../../../graphics/prework");

function ferry(turnPlane, properties, bcompleted) {
    let arrowSize = properties.pixelBySize.arrow;
    let a = properties.pixelBySize;
    let orders = [
        [0, 2],
        [1, 3]
    ];
    return turnPlane.map((prev, p, i, buffer) => {
        if (i == 0) {
            let ret = [];
            if (properties.log == "G-M-BCF") {
                ret.push(calc.arrow(turnPlane, p[2], p[0], a.arrow));
                ret.push(calc.arrow(turnPlane, p[0], p[2], a.arrow));
                ret.push({ type: "polyline", geometry: [p[0], p[2]] });
            }
            return ret;

        }
    }, centerRightAngle, orders).end();
}

module.exports = {
    modular: ferry,
    minPointCount: 2,
    maxPointCount: 2,
    properties: {
        size: {
            arrow: 20,
        }
    }
};