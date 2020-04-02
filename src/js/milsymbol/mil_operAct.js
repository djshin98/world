/* eslint-disable */

var battlefield_OperAct = [
    { code: "T", desc: "임무" },
    { code: "G", desc: "C2 일반작전" },
    { code: "M", desc: "기동 및 방어" },
    { code: "F", desc: "화력지원" },
    { code: "S", desc: "전투근무지원" },
    { code: "O", desc: "기타" }
];

var status_OperAct = [
    { code: "A", desc: "예상/계획" },
    { code: "S", desc: "의심" },
    { code: "P", desc: "현재" },
    { code: "K", desc: "인식" }
];

var unit_OperAct = {
    "-": [
        { code: "--", desc: " NULL " },
        { code: "-A", desc: " TEAM / CREW 조 / 병사 " },
        { code: "-B", desc: " SQURD 분대 " },
        { code: "-C", desc: " SECTION 반 " },
        { code: "-D", desc: " PLATOON/DETACHMENT 소대 / 분견대 " },
        { code: "-E", desc: " COMPANY / BATTERY / TROOP 중대 / 포대 / 기갑 " },
        { code: "-F", desc: " BATTALION/SQUADRON 대대 / 비행대대 " },
        { code: "-G", desc: " REGIMENT / GROUP 연대 / 단 " },
        { code: "-H", desc: " BRIGADE 여단 " },
        { code: "-I", desc: " DIVISION 사단 " },
        { code: "-J", desc: " CORPS / MEF 군단 " },
        { code: "-K", desc: " ARMY 야전군 " },
        { code: "-L", desc: " ARMY GROUP / FRONT 집단군 " },
        { code: "-M", desc: " REGION 지역군 " },
        { code: "-N", desc: " COMMAND 사령부" }
    ]
};

var mission_OperAct = [
    { code: "X", desc: "제어표시" }
];
var functionIdentifier_OperAct = [{
    id: "2",
    type: "G",
    affiliation: "*",
    battlefield: "-",
    status: "-",
    modifier: "------",
    desc_kor: "작전활동부호",
    desc_eng: "Tactical,graphics",
    children: [{
            id: "2.1",
            type: "G",
            affiliation: "*",
            battlefield: "T",
            status: "*",
            modifier: "------",
            desc_kor: "임무",
            desc_eng: "Tasks",
            children: [
                { id: "2.1.1", type: "G", affiliation: "*", battlefield: "T", status: "*", modifier: "B-----", desc_kor: "저지", desc_eng: "Block" },
                { id: "2.1.2", type: "G", affiliation: "*", battlefield: "T", status: "*", modifier: "H-----", desc_kor: "개척", desc_eng: "Breach" },
                { id: "2.1.3", type: "G", affiliation: "*", battlefield: "T", status: "*", modifier: "Y-----", desc_kor: "우회", desc_eng: "Bypass" },
                { id: "2.1.4", type: "G", affiliation: "*", battlefield: "T", status: "*", modifier: "C-----", desc_kor: "유인", desc_eng: "Canalize" },
                { id: "2.1.5", type: "G", affiliation: "*", battlefield: "T", status: "*", modifier: "X-----", desc_kor: "장애물제거", desc_eng: "Clear" },
                { id: "2.1.6", type: "G", affiliation: "*", battlefield: "T", status: "*", modifier: "J-----", desc_kor: "견제", desc_eng: "Contain" },
                {
                    id: "2.1.7",
                    type: "G",
                    affiliation: "*",
                    battlefield: "T",
                    status: "*",
                    modifier: "K-----",
                    desc_kor: "반격(CATK)",
                    desc_eng: "Counterattack,(CATK)",
                    children: [
                        { id: "2.1.7.1", type: "G", affiliation: "*", battlefield: "T", status: "*", modifier: "KF----", desc_kor: "반격(화기집중)", desc_eng: "Counterattack,by,fire" }
                    ]
                },
                { id: "2.1.8", type: "G", affiliation: "*", battlefield: "T", status: "*", modifier: "L-----", desc_kor: "지연", desc_eng: "Delay" },
                { id: "2.1.9", type: "G", affiliation: "*", battlefield: "T", status: "*", modifier: "D-----", desc_kor: "격멸", desc_eng: "Destroy" },
                { id: "2.1.10", type: "G", affiliation: "*", battlefield: "T", status: "*", modifier: "T-----", desc_kor: "와해", desc_eng: "Disrupt" },
                { id: "2.1.11", type: "G", affiliation: "*", battlefield: "T", status: "*", modifier: "F-----", desc_kor: "고착", desc_eng: "Fix" },
                {
                    id: "2.1.12",
                    type: "G",
                    affiliation: "*",
                    battlefield: "T",
                    status: "*",
                    modifier: "A-----",
                    desc_kor: "주공후속",
                    desc_eng: "Follow,and,assume",
                    children: [
                        { id: "2.1.12.1", type: "G", affiliation: "*", battlefield: "T", status: "*", modifier: "AS----", desc_kor: "후속지원", desc_eng: "Follow,and,support" }
                    ]
                },
                { id: "2.1.13", type: "G", affiliation: "*", battlefield: "T", status: "*", modifier: "I-----", desc_kor: "차단", desc_eng: "Interdict" },
                { id: "2.1.14", type: "G", affiliation: "*", battlefield: "T", status: "*", modifier: "E-----", desc_kor: "고립", desc_eng: "Isolate" },
                { id: "2.1.15", type: "G", affiliation: "*", battlefield: "T", status: "*", modifier: "N-----", desc_kor: "무력화", desc_eng: "Neutralize" },
                { id: "2.1.16", type: "G", affiliation: "*", battlefield: "T", status: "*", modifier: "O-----", desc_kor: "점령", desc_eng: "Occupy" },
                { id: "2.1.17", type: "G", affiliation: "*", battlefield: "T", status: "*", modifier: "P-----", desc_kor: "돌파", desc_eng: "Penetrate" },
                { id: "2.1.18", type: "G", affiliation: "*", battlefield: "T", status: "*", modifier: "R-----", desc_kor: "진지교대", desc_eng: "Relief,in,place,(RIP)" },
                { id: "2.1.19", type: "G", affiliation: "*", battlefield: "T", status: "*", modifier: "Q-----", desc_kor: "점령유지", desc_eng: "Retain" },
                { id: "2.1.20", type: "G", affiliation: "*", battlefield: "T", status: "*", modifier: "M-----", desc_kor: "철퇴", desc_eng: "Retirement" },
                { id: "2.1.21", type: "G", affiliation: "*", battlefield: "T", status: "*", modifier: "S-----", desc_kor: "확보", desc_eng: "Secure" },
                {
                    id: "2.1.22",
                    type: "G",
                    affiliation: "*",
                    battlefield: "T",
                    status: "*",
                    modifier: "U-----",
                    desc_kor: "경계",
                    desc_eng: "Security",
                    children: [
                        { id: "2.1.22.1", type: "G", affiliation: "*", battlefield: "T", status: "*", modifier: "US----", desc_kor: "차장", desc_eng: "Screen" },
                        { id: "2.1.22.2", type: "G", affiliation: "*", battlefield: "T", status: "*", modifier: "UG----", desc_kor: "경비", desc_eng: "Guard" },
                        { id: "2.1.22.3", type: "G", affiliation: "*", battlefield: "T", status: "*", modifier: "UC----", desc_kor: "엄폐", desc_eng: "Cover" },
                        { id: "2.1.22.4", type: "G", affiliation: "*", battlefield: "T", status: "*", modifier: "UP----", desc_kor: "방호", desc_eng: "방호" }
                    ]
                },
                { id: "2.1.23", type: "G", affiliation: "*", battlefield: "T", status: "*", modifier: "Z-----", desc_kor: "탈취", desc_eng: "Seize" },
                {
                    id: "2.1.24",
                    type: "G",
                    affiliation: "*",
                    battlefield: "T",
                    status: "*",
                    modifier: "W-----",
                    desc_kor: "철수",
                    desc_eng: "Withdraw",
                    children: [
                        { id: "2.1.24.1", type: "G", affiliation: "*", battlefield: "T", status: "*", modifier: "WP----", desc_kor: "철수(강압)", desc_eng: "Withdraw,under,pressure" }
                    ]
                }
            ]
        },
        {
            id: "2.2",
            type: "G",
            affiliation: "*",
            battlefield: "G",
            status: "*",
            modifier: "------",
            desc_kor: "지휘통제 및 일반작전",
            desc_eng: "Command,and,control,and,general,maneuver",
            children: [{
                    id: "2.2.1",
                    type: "G",
                    affiliation: "*",
                    battlefield: "G",
                    status: "*",
                    modifier: "G-----",
                    desc_kor: "일반",
                    desc_eng: "General",
                    children: [{
                            id: "2.2.1.1",
                            type: "G",
                            affiliation: "*",
                            battlefield: "G",
                            status: "*",
                            modifier: "GP----",
                            desc_kor: "점",
                            desc_eng: "Points",
                            children: [{
                                    id: "2.2.1.1.1",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "G",
                                    status: "*",
                                    modifier: "GPU---",
                                    desc_kor: "수중전",
                                    desc_eng: "Under,sea,warfare",
                                    children: [{
                                            id: "2.2.1.1.1.1",
                                            type: "G",
                                            affiliation: "*",
                                            battlefield: "G",
                                            status: "*",
                                            modifier: "GPUU--",
                                            desc_kor: "수중",
                                            desc_eng: "Underwater",
                                            children: [
                                                { id: "2.2.1.1.1.1.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPUUD-", desc_kor: "잠수함최종위치", desc_eng: "Datum" },
                                                { id: "2.2.1.1.1.1.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPUUB-", desc_kor: "잠수함 접촉", desc_eng: "Brief,contact" },
                                                { id: "2.2.1.1.1.1.3", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPUUL-", desc_kor: "잠수함 소실", desc_eng: "Lost,contact" },
                                                { id: "2.2.1.1.1.1.4", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPUUS-", desc_kor: "침몰위치", desc_eng: "Sinker" }
                                            ]
                                        },
                                        {
                                            id: "2.2.1.1.1.2",
                                            type: "G",
                                            affiliation: "*",
                                            battlefield: "G",
                                            status: "*",
                                            modifier: "GPUY--",
                                            desc_kor: "소노부이",
                                            desc_eng: "Sonobuoy",
                                            children: [
                                                { id: "2.2.1.1.1.2.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPUYP-", desc_kor: "소노부이(패턴중심)", desc_eng: "Pattern,center" },
                                                { id: "2.2.1.1.1.2.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPUYD-", desc_kor: "소노부이(지향성저주파분석기록기)", desc_eng: "Directional,frequency,analyzing,and,recording,(DIFAR)" },
                                                { id: "2.2.1.1.1.2.3", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPUYL-", desc_kor: "소노부이(저주파분석및기록)", desc_eng: "Low,frequency,analyzing,and,recording,(LOFAR)" },
                                                { id: "2.2.1.1.1.2.4", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPUYC-", desc_kor: "소노부이(능동소노부이체계)", desc_eng: "Command,active,sonobuoy,system,(CASS)" },
                                                { id: "2.2.1.1.1.2.5", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPUYS-", desc_kor: "소노부이(지향성능동소노부이체계)", desc_eng: "Directional,command,active,sonobuoy,system,(DICASS)" },
                                                { id: "2.2.1.1.1.2.6", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPUYB-", desc_kor: "소노부이(수온측정기)", desc_eng: "Bathythermograph,transmitting,(BT)" },
                                                { id: "2.2.1.1.1.2.7", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPUYA-", desc_kor: "소노부이(음향부표)", desc_eng: "Anm" },
                                                { id: "2.2.1.1.1.2.8", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPUYV-", desc_kor: "소노부이(수직지향성주파수분석기록기", desc_eng: "),Vertical,line,array,difar,(VLAD)" },
                                                { id: "2.2.1.1.1.2.9", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPUYT-", desc_kor: "소노부이(공중전달가능음향통신)", desc_eng: "Atac" },
                                                { id: "2.2.1.1.1.2.10", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPUYR-", desc_kor: "소노부이(범위만)", desc_eng: "Range,only,(RO)" },
                                                { id: "2.2.1.1.1.2.11", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPUYK-", desc_kor: "소노부이(킹핀)", desc_eng: "Kingpin" },
                                                { id: "2.2.1.1.1.2.12", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPUYX-", desc_kor: "소노부이(폐기)", desc_eng: "Sonobuoy-expired" }
                                            ]
                                        },
                                        {
                                            id: "2.2.1.1.1.3",
                                            type: "G",
                                            affiliation: "*",
                                            battlefield: "G",
                                            status: "*",
                                            modifier: "GPUS--",
                                            desc_kor: "수중전(탐색)",
                                            desc_eng: "Search",
                                            children: [
                                                { id: "2.2.1.1.1.3.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPUSA-", desc_kor: "수중전(탐색해역)", desc_eng: "Search,area" },
                                                { id: "2.2.1.1.1.3.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPUSD-", desc_kor: "수중전(잠항해점)", desc_eng: "Dip,position" },
                                                { id: "2.2.1.1.1.3.3", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPUSC-", desc_kor: "수중전(탐색중심)", desc_eng: "Search,center" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: "2.2.1.1.2",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "G",
                                    status: "*",
                                    modifier: "GPR---",
                                    desc_kor: "참조점",
                                    desc_eng: "Reference,point",
                                    children: [
                                        { id: "2.2.1.1.2.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPRN--", desc_kor: "해군참조점", desc_eng: "Navigational,reference,point" },
                                        { id: "2.2.1.1.2.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPRS--", desc_kor: "특수참조점(함포지원참조점)", desc_eng: "Special,point" },
                                        { id: "2.2.1.1.2.3", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPRD--", desc_kor: "데이타링크참조점", desc_eng: "Dlrp" },
                                        { id: "2.2.1.1.2.4", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPRP--", desc_kor: "계획이동지점", desc_eng: "Point,of,intended,movement,(PIM)" },
                                        { id: "2.2.1.1.2.5", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPRM--", desc_kor: "출동집결지", desc_eng: "Marshall,point" },
                                        { id: "2.2.1.1.2.6", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPRW--", desc_kor: "경로점", desc_eng: "Waypoint" },
                                        { id: "2.2.1.1.2.7", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPRC--", desc_kor: "항로 식별점", desc_eng: "Corridor,tab" },
                                        { id: "2.2.1.1.2.8", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPRB--", desc_kor: "선회 대기점", desc_eng: "선회,대기점" },
                                        { id: "2.2.1.1.2.9", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPRE--", desc_kor: "노드 통신소", desc_eng: "Node,Signal,Unit" },
                                        { id: "2.2.1.1.2.10", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPRI--", desc_kor: "관심지점", desc_eng: "Point,of,interest" }
                                    ]
                                },
                                {
                                    id: "2.2.1.1.3",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "G",
                                    status: "*",
                                    modifier: "GPW---",
                                    desc_kor: "무기",
                                    desc_eng: "Weapon",
                                    children: [
                                        { id: "2.2.1.1.3.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPWA--", desc_kor: "조준점", desc_eng: "Aim,point" },
                                        { id: "2.2.1.1.3.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPWD--", desc_kor: "낙하지점", desc_eng: "Drop,point" },
                                        { id: "2.2.1.1.3.3", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPWE--", desc_kor: "진입점", desc_eng: "Entry,point" },
                                        { id: "2.2.1.1.3.4", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPWG--", desc_kor: "지상원점", desc_eng: "Ground,zero" },
                                        { id: "2.2.1.1.3.5", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPWM--", desc_kor: "유도탄탐지점", desc_eng: "Msl,detect,point" },
                                        { id: "2.2.1.1.3.6", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPWI--", desc_kor: "탄착지점", desc_eng: "Impact,point" },
                                        { id: "2.2.1.1.3.7", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPWP--", desc_kor: "예상타격지점", desc_eng: "Predicted,impact,point" }
                                    ]
                                },
                                { id: "2.2.1.1.4", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPF---", desc_kor: "진형참조점", desc_eng: "Formation" },
                                {
                                    id: "2.2.1.1.5",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "G",
                                    status: "*",
                                    modifier: "GPH---",
                                    desc_kor: "항만(일반)",
                                    desc_eng: "Harbor,(General)",
                                    children: [
                                        { id: "2.2.1.1.5.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPHQ--", desc_kor: "Q점", desc_eng: "Point,Q" },
                                        { id: "2.2.1.1.5.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPHA--", desc_kor: "A점", desc_eng: "Point,A" },
                                        { id: "2.2.1.1.5.3", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPHY--", desc_kor: "Y점", desc_eng: "Point,Y" },
                                        { id: "2.2.1.1.5.4", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPHX--", desc_kor: "X점", desc_eng: "Point,X" }
                                    ]
                                },
                                {
                                    id: "2.2.1.1.6",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "G",
                                    status: "*",
                                    modifier: "GPO---",
                                    desc_kor: "항로",
                                    desc_eng: "Route",
                                    children: [
                                        { id: "2.2.1.1.6.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPOZ--", desc_kor: "상봉점", desc_eng: "Rendezvous" },
                                        { id: "2.2.1.1.6.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPOD--", desc_kor: "전환점", desc_eng: "Diversions" },
                                        { id: "2.2.1.1.6.3", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPOW--", desc_kor: "변침점", desc_eng: "Waypoint" },
                                        { id: "2.2.1.1.6.4", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPOP--", desc_kor: "예정항로", desc_eng: "PIM" },
                                        { id: "2.2.1.1.6.5", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPOR--", desc_kor: "R점", desc_eng: "Point,R" }
                                    ]
                                },
                                {
                                    id: "2.2.1.1.7",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "G",
                                    status: "*",
                                    modifier: "GPA---",
                                    desc_kor: "항공통제",
                                    desc_eng: "Air,control",
                                    children: [
                                        { id: "2.2.1.1.7.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPAP--", desc_kor: "전투공중초계(CAP)", desc_eng: "Combat,air,patrol,(CAP)" },
                                        { id: "2.2.1.1.7.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPAW--", desc_kor: "공중조기경보(AEW)", desc_eng: "Airborne,early,warning,(AEW)" },
                                        { id: "2.2.1.1.7.3", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPAK--", desc_kor: "급유기대기점", desc_eng: "Tanking" },
                                        { id: "2.2.1.1.7.4", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPAA--", desc_kor: "대잠전(고정익)", desc_eng: "Antisubmarine,warfare,,fixed,wing" },
                                        { id: "2.2.1.1.7.5", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPAH--", desc_kor: "대잠전(회전익)", desc_eng: "Antisubmarine,warfare,,rotary,wing" },
                                        { id: "2.2.1.1.7.6", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPAB--", desc_kor: "SUCAP(고정익)", desc_eng: "SUCAP,-,Fixed,wing" },
                                        { id: "2.2.1.1.7.7", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPAC--", desc_kor: "SUCAP(회전익)", desc_eng: "SUCAP,-,Rotary,wing" },
                                        { id: "2.2.1.1.7.8", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPAD--", desc_kor: "MIW(고정익)", desc_eng: "MIW,-,Fixed,wing" },
                                        { id: "2.2.1.1.7.9", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPAE--", desc_kor: "MIW(회전익)", desc_eng: "MIW,-,Rotary,wing" },
                                        { id: "2.2.1.1.7.10", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPAS--", desc_kor: "타격최초지점", desc_eng: "Strike,IP" },
                                        { id: "2.2.1.1.7.11", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPAT--", desc_kor: "전술공중항법장비", desc_eng: "Tacan" },
                                        { id: "2.2.1.1.7.12", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPAO--", desc_kor: "TOMCAT", desc_eng: "Tomcat" },
                                        { id: "2.2.1.1.7.13", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPAR--", desc_kor: "구조", desc_eng: "Rescue" },
                                        { id: "2.2.1.1.7.14", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPAL--", desc_kor: "급유", desc_eng: "Replenish" },
                                        { id: "2.2.1.1.7.15", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPAF--", desc_kor: "무인항법장치", desc_eng: "Unmanned,aerial,system,(UAS/UA)" },
                                        { id: "2.2.1.1.7.16", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPAG--", desc_kor: "VTUA", desc_eng: "VTUA" },
                                        { id: "2.2.1.1.7.17", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPAI--", desc_kor: "궤도", desc_eng: "Orbit" },
                                        { id: "2.2.1.1.7.18", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPAJ--", desc_kor: "궤도(F8)", desc_eng: "Orbit,-,Figure,eight" },
                                        { id: "2.2.1.1.7.19", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPAM--", desc_kor: "궤도(경주로)", desc_eng: "Orbit,-,Race,track" },
                                        { id: "2.2.1.1.7.20", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPAN--", desc_kor: "궤도(랜덤, 폐쇄)", desc_eng: "Orbit,-,Random,,closed" }
                                    ]
                                },
                                {
                                    id: "2.2.1.1.8",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "G",
                                    status: "*",
                                    modifier: "GPP---",
                                    desc_kor: "활동지점(일반)",
                                    desc_eng: "Action,points,(General)",
                                    children: [
                                        { id: "2.2.1.1.8.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPPK--", desc_kor: "확인점", desc_eng: "Check,point" },
                                        { id: "2.2.1.1.8.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPPC--", desc_kor: "접촉점", desc_eng: "Contact,point" },
                                        { id: "2.2.1.1.8.3", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPPO--", desc_kor: "협조점", desc_eng: "Coordination,point" },
                                        { id: "2.2.1.1.8.4", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPPD--", desc_kor: "결심점", desc_eng: "Decision,point" },
                                        { id: "2.2.1.1.8.5", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPPL--", desc_kor: "연결점", desc_eng: "Linkup,point" },
                                        { id: "2.2.1.1.8.6", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPPP--", desc_kor: "초월점", desc_eng: "Passage,point" },
                                        { id: "2.2.1.1.8.7", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPPR--", desc_kor: "재집결점", desc_eng: "Rally,point" },
                                        { id: "2.2.1.1.8.8", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPPE--", desc_kor: "분진점", desc_eng: "Release,point" },
                                        { id: "2.2.1.1.8.9", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPPS--", desc_kor: "출발점", desc_eng: "Start,point" },
                                        { id: "2.2.1.1.8.10", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPPA--", desc_kor: "자진신고점", desc_eng: "Amnesty,point" },
                                        { id: "2.2.1.1.8.11", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPPW--", desc_kor: "경로점", desc_eng: "Waypoint" }
                                    ]
                                },
                                {
                                    id: "2.2.1.1.9",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "G",
                                    status: "*",
                                    modifier: "GPC---",
                                    desc_kor: "해상통제점",
                                    desc_eng: "Sea,surface,control,station",
                                    children: [{
                                            id: "2.2.1.1.9.1",
                                            type: "G",
                                            affiliation: "*",
                                            battlefield: "G",
                                            status: "*",
                                            modifier: "GPCU--",
                                            desc_kor: "무인수상선통제점",
                                            desc_eng: "Unmanned,surface,vehicle,(USV),control,station",
                                            children: [
                                                { id: "2.2.1.1.9.1.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPCUR-", desc_kor: "무인수상선(원격 다중임무)통제점", desc_eng: "Remote,multimission,vehicle,(RMV),usv,control,station" },
                                                { id: "2.2.1.1.9.1.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPCUA-", desc_kor: "무인수상선(대잠전)통제점", desc_eng: "USV,-,antisubmarine,warfare,control,station" },
                                                { id: "2.2.1.1.9.1.3", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPCUS-", desc_kor: "무인수상선(수상전)통제점", desc_eng: "USV,-,surface,warfare,control,station" },
                                                { id: "2.2.1.1.9.1.4", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPCUM-", desc_kor: "무인수상선(대기뢰전)통제점", desc_eng: "USV,-,mine,warfare,control,station" }
                                            ]
                                        },
                                        { id: "2.2.1.1.9.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPCA--", desc_kor: "대잠전통제점", desc_eng: "ASW,control,station" },
                                        { id: "2.2.1.1.9.3", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPCS--", desc_kor: "수상전통제점", desc_eng: "SUW,control,station" },
                                        { id: "2.2.1.1.9.4", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPCM--", desc_kor: "대기뢰전통제점", desc_eng: "MIW,control,station" },
                                        { id: "2.2.1.1.9.5", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPCP--", desc_kor: "소초통제점", desc_eng: "Picket,control,station" },
                                        { id: "2.2.1.1.9.6", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPCR--", desc_kor: "접합통제점", desc_eng: "Rendezvous,control,point" },
                                        { id: "2.2.1.1.9.7", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPCC--", desc_kor: "구조통제점", desc_eng: "Rescue,control,point" },
                                        { id: "2.2.1.1.9.8", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPCE--", desc_kor: "보급통제점", desc_eng: "Replenishment,control,point" },
                                        { id: "2.2.1.1.9.9", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPCN--", desc_kor: "비전투통제점", desc_eng: "Noncombatant,control,station" }
                                    ]
                                },
                                {
                                    id: "2.2.1.1.10",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "G",
                                    status: "*",
                                    modifier: "GPB---",
                                    desc_kor: "수중통제점",
                                    desc_eng: "Subsurface,control,station",
                                    children: [{
                                            id: "2.2.1.1.10.1",
                                            type: "G",
                                            affiliation: "*",
                                            battlefield: "G",
                                            status: "*",
                                            modifier: "GPBU--",
                                            desc_kor: "무인수중선통제점",
                                            desc_eng: "Unmanned,underwater,vehicle,(UUV),control,station",
                                            children: [
                                                { id: "2.2.1.1.10.1.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPBUA-", desc_kor: "무인수중선통제점(대잠전)", desc_eng: "UUV,-,antisubmarine,warfare,control,station" },
                                                { id: "2.2.1.1.10.1.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPBUS-", desc_kor: "무인수중선통제점(수상전)", desc_eng: "UUV,-,surface,warfare,control,station" },
                                                { id: "2.2.1.1.10.1.3", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPBUM-", desc_kor: "무인수중선통제점(대기뢰전)", desc_eng: "UUV,-,mine,warfare,control,station" }
                                            ]
                                        },
                                        {
                                            id: "2.2.1.1.10.2",
                                            type: "G",
                                            affiliation: "*",
                                            battlefield: "G",
                                            status: "*",
                                            modifier: "GPBS--",
                                            desc_kor: "잠수함통제점",
                                            desc_eng: "Submarine,control,station",
                                            children: [
                                                { id: "2.2.1.1.10.2.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPBSA-", desc_kor: "대잠전잠수함통제점", desc_eng: "Asw,submarine,control,station" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: "2.2.1.1.11",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "G",
                                    status: "*",
                                    modifier: "GPD---",
                                    desc_kor: "해안통제점",
                                    desc_eng: "Beach,control,station",
                                    children: [{
                                            id: "2.2.1.1.11.1",
                                            type: "G",
                                            affiliation: "*",
                                            battlefield: "G",
                                            status: "*",
                                            modifier: "GPDB--",
                                            desc_kor: "해안 표식기",
                                            desc_eng: "Beach,Sign",
                                            children: [
                                                { id: "2.2.1.1.11.1.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPDBL-", desc_kor: "해안 표식기(좌)", desc_eng: "Beach,Sign(left)" },
                                                { id: "2.2.1.1.11.1.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPDBC-", desc_kor: "해안 표식기(중앙)", desc_eng: "Beach,Sign(center)" },
                                                { id: "2.2.1.1.11.1.3", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPDBR-", desc_kor: "해안 표식기(우)", desc_eng: "Beach,Sign(right)" }
                                            ]
                                        },
                                        {
                                            id: "2.2.1.1.11.2",
                                            type: "G",
                                            affiliation: "*",
                                            battlefield: "G",
                                            status: "*",
                                            modifier: "GPDL--",
                                            desc_kor: "양륙 표식기",
                                            desc_eng: "Landing,Sign",
                                            children: [
                                                { id: "2.2.1.1.11.2.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPDLA-", desc_kor: "양륙 표식기(1종)", desc_eng: "Landing,Sign(Class,1)" },
                                                { id: "2.2.1.1.11.2.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPDLC-", desc_kor: "양륙 표식기(3종)", desc_eng: "Landing,Sign(Class,3)" },
                                                { id: "2.2.1.1.11.2.3", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPDLE-", desc_kor: "양륙 표식기(5종)", desc_eng: "Landing,Sign(Class,5)" },
                                                { id: "2.2.1.1.11.2.4", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPDLH-", desc_kor: "양륙 표식기(8종)", desc_eng: "Landing,Sign(Class,8)" },
                                                { id: "2.2.1.1.11.2.5", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPDLW-", desc_kor: "양륙 표식기(식수)", desc_eng: "Landing,Sign(Drinking,Water)" },
                                                { id: "2.2.1.1.11.2.6", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPDLM-", desc_kor: "양륙 표식기(차륜차량)", desc_eng: "Landing,Sign(Motor)" },
                                                { id: "2.2.1.1.11.2.7", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPDLO-", desc_kor: "양륙 표식기(궤도차량)", desc_eng: "Landing,Sign(Orbit)" },
                                                { id: "2.2.1.1.11.2.8", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GPDLJ-", desc_kor: "양륙 표식기(10종)", desc_eng: "Landing,Sign(Class,10)" }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "2.2.1.2",
                            type: "G",
                            affiliation: "*",
                            battlefield: "G",
                            status: "*",
                            modifier: "GL----",
                            desc_kor: "선",
                            desc_eng: "Lines",
                            children: [
                                { id: "2.2.1.2.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GLB---", desc_kor: "경계", desc_eng: "Boundaries" },
                                { id: "2.2.1.2.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GLF---", desc_kor: "전선, 부대진출선", desc_eng: "Forward,line,of,own,troops,(FLOT)" },
                                { id: "2.2.1.2.3", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GLC---", desc_kor: "접촉선", desc_eng: "Line,of,contact" },
                                { id: "2.2.1.2.4", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GLP---", desc_kor: "통제선", desc_eng: "Phase,line" },
                                { id: "2.2.1.2.5", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GLL---", desc_kor: "등화관제선", desc_eng: "Light,line" },
                                { id: "2.2.1.2.6", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GLA---", desc_kor: "적 함정소실", desc_eng: "적,함정소실" },
                                { id: "2.2.1.2.8", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GLE---", desc_kor: "해안두보선", desc_eng: "해안두보선" },
                                { id: "2.2.1.2.28", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GL2---", desc_kor: "적군 전방배치선", desc_eng: "적군,전방배치선" },
                                { id: "2.2.1.2.29", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GL3---", desc_kor: "전투이양선(BHL)", desc_eng: "전투이양선(BHL)" },
                                { id: "2.2.1.2.30", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GL4---", desc_kor: "지상군 전방 전투지경선(FB)", desc_eng: "지상군,전방,전투지경선(FB)" },
                                {
                                    id: "2.2.1.2.31",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "G",
                                    status: "*",
                                    modifier: "GL5---",
                                    desc_kor: "통신망",
                                    desc_eng: "Network",
                                    children: [
                                        { id: "2.2.1.2.31.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GL5L--", desc_kor: "유선통신망", desc_eng: "Line,Network" },
                                        { id: "2.2.1.2.31.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GL5W--", desc_kor: "무선통신망", desc_eng: "Wireless,Network" },
                                        { id: "2.2.1.2.31.3", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GL5A--", desc_kor: "부대통신소", desc_eng: "Unit,communication,station" },
                                        { id: "2.2.1.2.31.4", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GL5B--", desc_kor: "중계소", desc_eng: "Relay,station" },
                                        { id: "2.2.1.2.31.5", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GL5C--", desc_kor: "전술용유선망도", desc_eng: "Tactical,cable,net,plan" },
                                        { id: "2.2.1.2.31.6", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GL5D--", desc_kor: "전술용무선망도", desc_eng: "Tactical,radio,net,plan" },
                                        {
                                            id: "2.2.1.2.31.7",
                                            type: "G",
                                            affiliation: "*",
                                            battlefield: "G",
                                            status: "*",
                                            modifier: "GL5E--",
                                            desc_kor: "전령경로",
                                            desc_eng: "Messenger,Route",
                                            children: [
                                                { id: "2.2.1.2.31.7.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GL5EM-", desc_kor: "주전령경로", desc_eng: "Main,Messenger,Route" },
                                                { id: "2.2.1.2.31.7.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GL5EA-", desc_kor: "예비전령경로", desc_eng: "Alternate,Messenger,Route" }
                                            ]
                                        }
                                    ]
                                },
                                { id: "2.2.1.2.32", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GL6---", desc_kor: "주민이동로", desc_eng: "Moving,Line" }
                            ]
                        },
                        {
                            id: "2.2.1.3",
                            type: "G",
                            affiliation: "*",
                            battlefield: "G",
                            status: "*",
                            modifier: "GA----",
                            desc_kor: "지역",
                            desc_eng: "Areas",
                            children: [
                                { id: "2.2.1.3.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GAG---", desc_kor: "일반지역", desc_eng: "General,area" },
                                { id: "2.2.1.3.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GAA---", desc_kor: "집결지", desc_eng: "Assembly,area" },
                                { id: "2.2.1.3.3", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GAE---", desc_kor: "교전지역", desc_eng: "Engagement,area" },
                                { id: "2.2.1.3.4", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GAF---", desc_kor: "요새지역", desc_eng: "Fortified,area" },
                                { id: "2.2.1.3.5", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GAD---", desc_kor: "투하지역", desc_eng: "Drop,zone" },
                                { id: "2.2.1.3.6", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GAX---", desc_kor: "퇴출지역", desc_eng: "Extraction,zone,(EZ)" },
                                { id: "2.2.1.3.7", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GAL---", desc_kor: "착륙지역", desc_eng: "Landing,zone,(LZ)" },
                                { id: "2.2.1.3.8", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GAP---", desc_kor: "탑재(픽업)지역", desc_eng: "Pickup,zone,(PZ)" },
                                { id: "2.2.1.3.9", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GAS---", desc_kor: "수색정찰지역", desc_eng: "Search,area/Reconnaissance,area" },
                                { id: "2.2.1.3.10", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GAY---", desc_kor: "접근제한지역", desc_eng: "Limited,access,area" },
                                { id: "2.2.1.3.11", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GAZ---", desc_kor: "비행장지대", desc_eng: "Airfield,zone" },
                                {
                                    id: "2.2.1.3.12",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "G",
                                    status: "*",
                                    modifier: "GAB---",
                                    desc_kor: "비치매트",
                                    desc_eng: "Beach,Mat",
                                    children: [
                                        { id: "2.2.1.3.12.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GABB--", desc_kor: "비치매트", desc_eng: "Beach,Mat" },
                                        { id: "2.2.1.3.12.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "GABH--", desc_kor: "한매트", desc_eng: "Han,Mat" }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "2.2.2",
                    type: "G",
                    affiliation: "*",
                    battlefield: "G",
                    status: "*",
                    modifier: "A-----",
                    desc_kor: "항공통제",
                    desc_eng: "Aviation",
                    children: [{
                            id: "2.2.2.1",
                            type: "G",
                            affiliation: "*",
                            battlefield: "G",
                            status: "*",
                            modifier: "AP----",
                            desc_kor: "점",
                            desc_eng: "Points",
                            children: [
                                { id: "2.2.2.1.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "APP---", desc_kor: "항공통제점", desc_eng: "Air,control,point,(ACP)" },
                                { id: "2.2.2.1.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "APC---", desc_kor: "통신확인점", desc_eng: "Communications,checkpoint,(CCP)" },
                                { id: "2.2.2.1.3", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "APU---", desc_kor: "급상승지점", desc_eng: "Pull-up,point,(PUP)" },
                                { id: "2.2.2.1.4", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "APD---", desc_kor: "비상탈출승무원 구조지점", desc_eng: "Downed,aircrew,pickup,point" }
                            ]
                        },
                        {
                            id: "2.2.2.2",
                            type: "G",
                            affiliation: "*",
                            battlefield: "G",
                            status: "*",
                            modifier: "AL----",
                            desc_kor: "선",
                            desc_eng: "Lines",
                            children: [
                                { id: "2.2.2.2.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ALC---", desc_kor: "비행회랑", desc_eng: "Air,corridor" },
                                { id: "2.2.2.2.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ALM---", desc_kor: "최소위험경로", desc_eng: "Minimum,risk,route,(MRR)" },
                                { id: "2.2.2.2.3", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ALS---", desc_kor: "일반군용기비행경로", desc_eng: "Standard-use,army,aircraft,flight,route,(SAAFR)" },
                                { id: "2.2.2.2.4", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ALU---", desc_kor: "무인항공기비행경로", desc_eng: "Unmanned,aircraft,(UA),route" },
                                { id: "2.2.2.2.5", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ALL---", desc_kor: "저고도비행경로", desc_eng: "Low,level,transit,route,(LLTR)" }
                            ]
                        },
                        {
                            id: "2.2.2.3",
                            type: "G",
                            affiliation: "*",
                            battlefield: "G",
                            status: "*",
                            modifier: "AA----",
                            desc_kor: "구역",
                            desc_eng: "Areas",
                            children: [
                                { id: "2.2.2.3.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "AAR---", desc_kor: "작전제한공역", desc_eng: "Restricted,operations,zone,(ROZ)" },
                                { id: "2.2.2.3.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "AAF---", desc_kor: "전방방공구역", desc_eng: "Short-range,air,defense,engagement,zone,(ShorADEZ)" },
                                { id: "2.2.2.3.3", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "AAH---", desc_kor: "고밀도공역통제구역", desc_eng: "High,density,airspace,control,zone,(HiDACZ)" },
                                {
                                    id: "2.2.2.3.4",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "G",
                                    status: "*",
                                    modifier: "AAM---",
                                    desc_kor: "유도탄교전구역",
                                    desc_eng: "Missile,engagement,zone,(MEZ)",
                                    children: [
                                        { id: "2.2.2.3.4.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "AAML--", desc_kor: "저고도유도탄교전구역", desc_eng: "Low,altitude,MEZ" },
                                        { id: "2.2.2.3.4.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "AAMH--", desc_kor: "고고도 유도탄교전공역", desc_eng: "High,altitude,MEZ" }
                                    ]
                                },
                                { id: "2.2.2.3.5", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "AAW---", desc_kor: "자유무기사격지대", desc_eng: "Weapons,free,zone" },
                                { id: "2.2.2.3.6", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "AAP---", desc_kor: "다각호형", desc_eng: "Polygon,Arc" },
                                { id: "2.2.2.3.7", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "AAA---", desc_kor: "방위호형", desc_eng: "Radial,Arc" },
                                { id: "2.2.2.3.8", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "AAT---", desc_kor: "트랙형", desc_eng: "Track" },
                                { id: "2.2.2.3.9", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "AAO---", desc_kor: "궤도형", desc_eng: "Orbit" }
                            ]
                        },
                        {
                            id: "2.2.2.4",
                            type: "G",
                            affiliation: "*",
                            battlefield: "G",
                            status: "*",
                            modifier: "AS----",
                            desc_kor: "특수부호",
                            desc_eng: "특수부호",
                            children: [{
                                    id: "2.2.2.4.1",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "G",
                                    status: "*",
                                    modifier: "ASP---",
                                    desc_kor: "점",
                                    desc_eng: "점",
                                    children: [
                                        { id: "2.2.2.4.1.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASPG--", desc_kor: "일반", desc_eng: "일반" },
                                        { id: "2.2.2.4.1.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASPS--", desc_kor: "Station,", desc_eng: "General" },
                                        { id: "2.2.2.4.1.3", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASPA--", desc_kor: "Station,", desc_eng: "Air" },
                                        { id: "2.2.2.4.1.4", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASPE--", desc_kor: "Station,", desc_eng: "Emergency" },
                                        { id: "2.2.2.4.1.5", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASPH--", desc_kor: "Station,", desc_eng: "Hazard" },
                                        { id: "2.2.2.4.1.6", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASPU--", desc_kor: "Station,", desc_eng: "Support,Unit" },
                                        { id: "2.2.2.4.1.7", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASPN--", desc_kor: "Station,", desc_eng: "Enemy,point" },
                                        { id: "2.2.2.4.1.8", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASPR--", desc_kor: "Station,", desc_eng: "Link,participant" },
                                        { id: "2.2.2.4.1.9", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASPI--", desc_kor: "Station,", desc_eng: "Site" },
                                        { id: "2.2.2.4.1.10", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASPC--", desc_kor: "Station,", desc_eng: "ECM,fix" },
                                        { id: "2.2.2.4.1.11", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASPF--", desc_kor: "Station,", desc_eng: "Radar,site" },
                                        { id: "2.2.2.4.1.12", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASPM--", desc_kor: "Station,", desc_eng: "Mine,warfare" },
                                        { id: "2.2.2.4.1.13", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASPT--", desc_kor: "Station,", desc_eng: "CAP" }
                                    ]
                                },
                                { id: "2.2.2.4.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "AST---", desc_kor: "Track", desc_eng: "SIF" },
                                { id: "2.2.2.4.3", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASI---", desc_kor: "Intermediate", desc_eng: "told-in,track" },
                                { id: "2.2.2.4.4", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASM---", desc_kor: "산", desc_eng: "산" },
                                { id: "2.2.2.4.5", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASC---", desc_kor: "좌표점", desc_eng: "좌표점" },
                                { id: "2.2.2.4.6", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASA---", desc_kor: "Area", desc_eng: "handles,(when,area,is,hooked)" },
                                { id: "2.2.2.4.7", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASF---", desc_kor: "Appproach", desc_eng: "fix,(for,border,crossings)" },
                                { id: "2.2.2.4.8", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASB---", desc_kor: "Attention", desc_eng: "arrow" },
                                { id: "2.2.2.4.9", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASD---", desc_kor: "SPI", desc_eng: "code" },
                                { id: "2.2.2.4.10", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASE---", desc_kor: "AOP", desc_eng: "track" },
                                { id: "2.2.2.4.11", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASG---", desc_kor: "Cities", desc_eng: "and,landmarks" },
                                { id: "2.2.2.4.12", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASH---", desc_kor: "Flight", desc_eng: "plan(uncorrelated)" },
                                { id: "2.2.2.4.13", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASJ---", desc_kor: "Flight", desc_eng: "plan(correlated)" },
                                { id: "2.2.2.4.14", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASK---", desc_kor: "Offset/Final", desc_eng: "turn" },
                                { id: "2.2.2.4.15", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASL---", desc_kor: "Mission", desc_eng: "plan(Uncrrelated)" },
                                { id: "2.2.2.4.16", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASN---", desc_kor: "Mission", desc_eng: "plan(correlated)" },
                                { id: "2.2.2.4.17", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASO---", desc_kor: "Present", desc_eng: "uncorrelated,serch" },
                                { id: "2.2.2.4.18", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASQ---", desc_kor: "Present", desc_eng: "correlated,search" },
                                { id: "2.2.2.4.19", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASR---", desc_kor: "Present", desc_eng: "uncorrelated,beacon" },
                                { id: "2.2.2.4.20", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASS---", desc_kor: "Present", desc_eng: "correlated,beacon" },
                                { id: "2.2.2.4.21", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASU---", desc_kor: "Present", desc_eng: "uncorrelated,reinforced,search/beacon" },
                                { id: "2.2.2.4.22", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASV---", desc_kor: "Present", desc_eng: "correlated,reinforced,search/beacon" },
                                { id: "2.2.2.4.23", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASW---", desc_kor: "Plot", desc_eng: "histories" },
                                { id: "2.2.2.4.24", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASX---", desc_kor: "Emergency", desc_eng: "beacon" },
                                { id: "2.2.2.4.25", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASY---", desc_kor: "All", desc_eng: "beacon" },
                                { id: "2.2.2.4.26", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "ASZ---", desc_kor: "Search", desc_eng: "Reinforced,beacon" },
                                { id: "2.2.2.4.27", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "AS1---", desc_kor: "Search", desc_eng: "Search" },
                                { id: "2.2.2.4.28", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "AS2---", desc_kor: "Data", desc_eng: "SIF" }
                            ]
                        }
                    ]
                },
                {
                    id: "2.2.3",
                    type: "G",
                    affiliation: "*",
                    battlefield: "G",
                    status: "*",
                    modifier: "P-----",
                    desc_kor: "기만",
                    desc_eng: "Deception",
                    children: [
                        { id: "2.2.3.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "PD----", desc_kor: "모조", desc_eng: "Dummy,(Deception/Decoy)" },
                        { id: "2.2.3.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "PA----", desc_kor: "기만전진축", desc_eng: "Axis,of,advance,for,feint" },
                        { id: "2.2.3.3", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "PF----", desc_kor: "기만공격방향", desc_eng: "Direction,of,attack,for,feint" },
                        { id: "2.2.3.4", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "PM----", desc_kor: "기만지뢰지역", desc_eng: "Decoy,mined,area" },
                        { id: "2.2.3.5", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "PY----", desc_kor: "기만지뢰구역(망)", desc_eng: "Decoy,mined,area,,fenced" },
                        { id: "2.2.3.6", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "PN----", desc_kor: "모조지뢰지대(설치식)", desc_eng: "Dummy,minefield,(Static)" },
                        { id: "2.2.3.7", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "PC----", desc_kor: "모조지뢰지대(살포식)", desc_eng: "Dummy,minefield,(Dynamic)" }
                    ]
                },
                {
                    id: "2.2.4",
                    type: "G",
                    affiliation: "*",
                    battlefield: "G",
                    status: "*",
                    modifier: "D-----",
                    desc_kor: "방어",
                    desc_eng: "Defense",
                    children: [{
                            id: "2.2.4.1",
                            type: "G",
                            affiliation: "*",
                            battlefield: "G",
                            status: "*",
                            modifier: "DP----",
                            desc_kor: "점",
                            desc_eng: "Points",
                            children: [
                                { id: "2.2.4.1.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "DPT---", desc_kor: "표적참조점", desc_eng: "Target,reference,point,(TRP)" },
                                {
                                    id: "2.2.4.1.2",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "G",
                                    status: "*",
                                    modifier: "DPO---",
                                    desc_kor: "관측소",
                                    desc_eng: "Observation,post/Outpost",
                                    children: [{
                                            id: "2.2.4.1.2.1",
                                            type: "G",
                                            affiliation: "*",
                                            battlefield: "G",
                                            status: "*",
                                            modifier: "DPOC--",
                                            desc_kor: "전투전초",
                                            desc_eng: "Combat,outpost",
                                            children: [
                                                { id: "2.2.4.1.2.1.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "DPOCA-", desc_kor: "초소", desc_eng: "초소" },
                                                { id: "2.2.4.1.2.1.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "DPOCB-", desc_kor: "잠복초", desc_eng: "잠복초" },
                                                { id: "2.2.4.1.2.1.3", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "DPOCC-", desc_kor: "복초", desc_eng: "복초" },
                                                { id: "2.2.4.1.2.1.4", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "DPOCD-", desc_kor: "교통초소", desc_eng: "교통초소" },
                                                { id: "2.2.4.1.2.1.5", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "DPOCE-", desc_kor: "해안초소", desc_eng: "해안초소" },
                                                { id: "2.2.4.1.2.1.6", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "DPOCF-", desc_kor: "대공초소", desc_eng: "대공초소" },
                                                { id: "2.2.4.1.2.1.7", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "DPOCG-", desc_kor: "경계분초 및 분견대", desc_eng: "경계분초,및,분견대" }
                                            ]
                                        },
                                        { id: "2.2.4.1.2.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "DPOR--", desc_kor: "관측소(수색정찰)", desc_eng: "Observation,post,occupied,by,dismounted,scouts,or,reconnaissance" },
                                        { id: "2.2.4.1.2.3", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "DPOF--", desc_kor: "전방관측점", desc_eng: "Forward,observer,position" },
                                        { id: "2.2.4.1.2.4", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "DPOS--", desc_kor: "감지소/청음초", desc_eng: "Sensor,outpost/Listening,post,(OP/LP)" },
                                        { id: "2.2.4.1.2.5", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "DPON--", desc_kor: "화생방관측소", desc_eng: "Cbrn,observation,post,(Dismounted)" },
                                        { id: "2.2.4.1.2.6", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "DPOM--", desc_kor: "수중탐지소", desc_eng: "수중탐지소" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "2.2.4.2",
                            type: "G",
                            affiliation: "*",
                            battlefield: "G",
                            status: "*",
                            modifier: "DL----",
                            desc_kor: "선",
                            desc_eng: "Lines",
                            children: [
                                { id: "2.2.4.2.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "DLF---", desc_kor: "전투지역전단", desc_eng: "Forward,edge,of,battle,area,(FEBA)" },
                                { id: "2.2.4.2.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "DLP---", desc_kor: "주사격방향", desc_eng: "Principal,direction,of,fire,(PDF)" },
                                { id: "2.2.4.2.3", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "DLA---", desc_kor: "봉쇄선", desc_eng: "봉쇄선" },
                                { id: "2.2.4.2.4", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "DLB---", desc_kor: "차단선", desc_eng: "차단선" },
                                { id: "2.2.4.2.5", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "DLC---", desc_kor: "교란사격", desc_eng: "교란사격" }
                            ]
                        },
                        {
                            id: "2.2.4.3",
                            type: "G",
                            affiliation: "*",
                            battlefield: "G",
                            status: "*",
                            modifier: "DA----",
                            desc_kor: "구역",
                            desc_eng: "Areas",
                            children: [{
                                    id: "2.2.4.3.1",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "G",
                                    status: "*",
                                    modifier: "DAB---",
                                    desc_kor: "전투진지",
                                    desc_eng: "Battle,position",
                                    children: [
                                        { id: "2.2.4.3.1.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "DABP--", desc_kor: "전투진지(미점령)", desc_eng: "Prepared,but,not,occupied" }
                                    ]
                                },
                                { id: "2.2.4.3.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "DAE---", desc_kor: "교전구역", desc_eng: "Engagement,area" },
                                { id: "2.2.4.3.3", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "DAF---", desc_kor: "발열진지", desc_eng: "발열진지" }
                            ]
                        }
                    ]
                },
                {
                    id: "2.2.5",
                    type: "G",
                    affiliation: "*",
                    battlefield: "G",
                    status: "*",
                    modifier: "O-----",
                    desc_kor: "공격",
                    desc_eng: "Offense",
                    children: [{
                            id: "2.2.5.1",
                            type: "G",
                            affiliation: "*",
                            battlefield: "G",
                            status: "*",
                            modifier: "OP----",
                            desc_kor: "점",
                            desc_eng: "Points",
                            children: [
                                { id: "2.2.5.1.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "OPP---", desc_kor: "공격개시점", desc_eng: "Point,of,departure" }
                            ]
                        },
                        {
                            id: "2.2.5.2",
                            type: "G",
                            affiliation: "*",
                            battlefield: "G",
                            status: "*",
                            modifier: "OL----",
                            desc_kor: "선",
                            desc_eng: "Lines",
                            children: [{
                                    id: "2.2.5.2.1",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "G",
                                    status: "*",
                                    modifier: "OLA---",
                                    desc_kor: "전진축",
                                    desc_eng: "Axis,of,advance",
                                    children: [
                                        { id: "2.2.5.2.1.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "OLAV--", desc_kor: "아군항공전진축", desc_eng: "Aviation" },
                                        { id: "2.2.5.2.1.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "OLAA--", desc_kor: "아군공수전진축", desc_eng: "Airborne" },
                                        { id: "2.2.5.2.1.3", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "OLAR--", desc_kor: "아군공격 회전익 전진축", desc_eng: "Attack,,rotary,wing" },
                                        {
                                            id: "2.2.5.2.1.4",
                                            type: "G",
                                            affiliation: "*",
                                            battlefield: "G",
                                            status: "*",
                                            modifier: "OLAG--",
                                            desc_kor: "지상전진축",
                                            desc_eng: "Ground",
                                            children: [
                                                { id: "2.2.5.2.1.4.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "OLAGM-", desc_kor: "지상주공전진측", desc_eng: "Main,attack" },
                                                { id: "2.2.5.2.1.4.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "OLAGS-", desc_kor: "지상조공전진축", desc_eng: "Supporting,attack" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: "2.2.5.2.2",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "G",
                                    status: "*",
                                    modifier: "OLK---",
                                    desc_kor: "공격방향",
                                    desc_eng: "Direction,of,attack",
                                    children: [
                                        { id: "2.2.5.2.2.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "OLKA--", desc_kor: "공중공격방향", desc_eng: "Aviation" },
                                        {
                                            id: "2.2.5.2.2.2",
                                            type: "G",
                                            affiliation: "*",
                                            battlefield: "G",
                                            status: "*",
                                            modifier: "OLKG--",
                                            desc_kor: "지상공격방향",
                                            desc_eng: "Ground",
                                            children: [
                                                { id: "2.2.5.2.2.2.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "OLKGM-", desc_kor: "지상주공방향", desc_eng: "Main,attack" },
                                                { id: "2.2.5.2.2.2.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "OLKGS-", desc_kor: "지상조공방향", desc_eng: "Supporting,attack" }
                                            ]
                                        }
                                    ]
                                },
                                { id: "2.2.5.2.3", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "OLF---", desc_kor: "최후협조선", desc_eng: "Final,coordination,line" },
                                { id: "2.2.5.2.4", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "OLI---", desc_kor: "침투로", desc_eng: "Infiltration,lane" },
                                { id: "2.2.5.2.5", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "OLL---", desc_kor: "전진한계선", desc_eng: "Limit,of,advance" },
                                { id: "2.2.5.2.6", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "OLT---", desc_kor: "공격개시선", desc_eng: "Line,of,departure" },
                                { id: "2.2.5.2.7", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "OLC---", desc_kor: "공격개시선/접촉선", desc_eng: "Line,of,departure/line,of,contact,(LD/LC)" },
                                { id: "2.2.5.2.8", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "OLP---", desc_kor: "예상전개선", desc_eng: "Probable,line,of,deployment,(PLD)" }
                            ]
                        },
                        {
                            id: "2.2.5.3",
                            type: "G",
                            affiliation: "*",
                            battlefield: "G",
                            status: "*",
                            modifier: "OA----",
                            desc_kor: "구역",
                            desc_eng: "Areas",
                            children: [
                                { id: "2.2.5.3.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "OAA---", desc_kor: "돌격진지", desc_eng: "Assault,position" },
                                { id: "2.2.5.3.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "OAK---", desc_kor: "공격대기지역", desc_eng: "Attack,position" },
                                { id: "2.2.5.3.3", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "OAF---", desc_kor: "사격지점(공격)", desc_eng: "Attack,by,fire,position" },
                                { id: "2.2.5.3.4", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "OAS---", desc_kor: "사격지원진지", desc_eng: "Support,by,fire,position" },
                                { id: "2.2.5.3.5", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "OAO---", desc_kor: "목표", desc_eng: "Objective" },
                                { id: "2.2.5.3.6", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "OAP---", desc_kor: "돌파구역", desc_eng: "Penetration,box" }
                            ]
                        }
                    ]
                },
                {
                    id: "2.2.6",
                    type: "G",
                    affiliation: "*",
                    battlefield: "G",
                    status: "*",
                    modifier: "S-----",
                    desc_kor: "특수",
                    desc_eng: "Special",
                    children: [{
                            id: "2.2.6.1",
                            type: "G",
                            affiliation: "*",
                            battlefield: "G",
                            status: "*",
                            modifier: "SL----",
                            desc_kor: "선",
                            desc_eng: "Line",
                            children: [{
                                    id: "2.2.6.1.1",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "G",
                                    status: "*",
                                    modifier: "SLA---",
                                    desc_kor: "매복",
                                    desc_eng: "Ambush",
                                    children: [
                                        { id: "2.2.6.1.1.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "SLAA--", desc_kor: "분대매복", desc_eng: "Ambush(Squad)" },
                                        { id: "2.2.6.1.1.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "SLAB--", desc_kor: "소대매복", desc_eng: "소대매복" },
                                        { id: "2.2.6.1.1.3", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "SLAD--", desc_kor: "화기매복", desc_eng: "화기매복" }
                                    ]
                                },
                                { id: "2.2.6.1.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "SLH---", desc_kor: "견제선", desc_eng: "Holding,line" },
                                { id: "2.2.6.1.3", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "SLR---", desc_kor: "분진선", desc_eng: "Release,line" },
                                { id: "2.2.6.1.4", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "SLB---", desc_kor: "교두보", desc_eng: "Bridgehead" }
                            ]
                        },
                        {
                            id: "2.2.6.2",
                            type: "G",
                            affiliation: "*",
                            battlefield: "G",
                            status: "*",
                            modifier: "SA----",
                            desc_kor: "구역",
                            desc_eng: "Area",
                            children: [
                                { id: "2.2.6.2.1", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "SAO---", desc_kor: "작전구역", desc_eng: "Area,of,operations,(AO)" },
                                { id: "2.2.6.2.2", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "SAA---", desc_kor: "공두보", desc_eng: "Airhead" },
                                { id: "2.2.6.2.4", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "SAE---", desc_kor: "포위지역", desc_eng: "Encirclement" },
                                { id: "2.2.6.2.5", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "SAN---", desc_kor: "중요관심지역", desc_eng: "Named,area,of,interest,(NAI)" },
                                { id: "2.2.6.2.6", type: "G", affiliation: "*", battlefield: "G", status: "*", modifier: "SAT---", desc_kor: "관심타격지역", desc_eng: "Targeted,area,of,interest,(TAI)" }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "2.3",
            type: "G",
            affiliation: "*",
            battlefield: "M",
            status: "*",
            modifier: "------",
            desc_kor: "기동 및 방어",
            desc_eng: "Mobility/Survivability",
            children: [{
                    id: "2.3.1",
                    type: "G",
                    affiliation: "*",
                    battlefield: "M",
                    status: "*",
                    modifier: "O-----",
                    desc_kor: "장애물",
                    desc_eng: "Obstacles",
                    children: [{
                            id: "2.3.1.1",
                            type: "G",
                            affiliation: "*",
                            battlefield: "M",
                            status: "*",
                            modifier: "OG----",
                            desc_kor: "일반",
                            desc_eng: "General",
                            children: [
                                { id: "2.3.1.1.1", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OGB---", desc_kor: "장애물지대", desc_eng: "Belt" },
                                { id: "2.3.1.1.2", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OGL---", desc_kor: "장애물라인", desc_eng: "Line" },
                                { id: "2.3.1.1.3", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OGZ---", desc_kor: "장애물지역", desc_eng: "Zone" },
                                { id: "2.3.1.1.4", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OGF---", desc_kor: "장애물허가구역", desc_eng: "Obstacle,free,area" },
                                { id: "2.3.1.1.5", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OGR---", desc_kor: "장애물제한구역", desc_eng: "Obstacle,restricted,area" },
                                { id: "2.3.1.1.6", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OGA---", desc_kor: "사태,돌폭뢰 등 폭파지역", desc_eng: "사태,돌폭뢰,등,폭파지역" },
                                { id: "2.3.1.1.7", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OGC---", desc_kor: "이동차단물대", desc_eng: "이동차단물대" },
                                { id: "2.3.1.1.8", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OGD---", desc_kor: "장애물", desc_eng: "장애물" },
                                { id: "2.3.1.1.9", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OGE---", desc_kor: "기타장애물(육상)", desc_eng: "기타장애물(육상)" },
                                { id: "2.3.1.1.10", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OGG---", desc_kor: "기계적인 장애물", desc_eng: "기계적인,장애물" },
                                { id: "2.3.1.1.11", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OGH---", desc_kor: "장벽", desc_eng: "장벽" },
                                { id: "2.3.1.1.12", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OGI---", desc_kor: "단애", desc_eng: "단애" },
                                { id: "2.3.1.1.13", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OGJ---", desc_kor: "기타군장애물위치", desc_eng: "기타군장애물위치" },
                                { id: "2.3.1.1.14", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OGK---", desc_kor: "장애물극복", desc_eng: "장애물극복" }
                            ]
                        },
                        { id: "2.3.1.2", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OS----", desc_kor: "목책(녹채)", desc_eng: "Abatis" },
                        {
                            id: "2.3.1.3",
                            type: "G",
                            affiliation: "*",
                            battlefield: "M",
                            status: "*",
                            modifier: "OA----",
                            desc_kor: "대전차장애물",
                            desc_eng: "Antitank,obstacles",
                            children: [{
                                    id: "2.3.1.3.1",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "M",
                                    status: "*",
                                    modifier: "OAD---",
                                    desc_kor: "대전차구",
                                    desc_eng: "Antitank,ditch",
                                    children: [
                                        { id: "2.3.1.3.1.1", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OADU--", desc_kor: "대전차구(건설중)", desc_eng: "Under,construction" },
                                        { id: "2.3.1.3.1.2", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OADC--", desc_kor: "대전차구(완성)", desc_eng: "Complete" },
                                        { id: "2.3.1.3.1.3", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OADD--", desc_kor: "거부완료", desc_eng: "거부완료" },
                                        {
                                            id: "2.3.1.3.1.4",
                                            type: "G",
                                            affiliation: "*",
                                            battlefield: "M",
                                            status: "*",
                                            modifier: "OADA--",
                                            desc_kor: "낙석장애물",
                                            desc_eng: "낙석장애물",
                                            children: [
                                                { id: "2.3.1.3.1.4.1", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OADAA-", desc_kor: "낙석준비", desc_eng: "낙석준비" }
                                            ]
                                        },
                                        {
                                            id: "2.3.1.3.1.5",
                                            type: "G",
                                            affiliation: "*",
                                            battlefield: "M",
                                            status: "*",
                                            modifier: "OADB--",
                                            desc_kor: "고가낙석",
                                            desc_eng: "고가낙석",
                                            children: [
                                                { id: "2.3.1.3.1.5.1", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OADBA-", desc_kor: "고가낙석준비", desc_eng: "고가낙석준비" }
                                            ]
                                        },
                                        { id: "2.3.1.3.1.6", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OADE--", desc_kor: "도로대화구", desc_eng: "도로대화구" }
                                    ]
                                },
                                { id: "2.3.1.3.2", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OAR---", desc_kor: "대전차구(대전차지뢰포함)", desc_eng: "Antitank,ditch,reinforced,with,antitank,mines" },
                                {
                                    id: "2.3.1.3.3",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "M",
                                    status: "*",
                                    modifier: "OAO---",
                                    desc_kor: "대전차장애물,용치,기타",
                                    desc_eng: "Antitank,obstacles:,tetrahedrons,,dragons,teeth,,and,other,similar,obstacles",
                                    children: [
                                        { id: "2.3.1.3.3.1", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OAOF--", desc_kor: "대전차장애물(고정,조립식)", desc_eng: "Fixed,and,prefabricated" },
                                        { id: "2.3.1.3.3.2", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OAOM--", desc_kor: "대전차장애물(이동식)", desc_eng: "Moveable" },
                                        { id: "2.3.1.3.3.3", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OAOP--", desc_kor: "대전차장애물(이동,조립식)", desc_eng: "Moveable,and,prefabricated" }
                                    ]
                                },
                                { id: "2.3.1.3.4", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OAW---", desc_kor: "대전차방벽", desc_eng: "Antitank,wall" }
                            ]
                        },
                        { id: "2.3.1.4", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OB----", desc_kor: "부비트랩", desc_eng: "Booby,trap" },
                        {
                            id: "2.3.1.5",
                            type: "G",
                            affiliation: "*",
                            battlefield: "M",
                            status: "*",
                            modifier: "OM----",
                            desc_kor: "지뢰",
                            desc_eng: "Mines",
                            children: [
                                { id: "2.3.1.5.1", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OMU---", desc_kor: "불명확지뢰", desc_eng: "Unspecified,mine" },
                                {
                                    id: "2.3.1.5.2",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "M",
                                    status: "*",
                                    modifier: "OMT---",
                                    desc_kor: "대전차지뢰",
                                    desc_eng: "Antitank,mine,(AT)",
                                    children: [
                                        { id: "2.3.1.5.2.1", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OMTA--", desc_kor: "대전차지뢰열", desc_eng: "대전차지뢰열" }
                                    ]
                                },
                                { id: "2.3.1.5.3", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OMD---", desc_kor: "대전차지뢰(제거방지장치)", desc_eng: "Antitank,mine,with,antihandling,device" },
                                { id: "2.3.1.5.4", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OME---", desc_kor: "대전차지뢰(지향성)", desc_eng: "Antitank,mine,(Directional)" },
                                {
                                    id: "2.3.1.5.5",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "M",
                                    status: "*",
                                    modifier: "OMP---",
                                    desc_kor: "대인지뢰",
                                    desc_eng: "Antipersonnel,(AP),mines",
                                    children: [
                                        { id: "2.3.1.5.5.1", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OMPA--", desc_kor: "대인지뢰열", desc_eng: "대인지뢰열" }
                                    ]
                                },
                                { id: "2.3.1.5.6", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OMW---", desc_kor: "살포식지뢰", desc_eng: "Wide,area,mines" },
                                { id: "2.3.1.5.7", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OMC---", desc_kor: "지뢰군", desc_eng: "Mine,cluster" },
                                { id: "2.3.1.5.8", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OMA---", desc_kor: "돌출봉지뢰", desc_eng: "돌출봉지뢰" },
                                { id: "2.3.1.5.9", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OMB---", desc_kor: "조명지뢰", desc_eng: "조명지뢰" },
                                { id: "2.3.1.5.10", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OMF---", desc_kor: "다중크레모아", desc_eng: "다중크레모아" }
                            ]
                        },
                        {
                            id: "2.3.1.6",
                            type: "G",
                            affiliation: "*",
                            battlefield: "M",
                            status: "*",
                            modifier: "OF----",
                            desc_kor: "지뢰지대",
                            desc_eng: "Minefields",
                            children: [
                                { id: "2.3.1.6.1", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OFS---", desc_kor: "지뢰지대(설치식)", desc_eng: "Static,depiction" },
                                { id: "2.3.1.6.2", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OFD---", desc_kor: "지뢰지대(살포식)", desc_eng: "Dynamic,depiction" },
                                { id: "2.3.1.6.3", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OFG---", desc_kor: "간격(지뢰 또는 장애물이 없는지대)", desc_eng: "Gap" },
                                { id: "2.3.1.6.4", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OFA---", desc_kor: "지뢰지역", desc_eng: "Mined,area" }
                            ]
                        },
                        {
                            id: "2.3.1.7",
                            type: "G",
                            affiliation: "*",
                            battlefield: "M",
                            status: "*",
                            modifier: "OE----",
                            desc_kor: "장애물 효과",
                            desc_eng: "Obstacle,effect",
                            children: [
                                { id: "2.3.1.7.1", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OEB---", desc_kor: "저지(장애물효과)", desc_eng: "Block" },
                                { id: "2.3.1.7.2", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OEF---", desc_kor: "고착(장애물효과)", desc_eng: "Fix" },
                                { id: "2.3.1.7.3", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OET---", desc_kor: "유인(장애물효과)", desc_eng: "Turn" },
                                { id: "2.3.1.7.4", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OED---", desc_kor: "와해(장애물효과)", desc_eng: "Disrupt" }
                            ]
                        },
                        { id: "2.3.1.8", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OU----", desc_kor: "불발탄 탄착지역", desc_eng: "Unexploded,ordnance,area,(UXO)" },
                        {
                            id: "2.3.1.9",
                            type: "G",
                            affiliation: "*",
                            battlefield: "M",
                            status: "*",
                            modifier: "OR----",
                            desc_kor: "도로봉쇄,대화구,폭파된교량",
                            desc_eng: "Roadblocks,,craters,,and,blown,bridges",
                            children: [
                                { id: "2.3.1.9.1", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "ORP---", desc_kor: "폭파예정", desc_eng: "Planned" },
                                { id: "2.3.1.9.2", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "ORS---", desc_kor: "폭파준비1(안전)", desc_eng: "Explosives,,state,of,readiness,1,(Safe)" },
                                { id: "2.3.1.9.3", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "ORA---", desc_kor: "폭파준비2(설치완료)", desc_eng: "Explosives,,state,of,readiness,2,(Armed-but,passable)" },
                                { id: "2.3.1.9.4", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "ORC---", desc_kor: "도로봉쇄완료(폭파완료)", desc_eng: "Roadblock,complete,(Executed)" }
                            ]
                        },
                        { id: "2.3.1.10", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OT----", desc_kor: "인계철선", desc_eng: "Trip,wire" },
                        {
                            id: "2.3.1.11",
                            type: "G",
                            affiliation: "*",
                            battlefield: "M",
                            status: "*",
                            modifier: "OW----",
                            desc_kor: "철조망",
                            desc_eng: "Wire,obstacle",
                            children: [
                                { id: "2.3.1.11.1", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OWU---", desc_kor: "불명확철조망", desc_eng: "Unspecified" },
                                { id: "2.3.1.11.2", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OWS---", desc_kor: "단선철조망", desc_eng: "Single,fence" },
                                { id: "2.3.1.11.3", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OWD---", desc_kor: "복선철조망", desc_eng: "Double,fence" },
                                { id: "2.3.1.11.4", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OWA---", desc_kor: "복선지붕형철조망", desc_eng: "Double,apron,fence" },
                                { id: "2.3.1.11.5", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OWL---", desc_kor: "저가철조망", desc_eng: "Low,wire,fence" },
                                { id: "2.3.1.11.6", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OWH---", desc_kor: "고가철조망", desc_eng: "High,wire,fence" },
                                {
                                    id: "2.3.1.11.7",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "M",
                                    status: "*",
                                    modifier: "OWC---",
                                    desc_kor: "윤형철조망",
                                    desc_eng: "Concertina",
                                    children: [
                                        { id: "2.3.1.11.7.1", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OWCS--", desc_kor: "단선윤형철조망", desc_eng: "Single,concertina" },
                                        { id: "2.3.1.11.7.2", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OWCD--", desc_kor: "복선윤형철조망", desc_eng: "Double,strand,concertina" },
                                        { id: "2.3.1.11.7.3", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OWCT--", desc_kor: "삼선윤형철조망", desc_eng: "Triple,strand,concertina" },
                                        { id: "2.3.1.11.7.4", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OWCA--", desc_kor: "전기철조망", desc_eng: "전기철조망" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "2.3.1.12",
                            type: "G",
                            affiliation: "*",
                            battlefield: "M",
                            status: "*",
                            modifier: "OH----",
                            desc_kor: "비행장애물",
                            desc_eng: "Aviation",
                            children: [{
                                    id: "2.3.1.12.1",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "M",
                                    status: "*",
                                    modifier: "OHT---",
                                    desc_kor: "탑",
                                    desc_eng: "Tower",
                                    children: [
                                        { id: "2.3.1.12.1.1", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OHTL--", desc_kor: "탑(저고도)", desc_eng: "Low" },
                                        { id: "2.3.1.12.1.2", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OHTH--", desc_kor: "탑(고고도)", desc_eng: "High" }
                                    ]
                                },
                                { id: "2.3.1.12.2", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "OHO---", desc_kor: "가공전선/송전선", desc_eng: "Overhead,wire/Power,line" }
                            ]
                        }
                    ]
                },
                {
                    id: "2.3.2",
                    type: "G",
                    affiliation: "*",
                    battlefield: "M",
                    status: "*",
                    modifier: "B-----",
                    desc_kor: "장애물우회",
                    desc_eng: "Obstacle,bypass",
                    children: [{
                            id: "2.3.2.1",
                            type: "G",
                            affiliation: "*",
                            battlefield: "M",
                            status: "*",
                            modifier: "BD----",
                            desc_kor: "장애물우회곤란정도",
                            desc_eng: "Obstacle,bypass,difficulty",
                            children: [
                                { id: "2.3.2.1.1", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "BDE---", desc_kor: "우회가능", desc_eng: "Bypass,easy" },
                                { id: "2.3.2.1.2", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "BDD---", desc_kor: "우회곤란", desc_eng: "Bypass,difficult" },
                                { id: "2.3.2.1.3", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "BDI---", desc_kor: "우회불가", desc_eng: "Bypass,impossible" }
                            ]
                        },
                        {
                            id: "2.3.2.2",
                            type: "G",
                            affiliation: "*",
                            battlefield: "M",
                            status: "*",
                            modifier: "BC----",
                            desc_kor: "도하",
                            desc_eng: "Crossing,site/Water,crossing",
                            children: [
                                { id: "2.3.2.2.1", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "BCA---", desc_kor: "공격도하지점", desc_eng: "Assault,crossing,area" },
                                { id: "2.3.2.2.2", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "BCB---", desc_kor: "교량도하", desc_eng: "Bridge,or,gap" },
                                { id: "2.3.2.2.3", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "BCF---", desc_kor: "도선장", desc_eng: "Ferry" },
                                { id: "2.3.2.2.4", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "BCE---", desc_kor: "도섭가능", desc_eng: "Ford,easy" },
                                { id: "2.3.2.2.5", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "BCD---", desc_kor: "도섭곤란", desc_eng: "Ford,difficult" },
                                { id: "2.3.2.2.6", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "BCL---", desc_kor: "도하통로", desc_eng: "Lane" },
                                { id: "2.3.2.2.7", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "BCR---", desc_kor: "문교지점", desc_eng: "Raft,site" },
                                { id: "2.3.2.2.8", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "BCP---", desc_kor: "공병통제소", desc_eng: "Engineer,regulating,point" },
                                { id: "2.3.2.2.9", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "BCC---", desc_kor: "공병장비집적소", desc_eng: "공병장비집적소" },
                                { id: "2.3.2.2.10", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "BCG---", desc_kor: "철교(거부작전실시위치)", desc_eng: "철교(거부작전실시위치)" },
                                { id: "2.3.2.2.11", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "BCH---", desc_kor: "터널(피해복구)", desc_eng: "터널(피해복구)" }
                            ]
                        }
                    ]
                },
                {
                    id: "2.3.3",
                    type: "G",
                    affiliation: "*",
                    battlefield: "M",
                    status: "*",
                    modifier: "S-----",
                    desc_kor: "방어",
                    desc_eng: "Survivability",
                    children: [
                        { id: "2.3.3.1", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "SE----", desc_kor: "둑,참호,축성", desc_eng: "Earthwork,,small,trench,or,fortification" },
                        { id: "2.3.3.2", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "SF----", desc_kor: "요새", desc_eng: "Fort" },
                        { id: "2.3.3.3", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "SL----", desc_kor: "요새방어선", desc_eng: "Fortified,line" },
                        { id: "2.3.3.4", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "SW----", desc_kor: "유개엄체호", desc_eng: "Foxhole,,emplacement,or,weapon,site" },
                        { id: "2.3.3.5", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "SP----", desc_kor: "거점", desc_eng: "Strong,point" },
                        { id: "2.3.3.6", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "SS----", desc_kor: "지상엄체", desc_eng: "Surface,shelter" },
                        { id: "2.3.3.7", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "SU----", desc_kor: "지하엄체", desc_eng: "Underground,shelter" },
                        { id: "2.3.3.8", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "SA----", desc_kor: "교통호", desc_eng: "교통호" },
                        { id: "2.3.3.9", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "SB----", desc_kor: "교통호(총안구)", desc_eng: "교통호(총안구)" },
                        { id: "2.3.3.10", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "SC----", desc_kor: "교통호(구축중)", desc_eng: "교통호(구축중)" },
                        { id: "2.3.3.11", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "SD----", desc_kor: "갱도", desc_eng: "갱도" },
                        { id: "2.3.3.12", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "SG----", desc_kor: "토목화점", desc_eng: "토목화점" },
                        { id: "2.3.3.13", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "SH----", desc_kor: "일화구영구화점", desc_eng: "일화구영구화점" },
                        { id: "2.3.3.14", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "SI----", desc_kor: "쌍화구화점", desc_eng: "쌍화구화점" },
                        { id: "2.3.3.15", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "SJ----", desc_kor: "비밀화점", desc_eng: "비밀화점" }
                    ]
                },
                {
                    id: "2.3.4",
                    type: "G",
                    affiliation: "*",
                    battlefield: "M",
                    status: "*",
                    modifier: "N-----",
                    desc_kor: "화생방",
                    desc_eng: "Chemical,,biological,,radiological,,and,nuclear",
                    children: [
                        { id: "2.3.4.1", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "NM----", desc_kor: "최소안전지대", desc_eng: "Minimum,safe,distance,zones" },
                        { id: "2.3.4.2", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "NZ----", desc_kor: "핵폭발지점", desc_eng: "Nuclear,detonations,ground,zero" },
                        { id: "2.3.4.3", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "NF----", desc_kor: "낙진발생지점", desc_eng: "Fallout,producing" },
                        { id: "2.3.4.4", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "NR----", desc_kor: "방사능오염지역", desc_eng: "Radioactive,area" },
                        { id: "2.3.4.5", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "NB----", desc_kor: "생물학오염지역", desc_eng: "Biologically,contaminated,area" },
                        { id: "2.3.4.6", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "NC----", desc_kor: "화학오염지역", desc_eng: "Chemically,contaminated,area" },
                        {
                            id: "2.3.4.7",
                            type: "G",
                            affiliation: "*",
                            battlefield: "M",
                            status: "*",
                            modifier: "NE----",
                            desc_kor: "오염발생",
                            desc_eng: "Release,events",
                            children: [
                                { id: "2.3.4.7.1", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "NEB---", desc_kor: "오염발생(생물학)", desc_eng: "Biological" },
                                { id: "2.3.4.7.2", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "NEC---", desc_kor: "오염발생(화학)", desc_eng: "Chemical" }
                            ]
                        },
                        {
                            id: "2.3.4.8",
                            type: "G",
                            affiliation: "*",
                            battlefield: "M",
                            status: "*",
                            modifier: "ND----",
                            desc_kor: "제독지점",
                            desc_eng: "Decontamination,(DECON),points",
                            children: [
                                { id: "2.3.4.8.1", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "NDP---", desc_kor: "제독지점(불명확)", desc_eng: "Decon,site/point,(Unspecified)" },
                                { id: "2.3.4.8.2", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "NDA---", desc_kor: "대체제독지점(불명확)", desc_eng: "Alternate,decon,site/point,(Unspecified)" },
                                { id: "2.3.4.8.3", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "NDT---", desc_kor: "제독지점(부대)", desc_eng: "Decon,site/point,(Troops)" },
                                { id: "2.3.4.8.4", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "NDE---", desc_kor: "제독지점(장비)", desc_eng: "Decon,site/point,(Equipment)" },
                                { id: "2.3.4.8.5", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "NDB---", desc_kor: "제독지점(장비및부대)", desc_eng: "Decon,site/point,(Equipment,and,troops)" },
                                { id: "2.3.4.8.6", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "NDO---", desc_kor: "제독지점(작전상제독)", desc_eng: "Decon,site/point,(Operational,decontamination)" },
                                { id: "2.3.4.8.7", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "NDD---", desc_kor: "제독지점(완전제독)", desc_eng: "Decon,site/point,(Thorough,decontamination)" },
                                { id: "2.3.4.8.8", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "NDF---", desc_kor: "제독지점(인원)", desc_eng: "제독지점(인원)" },
                                { id: "2.3.4.8.9", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "NDG---", desc_kor: "제독지점(정밀)", desc_eng: "제독지점(정밀)" },
                                { id: "2.3.4.8.10", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "NDH---", desc_kor: "제독지점(급속)", desc_eng: "제독지점(급속)" },
                                { id: "2.3.4.8.11", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "NDC---", desc_kor: "제독급수원", desc_eng: "제독급수원" }
                            ]
                        },
                        { id: "2.3.4.9", type: "G", affiliation: "*", battlefield: "M", status: "*", modifier: "NL----", desc_kor: "오염윤곽선", desc_eng: "Dose,rate,contour,lines" }
                    ]
                }
            ]
        },
        {
            id: "2.4",
            type: "G",
            affiliation: "*",
            battlefield: "F",
            status: "*",
            modifier: "------",
            desc_kor: "화력지원",
            desc_eng: "Fire,support",
            children: [{
                    id: "2.4.1",
                    type: "G",
                    affiliation: "*",
                    battlefield: "F",
                    status: "*",
                    modifier: "P-----",
                    desc_kor: "점",
                    desc_eng: "Point",
                    children: [{
                            id: "2.4.1.1",
                            type: "G",
                            affiliation: "*",
                            battlefield: "F",
                            status: "*",
                            modifier: "PT----",
                            desc_kor: "표적",
                            desc_eng: "Target",
                            children: [
                                { id: "2.4.1.1.1", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "PTS---", desc_kor: "점/단일표적", desc_eng: "Point/Single,target" },
                                { id: "2.4.1.1.2", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "PTN---", desc_kor: "핵표적", desc_eng: "Nuclear,target" }
                            ]
                        },
                        {
                            id: "2.4.1.2",
                            type: "G",
                            affiliation: "*",
                            battlefield: "F",
                            status: "*",
                            modifier: "PC----",
                            desc_kor: "지휘통제점",
                            desc_eng: "Command/Control,points",
                            children: [
                                { id: "2.4.1.2.1", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "PCF---", desc_kor: "화력지원지점", desc_eng: "Fire,support,station" },
                                { id: "2.4.1.2.2", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "PCS---", desc_kor: "측량통제점", desc_eng: "Survey,control,point" },
                                { id: "2.4.1.2.3", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "PCB---", desc_kor: "사격위치", desc_eng: "Firing,point" },
                                { id: "2.4.1.2.4", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "PCR---", desc_kor: "재장전위치", desc_eng: "Reload,point" },
                                { id: "2.4.1.2.5", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "PCH---", desc_kor: "은폐위치", desc_eng: "Hide,point" },
                                { id: "2.4.1.2.6", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "PCL---", desc_kor: "발사위치", desc_eng: "Launch,point" }
                            ]
                        }
                    ]
                },
                {
                    id: "2.4.2",
                    type: "G",
                    affiliation: "*",
                    battlefield: "F",
                    status: "*",
                    modifier: "L-----",
                    desc_kor: "선",
                    desc_eng: "Lines",
                    children: [{
                            id: "2.4.2.1",
                            type: "G",
                            affiliation: "*",
                            battlefield: "F",
                            status: "*",
                            modifier: "LT----",
                            desc_kor: "선형표적",
                            desc_eng: "Linear,target",
                            children: [
                                { id: "2.4.2.1.1", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "LTS---", desc_kor: "선형연막표적", desc_eng: "Linear,smoke,target" },
                                { id: "2.4.2.1.2", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "LTF---", desc_kor: "최후방어사격", desc_eng: "Final,protective,fire,(FPF)" }
                            ]
                        },
                        {
                            id: "2.4.2.2",
                            type: "G",
                            affiliation: "*",
                            battlefield: "F",
                            status: "*",
                            modifier: "LC----",
                            desc_kor: "지휘통제선",
                            desc_eng: "Command/control,lines",
                            children: [
                                { id: "2.4.2.2.1", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "LCF---", desc_kor: "화력지원협조선(FSCL)", desc_eng: "Fire,support,coordination,line,(FSCL)" },
                                { id: "2.4.2.2.2", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "LCC---", desc_kor: "사격협조선(CFL)", desc_eng: "Coordinated,fire,line,(CFL)" },
                                { id: "2.4.2.2.3", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "LCN---", desc_kor: "화력금지선", desc_eng: "No-fire,line,(NFL)" },
                                { id: "2.4.2.2.4", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "LCR---", desc_kor: "사격제한선", desc_eng: "Restrictive,fire,line,(RFL)" },
                                { id: "2.4.2.2.5", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "LCM---", desc_kor: "군수비행경로", desc_eng: "Munition,flight,path,(MFP)" }
                            ]
                        }
                    ]
                },
                {
                    id: "2.4.3",
                    type: "G",
                    affiliation: "*",
                    battlefield: "F",
                    status: "*",
                    modifier: "A-----",
                    desc_kor: "구역",
                    desc_eng: "Areas",
                    children: [{
                            id: "2.4.3.1",
                            type: "G",
                            affiliation: "*",
                            battlefield: "F",
                            status: "*",
                            modifier: "AT----",
                            desc_kor: "영역표적지역",
                            desc_eng: "Area,target",
                            children: [
                                { id: "2.4.3.1.1", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ATR---", desc_kor: "사각형표적", desc_eng: "Rectangular,target" },
                                { id: "2.4.3.1.2", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ATC---", desc_kor: "원형표적", desc_eng: "Circular,target" },
                                { id: "2.4.3.1.3", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ATG---", desc_kor: "표적열/군 지역", desc_eng: "Series,or,group,of,targets" },
                                { id: "2.4.3.1.4", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ATS---", desc_kor: "연막차장지역", desc_eng: "Smoke" },
                                { id: "2.4.3.1.5", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ATB---", desc_kor: "폭격지역", desc_eng: "Bomb,area" }
                            ]
                        },
                        {
                            id: "2.4.3.2",
                            type: "G",
                            affiliation: "*",
                            battlefield: "F",
                            status: "*",
                            modifier: "AC----",
                            desc_kor: "지휘통제지역",
                            desc_eng: "Command/control,areas",
                            children: [{
                                    id: "2.4.3.2.1",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "F",
                                    status: "*",
                                    modifier: "ACS---",
                                    desc_kor: "화력지원지역",
                                    desc_eng: "Fire,support,area,(FSA)",
                                    children: [
                                        { id: "2.4.3.2.1.1", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ACSI--", desc_kor: "화력지원지역(FSA)(다각형)", desc_eng: "Fire,support,area,(FSA),,Irregular" },
                                        { id: "2.4.3.2.1.2", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ACSR--", desc_kor: "화력지원지역(FSA)(사각형)", desc_eng: "Fire,support,area,(FSA),,Rectangular" },
                                        { id: "2.4.3.2.1.3", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ACSC--", desc_kor: "화력지원지역(FSA)(원형)", desc_eng: "Fire,support,area,(FSA),,Circular" }
                                    ]
                                },
                                {
                                    id: "2.4.3.2.2",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "F",
                                    status: "*",
                                    modifier: "ACA---",
                                    desc_kor: "공역협조지역(ACA)",
                                    desc_eng: "Airspace,coordination,area,(ACA)",
                                    children: [
                                        { id: "2.4.3.2.2.1", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ACAI--", desc_kor: "공역협조지역(ACA)(다각형)", desc_eng: "Airspace,coordination,area,(ACA),,Irregular" },
                                        { id: "2.4.3.2.2.2", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ACAR--", desc_kor: "공역협조지역(ACA)(사각형)", desc_eng: "Airspace,coordination,area,(ACA),,Rectangular" },
                                        { id: "2.4.3.2.2.3", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ACAC--", desc_kor: "공역협조지역(ACA)(원형)", desc_eng: "Airspace,coordination,area,(ACA),,Circular" }
                                    ]
                                },
                                {
                                    id: "2.4.3.2.3",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "F",
                                    status: "*",
                                    modifier: "ACF---",
                                    desc_kor: "자유사격지역(FFA)",
                                    desc_eng: "Free,fire,area,(FFA)",
                                    children: [
                                        { id: "2.4.3.2.3.1", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ACFI--", desc_kor: "자유사격지역(FFA)(다각형)", desc_eng: "Free,fire,area,(FFA),,Irregular" },
                                        { id: "2.4.3.2.3.2", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ACFR--", desc_kor: "자유사격지역(FFA)(사각형)", desc_eng: "Free,fire,area,(FFA),,Rectangular" },
                                        { id: "2.4.3.2.3.3", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ACFC--", desc_kor: "자유사격지역(FFA)(원형)", desc_eng: "Free,fire,area,(FFA),,Circular" }
                                    ]
                                },
                                {
                                    id: "2.4.3.2.4",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "F",
                                    status: "*",
                                    modifier: "ACN---",
                                    desc_kor: "화력금지지역(NFA)",
                                    desc_eng: "No-fire,area,(NFA)",
                                    children: [
                                        { id: "2.4.3.2.4.1", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ACNI--", desc_kor: "화력금지지역(NFA)(다각형)", desc_eng: "No,fire,area,(NFA),,Irregular" },
                                        { id: "2.4.3.2.4.2", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ACNR--", desc_kor: "화력금지지역(NFA)(사각형)", desc_eng: "No,fire,area,(NFA),,Rectangular" },
                                        { id: "2.4.3.2.4.3", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ACNC--", desc_kor: "화력금지지역(NFA)(원형)", desc_eng: "No,fire,area,(NFA),,Circular" }
                                    ]
                                },
                                {
                                    id: "2.4.3.2.5",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "F",
                                    status: "*",
                                    modifier: "ACR---",
                                    desc_kor: "화력제한지역(RFA)",
                                    desc_eng: "Restrictive,fire,area,(RFA)",
                                    children: [
                                        { id: "2.4.3.2.5.1", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ACRI--", desc_kor: "화력제한지역(RFA)(다각형)", desc_eng: "Restrictive,fire,area,(RFA),,Irregular" },
                                        { id: "2.4.3.2.5.2", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ACRR--", desc_kor: "화력제한지역(RFA)(사각형)", desc_eng: "Restrictive,fire,area,(RFA),,Rectangular" },
                                        { id: "2.4.3.2.5.3", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ACRC--", desc_kor: "화력제한지역(RFA)(원형)", desc_eng: "Restrictive,fire,area,(RFA),,Circular" }
                                    ]
                                },
                                {
                                    id: "2.4.3.2.6",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "F",
                                    status: "*",
                                    modifier: "ACP---",
                                    desc_kor: "포진지지역(PAA)",
                                    desc_eng: "Position,area,for,artillery,(PAA)",
                                    children: [
                                        { id: "2.4.3.2.6.1", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ACPR--", desc_kor: "포진지지역(PAA)(사각형)", desc_eng: "Position,area,for,artillery,(PAA),,Rectangular" },
                                        { id: "2.4.3.2.6.2", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ACPC--", desc_kor: "포진지지역(PAA)(원형)", desc_eng: "Position,area,for,artillery,(PAA),,Circular" }
                                    ]
                                },
                                {
                                    id: "2.4.3.2.7",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "F",
                                    status: "*",
                                    modifier: "ACE---",
                                    desc_kor: "센서지역",
                                    desc_eng: "Sensor,zone",
                                    children: [
                                        { id: "2.4.3.2.7.1", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ACEI--", desc_kor: "센서지역(다각형)", desc_eng: "Sensor,zone,,Irregular" },
                                        { id: "2.4.3.2.7.2", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ACER--", desc_kor: "센서지역(사각형)", desc_eng: "Sensor,zone,,Rectangular" },
                                        { id: "2.4.3.2.7.3", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ACEC--", desc_kor: "센서지역(원형)", desc_eng: "Sensor,zone,,Circular" }
                                    ]
                                },
                                {
                                    id: "2.4.3.2.8",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "F",
                                    status: "*",
                                    modifier: "ACD---",
                                    desc_kor: "사강지역(DA)",
                                    desc_eng: "Dead,space,area,(DA)",
                                    children: [
                                        { id: "2.4.3.2.8.1", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ACDI--", desc_kor: "사강지역(DA)(다각형)", desc_eng: "Dead,space,area,(DA),,Irregular" },
                                        { id: "2.4.3.2.8.2", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ACDR--", desc_kor: "사강지역(DA)(사각형)", desc_eng: "Dead,space,area,(DA),,Rectangular" },
                                        { id: "2.4.3.2.8.3", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ACDC--", desc_kor: "사강지역(DA)(원형)", desc_eng: "Dead,space,area,(DA),,Circular" }
                                    ]
                                },
                                {
                                    id: "2.4.3.2.9",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "F",
                                    status: "*",
                                    modifier: "ACZ---",
                                    desc_kor: "책임구역(ZOR)",
                                    desc_eng: "Zone,of,responsibility,(ZOR)",
                                    children: [
                                        { id: "2.4.3.2.9.1", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ACZI--", desc_kor: "책임구역(ZOR)(다각형)", desc_eng: "Zone,of,responsibility,(ZOR),,Irregular" },
                                        { id: "2.4.3.2.9.2", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ACZR--", desc_kor: "책임구역(ZOR)(사각형)", desc_eng: "Zone,of,responsibility,(ZOR),,Rectangular" },
                                        { id: "2.4.3.2.9.3", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ACZC--", desc_kor: "책임구역(ZOR)(원형)", desc_eng: "Zone,of,responsibility,(ZOR),,Circular" }
                                    ]
                                },
                                {
                                    id: "2.4.3.2.10",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "F",
                                    status: "*",
                                    modifier: "ACB---",
                                    desc_kor: "표적식별지역(TBA)",
                                    desc_eng: "Target,build-up,area,(TBA)",
                                    children: [
                                        { id: "2.4.3.2.10.1", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ACBI--", desc_kor: "표적식별지역(TBA)(다각형)", desc_eng: "Target,build,up,area,(TBA),,Irregular" },
                                        { id: "2.4.3.2.10.2", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ACBR--", desc_kor: "표적식별지역(TBA)(사각형)", desc_eng: "Target,build,up,area,(TBA),,Rectangular" },
                                        { id: "2.4.3.2.10.3", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ACBC--", desc_kor: "표적식별지역(TBA)(원형)", desc_eng: "Target,build,up,area,(TBA),,Circular" }
                                    ]
                                },
                                {
                                    id: "2.4.3.2.11",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "F",
                                    status: "*",
                                    modifier: "ACV---",
                                    desc_kor: "표적평가지역(TVAR)",
                                    desc_eng: "Target,value,area,(TVAR)",
                                    children: [
                                        { id: "2.4.3.2.11.1", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ACVI--", desc_kor: "표적평가지역(TVAR)(다각형)", desc_eng: "Target,value,area,(TVAR),,Irregular" },
                                        { id: "2.4.3.2.11.2", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ACVR--", desc_kor: "표적평가지역(TVAR)(사각형)", desc_eng: "Target,value,area,(TVAR),,Rectangular" },
                                        { id: "2.4.3.2.11.3", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ACVC--", desc_kor: "표적평가지역(TVAR)(원형)", desc_eng: "Target,value,area,(TVAR),,Circular" }
                                    ]
                                },
                                { id: "2.4.3.2.12", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ACT---", desc_kor: "단말유도 군수품 수신구역", desc_eng: "Terminally,guided,munition,footprint,(TGMF)" },
                                {
                                    id: "2.4.3.2.13",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "F",
                                    status: "*",
                                    modifier: "ACC---",
                                    desc_kor: "화생방정찰지역",
                                    desc_eng: "CBRN,reconnaissance,area",
                                    children: [
                                        { id: "2.4.3.2.13.1", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ACCI--", desc_kor: "화생방정찰지역(다각형)", desc_eng: "CBRN,reconnaissance,area,,Irregular" }
                                    ]
                                },
                                {
                                    id: "2.4.3.2.14",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "F",
                                    status: "*",
                                    modifier: "ACG---",
                                    desc_kor: "화생방제독지역",
                                    desc_eng: "CBRN,detoxification,area",
                                    children: [
                                        { id: "2.4.3.2.14.1", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "ACGI--", desc_kor: "화생방제독지역(다각형)", desc_eng: "CBRN,detoxification,area,,Irregular" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "2.4.3.3",
                            type: "G",
                            affiliation: "*",
                            battlefield: "F",
                            status: "*",
                            modifier: "AZ----",
                            desc_kor: "표적획득지역",
                            desc_eng: "Target,acquisition,zones",
                            children: [{
                                    id: "2.4.3.3.1",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "F",
                                    status: "*",
                                    modifier: "AZI---",
                                    desc_kor: "포병표적정보구역(ATI)",
                                    desc_eng: "Artillery,target,intelligence,(ATI),zone",
                                    children: [
                                        { id: "2.4.3.3.1.1", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "AZII--", desc_kor: "포병표적정보구역(ATI)(다각형)", desc_eng: "Artillery,target,intelligence,(ATI),zone,,Irregular" },
                                        { id: "2.4.3.3.1.2", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "AZIR--", desc_kor: "포병표적정보구역(ATI)(사각형)", desc_eng: "Artillery,target,intelligence,(ATI),zone,,Rectangular" }
                                    ]
                                },
                                {
                                    id: "2.4.3.3.2",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "F",
                                    status: "*",
                                    modifier: "AZX---",
                                    desc_kor: "화력요청구역(CFFZ)",
                                    desc_eng: "Call,for,fire,zone,(CFFZ)",
                                    children: [
                                        { id: "2.4.3.3.2.1", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "AZXI--", desc_kor: "화력요청구역(CFFZ)(다각형)", desc_eng: "Call,for,fire,zone,(CFFZ),,Irregular" },
                                        { id: "2.4.3.3.2.2", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "AZXR--", desc_kor: "화력요청구역(CFFZ)(사각형)", desc_eng: "Call,for,fire,zone,(CFFZ),,Rectangular" }
                                    ]
                                },
                                {
                                    id: "2.4.3.3.3",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "F",
                                    status: "*",
                                    modifier: "AZC---",
                                    desc_kor: "검열구역",
                                    desc_eng: "Censor,zone",
                                    children: [
                                        { id: "2.4.3.3.3.1", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "AZCI--", desc_kor: "검열구역(다각형)", desc_eng: "Censor,zone,,Irregular" },
                                        { id: "2.4.3.3.3.2", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "AZCR--", desc_kor: "검열구역(사각형)", desc_eng: "Censor,zone,,Rectangular" }
                                    ]
                                },
                                {
                                    id: "2.4.3.3.4",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "F",
                                    status: "*",
                                    modifier: "AZF---",
                                    desc_kor: "아군확인구역(CFZ)",
                                    desc_eng: "Critical,friendly,zone,(CFZ)",
                                    children: [
                                        { id: "2.4.3.3.4.1", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "AZFI--", desc_kor: "아군확인구역(CFZ)(다각형)", desc_eng: "Critical,friendly,zone,(CFZ),,Irregular" },
                                        { id: "2.4.3.3.4.2", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "AZFR--", desc_kor: "아군확인구역(CFZ)(사각형)", desc_eng: "Critical,friendly,zone,(CFZ),,Rectangular" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "2.4.3.4",
                            type: "G",
                            affiliation: "*",
                            battlefield: "F",
                            status: "*",
                            modifier: "AX----",
                            desc_kor: "무기/센서 유효영역",
                            desc_eng: "Weapon/sensor,range,fans",
                            children: [
                                { id: "2.4.3.4.1", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "AXC---", desc_kor: "무기/센서 유효영역(원형)", desc_eng: "Weapon/sensor,range,fan,,Circular" },
                                { id: "2.4.3.4.2", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "AXS---", desc_kor: "무기/센서 유효영역(섹터)", desc_eng: "Weapon/sensor,range,fan,,Sector" }
                            ]
                        },
                        {
                            id: "2.4.3.5",
                            type: "G",
                            affiliation: "*",
                            battlefield: "F",
                            status: "*",
                            modifier: "AK----",
                            desc_kor: "킬박스",
                            desc_eng: "Kill,box",
                            children: [{
                                    id: "2.4.3.5.1",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "F",
                                    status: "*",
                                    modifier: "AKB---",
                                    desc_kor: "아군 킬박스",
                                    desc_eng: "Blue,kill,box,(BKB)",
                                    children: [
                                        { id: "2.4.3.5.1.1", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "AKBC--", desc_kor: "아군 킬박스(원형)", desc_eng: "Blue,kill,box,,Circular" },
                                        { id: "2.4.3.5.1.2", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "AKBI--", desc_kor: "아군 킬박스(다각형)", desc_eng: "Blue,kill,box,,Irregular" },
                                        { id: "2.4.3.5.1.3", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "AKBR--", desc_kor: "아군 킬박스(사각형)", desc_eng: "Blue,kill,box,,Rectangular" }
                                    ]
                                },
                                {
                                    id: "2.4.3.5.2",
                                    type: "G",
                                    affiliation: "*",
                                    battlefield: "F",
                                    status: "*",
                                    modifier: "AKP---",
                                    desc_kor: "적군 킬박스",
                                    desc_eng: "Purple,kill,box,(PKB)",
                                    children: [
                                        { id: "2.4.3.5.2.1", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "AKPC--", desc_kor: "적군 킬박스(원형)", desc_eng: "Purple,kill,box,,Circular" },
                                        { id: "2.4.3.5.2.2", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "AKPI--", desc_kor: "적군 킬박스(다각형)", desc_eng: "Purple,kill,box,,Irregular" },
                                        { id: "2.4.3.5.2.3", type: "G", affiliation: "*", battlefield: "F", status: "*", modifier: "AKPR--", desc_kor: "적군 킬박스(사각형)", desc_eng: "Purple,kill,box,,Rectangular" }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "2.5",
            type: "G",
            affiliation: "*",
            battlefield: "S",
            status: "*",
            modifier: "------",
            desc_kor: "전투근무지원",
            desc_eng: "Combat,service,support",
            children: [{
                    id: "2.5.1",
                    type: "G",
                    affiliation: "*",
                    battlefield: "S",
                    status: "*",
                    modifier: "P-----",
                    desc_kor: "점",
                    desc_eng: "Points",
                    children: [
                        { id: "2.5.1.1", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "PX----", desc_kor: "구급전환지점", desc_eng: "Ambulance,exchange,point" },
                        { id: "2.5.1.2", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "PC----", desc_kor: "폐품(재활용)활용지점", desc_eng: "Cannibalization,point" },
                        { id: "2.5.1.3", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "PY----", desc_kor: "사상자수집소", desc_eng: "Casualty,collection,point" },
                        { id: "2.5.1.4", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "PT----", desc_kor: "민간인수집소", desc_eng: "Civilian,collection,point" },
                        { id: "2.5.1.5", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "PD----", desc_kor: "억류자수용소", desc_eng: "Detainee,collection,point" },
                        { id: "2.5.1.6", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "PE----", desc_kor: "적포로수집소", desc_eng: "Enemy,prisoner,of,war,(EPW),collection,point" },
                        { id: "2.5.1.7", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "PL----", desc_kor: "군수불출지점", desc_eng: "Logistics,release,point,(LRP)" },
                        { id: "2.5.1.8", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "PM----", desc_kor: "정비수집소", desc_eng: "Maintenance,collection,point" },
                        { id: "2.5.1.9", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "PR----", desc_kor: "재무장,재급유,재보급지점", desc_eng: "Rearm,,refuel,and,resupply,point" },
                        { id: "2.5.1.10", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "PU----", desc_kor: "이동재급유지점", desc_eng: "Refuel,on,the,move,(ROM),point" },
                        { id: "2.5.1.11", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "PO----", desc_kor: "교통통제소", desc_eng: "Traffic,control,post,(TCP)" },
                        { id: "2.5.1.12", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "PI----", desc_kor: "트레일러전달지점", desc_eng: "Trailer,transfer,point" },
                        { id: "2.5.1.13", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "PN----", desc_kor: "부대정비수집지점", desc_eng: "Unit,maintenance,collection,point" },
                        {
                            id: "2.5.1.14",
                            type: "G",
                            affiliation: "*",
                            battlefield: "S",
                            status: "*",
                            modifier: "PS----",
                            desc_kor: "보급지점",
                            desc_eng: "Supply,points",
                            children: [
                                { id: "2.5.1.14.1", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "PSZ---", desc_kor: "일반", desc_eng: "General" },
                                { id: "2.5.1.14.2", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "PSA---", desc_kor: "1종-식량", desc_eng: "Class,I" },
                                { id: "2.5.1.14.3", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "PSB---", desc_kor: "2종-물자", desc_eng: "Class,II" },
                                { id: "2.5.1.14.4", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "PSC---", desc_kor: "3종-유류", desc_eng: "Class,III" },
                                { id: "2.5.1.14.5", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "PSD---", desc_kor: "4종-자재", desc_eng: "Class,IV" },
                                { id: "2.5.1.14.6", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "PSE---", desc_kor: "5종-탄약", desc_eng: "Class,V" },
                                { id: "2.5.1.14.7", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "PSF---", desc_kor: "6종-PX", desc_eng: "Class,VI" },
                                { id: "2.5.1.14.8", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "PSG---", desc_kor: "7종-장비", desc_eng: "Class,VII" },
                                { id: "2.5.1.14.9", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "PSH---", desc_kor: "8종-의료", desc_eng: "Class,VIII" },
                                { id: "2.5.1.14.10", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "PSI---", desc_kor: "9종-수리부속", desc_eng: "Class,IX" },
                                { id: "2.5.1.14.11", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "PSJ---", desc_kor: "10종-기타", desc_eng: "Class,X" },
                                { id: "2.5.1.14.12", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "PSK---", desc_kor: "급수탑", desc_eng: "급수탑" },
                                { id: "2.5.1.14.13", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "PSL---", desc_kor: "석탄탑", desc_eng: "석탄탑" }
                            ]
                        },
                        {
                            id: "2.5.1.15",
                            type: "G",
                            affiliation: "*",
                            battlefield: "S",
                            status: "*",
                            modifier: "PA----",
                            desc_kor: "탄약지점",
                            desc_eng: "Ammunition,points",
                            children: [
                                { id: "2.5.1.15.1", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "PAS---", desc_kor: "탄약보급소", desc_eng: "Ammunition,supply,point,(ASP)" },
                                { id: "2.5.1.15.2", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "PAT---", desc_kor: "탄약전환보급소", desc_eng: "Ammunition,transfer,point,(ATP)" }
                            ]
                        },
                        { id: "2.5.1.16", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "PQ----", desc_kor: "노상구난반", desc_eng: "Rescue,team" },
                        { id: "2.5.1.17", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "PV----", desc_kor: "검문소", desc_eng: "Checkpoint" }
                    ]
                },
                {
                    id: "2.5.2",
                    type: "G",
                    affiliation: "*",
                    battlefield: "S",
                    status: "*",
                    modifier: "L-----",
                    desc_kor: "선",
                    desc_eng: "Lines",
                    children: [{
                            id: "2.5.2.1",
                            type: "G",
                            affiliation: "*",
                            battlefield: "S",
                            status: "*",
                            modifier: "LC----",
                            desc_kor: "호위",
                            desc_eng: "Convoys",
                            children: [
                                { id: "2.5.2.1.1", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "LCM---", desc_kor: "호위(이동중)", desc_eng: "Moving,convoy" },
                                { id: "2.5.2.1.2", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "LCH---", desc_kor: "호위(정지)", desc_eng: "Halted,convoy" }
                            ]
                        },
                        {
                            id: "2.5.2.2",
                            type: "G",
                            affiliation: "*",
                            battlefield: "S",
                            status: "*",
                            modifier: "LR----",
                            desc_kor: "보급로(병참선)",
                            desc_eng: "Supply,routes",
                            children: [
                                { id: "2.5.2.2.1", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "LRM---", desc_kor: "주보급로", desc_eng: "Main,supply,route" },
                                { id: "2.5.2.2.2", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "LRA---", desc_kor: "예비보급로", desc_eng: "Alternate,supply,route" },
                                { id: "2.5.2.2.3", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "LRO---", desc_kor: "주보급로(일방통행)", desc_eng: "One-way,traffic" },
                                { id: "2.5.2.2.4", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "LRT---", desc_kor: "주보급로(우회통행)", desc_eng: "Alternating,traffic" },
                                { id: "2.5.2.2.5", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "LRW---", desc_kor: "주보급로(양방통행)", desc_eng: "Two-way,traffic" },
                                { id: "2.5.2.2.6", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "LRB---", desc_kor: "통제구간", desc_eng: "통제구간" }
                            ]
                        }
                    ]
                },
                {
                    id: "2.5.3",
                    type: "G",
                    affiliation: "*",
                    battlefield: "S",
                    status: "*",
                    modifier: "A-----",
                    desc_kor: "지역",
                    desc_eng: "Area",
                    children: [
                        { id: "2.5.3.1", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "AD----", desc_kor: "억류자수용지역", desc_eng: "Detainee,holding,area" },
                        { id: "2.5.3.2", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "AE----", desc_kor: "포로수용소", desc_eng: "Enemy,prisoner,of,war,(EPW),holding,area" },
                        { id: "2.5.3.3", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "AR----", desc_kor: "전방 재무장 및 재급유지역", desc_eng: "Forward,arming,and,refueling,area,(FARP)" },
                        { id: "2.5.3.4", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "AH----", desc_kor: "피난민수용지역", desc_eng: "Refugee,holding,area" },
                        {
                            id: "2.5.3.5",
                            type: "G",
                            affiliation: "*",
                            battlefield: "S",
                            status: "*",
                            modifier: "AS----",
                            desc_kor: "지원지역",
                            desc_eng: "Support,areas",
                            children: [
                                { id: "2.5.3.5.1", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "ASB---", desc_kor: "여단지원지역", desc_eng: "Brigade,(BSA)" },
                                { id: "2.5.3.5.2", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "ASD---", desc_kor: "사단지원지역", desc_eng: "Division,(DSA)" },
                                { id: "2.5.3.5.3", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "ASR---", desc_kor: "연대지원지역", desc_eng: "Regimental,(RSA)" },
                                { id: "2.5.3.5.4", type: "G", affiliation: "*", battlefield: "S", status: "*", modifier: "ASA---", desc_kor: "군수지원지역", desc_eng: "군수지원지역" }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "2.6",
            type: "G",
            affiliation: "*",
            battlefield: "O",
            status: "*",
            modifier: "------",
            desc_kor: "기타",
            desc_eng: "Other",
            children: [{
                    id: "2.6.1",
                    type: "G",
                    affiliation: "*",
                    battlefield: "O",
                    status: "*",
                    modifier: "E-----",
                    desc_kor: "비상",
                    desc_eng: "Emergency",
                    children: [
                        { id: "2.6.1.1", type: "G", affiliation: "*", battlefield: "O", status: "*", modifier: "ED----", desc_kor: "불시착", desc_eng: "Ditched,aircraft" },
                        { id: "2.6.1.2", type: "G", affiliation: "*", battlefield: "O", status: "*", modifier: "EP----", desc_kor: "익수자", desc_eng: "Person,in,water" },
                        { id: "2.6.1.3", type: "G", affiliation: "*", battlefield: "O", status: "*", modifier: "EV----", desc_kor: "조난선", desc_eng: "Distressed,vessel" }
                    ]
                },
                {
                    id: "2.6.2",
                    type: "G",
                    affiliation: "*",
                    battlefield: "O",
                    status: "*",
                    modifier: "H-----",
                    desc_kor: "위험",
                    desc_eng: "Hazard",
                    children: [
                        { id: "2.6.2.1", type: "G", affiliation: "*", battlefield: "O", status: "*", modifier: "HM----", desc_kor: "기뢰의심", desc_eng: "Sea,mine-like" },
                        { id: "2.6.2.2", type: "G", affiliation: "*", battlefield: "O", status: "*", modifier: "HN----", desc_kor: "항해장애물", desc_eng: "Navigational" },
                        { id: "2.6.2.3", type: "G", affiliation: "*", battlefield: "O", status: "*", modifier: "HI----", desc_kor: "빙산", desc_eng: "Iceberg" },
                        { id: "2.6.2.4", type: "G", affiliation: "*", battlefield: "O", status: "*", modifier: "HO----", desc_kor: "유전시추장치", desc_eng: "Oil,rig" }
                    ]
                },
                {
                    id: "2.6.3",
                    type: "G",
                    affiliation: "*",
                    battlefield: "O",
                    status: "*",
                    modifier: "S-----",
                    desc_kor: "해저장애물",
                    desc_eng: "Sea,subsurface,returns",
                    children: [{
                            id: "2.6.3.1",
                            type: "G",
                            affiliation: "*",
                            battlefield: "O",
                            status: "*",
                            modifier: "SB----",
                            desc_kor: "해저장애물",
                            desc_eng: "Bottom,return/Non-milco",
                            children: [
                                { id: "2.6.3.1.1", type: "G", affiliation: "*", battlefield: "O", status: "*", modifier: "SBM---", desc_kor: "해저장애물(시설,인공)", desc_eng: "Installation/Manmade" },
                                { id: "2.6.3.1.2", type: "G", affiliation: "*", battlefield: "O", status: "*", modifier: "SBN---", desc_kor: "해저암반,기타 장애물", desc_eng: "Seabed,rock/Stone,,obstacle,,other" },
                                { id: "2.6.3.1.3", type: "G", affiliation: "*", battlefield: "O", status: "*", modifier: "SBW---", desc_kor: "난파선(안전)", desc_eng: "Wreck,,non,dangerous" },
                                { id: "2.6.3.1.4", type: "G", affiliation: "*", battlefield: "O", status: "*", modifier: "SBX---", desc_kor: "난파선(위험)", desc_eng: "Wreck,,dangerous" }
                            ]
                        },
                        { id: "2.6.3.2", type: "G", affiliation: "*", battlefield: "O", status: "*", modifier: "SM----", desc_kor: "해양생물", desc_eng: "Marine,life" },
                        { id: "2.6.3.3", type: "G", affiliation: "*", battlefield: "O", status: "*", modifier: "SS----", desc_kor: "이례적해양현상(해류,항적)", desc_eng: "Sea,anomaly,(Wake,,Current,,Knuckle)" },
                        { id: "2.6.3.4", type: "G", affiliation: "*", battlefield: "O", status: "*", modifier: "SA----", desc_kor: "어초", desc_eng: "어초" }
                    ]
                },
                {
                    id: "2.6.4",
                    type: "G",
                    affiliation: "*",
                    battlefield: "O",
                    status: "*",
                    modifier: "B-----",
                    desc_kor: "방향선",
                    desc_eng: "Bearing,line",
                    children: [
                        { id: "2.6.4.1", type: "G", affiliation: "*", battlefield: "O", status: "*", modifier: "BE----", desc_kor: "전파방향선", desc_eng: "Electronic" },
                        { id: "2.6.4.2", type: "G", affiliation: "*", battlefield: "O", status: "*", modifier: "BA----", desc_kor: "음파방향선", desc_eng: "Acoustic" },
                        { id: "2.6.4.3", type: "G", affiliation: "*", battlefield: "O", status: "*", modifier: "BT----", desc_kor: "어뢰방향선", desc_eng: "Torpedo" },
                        { id: "2.6.4.4", type: "G", affiliation: "*", battlefield: "O", status: "*", modifier: "BO----", desc_kor: "전자광학도청방향선", desc_eng: "Electro-optical,intercept" }
                    ]
                },
                {
                    id: "2.6.5",
                    type: "G",
                    affiliation: "*",
                    battlefield: "O",
                    status: "*",
                    modifier: "F-----",
                    desc_kor: "교차점",
                    desc_eng: "Fix",
                    children: [
                        { id: "2.6.5.1", type: "G", affiliation: "*", battlefield: "O", status: "*", modifier: "FA----", desc_kor: "교차점(음파로부터)", desc_eng: "Acoustic" },
                        { id: "2.6.5.2", type: "G", affiliation: "*", battlefield: "O", status: "*", modifier: "FE----", desc_kor: "교차점(전자기로부터)", desc_eng: "Electro-magnetic" },
                        { id: "2.6.5.3", type: "G", affiliation: "*", battlefield: "O", status: "*", modifier: "FO----", desc_kor: "교차점(전자광학으로부터)", desc_eng: "Electro-optical" }
                    ]
                },
                { id: "2.6.9", type: "G", affiliation: "*", battlefield: "O", status: "*", modifier: "O-----", desc_kor: "폭파지점", desc_eng: "Blasting,Point" },
                { id: "2.6.10", type: "G", affiliation: "*", battlefield: "O", status: "*", modifier: "D-----", desc_kor: "댐방류통제", desc_eng: "Dam" }
            ]
        }
    ]
}];


var { affiliation } = require("./mil_basic");

module.exports = {
    code: "G",
    affiliation: affiliation,
    battlefield: battlefield_OperAct,
    status: status_OperAct,
    unit: unit_OperAct,
    mission: mission_OperAct,
    identifier: functionIdentifier_OperAct
};