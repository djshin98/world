const { calc, rect } = require("../../../../graphics/math");

const akey = {
    "G-F-ACAI": "acar", //공역협조지역  LEFT , RIGHT , HEIGHT = AM
    "G-F-ACDI": "acdr", //사강지역(DA) LEFT , RIGHT , HEIGHT = AM
    "G-F-ACZI": "aczr", //책임구역(ZOR) LEFT , RIGHT , HEIGHT = AM
    "G-F-AZII": "azir", //포병표적정보구역(ATI) LEFT , RIGHT , HEIGHT = AM
    "G-F-ACBI": "acbr", //표적식별구역(ATI) LEFT , RIGHT , HEIGHT = AM
    "G-F-ACVI": "acvr", //표적식별구역(ATI) LEFT , RIGHT , HEIGHT = AM
    "G-F-AZXI": "azxr", //화력요청구역(CFFZ)LEFT , RIGHT , HEIGHT = AM
    "G-F-AZCI": "azcr", //검열구역 LEFT , RIGHT , HEIGHT = AM
    "G-F-AZFI": "azfr", //아군확인구역(CFZ) LEFT , RIGHT , HEIGHT = AM
    "G-F-ACSI": "acsr", //화력지원지역 LEFT , RIGHT , HEIGHT = AM
    "G-F-ACFI": "acfr", // 자유사격지역(FFA) LEFT , RIGHT , HEIGHT = AM
    "G-F-ACNI": "acnr", // 화력금지지역(NFA)
    "G-F-ACEI": "acer", //센서지역
    "G-F-AKBI": 'akbr', //아군 킬박스
    "G-F-AKPI": 'akpr', //적군 킬박스
    "G-F-ACRI": 'acrr', // 화력제한지역(RFA)
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

        if (properties.log == "G-F-ACDI" || properties.log == "G-F-ACBR" ||
            properties.log == "G-F-ACVR" || properties.log == "G-F-AZXR" ||
            properties.log == "G-F-AZCR" || properties.log == "G-F-AZFR" || properties.log == "G-F-ACSR") {
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
                filter: ["G-F-ACAR"],
                value: "{N}\nACA \n{T} \nMIN ALT: {X}  \nMIX ALT: {X1} \nGrids : {H2} \nEFF: {W} \n{W1}",
                anchor: { x: 0, y: 0 }
            },
            acdr: {
                filter: ["G-F-ACDR"],
                value: "{N}\nDA \n{T}",
                anchor: { x: 0, y: 0 }
            },
            aczr: {
                filter: ["G-F-ACZR"],
                value: "{N}\nZOR \n{T}",
                anchor: { x: 0, y: 0 }
            },
            azir: {
                filter: ["G-F-AZIR"],
                value: "ATI ZONE \n{T}",
                anchor: { x: 0, y: 0 }
            },
            acbr: {
                filter: ["G-F-ACBR"],
                value: "TBA ZONE \n{T}",
                anchor: { x: 0, y: 0 }
            },
            acvr: {
                filter: ["G-F-ACVR"],
                value: "TVAR\n{T}",
                anchor: { x: 0, y: 0 }
            },
            azxr: {
                filter: ["G-F-AZXR"],
                value: "CFF ZONE \n{T}",
                anchor: { x: 0, y: 0 }
            },
            azcr: {
                filter: ["G-F-AZCR"],
                value: "CENSOR ZONE \n{T}",
                anchor: { x: 0, y: 0 }
            },
            azfr: {
                filter: ["G-F-AZFR"],
                value: "CF ZONE \n{T}",
                anchor: { x: 0, y: 0 }
            },
            atr: {
                filter: ["G-F-ATR"],
                value: "\n{T}",
                anchor: { x: 0, y: 0 }
            },
            acsr: {
                filter: ["G-F-ACSR"],
                value: "FSA \n{T}",
                anchor: { x: 0, y: 0 }
            },
            acfr: {
                filter: ["G-F-ACFR"],
                value: "FFA \n{T} \n{W}-{W1}",
                anchor: { x: 0, y: 0 }
            },
            acnr: {
                filter: ["G-F-ACNR"],
                value: "NFA\n{T}\n{W}-{W1}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            acer: {
                filter: ["G-F-ACER"],
                value: "SENSOR ZONE\n{T} ",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            akbr: {
                filter: ["G-F-AKBR"],
                value: "BKB\n{T}\n{W}-{W1}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            akpr: {
                filter: ["G-F-AKPR"],
                value: "BKB\n{T}\n{W}-{W1}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            acrr: {
                filter: ["G-F-ACRR"],
                value: "RFA\n{T}\n{W}-{W1}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            w: {
                filter: ["G-F-AZIR", "G-F-ACBR", "G-F-ACVR", "G-F-AZXR", "G-F-AZCR", "G-F-AZFR", "G-F-ACSR", "G-F-ACER", "G-F-ACRR"],
                value: "{W}",
                anchor: { x: 0, y: 0 }
            },
            w1: {
                filter: ["G-F-AZIR", "G-F-ACBR", "G-F-ACVR", "G-F-AZXR", "G-F-AZCR", "G-F-AZFR", "G-F-ACSR", "G-F-ACER", "G-F-ACRR"],
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