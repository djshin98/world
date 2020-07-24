const { calc, rect } = require("../../../graphics/math");

function artilleryTargetIntelligenceZone(turnPlane, properties, bcompleted) {

    let a = properties.annotations;

    return turnPlane.reduce((prev, p, i, buffer) => {
        if (properties.log == "G-F-AZII") {

            p.push(p[0]);
            let ret = [];
            /*
                      let sum = p.reduce((prev, curr, i)=> {
                          return {x : prev.x + curr.x, y: prev.y + curr.y}; 
                      });

                      let s = {x: sum.x / p.length, y: sum.y / p.length};
*/
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
    modular: artilleryTargetIntelligenceZone,
    minPointCount: 3,
    maxPointCount: 6,
    properties: {
        size: {
            arrow: 30
        },
        annotations: {
            k: {
                value: "{N}\nATI ZONE \n{T}",
                anchor: { x: 0, y: 0 }
            },
        }
    }
};