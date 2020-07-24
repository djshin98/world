"use strict";

const { calc } = require("../graphics/math");

function fake(turnPlane, properties, bcompleted) {
    return turnPlane.map((prev, p, i, buffer) => {
        let s = properties.pixelBySize;

        if (i == 0) {
            let pa = [];
            let count = calc.distance(p[0], p[1]) / s.div;
            let pk = [];
            for (let index = 0; index < count; index++) {
                if (index % 2 == 0) {
                    pa.push({ x: 0, y: (s.div * index) });
                    pa.push({ x: 0, y: (s.div * index) + s.div });

                    pk.push({
                        type: "polyline",
                        geometry: pa,
                    });
                    pa = [];
                }
            }
            return pk;
        } else if (i == 1) {
            let pts = turnPlane.turnStack(p, 0, 2, (pt) => {
                let pa = [];
                let count = calc.distance(pt[0], pt[2]) / s.div;
                let pk = [];
                for (let i = 0; i < count; i++) {
                    if (i % 2 == 0) {
                        pa.push({ x: 0, y: (s.div * i) });
                        pa.push({ x: 0, y: (s.div * i) + s.div });

                        pk.push({
                            type: "polyline",
                            geometry: pa,
                        });
                        pa = [];

                    }

                }
                return pk;
            });
            return pts;
        }
    }).end();
}


module.exports = {
    modular: fake,
    minPointCount: 2,
    maxPointCount: 3,
    properties: {
        size: {
            div: 10,
        },
        pixelBySize: {}
    }

};