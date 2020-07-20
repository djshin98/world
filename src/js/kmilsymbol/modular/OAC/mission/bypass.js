"use strict";
const { calc } = require("../../../graphics/math");

function bypass(turnPlane, properties, bcompleted) {
    let arrowSize = properties.pixelBySize.arrow;
    return turnPlane.map((prev, p, i, buffer) => {
        if (i == 0) {
            if (p.length == 3) {
                return [{
                    type: "polyline",
                    geometry: [
                        p[0], { x: p[2].x, y: 0 }, { x: p[2].x, y: p[1].y }, { x: 0, y: p[1].y }
                    ]
                }, {
                    type: "polyline",
                    geometry: calc.arrow(turnPlane, { x: p[2].x, y: 0 }, p[0], arrowSize).geometry
                }, {
                    type: "polyline",
                    geometry: calc.arrow(turnPlane, { x: p[2].x, y: p[1].y }, { x: 0, y: p[1].y }, arrowSize).geometry

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
        }
    }
};