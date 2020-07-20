const { calc, rect } = require("../graphics/math");

function breakthrough(turnPlane, properties, bcompleted) {
    let arrowSize = properties.pixelBySize.arrow;
    

    return turnPlane.map((prev, p, i, buffer) => {
        let center = calc.mid(p[0], p[1]);
        if (i == 0) {
            if(p.length == 3){
                let a = properties.annotations;
                let c = rect(p[2].x / 2, center.y, a.c.width, a.c.height);
                c.linkLine(p[2], center, true).forEach(ll => { ret.push(ll); });

                return [
                    {
                        type: "polyline",
                        geometry: [
                            p[0], p[1]
                    ]},{
                        type: "polyline", 
                        geometry: [
                           center, {x: p[2].x, y:center.y}, center
                        ]
                    }, {
                        type: "polyline",
                        geometry: calc.arrow(turnPlane, {x: p[2].x, y: center.y}, center, arrowSize).geometry
                    }, {
                        type: "annotation",
                        geometry: c.geometry(),
                        name: "p",
                        debug: true
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
            arrow: 30,
        },
        annotations: {
            b: {
                value: "P",
                anchor: { x: 0, y: 0 }
            }
        }
    }
};