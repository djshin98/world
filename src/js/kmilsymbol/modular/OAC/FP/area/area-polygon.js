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
    "G-G-OAA": 'oaa', // 지휘통제 및 일반작전 - 돌격진지
    "G-G-OAK": 'oak', //지휘통제 및 일반작전 - 공격대기지역
    "G-G-OAO": 'oao', //지휘통제 및 일반작전 - 목표
    "G-G-SAO": 'sao', //지휘통제 및 일반작전 - 작전구역
    "G-G-SAN": 'san', //지휘통제 및 일반작전 - 중요관심지역 
    "G-G-SAT": 'sat', //지휘통제 및 일반작전 - 관심타격지역
    "G-S-AD": 'ad', //전투근무지원 - 억류자수용지역
    "G-S-AE": 'ae', //전투근무지원 - 포로수용소
    "G-S-AR": 'ar', //전투근무지원 - 전방 재무장 및 재급 유지역 
    "G-S-AH": 'ah', //전투근무지원 - 피난민수용지역
    "G-S-ASB": 'asb', //전투근무지원 - 여단지원지역
    "G-S-ASD": 'asd', //전투근무지원 - 사단지원지역
    "G-S-ASR": 'asr', //전투근무지원 - 연대지원지역
    "G-S-ASA": 'asa', //전투근무지원 - 군수지원지역
    "G-F-AT": 'at', //화력지원 - 영역표적지역
    "G-F-ATS": 'ats', //화력지원 - 연막차장지역
    "G-F-ATB": 'atb', //화력지원 - 폭격지역
    "G-F-ACT": 'act', //화력지원 - 단말유도 군수품 수신구역 
    "G-G-AAW": 'aaw', //지휘통제 및 일반작전 - 자유무기사격지대  style
    
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
                filter: ["G-F-ACEI"],
                value: "SENSOR ZONE\n{T}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            acdi: {
                filter: ["G-F-ACDI"],
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
                value: "BKB\n{T}\n{W}-{W1}\n{X}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            oaa: {
                filter: ["G-G-OAA"],
                value: "ASLT\nPSN\n{T}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            oak: {
                filter: ["G-G-OAK"],
                value: "ATK\n{T}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            oao: {
                filter: ["G-G-OAO"],
                value: "OBJ\n{T}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            sao: {
                filter: ["G-G-SAO"],
                value: "AO\n{T}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            san: {
                filter: ["G-G-SAN"],
                value: "NAI\n{T}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            sat: {
                filter: ["G-G-SAT"],
                value: "TAI\n{T}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            ad: {
                filter: ["G-S-AD"],
                value: "DETAINEE\nHOLDING\nAREA\n{T}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            ae: {
                filter: ["G-S-AE"],
                value: "EPW\nHOLDING\nAREA\n{T}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            ar: {
                filter: ["G-S-AR"],
                value: "FARP\n{T}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            ah: {
                filter: ["G-S-AH"],
                value: "REFUGEE\nHOLDING\nAREA\n{T}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            asb: {
                filter: ["G-S-ASB"],
                value: "BSA\n{T}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            asd: {
                filter: ["G-S-ASD"],
                value: "DSA\n{T}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            asr: {
                filter: ["G-S-ASR"],
                value: "RSA\n{T}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            asa: {
                filter: ["G-S-ASA"],
                value: "군수지원\n{T}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            at: {
                filter: ["G-F-AT"],
                value: "\n{T}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            ats: {
                filter: ["G-F-ATS"],
                value: "SMOKE\n{W}-{W1}",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            atb: {
                filter: ["G-F-ATB"],
                value: "BOMB",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            act: {
                filter: ["G-F-ACT"],
                value: "TGMF",
                transparent: 0.5,
                anchor: { x: 0, y: 0 }
            },
            aaw: {
                filter: ["G-G-AAW"],
                value: "WFZ\n{T}\nTIME FROM:{W}\nTIME TO:{W1}",
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