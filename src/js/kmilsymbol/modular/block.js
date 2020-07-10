const { calc } = require("../graphics/math");

function block(turnPlane, properties, bcompleted) {
    return turnPlane.map((prev, points, index, buffer) => {
        if (index == 0) {
            return { type: "polyline", geometry: [points[index], points[index + 1]] };
        } else if (index == 1) {
            let pp = Q.copy(prev.geometry);
            pp.push(points[index + 1]);
            let pts = turnPlane.turnStack(pp, 0, 1, (pt) => {
                let midpt = calc.mid(pt[0], pt[1]);
                return {
                    type: "polyline",
                    geometry: [midpt, { x: pt[2].x, y: midpt.y }]
                };
            });
            return { type: "polyline", geometry: pts.geometry };
        }
    }).end();
}

module.exports = { modular: block, minPointCount: 2, maxPointCount: 3 };