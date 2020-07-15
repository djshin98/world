const { calc } = require("../graphics/math");

function tracktype(turnPlane, properties, bcompleted) {
    return turnPlane.map((prev, points, index, buffer) => {

        let p = points;
        if (index == 0) {
            return { 
            type: "polyline", 
            geometry: [p[0],p[1]]
         };

        } else if (index > 0) {
            let width = calc.distance(p[0], p[1]);
            //let width2 = calc.distance(p[1], p[2]);

            let pts = turnPlane.turnStack(p, index, index+1, (pt) => {
                return {
                    type: "polyline",
                    geometry: [
                        CTX.c2(-width, 2), 
                        CTX.c2(width, 2), 
                        CTX.c2(width, p[index+1].y), 
                        CTX.c2(-width, p[index+1].y),
                        CTX.c2(-width, 2),
                    ]
                };
            });
            return { type: "polyline", geometry: pts.geometry };
        }
    }).end();
}


module.exports = { modular: tracktype, minPointCount: 1};