const { calc, rect } = require("../../../graphics/math");

function block(turnPlane, properties, bcompleted) {
    return turnPlane.map((prev, p, i, buffer) => {
        if (i == 0) {
            return { type: "polyline", geometry: [p[i], p[i + 1]] };
        } else if (i == 1) {
            let pp = prev.geometry.concat(p[i + 1]);
            let a = properties.annotations;
            return turnPlane.turnStack(pp, 0, 1, (pt) => {
                let midpt = calc.mid(pt[0], pt[1]);
                let r = rect((pt[2].x) / 2, midpt.y, a.r.width, a.r.height);
                return [{
                    type: "annotation",
                    geometry: r.geometry(true),
                    name: "r",
                    rotate: Math.PI / 2,
                    debug: true
                }, {
                    type: "polyline",
                    geometry: [midpt, { x: r.right(true), y: midpt.y }]
                }, {
                    type: "polyline",
                    geometry: [{ x: r.left(true), y: midpt.y }, { x: pt[2].x, y: midpt.y }]
                }];
            });
        }
    }).end();
}

module.exports = {
    modular: block,
    minPointCount: 2,
    maxPointCount: 3,
    properties: {
        annotations: {
            r: {
                value: "R",
                anchor: { x: 0, y: 0 }
            }
        }
    }
};