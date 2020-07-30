const { calc, rect } = require("../../../../graphics/math");

function aRect(turnPlane, properties, bcompleted) {
    
    return turnPlane.reduce((prev, p, i, buffer) => {
        //let an = properties.variables;
        let a = properties.annotations;
        let distance = calc.distance(p[0], p[1]);
        let ret = [];
        let aname = "paa";
                
            ret = ret.concat(calc.annotationOnLine(a, aname, 0.5, {x:distance/2, y:0}, {x:-distance/2, y:0}));
            ret = ret.concat(calc.annotationOnLine(a, aname, 0.5, {x:-distance/2, y:0}, {x:-distance/2, y: p[1].y }));
            ret = ret.concat(calc.annotationOnLine(a, aname, 0.5, {x:-distance/2, y: p[1].y }, {x:distance/2, y:p[1].y} ));
            ret = ret.concat(calc.annotationOnLine(a, aname, 0.5, {x:distance/2, y:p[1].y}, {x:distance/2, y:0} ));
           
   
        return ret;

    }).end();
}

module.exports = {
    modular: aRect,
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