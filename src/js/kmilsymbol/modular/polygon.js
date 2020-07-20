const { calc } = require("../graphics/math");

function polygon(turnPlane, properties, bcompleted) {
    return turnPlane.map((prev, points, i, buffer) => {
       // let s = properties.pixelBySize;
        if(i == 0){
            
            points.push(points[0]);

            return [{
                type: "polyline",
                geometry: 
                    points
                }
            ];
            }
        
        
    }).end();
 }

module.exports = {
    modular: polygon,
    minPointCount: 3,
    
};