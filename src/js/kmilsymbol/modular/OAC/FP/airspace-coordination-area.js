const { calc, rect } = require("../../../graphics/math");

function airspaceCoordinationArea(turnPlane, properties, bcompleted) {

    let a = properties.annotations;

    return turnPlane.reduce((prev, p, i, buffer) => {
        if (properties.log == "G-F-ACAI") {

            p.push(p[0]);
            let ret = [];

            let s = calc.avg(p);
            let tmp = calc.annotation(a, "k", s);
            tmp.debug = false;
            ret.push(tmp);
            ret.push({ type: "polyline", geometry: p });

            return ret;

        }

    }).end();
}

module.exports = {
    modular: airspaceCoordinationArea,
    minPointCount: 1,
    properties: {
        annotations: {
            k: {
                value: "{N}\nACA \n{T} \nMIN ALT: {X}  \nMIX ALT: {X1} \nGrids : {H2} \nEFF: {W} \n{W1}",
                anchor: { x: 0, y: 0 }
            },
        }
    }
};