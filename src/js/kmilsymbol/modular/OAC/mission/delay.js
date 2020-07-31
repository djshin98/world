"use strict";

const { calc, line } = require("../../../graphics/math");
const { rightAngle } = require("../../../graphics/prework");

function delay(turnPlane, properties, bcompleted) {
    let a = properties.annotations;
    let arrowSize = properties.pixelBySize.arrow;
    let aname = "d"
    if (properties.log == "G-T-L") {
        aname = "d"
    } else if (properties.log == "G-T-M") {
        aname = "r"
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

                return [{
                    type: "polyline",
                    geometry: [p[0], p[1]]
                }];
            } else {
                let w = p[1].x - p[0].x;
                let h = p[2].y - p[1].y;
                let ret = calc.arrowLine(turnPlane, p[1], p[2], arrowSize, 30);
                let mp = calc.mid(p[0], p[1]);
                let hy = -Math.abs(w / 3);
                ret.push({
                    type: "polyline",
                    geometry: [mp, calc.moveY(mp, hy)]
                });
                if (h > w) {
                    calc.annotationOnLine(a, "d", 0.5, calc.moveX(p[1], -w / 2), calc.move(p[2], -w / 2, -w / 2), false, (i, g) => {
                        if (i == 1) {
                            ret.push(calc.arrow(turnPlane, g.geometry[0], g.geometry[1], arrowSize, 30));
                        }
                    }).forEach(g => { ret.push(g); });
                    //calc.arrowLine(turnPlane, calc.moveX(p[1], -w / 2), calc.move(p[2], -w / 2, -w / 2), arrowSize, 30).forEach(g => { ret.push(g); });
                    calc.arrowLine(turnPlane, calc.moveX(p[1], -w), calc.move(p[2], -w, -w), arrowSize, 30).forEach(g => { ret.push(g); });
                } else {
                    calc.annotationOnLine(a, "d", 0.5, calc.moveX(p[1], -w / 2), calc.move(p[2], -w / 2, -h / 2), false, (i, g) => {
                        if (i == 1) {
                            ret.push(calc.arrow(turnPlane, g.geometry[0], g.geometry[1], arrowSize, 30));
                        }
                    }).forEach(g => { ret.push(g); });
                    //calc.arrowLine(turnPlane, calc.moveX(p[1], -w / 2), calc.move(p[2], -w / 2, -h / 2), arrowSize, 30).forEach(g => { ret.push(g); });
                    calc.arrowLine(turnPlane, calc.moveX(p[1], -w), calc.move(p[2], -w, -h * 2 / 3), arrowSize, 30).forEach(g => { ret.push(g); });
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
            r: {
                value: "R",
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