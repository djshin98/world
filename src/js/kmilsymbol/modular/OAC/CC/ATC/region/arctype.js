const { calc, rect } = require("../../../../../graphics/math");

function arctype(turnPlane, properties, bcompleted) {
    return turnPlane.reduce((prev, p, i, buffer) => {
        if (i == 0) {
            return {
                type: "polygon",
                geometry: [p[i], p[i + 1], p[i + 1], p[i + 1], p[i + 1], p[i + 1]],
                expansion: [{
                        type: "circle",
                        center: 0,
                        start: 2,
                        end: 3
                    },
                    {
                        type: "circle",
                        center: 0,
                        start: 4,
                        end: 5
                    },
                    {
                        type: "remove",
                        start: 0,
                        end: 0
                    }
                ]
            };
        } else if (i == 1) {
            let dist = calc.distance(p[0], p[i + 1]);
            prev.geometry[1] = calc.extension(turnPlane, p[0], prev.geometry[1], dist).geometry[1];
            dist = calc.distance(p[0], prev.geometry[2]);
            prev.geometry[3] = calc.extension(turnPlane, p[0], p[i + 1], dist).geometry[1];
            prev.geometry[4] = p[i + 1];
            prev.geometry[5] = prev.geometry[1];
            return prev;
        }
    }).end();
}

module.exports = {
    modular: arctype,
    minPointCount: 2,
    maxPointCount: 3,
    properties: {

    }
};