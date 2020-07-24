"use strict";
const { calc, rect } = require("../../../../graphics/math");
const { centerRightAngle } = require("../../../../graphics/prework");

function obstacle(turnPlane, properties, bcompleted) {
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
            if (properties.log == "G-M-OGD") {
                let triPoints = [p[2], { x: -distance / 2, y: p[1].y }, { x: distance / 2, y: p[1].y }];
                ret.push({
                    type: "polygon",
                    geometry: triPoints
                });
                ret.push({ type: "polyline", geometry: [p[0], p[1]] });
            } else if (properties.log == "G-M-OGG") {
                let triPoints = [p[2], { x: -distance / 2, y: p[1].y }, { x: distance / 2, y: p[1].y }, p[2]];
                ret.push({
                    type: "polyline",
                    geometry: triPoints
                });
                ret.push({ type: "polyline", geometry: [p[0], p[1]] });
            }
            return ret;

        }
    }, centerRightAngle, orders).end();
}

module.exports = {
    modular: obstacle,
    minPointCount: 1,
    maxPointCount: 2,
    properties: {
        size: {
            arrow: 20,
        }
    }
};