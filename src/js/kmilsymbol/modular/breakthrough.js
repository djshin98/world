const { calc } = require("../graphics/math");

function breakthrough(turnPlane, properties, bcompleted) {
    return turnPlane.map((prev, points, index, buffer) => {
        if (index == 0) {
            let p = points;
            let height = calc.distance(p[0], p[1]);
            let center = height/2;

            p[2] = CTX.c2(0, p[2].y);

            return [{
                type: "polyline",
                geometry: [
                   p[0], p[1], center, p[2]
                ]
            }];
        }
    }).end();
}

module.exports = {
    modular: breakthrough,
    minPointCount: 2,
    maxPointCount: 3,
    properties: {
       
    }

};