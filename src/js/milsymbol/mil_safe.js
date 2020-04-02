/* eslint-disable */

var battlefield_Safe = [
    { code: "V", desc: "과격행동" },
    { code: "L", desc: "위치" },
    { code: "O", desc: "작전" },
    { code: "I", desc: "항목" },
    { code: "P", desc: "개인" },
    { code: "G", desc: "비군사 조직 혹은 단체" },
    { code: "R", desc: "강간" }
];

var functionIdentifier_Safe = [{
    id: "5",
    type: "O",
    affiliation: "*",
    battlefield: "-",
    status: "-",
    modifier: "------",
    desc_kor: "안정화작전",
    desc_eng: "Stability,operations,(SO)",
    children: [{
            id: "5.1",
            type: "O",
            affiliation: "*",
            battlefield: "V",
            status: "*",
            modifier: "------",
            desc_kor: "과격행동(사상자초래)",
            desc_eng: "Violent,activities,(Death,causing)",
            children: [
                { id: "5.1.1", type: "O", affiliation: "*", battlefield: "V", status: "*", modifier: "A-----", desc_kor: "방화/화재", desc_eng: "Arson/Fire" },
                {
                    id: "5.1.2",
                    type: "O",
                    affiliation: "*",
                    battlefield: "V",
                    status: "*",
                    modifier: "M-----",
                    desc_kor: "살해",
                    desc_eng: "Killing,(General)",
                    children: [
                        { id: "5.1.2.1", type: "O", affiliation: "*", battlefield: "V", status: "*", modifier: "MA----", desc_kor: "살인", desc_eng: "Murder" },
                        { id: "5.1.2.2", type: "O", affiliation: "*", battlefield: "V", status: "*", modifier: "MB----", desc_kor: "처형", desc_eng: "Execution" },
                        { id: "5.1.2.3", type: "O", affiliation: "*", battlefield: "V", status: "*", modifier: "MC----", desc_kor: "암살", desc_eng: "Assassination" }
                    ]
                },
                { id: "5.1.3", type: "O", affiliation: "*", battlefield: "V", status: "*", modifier: "B-----", desc_kor: "폭탄테러/폭탄투하(척)", desc_eng: "Bomb/Bombing" },
                { id: "5.1.4", type: "O", affiliation: "*", battlefield: "V", status: "*", modifier: "Y-----", desc_kor: "부비트랩", desc_eng: "Booby,trap" },
                { id: "5.1.5", type: "O", affiliation: "*", battlefield: "V", status: "*", modifier: "D-----", desc_kor: "차량사격돌진", desc_eng: "Drive-by,shooting" },
                { id: "5.1.6", type: "O", affiliation: "*", battlefield: "V", status: "*", modifier: "S-----", desc_kor: "저격", desc_eng: "Sniping" },
                { id: "5.1.7", type: "O", affiliation: "*", battlefield: "V", status: "*", modifier: "P-----", desc_kor: "독살", desc_eng: "Poisoning" },
                {
                    id: "5.1.8",
                    type: "O",
                    affiliation: "*",
                    battlefield: "V",
                    status: "*",
                    modifier: "E-----",
                    desc_kor: "폭발",
                    desc_eng: "Explosion",
                    children: [
                        { id: "5.1.8.1", type: "O", affiliation: "*", battlefield: "V", status: "*", modifier: "EI----", desc_kor: "폭발물 폭발", desc_eng: "IED,explosion" }
                    ]
                }
            ]
        },
        {
            id: "5.2",
            type: "O",
            affiliation: "*",
            battlefield: "L",
            status: "*",
            modifier: "------",
            desc_kor: "위치",
            desc_eng: "Locations",
            children: [
                { id: "5.2.1", type: "O", affiliation: "*", battlefield: "L", status: "*", modifier: "B-----", desc_kor: "블랙리스트 위치", desc_eng: "Black,list,location" },
                { id: "5.2.2", type: "O", affiliation: "*", battlefield: "L", status: "*", modifier: "G-----", desc_kor: "그레이리스트 위치", desc_eng: "Gray,list,location" },
                { id: "5.2.3", type: "O", affiliation: "*", battlefield: "L", status: "*", modifier: "W-----", desc_kor: "화이트 리스트 위치", desc_eng: "White,list,location" },
                { id: "5.2.4", type: "O", affiliation: "*", battlefield: "L", status: "*", modifier: "M-----", desc_kor: "공동묘지", desc_eng: "Mass,grave,location" }
            ]
        },
        {
            id: "5.3",
            type: "O",
            affiliation: "*",
            battlefield: "O",
            status: "*",
            modifier: "------",
            desc_kor: "작전",
            desc_eng: "Operations",
            children: [
                { id: "5.3.1", type: "O", affiliation: "*", battlefield: "O", status: "*", modifier: "P-----", desc_kor: "순찰", desc_eng: "Patrolling" },
                {
                    id: "5.3.2",
                    type: "O",
                    affiliation: "*",
                    battlefield: "O",
                    status: "*",
                    modifier: "R-----",
                    desc_kor: "징집",
                    desc_eng: "Recruitment",
                    children: [
                        { id: "5.3.2.1", type: "O", affiliation: "*", battlefield: "O", status: "*", modifier: "RW----", desc_kor: "징집(지원)", desc_eng: "Recruitment,(Willing)" },
                        { id: "5.3.2.2", type: "O", affiliation: "*", battlefield: "O", status: "*", modifier: "RC----", desc_kor: "징집(강제/징모)", desc_eng: "Recruitment,(Coerced/Impressed)" }
                    ]
                },
                { id: "5.3.3", type: "O", affiliation: "*", battlefield: "O", status: "*", modifier: "D-----", desc_kor: "데모", desc_eng: "Demonstration" },
                { id: "5.3.4", type: "O", affiliation: "*", battlefield: "O", status: "*", modifier: "M-----", desc_kor: "지뢰부설", desc_eng: "Mine,laying" },
                {
                    id: "5.3.5",
                    type: "O",
                    affiliation: "*",
                    battlefield: "O",
                    status: "*",
                    modifier: "Y-----",
                    desc_kor: "심리작전",
                    desc_eng: "Psychological,operations,(PSYOP)",
                    children: [
                        { id: "5.3.5.1", type: "O", affiliation: "*", battlefield: "O", status: "*", modifier: "YT----", desc_kor: "심리작전(TV,라디오)", desc_eng: "Psyop,(TV,and,radio,propaganda)" },
                        { id: "5.3.5.2", type: "O", affiliation: "*", battlefield: "O", status: "*", modifier: "YW----", desc_kor: "심리작전(선전물)", desc_eng: "Psyop,(Written,propaganda)" },
                        { id: "5.3.5.3", type: "O", affiliation: "*", battlefield: "O", status: "*", modifier: "YH----", desc_kor: "방문선전", desc_eng: "House-to-house,propaganda" }
                    ]
                },
                { id: "5.3.6", type: "O", affiliation: "*", battlefield: "O", status: "*", modifier: "F-----", desc_kor: "식량탐색", desc_eng: "Foraging/Searching" },
                { id: "5.3.7", type: "O", affiliation: "*", battlefield: "O", status: "*", modifier: "S-----", desc_kor: "염탐", desc_eng: "Spy" },
                { id: "5.3.8", type: "O", affiliation: "*", battlefield: "O", status: "*", modifier: "O-----", desc_kor: "배식", desc_eng: "Food,distribution" },
                { id: "5.3.9", type: "O", affiliation: "*", battlefield: "O", status: "*", modifier: "E-----", desc_kor: "강탈", desc_eng: "Extortion" },
                {
                    id: "5.3.10",
                    type: "O",
                    affiliation: "*",
                    battlefield: "O",
                    status: "*",
                    modifier: "H-----",
                    desc_kor: "공중납치",
                    desc_eng: "Hijacking",
                    children: [
                        { id: "5.3.10.1", type: "O", affiliation: "*", battlefield: "O", status: "*", modifier: "HT----", desc_kor: "공중납치(차량)", desc_eng: "Hijacking,(Vehicle)" },
                        { id: "5.3.10.2", type: "O", affiliation: "*", battlefield: "O", status: "*", modifier: "HA----", desc_kor: "공중납치(항공기)", desc_eng: "Hijacking,(Airplane)" },
                        { id: "5.3.10.3", type: "O", affiliation: "*", battlefield: "O", status: "*", modifier: "HV----", desc_kor: "공중납치(선박)", desc_eng: "Hijacking,(Boat)" }
                    ]
                },
                {
                    id: "5.3.11",
                    type: "O",
                    affiliation: "*",
                    battlefield: "O",
                    status: "*",
                    modifier: "K-----",
                    desc_kor: "납치",
                    desc_eng: "Kidnapping",
                    children: [
                        { id: "5.3.11.1", type: "O", affiliation: "*", battlefield: "O", status: "*", modifier: "KA----", desc_kor: "납치미수", desc_eng: "Attempted" }
                    ]
                },
                { id: "5.3.12", type: "O", affiliation: "*", battlefield: "O", status: "*", modifier: "A-----", desc_kor: "체포", desc_eng: "Arrest" },
                { id: "5.3.13", type: "O", affiliation: "*", battlefield: "O", status: "*", modifier: "U-----", desc_kor: "마약작전", desc_eng: "Drug,operation" },
                {
                    id: "5.3.14",
                    type: "O",
                    affiliation: "*",
                    battlefield: "O",
                    status: "*",
                    modifier: "C-----",
                    desc_kor: "복합손실",
                    desc_eng: "Composite,loss",
                    children: [
                        { id: "5.3.14.1", type: "O", affiliation: "*", battlefield: "O", status: "*", modifier: "CA----", desc_kor: "전투", desc_eng: "Combat" },
                        { id: "5.3.14.2", type: "O", affiliation: "*", battlefield: "O", status: "*", modifier: "CB----", desc_kor: "사고", desc_eng: "Accident" },
                        { id: "5.3.14.3", type: "O", affiliation: "*", battlefield: "O", status: "*", modifier: "CC----", desc_kor: "기타", desc_eng: "Other" }
                    ]
                }
            ]
        },
        {
            id: "5.4",
            type: "O",
            affiliation: "*",
            battlefield: "I",
            status: "*",
            modifier: "------",
            desc_kor: "항목",
            desc_eng: "Items",
            children: [
                { id: "5.4.1", type: "O", affiliation: "*", battlefield: "I", status: "*", modifier: "R-----", desc_kor: "난민", desc_eng: "Refugees" },
                { id: "5.4.2", type: "O", affiliation: "*", battlefield: "I", status: "*", modifier: "S-----", desc_kor: "은신처", desc_eng: "Safe,house" },
                { id: "5.4.3", type: "O", affiliation: "*", battlefield: "I", status: "*", modifier: "G-----", desc_kor: "낙서", desc_eng: "Graffiti" },
                { id: "5.4.4", type: "O", affiliation: "*", battlefield: "I", status: "*", modifier: "V-----", desc_kor: "야만/강간/강탈/약탈/도적/노략질", desc_eng: "Vandalism/Loot/Ransack/Plunder/,Sack" },
                { id: "5.4.5", type: "O", affiliation: "*", battlefield: "I", status: "*", modifier: "I-----", desc_kor: "확인된 반란차량", desc_eng: "Known,insurgent,vehicle" },
                { id: "5.4.6", type: "O", affiliation: "*", battlefield: "I", status: "*", modifier: "D-----", desc_kor: "마약 차량", desc_eng: "Drug,vehicle" },
                { id: "5.4.7", type: "O", affiliation: "*", battlefield: "I", status: "*", modifier: "F-----", desc_kor: "내부 경비 부대", desc_eng: "Internal,security,force" }
            ]
        },
        {
            id: "5.5",
            type: "O",
            affiliation: "*",
            battlefield: "P",
            status: "*",
            modifier: "------",
            desc_kor: "개인",
            desc_eng: "Individual",
            children: [
                { id: "5.5.1", type: "O", affiliation: "*", battlefield: "P", status: "*", modifier: "A-----", desc_kor: "지도자", desc_eng: "Leader" },
                { id: "5.5.2", type: "O", affiliation: "*", battlefield: "P", status: "*", modifier: "B-----", desc_kor: "표적", desc_eng: "Targeted" },
                { id: "5.5.3", type: "O", affiliation: "*", battlefield: "P", status: "*", modifier: "C-----", desc_kor: "테러리스트", desc_eng: "Terrorist" }
            ]
        },
        {
            id: "5.6",
            type: "O",
            affiliation: "*",
            battlefield: "G",
            status: "*",
            modifier: "------",
            desc_kor: "비군사단체",
            desc_eng: "Nonmilitary,group,or,organization",
            children: [
                { id: "5.6.1", type: "O", affiliation: "*", battlefield: "G", status: "*", modifier: "A-----", desc_kor: "난민, 피난민 단체", desc_eng: "Displaced,persons,,refugees,,and,evacuees" },
                { id: "5.6.2", type: "O", affiliation: "*", battlefield: "G", status: "*", modifier: "B-----", desc_kor: "비정부조직", desc_eng: "Nongovernmental,organization,(NGO)" },
                { id: "5.6.3", type: "O", affiliation: "*", battlefield: "G", status: "*", modifier: "C-----", desc_kor: "테러조직", desc_eng: "Terrorist" },
                { id: "5.6.4", type: "O", affiliation: "*", battlefield: "G", status: "*", modifier: "D-----", desc_kor: "종교단체", desc_eng: "Religious" },
                { id: "5.6.5", type: "O", affiliation: "*", battlefield: "G", status: "*", modifier: "E-----", desc_kor: "외국인전사", desc_eng: "Foreign,fighters" },
                { id: "5.6.6", type: "O", affiliation: "*", battlefield: "G", status: "*", modifier: "F-----", desc_kor: "폭력조직", desc_eng: "Gang" }
            ]
        },
        {
            id: "5.7",
            type: "O",
            affiliation: "*",
            battlefield: "R",
            status: "*",
            modifier: "------",
            desc_kor: "강간",
            desc_eng: "Rape",
            children: [
                { id: "5.7.1", type: "O", affiliation: "*", battlefield: "R", status: "*", modifier: "A-----", desc_kor: "강간미수", desc_eng: "Attempted" }
            ]
        }
    ]
}];

var { affiliation, unit, status, mission } = require("./mil_basic");

module.exports = {
    code: "O",
    affiliation: affiliation,
    battlefield: battlefield_Safe,
    status: status,
    mission: mission,
    unit: unit,
    identifier: functionIdentifier_Safe
};