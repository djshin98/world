"use strict";

const { calc, line } = require("../../../graphics/math");
const { rightAngle } = require("../../../graphics/prework");

function delay(turnPlane, properties, bcompleted) {
    let a = properties.annotations;
    let arrowSize = properties.pixelBySize.arrow;
    let aname = "d"
    if (properties.log == "G-T-L") {
        aname = "d"
    } else if (properties.log == "G-T-W") {
        aname = "w"
    } else if (properties.log == "G-T-WP") {
        aname = "wp"
    }
    return turnPlane.map((prev, p, i, buffer) => {
        if (i == 0) {
            let ret = [];

            calc.annotationOnLine(a, aname, 0.5, p[0], p[1], false, (i, g) => {
                if (i == 0) {
                    ret.push(calc.arrow(turnPlane, g.geometry[1], g.geometry[0], arrowSize));
                }
            }).forEach(g => { ret.push(g); });
            return ret;
        } else {
            if (p[0].x < 0) {
                return calc.arc(-Math.PI, -Math.PI * 2, calc.distance(p[1], p[2]) / 2, { translate: calc.mid(p[1], p[2]) });
            } else {
                return calc.arc(0, -Math.PI, calc.distance(p[1], p[2]) / 2, { translate: calc.mid(p[1], p[2]) });
            }

        }
    }, rightAngle).end();
}

module.exports = {
    modular: delay,
    minPointCount: 2,
    maxPointCount: 3,
    properties: {
        size: {
            arrow: 20
        },
        annotations: {
            d: {
                value: "D",
                anchor: { x: 0, y: 0 }
            },
            w: {
                value: "W",
                anchor: { x: 0, y: 0 }
            },
            wp: {
                value: "WP",
                anchor: { x: 0, y: 0 }
            }
        }
    }
};