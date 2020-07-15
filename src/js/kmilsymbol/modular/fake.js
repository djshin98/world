"use strict";

const { calc } = require("../graphics/math");

function fake(turnPlane, properties, bcompleted) {
    return turnPlane.map((prev, p, i, buffer) => {
        let s = properties.pixelBySize;
    
        if(i % 2 == 0) {
            //p[i] -> p[i+1]
            
            return {
                type: "polyline", 
                geometry:  [
                    p[i], p[i]+1
                ]  
        }
}
        else if(i % 2 == 1) {
            for(let i = 0; i < calc.distance(p[i], p[i+1])/s.div; i++) {
                let pa = [];
                return [{
                    type: "polyline", 
                    geometry: [
                       pa.push({type:"polyline", geometry: {x:0, y: p[i].y}})
                    ]
                }];
            
            }
        }
       
    }).end();
}

module.exports = {
    modular: fake,
    minPointCount: 1,
    maxPointCount: 3,
    properties: {
        size: {
            div: 10,
        },
        pixelBySize: {}
    }

};