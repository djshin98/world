    const { calc, rect } = require("../../../graphics/math");
    const { centerRightAngle } = require("../../../graphics/prework");
    const artilleryTargetIntelligenceZone = require("../../artillery-target-intelligence-zone");

    function block(turnPlane, properties, bcompleted) {
        let dist;
        let arrowSize = properties.pixelBySize.arrow;
        let a = properties.annotations;

        let orders = [
            [0, 2], 
            [1, 3],
        ];
        return turnPlane.map((prev, p, i, buffer) => {
            if (properties.log == "G-T-B") {
                if (i == 0) {
                    return { type: "polyline", geometry: [p[0], p[2]] };
                } else if (i == 1) {
                    return calc.annotationOnLine(a, "r", 0.5, p[1], p[3]);
                }
            } else if (properties.log == "G-T-J") {
                if (i == 0) {
                    dist = calc.distance(p[0], p[2]) / 2;
                    //return { type: "polyline", geometry: [p[i], p[i + 1]] };
                } else if (i == 1) {
                    let ret = calc.annotationOnLine(a, "eny", 0.5, p[1], p[3]);
                    ret.push(calc.arrow(turnPlane, p[3], p[1], arrowSize));
                    let c = rect(0, -dist, a.c.width, a.c.height);
                    let arc = calc.arc(-Math.PI / 2, -Math.PI * 3 / 2, dist, { div: 5, hair: { length: -0.1, freq: 10 }, annotation: c });
                    arc.forEach(g => { ret.push(g) });
                    ret.push({
                        type: "annotation",
                        geometry: c.geometry(),
                        name: "c",
                        debug: true
                    });
                    return ret;
                }
            } else if (properties.log == "G-T-P") {
                if (i == 0) {
                    return { type: "polyline", geometry: [p[0], p[2]] };
                } else if (i == 1) {
                    let ret = calc.annotationOnLine(a, "b", 0.5, p[1], p[3]);
                    ret.push(calc.arrow(turnPlane, p[3], p[1], arrowSize));
                    return ret;
                }
            } else if (properties.log == "G-T-X") {
                if (i == 0) {
                    return { type: "polyline", geometry: [p[0], p[2]] };
                } else if (i == 1) {
                    let gap = calc.distance(p[0], p[2]) / 3;
                    let ret = calc.annotationOnLine(a, "b", 0.5, p[1], p[3]);
                    ret.push(calc.arrow(turnPlane, p[3], p[1], arrowSize));
                    calc.arrowLine(turnPlane, calc.moveX(p[3], -gap), calc.moveX(p[1], -gap), arrowSize).forEach(g => { ret.push(g); });
                    calc.arrowLine(turnPlane, calc.moveX(p[3], gap), calc.moveX(p[1], gap), arrowSize).forEach(g => { ret.push(g); });
                    return ret;
                }
            }
        
                    /*
                    let p1 = { x: p[2].x + gap, y: 0 };
                    let p3 = { x: p[0].x - gap, y: 0}; 
            
                    let e1 = { x: p[2].x + gap, y: p[3].y};
                    let e2 = { x: 0, y: p[3].y };
                    let e3 = { x: p[0].x - gap, y: p[3].y};
                        
    
                    if(p3.x < 0 ) {
                        p3 = {x: p[0].x + gap, y: 0}
                        e3 = {x: p[0].x + gap, y: p[3].y}
                    }else if (p3.x > 0 ) {
                        p3 = {x: p[0].x - gap, y: 0}
                        e3 = {x: p[0].x - gap, y: p[3].y}
                    }

                    if(p1.x < 0 ) {
                        p1 = {x: p[2].x + gap, y: 0}
                        e1 = {x: p[2].x + gap, y: p[3].y}
                    }else if (p1.x > 0 ) {
                        p1 = {x: p[2].x - gap, y: 0}
                        e1 = {x: p[2].x - gap, y: p[3].y}
                    }
        
                    //let a1 = calc.arrow(turnPlane, e1, p1, properties.pixelBySize.arrow);
                    //let a2 = calc.arrow(turnPlane, e2, p2, properties.pixelBySize.arrow);
                    //let a3 = calc.arrow(turnPlane, e3, p3, properties.pixelBySize.arrow);
                    
                    ret = [ {
                        type: "polyline",
                        geometry: [
                            p1, e1
                        ]
                    }, {
                        type: "polyline",
                        geometry: [
                            p3, e3
                        ]
                    }];

                    ret = ret.concat(calc.annotationOnLine(a, "c", 0.5, mid, e2));
                    

                    ret.push(calc.arrow(turnPlane, p[3], p[1], arrowSize));
                    ret.push(calc.arrow(turnPlane, e1, p1, arrowSize));
                    ret.push(calc.arrow(turnPlane, e3, p3, arrowSize));

                    return ret;*/

        }, centerRightAngle, orders).end();
    }


    module.exports = {
        modular: block,
        minPointCount: 2,
        maxPointCount: 3,
        properties: {
            size: {
                arrow: 30
            },
            annotations: {
                r: {
                    value: "B",
                    anchor: { x: 0, y: 0 }
                },
                eny: {
                    value: "ENY",
                    anchor: { x: 0, y: 0 }
                },
                c: {
                    value: "C",
                    anchor: { x: 0, y: 0 }
                },
                b: {
                    value: "P",
                    anchor: { x: 0, y: 0 }
                }
                
            }
        }
    };