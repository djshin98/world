const { calc, rect } = require("../../../graphics/math");
  
    function criticalFriendlyZone(turnPlane, properties, bcompleted) {
        
        let a = properties.annotations;

        return turnPlane.reduce((prev, p, i, buffer) => {
            if (properties.log == "G-F-AZFI") {
                
                    p.push(p[0]);
                    let ret = [];
                    
                    let s = calc.avg(p);
                    let tmp = calc.annotation(a, "k", s);
                    tmp.debug = false;
                    ret.push(tmp);
                    ret.push({type: "polyline", geometry: p });

                    return ret;
                
            
            } else if (properties.log == "G-F-AZFR") {
                if (i == 0) {
                    
                    let a = properties.annotations;
                    p.push(p[0]);
                    
                    let height =  a["k"].height;
                    let p1 = {x: -height/2, y: 0};
                    let p2 = {x: height/2, y: 0};
                    let p3 = {x: -height/2, y: p[1].y};
                    let p4 = {x: height/2, y: p[1].y};

                    let sum = p.reduce((prev, curr, i)=> {
                        return {x : prev.x + curr.x, y: prev.y + curr.y}; 
                    });

                    let s = {x: sum.x / p.length, y: sum.y / p.length};

                    let ret1 = [];
                    let t = calc.annotation(a, "k", s);
                    ret1.push(t)
                    ret1.push({ 
                        type: "polyline", 
                        geometry: [p1, p2]
                    }, {
                        type: "polyline", 
                        geometry: [p3, p4]
                    }, {
                        type: "polyline", 
                        geometry: [p2, p4]
                    }, {
                        type: "polyline", 
                        geometry: [p1, p3]
                    });
                    
                    return ret1;
                }
                
              }

        }).end();
    }

    module.exports = {
        modular: criticalFriendlyZone,
        minPointCount: 3,
        maxPointCount: 6,
        properties: {
            annotations: {
                k: {
                    value: "{N}\nCF ZONE \n{T} ",
                    anchor: { x: 0, y: 0 }
                },
            }
        }
    };