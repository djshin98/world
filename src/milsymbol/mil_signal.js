/* eslint-disable */


var functionIdentifier_Signal = [{
    id: "4",
    type: "I",
    affiliation: "-",
    battlefield: "-",
    status: "-",
    modifier: "------",
    desc_kor: "신호정보",
    desc_eng: "Signals,intelligence",
    children: [{
            id: "4.1",
            type: "I",
            affiliation: "*",
            battlefield: "P",
            status: "*",
            modifier: "------",
            desc_kor: "우주항적",
            desc_eng: "Space,track",
            children: [{
                id: "4.1.1",
                type: "I",
                affiliation: "*",
                battlefield: "P",
                status: "*",
                modifier: "S-----",
                desc_kor: "신호도청",
                desc_eng: "Signal,intercept",
                children: [{
                        id: "4.1.1.1",
                        type: "I",
                        affiliation: "*",
                        battlefield: "P",
                        status: "*",
                        modifier: "SC----",
                        desc_kor: "통신",
                        desc_eng: "Communications",
                        children: [
                            { id: "4.1.1.1.1", type: "I", affiliation: "*", battlefield: "P", status: "*", modifier: "SCD---", desc_kor: "위성수신", desc_eng: "Satellite,downlink" }
                        ]
                    },
                    {
                        id: "4.1.1.2",
                        type: "I",
                        affiliation: "*",
                        battlefield: "P",
                        status: "*",
                        modifier: "SR----",
                        desc_kor: "레이다",
                        desc_eng: "Radar",
                        children: [
                            { id: "4.1.1.2.1", type: "I", affiliation: "*", battlefield: "P", status: "*", modifier: "SRD---", desc_kor: "데이터전송", desc_eng: "Data,transmission" },
                            { id: "4.1.1.2.2", type: "I", affiliation: "*", battlefield: "P", status: "*", modifier: "SRE---", desc_kor: "지구감시", desc_eng: "Earth,surveillance" },
                            { id: "4.1.1.2.3", type: "I", affiliation: "*", battlefield: "P", status: "*", modifier: "SRI---", desc_kor: "적아식별(응답기)", desc_eng: "IFF,(Transponder)" },
                            { id: "4.1.1.2.4", type: "I", affiliation: "*", battlefield: "P", status: "*", modifier: "SRM---", desc_kor: "다중임무", desc_eng: "Multifunction" },
                            { id: "4.1.1.2.5", type: "I", affiliation: "*", battlefield: "P", status: "*", modifier: "SRT---", desc_kor: "표적획득", desc_eng: "Target,acquisition" },
                            { id: "4.1.1.2.6", type: "I", affiliation: "*", battlefield: "P", status: "*", modifier: "SRS---", desc_kor: "우주항적", desc_eng: "Space" },
                            { id: "4.1.1.2.7", type: "I", affiliation: "*", battlefield: "P", status: "*", modifier: "SRU---", desc_kor: "미확인", desc_eng: "Unknown" }
                        ]
                    }
                ]
            }]
        },
        {
            id: "4.2",
            type: "I",
            affiliation: "*",
            battlefield: "A",
            status: "*",
            modifier: "------",
            desc_kor: "공중항적",
            desc_eng: "Air,track",
            children: [{
                id: "4.2.1",
                type: "I",
                affiliation: "*",
                battlefield: "A",
                status: "*",
                modifier: "S-----",
                desc_kor: "신호도청",
                desc_eng: "Signal,intercept",
                children: [{
                        id: "4.2.1.1",
                        type: "I",
                        affiliation: "*",
                        battlefield: "A",
                        status: "*",
                        modifier: "SC----",
                        desc_kor: "통신",
                        desc_eng: "Communications",
                        children: [
                            { id: "4.2.1.1.1", type: "I", affiliation: "*", battlefield: "A", status: "*", modifier: "SCC---", desc_kor: "무선/모바일", desc_eng: "Cellular/Mobile" },
                            { id: "4.2.1.1.2", type: "I", affiliation: "*", battlefield: "A", status: "*", modifier: "SCO---", desc_kor: "전방위레이다가시선", desc_eng: "Omni-line,of,sight,(LOS)" },
                            { id: "4.2.1.1.3", type: "I", affiliation: "*", battlefield: "A", status: "*", modifier: "SCP---", desc_kor: "일대일레이다가시선", desc_eng: "Point-to-point,line,of,sight,(LOS)" },
                            { id: "4.2.1.1.4", type: "I", affiliation: "*", battlefield: "A", status: "*", modifier: "SCS---", desc_kor: "위성송신", desc_eng: "Satellite,uplink" }
                        ]
                    },
                    {
                        id: "4.2.1.2",
                        type: "I",
                        affiliation: "*",
                        battlefield: "A",
                        status: "*",
                        modifier: "SR----",
                        desc_kor: "레이다",
                        desc_eng: "Radar",
                        children: [
                            { id: "4.2.1.2.1", type: "I", affiliation: "*", battlefield: "A", status: "*", modifier: "SRAI--", desc_kor: "공수 도청", desc_eng: "Airborne,intercept" },
                            { id: "4.2.1.2.2", type: "I", affiliation: "*", battlefield: "A", status: "*", modifier: "SRAS--", desc_kor: "공수 탐색 및 폭격", desc_eng: "Airborne,search,and,bombing" },
                            { id: "4.2.1.2.3", type: "I", affiliation: "*", battlefield: "A", status: "*", modifier: "SRC---", desc_kor: "통제된 도청", desc_eng: "Controlled,intercept" },
                            { id: "4.2.1.2.4", type: "I", affiliation: "*", battlefield: "A", status: "*", modifier: "SRD---", desc_kor: "데이터전송", desc_eng: "Data,transmission" },
                            { id: "4.2.1.2.5", type: "I", affiliation: "*", battlefield: "A", status: "*", modifier: "SRE---", desc_kor: "조기경보", desc_eng: "Early,warning" },
                            { id: "4.2.1.2.6", type: "I", affiliation: "*", battlefield: "A", status: "*", modifier: "SRF---", desc_kor: "화력제어", desc_eng: "Fire,control" },
                            { id: "4.2.1.2.7", type: "I", affiliation: "*", battlefield: "A", status: "*", modifier: "SRI---", desc_kor: "적아식별(응답기)", desc_eng: "IFF,(Transponder)" },
                            { id: "4.2.1.2.8", type: "I", affiliation: "*", battlefield: "A", status: "*", modifier: "SRMA--", desc_kor: "유도탄포착", desc_eng: "Missile,acquisition" },
                            { id: "4.2.1.2.9", type: "I", affiliation: "*", battlefield: "A", status: "*", modifier: "SRMD--", desc_kor: "유도탄수신", desc_eng: "Missile,downlink" },
                            { id: "4.2.1.2.10", type: "I", affiliation: "*", battlefield: "A", status: "*", modifier: "SRMG--", desc_kor: "유도탄유도", desc_eng: "Missile,guidance" },
                            { id: "4.2.1.2.11", type: "I", affiliation: "*", battlefield: "A", status: "*", modifier: "SRMT--", desc_kor: "유도탄추적", desc_eng: "Missile,tracking" },
                            { id: "4.2.1.2.12", type: "I", affiliation: "*", battlefield: "A", status: "*", modifier: "SRMF--", desc_kor: "다중임무", desc_eng: "Multifunction" },
                            { id: "4.2.1.2.13", type: "I", affiliation: "*", battlefield: "A", status: "*", modifier: "SRTI--", desc_kor: "표적발광체", desc_eng: "Target,illuminator" },
                            { id: "4.2.1.2.14", type: "I", affiliation: "*", battlefield: "A", status: "*", modifier: "SRTA--", desc_kor: "표적획득", desc_eng: "Target,acquisition" },
                            { id: "4.2.1.2.15", type: "I", affiliation: "*", battlefield: "A", status: "*", modifier: "SRTT--", desc_kor: "표적추적", desc_eng: "Target,tracking" },
                            { id: "4.2.1.2.16", type: "I", affiliation: "*", battlefield: "A", status: "*", modifier: "SRU---", desc_kor: "미확인", desc_eng: "Unknown" }
                        ]
                    }
                ]
            }]
        },
        {
            id: "4.3",
            type: "I",
            affiliation: "*",
            battlefield: "G",
            status: "*",
            modifier: "------",
            desc_kor: "지상 항적",
            desc_eng: "Ground,track",
            children: [{
                id: "4.3.1",
                type: "I",
                affiliation: "*",
                battlefield: "G",
                status: "*",
                modifier: "S-----",
                desc_kor: "신호도청",
                desc_eng: "Signal,intercept",
                children: [{
                        id: "4.3.1.1",
                        type: "I",
                        affiliation: "*",
                        battlefield: "G",
                        status: "*",
                        modifier: "SC----",
                        desc_kor: "통신",
                        desc_eng: "Communications",
                        children: [
                            { id: "4.3.1.1.1", type: "I", affiliation: "*", battlefield: "G", status: "*", modifier: "SCC---", desc_kor: "무선/모바일", desc_eng: "Cellular/Mobile" },
                            { id: "4.3.1.1.2", type: "I", affiliation: "*", battlefield: "G", status: "*", modifier: "SCO---", desc_kor: "전방위레이다가시선", desc_eng: "Omni-line,of,sight,(LOS)" },
                            { id: "4.3.1.1.3", type: "I", affiliation: "*", battlefield: "G", status: "*", modifier: "SCP---", desc_kor: "일대일레이다가시선", desc_eng: "Point-to-point,line,of,sight,(LOS)" },
                            { id: "4.3.1.1.4", type: "I", affiliation: "*", battlefield: "G", status: "*", modifier: "SCS---", desc_kor: "위성송신", desc_eng: "Satellite,uplink" },
                            { id: "4.3.1.1.5", type: "I", affiliation: "*", battlefield: "G", status: "*", modifier: "SCT---", desc_kor: "대류권산란", desc_eng: "Tropospheric,scatter" }
                        ]
                    },
                    {
                        id: "4.3.1.2",
                        type: "I",
                        affiliation: "*",
                        battlefield: "G",
                        status: "*",
                        modifier: "SR----",
                        desc_kor: "레이다",
                        desc_eng: "Radar",
                        children: [
                            { id: "4.3.1.2.1", type: "I", affiliation: "*", battlefield: "G", status: "*", modifier: "SRAT--", desc_kor: "항공교통관제", desc_eng: "Air,traffic,control" },
                            { id: "4.3.1.2.2", type: "I", affiliation: "*", battlefield: "G", status: "*", modifier: "SRAA--", desc_kor: "대공", desc_eng: "Antiaircraft" },
                            { id: "4.3.1.2.3", type: "I", affiliation: "*", battlefield: "G", status: "*", modifier: "SRB---", desc_kor: "전장감시", desc_eng: "Battlefield,surveillance" },
                            { id: "4.3.1.2.4", type: "I", affiliation: "*", battlefield: "G", status: "*", modifier: "SRCS--", desc_kor: "해안감시", desc_eng: "Coastal,surveillance" },
                            { id: "4.3.1.2.5", type: "I", affiliation: "*", battlefield: "G", status: "*", modifier: "SRCA--", desc_kor: "접근관제", desc_eng: "Controlled,approach" },
                            { id: "4.3.1.2.6", type: "I", affiliation: "*", battlefield: "G", status: "*", modifier: "SRD---", desc_kor: "데이터전송", desc_eng: "Data,transmission" },
                            { id: "4.3.1.2.7", type: "I", affiliation: "*", battlefield: "G", status: "*", modifier: "SRE---", desc_kor: "조기경보", desc_eng: "Early,warning" },
                            { id: "4.3.1.2.8", type: "I", affiliation: "*", battlefield: "G", status: "*", modifier: "SRF---", desc_kor: "화력통제", desc_eng: "Fire,control" },
                            { id: "4.3.1.2.9", type: "I", affiliation: "*", battlefield: "G", status: "*", modifier: "SRH---", desc_kor: "고도탐지", desc_eng: "Height,finding" },
                            { id: "4.3.1.2.10", type: "I", affiliation: "*", battlefield: "G", status: "*", modifier: "SRI---", desc_kor: "적아식별(질문기)", desc_eng: "Identification,friend/FOE,(Interrogator)" },
                            { id: "4.3.1.2.11", type: "I", affiliation: "*", battlefield: "G", status: "*", modifier: "SRMM--", desc_kor: "기상(군용)", desc_eng: "Meteorological,(Military)" },
                            { id: "4.3.1.2.12", type: "I", affiliation: "*", battlefield: "G", status: "*", modifier: "SRMA--", desc_kor: "유도탄포착", desc_eng: "Missile,acquisition" },
                            { id: "4.3.1.2.13", type: "I", affiliation: "*", battlefield: "G", status: "*", modifier: "SRMG--", desc_kor: "유도탄유도", desc_eng: "Missile,guidance" },
                            { id: "4.3.1.2.14", type: "I", affiliation: "*", battlefield: "G", status: "*", modifier: "SRMT--", desc_kor: "유도탄추적", desc_eng: "Missile,tracking" },
                            { id: "4.3.1.2.15", type: "I", affiliation: "*", battlefield: "G", status: "*", modifier: "SRMF--", desc_kor: "다중임무", desc_eng: "Multifunction" },
                            { id: "4.3.1.2.16", type: "I", affiliation: "*", battlefield: "G", status: "*", modifier: "SRS---", desc_kor: "포탄포착", desc_eng: "Shell,tracking" },
                            { id: "4.3.1.2.17", type: "I", affiliation: "*", battlefield: "G", status: "*", modifier: "SRTA--", desc_kor: "표적획득", desc_eng: "Target,acquisition" },
                            { id: "4.3.1.2.18", type: "I", affiliation: "*", battlefield: "G", status: "*", modifier: "SRTI--", desc_kor: "표적발광체", desc_eng: "Target,illuminator" },
                            { id: "4.3.1.2.19", type: "I", affiliation: "*", battlefield: "G", status: "*", modifier: "SRTT--", desc_kor: "표적추적", desc_eng: "Target,tracking" },
                            { id: "4.3.1.2.20", type: "I", affiliation: "*", battlefield: "G", status: "*", modifier: "SRU---", desc_kor: "미확인", desc_eng: "Unknown" }
                        ]
                    }
                ]
            }]
        },
        {
            id: "4.4",
            type: "I",
            affiliation: "*",
            battlefield: "S",
            status: "*",
            modifier: "------",
            desc_kor: "수상항적",
            desc_eng: "Sea,surface,track",
            children: [{
                id: "4.4.1",
                type: "I",
                affiliation: "*",
                battlefield: "S",
                status: "*",
                modifier: "S-----",
                desc_kor: "신호도청",
                desc_eng: "Signal,intercept",
                children: [{
                        id: "4.4.1.1",
                        type: "I",
                        affiliation: "*",
                        battlefield: "S",
                        status: "*",
                        modifier: "SC----",
                        desc_kor: "통신",
                        desc_eng: "Communications",
                        children: [
                            { id: "4.4.1.1.1", type: "I", affiliation: "*", battlefield: "S", status: "*", modifier: "SCC---", desc_kor: "무선/모바일", desc_eng: "Cellular/Mobile" },
                            { id: "4.4.1.1.2", type: "I", affiliation: "*", battlefield: "S", status: "*", modifier: "SCO---", desc_kor: "전방위레이다가시선", desc_eng: "Omni-line,of,sight,(LOS)" },
                            { id: "4.4.1.1.3", type: "I", affiliation: "*", battlefield: "S", status: "*", modifier: "SCP---", desc_kor: "일대일레이다가시선", desc_eng: "Point-to-point,line,of,sight,(LOS)" },
                            { id: "4.4.1.1.4", type: "I", affiliation: "*", battlefield: "S", status: "*", modifier: "SCS---", desc_kor: "위성송신", desc_eng: "Satellite,uplink" }
                        ]
                    },
                    {
                        id: "4.4.1.2",
                        type: "I",
                        affiliation: "*",
                        battlefield: "S",
                        status: "*",
                        modifier: "SR----",
                        desc_kor: "레이다",
                        desc_eng: "Radar",
                        children: [
                            { id: "4.4.1.2.1", type: "I", affiliation: "*", battlefield: "S", status: "*", modifier: "SRAT--", desc_kor: "항공교통관제", desc_eng: "Air,traffic,control" },
                            { id: "4.4.1.2.2", type: "I", affiliation: "*", battlefield: "S", status: "*", modifier: "SRAA--", desc_kor: "대공", desc_eng: "Antiaircraft" },
                            { id: "4.4.1.2.3", type: "I", affiliation: "*", battlefield: "S", status: "*", modifier: "SRCA--", desc_kor: "접근관제", desc_eng: "Controlled,approach" },
                            { id: "4.4.1.2.4", type: "I", affiliation: "*", battlefield: "S", status: "*", modifier: "SRCI--", desc_kor: "요격관제", desc_eng: "Controlled,intercept" },
                            { id: "4.4.1.2.5", type: "I", affiliation: "*", battlefield: "S", status: "*", modifier: "SRD---", desc_kor: "데이터전송", desc_eng: "Data,transmission" },
                            { id: "4.4.1.2.6", type: "I", affiliation: "*", battlefield: "S", status: "*", modifier: "SRE---", desc_kor: "조기경보", desc_eng: "Early,warning" },
                            { id: "4.4.1.2.7", type: "I", affiliation: "*", battlefield: "S", status: "*", modifier: "SRF---", desc_kor: "화력통제", desc_eng: "Fire,control" },
                            { id: "4.4.1.2.8", type: "I", affiliation: "*", battlefield: "S", status: "*", modifier: "SRH---", desc_kor: "고도탐지", desc_eng: "Height,finding" },
                            { id: "4.4.1.2.9", type: "I", affiliation: "*", battlefield: "S", status: "*", modifier: "SRI---", desc_kor: "적아식별(질문기)", desc_eng: "Identification,friend/FOE,(Interrogator)" },
                            { id: "4.4.1.2.10", type: "I", affiliation: "*", battlefield: "S", status: "*", modifier: "SRMM--", desc_kor: "기상(군용)", desc_eng: "Meteorological,(Military)" },
                            { id: "4.4.1.2.11", type: "I", affiliation: "*", battlefield: "S", status: "*", modifier: "SRMA--", desc_kor: "유도탄포착", desc_eng: "Missile,acquisition" },
                            { id: "4.4.1.2.12", type: "I", affiliation: "*", battlefield: "S", status: "*", modifier: "SRMG--", desc_kor: "유도탄유도", desc_eng: "Missile,guidance" },
                            { id: "4.4.1.2.13", type: "I", affiliation: "*", battlefield: "S", status: "*", modifier: "SRMT--", desc_kor: "유도탄추적", desc_eng: "Missile,tracking" },
                            { id: "4.4.1.2.14", type: "I", affiliation: "*", battlefield: "S", status: "*", modifier: "SRMF--", desc_kor: "다중임무", desc_eng: "Multifunction" },
                            { id: "4.4.1.2.15", type: "I", affiliation: "*", battlefield: "S", status: "*", modifier: "SRS---", desc_kor: "수상탐색", desc_eng: "Surface,search" },
                            { id: "4.4.1.2.16", type: "I", affiliation: "*", battlefield: "S", status: "*", modifier: "SRTA--", desc_kor: "표적포착", desc_eng: "Target,acquisition" },
                            { id: "4.4.1.2.17", type: "I", affiliation: "*", battlefield: "S", status: "*", modifier: "SRTI--", desc_kor: "표적발광체", desc_eng: "Target,illuminator" },
                            { id: "4.4.1.2.18", type: "I", affiliation: "*", battlefield: "S", status: "*", modifier: "SRTT--", desc_kor: "표적추적", desc_eng: "Target,tracking" },
                            { id: "4.4.1.2.19", type: "I", affiliation: "*", battlefield: "S", status: "*", modifier: "SRU---", desc_kor: "미확인", desc_eng: "Unknown" }
                        ]
                    }
                ]
            }]
        },
        {
            id: "4.5",
            type: "I",
            affiliation: "*",
            battlefield: "U",
            status: "*",
            modifier: "------",
            desc_kor: "수중항적",
            desc_eng: "Subsurface,track",
            children: [{
                id: "4.5.1",
                type: "I",
                affiliation: "*",
                battlefield: "U",
                status: "*",
                modifier: "S-----",
                desc_kor: "신호도청",
                desc_eng: "Signal,intercept",
                children: [{
                        id: "4.5.1.1",
                        type: "I",
                        affiliation: "*",
                        battlefield: "U",
                        status: "*",
                        modifier: "SC----",
                        desc_kor: "통신",
                        desc_eng: "Communications",
                        children: [
                            { id: "4.5.1.1.1", type: "I", affiliation: "*", battlefield: "U", status: "*", modifier: "SCO---", desc_kor: "전방위레이다가시선", desc_eng: "Omni-line,of,sight,(LOS)" },
                            { id: "4.5.1.1.2", type: "I", affiliation: "*", battlefield: "U", status: "*", modifier: "SCP---", desc_kor: "일대일레이다가시선", desc_eng: "Point-to-point,line,of,sight,(LOS)" },
                            { id: "4.5.1.1.3", type: "I", affiliation: "*", battlefield: "U", status: "*", modifier: "SCS---", desc_kor: "위성송신", desc_eng: "Satellite,uplink" }
                        ]
                    },
                    {
                        id: "4.5.1.2",
                        type: "I",
                        affiliation: "*",
                        battlefield: "U",
                        status: "*",
                        modifier: "SR----",
                        desc_kor: "레이다",
                        desc_eng: "Radar",
                        children: [
                            { id: "4.5.1.2.1", type: "I", affiliation: "*", battlefield: "U", status: "*", modifier: "SRD---", desc_kor: "데이터전송", desc_eng: "Data,transmission" },
                            { id: "4.5.1.2.2", type: "I", affiliation: "*", battlefield: "U", status: "*", modifier: "SRE---", desc_kor: "조기경보", desc_eng: "Early,warning" },
                            { id: "4.5.1.2.3", type: "I", affiliation: "*", battlefield: "U", status: "*", modifier: "SRM---", desc_kor: "다중임무", desc_eng: "Multifunction" },
                            { id: "4.5.1.2.4", type: "I", affiliation: "*", battlefield: "U", status: "*", modifier: "SRS---", desc_kor: "수상탐색", desc_eng: "Surface,search" },
                            { id: "4.5.1.2.5", type: "I", affiliation: "*", battlefield: "U", status: "*", modifier: "SRT---", desc_kor: "표적포착", desc_eng: "Target,acquisition" },
                            { id: "4.5.1.2.6", type: "I", affiliation: "*", battlefield: "U", status: "*", modifier: "SRU---", desc_kor: "미확인", desc_eng: "Unknown" }
                        ]
                    }
                ]
            }]
        }
    ]
}];

var { affiliation, battlefield, status, mission } = require("./mil_basic");

module.exports = {
    code: "I",
    affiliation: affiliation,
    battlefield: battlefield,
    status: status,
    mission: mission,
    unit: {},
    identifier: functionIdentifier_Signal
};