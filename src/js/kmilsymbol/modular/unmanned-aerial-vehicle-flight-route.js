const { calc, rect } = require("../graphics/math");

function route(turnPlane, properties, bcompleted) {
    return turnPlane.map((prev, p, i, buffer) => {
        if (i == 0) {
            let s = properties.pixelBySize;
            let a = properties.annotations;
            let width = properties.variables.width;
            let cc = calc.mid(calc.move(p[i], -width / 2, 0), calc.move(p[i + 1], -width / 2, 0));
            return [{
                type: "polyline",
                geometry: [
                    calc.move(p[i], -width / 2, 0), calc.move(p[i + 1], -width / 2, 0)
                ]
            }, {
                type: "polyline",
                geometry: [
                    calc.move(p[i], width / 2, 0), calc.move(p[i + 1], width / 2, 0)
                ]
            }, {
                type: "annotation", //"annotation",
                geometry: rect(0, (p[i + 1].y - p[i].y) / 2, a.a.width, a.a.height)
                    .move(-width / 2, 0).move(-a.a.height / 2 - (a.a.height * 0.1), 0).geometry(), //.move(a.a.anchor.x, a.a.anchor.y)
                name: "a",
                debug: true
            }, {
                type: "annotation", //"annotation",
                geometry: rect(0, (p[i + 1].y - p[i].y) / 2, a.c.width, a.c.height).geometry(),
                name: "c",
                debug: true
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
        variables: { // 사용자가 변경할 수 있다.
            name: "무인항공기비행경로",
            width: 100,
            minAlt: 1000,
            maxAlt: 2000,
            dtgStart: "{DTGSTART}",
            dtgEnd: "{DTGEND}"
        }
    }
};