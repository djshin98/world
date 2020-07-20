const { calc, rect } = require("../graphics/math");

function breakthrough(turnPlane, properties, bcompleted) {
    let arrowSize = properties.pixelBySize.arrow;
    

    return turnPlane.map((prev, p, i, buffer) => {
        let center = calc.mid(p[0], p[1]);
        if (i == 0) {
            if(p.length == 3){
                let a = properties.annotations;
                let c = rect(p[2].x / 2, center.y, a.c.width, a.c.height);
                let ll = r.linkLine(center, { x: pt[2].x, y: center.y }, true);
        
                
                /*ret.push({
                    type: "annotation",
                    geometry: c.geometry(true),
                    name: "p",
                    debug: true
                });*/
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
                    }, ll[0], ll[1],{
                        type: "polyline",
                        geometry: calc.arrow(turnPlane, {x: p[2].x, y: center.y}, center, arrowSize).geometry
                    },  {
                        type: "annotation",
                        geometry: c.geometry(),
                        name: "b",
                        debug: true
                    }
                ];
                
            }
        
            
           // }else if (index == 1){
      
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
            c: {
                value: "P",
                anchor: { x: 0, y: 0 }
            }
        }
    }
};