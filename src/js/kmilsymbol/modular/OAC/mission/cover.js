const { calc, rect } = require("../../../graphics/math");
const { pass } = require("../../../graphics/prework");

function cover(turnPlane, properties, bcompleted) {
    let arrowSize = properties.pixelBySize.arrow;
    let thunder = properties.pixelBySize.thunder;
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
    }

    let orders = [
        [0, 1],
        [0, 2],
    ];

    return turnPlane.map((prev, p, i, buffer) => {
        let pindex = 1;
        if (i == 0) { pindex = 1; } else if (i == 1) { pindex = 2; }
        let mid = calc.mid(p[0], p[pindex]);
        let dist = calc.distance(p[0], p[pindex]);
        thunder = dist / 10;
        let line = [p[0], { x: mid.x + thunder, y: mid.y + thunder }, { x: mid.x - thunder, y: mid.y - thunder }, p[pindex]];
        let ret = calc.annotationOnLine(a, aname, 0.1, line[0], line[1], (i, g) => {
            if (i == 1) {
                g.geometry.push(line[2]);
                g.geometry.push(line[3]);
            }
        });
        ret.push(calc.arrow(turnPlane, line[2], line[3], arrowSize, 30));
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
            thunder: 20
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