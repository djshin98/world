const { calc, rect } = require("../../../../graphics/math");

const akey = {

    "G-F-ACSI": "acsi", //화력지원지역 
    "G-F-ACAI": "acai", //공역협조지역  
    "G-F-ACFI": "acfi", // 자유사격지역
    "G-F-ACNI": "acni", // 화력금지지역  style
    "G-F-ACRI": 'acri', // 화력제한지역
    "G-F-ACEI": 'acei', // 센서지역
    "G-F-ACDI": "acdi", //사강지역
    "G-F-ACZI": "aczi", //책임구역
    "G-F-ACBI": "acbi", //표적식별구역
    "G-F-ACVI": "acvi", //표적평가지역
    "G-F-ACCI": "acci", //화생방정찰지역
    "G-F-ACGI": "acgi", //화생방제독지역
    "G-F-AZII": "azir", //포병표적정보구역
    "G-F-AZXI": "azxi", //화력요청구역
    "G-F-AZCI": "azci", //검열구역
    "G-F-AZFI": "azfi", //아군확인구역
    "G-F-AKBI": 'akbi', //아군 킬박스  style    
    "G-F-AKPI": 'akpi', //적군 킬박스  style

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
            if (properties.log == "G-F-ACSI" || properties.log == "G-F-ACEI" ||
                properties.log == "G-F-ACDI" || properties.log == "G-F-ACZI" ||
                properties.log == "G-F-ACBI" || properties.log == "G-F-ACVI" ||
                properties.log == "G-F-AZII" || properties.log == "G-F-AZXI" ||
                properties.log == "G-F-AZCI" || properties.log == "G-F-AZFI") {
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
            acsi: {
                filter: ["G-F-ACSI"],
                value: "\nFSA\n{T}",
                anchor: { x: 0, y: 0 }
            },
            acai: {
                filter: ["G-F-ACAI"],
                value: "{N}\nACA \n{T} \nMIN ALT: {X}  \nMIX ALT: {X1} \nGrids : {H2} \nEFF: {W} \n{W1}",
                anchor: { x: 0, y: 0 }
            },
            acfi: {
                filter: ["G-F-ACFI"],
                value: "{N}\nFFA \n{T}\n{W}-{W1}",
                anchor: { x: 0, y: 0 }
            },

            acni: {
                filter: ["G-F-ACNI"],
                value: "NFA\n{T}\n{W}-{W1}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },

            acri: {
                filter: ["G-F-ACRI"],
                value: "RFA\n{T}\n{W}-{W1}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },

            acei: {
                filter: ["G-F-ACDI"],
                value: "SENSOR ZONE\n{T}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            acdi: {
                filter: ["G-F-ACEI"],
                value: "DA\n{T}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            aczi: {
                filter: ["G-F-ACZI"],
                value: "ZOR\n{T}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            acbi: {
                filter: ["G-F-ACBI"],
                value: "TBA\n{T}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            acvi: {
                filter: ["G-F-ACVI"],
                value: "TVAR\n{T}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            acci: {
                filter: ["G-F-ACCI"],
                value: "화생방정찰\n{T}\n{W}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            acgi: {
                filter: ["G-F-ACGI"],
                value: "화생방제독\n{T}\n{W}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            azii: {
                filter: ["G-F-AZII"],
                value: "ATIZONE\n{T}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            azxi: {
                filter: ["G-F-AZXI"],
                value: "CFF ZONE\n{T}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            azci: {
                filter: ["G-F-AZCI"],
                value: "CENSOR ZONE\n{T}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            azfi: {
                filter: ["G-F-AZFI"],
                value: "CF ZONE\n{T}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            akbi: {
                filter: ["G-F-AKBI"],
                value: "BKB\n{T}\n{W}-{W1}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            akpi: {
                filter: ["G-F-AKPI"],
                value: "BKB\n{T}\n{W}-{W1}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            w: {
                value: "{W}",
                anchor: { x: 0, y: 0 }
            },
            w1: {
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