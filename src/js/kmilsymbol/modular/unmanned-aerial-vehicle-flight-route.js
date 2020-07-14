const { calc, rect } = require("../graphics/math");

function route(turnPlane, properties, bcompleted) {
    return turnPlane.map((prev, p, i, buffer) => {
        if (i == 0) {
            let s = properties.pixelBySize;
            let a = properties.annotations;
            let cc = calc.mid(calc.move(p[i], -s.width / 2, 0), calc.move(p[i + 1], -s.width / 2, 0));
            return [{
                type: "polyline",
                geometry: [
                    calc.move(p[i], -s.width / 2, 0), calc.move(p[i + 1], -s.width / 2, 0)
                ]
            }, {
                type: "polyline",
                geometry: [
                    calc.move(p[i], s.width / 2, 0), calc.move(p[i + 1], s.width / 2, 0)
                ]
            }, {
                type: "annotation",
                geometry: rect(0, p[i + 1].y - p[i].y, a.a.width, a.a.height)
                    .move(-s.width / 2, 0).move(a.a.anchor.x, a.a.anchor.y).geometry(),
                name: "a"
            }, {
                type: "annotation",
                geometry: rect(0, p[i + 1].y - p[i].y, a.c.width, a.c.height).geometry(),
                name: "c"
            }];
        }
    }).end();
}

module.exports = {
    modular: route,
    minPointCount: 2,
    maxPointCount: 2,
    properties: {
        size: {
            width: 40,
            fontsize: 20
        },
        pixelBySize: {},
        annotations: {
            a: {
                value: "Name : {name}\nWidth : {width}\nMin Alt : {minAlt}\nMax Alt : {maxAlt}\nDTG Start : {dtgStart}\nDTG End : {dtgEnd}",
                anchor: { x: 0.5, y: 0 }
            },
            c: {
                value: "UA : {name}",
                anchor: { x: 0, y: 0 }
            }
        },
        variables: {
            name: "무인항공기비행경로",
            width: 500,
            minAlt: 1000,
            maxAlt: 2000,
            dtgStart: "{DTGSTART}",
            dtgEnd: "{DTGEND}"
        }
    }
};