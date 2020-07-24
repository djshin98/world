"use strict";

const { calc, line } = require("../../../graphics/math");
const { rightAngle } = require("../../../graphics/prework");

function delay(turnPlane, properties, bcompleted) {
    let a = properties.annotations;
    let arrowSize = properties.pixelBySize.arrow;
    let aname = "d"
    if (properties.log == "G-T-L") {
        aname = "d"
    } else if (properties.log == "G-T-T") {
        aname = "d"
    } else if (properties.log == "G-T-W") {
        aname = "w"
    } else if (properties.log == "G-T-WP") {
        aname = "wp"
    }
    if (properties.log == "G-T-T") {
        return turnPlane.map((prev, p, i, buffer) => {
            if (i == 0) {
                let mp = calc.mid(p[0], p[1]);
                return [{
                    type: "polyline",
                    geometry: [p[0], p[1]]
                }, {
                    type: "polyline",
                    geometry: [mp, calc.moveY(mp, calc.distance(p[0], p[1]) / 3)]
                }];
            } else {
                let w = calc.distance(p[0], p[1]);
                let h = calc.distance(p[1], p[2]);
                let ret = calc.arrowLine(turnPlane, p[1], p[2], arrowSize, 30);
                if (h > w) {
                    calc.arrowLine(turnPlane, calc.moveX(p[1], -w / 2), calc.move(p[2], -w / 2, -w / 2), arrowSize, 30).forEach(g => { ret.push(g); });
                    calc.arrowLine(turnPlane, calc.moveX(p[1], -w), calc.move(p[2], -w, -w), arrowSize, 30).forEach(g => { ret.push(g); });
                } else {
                    calc.arrowLine(turnPlane, calc.moveX(p[1], -w / 2), calc.move(p[2], -w / 2, -h / 2), arrowSize, 30).forEach(g => { ret.push(g); });
                    calc.arrowLine(turnPlane, calc.moveX(p[1], -w), calc.move(p[2], -w, -h / 3), arrowSize, 30).forEach(g => { ret.push(g); });
                }
                return ret;
            }
        }, rightAngle).end();
    } else {
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