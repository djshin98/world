const { calc } = require("../graphics/math");

function breakthrough(turnPlane, properties, bcompleted) {
    let arrowSize = properties.pixelBySize.arrow;
    

    return turnPlane.map((prev, p, i, buffer) => {
        let center = calc.mid(p[0], p[1]);
        if (i == 0) {
            if(p.length == 3){
                //let len = Math.abs(p[2].x);
                return [
                    {
                        type: "polyline",
                        geometry: [
                            p[0], {x: p[0].x, y: center.y}, {x: p[0].x, y: center.y}, {x: p[0].x, y: p[1].y}, p[1]
                    ]}, {
                        type: "polyline",
                        geometry: calc.arrow(turnPlane, {x: p[0].x, y: center.y}, center, arrowSize).geometry
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