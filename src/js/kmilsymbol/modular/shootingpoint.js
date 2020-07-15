const { calc } = require("../graphics/math");

function shootingpoint(turnPlane, properties, bcompleted) {
    return turnPlane.map((prev, points, index, buffer) => {
        if (index == 0) {

            let pp = points;
            //pp.push(points[index + 1]);
            let midpt = calc.mid(pp[1], pp[2]);
            pp.push(midpt);

            //let d2 = calc.distance(pp[0], pp[2])
            let pts = turnPlane.turnStack(pp, 0, pp.length-1, (pt) => {
                let d1 = calc.distance(pt[0], pt[1]);
                return {
                    type: "polyline",
                    geometry: [
                        pt[0], 
                        CTX.c2(pt[0].x - (d1/6)*2, pt[0].y + (d1/6)*2), 
                        pt[0],
                        CTX.c2(pt[0].x + (d1/6)*2, pt[0].y + (d1/6)*2),
                        pt[0],
                        pt[0], pt[pt.length-1], pt[1], 
                        CTX.c2(pt[1].x+200, pt[1].y+200),
                        pt[1],
                        pt[2],
                        CTX.c2(pt[2].x-200, pt[2].y+200)
                    ]
                };
            });
            return { 
                type: "polyline", 
                geometry: pts.geometry 
            };
        }
    }).end();
}


module.exports = { modular: shootingpoint, minPointCount: 3, maxPointCount: 3,
    properties: {
        size: {
            arrow: 30,
            tail: 30, 
        },
        pixelBySize: {}
    }

};