"use strict";

const { calc } = require("../graphics/math");

function fake(turnPlane, properties, bcompleted) {
    return turnPlane.map((prev, p, i, buffer) => {
        let s = properties.pixelBySize;
            
            let pa = [];
            let count = calc.distance(p[i], p[i+1])/s.div;
            let pk = [];
                
                for(let i = 0; i < count; i++) {
                    if(i % 2 == 0) {
                        pa.push({x:0, y:(s.div*i)});
                        pa.push({x:0, y:(s.div*i) + s.div});

                        pk.push({
                            type:"polyline",
                            geometry: pa
                        });
                        pa = [];
                    }
                }
                
                return pk; 
            
        
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