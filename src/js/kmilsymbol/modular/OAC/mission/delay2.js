"use strict";

const { calc, line } = require("../../../graphics/math");

function delay(turnPlane, properties, bcompleted) {
    let a = properties.annotations;
    let arrowSize = properties.pixelBySize.arrow;
    let aname = "rip"
    if (properties.log == "G-T-R") {
        aname = "rip"
    }
    let zeroPLeft = false;
    return turnPlane.reduce((prev, p, i, buffer) => {
        if (i == 0) {
            buffer.push({
                type: "line1",
                geometry: [{ x: -100, y: p[1].y }, { x: 100, y: p[1].y }]
            })
            return line(p[0], p[1]).end();
        } else if (i == 1) {
            if (p[0].x < 0) {
                zeroPLeft = true;
                return calc.arc(-Math.PI, -Math.PI * 2, calc.distance(p[1], p[2]) / 2, { translate: calc.mid(p[1], p[2]) });
            } else {
                zeroPLeft = false;
                return calc.arc(0, -Math.PI, calc.distance(p[1], p[2]) / 2, { translate: calc.mid(p[1], p[2]) });
            }

        } else {
            let s = buffer[0].geometry;
            let pmx = line(p[0], p[1]).intersect(line(p[2], p[3]));

            let dist1 = calc.distance(pmx, p[1]);
            let dist2 = calc.distance(pmx, p[2]);
            if (dist1 > dist2) {
                if (pmx.y < p[2].y) {
                    p[2].y = pmx.y + dist1;
                } else {
                    p[2].y = pmx.y - dist1;
                }
            } else {
                let p1 = calc.extension(turnPlane, pmx, p[1], dist2);
                p[1] = p1.geometry[1];
            }
            let xdist = calc.distance(p[1], p[2]);
            let cmx = calc.mid(p[1], p[2]);
            let mx = line(cmx, pmx).intersect(line(s[0], s[1]));
            let rra = calc.dir(turnPlane, p[2], p[3], 90, xdist).geometry[1];
            let lra = calc.dir(turnPlane, p[2], p[3], -90, xdist).geometry[1];
            let center = line(cmx, pmx).intersect(line(lra, rra));
            let ret = [];

            turnPlane.turnStack([center, p[2], p[1], pmx], 0, 1, (pr) => {
                let e = pr[2];
                let os = pr[3];
                let r = calc.θ(e);
                let signR = (r) / Math.abs(r);
                let signOSX = (os.x) / Math.abs(os.x);
                if (zeroPLeft === false) {
                    if (signR < 0 && signOSX < 0) {
                        //console.log("f");
                    } else {
                        r = r - Math.PI * 2;
                    }
                } else {
                    if (signR < 0 && signOSX < 0) {
                        r = (r + Math.PI) + Math.PI;
                    } else {}
                }
                /*
                if (zeroPLeft === false && signR < 0 && signOSX < 0) {
                    console.log("f");
                } else if (zeroPLeft == false && signR > 0 && signOSX > 0) {
                    // console.log("f");
                } else {
                    //  console.log("ok");
                }*/

                //console.log(zeroPLeft + "--" + "r : " + (r) / Math.abs(r) + " , " + "os:" + (os.x) / Math.abs(os.x) + "," + (os.y) / Math.abs(os.y));
                return calc.arc(0, r, calc.distance(pr[0], pr[1]));

            }).forEach(g => { ret.push(g); });

            ret.push(calc.annotation(a, "rip", center));
            //ret.push(calc.annotation(a, "cmx", cmx));
            //ret.push(calc.annotation(a, "pmx", pmx));
            //ret.push(calc.annotation(a, "lra", lra));
            //ret.push(calc.annotation(a, "rra", rra));

            calc.arrowLine(turnPlane, p[0], p[1], arrowSize).forEach(g => { ret.push(g); });
            calc.arrowLine(turnPlane, p[2], p[3], arrowSize).forEach(g => { ret.push(g); });
            return ret;
        }
    }).end();

}

module.exports = {
    modular: delay,
    minPointCount: 2,
    maxPointCount: 4,
    properties: {
        size: {
            arrow: 20
        },
        annotations: {
            rip: {
                value: "RIP",
                anchor: { x: 0, y: 0 }
            },
            cmx: {
                value: "CMX",
                anchor: { x: 0, y: 0 }
            },
            pmx: {
                value: "PMX",
                anchor: { x: 0, y: 0 }
            },
            rra: {
                value: "RRA",
                anchor: { x: 0, y: 0 }
            },
            lra: {
                value: "LRA",
                anchor: { x: 0, y: 0 }
            }
        }
    }
};