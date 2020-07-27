const { calc, rect } = require("../../../../graphics/math");

function areaPolygon(turnPlane, properties, bcompleted) {

    let a = properties.annotations;

    return turnPlane.map((prev, p, i, buffer) => {
        if (properties.log == "G-F-ACAI") {

            p.push(p[0]);
            let ret = [];

            let s = calc.avg(p);
            let tmp = calc.annotation(a, "b", s);
            tmp.debug = false;
            ret.push(tmp);
            ret.push({ type: "polyline", geometry: p });

            return ret;
        } else if (properties.log == "G-F-ACDI") {

            p.push(p[0]);
            let ret = [];

            let s = calc.avg(p);
            let tmp = calc.annotation(a, "c", s);
            tmp.debug = false;
            ret.push(tmp);
            ret.push({ type: "polyline", geometry: p });

            return ret;
        } else if (properties.log == "G-F-ACZI") {

            p.push(p[0]);
            let ret = [];

            let s = calc.avg(p);
            let tmp = calc.annotation(a, "d", s);
            tmp.debug = false;
            ret.push(tmp);
            ret.push({ type: "polyline", geometry: p });

            return ret;
        } else if (properties.log == "G-F-AZII") {

            p.push(p[0]);
            let ret = [];

            let s = calc.avg(p);
            let tmp = calc.annotation(a, "e", s);
            tmp.debug = false;
            ret.push(tmp);
            ret.push({ type: "polyline", geometry: p });

            return ret;

        } else if (properties.log == "G-F-AZXI") {
            p.push(p[0]);
            let ret = [];

            let s = calc.avg(p);
            let tmp = calc.annotation(a, "f", s);
            tmp.debug = false;
            ret.push(tmp);
            ret.push({ type: "polyline", geometry: p });

            return ret;

        } else if (properties.log == "G-F-AZCI") {
            p.push(p[0]);
            let ret = [];

            let s = calc.avg(p);
            let tmp = calc.annotation(a, "g", s);
            tmp.debug = false;
            ret.push(tmp);
            ret.push({ type: "polyline", geometry: p });

            return ret;
        } else if (properties.log == "G-F-AZFI") {
            p.push(p[0]);
            let ret = [];

            let s = calc.avg(p);
            let tmp = calc.annotation(a, "i", s);
            tmp.debug = false;
            ret.push(tmp);
            ret.push({ type: "polyline", geometry: p });

            return ret;

        } else if (properties.log == "G-F-ACSI") {
            p.push(p[0]);
            let ret = [];

            let s = calc.avg(p);
            let tmp = calc.annotation(a, "i", s);
            tmp.debug = false;
            ret.push(tmp);
            ret.push({ type: "polyline", geometry: p });

            return ret;
        } else if (properties.log == "G-F-ACAI") {
            p.push(p[0]);
            let ret = [];

            let s = calc.avg(p);
            let tmp = calc.annotation(a, "j", s);
            tmp.debug = false;
            ret.push(tmp);
            ret.push({ type: "polyline", geometry: p });

            return ret;

        }

    }).end();
}

module.exports = {
    modular: areaPolygon,
    minPointCount: 1,
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
        }
    }
};

