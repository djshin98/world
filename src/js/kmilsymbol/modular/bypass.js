const { calc } = require("../graphics/math");

function bypass(turnPlane, properties, bcompleted) {
    return turnPlane.map((prev, p, i, buffer) => {
           
            if (i == 0) {
               
            return {
                type: "polyline",
                geometry: [p[i], p[i + 1]]
            }
        } else if (i == 1) {
            let pts = turnPlane.turnStack(p, 0, 1, (pt) => {
                //let height = calc.distance(pt[0], pt[1]);
                //let midpt = calc.mid(pt[0], pt[1]);
                
               // pt[0] = 
                

                return [{
                        type: "polyline",
                        geometry: [
                            
                        ]
                    }]
                
            });

            return pts;
        }
    
    }).end();
}


module.exports = {
    modular: bypass,
    minPointCount: 2,
    maxPointCount: 3,

};