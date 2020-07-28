const { calc, rect } = require("../../../../graphics/math");

const akey = {
    "G-F-ACAC": "acac", //공역협조지역  LEFT , RIGHT , HEIGHT = AM
    "G-F-ACDC": "acdc", //사강지역(DA)(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-ACZC": "aczc", //책임구역(ZOR)(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-AZIC": "azic", //포병표적정보구역(ATI)(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-ACBC": "acbc", //표적식별구역(ATI)(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-ACVC": "acvc", //표적식별구역(ATI)(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-AZXC": "azxc", //화력요청구역(CFFZ)(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-AZCC": "azcc", //검열구역(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-AZFC": "azfc", //아군확인구역(CFZ)(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-ATC": "atc", //사각형표적   중심점 , WID
    "G-F-ACSC": "acsc", //화력지원지역 LEFT , RIGHT , HEIGHT = AM
    "G-F-ACFC": "acfc", // 자유사격지역(FFA)(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-ACNC": "acnc", // 화력금지지역(NFA)(사각형)
    "G-F-ACEC": "acec", //센서지역(사각형)
    "G-F-AKBC": 'akbc', //아군 킬박스(사각형)
    "G-F-AKPC": 'akpc', //적군 킬박스(사각형)
    "G-F-ACRC": 'acrc', // 화력제한지역(RFA)(사각형)
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
            ret.push(calc.annotation(a, aname, { x: 0, y: 0 }));
        } else if (properties.log == "G-F-ACSC") {
            ret.push(calc.annotation(a, aname, { x: 0, y: 0 }));
        } else if (properties.log == "G-F-ATC") {
            ret.push(calc.annotation(a, aname, { x: 0, y: 0 }));
        } else if (properties.log == "G-F-ACFC") {
            ret.push(calc.annotation(a, aname, { x: 0, y: 0 }));
        } else if (properties.log == "G-F-ACNC") {
            ret.push(calc.annotation(a, aname, { x: 0, y: 0 }));
        } else if (properties.log == "G-F-ACRC") {
            ret.push(calc.annotation(a, aname, { x: 0, y: 0 }));
        } else if (properties.log == "G-F-ACEC") {
            ret.push(calc.annotation(a, aname, { x: 0, y: 0 }));
        } else if (properties.log == "G-F-ACDC") {
            ret.push(calc.annotation(a, aname, { x: 0, y: 0 }));
        } else if (properties.log == "G-F-ACZC") {
            ret.push(calc.annotation(a, aname, { x: 0, y: 0 }));
        } else if (properties.log == "G-F-ACBC") {
            ret.push(calc.annotation(a, aname, { x: 0, y: 0 }));
        } else if (properties.log == "G-F-ACVC") {
            ret.push(calc.annotation(a, aname, { x: 0, y: 0 }));
        } else if (properties.log == "G-F-AKBC") {
            ret.push(calc.annotation(a, aname, { x: 0, y: 0 }));
        } else if (properties.log == "G-F-AKPC") {
            ret.push(calc.annotation(a, aname, { x: 0, y: 0 }));
        }

        if (properties.log == "G-F-ACSC" || properties.log == "G-F-ACEC" || properties.log == "G-F-ACDC" ||
            properties.log == "G-F-ACZC" || properties.log == "G-F-ACBC" || properties.log == "G-F-ACVC") {
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
            acac: {
                filter: ["G-F-ACAC"],
                value: "ACA \n{T} \nMIN ALT: {X}  \nMIX ALT: {X1} \nGrids : {H2} \nEFF: {W} \n{W1}",
                anchor: { x: 0, y: 0 }
            },
            acdc: {
                filter: ["G-F-ACDC"],
                value: "DA\n{T}",
                anchor: { x: 0, y: 0 }
            },
            aczc: {
                filter: ["G-F-ACZC"],
                value: "{N}\nZOR \n{T}",
                anchor: { x: 0, y: 0 }
            },
            azic: {
                filter: ["G-F-AZIC"],
                value: "ATI ZONE \n{T}",
                anchor: { x: 0, y: 0 }
            },
            acbc: {
                filter: ["G-F-ACBC"],
                value: "TBA \n{T}",
                anchor: { x: 0, y: 0 }
            },
            acvc: {
                filter: ["G-F-ACVC"],
                value: "TVAR\n{T}",
                anchor: { x: 0, y: 0 }
            },
            azxc: {
                filter: ["G-F-AZXC"],
                value: "CFF ZONE \n{T}",
                anchor: { x: 0, y: 0 }
            },
            azcc: {
                filter: ["G-F-AZCC"],
                value: "CENSOR ZONE \n{T}",
                anchor: { x: 0, y: 0 }
            },
            azfc: {
                filter: ["G-F-AZFC"],
                value: "CF ZONE \n{T}",
                anchor: { x: 0, y: 0 }
            },
            atc: {
                filter: ["G-F-ATC"],
                value: "\n{T}",
                anchor: { x: 0, y: 0 }
            },
            acsc: {
                filter: ["G-F-ACSC"],
                value: "FSA \n{T}",
                anchor: { x: 0, y: 0 }
            },
            acfc: {
                filter: ["G-F-ACFC"],
                value: "FFA \n{T} \n{W}-{W1}",
                anchor: { x: 0, y: 0 }
            },
            acnc: {
                filter: ["G-F-ACNC"],
                value: "NFA\n{T}\n{W}-{W1}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            acec: {
                filter: ["G-F-ACEC"],
                value: "SENSOR ZONE\n{T} ",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            akbc: {
                filter: ["G-F-AKBC"],
                value: "BKB\n{T}\n{W}-{W1}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            akpc: {
                filter: ["G-F-AKPC"],
                value: "BKB\n{T}\n{W}-{W1}\n{X}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            acrc: {
                filter: ["G-F-ACRC"],
                value: "RFA\n{T}\n{W}-{W1}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            w: {
                filter: ["G-F-AZIC", "G-F-ACBC", "G-F-ACVC", "G-F-AZXC", "G-F-AZCC", "G-F-AZFC", "G-F-ACSC", "G-F-ACEC", "G-F-ACRC", "G-F-ACDC", "G-F-ACZC"],
                value: "{W}",
                anchor: { x: 0, y: 0 }
            },
            w1: {
                filter: ["G-F-AZIC", "G-F-ACBC", "G-F-ACVC", "G-F-AZXC", "G-F-AZCC", "G-F-AZFC", "G-F-ACSC", "G-F-ACEC", "G-F-ACRC", "G-F-ACDC", "G-F-ACZC"],
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