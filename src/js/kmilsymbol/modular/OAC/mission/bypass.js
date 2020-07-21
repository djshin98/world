"use strict";
const { calc, rect } = require("../../../graphics/math");
const { centerRightAngle } = require("../../../graphics/prework");

function bypass(turnPlane, properties, bcompleted) {
    let arrowSize = properties.pixelBySize.arrow;
    let orders = [
        [0, 2],
        [1, 3]
    ];
    return turnPlane.reduce((prev, p, i, buffer) => {
        if (i == 0) {
            return {
                type: "polyline",
                geometry: [
                    p[0], p[1], p[2]
                ]
            };
        } else if (i == 1) {
            let a = properties.annotations;
            let aname;

            let ret = [];
            if (properties.log == "G-T-Y") {
                ret.push({
                    type: "polyline",
                    geometry: calc.arrow(turnPlane, { x: p[0].x, y: p[3].y }, p[0], arrowSize).geometry
                });
                ret.push({
                    type: "polyline",
                    geometry: calc.arrow(turnPlane, { x: p[2].x, y: p[3].y }, p[2], arrowSize).geometry

                });
                aname = "b";
            } else if (properties.log == "G-T-H") {
                if (p[0].x > 0) {
                    ret.push(calc.x(p[0], arrowSize)[0]);
                    ret.push(calc.x(p[2], arrowSize)[1]);
                } else {
                    ret.push(calc.x(p[0], arrowSize)[1]);
                    ret.push(calc.x(p[2], arrowSize)[0]);
                }
                aname = "b";
            } else if (properties.log == "G-T-C") {
                if (p[0].x > 0) {
                    ret.push(calc.x(p[0], arrowSize)[1]);
                    ret.push(calc.x(p[2], arrowSize)[0]);
                } else {
                    ret.push(calc.x(p[0], arrowSize)[0]);
                    ret.push(calc.x(p[2], arrowSize)[1]);
                }
                aname = "c";
            }
            let c = rect(p[3].x, p[3].y, a[aname].width, a[aname].height);
            ret.push({
                type: "annotation",
                geometry: c.geometry(),
                name: aname,
                debug: true
            });

            let ll = c.linkLine({ x: p[0].x, y: p[3].y }, { x: p[2].x, y: p[3].y }, true);
            if (ll.length == 2) {
                let d = [p[0]];
                d = d.concat(ll[0].geometry);
                let e = ll[1].geometry;
                e.push(p[2]);
                ret.push({
                    type: "polyline",
                    geometry: d
                });
                ret.push({
                    type: "polyline",
                    geometry: e
                });
            }
            return ret;
        }
    }, centerRightAngle, orders).end();
}

module.exports = {
    modular: bypass,
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