function mid(a, b) {
    return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
}

function moveX(p, x) {
    return { x: p.x + x, y: p.y };
}

function block(turnPlane, properties, bcompleted) {
    return turnPlane.map((prev, points, index, buffer) => {
        if (index == 0) {
            return {
                type: "polyline",
                geometry: [
                    moveX(points[index], -10), moveX(points[index + 1], -10),
                    moveX(points[index + 1], 10), moveX(points[index], 10)
                ]
            };
        } else if (index == 1) {

            let pp = Q.copy(prev.geometry);
            pp.push(points[index + 1]);
            let pts = turnPlane.turnStack(pp, 0, 1, (pt) => {
                let midpt = mid(pt[0], pt[1]);
                return {
                    type: "polyline",
                    geometry: [
                        midpt, { x: pt[2].x, y: midpt.y }
                    ]
                };
            });
            return {
                type: "polyline",
                geometry: pts.geometry
            };
        }


    }).end();
}

module.exports = { modular: block, minPointCount: 2, maxPointCount: 3 };