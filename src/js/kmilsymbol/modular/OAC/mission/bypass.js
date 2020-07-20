"use strict";
const { calc, rect } = require("../../../graphics/math");

function bypass(turnPlane, properties, bcompleted) {
    let arrowSize = properties.pixelBySize.arrow;
    return turnPlane.map((prev, p, i, buffer) => {
        if (i == 0) {
            if (p.length == 3) {
                let a = properties.annotations;
                let c = rect(p[2].x, p[1].y / 2, a.b.width, a.b.height);
                let ll = c.linkLine({ x: p[2].x, y: 0 }, { x: p[2].x, y: p[1].y });

                /*{
                    type: "polyline",
                    geometry: [
                        p[0], { x: p[2].x, y: 0 }, { x: p[2].x, y: p[1].y }, { x: 0, y: p[1].y }
                    ]
                }*/

                return [{
                    type: "polyline",
                    geometry: [
                        p[0], { x: p[2].x, y: 0 }
                    ]
                }, {
                    type: "polyline",
                    geometry: [
                        { x: p[2].x, y: p[1].y }, { x: 0, y: p[1].y }
                    ]
                }, ll[0], ll[1], {
                    type: "polyline",
                    geometry: calc.arrow(turnPlane, { x: p[2].x, y: 0 }, p[0], arrowSize).geometry
                }, {
                    type: "polyline",
                    geometry: calc.arrow(turnPlane, { x: p[2].x, y: p[1].y }, { x: 0, y: p[1].y }, arrowSize).geometry

                }, {
                    type: "annotation",
                    geometry: c.geometry(),
                    name: "b",
                    debug: true
                }];
            }
        }
    }).end();
}

module.exports = {
    modular: bypass,
    minPointCount: 2,
    maxPointCount: 3,
    properties: {
        size: {
            arrow: 30,
        },
        annotations: {
            b: {
                value: "B",
                anchor: { x: 0, y: 0 }
            }
        }
    }
};