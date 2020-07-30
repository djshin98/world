const { calc, line } = require("../../../graphics/math");
const { rightAngleCenter } = require("../../../graphics/prework");

function ambush(turnPlane, properties, bcompleted) {

    let arrowSize = properties.pixelBySize.arrow;
    let a = properties.annotations;

    let orders = [
        [0, 1],
        [4, 1]
    ];
    return turnPlane.reduce((prev, p, i, buffer) => {
        if (i == 0) {
            return calc.arrowLine(turnPlane, p[1], p[0], arrowSize, 30);
        } else if (i == 1) {
            let ret = [];
            let dist = calc.distance(p[2], p[0]);
            let dy = Math.abs(p[4].y - p[1].y);
            let dx = Math.abs(p[2].x - p[1].x);

            let rad = Math.atan2(dx, dy);
            let my = Math.abs(Math.sin(rad) * dist);

            calc.arc(rad, -rad, dist, { div: 10 }).forEach(g => {
                ret.push(g);
                g.geometry.forEach(l => {
                    ret.push({
                        type: "polyline",
                        geometry: [l, calc.moveY(l, -arrowSize)]
                    })
                });
            });
            //ret.push(line(p[2], p[3]).end());
            let ex = calc.extension(turnPlane, p[1], p[0], my);
            calc.arrowLine(turnPlane, { x: 0, y: dist }, p[0], arrowSize, 30).forEach(g => {
                ret.push(g);
            });
            //calc.arrowLine(turnPlane, { x: 0, y: dist- moveY }, p[0], arrowSize, 30).forEach(g => { ret.push(g); });
            return ret;
        }

    }, rightAngleCenter, orders).end();
}


module.exports = {
    modular: ambush,
    minPointCount: 2,
    maxPointCount: 3,
    properties: {
        size: {
            arrow: 30
        }
    }
};