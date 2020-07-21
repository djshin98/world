const { calc, rect } = require("../graphics/math");

function breakthrough(turnPlane, properties, bcompleted) {
    let arrowSize = properties.pixelBySize.arrow;

    return turnPlane.map((prev, p, i, buffer) => {
        let center = calc.mid(p[0], p[1]);
        if (i == 0) {
            if(p.length == 3){
                let a = properties.annotations;
                let b = rect(p[2].x, p[1].y / 2, a.b.width, a.b.height);
                let ll = b.linkLine({ x: p[2].x, y: 0 }, { x: p[2].x, y: p[1].y });
  
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
                        geometry: b.geometry(),
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
            b: {
                value: "P",
                anchor: { x: 0, y: 0 }
            }
        }
    }
};