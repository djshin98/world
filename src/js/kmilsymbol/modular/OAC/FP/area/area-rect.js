const { calc, rect } = require("../../../../graphics/math");

const akey = {
    "G-F-ACAR": "b", //공역협조지역  LEFT , RIGHT , HEIGHT = AM
    "G-F-ACDR": "c", //사강지역(DA)(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-ACZR": "d", //책임구역(ZOR)(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-AZIR": "azir", //포병표적정보구역(ATI)(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-ACBR": "acbr", //표적식별구역(ATI)(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-ACVR": "acvr", //표적식별구역(ATI)(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-AZXR": "azxr", //화력요청구역(CFFZ)(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-AZCR": "azcr", //검열구역(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-AZFR": "azfr", //아군확인구역(CFZ)(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-ATR": "i", //사각형표적   중심점 , WID
    "G-F-ACSR": "acsr", //화력지원지역 LEFT , RIGHT , HEIGHT = AM
    "G-F-ACFR": "k", // 자유사격지역(FFA)(사각형) LEFT , RIGHT , HEIGHT = AM
    "G-F-ACNR": "acnr",
}

function areaRect(turnPlane, properties, bcompleted) {
    let a = properties.annotations;
    let aname = akey[properties.log];
    let style;
    return turnPlane.map((prev, p, i, buffer) => {
        p.push(p[0]);
        let ret = [];
        let geo = [];
        if (properties.log == "G-F-ATR") {
            let distance = properties.variables.AM1;
            let height = properties.variables.AN;

            if (distance < 200 && height < 200) {
                distance = 200;
                height = 200;
            }
            geo.push({ x: -height / 2, y: -p[1].y });
            geo.push({ x: height / 2, y: -p[1].y });
            geo.push({ x: height / 2, y: p[1].y });
            geo.push({ x: -height / 2, y: p[1].y });
            geo.push({ x: -height / 2, y: -p[1].y });
        } else {
            let height = properties.variables.AM;
            geo.push({ x: -height / 2, y: 0 });
            geo.push({ x: height / 2, y: 0 });
            geo.push({ x: height / 2, y: p[1].y });
            geo.push({ x: -height / 2, y: p[1].y });
            geo.push({ x: -height / 2, y: 0 });

            if (properties.log == "G-F-AZIR" || properties.log == "G-F-ACBR" ||
                properties.log == "G-F-ACVR" || properties.log == "G-F-AZXR" ||
                properties.log == "G-F-AZCR" || properties.log == "G-F-AZFR" || properties.log == "G-F-ACSR") {
                ret.push(calc.annotation(a, "w", { x: -height / 2 + a.w.height / 2, y: -(a.w.width) }));
                ret.push(calc.annotation(a, "w1", { x: -height / 2 + a.w.height + a.w1.height / 2, y: -(a.w1.width / 2) }));
                ret.push({
                    type: "polyline",
                    geometry: [{ x: -height / 2 + a.w.height / 2, y: -(a.w.width / 2) }, { x: -height / 2 + a.w.height / 2, y: 0 }]
                });
            }

            if (properties.log == "G-F-ACNR") {
                style = "hatching";
            }
        }
        let s = calc.center(geo);
        let t = calc.annotation(a, aname, s);
        ret.push(t)

        ret.push({
            type: "polygon",
            style: style,
            geometry: geo
        });

        return ret;

    }).end();
}
module.exports = {
    modular: areaRect,
    minPointCount: 2,
    maxPointCount: 2,
    properties: {
        annotations: {
            b: {
                filter: ["G-F-ACAR"],
                value: "{N}\nACA \n{T} \nMIN ALT: {X}  \nMIX ALT: {X1} \nGrids : {H2} \nEFF: {W} \n{W1}",
                anchor: { x: 0, y: 0 }
            },
            c: {
                filter: ["G-F-ACDR"],
                value: "{N}\nDA \n{T}",
                anchor: { x: 0, y: 0 }
            },
            d: {
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
            i: {
                filter: ["G-F-ATR"],
                value: "\n{T}",
                anchor: { x: 0, y: 0 }
            },
            acsr: {
                filter: ["G-F-ACSR"],
                value: "FSA \n{T}",
                anchor: { x: 0, y: 0 }
            },
            k: {
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
            w: {
                filter: ["G-F-AZIR", "G-F-ACBR", "G-F-ACVR", "G-F-AZXR", "G-F-AZCR", "G-F-AZFR", "G-F-ACSR"],
                value: "{W}",
                anchor: { x: 0, y: 0 }
            },
            w1: {
                filter: ["G-F-AZIR", "G-F-ACBR", "G-F-ACVR", "G-F-AZXR", "G-F-AZCR", "G-F-AZFR", "G-F-ACSR"],
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