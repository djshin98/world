const { calc } = require("./math");

function centerRightAngle(tp, p) {
    if (p.length > 1) {
        let mid = calc.mid(p[0], p[1]);
        p.splice(1, 0, mid);

        if (p.length > 3) {
            let gp = tp.turnStack(p, 1, 2, function(vp) {
                return {
                    type: "polyline",
                    geometry: [{ x: vp[3].x, y: 0 }]
                };
            });
            p[3] = gp.geometry[0];
        } else {
            p[3] = mid;
        }
        return p;
    }
}

function rightAngle(tp, p) {
    if (p.length == 3) {
        let gp = tp.turnStack(p, 0, 1, function(vp) {
            return {
                type: "polyline",
                geometry: [{ x: vp[2].x, y: vp[1].y }]
            };
        });
        p[2] = gp.geometry[0];
    }
    return p;
}

function rightAngleCenter(tp, p) {
    if (p.length > 2) {
        let gp = tp.turnStack(p, 1, 0, function(vp) {
            let h = vp[2].x;
            return {
                type: "polyline",
                geometry: [vp[0], vp[1], { x: -h, y: 0 }, { x: h, y: 0 }, { x: 0, y: -vp[0].y }]
            };
        });
        return gp.geometry;
    }
    return p;
}

function pass(tp, p) {
    return p;
}

module.exports = { pass: pass, centerRightAngle: centerRightAngle, rightAngle: rightAngle, rightAngleCenter: rightAngleCenter };