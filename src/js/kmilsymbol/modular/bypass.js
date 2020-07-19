const { calc } = require("../graphics/math");

function bypass(turnPlane, properties, bcompleted) {
    return turnPlane.map((prev, point, i, buffer) => {
        let s = properties.pixelBySize;
        if(i == 0){
            if(point[2]){
            let len = Math.abs(point[2].x);
            p = [];
            p[0] = {x: 0, y: 0};
            p[1] = {x: 0, y: point[1].y};
            let p1 = {x: -point[2].x, y: point[1].y};
            let p2 = {x: -point[2].x, y: 0};
            p.push(p1);
            p.push(p2);
            
            let a1 = calc.arrow(turnPlane, p2, p[0], properties.pixelBySize.arrow);
            let a2 = calc.arrow(turnPlane, p1, p[1], properties.pixelBySize.arrow);

            return [{
                type: "polyline",
                geometry: [
                    p[0], CTX.c2(len, p2.y), CTX.c2(len, p1.y), p[1]
                ]
                },{
                    type: "polyline", 
                    geometry: a1.geometry
                }, {
                    type: "polyline", 
                    geometry: a2.geometry
                    
                }
            ];
            }
        
        }
        
    }).end();
 }

module.exports = {
    modular: bypass,
    minPointCount: 2,
    maxPointCount: 3,
    properties: {
        size: {
            arrow: 30,
            tail: 30,
        },
        pixelBySize: {}
    }

};