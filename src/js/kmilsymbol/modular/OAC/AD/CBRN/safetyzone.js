"use strict";
const { calc, rect } = require("../../../../graphics/math");

function safetyzone(turnPlane, properties, bcompleted) {
    let arrowSize = properties.pixelBySize.arrow;
    let a = properties.pixelBySize;
    let orders = [
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4]
    ];
    return turnPlane.map((prev, p, i, buffer) => {
        let ret = [];
        let distance = calc.distance(p[0], p[i + 1]);
        return calc.arc(0, Math.PI * 2, distance, { div: 10 });
    }, undefined, orders).end();
}

module.exports = {
    modular: safetyzone,
    minPointCount: 2,
    maxPointCount: 5,
    properties: {}
};