const { calc, rect, road } = require("../../../../graphics/math");

function mlines(turnPlane, properties, bcompleted) {
    let width;
    let arrow;
    let arrowSize = properties.pixelBySize.arrow;
    let pbs = properties.pixelBySize;
    let a = properties.annotations;

    if (properties.log == "G-G-GLB") {
        return turnPlane.map((prev, p, index, buffer) => {
            let mp = calc.mid(p[index], p[index + 1]);
            let ret = [];
            calc.annotationOnLine(a, "b", 0.5, p[index], p[index + 1]).forEach(g => {
                if (g.type === "polyline") {
                    calc.annotationOnLine(a, "n", 0.5, g.geometry[0], g.geometry[1]).forEach(e => {
                        ret.push(e);
                    });
                } else {
                    ret.push(g);
                }
            });
            ret.push(calc.annotation(a, "t", calc.moveX(mp, -a.t.height)));
            ret.push(calc.annotation(a, "t1", calc.moveX(mp, a.t1.height)));
            return ret;
        }).end();
    } else if (properties.log == "G-G-GL2") {
        //gl3_div: 30,
        //gl3_height: 50,
        //gl3_gap: 5,
        //gl3_margin: 10,
        let offsetx = pbs.gl3_height / 2;
        let el = (pbs.gl3_div + pbs.gl3_margin);
        return turnPlane.map((prev, p, index, buffer) => {
            let ret = [];
            for (let i = 0; i < p[index + 1].y - el; i += el) {
                let pt = { x: -offsetx, y: i }
                let pti = { x: -offsetx, y: i + pbs.gl3_gap }
                ret.push(calc.sinline(pt, calc.moveY(pt, pbs.gl3_div), -(pbs.gl3_height)));
                ret.push(calc.sinline(pti, calc.moveY(pti, pbs.gl3_div - (pbs.gl3_gap * 2)), -(pbs.gl3_height - pbs.gl3_gap)));
            }
            return ret;
        }).end();
    } else if (properties.log == "G-G-GL3") {
        return turnPlane.reduce((prev, p, index, buffer) => {
            if (index == 0) {
                let as = calc.annotation(a, "s", { x: 0, y: p[index].y - a.s.width / 2 });
                as.trip = false;
                return as;
            }
            let ret = [
                { type: "polyline", geometry: p },
                calc.annotation(a, "s", { x: 0, y: p[index + 1].y + a.s.width / 2 })
            ];
            return ret;
        }).end();
    } else if (properties.log == "G-G-GL4") {
        return turnPlane.reduce((prev, p, index, buffer) => {
            if (index == 0) {
                let as = calc.annotation(a, "f", { x: 0, y: p[index].y - a.f.width / 2 });
                as.trip = false;
                return as;
            }
            let ret = [
                { type: "polyline", geometry: p },
                calc.annotation(a, "f", { x: 0, y: p[index + 1].y + a.f.width / 2 })
            ];
            return ret;
        }).end();
    } else if (properties.log == "G-G-GL5C") {
        return turnPlane.reduce((prev, p, index, buffer) => {
            let mp = calc.mid(p[index], p[index + 1]);
            mp = calc.moveX(mp, -a.gl5c.height / 2);
            let r = rect(mp.x, mp.y, a.gl5c.width, a.gl5c.height);
            let ret = [
                { type: "polyline", geometry: p },
                { type: "polygon", geometry: r.geometry() },
                calc.annotation(a, "gl5c", mp)
            ];
            return ret;
        }).end();
    } else if (properties.log == "G-G-GL5D") {
        return turnPlane.reduce((prev, p, index, buffer) => {
            let mp = calc.mid(p[index], p[index + 1]);
            mp = calc.moveX(mp, -a.gl5c.height / 2);
            let r = rect(mp.x, mp.y, a.gl5c.width, a.gl5c.height);
            let ret = calc.toDot(turnPlane, p, pbs.dot);
            ret.push({ type: "polygon", geometry: r.geometry() });
            ret.push(calc.annotation(a, "gl5c", mp));
            return ret;
        }).end();
    } else if (properties.log == "G-G-GL5EA") {
        return turnPlane.reduce((prev, p, index, buffer) => {
            let ret = [];
            let mp = calc.mid(p[index], p[index + 1]);
            ret.push({ type: "polyline", geometry: p });
            let ar = calc.arrow(turnPlane, p[index], mp, arrowSize);
            ar.trip = false;
            ret.push(ar);
            ret.push(calc.annotation(a, "amr", { x: -(a.amr.height / 2 + arrowSize / 2), y: mp.y }));
            return ret;
        }).end();
    } else if (properties.log == "G-G-GL5EM") {
        return turnPlane.reduce((prev, p, index, buffer) => {
            let ret = [];
            let mp = calc.mid(p[index], p[index + 1]);
            ret.push({ type: "polyline", geometry: p });
            let ar = calc.arrow(turnPlane, p[index], mp, arrowSize);
            ar.trip = false;
            ret.push(ar);
            ret.push(calc.annotation(a, "mmr", { x: -(a.mmr.height / 2 + arrowSize / 2), y: mp.y }));
            return ret;
        }).end();
    } else if (properties.log == "G-G-GL5L") {
        return turnPlane.map((prev, p, index, buffer) => {
            let mp = calc.mid(p[index], p[index + 1]);
            let mpgl5l = calc.moveX(mp, a.gl5l.height / 2 + a.t.height / 2);
            let mph = calc.moveX(calc.mid(p[index], mp), -a.h.height / 2);
            let mph1 = calc.moveX(calc.mid(mp, p[index + 1]), -a.h1.height / 2);
            let ret = calc.annotationOnLine(a, "t", 0.5, p[index], p[index + 1]);
            ret.push(calc.annotation(a, "gl5l", mpgl5l));
            ret.push(calc.annotation(a, "h", mph));
            ret.push(calc.annotation(a, "h1", mph1));

            return ret;
        }).end();
    } else if (properties.log == "G-G-GL5W") {
        return turnPlane.map((prev, p, index, buffer) => {
            let mp = calc.mid(p[index], p[index + 1]);
            let mpgl5w = calc.moveX(mp, a.gl5w.height / 2 + a.t.height / 2);
            let mph = calc.moveX(calc.mid(p[index], mp), -a.h.height / 2);
            let mph1 = calc.moveX(calc.mid(mp, p[index + 1]), -a.h1.height / 2);
            let ret = [];
            calc.annotationOnLine(a, "t", 0.5, p[index], p[index + 1]).forEach(g => {
                if (g.type === "polyline") {
                    calc.toDot(turnPlane, g.geometry, 10).forEach((p) => { ret.push(p) });
                } else {
                    ret.push(g);
                }
            });
            ret.push(calc.annotation(a, "gl5w", mpgl5w));
            ret.push(calc.annotation(a, "h", mph));
            ret.push(calc.annotation(a, "h1", mph1));

            return ret;
        }).end();
    } else if (properties.log == "G-G-GL6") {
        return turnPlane.reduce((prev, p, index, buffer) => {
            if (index == 0) {
                let as = calc.annotation(a, "gl6e", { x: 0, y: p[index].y - a.gl6e.width / 2 });
                as.trip = false;
                return as;
            }
            let ret = [
                { type: "polyline", geometry: p },
                calc.annotation(a, "gl6e", { x: 0, y: p[index + 1].y + a.gl6e.width / 2 })
            ];
            ret.push(calc.annotation(a, "gl6", { x: -(a.gl6.height / 2 + arrowSize / 2), y: (p[index + 1].y - p[index].y) / 2 }));
            return ret;
        }).end();
    } else if (properties.log == "G-G-GLA") {
        let div = pbs.div;
        return turnPlane.map((prev, p, i, buffer) => {
            let ret = [];
            let bswitch = 1;

            for (let iy = p[i].y + div; iy < (p[i + 1].y - (div * 2)); iy += (div * 2)) {
                if ((bswitch % 2) != 0) {
                    calc.x({ x: 0, y: iy }, div).forEach(p => { ret.push(p); });
                }
                bswitch++;
            }
            ret.push({
                type: "polyline",
                geometry: [p[i], p[i + 1]]
            });
            if (bcompleted === true && (p.length - 2) == i) {
                for (let y = p[i + 1].y; y <= p[i + 1].y + (div * 2); y += (div * 2)) {
                    let sw = true;
                    let g = [];
                    for (let dx = -4 * div; dx <= 4 * div; dx += 2 * div) {
                        if (sw === true) {
                            calc.arc(-Math.PI / 2, -Math.PI * 3 / 2, div, { translate: { x: dx, y: y + div } }).forEach(a => {
                                g = g.concat(a.geometry);
                            });
                        } else {
                            calc.arc(-Math.PI / 2, Math.PI / 2, div, { translate: { x: dx, y: y + div } }).forEach(a => {
                                g = g.concat(a.geometry);
                            });
                        }
                        sw = !sw;
                    }
                    ret.push({
                        type: "polyline",
                        geometry: g
                    });
                }
            }
            return ret;
        }).end();
    } else if (properties.log == "G-G-GLE") {
        return turnPlane.map((prev, p, index, buffer) => {
            let ret = [
                { type: "polyline", geometry: [p[index], p[index + 1]] },
                calc.annotation(a, "glee", { x: -a.glee.height / 2, y: p[index + 1].y - a.glee.width / 2 }),
                calc.annotation(a, "gle", { x: a.gle.height / 2, y: p[index].y + a.gle.width / 2 }),
                calc.annotation(a, "gle", { x: a.gle.height / 2, y: p[index + 1].y - a.gle.width / 2 })
            ];
            calc.arc(-Math.PI, 0, pbs.gledist, { translate: calc.mid(p[index], p[index + 1]) }).forEach(g => {
                ret.push(g);
            });

            return ret;
        }).end();
    } else if (properties.log == "G-G-GLF") {
        let lastPt = { x: 0, y: 0 };
        return turnPlane.map((prev, p, index, buffer) => {
            let ret = [];
            if (index == 0) {
                ret.push(calc.annotation(a, "n", { x: -a.n.height / 1.5, y: p[index].y - a.n.width / 2 }, { trip: true }));
                ret.push(calc.annotation(a, "flot", { x: 0, y: p[index].y - a.flot.width / 2 }, { trip: true }));
            }
            let i = 0;
            for (; i < p[index + 1].y - pbs.glfdist * 2; i += pbs.glfdist * 2) {
                calc.arc(-Math.PI, 0, pbs.glfdist, { div: 20, translate: { x: 0, y: i + (pbs.glfdist / 2) } }).forEach(g => {
                    ret.push(g);
                });
            }
            //p[index + 1].y = i - pbs.glfdist * 2;
            if (bcompleted === true && (p.length - 2) == index) {
                ret.push(calc.annotation(a, "n", { x: -a.n.height / 1.5, y: p[index + 1].y + a.n.width / 2 }, { trip: true }));
                ret.push(calc.annotation(a, "flot", { x: 0, y: p[index + 1].y + a.flot.width / 2 }, { trip: true }));
            }
            return ret;

        }).end();
    } //TACGRP.C2GM.GNL.LNE.FLOT
    else if (properties.log == "G-G-GLC") {
        return turnPlane.map((prev, p, index, buffer) => {
            let ret = [];
            if (index == 0) {
                ret.push(calc.annotation(a, "n", { x: a.n.height, y: p[index].y - a.n.width / 2 }, undefined, { trip: true }));
            }
            let i = 0;
            for (; i < p[index + 1].y - pbs.glfdist * 2; i += pbs.glfdist * 2) {
                calc.arc(-Math.PI, 0, pbs.glfdist, { div: 30, translate: { x: pbs.glfdist, y: i + (pbs.glfdist / 2) } }).forEach(g => {
                    ret.push(g);
                });
                calc.arc(Math.PI, 0, pbs.glfdist, { div: 30, translate: { x: -pbs.glfdist, y: i + (pbs.glfdist / 2) } }).forEach(g => {
                    ret.push(g);
                });
            }
            //p[index + 1].y = i - pbs.glfdist * 2;
            if (bcompleted === true && (p.length - 2) == index) {
                ret.push(calc.annotation(a, "n", { x: a.n.height, y: (i - pbs.glfdist * 2) + a.n.width / 2 }));
            }
            return ret;

        }).end();
    } //TACGRP.C2GM.GNL.LNE.LOC
    else if (properties.log == "G-G-GLP") {
        return turnPlane.reduce((prev, p, index, buffer) => {
            let ret = [];
            if (index == 0) {
                ret.push(calc.annotation(a, "pl", { x: 0, y: -(a.t.width + a.pl.width / 2) }, undefined, { trip: false }));
                ret.push(calc.annotation(a, "t", { x: 0, y: p[index].y - a.t.width / 2 }, undefined, { trip: false }));
            }
            ret.push({ type: "polyline", geometry: p });
            //p[index + 1].y = i - pbs.glfdist * 2;
            if (bcompleted === true && (p.length - 2) == index) {
                ret.push(calc.annotation(a, "pl", { x: 0, y: p[index + 1].y + a.pl.width / 2 }));
                ret.push(calc.annotation(a, "t", { x: 0, y: p[index + 1].y + a.pl.width + a.t.width / 2 }));
            }
            return ret;

        }).end();
    } //TACGRP.C2GM.GNL.LNE.PHELNE
    else if (properties.log == "G-G-GLL") {
        return turnPlane.reduce((prev, p, index, buffer) => {
            let ret = [];
            if (index == 0) {
                ret.push(calc.annotation(a, "ll", { x: -a.plt.height, y: -(a.plt.width / 2) }, undefined, { trip: false }));
                ret.push(calc.annotation(a, "plt", { x: 0, y: -a.plt.width / 2 }, undefined, { trip: false }));
            }
            ret.push({ type: "polyline", geometry: p });
            //p[index + 1].y = i - pbs.glfdist * 2;
            if (bcompleted === true && (p.length - 2) == index) {
                ret.push(calc.annotation(a, "ll", { x: -a.plt.height, y: p[index + 1].y + (a.plt.width / 2) }));
                ret.push(calc.annotation(a, "plt", { x: 0, y: p[index + 1].y + (a.plt.width / 2) }));
            }
            return ret;

        }).end();
    } else if (properties.log == "G-G-DLA") {
        return turnPlane.reduce((prev, p, index, buffer) => {
            let ret = [];
            if (index == 0) {
                ret.push(calc.annotation(a, "w", { x: a.dla.height, y: -(a.dla.width / 2) }, undefined, { trip: false }));
                ret.push(calc.annotation(a, "dla", { x: 0, y: -a.dla.width / 2 }, undefined, { trip: false }));
            }
            ret.push({ type: "polyline", geometry: p });
            //p[index + 1].y = i - pbs.glfdist * 2;
            if (bcompleted === true && (p.length - 2) == index) {
                ret.push(calc.annotation(a, "w", { x: a.dla.height, y: p[index + 1].y + (a.dla.width / 2) }));
                ret.push(calc.annotation(a, "dla", { x: 0, y: p[index + 1].y + (a.dla.width / 2) }));
            }
            return ret;

        }).end();
    } else if (properties.log == "G-G-DLB") {
        return turnPlane.reduce((prev, p, index, buffer) => {
            let ret = [];
            if (index == 0) {
                ret.push(calc.annotation(a, "w", { x: a.dlb.height, y: -(a.dlb.width / 2) }, undefined, { trip: false }));
                ret.push(calc.annotation(a, "dlb", { x: 0, y: -a.dlb.width / 2 }, undefined, { trip: false }));
            }
            ret.push({ type: "polyline", geometry: p });
            //p[index + 1].y = i - pbs.glfdist * 2;
            if (bcompleted === true && (p.length - 2) == index) {
                ret.push(calc.annotation(a, "w", { x: a.dlb.height, y: p[index + 1].y + (a.dlb.width / 2) }));
                ret.push(calc.annotation(a, "dlb", { x: 0, y: p[index + 1].y + (a.dlb.width / 2) }));
            }
            return ret;

        }).end();
    } else if (properties.log == "G-G-DLC") {
        return turnPlane.reduce((prev, p, index, buffer) => {
            let ret = [];
            calc.toDot(turnPlane, p, arrowSize * 2).forEach((a) => {
                calc.arrowLine(turnPlane, a.geometry[0], a.geometry[a.geometry.length - 1], arrowSize / 3, 30).forEach(g => {
                    ret.push(g);
                });
            });
            return ret;
        }).end();
    } else if (properties.log == "G-G-OLF") {
        return turnPlane.reduce((prev, p, index, buffer) => {
            let ret = [];
            if (index == 0) {
                //ret.push(calc.annotation(a, "w", { x: a.dlb.height, y: -(a.dlb.width / 2) }, undefined, { trip: false }));
                ret.push(calc.annotation(a, "olf", { x: 0, y: -a.olf.width / 2 }, undefined, { trip: false }));
            }
            ret.push({ type: "polyline", geometry: p });
            //p[index + 1].y = i - pbs.glfdist * 2;
            if (bcompleted === true && (p.length - 2) == index) {
                //ret.push(calc.annotation(a, "w", { x: a.dlb.height, y: p[index + 1].y + (a.dlb.width / 2) }));
                ret.push(calc.annotation(a, "olf", { x: 0, y: p[index + 1].y + (a.olf.width / 2) }));
            }
            return ret;

        }).end();
    } else if (properties.log == "G-G-OLL") {
        return turnPlane.reduce((prev, p, index, buffer) => {
            let ret = [];
            if (index == 0) {
                //ret.push(calc.annotation(a, "w", { x: a.dlb.height, y: -(a.dlb.width / 2) }, undefined, { trip: false }));
                ret.push(calc.annotation(a, "oll", { x: 0, y: -a.oll.width / 2 }, undefined, { trip: false }));
            }
            ret.push({ type: "polyline", geometry: p });
            //p[index + 1].y = i - pbs.glfdist * 2;
            if (bcompleted === true && (p.length - 2) == index) {
                //ret.push(calc.annotation(a, "w", { x: a.dlb.height, y: p[index + 1].y + (a.dlb.width / 2) }));
                ret.push(calc.annotation(a, "oll", { x: 0, y: p[index + 1].y + (a.oll.width / 2) }));
            }
            return ret;

        }).end();
    } else if (properties.log == "G-G-OLT") {
        return turnPlane.reduce((prev, p, index, buffer) => {
            let ret = [];
            if (index == 0) {
                //ret.push(calc.annotation(a, "w", { x: a.dlb.height, y: -(a.dlb.width / 2) }, undefined, { trip: false }));
                ret.push(calc.annotation(a, "olt", { x: 0, y: -a.olt.width / 2 }, undefined, { trip: false }));
            }
            ret.push({ type: "polyline", geometry: p });
            //p[index + 1].y = i - pbs.glfdist * 2;
            if (bcompleted === true && (p.length - 2) == index) {
                //ret.push(calc.annotation(a, "w", { x: a.dlb.height, y: p[index + 1].y + (a.dlb.width / 2) }));
                ret.push(calc.annotation(a, "olt", { x: 0, y: p[index + 1].y + (a.olt.width / 2) }));
            }
            return ret;

        }).end();
    } else if (properties.log == "G-G-OLC") {
        return turnPlane.reduce((prev, p, index, buffer) => {
            let ret = [];
            if (index == 0) {
                //ret.push(calc.annotation(a, "w", { x: a.dlb.height, y: -(a.dlb.width / 2) }, undefined, { trip: false }));
                ret.push(calc.annotation(a, "olc", { x: 0, y: -a.olc.width / 2 }, undefined, { trip: false }));
            }
            ret.push({ type: "polyline", geometry: p });
            //p[index + 1].y = i - pbs.glfdist * 2;
            if (bcompleted === true && (p.length - 2) == index) {
                //ret.push(calc.annotation(a, "w", { x: a.dlb.height, y: p[index + 1].y + (a.dlb.width / 2) }));
                ret.push(calc.annotation(a, "olc", { x: 0, y: p[index + 1].y + (a.olc.width / 2) }));
            }
            return ret;

        }).end();
    } else if (properties.log == "G-G-OLP") {
        return turnPlane.reduce((prev, p, index, buffer) => {
            let ret = [];
            if (index == 0) {
                //ret.push(calc.annotation(a, "w", { x: a.dlb.height, y: -(a.dlb.width / 2) }, undefined, { trip: false }));
                ret.push(calc.annotation(a, "olp", { x: 0, y: -a.olp.width / 2 }, undefined, { trip: false }));
            }
            ret.push({ type: "polyline", geometry: p });
            //p[index + 1].y = i - pbs.glfdist * 2;
            if (bcompleted === true && (p.length - 2) == index) {
                //ret.push(calc.annotation(a, "w", { x: a.dlb.height, y: p[index + 1].y + (a.dlb.width / 2) }));
                ret.push(calc.annotation(a, "olp", { x: 0, y: p[index + 1].y + (a.olp.width / 2) }));
            }
            return ret;

        }).end();
    }

}

module.exports = {
    modular: mlines,
    minPointCount: 2,
    properties: {
        size: {
            dot: 10,
            gl3_div: 30,
            gl3_height: 50,
            gl3_gap: 5,
            gl3_margin: 10,
            arrow: 20,
            div: 20,
            gledist: 20,
            glfdist: 10
        },
        annotations: {
            s: {
                filter: ["G-G-GL3"],
                value: "전이선",
                anchor: { x: 0, y: 0 }
            },
            f: {
                filter: ["G-G-GL4"],
                value: "전방전투 지경선",
                anchor: { x: 0, y: 0 }
            },
            gl5c: {
                filter: ["G-G-GL5C", "G-G-GL5C"],
                value: "{T} {H}({C}){T}",
                anchor: { x: 0.5, y: 0 }
            },
            mmr: {
                filter: ["G-G-GL5EM"],
                value: "MMR {T}",
                anchor: { x: 0.5, y: 0 }
            },
            amr: {
                filter: ["G-G-GL5EA"],
                value: "AMR {T}",
                anchor: { x: 0.5, y: 0 }
            },
            gl6: {
                filter: ["G-G-GL6"],
                value: "주민이동로 {T}",
                anchor: { x: 0.5, y: 0 }
            },
            gl6e: {
                filter: ["G-G-GL6"],
                value: "통제선 {T1}",
                anchor: { x: 0.5, y: 0 }
            },
            gl5l: {
                filter: ["G-G-GL5L"],
                fontSize: 10,
                value: "고정시설한정",
                anchor: { x: 0.5, y: 0 }
            },
            gl5w: {
                filter: ["G-G-GL5W"],
                fontSize: 10,
                value: "M/W 한정",
                anchor: { x: 0, y: 0 }
            },
            b: {
                filter: ["G-G-GLB"],
                value: "{B}",
                anchor: { x: 0, y: 0 }
            },
            h: {
                value: "{H}",
                anchor: { x: 0, y: 0 }
            },
            h1: {
                value: "{H1}",
                anchor: { x: 0, y: 0 }
            },
            t: {
                value: "{T}",
                anchor: { x: 0, y: 0 }
            },
            t1: {
                value: "{T1}",
                anchor: { x: 0, y: 0 }
            },
            n: {
                value: "{N}",
                anchor: { x: 0, y: 0 }
            },
            w: {
                value: "{W}",
                anchor: { x: 0, y: 0 }
            },
            pl: {
                value: "PL ",
                anchor: { x: 0, y: 0 }
            },
            gle: {
                filter: ["G-G-GLE"],
                value: "해안두보선",
                anchor: { x: 0, y: 0 }
            },
            glee: {
                filter: ["G-G-GLE"],
                value: "해안선",
                anchor: { x: 0, y: 0 }
            },
            flot: {
                filter: ["G-G-GLF"],
                value: "FLOT",
                anchor: { x: 0, y: 0 }
            },
            ll: {
                filter: ["G-G-GLL"],
                value: "LL",
                anchor: { x: 0, y: 0 }
            },
            plt: {
                filter: ["G-G-GLL"],
                value: "PL {T}",
                anchor: { x: 0, y: 0 }
            },
            dla: {
                filter: ["G-G-DLA"],
                value: "봉쇄선 {T}",
                anchor: { x: 0, y: 0 }
            },
            dlb: {
                filter: ["G-G-DLB"],
                value: "차단선 {T}",
                anchor: { x: 0, y: 0 }
            },
            olf: {
                filter: ["G-G-OLF"],
                value: "FINAL CL\n(PL {T})",
                anchor: { x: 0, y: 0 }
            },
            oll: {
                filter: ["G-G-OLL"],
                value: "LOA\n(PL {T})",
                anchor: { x: 0, y: 0 }
            },
            olt: {
                filter: ["G-G-OLT"],
                value: "LD\n(PL {T})",
                anchor: { x: 0, y: 0 }
            },
            olc: {
                filter: ["G-G-OLC"],
                value: "LD/LC\n(PL {T})",
                anchor: { x: 0, y: 0 }
            },
            olp: {
                filter: ["G-G-OLP"],
                value: "PLD\n(PL {T})",
                anchor: { x: 0, y: 0 }
            }
        },
        variables: {
            T: "312",
            T1: "강화",
            H: "ATM",
            H1: "예비",
            C: "T1",
            N: "N",
            W: "W",
            B: "XX",
        }
    }
};