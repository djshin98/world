const { calc } = require("../../../graphics/math");

function route(turnPlane, properties, bcompleted) {

    let s = properties.pixelBySize;
    let a = properties.annotations;

    return turnPlane.reduce((prev, p, i, buffer) => {
        let ret = [];
        ret.push({
            type: "polyline",
            geometry: [{ x: -s.line * 3 / 4, y: 0 }, { x: s.line / 4, y: 0 }]
        });
        ret.push({
            type: "polyline",
            geometry: [{ x: -s.line * 3 / 4, y: p[1].y }, { x: s.line / 4, y: p[1].y }]
        });

        calc.annotationOnLine(a, "c", 0.5, { x: -s.line * 2 / 4, y: 0 }, { x: -s.line * 2 / 4, y: p[1].y }).forEach((i, g) => {
            if (i == 0) {
                grp.push(calc.arrow(turnPlane, g.geometry[0], g.geometry[1], s.arrow, 30));
            } else {
                grp.push(calc.arrow(turnPlane, g.geometry[1], g.geometry[0], s.arrow, 30));
            }
        });
        return ret;
    }).end();
}

module.exports = {
    modular: route,
    minPointCount: 2,
    maxPointCount: 2,
    properties: {
        size: {
            arrow: 10,
            line: 50
        },
        annotations: {
            c: {
                value: "통제",
                anchor: { x: 0, y: 0 }
            }
        }
    }
};