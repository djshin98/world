const { calc, rect } = require("../../graphics/math");

const akey = {
    "WO-DOBVA----A": "dobva", // VDR 레벨 1~2
    "WO-DOBVB----A": "dobvb", // VDR 레벨 2~3
    "WO-DOBVC----A": "dobvc", // VDR 레벨 3~4
    "WO-DOBVD----A": "dobvd", // VDR 레벨 4~5
    "WO-DOBVE----A": "dobve", // VDR 레벨 5~6
    "WO-DOBVF----A": "dobvf", // VDR 레벨 6~7
    "WO-DOBVG----A": "dobvg", // VDR 레벨 7~8
    "WO-DOBVH----A": "dobvh", // VDR 레벨 8~9
    "WO-DOBVI----A": "dobvi", // VDR 레벨 9~10
}

function areaPolygon(turnPlane, properties, bcompleted) {
    let ps = properties.pixelBySize;
    let a = properties.annotations;
    let aname = akey[properties.log];

    return turnPlane.reduce((prev, p, i, buffer) => {
        p.push(p[0]);
        let ret = [];
        //let geo = [];
        let s = calc.center(p);
        let tmp = calc.annotation(a, aname, s);
        tmp.debug = false;
        ret.push(tmp);
        if (bcompleted === true && i == 0) {
            if (properties.log == "WO-DOBVA----A" || properties.log == "WO-DOBVB----A" ||
                properties.log == "WO-DOBVC----A" || properties.log == "WO-DOBVD----A" ||
                properties.log == "WO-DOBVE----A" || properties.log == "WO-DOBVF----A" ||
                properties.log == "WO-DOBVG----A" || properties.log == "WO-DOBVH----A" ||
                properties.log == "WO-DOBVI----A" ) {
                let mid = calc.mid(p[0], p[1]);
                let ann = calc.annotation(a, "w", p[0], true);
                ann.geometry = ann.geometry.map(h => { return calc.move(h, ps.gap + a.w.width / 2, ps.gap); });
                ann.trip = false;
                ret.push(ann);
                let m2 = calc.mid(p[0], mid);
                ann = calc.annotation(a, "w1", calc.moveY(p[0], a.w.height * 5 / 4), true);
                ann.geometry = ann.geometry.map(h => { return calc.move(h, ps.gap + a.w1.width / 2, ps.gap); });
                ann.trip = false;
                ret.push(ann);

                //ret.push(calc.annotation(a, "w", mid ));
                //ret.push(calc.annotation(a, "w1", { x: p[0].x, y: m2.y}));

                ret.push({
                    type: "polyline",
                    trip: false,
                    geometry: [calc.moveY(p[0], ps.gap), { x: ps.gap, y: ps.gap }]
                });
                
            }
        }
        ret.push({ type: "polygon", geometry: p });

        return ret;
    }).end();
}

module.exports = {
    modular: areaPolygon,
    minPointCount: 2,
    properties: {
        size: {
            gap: 10
        },
        annotations: {
            /*
            dbaif: {
                filter: ["WA-DBAIF----A--"],
                value: "\nFSA\n{T}",
                anchor: { x: 0, y: 0 }
            },
           */

        },
        variables: {
            N: "이름",
            T: "코드",
            X: 1000,
            X1: 3000,
            H2: 30,
            W: 10,
            W1: 20,
            AN: 1000,
            AM1: 2000,
            AM: 1000,
        }
    }
};