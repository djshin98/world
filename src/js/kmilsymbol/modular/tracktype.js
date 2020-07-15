const { calc } = require("../graphics/math");

function tracktype(turnPlane, properties, bcompleted) {
    let width;
    return turnPlane.map((prev, p, i, buffer) => {
        if (i == 0) {
            width = calc.distance(p[i], p[i + 1]);
        } else if (i > 0) {
            return {
                type: "polyline",
                geometry: [
                    { x: 0, y: p[i + 1].y },
                    { x: 0, y: p[i].y },
                    { x: -width, y: p[i].y },
                    { x: -width, y: p[i + 1].y },
                    { x: width, y: p[i + 1].y },
                    { x: width, y: p[i].y },
                    { x: 0, y: p[i].y }
                ]
            };
        }
    }).end();
}


module.exports = { modular: tracktype, minPointCount: 1 };