const { calc, rect } = require("../../../graphics/math");

function block(turnPlane, properties, bcompleted) {
    let dist;
    return turnPlane.map((prev, p, i, buffer) => {
        if (properties.log == "G-T-B") {
            if (i == 0) {
                return { type: "polyline", geometry: [p[i], p[i + 1]] };
            } else if (i == 1) {
                let pp = prev.geometry.concat(p[i + 1]);
                let a = properties.annotations;
                return turnPlane.turnStack(pp, 0, 1, (pt) => {
                    let midpt = calc.mid(pt[0], pt[1]);
                    let r = rect((pt[2].x) / 2, midpt.y, a.r.width, a.r.height);
                    let ll = r.linkLine(midpt, { x: pt[2].x, y: midpt.y }, true);
                    return [{
                        type: "annotation",
                        geometry: r.geometry(true),
                        name: "r",
                        rotate: Math.PI / 2,
                        debug: true
                    }, ll[0], ll[1]];
                });
            }
        } else if (properties.log == "G-T-J") {
            if (i == 0) {
                dist = calc.distance(p[0], p[1]) / 2;
                //return { type: "polyline", geometry: [p[i], p[i + 1]] };
            } else if (i == 1) {

                let pp = [p[0], p[1], calc.mid(p[0], p[1]), p[2]];
                let a = properties.annotations;
                let s = properties.pixelBySize;
                return turnPlane.turnStack(pp, 2, 3, (pt) => {

                    let r = rect(0, (pt[3].y) / 2, a.eny.width, a.eny.height);
                    let c = rect(0, -dist, a.c.width, a.c.height);
                    let ll = r.linkLine(pt[3], pt[2]);
                    let arrow = calc.arrow(turnPlane, pt[3], pt[2], s.arrow, 30);
                    let arc = calc.arc(-Math.PI / 2, -Math.PI * 3 / 2, dist, { div: 5, hair: { length: -0.1, freq: 10 }, annotation: c });
                    return [{
                        type: "annotation",
                        geometry: r.geometry(),
                        name: "eny",
                        //debug: true
                    }, {
                        type: "annotation",
                        geometry: c.geometry(),
                        name: "c",
                        //debug: true
                    }, ll[0], ll[1], arrow].concat(arc);
                });
            }
        }

    }).end();
}

module.exports = {
    modular: block,
    minPointCount: 2,
    maxPointCount: 3,
    properties: {
        size: {
            arrow: 30
        },
        annotations: {
            r: {
                value: "R",
                anchor: { x: 0, y: 0 }
            },
            eny: {
                value: "ENY",
                anchor: { x: 0, y: 0 }
            },
            c: {
                value: "C",
                anchor: { x: 0, y: 0 }
            }
        }
    }
};