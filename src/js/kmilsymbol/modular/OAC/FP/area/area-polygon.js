const { calc, rect } = require("../../../../graphics/math");

const akey = {
    "G-F-ACAI": "b",
    "G-F-ACDI": "c",
    "G-F-ACZI": "d",
    "G-F-AZII": "e",
    "G-F-AZXI": "f",
    "G-F-AZCI": "g",
    "G-F-AZFI": "h",
    "G-F-ACSI": "i",
    "G-F-ACAI": "j",
}

function areaPolygon(turnPlane, properties, bcompleted) {

    let a = properties.annotations;
    let aname = akey[properties.log];
    return turnPlane.reduce((prev, p, i, buffer) => {
        p.push(p[0]);
        let ret = [];
        if (bcompleted === true) {
            let s = calc.avg(p);
            let tmp = calc.annotation(a, aname, s);
            tmp.debug = false;
            ret.push(tmp);
        }
        ret.push({ type: "polyline", geometry: p });
        return ret;
    }).end();
}

module.exports = {
    modular: areaPolygon,
    minPointCount: 2,
    properties: {
        annotations: {
            b: {
                value: "{N}\nACA \n{T} \nMIN ALT: {X}  \nMIX ALT: {X1} \nGrids : {H2} \nEFF: {W} \n{W1}",
                anchor: { x: 0, y: 0 }
            },
            c: {
                value: "{N}\nDA \n{T}",
                anchor: { x: 0, y: 0 }
            },
            d: {
                value: "{N}\nZOR \n{T}",
                anchor: { x: 0, y: 0 }
            },
            e: {
                value: "{N}\nATI ZONE \n{T}",
                anchor: { x: 0, y: 0 }
            },
            f: {
                value: "{N}\nCFF ZONE \n{T}",
                anchor: { x: 0, y: 0 }
            },
            g: {
                value: "{N}\nCENSOR ZONE \n{T}",
                anchor: { x: 0, y: 0 }
            },
            h: {
                value: "{N}\nCF ZONE \n{T}",
                anchor: { x: 0, y: 0 }
            },
            i: {
                value: "{N}\nFSA \n{T}",
                anchor: { x: 0, y: 0 }
            },
            j: {
                value: "{N}\nACA \n{T} \nMIN ALT: {X}  \nMIX ALT: {X1} \nGrids : {H2} \nEFF: {W} \n{W1}",
                anchor: { x: 0, y: 0 }
            },
        },
        variables: {
            N: "이름",
            T: "코드",
            X: 1000,
            X1: 3000,
            H2: 30,
            W: 10,
            W1: 20
        }
    }
};