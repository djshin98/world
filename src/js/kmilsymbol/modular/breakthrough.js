const { calc } = require("../graphics/math");

function breakthrough(turnPlane, properties, bcompleted) {
    return turnPlane.map((prev, points, index, buffer) => {
        
        if (index == 0) {
            let p = points;
            let arrowSize = properties.pixelBySize.arrow;
            let center = calc.mid(p[0], p[1]);

            
            if(points.length == 3){
                let len = Math.abs(p[2].x);
                
                //let p1 = {x: p[2].x, y : 0};
                //let p2 = {x: p[2].x, y : p[1].y};
                p[2] = {x: len, y: center.y};

                let a1 = calc.arrow(turnPlane, p[2], center, arrowSize);

                return [
                    {
                        type: "polyline",
                        geometry: [
                            p[0], p[1], center, p[2]
                    ]}, {
                        type: "polyline",
                        geometry: a1.geometry
                    }
                ];
            }
            else{
                return [{
                    type: "polyline",
                    geometry: [
                        p[0], p[1]
                    ]
                }];
            }

        }
    }).end();
}

module.exports = {
    modular: breakthrough,
    minPointCount: 2,
    maxPointCount: 3,
    properties: {
        size: {
            arrow: 70,
        },
    }
};