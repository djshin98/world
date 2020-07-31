"use strict";
const { calc } = require("../../../graphics/math");

function polygon(turnPlane, properties, bcompleted) {
    let arrowSize = properties.pixelBySize.arrow;
    let a = properties.pixelBySize;
    return turnPlane.map((prev, p, i, buffer) => {
        let ret = [];
        let distance = calc.distance(p[0], p[i + 1]);
        return calc.arc(0, Math.PI * 2, distance, { div: 10 });
    }).end();
}

module.exports = {
    modular: polygon,
    minPointCount: 2,
    maxPointCount: 2,
    properties: {}
};