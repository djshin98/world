const { calc, rect } = require("../../../../../graphics/math");

function arctype(turnPlane, properties, bcompleted) {
    let orders = [
        [0, 1],
        [0, 2]
    ];
    let innerDist = 0;
    return turnPlane.reduce((prev, p, i, buffer) => {
        if (i == 0) {
            innerDist = p[i + 1].y - p[i].y;
            return {
                type: "polygon",
                geometry: p
            };
        } else if (i == 1) {
            let s = orders[i][0];
            let t = orders[i][1];
            let dist = p[t].y - p[s].y;
            let radian = Math.atan2(p[1].x, p[1].y);
            let geo = [calc.extension(turnPlane, p[s], p[1], dist).geometry[1], p[1]];
            geo = geo.concat(calc.arc(radian, 0, innerDist));
            geo.push({ x: 0, y: innerDist });
            geo.push(p[t]);
            geo = geo.concat(calc.arc(0, radian, dist));
            let out = {
                type: "polygon",
                geometry: geo
            };
            return out;
        }
    }, orders).end();
}

module.exports = {
    modular: arctype,
    minPointCount: 2,
    maxPointCount: 3
};