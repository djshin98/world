"use strict";
const { calc, rect } = require("../../../../graphics/math");
const { centerRightAngle } = require("../../../../graphics/prework");

function bypassdifficulty(turnPlane, properties, bcompleted) {
    let arrowSize = properties.pixelBySize.arrow;
    let a = properties.pixelBySize;
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

            let ret = [];
            if (properties.log == "G-M-BDD") {
                let tmp = [];
                tmp.push(p[0]);
                for (let count = 0; count < distance / arrowSize; count++) {
                    if (i % 2 == 0) {
                        tmp.push({ x: -arrowSize + height, y: count * arrowSize + arrowSize / 2 });
                        tmp.push({ x: height, y: (count + 1) * arrowSize });
                    }
                }
                tmp.push(p[2]);
                ret = {
                    type: "polyline",
                    geometry: tmp
                };
            } else if (properties.log == "G-M-BDI") {
                let tmp = [];
                let r = rect(height, p[2].y / 2, a.width, a.width);
                tmp = r.linkLine({ x: height, y: p[0].y }, { x: height, y: p[2].y });
                let p1 = { x: r.center.x, y: r.center.y - r.width / 2 };
                let p2 = { x: r.center.x, y: r.center.y + r.width / 2 };

                tmp.push({ type: "polyline", geometry: [{ x: p1.x - r.width, y: p1.y }, { x: p1.x + r.width, y: p1.y }] });
                tmp.push({ type: "polyline", geometry: [{ x: p2.x - r.width, y: p2.y }, { x: p2.x + r.width, y: p2.y }] });

                ret = ret.concat(tmp);
                ret.push({ type: "polyline", geometry: [{ x: height, y: p[0].y }, p[0]] });
                ret.push({ type: "polyline", geometry: [{ x: height, y: p[2].y }, p[2]] });
            }
            return ret;

        } else if (i == 1) {
            let ret = [];

            ret.push({
                type: "polyline",
                geometry: calc.arrow(turnPlane, { x: p[0].x, y: p[3].y }, p[0], arrowSize).geometry
            });
            ret.push({
                type: "polyline",
                geometry: calc.arrow(turnPlane, { x: p[2].x, y: p[3].y }, p[2], arrowSize).geometry

            });

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