"use strict";

const { calc, line } = require("../../../graphics/math");
const { rightAngle } = require("../../../graphics/prework");

function delay(turnPlane, properties, bcompleted) {
    let a = properties.annotations;
    let arrowSize = properties.pixelBySize.arrow;
    return turnPlane.map((prev, p, i, buffer) => {
        if (i == 0) {
            let ret = [];

            if (bcompleted === true) {
                console.log("width=" + a.p.width.toFixed(2) +
                    " , height=" + a.p.height.toFixed(2) + " <===> " +
                    "px=" + properties.test.px.toFixed(2) +
                    " , lineLength=" + properties.test.lineLength.toFixed(2) +
                    "l/p = " + (properties.test.lineLength / properties.test.px).toFixed(2));
            }

            calc.annotationOnLine(a, "p", 0.5, p[0], p[1], undefined, (i, g) => {
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
            p: {
                value: "P",
                anchor: { x: 0, y: 0 }
            }
        }
    }
};