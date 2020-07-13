const { calc } = require("../graphics/math");

function route(turnPlane, properties, bcompleted) {
    return turnPlane.map((prev, p, i, buffer) => {
        if (i == 0) {
            let s = properties.pixelBySize;

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
                geometry: [{ x: 0, y: p[i + 1].y - p[i].y }],
                name: "a"
            }, {
                type: "annotation",
                geometry: [cc],
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
        annotations: [{
            name: "a",
            text: "Name : {name}\nWidth : {width}\nMin Alt : {minAlt}\nMax Alt : {maxAlt}\nDTG Start : {dtgStart}\nDTG End : {dtgEnd}",
            anchor: "center,bottom"
        }, {
            name: "c",
            text: "UA : {name}",
            anchor: "center,middle"
        }],
        variables: {
            name: "무인항공기비행경로",
            width: 500,
            minAlt: 1000,
            maxAlt: 2000,
            dtgStart: "p0",
            dtgEnd: "p1"
        }
    }
};