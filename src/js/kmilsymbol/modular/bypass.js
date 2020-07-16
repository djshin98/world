const { calc } = require("../graphics/math");

function bypass(turnPlane, properties, bcompleted) {
    return turnPlane.map((prev, point, i, buffer) => {
       // let s = properties.pixelBySize;
        if(i == 0){
            if(point[2]){
            p = [];
            p[0] = {x: 0, y: 0};
            p[1] = {x: 0, y: point[1].y};
            let p1 = {x: -point[2].x, y: point[1].y};
            let p2 = {x: -point[2].x, y: 0};
            p.push(p1);
            p.push(p2);
            
            return [{
                type: "polyline",
                geometry: [
                    p[0], p2, p1, p[1]
                ]
                }];
            }
        
        }
    });
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