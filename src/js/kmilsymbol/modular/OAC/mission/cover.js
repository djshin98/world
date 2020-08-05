const { calc, rect } = require("../../../graphics/math");
const { pass } = require("../../../graphics/prework");

function arrowThunder(turnPlane, p1, p2, arrowSize) {
    let mid = calc.mid(p1, p2);
    let dist = calc.distance(p1, p2);
    let thunder = dist / 30;
    let line = [p1, { x: mid.x + thunder, y: mid.y + thunder }, { x: mid.x - thunder, y: mid.y - thunder }, p2];
    let ret = [];
    ret.push({
        type: "polyline",
        geometry: line
    });
    ret.push(calc.arrow(turnPlane, line[2], line[3], arrowSize, 30));
    return ret;
}

function cover(turnPlane, properties, bcompleted) {
    let arrowSize = properties.pixelBySize.arrow;
    let thunder = properties.pixelBySize.thunder;
    let marker = properties.pixelBySize.marker;
    let a = properties.annotations;
    let aname = "s"
    if (properties.log == "G-T-US") {
        aname = "s"
    } else if (properties.log == "G-T-UG") {
        aname = "g"
    } else if (properties.log == "G-T-UC") {
        aname = "c"
    } else if (properties.log == "G-T-UP") {
        aname = "p"
    } else if (properties.log == "G-G-GAS") {
        aname = undefined;
    }

    let orders = [
        [0, 1],
        [0, 2]
    ];

    return turnPlane.reduce((prev, p, i, buffer) => {
        let ret = [];

        if (i == 0) {
            return arrowThunder(turnPlane, p[0], p[1], arrowSize);
        } else if (i == 1) {
            let braceLen = marker + Q.isValid(aname) ? (a[aname].width * 2) : 0;
            let θ = calc.θ(p[1]);
            let alpha = (Math.PI - θ) / 2;
            let lineLen = (braceLen / 2) / Math.cos(alpha);
            let pa = {
                x: 0,
                y: lineLen
            }
            let pb = {
                x: lineLen * Math.sin(θ),
                y: lineLen * Math.cos(θ)
            }
            let arr = [p[2], pa, pb, p[1]];
            if (Q.isValid(aname)) {
                turnPlane.turnStack(arr, 2, 1, (t) => {
                    return [calc.annotation(a, aname, { x: 0, y: a[aname].width / 2 }),
                        calc.annotation(a, aname, { x: 0, y: t[1].y - a[aname].width / 2 })
                    ];
                }).forEach(g => { ret.push(g); });
            }
            turnPlane.turnStack(arr, 1, 0, (t) => {
                return arrowThunder(turnPlane, t[1], t[0], arrowSize);
            }).forEach(g => { ret.push(g); });
            turnPlane.turnStack(arr, 2, 3, (t) => {
                return arrowThunder(turnPlane, t[2], t[3], arrowSize);
            }).forEach(g => { ret.push(g); });
        }
        return ret;
    }, pass, orders).end();
}


module.exports = {
    modular: cover,
    minPointCount: 2,
    maxPointCount: 3,
    properties: {
        size: {
            arrow: 20,
            thunder: 20,
            marker: 30
        },
        annotations: {
            a: {
                value: "{A}",
                anchor: { x: 0, y: 0 }
            },
            s: {
                value: "S",
                anchor: { x: 0, y: 0 }
            },
            g: {
                value: "G",
                anchor: { x: 0, y: 0 }
            },
            c: {
                value: "C",
                anchor: { x: 0, y: 0 }
            },
            p: {
                value: "P",
                anchor: { x: 0, y: 0 }
            }
        }
    }
};