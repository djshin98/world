const { calc, rect } = require("../../../../graphics/math");

const akey = {
    "G-F-ACAI": "acar", //공역협조지역  LEFT , RIGHT , HEIGHT = AM
    "G-F-ACDI": "acdr", //사강지역(DA)(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-ACZI": "aczr", //책임구역(ZOR)(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-AZII": "azir", //포병표적정보구역(ATI)(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-ACBI": "acbr", //표적식별구역(ATI)(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-ACVI": "acvr", //표적식별구역(ATI)(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-AZXI": "azxr", //화력요청구역(CFFZ)(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-AZCI": "azcr", //검열구역(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-AZFI": "azfr", //아군확인구역(CFZ)(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-ATI": "atr", //사각형표적   중심점 , WID
    "G-F-ACSI": "acsr", //화력지원지역 LEFT , RIGHT , HEIGHT = AM
    "G-F-ACFI": "acfr", // 자유사격지역(FFA)(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-ACNI": "acnr", // 화력금지지역(NFA)(사각형)
    "G-F-ACEI": "acer", //센서지역(사각형)
    "G-F-AKBI": 'akbr', //아군 킬박스(사각형)
    "G-F-AKPI": 'akpr', //적군 킬박스(사각형)
    "G-F-ACRI": 'acrr', // 화력제한지역(RFA)(사각형)
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

        if (properties.log == "G-F-ACDI" || properties.log == "G-F-ACBI" ||
            properties.log == "G-F-ACVI" || properties.log == "G-F-AZXI" ||
            properties.log == "G-F-AZCI" || properties.log == "G-F-AZFI" || properties.log == "G-F-ACSI") {
            ret.push(calc.annotation(a, "w", { x: -height / 2 + a.w.height / 2, y: -(a.w.width) }));
            ret.push(calc.annotation(a, "w1", { x: -height / 2 + a.w.height + a.w1.height / 2, y: -(a.w1.width / 2) }));
            ret.push({
                type: "polyline",
                geometry: [{ x: -height / 2 + a.w.height / 2, y: -(a.w.width / 2) }, { x: -height / 2 + a.w.height / 2, y: 0 }]
            });
        }
        return ret;
    }).end();
}

module.exports = {
    modular: areaPolygon,
    minPointCount: 2,
    properties: {
        annotations: {
            acar: {
                filter: ["G-F-ACAI"],
                value: "{N}\nACA \n{T} \nMIN ALT: {X}  \nMIX ALT: {X1} \nGrids : {H2} \nEFF: {W} \n{W1}",
                anchor: { x: 0, y: 0 }
            },
            acdr: {
                filter: ["G-F-ACDI"],
                value: "{N}\nDA \n{T}",
                anchor: { x: 0, y: 0 }
            },
            aczr: {
                filter: ["G-F-ACZI"],
                value: "{N}\nZOR \n{T}",
                anchor: { x: 0, y: 0 }
            },
            azir: {
                filter: ["G-F-AZII"],
                value: "ATI ZONE \n{T}",
                anchor: { x: 0, y: 0 }
            },
            acbr: {
                filter: ["G-F-ACBI"],
                value: "TBA ZONE \n{T}",
                anchor: { x: 0, y: 0 }
            },
            acvr: {
                filter: ["G-F-ACVI"],
                value: "TVAR\n{T}",
                anchor: { x: 0, y: 0 }
            },
            azxr: {
                filter: ["G-F-AZXI"],
                value: "CFF ZONE \n{T}",
                anchor: { x: 0, y: 0 }
            },
            azcr: {
                filter: ["G-F-AZCI"],
                value: "CENSOR ZONE \n{T}",
                anchor: { x: 0, y: 0 }
            },
            azfr: {
                filter: ["G-F-AZFI"],
                value: "CF ZONE \n{T}",
                anchor: { x: 0, y: 0 }
            },
            atr: {
                filter: ["G-F-ATI"],
                value: "\n{T}",
                anchor: { x: 0, y: 0 }
            },
            acsr: {
                filter: ["G-F-ACSI"],
                value: "FSA \n{T}",
                anchor: { x: 0, y: 0 }
            },
            acfr: {
                filter: ["G-F-ACFI"],
                value: "FFA \n{T} \n{W}-{W1}",
                anchor: { x: 0, y: 0 }
            },
            acnr: {
                filter: ["G-F-ACNI"],
                value: "NFA\n{T}\n{W}-{W1}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            acer: {
                filter: ["G-F-ACEI"],
                value: "SENSOR ZONE\n{T} ",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            akbr: {
                filter: ["G-F-AKBI"],
                value: "BKB\n{T}\n{W}-{W1}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            akpr: {
                filter: ["G-F-AKPI"],
                value: "BKB\n{T}\n{W}-{W1}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            acrr: {
                filter: ["G-F-ACRI"],
                value: "RFA\n{T}\n{W}-{W1}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            w: {
                filter: ["G-F-AZII", "G-F-ACBI", "G-F-ACVI", "G-F-AZXI", "G-F-AZCI", "G-F-AZFI", "G-F-ACSI", "G-F-ACEI", "G-F-ACRI"],
                value: "{W}",
                anchor: { x: 0, y: 0 }
            },
            w1: {
                filter: ["G-F-AZII", "G-F-ACBI", "G-F-ACVI", "G-F-AZXI", "G-F-AZCI", "G-F-AZFI", "G-F-ACSI", "G-F-ACEI", "G-F-ACRI"],
                value: "{W1}",
                anchor: { x: 0, y: 0 }
            }

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