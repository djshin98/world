"use strict";
const { calc, rect } = require("../../../../graphics/math");
const { centerRightAngle } = require("../../../../graphics/prework");

function bypassdifficulty(turnPlane, properties, bcompleted) {
    let arrowSize = properties.pixelBySize.arrow;
    let orders = [
        [0, 2],
        [1, 3]
    ];
    return turnPlane.map((prev, p, i, buffer) => {
        if (i == 0) {
            let distance = calc.distance(p[0], p[2]);
            let height = 0;
            if (p[3])
                height = p[3].x;

            let tmp = [];
            tmp.push(p[0]);
            for (let count = 0; count < distance / arrowSize; count++) {
                if (i % 2 == 0) {
                    tmp.push({ x: -arrowSize + height, y: count * arrowSize + arrowSize / 2 });
                    tmp.push({ x: height, y: (count + 1) * arrowSize });
                }
            }
            tmp.push(p[2]);
            let ret = {
                type: "polyline",
                geometry: tmp
            };

            return ret;

        } else if (i == 1) {
            let a = properties.annotations;
            let aname;

            let ret = [];
            if (properties.log == "G-M-BDD") {


                ret.push({
                    type: "polyline",
                    geometry: calc.arrow(turnPlane, { x: p[0].x, y: p[3].y }, p[0], arrowSize).geometry
                });
                ret.push({
                    type: "polyline",
                    geometry: calc.arrow(turnPlane, { x: p[2].x, y: p[3].y }, p[2], arrowSize).geometry

                });
            }

            return ret;
        }
    }, centerRightAngle, orders).end();
}

module.exports = {
    modular: bypassdifficulty,
    minPointCount: 2,
    maxPointCount: 3,
    properties: {
        size: {
            arrow: 20,
        },
        annotations: {
            b: {
                value: "B",
                anchor: { x: 0, y: 0 }
            },
            c: {
                value: "C",
                anchor: { x: 0, y: 0 }
            }
        }
    }
};