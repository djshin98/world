"use strict";
const { calc, rect } = require("../graphics/math");
const { centerRightAngle } = require("../graphics/prework");

function breakthrough(turnPlane, properties, bcompleted) {
    let arrowSize = properties.pixelBySize.arrow;
    let a = properties.annotations;
    let orders = [
        [0, 2],
        [1, 3]
    ];
    return turnPlane.reduce((prev, p, i, buffer) => {
        if (i == 0) {
            return { type: "polyline", geometry: [p[0], p[2]] };
        } else if (i == 1) {
            let ret = calc.annotationOnLine(a, "b", 0.5, p[1], p[3]);
            ret.push(calc.arrow(turnPlane, p[3], p[1], arrowSize));
            return ret;
        }
    }, centerRightAngle, orders).end();
}

module.exports = {
    modular: breakthrough,
    minPointCount: 2,
    maxPointCount: 3,
    properties: {
        size: {
            arrow: 20,
        },
        annotations: {
            b: {
                value: "P",
                anchor: { x: 0, y: 0 }
            },
            c: {
                value: "C",
                anchor: { x: 0, y: 0 }
            }
        }
    }
};