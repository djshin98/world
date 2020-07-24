"use strict";
const { calc, rect } = require("../../../../graphics/math");
const { centerRightAngle } = require("../../../../graphics/prework");

function safetyzone(turnPlane, properties, bcompleted) {
    let arrowSize = properties.pixelBySize.arrow;
    let a = properties.pixelBySize;
    return turnPlane.map((prev, p, i, buffer) => {
        let ret = [];
        let distance = calc.distance(p[0], p[i]);

        if (properties.log == "G-M-NM") {
            ret = turnPlane.turnStack(p, 0, i, (points) => {
                return calc.arc(0, 360, distance);
            });
        }
        return ret;
    }).end();
}

module.exports = {
    modular: safetyzone,
    minPointCount: 1,
    maxPointCount: 5,
    properties: {
        size: {
            arrow: 20,
        }
    }
};