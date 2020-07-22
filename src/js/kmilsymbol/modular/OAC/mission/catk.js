const { calc, rect } = require("../../../graphics/math");

function catk(turnPlane, properties, bcompleted) {
    let dist;
    let arrowSize = properties.pixelBySize.arrow;
    let a = properties.annotations;
    return turnPlane.reduce((prev, p, i, buffer) => {
        if (properties.log == "G-T-K") {
            if (i == 0) {
                return { type: "polyline", geometry: [p[0], calc] };
            } else if (i == 1) {
                return calc.annotationOnLine(a, "r", 0.5, p[1], p[3]);
            }
        } else if (properties.log == "G-T-KF") {
            if (i == 0) {
                dist = calc.distance(p[0], p[2]) / 2;
                //return { type: "polyline", geometry: [p[i], p[i + 1]] };
            } else if (i == 1) {
                let ret = calc.annotationOnLine(a, "eny", 0.5, p[1], p[3]);
                ret.push(calc.arrow(turnPlane, p[3], p[1], arrowSize));
                let c = rect(0, -dist, a.c.width, a.c.height);
                let arc = calc.arc(-Math.PI / 2, -Math.PI * 3 / 2, dist, { div: 5, hair: { length: -0.1, freq: 10 }, annotation: c });
                arc.forEach(g => { ret.push(g) });
                ret.push({
                    type: "annotation",
                    geometry: c.geometry(),
                    name: "c",
                    debug: true
                });
                return ret;
            }
        }

    }).end();
}

module.exports = {
    modular: catk,
    minPointCount: 2,
    properties: {
        size: {
            arrow: 50
        },
        annotations: {
            catk: {
                value: "CATK",
                anchor: { x: 0, y: 0 }
            }
        }
    }
};