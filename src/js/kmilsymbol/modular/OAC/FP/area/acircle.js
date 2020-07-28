const { calc, rect } = require("../../../../graphics/math");

function areaCircle(turnPlane, properties, bcompleted) {
    return turnPlane.reduce((prev, p, i, buffer) => {
        let pVar = properties.variables;
        let a = properties.annotations;
        let ret = [];
        let tmp;
        let r = rect(pVar.AM, 0, a.paa.width, a.paa.height);
        tmp = (calc.arc(5 / 180, Math.PI - 5 / 180, pVar.AM, { annotation: r }));
        ret.push(tmp[0]);
        ret.push(tmp[1]);
        r = rect(-pVar.AM, 0, a.paa.width, a.paa.height);
        tmp = (calc.arc(Math.PI + 5 / 180, Math.PI * 2 - 5 / 180, pVar.AM, { annotation: r }));
        ret.push(tmp[0]);
        ret.push(tmp[1]);

        let aname = "paa";
        ret.push(calc.annotation(a, aname, { x: 0, y: -pVar.AM }));
        ret.push(calc.annotation(a, aname, { x: 0, y: pVar.AM }));
        ret.push(calc.annotation(a, aname, { x: pVar.AM, y: 0 }));
        ret.push(calc.annotation(a, aname, { x: -pVar.AM, y: 0 }));

        return ret;
    }).end();
}

module.exports = {
    modular: areaCircle,
    minPointCount: 2,
    maxPointCount: 2,
    properties: {
        annotations: {
            paa: {
                value: "PAA",
                anchor: { x: 0, y: 0 }
            }
        },
        variables: {
            AM: 1000,
        }
    }
};