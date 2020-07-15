const { calc } = require("../graphics/math");

function breakthrough(turnPlane, properties, bcompleted) {
    return turnPlane.map((prev, points, index, buffer) => {
        if (index == 0) {
            let p = points;
            let height = calc.distance(p[0], p[1]);
            let center = CTX.c2(0, height/2);

            if(p[2])
                p[2] = CTX.c2(p[2].x, center.y);

            if(p[2]){
                let len = Math.abs(p[2].x);
                return [
                    {
                        type: "polyline",
                        geometry: [
                        p[0], p[1], center, CTX.c2(-len, center.y)
                    ]},{
                        type: "polyline",
                        geometry: [
                            CTX.c2(center.x - height/3, center.y + height/3),
                            center,
                            CTX.c2(center.x - height/3, center.y - height/3)
                    ]}
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

};