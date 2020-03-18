/* eslint-disable */
var battlefield_Emergency = [
    { code: "I", desc: "사고" },
    { code: "N", desc: "자연사건" },
    { code: "O", desc: "작전" },
    { code: "F", desc: "기반시설" },
    { code: "P", desc: "개인" },
    { code: "G", desc: "비군사 조직 혹은 단체" },
    { code: "R", desc: "강간" }
];

var status_Emergency = [
    { code: "A", desc: "예상/계획" },
    { code: "P", desc: "현재" }
];

var mission_Emergency = [
    { code: "A", desc: "공중(A)" },
    { code: "B", desc: "전자(B)" },
    { code: "C", desc: "민간(C)" },
    { code: "G", desc: "지상(G)" },
    { code: "N", desc: "해군(N)" },
    { code: "S", desc: "전략군(S)" }
];

var unit_Emergency = {
    "H": [
        { code: "H-", desc: " INSTALLAION 시설 " }
    ],
    "M": [
        { code: "MO", desc: " MOBILITY WHEELED / LIMITED CROSS COUNTRY 차륜식 " },
        { code: "MP", desc: " MOBILITY CROSS COUNTRY 야지횡단 차륜식 " },
        { code: "MQ", desc: " MOBILITY TRACKED 궤도식 " },
        { code: "MR", desc: " MOBILITY WHEELED AND TRACKED COMBINATION 차륜 궤도식 " },
        { code: "MS", desc: " MOBILITY TOWED 견인식 " },
        { code: "MT", desc: " MOBILITY RAIL 철도식 " },
        { code: "MU", desc: " BOBILITY OVER THE SNOW 설상 이동식 " },
        { code: "MV", desc: " MOBILITY SLED 썰매이동식 " },
        { code: "MW", desc: " MOBILITY PACK ANIMALS 동물견인식 " },
        { code: "MX", desc: " MOBILITY BARGE 선박이동식 " },
        { code: "MY", desc: " MOBILITY AMPHIBIOUS 수륙양용식" }
    ]
};
var functionIdentifier_Emergency = [{
    id: "6",
    type: "E",
    affiliation: "-",
    battlefield: "-",
    status: "-",
    modifier: "------",
    desc_kor: "비상관리",
    desc_eng: "Emergency,management,symbols",
    children: [{
            id: "6.1",
            type: "E",
            affiliation: "-",
            battlefield: "I",
            status: "-",
            modifier: "------",
            desc_kor: "사고",
            desc_eng: "Incident",
            children: [{
                    id: "6.1.1",
                    type: "E",
                    affiliation: "*",
                    battlefield: "I",
                    status: "*",
                    modifier: "A-----",
                    desc_kor: "소란",
                    desc_eng: "Civil,disturbance,incident",
                    children: [
                        { id: "6.1.1.1", type: "O", affiliation: "*", battlefield: "O", status: "*", modifier: "D-----", desc_kor: "데모", desc_eng: "Civil,demonstration" },
                        { id: "6.1.1.2", type: "O", affiliation: "*", battlefield: "I", status: "*", modifier: "R-----", desc_kor: "난민", desc_eng: "Civil,displaced,population" },
                        { id: "6.1.1.3", type: "E", affiliation: "*", battlefield: "I", status: "*", modifier: "AC----", desc_kor: "폭동", desc_eng: "Civil,rioting" }
                    ]
                },
                {
                    id: "6.1.2",
                    type: "E",
                    affiliation: "*",
                    battlefield: "I",
                    status: "*",
                    modifier: "B-----",
                    desc_kor: "범죄활동",
                    desc_eng: "Criminal,activity,incident",
                    children: [
                        { id: "6.1.2.1", type: "E", affiliation: "*", battlefield: "I", status: "*", modifier: "BA----", desc_kor: "폭파위협", desc_eng: "Bomb,threat" },
                        { id: "6.1.2.2", type: "O", affiliation: "*", battlefield: "V", status: "*", modifier: "B-----", desc_kor: "폭탄", desc_eng: "Bomb" },
                        { id: "6.1.2.3", type: "E", affiliation: "*", battlefield: "I", status: "*", modifier: "BC----", desc_kor: "폭파", desc_eng: "Explosion" },
                        { id: "6.1.2.4", type: "E", affiliation: "*", battlefield: "I", status: "*", modifier: "BD----", desc_kor: "도난", desc_eng: "Looting" },
                        { id: "6.1.2.5", type: "O", affiliation: "*", battlefield: "V", status: "*", modifier: "P-----", desc_kor: "독살", desc_eng: "Poisoning" },
                        { id: "6.1.2.6", type: "E", affiliation: "*", battlefield: "I", status: "*", modifier: "BF----", desc_kor: "총격", desc_eng: "Shooting" }
                    ]
                },
                {
                    id: "6.1.3",
                    type: "E",
                    affiliation: "*",
                    battlefield: "I",
                    status: "*",
                    modifier: "C-----",
                    desc_kor: "화재",
                    desc_eng: "Fire,incident",
                    children: [
                        { id: "6.1.3.1", type: "E", affiliation: "*", battlefield: "I", status: "*", modifier: "CA----", desc_kor: "분쟁", desc_eng: "Hot,spot" },
                        { id: "6.1.3.2", type: "E", affiliation: "*", battlefield: "I", status: "*", modifier: "CB----", desc_kor: "비주거지화재", desc_eng: "Non-residential,fire" },
                        { id: "6.1.3.3", type: "E", affiliation: "*", battlefield: "I", status: "*", modifier: "CC----", desc_kor: "발화점", desc_eng: "Origin,(of,fire)" },
                        { id: "6.1.3.4", type: "E", affiliation: "*", battlefield: "I", status: "*", modifier: "CD----", desc_kor: "주거지화재", desc_eng: "Residential,fire" },
                        { id: "6.1.3.5", type: "E", affiliation: "*", battlefield: "I", status: "*", modifier: "CE----", desc_kor: "학교화재", desc_eng: "School,fire" },
                        { id: "6.1.3.6", type: "E", affiliation: "*", battlefield: "I", status: "*", modifier: "CF----", desc_kor: "연막", desc_eng: "Smoke" },
                        { id: "6.1.3.7", type: "E", affiliation: "*", battlefield: "I", status: "*", modifier: "CG----", desc_kor: "특수처리필요화재", desc_eng: "Special,needs,fire" },
                        { id: "6.1.3.8", type: "E", affiliation: "*", battlefield: "I", status: "*", modifier: "CH----", desc_kor: "번갯불", desc_eng: "Wild,fire" }
                    ]
                },
                {
                    id: "6.1.4",
                    type: "E",
                    affiliation: "*",
                    battlefield: "I",
                    status: "*",
                    modifier: "D-----",
                    desc_kor: "위험물 사건",
                    desc_eng: "Hazardous,material,incident",
                    children: [
                        { id: "6.1.4.1", type: "E", affiliation: "*", battlefield: "I", status: "*", modifier: "DA----", desc_kor: "화학물질", desc_eng: "Chemical,agent" },
                        { id: "6.1.4.2", type: "E", affiliation: "*", battlefield: "I", status: "*", modifier: "DB----", desc_kor: "부식성물질", desc_eng: "Corrosive,material" },
                        { id: "6.1.4.3", type: "E", affiliation: "*", battlefield: "I", status: "*", modifier: "DC----", desc_kor: "습식위험물", desc_eng: "Hazardous,when,wet" },
                        { id: "6.1.4.4", type: "E", affiliation: "*", battlefield: "I", status: "*", modifier: "DD----", desc_kor: "폭발물", desc_eng: "Explosive" },
                        { id: "6.1.4.5", type: "E", affiliation: "*", battlefield: "I", status: "*", modifier: "DE----", desc_kor: "인화물질(기체)", desc_eng: "Flammable,gas" },
                        { id: "6.1.4.6", type: "E", affiliation: "*", battlefield: "I", status: "*", modifier: "DF----", desc_kor: "인화물질(액체)", desc_eng: "Flammable,liquid" },
                        { id: "6.1.4.7", type: "E", affiliation: "*", battlefield: "I", status: "*", modifier: "DG----", desc_kor: "인화물질(고체)", desc_eng: "Flammable,solid" },
                        { id: "6.1.4.8", type: "E", affiliation: "*", battlefield: "I", status: "*", modifier: "DH----", desc_kor: "불연성가스", desc_eng: "Non-flammable,gas" },
                        { id: "6.1.4.9", type: "E", affiliation: "*", battlefield: "I", status: "*", modifier: "DI----", desc_kor: "유기산화물", desc_eng: "Organic,peroxide" },
                        { id: "6.1.4.10", type: "E", affiliation: "*", battlefield: "I", status: "*", modifier: "DJ----", desc_kor: "산화제", desc_eng: "Oxidizer" },
                        { id: "6.1.4.11", type: "E", affiliation: "*", battlefield: "I", status: "*", modifier: "DK----", desc_kor: "방사성물질", desc_eng: "Radioactive,material" },
                        { id: "6.1.4.12", type: "E", affiliation: "*", battlefield: "I", status: "*", modifier: "DL----", desc_kor: "자연발화성물질", desc_eng: "Spontaneously,combustible" },
                        { id: "6.1.4.13", type: "E", affiliation: "*", battlefield: "I", status: "*", modifier: "DM----", desc_kor: "독가스", desc_eng: "Toxic,gas" },
                        { id: "6.1.4.14", type: "E", affiliation: "*", battlefield: "I", status: "*", modifier: "DN----", desc_kor: "독극물/전염물", desc_eng: "Toxic,and,infectious" },
                        { id: "6.1.4.15", type: "E", affiliation: "*", battlefield: "I", status: "*", modifier: "DO----", desc_kor: "불발탄", desc_eng: "Unexploded,ordnance" }
                    ]
                },
                {
                    id: "6.1.5",
                    type: "E",
                    affiliation: "*",
                    battlefield: "I",
                    status: "*",
                    modifier: "E-----",
                    desc_kor: "항공사건",
                    desc_eng: "Air,incident",
                    children: [
                        { id: "6.1.5.1", type: "E", affiliation: "*", battlefield: "I", status: "*", modifier: "EA----", desc_kor: "항공사고", desc_eng: "Air,accident" },
                        { id: "6.1.5.2", type: "O", affiliation: "*", battlefield: "O", status: "*", modifier: "HA----", desc_kor: "항공납치", desc_eng: "Air,hijacking" }
                    ]
                },
                {
                    id: "6.1.6",
                    type: "E",
                    affiliation: "*",
                    battlefield: "I",
                    status: "*",
                    modifier: "F-----",
                    desc_kor: "해양사건",
                    desc_eng: "Marine,incident",
                    children: [
                        { id: "6.1.6.1", type: "E", affiliation: "*", battlefield: "I", status: "*", modifier: "FA----", desc_kor: "해양사고", desc_eng: "Marine,accident" },
                        { id: "6.1.6.2", type: "O", affiliation: "*", battlefield: "O", status: "*", modifier: "HV----", desc_kor: "해양납치", desc_eng: "Marine,hijacking" }
                    ]
                },
                {
                    id: "6.1.7",
                    type: "E",
                    affiliation: "*",
                    battlefield: "I",
                    status: "*",
                    modifier: "G-----",
                    desc_kor: "철도사건",
                    desc_eng: "Rail,incident",
                    children: [
                        { id: "6.1.7.1", type: "E", affiliation: "*", battlefield: "I", status: "*", modifier: "GA----", desc_kor: "철도사고", desc_eng: "Rail,accident" },
                        { id: "6.1.7.2", type: "E", affiliation: "*", battlefield: "I", status: "*", modifier: "GB----", desc_kor: "철도납치", desc_eng: "Rail,hijacking" }
                    ]
                },
                {
                    id: "6.1.8",
                    type: "E",
                    affiliation: "*",
                    battlefield: "I",
                    status: "*",
                    modifier: "H-----",
                    desc_kor: "차량사건",
                    desc_eng: "Vehicle,incident",
                    children: [
                        { id: "6.1.8.1", type: "E", affiliation: "*", battlefield: "I", status: "*", modifier: "HA----", desc_kor: "차량사고", desc_eng: "Vehicle,accident" },
                        { id: "6.1.8.2", type: "O", affiliation: "*", battlefield: "O", status: "*", modifier: "HT----", desc_kor: "차량납치", desc_eng: "Vehicle,hijacking" }
                    ]
                }
            ]
        },
        {
            id: "6.2",
            type: "E",
            affiliation: "-",
            battlefield: "N",
            status: "-",
            modifier: "------",
            desc_kor: "자연사건",
            desc_eng: "Natural,events",
            children: [{
                    id: "6.2.1",
                    type: "E",
                    affiliation: "*",
                    battlefield: "N",
                    status: "*",
                    modifier: "A-----",
                    desc_kor: "지질",
                    desc_eng: "Geologic",
                    children: [
                        { id: "6.2.1.1", type: "E", affiliation: "*", battlefield: "N", status: "*", modifier: "AA----", desc_kor: "여진", desc_eng: "Aftershock" },
                        { id: "6.2.1.2", type: "E", affiliation: "*", battlefield: "N", status: "*", modifier: "AB----", desc_kor: "사태", desc_eng: "Avalanche" },
                        { id: "6.2.1.3", type: "E", affiliation: "*", battlefield: "N", status: "*", modifier: "AC----", desc_kor: "진앙", desc_eng: "Earthquake,epicenter" },
                        { id: "6.2.1.4", type: "E", affiliation: "*", battlefield: "N", status: "*", modifier: "AD----", desc_kor: "산사태", desc_eng: "Landslide" },
                        { id: "6.2.1.5", type: "E", affiliation: "*", battlefield: "N", status: "*", modifier: "AE----", desc_kor: "침하", desc_eng: "Subsidence" },
                        { id: "6.2.1.6", type: "W", affiliation: "A", battlefield: "S", status: "-", modifier: "WSVE--", desc_kor: "화산폭발", desc_eng: "Volcanic,eruption" },
                        { id: "6.2.1.7", type: "E", affiliation: "*", battlefield: "N", status: "*", modifier: "AG----", desc_kor: "화산위협", desc_eng: "Volcanic,threat" }
                    ]
                },
                {
                    id: "6.2.2",
                    type: "E",
                    affiliation: "*",
                    battlefield: "N",
                    status: "*",
                    modifier: "B-----",
                    desc_kor: "기상",
                    desc_eng: "Hydro-meteorological",
                    children: [
                        { id: "6.2.2.1", type: "W", affiliation: "A", battlefield: "S", status: "-", modifier: "WSD-LI", desc_kor: "가랑비", desc_eng: "Drizzle" },
                        { id: "6.2.2.2", type: "E", affiliation: "*", battlefield: "N", status: "*", modifier: "BB----", desc_kor: "가뭄", desc_eng: "Drought" },
                        { id: "6.2.2.3", type: "E", affiliation: "*", battlefield: "N", status: "*", modifier: "BC----", desc_kor: "홍수", desc_eng: "Flood" },
                        { id: "6.2.2.4", type: "W", affiliation: "A", battlefield: "S", status: "-", modifier: "WSFGSO", desc_kor: "안개", desc_eng: "Fog" },
                        { id: "6.2.2.5", type: "W", affiliation: "A", battlefield: "S", status: "-", modifier: "WSGRL-", desc_kor: "우박", desc_eng: "Hail" },
                        { id: "6.2.2.6", type: "E", affiliation: "*", battlefield: "N", status: "*", modifier: "BF----", desc_kor: "전도", desc_eng: "Inversion" },
                        { id: "6.2.2.7", type: "W", affiliation: "A", battlefield: "S", status: "-", modifier: "WSR-LI", desc_kor: "비", desc_eng: "Rain" },
                        { id: "6.2.2.8", type: "W", affiliation: "A", battlefield: "S", status: "-", modifier: "WSDSLM", desc_kor: "풍진", desc_eng: "Sand,dust,storm" },
                        { id: "6.2.2.9", type: "W", affiliation: "A", battlefield: "S", status: "-", modifier: "WSS-LI", desc_kor: "눈", desc_eng: "Snow" },
                        { id: "6.2.2.10", type: "W", affiliation: "A", battlefield: "S", status: "-", modifier: "WSTMH-", desc_kor: "뇌우", desc_eng: "Thunder,storm" },
                        { id: "6.2.2.11", type: "W", affiliation: "A", battlefield: "S", status: "-", modifier: "WST-FC", desc_kor: "토네이도", desc_eng: "Tornado" },
                        { id: "6.2.2.12", type: "W", affiliation: "A", battlefield: "S", status: "-", modifier: "WSTSS-", desc_kor: "열대폭풍", desc_eng: "Tropical,cyclone" },
                        { id: "6.2.2.13", type: "E", affiliation: "*", battlefield: "N", status: "*", modifier: "BM----", desc_kor: "쓰나미", desc_eng: "Tsunami" }
                    ]
                },
                {
                    id: "6.2.3",
                    type: "E",
                    affiliation: "*",
                    battlefield: "N",
                    status: "*",
                    modifier: "C-----",
                    desc_kor: "감염",
                    desc_eng: "Infestation",
                    children: [
                        { id: "6.2.3.1", type: "E", affiliation: "*", battlefield: "N", status: "*", modifier: "CA----", desc_kor: "조류감염", desc_eng: "Bird,infestation" },
                        { id: "6.2.3.2", type: "E", affiliation: "*", battlefield: "N", status: "*", modifier: "CB----", desc_kor: "곤충감염", desc_eng: "Insect,infestation" },
                        { id: "6.2.3.3", type: "E", affiliation: "*", battlefield: "N", status: "*", modifier: "CC----", desc_kor: "세균감염", desc_eng: "Microbial,infestation" },
                        { id: "6.2.3.4", type: "E", affiliation: "*", battlefield: "N", status: "*", modifier: "CD----", desc_kor: "파충류감염", desc_eng: "Reptile,infestation" },
                        { id: "6.2.3.5", type: "E", affiliation: "*", battlefield: "N", status: "*", modifier: "CE----", desc_kor: "설치류감염", desc_eng: "Rodent,infestation" }
                    ]
                }
            ]
        },
        {
            id: "6.3",
            type: "E",
            affiliation: "-",
            battlefield: "O",
            status: "-",
            modifier: "------",
            desc_kor: "작전",
            desc_eng: "Operations",
            children: [{
                    id: "6.3.1",
                    type: "E",
                    affiliation: "*",
                    battlefield: "O",
                    status: "*",
                    modifier: "A-----",
                    desc_kor: "응급수술",
                    desc_eng: "Emergency,medical,operation",
                    children: [
                        { id: "6.3.1.1", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "AA----", desc_kor: "응급수술부대", desc_eng: "Emergency,medical,operation,unit" },
                        { id: "6.3.1.2", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "AB----", desc_kor: "응급수술장비", desc_eng: "Emergency,medical,operation,equipment" },
                        { id: "6.3.1.3", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "AC----", desc_kor: "응급수술시설", desc_eng: "Emergency,medical,operation,installation" },
                        { id: "6.3.1.4", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "AD----", desc_kor: "구급의료기사 대기장소", desc_eng: "EMT,station,location" },
                        { id: "6.3.1.5", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "AE----", desc_kor: "구급차", desc_eng: "Ambulance" },
                        { id: "6.3.1.6", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "AF----", desc_kor: "의무후송헬기", desc_eng: "Medical,evacuation,helicopter" },
                        { id: "6.3.1.7", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "AG----", desc_kor: "보건시설", desc_eng: "Health,department,facility" },
                        { id: "6.3.1.8", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IXH---", desc_kor: "병원", desc_eng: "Hospital" },
                        { id: "6.3.1.9", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "NM----", desc_kor: "병원선", desc_eng: "Hospital,ship" },
                        { id: "6.3.1.10", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "AJ----", desc_kor: "외래환자의료시설", desc_eng: "Medical,facilities,out,patient" },
                        { id: "6.3.1.11", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "AK----", desc_kor: "영안실", desc_eng: "Morgue" },
                        { id: "6.3.1.12", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "AL----", desc_kor: "약국", desc_eng: "Pharmacy" },
                        { id: "6.3.1.13", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "AM----", desc_kor: "부상자분류", desc_eng: "Triage" }
                    ]
                },
                {
                    id: "6.3.2",
                    type: "E",
                    affiliation: "*",
                    battlefield: "O",
                    status: "*",
                    modifier: "B-----",
                    desc_kor: "응급작전",
                    desc_eng: "Emergency,operation",
                    children: [
                        { id: "6.3.2.1", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "BA----", desc_kor: "응급작전부대", desc_eng: "Emergency,operation,unit" },
                        { id: "6.3.2.2", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "BB----", desc_kor: "응급작전장비", desc_eng: "Emergency,operation,equipment" },
                        { id: "6.3.2.3", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "BC----", desc_kor: "응급작전시설", desc_eng: "Emergency,operation,installation" },
                        { id: "6.3.2.4", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "BD----", desc_kor: "응급수집후송지점", desc_eng: "Emergency,collection,evacuation,point" },
                        { id: "6.3.2.5", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "BE----", desc_kor: "응급사건지휘소", desc_eng: "Emergency,incident,command,center" },
                        { id: "6.3.2.6", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "BF----", desc_kor: "응급작전센터", desc_eng: "Emergency,operations,center" },
                        { id: "6.3.2.7", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "BG----", desc_kor: "응급정보센터", desc_eng: "Emergency,public,information,center" },
                        { id: "6.3.2.8", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "BH----", desc_kor: "응급쉘터", desc_eng: "Emergency,shelter" },
                        { id: "6.3.2.9", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "BI----", desc_kor: "응급숙영지", desc_eng: "Emergency,staging,area" },
                        { id: "6.3.2.10", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "BJ----", desc_kor: "응급팀", desc_eng: "Emergency,team" },
                        { id: "6.3.2.11", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "BK----", desc_kor: "응급급수센터", desc_eng: "Emergency,water,distribution,center" },
                        { id: "6.3.2.12", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "BL----", desc_kor: "응급배식센터", desc_eng: "Emergency,food,distribution,center" }
                    ]
                },
                {
                    id: "6.3.3",
                    type: "E",
                    affiliation: "*",
                    battlefield: "O",
                    status: "*",
                    modifier: "C-----",
                    desc_kor: "소방작전",
                    desc_eng: "Fire,fighting,operation",
                    children: [
                        { id: "6.3.3.1", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "CA----", desc_kor: "소방작전부대", desc_eng: "Fire,fighting,operation,unit" },
                        { id: "6.3.3.2", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "CB----", desc_kor: "소방작전장비", desc_eng: "Fire,fighting,operation,equipment" },
                        { id: "6.3.3.3", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "CC----", desc_kor: "소화전", desc_eng: "Fire,hydrant" },
                        { id: "6.3.3.4", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "CD----", desc_kor: "추가급수지점", desc_eng: "Other,water,supply,location" },
                        { id: "6.3.3.5", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "CE----", desc_kor: "소방서", desc_eng: "Fire,station" }
                    ]
                },
                {
                    id: "6.3.4",
                    type: "E",
                    affiliation: "*",
                    battlefield: "O",
                    status: "*",
                    modifier: "D-----",
                    desc_kor: "법집행작전",
                    desc_eng: "Law,enforcement,operation",
                    children: [
                        { id: "6.3.4.1", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "DA----", desc_kor: "법집행작전부대", desc_eng: "Law,enforcement,operation,unit" },
                        { id: "6.3.4.2", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "DB----", desc_kor: "법집행작전장비", desc_eng: "Law,enforcement,operation,equipment" },
                        { id: "6.3.4.3", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "DC----", desc_kor: "법집행작전시설", desc_eng: "Law,enforcement,operation,installation" },
                        {
                            id: "6.3.4.4",
                            type: "E",
                            affiliation: "*",
                            battlefield: "O",
                            status: "*",
                            modifier: "DD----",
                            desc_kor: "ATF(미국 주류·담배·화기 단속국)",
                            desc_eng: "Bureau,of,Alcohol,,Tobacco,,Firearms,and,Explosives,(ATF)",
                            children: [
                                { id: "6.3.4.4.1", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "DDA---", desc_kor: "ATF 부대", desc_eng: "ATF,unit" },
                                { id: "6.3.4.4.2", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "DDB---", desc_kor: "ATF 장비", desc_eng: "ATF,equipment" },
                                { id: "6.3.4.4.3", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "DDC---", desc_kor: "ATF 시설", desc_eng: "ATF,installation" }
                            ]
                        },
                        {
                            id: "6.3.4.5",
                            type: "E",
                            affiliation: "*",
                            battlefield: "O",
                            status: "*",
                            modifier: "DE----",
                            desc_kor: "국경순찰",
                            desc_eng: "Border,patrol",
                            children: [
                                { id: "6.3.4.5.1", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "DEA---", desc_kor: "국경순찰부대", desc_eng: "Border,patrol,unit" },
                                { id: "6.3.4.5.2", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "DEB---", desc_kor: "국경순찰장비", desc_eng: "Border,patrol,equipment" },
                                { id: "6.3.4.5.3", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "DEC---", desc_kor: "국경순찰시설", desc_eng: "Border,patrol,installation" }
                            ]
                        },
                        {
                            id: "6.3.4.6",
                            type: "E",
                            affiliation: "*",
                            battlefield: "O",
                            status: "*",
                            modifier: "DF----",
                            desc_kor: "세관업무",
                            desc_eng: "Customs,service",
                            children: [
                                { id: "6.3.4.6.1", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "DFA---", desc_kor: "세관업무부대", desc_eng: "Customs,service,unit" },
                                { id: "6.3.4.6.2", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "DFB---", desc_kor: "세관업무장비", desc_eng: "Customs,service,equipment" },
                                { id: "6.3.4.6.3", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "DFC---", desc_kor: "세관업무시설", desc_eng: "Customs,service,installation" }
                            ]
                        },
                        {
                            id: "6.3.4.7",
                            type: "E",
                            affiliation: "*",
                            battlefield: "O",
                            status: "*",
                            modifier: "DG----",
                            desc_kor: "DEA(마약단속국)",
                            desc_eng: "Drug,Enforcement,Administration(DEA)",
                            children: [
                                { id: "6.3.4.7.1", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "DGA---", desc_kor: "DEA부대", desc_eng: "DEA,unit" },
                                { id: "6.3.4.7.2", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "DGB---", desc_kor: "DEA장비", desc_eng: "DEA,equipment" },
                                { id: "6.3.4.7.3", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "DGC---", desc_kor: "DEA시설", desc_eng: "DEA,installation" }
                            ]
                        },
                        {
                            id: "6.3.4.8",
                            type: "E",
                            affiliation: "*",
                            battlefield: "O",
                            status: "*",
                            modifier: "DH----",
                            desc_kor: "DOJ(미국법무부)",
                            desc_eng: "Department,of,Justice,(DOJ)",
                            children: [
                                { id: "6.3.4.8.1", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "DHA---", desc_kor: "DOJ부대", desc_eng: "DOJ,unit" },
                                { id: "6.3.4.8.2", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "DHB---", desc_kor: "DOJ장비", desc_eng: "DOJ,equipment" },
                                { id: "6.3.4.8.3", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "DHC---", desc_kor: "DOJ시설", desc_eng: "DOJ,installation" }
                            ]
                        },
                        {
                            id: "6.3.4.9",
                            type: "E",
                            affiliation: "*",
                            battlefield: "O",
                            status: "*",
                            modifier: "DI----",
                            desc_kor: "FBI(미국연방수사국)",
                            desc_eng: "Federal,Bureau,of,Investigation,(FBI)",
                            children: [
                                { id: "6.3.4.9.1", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "DIA---", desc_kor: "FBI부대", desc_eng: "FBI,unit" },
                                { id: "6.3.4.9.2", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "DIB---", desc_kor: "FBI장비", desc_eng: "FBI,equipment" },
                                { id: "6.3.4.9.3", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "DIC---", desc_kor: "FBI시설", desc_eng: "FBI,installation" }
                            ]
                        },
                        {
                            id: "6.3.4.10",
                            type: "E",
                            affiliation: "*",
                            battlefield: "O",
                            status: "*",
                            modifier: "DJ----",
                            desc_kor: "민간경찰",
                            desc_eng: "Police",
                            children: [
                                { id: "6.3.4.10.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UULC--", desc_kor: "경찰", desc_eng: "Police,unit" },
                                { id: "6.3.4.10.2", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "DJB---", desc_kor: "경찰장비", desc_eng: "Police,equipment" },
                                { id: "6.3.4.10.3", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "DJC---", desc_kor: "경찰시설", desc_eng: "Police,installation" }
                            ]
                        },
                        { id: "6.3.4.11", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "DK----", desc_kor: "죄수", desc_eng: "Prison" },
                        {
                            id: "6.3.4.12",
                            type: "E",
                            affiliation: "*",
                            battlefield: "O",
                            status: "*",
                            modifier: "DL----",
                            desc_kor: "첩보기관",
                            desc_eng: "Secret,service",
                            children: [
                                { id: "6.3.4.12.1", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "DLA---", desc_kor: "첩보기관부대", desc_eng: "Secret,service,unit" },
                                { id: "6.3.4.12.2", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "DLB---", desc_kor: "첩보기관장비", desc_eng: "Secret,service,equipment" },
                                { id: "6.3.4.12.3", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "DLC---", desc_kor: "첩보기관시설", desc_eng: "Secret,service,installation" }
                            ]
                        },
                        {
                            id: "6.3.4.13",
                            type: "E",
                            affiliation: "*",
                            battlefield: "O",
                            status: "*",
                            modifier: "DM----",
                            desc_kor: "TSA(미국국토안보국)",
                            desc_eng: "Transportation,Security,Administration,(TSA)",
                            children: [
                                { id: "6.3.4.13.1", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "DMA---", desc_kor: "TSA부대", desc_eng: "TSA,unit" },
                                { id: "6.3.4.13.2", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "DMB---", desc_kor: "TSA장비", desc_eng: "TSA,equipment" },
                                { id: "6.3.4.13.3", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "DMC---", desc_kor: "TSA시설", desc_eng: "TSA,installation" }
                            ]
                        },
                        {
                            id: "6.3.4.14",
                            type: "E",
                            affiliation: "*",
                            battlefield: "O",
                            status: "*",
                            modifier: "DN----",
                            desc_kor: "해경",
                            desc_eng: "Coast,guard",
                            children: [
                                { id: "6.3.4.14.1", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "DNA---", desc_kor: "해경부대", desc_eng: "Coast,guard,unit" },
                                { id: "6.3.4.14.2", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "XL----", desc_kor: "해경장비", desc_eng: "Coast,guard,equipment" },
                                { id: "6.3.4.14.3", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "DNC---", desc_kor: "해경시설", desc_eng: "Coast,guard,installation" }
                            ]
                        },
                        {
                            id: "6.3.4.15",
                            type: "E",
                            affiliation: "*",
                            battlefield: "O",
                            status: "*",
                            modifier: "DO----",
                            desc_kor: "미연방보안관",
                            desc_eng: "US,marshals,service",
                            children: [
                                { id: "6.3.4.15.1", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "DOA---", desc_kor: "미연방보안관부대", desc_eng: "US,marshals,service,unit" },
                                { id: "6.3.4.15.2", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "DOB---", desc_kor: "미연방보안관장비", desc_eng: "US,marshals,service,equipment" },
                                { id: "6.3.4.15.3", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "DOC---", desc_kor: "미연방보안관시설", desc_eng: "US,marshals,service,installation" }
                            ]
                        }
                    ]
                },
                {
                    id: "6.3.5",
                    type: "S",
                    affiliation: "*",
                    battlefield: "G",
                    status: "*",
                    modifier: "ES----",
                    desc_kor: "감지기",
                    desc_eng: "Sensor",
                    children: [
                        { id: "6.3.5.1", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "EA----", desc_kor: "생체감지기", desc_eng: "Biological,sensor" },
                        { id: "6.3.5.2", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "EB----", desc_kor: "화학감지기", desc_eng: "Chemical,sensor" },
                        { id: "6.3.5.3", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "EC----", desc_kor: "침임감지기", desc_eng: "Intrusion,sensor" },
                        { id: "6.3.5.4", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "ED----", desc_kor: "핵감지기", desc_eng: "Nuclear,sensor" },
                        { id: "6.3.5.5", type: "E", affiliation: "*", battlefield: "O", status: "*", modifier: "EE----", desc_kor: "방사능감지기", desc_eng: "Radiological,sensor" }
                    ]
                }
            ]
        },
        {
            id: "6.4",
            type: "E",
            affiliation: "-",
            battlefield: "F",
            status: "-",
            modifier: "------",
            desc_kor: "기반시설",
            desc_eng: "Infrastructure",
            children: [{
                    id: "6.4.1",
                    type: "E",
                    affiliation: "*",
                    battlefield: "F",
                    status: "*",
                    modifier: "A-----",
                    desc_kor: "농업 및 식량 기반시설",
                    desc_eng: "Agriculture,and,food,infrastructure",
                    children: [
                        { id: "6.4.1.1", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "AA----", desc_kor: "농업연구소", desc_eng: "Agricultural,laboratory" },
                        { id: "6.4.1.2", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "AB----", desc_kor: "가축사육장", desc_eng: "Animal,feedlot" },
                        { id: "6.4.1.3", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "AC----", desc_kor: "식량배급상가", desc_eng: "Commercial,food,distribution,center" },
                        { id: "6.4.1.4", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "AD----", desc_kor: "농장/목장", desc_eng: "Farm/Ranch" },
                        { id: "6.4.1.5", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "AE----", desc_kor: "식량생산센터", desc_eng: "Food,production,center" },
                        { id: "6.4.1.6", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "AF----", desc_kor: "식량판매", desc_eng: "Food,retail" },
                        { id: "6.4.1.7", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "AG----", desc_kor: "식량창고", desc_eng: "Grain,storage" }
                    ]
                },
                {
                    id: "6.4.2",
                    type: "E",
                    affiliation: "*",
                    battlefield: "F",
                    status: "*",
                    modifier: "B-----",
                    desc_kor: "은행/금융/보험 기반시설",
                    desc_eng: "Banking,finance,and,insurance,infrastructure",
                    children: [
                        { id: "6.4.2.1", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "BA----", desc_kor: "현금인출기", desc_eng: "ATM" },
                        { id: "6.4.2.2", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "BB----", desc_kor: "은행/금융/보험 기반시설", desc_eng: "Bank" },
                        { id: "6.4.2.3", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "BC----", desc_kor: "금괴저장고", desc_eng: "Bullion,storage" },
                        { id: "6.4.2.4", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "BD----", desc_kor: "연방준비은행", desc_eng: "Federal,reserve,bank" },
                        { id: "6.4.2.5", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "BE----", desc_kor: "금융거래", desc_eng: "Financial,exchange" },
                        { id: "6.4.2.6", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "BF----", desc_kor: "기타금융서비스", desc_eng: "Financial,services,other" }
                    ]
                },
                {
                    id: "6.4.3",
                    type: "E",
                    affiliation: "*",
                    battlefield: "F",
                    status: "*",
                    modifier: "C-----",
                    desc_kor: "상업 기반시설",
                    desc_eng: "Commercial,infrastructure",
                    children: [
                        { id: "6.4.3.1", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "CA----", desc_kor: "화학공장", desc_eng: "Chemical,plant" },
                        { id: "6.4.3.2", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "CB----", desc_kor: "총기생산", desc_eng: "Firearms,manufacturer" },
                        { id: "6.4.3.3", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "CC----", desc_kor: "총기판매", desc_eng: "Firearms,retailer" },
                        { id: "6.4.3.4", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "CD----", desc_kor: "위험물생산", desc_eng: "Hazardous,material,production" },
                        { id: "6.4.3.5", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "CE----", desc_kor: "위험물저장", desc_eng: "Hazardous,material,storage" },
                        { id: "6.4.3.6", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "CF----", desc_kor: "공업용지", desc_eng: "Industrial,site" },
                        { id: "6.4.3.7", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "CG----", desc_kor: "매립지", desc_eng: "Landfill" },
                        { id: "6.4.3.8", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "CH----", desc_kor: "제약시설", desc_eng: "Pharmaceutical,manufacturer" },
                        { id: "6.4.3.9", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "CI----", desc_kor: "유독성폐기물처리지역", desc_eng: "Contaminated,hazardous,waste,site" },
                        { id: "6.4.3.10", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "CJ----", desc_kor: "유해물질 배출시설", desc_eng: "Toxic,release,inventory" }
                    ]
                },
                {
                    id: "6.4.4",
                    type: "E",
                    affiliation: "*",
                    battlefield: "F",
                    status: "*",
                    modifier: "D-----",
                    desc_kor: "교육 기반시설",
                    desc_eng: "Educational,facilities,infrastructure",
                    children: [
                        { id: "6.4.4.1", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "DA----", desc_kor: "대학", desc_eng: "College,university" },
                        { id: "6.4.4.2", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "DB----", desc_kor: "학교화재", desc_eng: "School" }
                    ]
                },
                {
                    id: "6.4.5",
                    type: "S",
                    affiliation: "*",
                    battlefield: "G",
                    status: "*",
                    modifier: "IUE---",
                    desc_kor: "발전소",
                    desc_eng: "Energy,facilities,infrastructure",
                    children: [
                        { id: "6.4.5.1", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "EA----", desc_kor: "발전소", desc_eng: "Generation,station" },
                        { id: "6.4.5.2", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "EB----", desc_kor: "화력발전소(천연가스)", desc_eng: "Natural,gas,facility" },
                        { id: "6.4.5.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IUEN--", desc_kor: "핵발전소", desc_eng: "Nuclear,facility" },
                        { id: "6.4.5.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IRP---", desc_kor: "화력발전소(석유)", desc_eng: "Petroleum,facility" },
                        { id: "6.4.5.5", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "EE----", desc_kor: "화력발전소(프로판)", desc_eng: "Propane,facility" }
                    ]
                },
                { id: "6.4.6", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "F-----", desc_kor: "정부시설", desc_eng: "Government,site,infrastructure" },
                {
                    id: "6.4.7",
                    type: "E",
                    affiliation: "*",
                    battlefield: "F",
                    status: "*",
                    modifier: "G-----",
                    desc_kor: "군사시설",
                    desc_eng: "Military,infrastructure",
                    children: [
                        { id: "6.4.7.1", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "GA----", desc_kor: "무기고", desc_eng: "Military,armory" },
                        { id: "6.4.7.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IB----", desc_kor: "군용기지", desc_eng: "Military,base" }
                    ]
                },
                {
                    id: "6.4.8",
                    type: "E",
                    affiliation: "*",
                    battlefield: "F",
                    status: "*",
                    modifier: "H-----",
                    desc_kor: "우편 기반시설",
                    desc_eng: "Postal,service,infrastructure",
                    children: [
                        { id: "6.4.8.1", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "HA----", desc_kor: "우편집중국", desc_eng: "Postal,distribution,center" },
                        { id: "6.4.8.2", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "HB----", desc_kor: "우체국", desc_eng: "Post,office" }
                    ]
                },
                {
                    id: "6.4.9",
                    type: "E",
                    affiliation: "*",
                    battlefield: "F",
                    status: "*",
                    modifier: "I-----",
                    desc_kor: "공공 기반시설",
                    desc_eng: "Public,venues,infrastructure",
                    children: [
                        { id: "6.4.9.1", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "IA----", desc_kor: "폐쇄형 시설", desc_eng: "Enclosed,facility" },
                        { id: "6.4.9.2", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "IB----", desc_kor: "개방형 시설", desc_eng: "Open,facility" },
                        { id: "6.4.9.3", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "IC----", desc_kor: "레크리에이션 지역", desc_eng: "Recreational,area" },
                        { id: "6.4.9.4", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "ID----", desc_kor: "종교단체", desc_eng: "Religious,institution" }
                    ]
                },
                {
                    id: "6.4.10",
                    type: "E",
                    affiliation: "*",
                    battlefield: "F",
                    status: "*",
                    modifier: "J-----",
                    desc_kor: "특수복지시설",
                    desc_eng: "Special,needs,infrastructure",
                    children: [
                        { id: "6.4.10.1", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "JA----", desc_kor: "장애인복지시설", desc_eng: "Adult,day,care" },
                        { id: "6.4.10.2", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "JB----", desc_kor: "아동복지시설", desc_eng: "Child,day,care" },
                        { id: "6.4.10.3", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "JC----", desc_kor: "노인복지시설", desc_eng: "Elder,care" }
                    ]
                },
                {
                    id: "6.4.11",
                    type: "E",
                    affiliation: "*",
                    battlefield: "F",
                    status: "*",
                    modifier: "K-----",
                    desc_kor: "통신기반시설",
                    desc_eng: "Telecommunications,infrastructure",
                    children: [
                        { id: "6.4.11.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IUT---", desc_kor: "전화국", desc_eng: "Telecommunications,facility" },
                        { id: "6.4.11.2", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "KB----", desc_kor: "통신탑", desc_eng: "Telecommunications,tower" }
                    ]
                },
                {
                    id: "6.4.12",
                    type: "S",
                    affiliation: "*",
                    battlefield: "G",
                    status: "*",
                    modifier: "IT----",
                    desc_kor: "수송 기반시설",
                    desc_eng: "Transportation,infrastructure",
                    children: [
                        { id: "6.4.12.1", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "LA----", desc_kor: "항공관제시설", desc_eng: "Air,traffic,control,facility" },
                        { id: "6.4.12.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IBA---", desc_kor: "공항", desc_eng: "Airport" },
                        { id: "6.4.12.3", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "BCB---", desc_kor: "교량", desc_eng: "Bridge" },
                        { id: "6.4.12.4", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "LD----", desc_kor: "버스정거장", desc_eng: "Bus,station" },
                        { id: "6.4.12.5", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "LE----", desc_kor: "페리터미널", desc_eng: "Ferry,terminal" },
                        { id: "6.4.12.6", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "LF----", desc_kor: "헬기장", desc_eng: "Helicopter,landing,site" },
                        { id: "6.4.12.7", type: "W", affiliation: "O", battlefield: "S", status: "-", modifier: "ML----", desc_kor: "갑문", desc_eng: "Lock" },
                        { id: "6.4.12.8", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "LH----", desc_kor: "보수시설", desc_eng: "Maintenance,facility" },
                        { id: "6.4.12.9", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IBN---", desc_kor: "항구", desc_eng: "Port" },
                        { id: "6.4.12.10", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "LJ----", desc_kor: "철도역", desc_eng: "Rail,station" },
                        { id: "6.4.12.11", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "LK----", desc_kor: "휴게소", desc_eng: "Rest,stop" },
                        { id: "6.4.12.12", type: "W", affiliation: "O", battlefield: "S", status: "-", modifier: "HPBA--", desc_kor: "선박정박지", desc_eng: "Ship,anchorage" },
                        { id: "6.4.12.13", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "LM----", desc_kor: "통행료징수시설", desc_eng: "Toll,facility" },
                        { id: "6.4.12.14", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "PO----", desc_kor: "교통통제소", desc_eng: "Traffic,control,point,(TCP)" },
                        { id: "6.4.12.15", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "LO----", desc_kor: "교통검문소", desc_eng: "Traffic,inspection,facility" },
                        { id: "6.4.12.16", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "LP----", desc_kor: "터널", desc_eng: "Tunnel" }
                    ]
                },
                {
                    id: "6.4.13",
                    type: "S",
                    affiliation: "*",
                    battlefield: "G",
                    status: "*",
                    modifier: "IUP---",
                    desc_kor: "급수시설",
                    desc_eng: "Water,supply,infrastructure",
                    children: [
                        { id: "6.4.13.1", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "MA----", desc_kor: "제어밸브", desc_eng: "Control,valve" },
                        { id: "6.4.13.2", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "MB----", desc_kor: "댐", desc_eng: "DAM" },
                        { id: "6.4.13.3", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "MC----", desc_kor: "하수방출구", desc_eng: "Discharge,outfall" },
                        { id: "6.4.13.4", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "MD----", desc_kor: "지하수우물", desc_eng: "Ground,water,well" },
                        { id: "6.4.13.5", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "ME----", desc_kor: "펌프장", desc_eng: "Pumping,station" },
                        { id: "6.4.13.6", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "MF----", desc_kor: "저수지", desc_eng: "Reservoir" },
                        { id: "6.4.13.7", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "MG----", desc_kor: "저장탑", desc_eng: "Storage,tower" },
                        { id: "6.4.13.8", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "MH----", desc_kor: "지표수취수구", desc_eng: "Surface,water,intake" },
                        { id: "6.4.13.9", type: "E", affiliation: "*", battlefield: "F", status: "*", modifier: "MI----", desc_kor: "하수처리시설", desc_eng: "Wastewater,treatment,facility" }
                    ]
                }
            ]
        }
    ]
}];


var { affiliation, mission } = require("./mil_basic");

module.exports = {
    code: "E",
    affiliation: affiliation,
    battlefield: battlefield_Emergency,
    status: status_Emergency,
    unit: unit_Emergency,
    mission: mission,
    identifier: functionIdentifier_Emergency
};