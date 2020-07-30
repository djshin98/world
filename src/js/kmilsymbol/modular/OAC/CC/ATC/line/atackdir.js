const { calc, line } = require("../../../../../graphics/math");

function route(turnPlane, properties, bcompleted) {

    let s = properties.pixelBySize;
    let a = properties.annotations;
    let orders = [
        [1, 0]
    ];
    return turnPlane.map((prev, p, i, buffer) => {

        if (properties.log === "G-G-OLKA") {
            let ret = [];
            let mid = calc.mid(p[1], p[0]);
            let dy = mid.y / 3;
            let dx = -dy / 6;
            let a1 = calc.move(p[1], dx, dy);
            let a2 = calc.move(a1, 0, dy);
            let mm = calc.move(a2, -dx, dy);
            let b1 = calc.move(mm, -dx, dy);
            let b2 = calc.move(b1, 0, dy);
            ret.push({ type: "polyline", geometry: [p[1], a1, a2] });
            if (Q.isValid(a.n) && a.n.width > 0) {
                let mmid = calc.mid(mm, b1);
                calc.tAnnotationOnLine(turnPlane, a, "n", 0.5, a2, mm).forEach(g => { ret.push(g); });
                calc.arrowLine(turnPlane, mm, mmid, s.arrow2, 30, true).forEach(g => { ret.push(g); });
                calc.arrowLine(turnPlane, b1, mmid, s.arrow2, 30, true).forEach(g => { ret.push(g); });
            } else {
                calc.arrowLine(turnPlane, a2, mm, s.arrow2, 30, true).forEach(g => { ret.push(g); });
                calc.arrowLine(turnPlane, b1, mm, s.arrow2, 30, true).forEach(g => { ret.push(g); });
            }
            ret.push(line(b1, b2).end());
            calc.arrowLine(turnPlane, b2, p[0], s.arrow2, 30).forEach(g => { ret.push(g); });
            return ret;
        } else if (properties.log === "G-G-OLKGM") {
            return calc.arrowLine(turnPlane, p[1], p[0], s.arrow, 30, false, s.arrow / 4);
        } else if (properties.log === "G-G-OLKGS") {
            return calc.arrowLine(turnPlane, p[1], p[0], s.arrow, 30);
        }
    }, undefined, orders).end();
}

module.exports = {
    modular: route,
    minPointCount: 2,
    maxPointCount: 2,
    properties: {
        size: {
            arrow: 50,
            arrow2: 30
        },
        annotations: {
            n: {
                filter: ["G-G-OLKA"],
                value: "{N}",
                anchor: { x: 0, y: 0 }
            }
        },
        variables: {
            N: "N"
        }
    }
};