const { calc, rect } = require("../../../graphics/math");

function callForFireZone(turnPlane, properties, bcompleted) {

    let a = properties.annotations;

    return turnPlane.reduce((prev, p, i, buffer) => {
        if (properties.log == "G-F-AZXR") {
            if (i == 0) {

                let a = properties.annotations;
                p.push(p[0]);

                let height = a["k"].height;
                let p1 = { x: -height / 2, y: 0 };
                let p2 = { x: height / 2, y: 0 };
                let p3 = { x: -height / 2, y: p[1].y };
                let p4 = { x: height / 2, y: p[1].y };

                let s = calc.avg(p);

                let ret1 = [];
                let t = calc.annotation(a, "k", s);
                ret1.push(t)
                ret1.push({
                    type: "polyline",
                    geometry: [p1, p2]
                }, {
                    type: "polyline",
                    geometry: [p3, p4]
                }, {
                    type: "polyline",
                    geometry: [p2, p4]
                }, {
                    type: "polyline",
                    geometry: [p1, p3]
                });

                return ret1;
            }


        }

    }).end();
}

module.exports = {
    modular: callForFireZone,
    minPointCount: 2,
    maxPointCount: 2,
    properties: {
        annotations: {
            k: {
                value: "{N}\nCFF ZONE \n{T}",
                anchor: { x: 0, y: 0 }
            },
        }
    }
};