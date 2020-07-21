const { calc, rect } = require("../../../graphics/math");
const { centerRightAngle } = require("../../../graphics/prework");
const artilleryTargetIntelligenceZone = require("../../artillery-target-intelligence-zone");

function block(turnPlane, properties, bcompleted) {
    let dist;
    let arrowSize = properties.pixelBySize.arrow;
    let a = properties.annotations;

    let orders = [
        [0, 2],
        [1, 3]
    ];
    return turnPlane.map((prev, p, i, buffer) => {
        if (properties.log == "G-T-B") {
            if (i == 0) {
                return { type: "polyline", geometry: [p[0], p[2]] };
            } else if (i == 1) {
                return calc.annotationOnLine(a, "r", 0.5, p[1], p[3]);
            }
        } else if (properties.log == "G-T-J") {
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
        } else if (properties.log == "G-T-P") {
            if (i == 0) {
                return { type: "polyline", geometry: [p[0], p[2]] };
            } else if (i == 1) {
                let ret = calc.annotationOnLine(a, "b", 0.5, p[1], p[3]);
                ret.push(calc.arrow(turnPlane, p[3], p[1], arrowSize));
                return ret;
            }
        }

    }, centerRightAngle, orders).end();
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
                value: "B",
                anchor: { x: 0, y: 0 }
            },
            eny: {
                value: "ENY",
                anchor: { x: 0, y: 0 }
            },
            c: {
                value: "C",
                anchor: { x: 0, y: 0 }
            },
            b: {
                value: "P",
                anchor: { x: 0, y: 0 }
            }
        }
    }
};