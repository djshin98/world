const { calc, rect, road } = require("../../../graphics/math");

function catk(turnPlane, properties, bcompleted) {
    let width;
    let arrow;
    let arrowSize = properties.pixelBySize.arrow;
    let div = properties.pixelBySize.div;
    let a = properties.annotations;
    return turnPlane.reduce((prev, p, i, buffer) => {
        if (properties.log == "G-T-K") {
            if (i == 0) {
                width = ((p[1].y - p[0].y) * 0.2) / 2;
                arrow = ((p[1].y - p[0].y) * 0.3) / 2;
                let lines = [
                    { x: -width, y: p[1].y },
                    { x: -width, y: arrow },
                    { x: -arrow, y: arrow },
                    p[0],
                    { x: arrow, y: arrow },
                    { x: width, y: arrow },
                    { x: width, y: p[1].y }
                ];
                //let ret = calc.toDot(turnPlane, lines, div);
                let ret = [{
                    type: "polyline",
                    geometry: lines
                }];
                let ann = calc.annotation(a, "catk", { x: 0, y: p[1].y / 2 });
                ann.trip = false;
                ret.push(ann);
                return ret;
            } else {
                return road(p[i], p[i + 1]).link(prev[0].geometry).end();
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
            arrow: 50,
            div: 20
        },
        annotations: {
            catk: {
                value: "CATK",
                anchor: { x: 0, y: 0 }
            }
        }
    }
};