const { calc, rect } = require("../../../../graphics/math");

const akey = {
    "G-F-ACAC": "acar", //공역협조지역  LEFT , RIGHT , HEIGHT = AM
    "G-F-ACDC": "acdr", //사강지역(DA)(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-ACZC": "aczr", //책임구역(ZOR)(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-AZIC": "azir", //포병표적정보구역(ATI)(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-ACBC": "acbr", //표적식별구역(ATI)(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-ACVC": "acvr", //표적식별구역(ATI)(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-AZXC": "azxr", //화력요청구역(CFFZ)(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-AZCC": "azcr", //검열구역(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-AZFC": "azfr", //아군확인구역(CFZ)(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-ATC": "atr", //사각형표적   중심점 , WID
    "G-F-ACSC": "acsr", //화력지원지역 LEFT , RIGHT , HEIGHT = AM
    "G-F-ACFC": "acfr", // 자유사격지역(FFA)(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-ACNC": "acnr", // 화력금지지역(NFA)(사각형)
    "G-F-ACEC": "acer", //센서지역(사각형)
    "G-F-AKBC": 'akbr', //아군 킬박스(사각형)
    "G-F-AKPC": 'akpr', //적군 킬박스(사각형)
    "G-F-ACRC": 'acrr', // 화력제한지역(RFA)(사각형)
}

function areaCircle(turnPlane, properties, bcompleted) {
    return turnPlane.reduce((prev, p, i, buffer) => {
        let pVar = properties.variables;
        let a = properties.annotations;
        let ret = [];
        ret = ret.concat(calc.arc(0, Math.PI * 2, pVar.AM));
        let s = p[0];
        let aname = akey[properties.log];
        if (properties.log == "G-F-ACAC") {


        } else if (properties.log == "G-F-ACSC") {

        }

        if (properties.log == "G-F-ACSC") {
            ret.push(calc.annotation(a, "w", { x: 0, y: -(a.w.width) - pVar.AM }));
            ret.push(calc.annotation(a, "w1", { x: a.w.height / 2 + a.w1.height / 2, y: -(a.w1.width / 2) - pVar.AM }));
            ret.push({
                type: "polyline",
                geometry: [{ x: 0, y: -(a.w.width / 2) - pVar.AM }, { x: 0, y: -pVar.AM }]
            });


            let t = calc.annotation(a, aname, s);
            ret.push(t);
        }

        return ret;
    }).end();
}

module.exports = {
    modular: areaCircle,
    minPointCount: 2,
    maxPointCount: 2,
    properties: {
        annotations: {
            acar: {
                filter: ["G-F-ACAC"],
                value: "{N}\nACA \n{T} \nMIN ALT: {X}  \nMIX ALT: {X1} \nGrids : {H2} \nEFF: {W} \n{W1}",
                anchor: { x: 0, y: 0 }
            },
            acdr: {
                filter: ["G-F-ACDC"],
                value: "{N}\nDA \n{T}",
                anchor: { x: 0, y: 0 }
            },
            aczr: {
                filter: ["G-F-ACZC"],
                value: "{N}\nZOR \n{T}",
                anchor: { x: 0, y: 0 }
            },
            azir: {
                filter: ["G-F-AZIC"],
                value: "ATI ZONE \n{T}",
                anchor: { x: 0, y: 0 }
            },
            acbr: {
                filter: ["G-F-ACBC"],
                value: "TBA ZONE \n{T}",
                anchor: { x: 0, y: 0 }
            },
            acvr: {
                filter: ["G-F-ACVC"],
                value: "TVAR\n{T}",
                anchor: { x: 0, y: 0 }
            },
            azxr: {
                filter: ["G-F-AZXC"],
                value: "CFF ZONE \n{T}",
                anchor: { x: 0, y: 0 }
            },
            azcr: {
                filter: ["G-F-AZCC"],
                value: "CENSOR ZONE \n{T}",
                anchor: { x: 0, y: 0 }
            },
            azfr: {
                filter: ["G-F-AZFC"],
                value: "CF ZONE \n{T}",
                anchor: { x: 0, y: 0 }
            },
            atr: {
                filter: ["G-F-ATC"],
                value: "\n{T}",
                anchor: { x: 0, y: 0 }
            },
            acsr: {
                filter: ["G-F-ACSC"],
                value: "FSA \n{T}",
                anchor: { x: 0, y: 0 }
            },
            acfr: {
                filter: ["G-F-ACFC"],
                value: "FFA \n{T} \n{W}-{W1}",
                anchor: { x: 0, y: 0 }
            },
            acnr: {
                filter: ["G-F-ACNC"],
                value: "NFA\n{T}\n{W}-{W1}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            acer: {
                filter: ["G-F-ACEC"],
                value: "SENSOR ZONE\n{T} ",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            akbr: {
                filter: ["G-F-AKBC"],
                value: "BKB\n{T}\n{W}-{W1}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            akpr: {
                filter: ["G-F-AKPC"],
                value: "BKB\n{T}\n{W}-{W1}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            acrr: {
                filter: ["G-F-ACRC"],
                value: "RFA\n{T}\n{W}-{W1}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            w: {
                filter: ["G-F-AZIC", "G-F-ACBC", "G-F-ACVC", "G-F-AZXC", "G-F-AZCC", "G-F-AZFC", "G-F-ACSC", "G-F-ACEC", "G-F-ACRC"],
                value: "{W}",
                anchor: { x: 0, y: 0 }
            },
            w1: {
                filter: ["G-F-AZIC", "G-F-ACBC", "G-F-ACVC", "G-F-AZXC", "G-F-AZCC", "G-F-AZFC", "G-F-ACSC", "G-F-ACEC", "G-F-ACRC"],
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