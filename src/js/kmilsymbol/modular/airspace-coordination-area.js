
const { calc, rect } = require("../graphics/math");
const { centerRightAngle } = require("../graphics/prework");

function airspaceCoordinationArea(turnPlane, properties, bcompleted) {
    let dist;
    let arrowSize = properties.pixelBySize.arrow;
    let a = properties.annotations;

    return turnPlane.reduce((prev, p, i, buffer) => {
        if (properties.log == "G-F-ACAI") {
            
                p.push(p[0]);
                let ret = [];
                
                let sum = p.reduce((prev, curr, i)=> {
                    return {x : prev.x + curr.x, y: prev.y + curr.y}; 
                });

                let s = {x: sum.x / p.length, y: sum.y / p.length};

                ret.push(calc.annotation(a, "k", s));
                ret.push({type: "polyline", geometry: p });

                return ret;
            
        /*  
        } else if (properties.log == "G-F-ACAR") {
            if (i == 0) {
                dist = calc.distance(p[0], p[1]) / 2;
                //return { type: "polyline", geometry: [p[i], p[i + 1]] };
            } else if (i == 1) {
                //return calc.annotationOnLine(a, "r", 0.5, p[1], p[3]);
                let pp = [p[0], p[1], calc.mid(p[0], p[1]), p[2]];
                let a = properties.annotations;
                let s = properties.pixelBySize;
                return turnPlane.turnStack(pp, 2, 3, (pt) => {

                    let r = rect(0, (pt[3].y) / 2, a.eny.width, a.eny.height);
                    let c = rect(0, -dist, a.c.width, a.c.height);
                    let ll = r.linkLine(pt[3], pt[2]);
                    let arrow = calc.arrow(turnPlane, pt[3], pt[2], s.arrow, 30);
                    let arc = calc.arc(-Math.PI / 2, -Math.PI * 3 / 2, dist, { div: 5, hair: { length: -0.1, freq: 10 }, annotation: c });
                    return [{
                        type: "annotation",
                        geometry: r.geometry(),
                        name: "eny",
                        debug: true
                    }, {
                        type: "annotation",
                        geometry: c.geometry(),
                        name: "c",
                        debug: true
                    }, ll[0], ll[1], arrow].concat(arc);
                });
            }
        } else if (properties.log == "G-F-ACAC") {
            if (i == 0) {
                return { type: "polyline", geometry: [p[0], p[2]] };
            } else if (i == 1) {
                let ret = calc.annotationOnLine(a, "b", 0.5, p[1], p[3]);
                ret.push(calc.arrow(turnPlane, p[3], p[1], arrowSize));
                return ret;
            }*/
        }

    }).end();
}

module.exports = {
    modular: airspaceCoordinationArea,
    minPointCount: 2,
    properties: {
        size: {
            arrow: 30
        },
        annotations: {
            k: {
                value: "ACA",
                anchor: { x: 0, y: 0 }
            },
        }
    }
};