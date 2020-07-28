const { calc, rect, road } = require("../../../graphics/math");

function catk(turnPlane, properties, bcompleted) {
    let width;
    let arrow;
    let arrowSize = properties.pixelBySize.arrow;
    let div = properties.pixelBySize.div;
    let a = properties.annotations;
    return turnPlane.reduce((prev, p, i, buffer) => {
        if (properties.log == "G-T-K") {
            let ret = [];
            if (i == 0) {
                width = ((p[1].y - p[0].y) * 0.2) / 2;
                arrow = ((p[1].y - p[0].y) * 0.4) / 2;
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
                ret.push({
                    type: "polyline",
                    geometry: lines
                });

                let ann = calc.annotation(a, "catk", { x: 0, y: p[1].y / 2 });
                ann.trip = false;
                ret.push(ann);

                return ret;
            } else {
                ret = road(p[i + 1], p[i], width).link(prev[0].geometry).end();
                if (bcompleted === true && i == p.length - 2) {
                    ret = calc.toDot(turnPlane, ret[0].geometry, div, 3);
                }
            }
            return ret;
        } else if (properties.log == "G-T-KF") {
            let ret = [];
            if (i == 0) {
                width = ((p[1].y - p[0].y) * 0.2) / 2;
                arrow = ((p[1].y - p[0].y) * 0.4) / 2;
                let hat = [
                    calc.move({ x: arrow, y: 0 }, arrow / 3, arrow / 3),
                    { x: arrow, y: 0 },
                    { x: -arrow, y: 0 },
                    calc.move({ x: -arrow, y: 0 }, -arrow / 3, arrow / 3)
                ];
                ret.push({
                    type: "polyline",
                    geometry: hat,
                    trip: false
                });
                calc.arrowLine(turnPlane, p[0], { x: 0, y: -arrow / 4 }, arrow / 8, 30, true).forEach(g => {

                    if (g.type == "polyline") {
                        calc.toDot(turnPlane, g.geometry, div, 3).forEach(x => {
                            x.trip = false;
                            ret.push(x);
                        });
                    } else {
                        g.trip = false;
                        ret.push(g);
                    }

                });

                let lines = [
                    { x: -width, y: p[1].y },
                    { x: -width, y: arrow },
                    { x: -arrow, y: arrow },
                    p[0],
                    { x: arrow, y: arrow },
                    { x: width, y: arrow },
                    { x: width, y: p[1].y }
                ].map(d => { return calc.move(d, 0, arrow / 6) });
                //let ret = calc.toDot(turnPlane, lines, div);
                ret.push({
                    type: "polyline",
                    geometry: lines
                });

                let ann = calc.annotation(a, "catk", { x: 0, y: p[1].y / 2 });
                ann.trip = false;
                ret.push(ann);

                return ret;
            } else {
                ret = road(p[i + 1], p[i], width).link(prev[0].geometry).end();
                if (bcompleted === true && i == p.length - 2) {
                    ret = calc.toDot(turnPlane, ret[0].geometry, div, 3);
                }
            }
            return ret;
        } else if (properties.log == "G-G-PA") {

        } else if (properties.log == "G-G-OLAV") {

        } else if (properties.log == "G-G-OLAA") {

        } else if (properties.log == "G-G-OLAR") {

        } else if (properties.log == "G-G-OLAGM") {

        } else if (properties.log == "G-G-OLAGS") {

        }

    }).end();
}

module.exports = {
    modular: catk,
    minPointCount: 2,
    properties: {
        size: {
            arrow: 50,
            div: 10
        },
        annotations: {
            catk: {
                value: "CATK",
                anchor: { x: 0, y: 0 }
            }
        }
    }
};