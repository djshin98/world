"use strict";
const { calc, rect } = require("../graphics/math");

function breakthrough(turnPlane, properties, bcompleted) {
    let arrowSize = properties.pixelBySize.arrow;

    function preWork(tp, p) {
        if (p.length > 1) {
            let mid = calc.mid(p[0], p[1]);
            p.splice(1, 0, mid);

            if (p.length > 3) {
                let gp = tp.turnStack(p, 1, 2, function(vp) {
                    return {
                        type: "polyline",
                        geometry: [{ x: vp[3].x, y: 0 }]
                    };
                });
                p[3] = gp.geometry[0];
            } else {
                p[3] = mid;
            }
            return p;
        }
    }
    let orders = [
        [0, 2],
        
    ]
    return turnPlane.reduce((prev, p, i, buffer) => {
        if (i == 0) {
            return {
                type: "polyline",
                geometry: [
                    p[0], p[2]
                ]
            };
        } else if (i == 1) {
            let a = properties.annotations;
            let aname;
            let ret = [];

            if (p.length == 2) {
                ret.push({
                    type: "polyline",
                    geometry: calc.arrow(turnPlane, {x: p[3], y:p[1].y}, {x: 0, y: p[1].y}, arrowSize).geometry
                });
    
            }
            aname = "b";

            let c = rect(p[3].x, p[3].y, a[aname].width, a[aname].height);
            ret.push({
                type: "annotation",
                geometry: c.geometry(),
                name: aname,
                debug: true
            });

            let ll = c.linkLine(p[3], p[1], true);
            if (ll.length == 2) {
                let d = [p[0]];
                d = d.concat(ll[0].geometry);
                let e = ll[1].geometry;
                e.push(p[2]);
                ret.push({
                    type: "polyline",
                    geometry: d
                });
                ret.push({
                    type: "polyline",
                    geometry: e
                });
            }
            return ret;
        }
    }, preWork, orders).end();
}

module.exports = {
    modular: breakthrough,
    minPointCount: 2,
    maxPointCount: 3,
    properties: {
        size: {
            arrow: 20,
        },
        annotations: {
            b: {
                value: "P",
                anchor: { x: 0, y: 0 }
            },
            c: {
                value: "C",
                anchor: { x: 0, y: 0 }
            }
        }
    }
};