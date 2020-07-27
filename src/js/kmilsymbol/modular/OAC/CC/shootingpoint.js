const { calc } = require("../../../graphics/math");

function shootingpoint(turnPlane, properties, bcompleted) {
    return turnPlane.reduce((prev, p, i, buffer) => {
        let s = properties.pixelBySize;
        if (i == 0) {
            return {
                type: "polyline",
                geometry: [p[i], p[i + 1]]
            }
        } else if (i == 1) {
            let pp = Q.copy(prev.geometry);
            pp.push(p[i + 1]);
            let pts = turnPlane.turnStack(pp, 0, 1, (pt) => {
                let midpt = calc.mid(pt[0], pt[1]);
                let p3 = { x: pt[2].x, y: midpt.y };
                if (pt[2].x > 0) {
                    return [{
                        type: "polyline",
                        geometry: [midpt, p3]
                    }, {
                        type: "polyline",
                        geometry: [calc.move(p3, -s.arrow, s.arrow), p3, calc.move(p3, -s.arrow, -s.arrow)]
                    }, {
                        type: "polyline",
                        geometry: [calc.move(pt[0], -s.tail, -s.tail), pt[0], pt[1], calc.move(pt[1], -s.tail, s.tail)]
                    }];
                } else {
                    return [{
                        type: "polyline",
                        geometry: [midpt, p3]
                    }, {
                        type: "polyline",
                        geometry: [calc.move(p3, s.arrow, s.arrow), p3, calc.move(p3, s.arrow, -s.arrow)]
                    }, {
                        type: "polyline",
                        geometry: [calc.move(pt[0], s.tail, -s.tail), pt[0], pt[1], calc.move(pt[1], s.tail, s.tail)]
                    }];
                }

            });

            return pts;
        }
    }).end();
}


module.exports = {
    modular: shootingpoint,
    minPointCount: 2,
    maxPointCount: 3,
    properties: {
        size: {
            arrow: 30,
            tail: 30,
        },
        pixelBySize: {}
    }

};