const { calc, line } = require("../../../graphics/math");
const { rightAngleCenter } = require("../../../graphics/prework");

function ambush(turnPlane, properties, bcompleted) {

    let arrowSize = properties.pixelBySize.arrow;
    let a = properties.annotations;

    return turnPlane.reduce((prev, p, i, buffer) => {
        if (properties.log == "G-G-SLAA") {
            let ret = [];
            if (i == 0) {
                calc.annotationOnLine(a, "b", 0.5, p[0], p[1]).forEach(g => {
                    if (g.type == "polyline") {
                        buffer.push(g);
                    }
                    g.trip = false;
                    ret.push(g);
                });
            }
            let geo = [];
            let pre = [];
            let post = [];
            buffer.forEach((g, gi) => {
                if (gi == 0) {
                    geo.push(g.geometry[1]);
                    let m = p.filter((e, i) => { return i > 1 ? true : false; }).forEach(mg => {
                        geo.push(mg);
                    });
                } else {
                    geo.push(g.geometry[0]);
                }
            });

            ret.push({
                type: "polyline",
                geometry: geo
            });
            return ret;
        } else if (properties.log == "G-G-SLAB") {
            let ret = [];
            if (i == 0) {
                calc.annotationOnLine(a, "s", 0.5, p[0], p[1]).forEach(g => {
                    if (g.type == "polyline") {
                        buffer.push(g);
                    }
                    g.trip = false;
                    ret.push(g);
                });
            }
            let geo = [];
            let pre = [];
            let post = [];
            buffer.forEach((g, gi) => {
                if (gi == 0) {
                    geo.push(g.geometry[1]);
                    let m = p.filter((e, i) => { return i > 1 ? true : false; }).forEach(mg => {
                        geo.push(mg);
                    });
                } else {
                    geo.push(g.geometry[0]);
                }
            });

            ret.push({
                type: "polyline",
                geometry: geo
            });
            return ret;
        } else if (properties.log == "G-G-SLAD") {
            let ret = [];
            if (i == 0) {
                let d = calc.distance(p[0], p[1]);
                let mid = calc.mid(p[0], p[1]);
                calc.arrowLine(turnPlane, mid, calc.moveX(mid, -arrowSize * 5), arrowSize, 30).forEach(g => {
                    g.trip = false;
                    ret.push(g);
                });
                if (d < arrowSize * 5) {
                    buffer.push({
                        type: "polyline",
                        geometry: [p[0]]
                    });
                    buffer.push({
                        type: "polyline",
                        geometry: [p[1]]
                    });
                } else {
                    buffer.push({
                        type: "polyline",
                        geometry: [p[0], { x: 0, y: arrowSize * 5 }]
                    });
                    buffer.push({
                        type: "polyline",
                        geometry: [{ x: 0, y: p[1].y - (arrowSize * 5) }, p[1]]
                    });
                }
                return ret;
            }
            let geo = [];
            let pre = [];
            let post = [];
            buffer.forEach((g, gi) => {
                if (gi == 0) {
                    geo.push(g.geometry[1]);
                    let m = p.filter((e, i) => { return i > 1 ? true : false; }).forEach(mg => {
                        geo.push(mg);
                    });
                } else {
                    geo.push(g.geometry[0]);
                }
            });

            ret.push({
                type: "polyline",
                geometry: geo
            });
            return ret;
        }

    }).end();
}


module.exports = {
    modular: ambush,
    minPointCount: 2,
    properties: {
        size: {
            arrow: 20
        },
        annotations: {
            b: {
                value: " ● ",
                anchor: { x: 0, y: 0 }
            },
            s: {
                value: " ●●● ",
                anchor: { x: 0, y: 0 }
            }
        }
    },

};