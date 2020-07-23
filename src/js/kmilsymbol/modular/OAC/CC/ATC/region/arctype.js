const { calc, rect } = require("../../../../../graphics/math");
const { pass } = require("../../../../../graphics/prework");

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
            if (properties.log == "G-G-AAA") {
                let s = orders[i][0];
                let t = orders[i][1];
                let dist = p[t].y - p[s].y;
                let radian = Math.atan2(p[1].x, p[1].y);
                let geo = [calc.extension(turnPlane, p[s], p[1], dist).geometry[1], p[1]];
                geo = geo.concat(calc.arc(radian, 0, innerDist)[0].geometry);
                geo.push({ x: 0, y: innerDist });
                geo.push(p[t]);
                geo = geo.concat(calc.arc(0, radian, dist)[0].geometry);
                let out = {
                    type: "polygon",
                    geometry: geo
                };
                return out;
            } else if (properties.log == "G-G-AAO") {
                let s = orders[i][0];
                let t = orders[i][1];
                let geo = [{ x: -innerDist, y: p[t].y }, { x: -innerDist, y: 0 }];
                geo = geo.concat(calc.arc(-Math.PI / 2, -(3 * Math.PI) / 2, innerDist)[0].geometry);
                geo.push({ x: innerDist, y: 0 });
                geo.push({ x: innerDist, y: p[t].y });
                geo = geo.concat(calc.arc(Math.PI / 2, -Math.PI / 2, innerDist, { translate: p[t] })[0].geometry);
                let out = {
                    type: "polygon",
                    geometry: geo
                };
                return out;
            }

        }
    }, pass, orders).end();
}

module.exports = {
    modular: arctype,
    minPointCount: 2,
    maxPointCount: 3
};