"use strict";
const { calc, rect } = require("../../../graphics/math");

function circle(turnPlane, properties, bcompleted) {
    let aname = "o";
    if (properties.log == "G-T-O") {
        aname = "o";
    } else if (properties.log == "G-T-Q") {
        aname = "q";
    } else if (properties.log == "G-T-E") {
        aname = "i";
    }
    let arrowSize = properties.pixelBySize.arrow;
    let a = properties.annotations;
    return turnPlane.map((prev, p, i, buffer) => {
        let dist = calc.distance(p[0], p[1]);
        let ret = [];
        if (properties.log == "G-T-O") {
            let c = rect(0, -dist, a.o.width, a.o.height);
            let arc = calc.arc(0, Math.PI * 2 - Math.PI / 6, dist, { div: 10, annotation: c });
            arc.forEach((g, i) => {
                if (i == 1) {
                    let len = g.geometry.length;
                    turnPlane.turnStack([g.geometry[len - 1], g.geometry[len - 2]], 0, 1, (gp) => {
                        return calc.x(gp[0], arrowSize);
                    }).forEach(cx => { ret.push(cx); });
                }
                ret.push(g);
            });
            ret.push({
                type: "annotation",
                geometry: c.geometry(),
                name: aname
            });

        } else if (properties.log == "G-T-S") {
            let c = rect(0, -dist, a.o.width, a.o.height);
            let arc = calc.arc(0, Math.PI * 2 - Math.PI / 6, dist, { div: 10, annotation: c }).forEach(g => {
                ret.push(g);
            });
            ret.push({
                type: "annotation",
                geometry: c.geometry(),
                name: aname
            });

        } else if (properties.log == "G-T-Q") {
            let c = rect(0, -dist, a.q.width, a.q.height);
            let arc = calc.arc(0, Math.PI * 2 - Math.PI / 6, dist, { div: 10, annotation: c, hair: { freq: 10, length: 0.2 } });
            arc.forEach(g => { ret.push(g) });
            ret.push({
                type: "annotation",
                geometry: c.geometry(),
                name: aname
            });
        } else if (properties.log == "G-T-E") {
            let c = rect(0, -dist, a.i.width, a.i.height);
            let arc = calc.arc(0, Math.PI * 2 - Math.PI / 6, dist, { div: 10, annotation: c, hair: { freq: 10, length: -0.2, type: "tri" } });
            arc.forEach(g => { ret.push(g) });
            ret.push({
                type: "annotation",
                geometry: c.geometry(),
                name: aname
            });
        }
        return ret;
    }).end();
}

module.exports = {
    modular: circle,
    minPointCount: 2,
    maxPointCount: 2,
    properties: {
        size: {
            arrow: 30,
        },
        annotations: {
            o: {
                fontSize: 30,
                value: "O",
                anchor: { x: 0, y: 0 }
            },
            q: {
                fontSize: 30,
                value: "Q",
                anchor: { x: 0, y: 0 }
            },
            i: {
                fontSize: 30,
                value: "I",
                anchor: { x: 0, y: 0 }
            }
        }
    }
};