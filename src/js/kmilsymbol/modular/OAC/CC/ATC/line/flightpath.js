const { calc, rect } = require("../../../../../graphics/math");

function route(turnPlane, properties, bcompleted) {

    let aname = "alu";
    if (properties.log === "G-G-ALC") {
        aname = "alc";
    } else if (properties.log === "G-G-ALM") {
        aname = "alm";
    } else if (properties.log === "G-G-ALS") {
        aname = "als";
    } else if (properties.log === "G-G-ALU") {
        aname = "alu";
    } else if (properties.log === "G-G-ALL") {
        aname = "all";
    }
    let s = properties.pixelBySize;
    let a = properties.annotations;

    return turnPlane.map((prev, p, i, buffer) => {
        if (i == 0) {

            let width = properties.variables.AM;
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
                name: "a"
            }, {
                type: "annotation", //"annotation",
                geometry: rect(0, (p[i + 1].y - p[i].y) / 2, a[aname].width, a[aname].height).geometry(),
                name: aname
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
                value: "Name : {T}\nWidth : {AM}\nMin Alt : {X}\nMax Alt : {X1}\nDTG Start : {W}\nDTG End : {W1}",
                anchor: { x: 0.5, y: 0 }
            },
            alc: {
                value: "AC : {T}",
                anchor: { x: 0, y: 0 }
            },
            alm: {
                value: "MRR : {T}",
                anchor: { x: 0, y: 0 }
            },
            als: {
                value: "SAAFR : {T}",
                anchor: { x: 0, y: 0 }
            },
            alu: {
                value: "UA : {T}",
                anchor: { x: 0, y: 0 }
            },
            all: {
                value: "LLTR : {T}",
                anchor: { x: 0, y: 0 }
            }
        },
        variables: { // 사용자가 변경할 수 있다.
            T: "무인항공기비행경로",
            AM: 100,
            X: 1000,
            X1: 2000,
            W: "{DTGSTART}",
            W1: "{DTGEND}"
        }
    }
};