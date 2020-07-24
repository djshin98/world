"use strict";
const { calc, rect } = require("../../../../graphics/math");
const { centerRightAngle } = require("../../../../graphics/prework");

function fortressdefence(turnPlane, properties, bcompleted) {
    let arrowSize = properties.pixelBySize.arrow;
    let a = properties.pixelBySize;
    let orders = [
        [0, 2],
        [1, 3]
    ];
    return turnPlane.map((prev, p, i, buffer) => {
        let distance = calc.distance(p[i], p[i + 1]);

        let ret = [];

        if (properties.log == "G-M-SL") {
            let tmp = [];
            tmp.push(p[i]);
            for (let count = 0; count < distance / arrowSize; count++) {
                if (count * arrowSize < distance) {
                    if (count % 2 == 1) {
                        tmp.push({ x: -arrowSize, y: count * arrowSize });
                        tmp.push({ x: -arrowSize, y: (count + 1) * arrowSize })
                    } else {
                        tmp.push({ x: 0, y: count * arrowSize });
                        tmp.push({ x: 0, y: (count + 1) * arrowSize });
                    }
                }
            }
            tmp.push(p[i + 1]);
            ret = {
                type: "polyline",
                geometry: tmp
            };
        }

        return ret;
    }).end();
}

module.exports = {
    modular: fortressdefence,
    minPointCount: 2,
    properties: {
        size: {
            arrow: 20,
            width: 30,
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