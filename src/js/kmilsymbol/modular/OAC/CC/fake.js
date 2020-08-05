"use strict";

const { calc } = require("../../../graphics/math");

let orders = [
    [0, 1],
    [0, 2]
];

function fake(turnPlane, properties, bcompleted) {
    if (properties.log == "G-G-PD") {
        let div = properties.pixelBySize.div;
        return turnPlane.map((prev, p, i, buffer) => {
            let s = properties.pixelBySize;
            return calc.toDot(turnPlane, orders[i].map(io => { return p[io]; }), div, 2);
        }, undefined, orders).end();
    } else if (properties.log == "G-G-DLP") {
        let arrow = properties.pixelBySize.arrow;
        return turnPlane.map((prev, p, i, buffer) => {
            let a = p[orders[i][0]];
            let b = p[orders[i][1]];

            let ret = [];
            if (i == 0) {
                let dist = calc.distance(a, b);
                let c = calc.moveY(a, dist / 4);
                let d = calc.moveY(b, -dist / 4);
                ret.push({
                    type: "polygon",
                    geometry: [c, d, calc.moveX(d, -dist / 100), calc.moveX(c, -dist / 100), c]
                });
            }
            calc.arrowLine(turnPlane, a, b, arrow, 30).forEach(g => { ret.push(g); });
            return ret;
        }, undefined, orders).end();
    }
}


module.exports = {
    modular: fake,
    minPointCount: 2,
    maxPointCount: 3,
    properties: {
        size: {
            div: 10,
            arrow: 20
        }
    }

};