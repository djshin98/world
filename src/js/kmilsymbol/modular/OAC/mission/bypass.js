"use strict";
const { calc, rect } = require("../../../graphics/math");

function bypass(turnPlane, properties, bcompleted) {
    let arrowSize = properties.pixelBySize.arrow;
    return turnPlane.map((prev, p, i, buffer) => {
        if (properties.log == "G-T-Y") {
            if (i == 0) {
                if (p.length == 3) {
                    let a = properties.annotations;
                    let c = rect(p[2].x, p[1].y / 2, a.b.width, a.b.height);
                    let ll = c.linkLine({ x: p[2].x, y: 0 }, { x: p[2].x, y: p[1].y });

                    return [{
                        type: "polyline",
                        geometry: [
                            p[0], { x: p[2].x, y: 0 }
                        ]
                    }, {
                        type: "polyline",
                        geometry: [
                            { x: p[2].x, y: p[1].y }, { x: 0, y: p[1].y }
                        ]
                    }, ll[0], ll[1], {
                        type: "polyline",
                        geometry: calc.arrow(turnPlane, { x: p[2].x, y: 0 }, p[0], arrowSize).geometry
                    }, {
                        type: "polyline",
                        geometry: calc.arrow(turnPlane, { x: p[2].x, y: p[1].y }, { x: 0, y: p[1].y }, arrowSize).geometry

                    }, {
                        type: "annotation",
                        geometry: c.geometry(),
                        name: "b",
                        debug: true
                    }];
                }
            }
        } else if (properties.log == "G-T-H") {
            if (i == 0) {
                if (p.length == 3) {
                    let a = properties.annotations;
                    let c = rect(p[2].x, p[1].y / 2, a.b.width, a.b.height);
                    let ll = c.linkLine({ x: p[2].x, y: 0 }, { x: p[2].x, y: p[1].y });

                    return [{
                        type: "polyline",
                        geometry: [
                            p[0], { x: p[2].x, y: 0 }
                        ]
                    }, {
                        type: "polyline",
                        geometry: [
                            { x: p[2].x, y: p[1].y }, { x: 0, y: p[1].y }
                        ]
                    }, ll[0], ll[1], {
                        type: "polyline",
                        geometry: [{ x: p[0].x - arrowSize, y: p[0].y + arrowSize }, { x: p[0].x + arrowSize, y: p[0].y - arrowSize }]
                    }, {
                        type: "polyline",
                        geometry: [{ x: p[1].x - arrowSize, y: p[1].y - arrowSize }, { x: p[1].x + arrowSize, y: p[1].y + arrowSize }]

                    }, {
                        type: "annotation",
                        geometry: c.geometry(),
                        name: "b",
                        debug: true
                    }];
                }
            }
        } else if (properties.log == "G-T-C") {
            if (i == 0) {
                if (p.length == 3) {
                    let a = properties.annotations;
                    let c = rect(p[2].x, p[1].y / 2, a.b.width, a.b.height);
                    let ll = c.linkLine({ x: p[2].x, y: 0 }, { x: p[2].x, y: p[1].y });

                    return [{
                        type: "polyline",
                        geometry: [
                            p[0], { x: p[2].x, y: 0 }
                        ]
                    }, {
                        type: "polyline",
                        geometry: [
                            { x: p[2].x, y: p[1].y }, { x: 0, y: p[1].y }
                        ]
                    }, ll[0], ll[1], {
                        type: "polyline",
                        geometry: [{ x: p[0].x - arrowSize, y: p[0].y - arrowSize }, { x: p[0].x + arrowSize, y: p[0].y + arrowSize }]
                    }, {
                        type: "polyline",
                        geometry: [{ x: p[1].x - arrowSize, y: p[1].y + arrowSize }, { x: p[1].x + arrowSize, y: p[1].y - arrowSize }]

                    }, {
                        type: "annotation",
                        geometry: c.geometry(),
                        name: "c",
                        debug: true
                    }];
                }
            }
        }

    }).end();
}

module.exports = {
    modular: bypass,
    minPointCount: 2,
    maxPointCount: 3,
    properties: {
        size: {
            arrow: 30,
        },
        annotations: {
            b: {
                value: "B",
                anchor: { x: 0, y: 0 }
            },
            c: {
                value: "C",
                anchor: { x: 0, y: 0 }
            }
        }
    }
};