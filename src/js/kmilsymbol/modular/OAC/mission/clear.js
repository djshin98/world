const { calc, rect } = require("../../../graphics/math");

function clear(turnPlane, properties, bcompleted) {
    return turnPlane.map((prev, points, index, buffer) => {
        if (index == 0) {
            if (points.length == 2) {
                return {
                    type: "polyline",
                    geometry: [
                        points[0], points[1]
                    ],
                };
            } else if (points.length == 3) {
                let ret = [];
                let gap = calc.distance(points[0], points[1]) / 8;
                let mid = calc.mid(points[0], points[1]);

                let p1 = { x: 0, y: points[1].y - gap };
                let p2 = { x: 0, y: mid.y };
                let p3 = { x: 0, y: points[0].y + gap };

                let e1 = { x: points[2].x, y: points[1].y - gap };
                let e2 = { x: points[2].x, y: mid.y };
                let e3 = { x: points[2].x, y: points[0].y + gap };

                let a1 = calc.arrow(turnPlane, e1, p1, properties.pixelBySize.arrow);
                let a2 = calc.arrow(turnPlane, e2, p2, properties.pixelBySize.arrow);
                let a3 = calc.arrow(turnPlane, e3, p3, properties.pixelBySize.arrow);

                ret = [{
                    type: "polyline",
                    geometry: [
                        points[0], points[1]
                    ],
                }, {
                    type: "polyline",
                    geometry: [
                        e1, p1
                    ]
                }, {
                    type: "polyline",
                    geometry: [
                        e3, p3
                    ]
                }, {
                    type: "polyline",
                    geometry: a1.geometry
                }, {
                    type: "polyline",
                    geometry: a2.geometry
                }, {
                    type: "polyline",
                    geometry: a3.geometry
                }];

                let a = properties.annotations;
                let c = rect(points[2].x / 2, mid.y, a.c.width, a.c.height);
                c.linkLine(p2, e2, true).forEach(ll => { ret.push(ll); });

                ret.push({
                    type: "annotation",
                    geometry: c.geometry(true),
                    name: "c",
                    debug: true
                });
                return ret;
            }

        } else if (index == 1) {

        }
    }).end();

}


module.exports = {
    modular: clear,
    minPointCount: 2,
    maxPointCount: 3,
    properties: {
        size: {
            arrow: 20,
        },
        annotations: {
            c: {
                value: "C",
                anchor: { x: 0, y: 0 }
            }
        }
    }
};