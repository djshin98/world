const { calc, line, road } = require("../../../graphics/math");

function catk(turnPlane, properties, bcompleted) {
    let width;
    let arrow;
    let s = properties.pixelBySize;
    let arrowSize = s.arrow;
    let div = s.div;

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
            let ret = [];
            if (i == 0) {
                width = ((p[1].y - p[0].y) * 0.2) / 2;
                arrow = ((p[1].y - p[0].y) * 0.4) / 2;

                ret = calc.toDot(turnPlane, [{ x: -(arrow + (arrow / 6)), y: arrow + (arrow / 6) }, p[0],
                    { x: arrow + (arrow / 6), y: arrow + (arrow / 6) }
                ], div, 3);
                ret.push({
                    type: "polyline",
                    geometry: [{ x: -(arrow + (arrow / 6)), y: arrow + (arrow / 6) }, p[0],
                        { x: arrow + (arrow / 6), y: arrow + (arrow / 6) }
                    ]
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
                //if (bcompleted === true && i == p.length - 2) {
                //    ret = calc.toDot(turnPlane, ret[0].geometry, div, 3);
                //}
            }
            return ret;
        } else if (properties.log == "G-G-OLAV") {
            let ret = [];
            let lines = [];
            if (i == 0) {
                width = ((p[1].y - p[0].y) * 0.2) / 2;
                arrow = ((p[1].y - p[0].y) * 0.4) / 2;
                lines = [
                    { x: -width, y: p[1].y },
                    { x: -width, y: arrow },
                    { x: -arrow, y: arrow },
                    p[0],
                    { x: arrow, y: arrow },
                    { x: width, y: arrow },
                    { x: width, y: p[1].y }
                ];
                ret.push({
                    type: "polyline",
                    geometry: lines
                });
            } else {
                road(p[i + 1], p[i], width).link(prev[0].geometry).end().forEach(g => {
                    if (i == (p.length - 2)) {
                        let index = g.geometry.findIndex(v => { return (Math.abs(v.x - p[0].x) < 0.0000001 && Math.abs(v.y - p[0].y) < 0.0000001) ? true : false; });
                        if (index > 0) {
                            let temp = g.geometry[index - 2];
                            g.geometry[index - 2] = g.geometry[index + 2];
                            g.geometry[index + 2] = temp;

                            temp = g.geometry[index - 1];
                            g.geometry[index - 1] = g.geometry[index + 1];
                            g.geometry[index + 1] = temp;
                        }
                    }
                    ret.push(g);
                });
            }
            return ret;
        } else if (properties.log == "G-G-OLAA") {
            let ret = [];
            let lines = [];
            if (i == 0) {
                width = ((p[1].y - p[0].y) * 0.2) / 2;
                arrow = ((p[1].y - p[0].y) * 0.4) / 2;
                lines = [
                    { x: -width, y: p[1].y },
                    { x: -width, y: arrow },
                    { x: -arrow, y: arrow },
                    p[0],
                    { x: arrow, y: arrow },
                    { x: width, y: arrow },
                    { x: width, y: p[1].y }
                ];
                ret.push({
                    type: "polyline",
                    geometry: lines
                });
                let ann = calc.annotation(a, "olaa", { x: 0, y: p[1].y * 3 / 4 });
                ann.trip = false;
                ret.push(ann);
            } else {
                road(p[i + 1], p[i], width).link(prev[0].geometry).end().forEach(g => {
                    if (i == (p.length - 2)) {
                        let index = g.geometry.findIndex(v => { return (Math.abs(v.x - p[0].x) < 0.0000001 && Math.abs(v.y - p[0].y) < 0.0000001) ? true : false; });
                        if (index > 0) {
                            let temp = g.geometry[index - 2];
                            g.geometry[index - 2] = g.geometry[index + 2];
                            g.geometry[index + 2] = temp;

                            temp = g.geometry[index - 1];
                            g.geometry[index - 1] = g.geometry[index + 1];
                            g.geometry[index + 1] = temp;
                        }
                    }
                    ret.push(g);
                });
            }
            return ret;
        } else if (properties.log == "G-G-OLAR") {
            let ret = [];
            let lines = [];
            if (i == 0) {
                width = ((p[1].y - p[0].y) * 0.2) / 2;
                arrow = ((p[1].y - p[0].y) * 0.4) / 2;
                lines = [
                    { x: -width, y: p[1].y },
                    { x: -width, y: arrow },
                    { x: -arrow, y: arrow },
                    p[0],
                    { x: arrow, y: arrow },
                    { x: width, y: arrow },
                    { x: width, y: p[1].y }
                ];
                ret.push({
                    type: "polyline",
                    geometry: lines
                });
                /*
                let mx = calc.mid({ x: -width, y: p[1].y }, { x: -width, y: arrow })
                calc.arrowLine(turnPlane, { x: -width, y: mx.y }, { x: width, y: mx.y }, s.arrow2, 30).forEach(g => {
                    g.trip = false;
                    ret.push(g);
                })
                let mxb = line(calc.moveY(mx, -s.arrow2), calc.moveY(mx, s.arrow2)).end();
                mxb.trip = false;
                ret.push(mxb);
                */
            } else {
                road(p[i + 1], p[i], width).link(prev[0].geometry).end().forEach(g => {
                    if (i == (p.length - 2)) {
                        let index = g.geometry.findIndex(v => { return (Math.abs(v.x - p[0].x) < 0.0000001 && Math.abs(v.y - p[0].y) < 0.0000001) ? true : false; });
                        if (index > 0) {
                            let temp = g.geometry[index - 2];
                            g.geometry[index - 2] = g.geometry[index + 2];
                            g.geometry[index + 2] = temp;

                            temp = g.geometry[index - 1];
                            g.geometry[index - 1] = g.geometry[index + 1];
                            g.geometry[index + 1] = temp;

                            let itx = line(g.geometry[index - 2], g.geometry[index - 3]).intersect(
                                line(g.geometry[index + 2], g.geometry[index + 3])
                            );
                            let ppp = calc.extension(turnPlane, itx, g.geometry[index + 2], width * 2).geometry[1];
                            /*
                            ret.push({
                                type: "polyline",
                                geometry: [itx, g.geometry[index]]
                            });*/
                            turnPlane.turnStack([itx, g.geometry[index], ppp], 0, 1, (xp) => {
                                let ark = calc.arrowLine(turnPlane, { x: -width, y: 0 }, { x: width, y: 0 }, s.arrow2, 30);
                                ark.push({
                                    type: "polyline",
                                    geometry: [calc.moveY({ x: -width, y: 0 }, -s.arrow2), calc.moveY({ x: -width, y: 0 }, s.arrow2)]
                                });
                                ark.push({ type: "polyline", geometry: [{ x: xp[2].x, y: xp[2].y }, { x: -xp[2].x, y: xp[2].y }] });
                                ark.push({ type: "polyline", geometry: [{ x: xp[2].x, y: -xp[2].y }, { x: -xp[2].x, y: -xp[2].y }] });
                                return ark;
                            }).forEach(g => {
                                g.trip = false;
                                ret.push(g);
                            });
                        }
                    }
                    ret.push(g);
                });
            }
            return ret;
        } else if (properties.log == "G-G-OLAGM") {
            let ret = [];
            if (i == 0) {

                width = ((p[1].y - p[0].y) * 0.2) / 2;
                arrow = ((p[1].y - p[0].y) * 0.4) / 2;
                let ywidth = arrow - width;
                let lines = [
                    { x: -width, y: p[1].y },
                    { x: -width, y: arrow },
                    { x: -arrow, y: arrow },
                    p[0],
                    { x: arrow, y: arrow },
                    { x: width, y: arrow },
                    { x: width, y: p[1].y }
                ];
                ret.push({
                    type: "polyline",
                    geometry: lines
                });
                ret.push({
                    type: "polyline",
                    trip: false,
                    geometry: [{ x: -width, y: arrow }, calc.moveY(p[0], ywidth), { x: width, y: arrow }]
                });
                return ret;
            } else {
                ret = road(p[i + 1], p[i], width).link(prev[0].geometry).end();
            }
            return ret;
        } else if (properties.log == "G-G-OLAGS") {
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
                ret.push({ type: "polyline", geometry: lines });
                return ret;
            } else {
                ret = road(p[i + 1], p[i], width).link(prev[0].geometry).end();
            }
            return ret;
        }

    }).end();
}

module.exports = {
    modular: catk,
    minPointCount: 2,
    properties: {
        size: {
            arrow2: 10,
            arrow: 50,
            div: 10
        },
        annotations: {
            catk: {
                value: "CATK",
                anchor: { x: 0, y: 0 }
            },
            olaa: {
                value: "A",
                anchor: { x: 0, y: 0 }
            }
        }
    }
};