/* eslint-disable */

/* index : 2 */
var position_Weather = [
    { code: "A", desc: "대기" },
    { code: "O", desc: "해양" },
    { code: "S", desc: "우주" }
];

/* index : 3,4 */
var fix_Weather = [
    { code: "S-", desc: "고정" },
    { code: "-D", desc: "가변" }
];

/* index : 11,12,13 */
var graphic_Weather = [
    { code: "P--", desc: "점" },
    { code: "-L-", desc: "선" },
    { code: "--A", desc: "영역" }
];

var functionIdentifier_Weather = [{
    id: "3",
    type: "W",
    pos: "-",
    fix: "--",
    graphic: "---",
    modifier: "------",
    desc_kor: "기상 및 해양",
    desc_eng: "METOC",
    children: [{
            id: "3.1",
            type: "W",
            pos: "A",
            fix: "--",
            graphic: "---",
            modifier: "------",
            desc_kor: "대기",
            desc_eng: "Atmospheric",
            children: [{
                    id: "3.1.1",
                    type: "W",
                    pos: "A",
                    fix: "--",
                    graphic: "---",
                    modifier: "P-----",
                    desc_kor: "기압",
                    desc_eng: "Pressure,systems",
                    children: [{
                            id: "3.1.1.1",
                            type: "W",
                            pos: "A",
                            fix: "S-",
                            graphic: "P--",
                            modifier: "PL----",
                            desc_kor: "저기압중심",
                            desc_eng: "Low,pressure,center",
                            children: [
                                { id: "3.1.1.1.1", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "PC----", desc_kor: "싸이클론중심", desc_eng: "Cyclone,center" },
                                { id: "3.1.1.1.2", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "PLT---", desc_kor: "대류권계면 저고도", desc_eng: "Tropopause,low" }
                            ]
                        },
                        {
                            id: "3.1.1.2",
                            type: "W",
                            pos: "A",
                            fix: "S-",
                            graphic: "P--",
                            modifier: "PH----",
                            desc_kor: "고기압중심",
                            desc_eng: "High,pressure,center",
                            children: [
                                { id: "3.1.1.2.1", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "PA----", desc_kor: "고기압중심", desc_eng: "Anticyclone,center" },
                                { id: "3.1.1.2.2", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "PHT---", desc_kor: "대류권계면 고고도", desc_eng: "Tropopause,high" }
                            ]
                        },
                        {
                            id: "3.1.1.3",
                            type: "W",
                            pos: "A",
                            fix: "-D",
                            graphic: "-L-",
                            modifier: "PF----",
                            desc_kor: "전선",
                            desc_eng: "Frontal,systems",
                            children: [{
                                    id: "3.1.1.3.1",
                                    type: "W",
                                    pos: "A",
                                    fix: "-D",
                                    graphic: "-L-",
                                    modifier: "PFC---",
                                    desc_kor: "한랭전선",
                                    desc_eng: "Cold,front",
                                    children: [
                                        { id: "3.1.1.3.1.1", type: "W", pos: "A", fix: "-D", graphic: "-L-", modifier: "PFCU--", desc_kor: "상층 한랭전선", desc_eng: "Upper,cold,front" },
                                        { id: "3.1.1.3.1.2", type: "W", pos: "A", fix: "-D", graphic: "-L-", modifier: "PFC-FG", desc_kor: "한랭전선 발생", desc_eng: "Cold,frontogenesis" },
                                        { id: "3.1.1.3.1.3", type: "W", pos: "A", fix: "-D", graphic: "-L-", modifier: "PFC-FY", desc_kor: "한랭전선 소멸", desc_eng: "Cold,frontolysis" }
                                    ]
                                },
                                {
                                    id: "3.1.1.3.2",
                                    type: "W",
                                    pos: "A",
                                    fix: "-D",
                                    graphic: "-L-",
                                    modifier: "PFW---",
                                    desc_kor: "온난전선",
                                    desc_eng: "Warm,front",
                                    children: [
                                        { id: "3.1.1.3.2.1", type: "W", pos: "A", fix: "-D", graphic: "-L-", modifier: "PFWU--", desc_kor: "상층 온난전선", desc_eng: "Upper,warm,front" },
                                        { id: "3.1.1.3.2.2", type: "W", pos: "A", fix: "-D", graphic: "-L-", modifier: "PFW-FG", desc_kor: "온난전선 발생", desc_eng: "Warm,frontogenesis" },
                                        { id: "3.1.1.3.2.3", type: "W", pos: "A", fix: "-D", graphic: "-L-", modifier: "PFW-FY", desc_kor: "온난전선 소멸", desc_eng: "Warm,frontolysis" }
                                    ]
                                },
                                {
                                    id: "3.1.1.3.3",
                                    type: "W",
                                    pos: "A",
                                    fix: "-D",
                                    graphic: "-L-",
                                    modifier: "PFO---",
                                    desc_kor: "폐색전선",
                                    desc_eng: "Occluded,front",
                                    children: [
                                        { id: "3.1.1.3.3.1", type: "W", pos: "A", fix: "-D", graphic: "-L-", modifier: "PFOU--", desc_kor: "상층 폐색전선", desc_eng: "Upper,occluded,front" },
                                        { id: "3.1.1.3.3.2", type: "W", pos: "A", fix: "-D", graphic: "-L-", modifier: "PFO-FY", desc_kor: "폐색전선 소멸", desc_eng: "Occluded,frontolysis" }
                                    ]
                                },
                                {
                                    id: "3.1.1.3.4",
                                    type: "W",
                                    pos: "A",
                                    fix: "-D",
                                    graphic: "-L-",
                                    modifier: "PFS---",
                                    desc_kor: "정체전선",
                                    desc_eng: "Stationary,front",
                                    children: [
                                        { id: "3.1.1.3.4.1", type: "W", pos: "A", fix: "-D", graphic: "-L-", modifier: "PFSU--", desc_kor: "상층 정체전선", desc_eng: "Upper,stationary,front" },
                                        { id: "3.1.1.3.4.2", type: "W", pos: "A", fix: "-D", graphic: "-L-", modifier: "PFS-FG", desc_kor: "정체전선 발생", desc_eng: "Stationary,frontogenesis" },
                                        { id: "3.1.1.3.4.3", type: "W", pos: "A", fix: "-D", graphic: "-L-", modifier: "PFS-FY", desc_kor: "정체전선 소멸", desc_eng: "Stationary,frontolysis" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "3.1.1.4",
                            type: "W",
                            pos: "A",
                            fix: "--",
                            graphic: "---",
                            modifier: "PX----",
                            desc_kor: "선",
                            desc_eng: "Lines",
                            children: [
                                { id: "3.1.1.4.1", type: "W", pos: "A", fix: "-D", graphic: "-L-", modifier: "PXT---", desc_kor: "기압골", desc_eng: "Trough,axis" },
                                { id: "3.1.1.4.2", type: "W", pos: "A", fix: "-D", graphic: "-L-", modifier: "PXR---", desc_kor: "기압마루", desc_eng: "Ridge,axis" },
                                { id: "3.1.1.4.3", type: "W", pos: "A", fix: "-D", graphic: "-L-", modifier: "PXSQ--", desc_kor: "강한돌풍선", desc_eng: "Severe,squall,line" },
                                { id: "3.1.1.4.4", type: "W", pos: "A", fix: "-D", graphic: "-L-", modifier: "PXIL--", desc_kor: "대기불안정선", desc_eng: "Instability,line" },
                                { id: "3.1.1.4.5", type: "W", pos: "A", fix: "-D", graphic: "-L-", modifier: "PXSH--", desc_kor: "측밀림선", desc_eng: "Shear,line" },
                                { id: "3.1.1.4.6", type: "W", pos: "A", fix: "-D", graphic: "-L-", modifier: "PXITCZ", desc_kor: "열대수렴대(ITCZ)", desc_eng: "Inter-tropical,convergance,zone" },
                                { id: "3.1.1.4.7", type: "W", pos: "A", fix: "-D", graphic: "-L-", modifier: "PXCV--", desc_kor: "수렴선", desc_eng: "Convergance,line" },
                                { id: "3.1.1.4.8", type: "W", pos: "A", fix: "-D", graphic: "-L-", modifier: "PXITD-", desc_kor: "열대불연속(ITD)", desc_eng: "Inter-tropical,discontinuity" }
                            ]
                        }
                    ]
                },
                {
                    id: "3.1.2",
                    type: "W",
                    pos: "A",
                    fix: "--",
                    graphic: "---",
                    modifier: "T-----",
                    desc_kor: "난기류",
                    desc_eng: "Turbulence",
                    children: [
                        { id: "3.1.2.1", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "TL----", desc_kor: "난기류(약)", desc_eng: "Turbulence,-,Light" },
                        { id: "3.1.2.2", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "TM----", desc_kor: "난기류(중)", desc_eng: "Turbulence,-,Moderate" },
                        { id: "3.1.2.3", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "TS----", desc_kor: "난기류(강)", desc_eng: "Turbulence,-,Severe" },
                        { id: "3.1.2.4", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "TE----", desc_kor: "난기류(매우강)", desc_eng: "Turbulence,-,Extreme" },
                        { id: "3.1.2.5", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "T-MW--", desc_kor: "산악파", desc_eng: "Mountain,waves" }
                    ]
                },
                {
                    id: "3.1.3",
                    type: "W",
                    pos: "A",
                    fix: "--",
                    graphic: "---",
                    modifier: "I-----",
                    desc_kor: "착빙",
                    desc_eng: "Icing",
                    children: [{
                            id: "3.1.3.1",
                            type: "W",
                            pos: "A",
                            fix: "S-",
                            graphic: "P--",
                            modifier: "IC----",
                            desc_kor: "결빙",
                            desc_eng: "Clear,icing",
                            children: [
                                { id: "3.1.3.1.1", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "ICL---", desc_kor: "결빙(약)", desc_eng: "Clear,icing,-,Light" },
                                { id: "3.1.3.1.2", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "ICM---", desc_kor: "결빙(중)", desc_eng: "Clear,icing,-,Moderate" },
                                { id: "3.1.3.1.3", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "ICS---", desc_kor: "결빙(강)", desc_eng: "Clear,icing,-,Severe" }
                            ]
                        },
                        {
                            id: "3.1.3.2",
                            type: "W",
                            pos: "A",
                            fix: "S-",
                            graphic: "P--",
                            modifier: "IR----",
                            desc_kor: "무빙",
                            desc_eng: "Rime,icing",
                            children: [
                                { id: "3.1.3.2.1", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "IRL---", desc_kor: "무빙(약)", desc_eng: "Rime,icing,-,Light" },
                                { id: "3.1.3.2.2", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "IRM---", desc_kor: "무빙(중)", desc_eng: "Rime,icing,-,Moderate" },
                                { id: "3.1.3.2.3", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "IRS---", desc_kor: "무빙(강)", desc_eng: "Rime,icing,-,Severe" }
                            ]
                        },
                        {
                            id: "3.1.3.3",
                            type: "W",
                            pos: "A",
                            fix: "S-",
                            graphic: "P--",
                            modifier: "IM----",
                            desc_kor: "혼빙",
                            desc_eng: "Mixed,icing",
                            children: [
                                { id: "3.1.3.3.1", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "IML---", desc_kor: "혼빙(약)", desc_eng: "Mixed,icing,-,Light" },
                                { id: "3.1.3.3.2", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "IMM---", desc_kor: "혼빙(중)", desc_eng: "Mixed,icing,-,Moderate" },
                                { id: "3.1.3.3.3", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "IMS---", desc_kor: "혼빙(강)", desc_eng: "Mixed,icing,-,Severe" }
                            ]
                        }
                    ]
                },
                {
                    id: "3.1.4",
                    type: "W",
                    pos: "A",
                    fix: "--",
                    graphic: "---",
                    modifier: "W-----",
                    desc_kor: "바람",
                    desc_eng: "Winds",
                    children: [
                        { id: "3.1.4.1", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WC----", desc_kor: "무풍", desc_eng: "Calm,winds" },
                        { id: "3.1.4.2", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WP----", desc_kor: "바람기호", desc_eng: "Wind,plot" },
                        { id: "3.1.4.3", type: "W", pos: "A", fix: "-D", graphic: "-L-", modifier: "WJ----", desc_kor: "제트기류", desc_eng: "Jet,stream" },
                        { id: "3.1.4.4", type: "W", pos: "A", fix: "-D", graphic: "-L-", modifier: "WS----", desc_kor: "기류선", desc_eng: "Stream,line" }
                    ]
                },
                {
                    id: "3.1.5",
                    type: "W",
                    pos: "A",
                    fix: "--",
                    graphic: "---",
                    modifier: "CC----",
                    desc_kor: "구름상태",
                    desc_eng: "Cloud,coverage",
                    children: [{
                        id: "3.1.5.1",
                        type: "W",
                        pos: "A",
                        fix: "--",
                        graphic: "---",
                        modifier: "CCCS--",
                        desc_kor: "구름상태부호",
                        desc_eng: "Cloud,coverage,symbols",
                        children: [
                            { id: "3.1.5.1.1", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "CCCSCS", desc_kor: "맑음", desc_eng: "Clear,sky" },
                            { id: "3.1.5.1.2", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "CCCSFC", desc_kor: "구름조금", desc_eng: "Few,coverage" },
                            { id: "3.1.5.1.3", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "CCCSSC", desc_kor: "구름다소", desc_eng: "Scattered,coverage" },
                            { id: "3.1.5.1.4", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "CCCSBC", desc_kor: "약간흐림", desc_eng: "Broken,coverage" },
                            { id: "3.1.5.1.5", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "CCCSOC", desc_kor: "흐림", desc_eng: "Overcast,coverage" },
                            { id: "3.1.5.1.6", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "CCCSOB", desc_kor: "하늘덮임", desc_eng: "Sky,totally,or,partially,obscured" }
                        ]
                    }]
                },
                {
                    id: "3.1.6",
                    type: "W",
                    pos: "A",
                    fix: "--",
                    graphic: "---",
                    modifier: "WS----",
                    desc_kor: "날씨부호",
                    desc_eng: "Weather,symbols",
                    children: [{
                            id: "3.1.6.1",
                            type: "W",
                            pos: "A",
                            fix: "S-",
                            graphic: "---",
                            modifier: "WSR---",
                            desc_kor: "비",
                            desc_eng: "Rain",
                            children: [
                                { id: "3.1.6.1.1", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSR-LI", desc_kor: "비(간헐-약)", desc_eng: "Rain,-,Intermittent,light" },
                                { id: "3.1.6.1.2", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSR-LC", desc_kor: "비(지속-약)", desc_eng: "Rain,-,Continuous,light" },
                                { id: "3.1.6.1.3", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSR-MI", desc_kor: "비(간헐-중)", desc_eng: "Rain,-,Intermittent,moderate" },
                                { id: "3.1.6.1.4", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSR-MC", desc_kor: "비(지속-중)", desc_eng: "Rain,-,Continuous,moderate" },
                                { id: "3.1.6.1.5", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSR-HI", desc_kor: "비(간헐-강)", desc_eng: "Rain,-,Intermittent,heavy" },
                                { id: "3.1.6.1.6", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSR-HC", desc_kor: "비(지속-강)", desc_eng: "Rain,-,Continuous,heavy" }
                            ]
                        },
                        {
                            id: "3.1.6.2",
                            type: "W",
                            pos: "A",
                            fix: "S-",
                            graphic: "---",
                            modifier: "WSRF--",
                            desc_kor: "동우",
                            desc_eng: "Freezing,rain",
                            children: [
                                { id: "3.1.6.2.1", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSRFL-", desc_kor: "동우(약)", desc_eng: "Freezing,rain,-,Light" },
                                { id: "3.1.6.2.2", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSRFMH", desc_kor: "동우(중/강)", desc_eng: "Freezing,rain,-,Moderate/Heavy" }
                            ]
                        },
                        {
                            id: "3.1.6.3",
                            type: "W",
                            pos: "A",
                            fix: "S-",
                            graphic: "---",
                            modifier: "WSRS--",
                            desc_kor: "소나기",
                            desc_eng: "Rain,showers",
                            children: [
                                { id: "3.1.6.3.1", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSRSL-", desc_kor: "소나기(약)", desc_eng: "Rain,showers,-,Light" },
                                { id: "3.1.6.3.2", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSRSMH", desc_kor: "소나기(중/강)", desc_eng: "Rain,showers,-,Moderate/Heavy" },
                                { id: "3.1.6.3.3", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSRST-", desc_kor: "소나기(폭우)", desc_eng: "Rain,showers,-,Torrential" }
                            ]
                        },
                        {
                            id: "3.1.6.4",
                            type: "W",
                            pos: "A",
                            fix: "S-",
                            graphic: "---",
                            modifier: "WSD---",
                            desc_kor: "가랑비",
                            desc_eng: "Drizzle",
                            children: [{
                                    id: "3.1.6.4.1",
                                    type: "W",
                                    pos: "A",
                                    fix: "S-",
                                    graphic: "P--",
                                    modifier: "WSD-LI",
                                    desc_kor: "가랑비(간헐-약)",
                                    desc_eng: "Drizzle,-,Intermittent,light",
                                    children: [
                                        { id: "3.1.6.4.1.1", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSD-LC", desc_kor: "가랑비(지속-약)", desc_eng: "Drizzle,-,Continuous,light" }
                                    ]
                                },
                                {
                                    id: "3.1.6.4.2",
                                    type: "W",
                                    pos: "A",
                                    fix: "S-",
                                    graphic: "P--",
                                    modifier: "WSD-MI",
                                    desc_kor: "가랑비(간헐-중)",
                                    desc_eng: "Drizzle,-,Intermittent,moderate",
                                    children: [
                                        { id: "3.1.6.4.2.1", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSD-MC", desc_kor: "가랑비(지속-중)", desc_eng: "Drizzle,-,Continuous,moderate" }
                                    ]
                                },
                                {
                                    id: "3.1.6.4.3",
                                    type: "W",
                                    pos: "A",
                                    fix: "S-",
                                    graphic: "P--",
                                    modifier: "WSD-HI",
                                    desc_kor: "가랑비(간헐-강)",
                                    desc_eng: "Drizzle,-,Intermittent,heavy",
                                    children: [
                                        { id: "3.1.6.4.3.1", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSD-HC", desc_kor: "가랑비(지속-강)", desc_eng: "Drizzle,-,Continuous,heavy" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "3.1.6.5",
                            type: "W",
                            pos: "A",
                            fix: "S-",
                            graphic: "---",
                            modifier: "WSDF--",
                            desc_kor: "진눈깨비",
                            desc_eng: "Freezing,drizzle",
                            children: [
                                { id: "3.1.6.5.1", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSDFL-", desc_kor: "진눈깨비(약)", desc_eng: "Freezing,drizzle,-,Light" },
                                { id: "3.1.6.5.2", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSDFMH", desc_kor: "진눈깨비(중/강)", desc_eng: "Freezing,drizzle,-,Moderate/Heavy" }
                            ]
                        },
                        {
                            id: "3.1.6.6",
                            type: "W",
                            pos: "A",
                            fix: "S-",
                            graphic: "---",
                            modifier: "WSM---",
                            desc_kor: "눈비혼합",
                            desc_eng: "Rain,and,snow,mixed",
                            children: [
                                { id: "3.1.6.6.1", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSM-L-", desc_kor: "비/가랑비/눈(약)", desc_eng: "Rain,or,drizzle,and,snow,-,Light" },
                                { id: "3.1.6.6.2", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSM-MH", desc_kor: "비/가랑비/눈(중/강)", desc_eng: "Rain,or,drizzle,and,snow,-,Moderate/Heavy" },
                                { id: "3.1.6.6.3", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSMSL-", desc_kor: "소나기/소낙눈(약)", desc_eng: "Rain,and,snow,showers,-,Light" },
                                { id: "3.1.6.6.4", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSMSMH", desc_kor: "소나기/소낙눈(중/강)", desc_eng: "Rain,and,snow,showers,-,Moderate/Heavy" }
                            ]
                        },
                        {
                            id: "3.1.6.7",
                            type: "W",
                            pos: "A",
                            fix: "S-",
                            graphic: "---",
                            modifier: "WSS---",
                            desc_kor: "눈",
                            desc_eng: "Snow",
                            children: [{
                                    id: "3.1.6.7.1",
                                    type: "W",
                                    pos: "A",
                                    fix: "S-",
                                    graphic: "P--",
                                    modifier: "WSS-LI",
                                    desc_kor: "눈(간헐-약)",
                                    desc_eng: "Snow,-,intermittent,light",
                                    children: [
                                        { id: "3.1.6.7.1.1", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSS-LC", desc_kor: "눈(지속-약)", desc_eng: "Snow,-,continuous,light" }
                                    ]
                                },
                                {
                                    id: "3.1.6.7.2",
                                    type: "W",
                                    pos: "A",
                                    fix: "S-",
                                    graphic: "P--",
                                    modifier: "WSS-MI",
                                    desc_kor: "눈(간헐-중)",
                                    desc_eng: "Snow,-,intermittent,moderate",
                                    children: [
                                        { id: "3.1.6.7.2.1", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSS-MC", desc_kor: "눈(지속-중)", desc_eng: "Snow,-,continuous,moderate" }
                                    ]
                                },
                                {
                                    id: "3.1.6.7.3",
                                    type: "W",
                                    pos: "A",
                                    fix: "S-",
                                    graphic: "P--",
                                    modifier: "WSS-HI",
                                    desc_kor: "눈(간헐-강)",
                                    desc_eng: "Snow,-,intermittent,heavy",
                                    children: [
                                        { id: "3.1.6.7.3.1", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSS-HC", desc_kor: "눈(지속-강)", desc_eng: "Snow,-,continuous,heavy" }
                                    ]
                                },
                                { id: "3.1.6.7.4", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSSBLM", desc_kor: "눈보라(풍설)(약/중)", desc_eng: "Blowing,snow,-,Light/Moderate" },
                                { id: "3.1.6.7.5", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSSBH-", desc_kor: "눈보라(강)", desc_eng: "Blowing,snow,-,Heavy" }
                            ]
                        },
                        { id: "3.1.6.8", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSSG--", desc_kor: "싸락눈", desc_eng: "Snow,grains" },
                        {
                            id: "3.1.6.9",
                            type: "W",
                            pos: "A",
                            fix: "S-",
                            graphic: "---",
                            modifier: "WSSS--",
                            desc_kor: "소낙눈",
                            desc_eng: "Snow,showers",
                            children: [
                                { id: "3.1.6.9.1", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSSSL-", desc_kor: "소낙눈(약)", desc_eng: "Snow,showers,-,Light" },
                                { id: "3.1.6.9.2", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSSSMH", desc_kor: "소낙눈(중/강)", desc_eng: "Snow,showers,-,Moderate/Heavy" }
                            ]
                        },
                        {
                            id: "3.1.6.10",
                            type: "W",
                            pos: "A",
                            fix: "S-",
                            graphic: "---",
                            modifier: "WSGR--",
                            desc_kor: "우박",
                            desc_eng: "Hail",
                            children: [
                                { id: "3.1.6.10.1", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSGRL-", desc_kor: "우박(약)", desc_eng: "Hail,-,Light,not,associated,with,thunder" },
                                { id: "3.1.6.10.2", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSGRMH", desc_kor: "우박(중/강)", desc_eng: "Hail,-,Moderate/Heavy,not,associated,with,thunder" }
                            ]
                        },
                        { id: "3.1.6.11", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSIC--", desc_kor: "얼음결정", desc_eng: "Ice,crystals,(Diamond,dust)" },
                        {
                            id: "3.1.6.12",
                            type: "W",
                            pos: "A",
                            fix: "S-",
                            graphic: "---",
                            modifier: "WSPL--",
                            desc_kor: "싸락우박",
                            desc_eng: "Ice,pellets,(Sleet)",
                            children: [
                                { id: "3.1.6.12.1", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSPLL-", desc_kor: "싸락우박(약)", desc_eng: "Ice,pellets,-,Light" },
                                { id: "3.1.6.12.2", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSPLM-", desc_kor: "싸락우박(중)", desc_eng: "Ice,pellets,-,Moderate" },
                                { id: "3.1.6.12.3", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSPLH-", desc_kor: "싸락우박(강)", desc_eng: "Ice,pellets,-,Heavy" }
                            ]
                        },
                        {
                            id: "3.1.6.13",
                            type: "W",
                            pos: "A",
                            fix: "S-",
                            graphic: "---",
                            modifier: "WST---",
                            desc_kor: "폭풍",
                            desc_eng: "Storms",
                            children: [
                                { id: "3.1.6.13.1", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WST-NP", desc_kor: "뇌우", desc_eng: "Thunderstorm,-,No,precipitation" },
                                { id: "3.1.6.13.2", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSTMR-", desc_kor: "뇌우(약~중)(비/눈)", desc_eng: "Thunderstorm,light,to,moderate,with,Rain/Snow,-,No,hail" },
                                { id: "3.1.6.13.3", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSTHR-", desc_kor: "뇌우(강)(비/눈)", desc_eng: "Thunderstorm,heavy,with,Rain/Snow,-,No,hail" },
                                { id: "3.1.6.13.4", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSTMH-", desc_kor: "뇌우(약~중)(우박)", desc_eng: "Thunderstorm,light,to,moderate,-,With,hail" },
                                { id: "3.1.6.13.5", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSTHH-", desc_kor: "뇌우(강)(우박)", desc_eng: "Thunderstorm,heavy,-,With,hail" },
                                { id: "3.1.6.13.6", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WST-FC", desc_kor: "토네이도", desc_eng: "Funnel,cloud,(Tornado/Waterspout)" },
                                { id: "3.1.6.13.7", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WST-SQ", desc_kor: "돌풍", desc_eng: "Squall" },
                                { id: "3.1.6.13.8", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WST-LG", desc_kor: "번개", desc_eng: "Lightning" }
                            ]
                        },
                        {
                            id: "3.1.6.14",
                            type: "W",
                            pos: "A",
                            fix: "S-",
                            graphic: "---",
                            modifier: "WSFG--",
                            desc_kor: "안개",
                            desc_eng: "Fog",
                            children: [
                                { id: "3.1.6.14.1", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSFGPS", desc_kor: "안개(옅은,부분적)", desc_eng: "Fog,-,Shallow,patches" },
                                { id: "3.1.6.14.2", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSFGCS", desc_kor: "안개(옅은,지속적)", desc_eng: "Fog,-,Shallow,continuous" },
                                { id: "3.1.6.14.3", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSFGP-", desc_kor: "안개(부분적)", desc_eng: "Fog,-,Patchy" },
                                { id: "3.1.6.14.4", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSFGSV", desc_kor: "안개(하늘보임)", desc_eng: "Fog,-,Sky,visible" },
                                { id: "3.1.6.14.5", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSFGSO", desc_kor: "안개(하늘가림)", desc_eng: "Fog,-,Sky,obscured" },
                                { id: "3.1.6.14.6", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSFGFV", desc_kor: "얼안개(빙무)(하늘보임)", desc_eng: "Fog,-,Freezing,,Sky,visible" },
                                { id: "3.1.6.14.7", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSFGFO", desc_kor: "얼안개(빙무)(하늘가림)", desc_eng: "Fog,-,Freezing,,Sky,not,visible" }
                            ]
                        },
                        { id: "3.1.6.15", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSBR--", desc_kor: "박무", desc_eng: "Mist" },
                        { id: "3.1.6.16", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSFU--", desc_kor: "연기", desc_eng: "Smoke" },
                        { id: "3.1.6.17", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSHZ--", desc_kor: "연무", desc_eng: "Haze" },
                        {
                            id: "3.1.6.18",
                            type: "W",
                            pos: "A",
                            fix: "S-",
                            graphic: "---",
                            modifier: "WSDS--",
                            desc_kor: "풍진",
                            desc_eng: "Dust,or,sand",
                            children: [
                                { id: "3.1.6.18.1", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSDSLM", desc_kor: "풍진(약~중)", desc_eng: "Dust/Sand,storm,-,Light,to,moderate" },
                                { id: "3.1.6.18.2", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSDSS-", desc_kor: "풍진(강)", desc_eng: "Dust/Sand,storm,-,Severe" },
                                { id: "3.1.6.18.3", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSDD--", desc_kor: "회오리바람", desc_eng: "Dust,devil" },
                                { id: "3.1.6.18.4", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSDB--", desc_kor: "먼지/모래바람", desc_eng: "Blowing,dust,or,sand" }
                            ]
                        },
                        {
                            id: "3.1.6.19",
                            type: "W",
                            pos: "A",
                            fix: "S-",
                            graphic: "---",
                            modifier: "WSTS--",
                            desc_kor: "폭풍체계",
                            desc_eng: "Tropical,storm,systems",
                            children: [
                                { id: "3.1.6.19.1", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSTSD-", desc_kor: "열대성저기압", desc_eng: "Tropical,depression" },
                                { id: "3.1.6.19.2", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSTSS-", desc_kor: "열대폭풍", desc_eng: "Tropical,storm" },
                                { id: "3.1.6.19.3", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSTSH-", desc_kor: "태풍(허리케인)", desc_eng: "Hurricane/Typhoon" },
                                { id: "3.1.6.19.4", type: "W", pos: "A", fix: "-D", graphic: "--A", modifier: "WSTSWA", desc_kor: "열대태풍 영역/일시", desc_eng: "Tropical,storm,wind,areas,and,date/Time,labels" }
                            ]
                        },
                        {
                            id: "3.1.6.20",
                            type: "W",
                            pos: "A",
                            fix: "S-",
                            graphic: "P--",
                            modifier: "WSVE--",
                            desc_kor: "화산폭발",
                            desc_eng: "Volcanic,eruption",
                            children: [
                                { id: "3.1.6.20.1", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSVA--", desc_kor: "화산재", desc_eng: "Volcanic,ash" }
                            ]
                        },
                        { id: "3.1.6.21", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WST-LV", desc_kor: "대류권계면 고도", desc_eng: "Tropopause,level" },
                        { id: "3.1.6.22", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSF-LV", desc_kor: "결빙 고도", desc_eng: "Freezing,level" },
                        { id: "3.1.6.23", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "WSUKP-", desc_kor: "강수미상(형태/밀도)", desc_eng: "Precipitation,of,unknown,type,and,intensity" }
                    ]
                },
                {
                    id: "3.1.7",
                    type: "W",
                    pos: "A",
                    fix: "--",
                    graphic: "---",
                    modifier: "BA----",
                    desc_kor: "기상 상태별 지역",
                    desc_eng: "Bounded,areas,of,weather",
                    children: [
                        { id: "3.1.7.1", type: "W", pos: "A", fix: "-D", graphic: "--A", modifier: "BAIF--", desc_kor: "계기비행 지역", desc_eng: "Instrument,flight,rule,(IFR)" },
                        { id: "3.1.7.2", type: "W", pos: "A", fix: "-D", graphic: "--A", modifier: "BAMV--", desc_kor: "유시계비행한계 지역", desc_eng: "Marginal,visual,flight,rule,(MVFR)" },
                        { id: "3.1.7.3", type: "W", pos: "A", fix: "-D", graphic: "--A", modifier: "BATB--", desc_kor: "난기류 지역", desc_eng: "Turbulence" },
                        { id: "3.1.7.4", type: "W", pos: "A", fix: "-D", graphic: "--A", modifier: "BAI---", desc_kor: "착빙 지역", desc_eng: "Icing" },
                        { id: "3.1.7.5", type: "W", pos: "A", fix: "-D", graphic: "--A", modifier: "BALPNC", desc_kor: "액체형태 강수(비대류성, 연속 또는 간헐) 지역", desc_eng: "Liquid,precipitation,-,Non-convective,continuous,or,intermittent" },
                        { id: "3.1.7.6", type: "W", pos: "A", fix: "-D", graphic: "--A", modifier: "BALPC-", desc_kor: "액체형태 강수(대류성) 지역", desc_eng: "Liquid,precipitation,-,Convective" },
                        { id: "3.1.7.7", type: "W", pos: "A", fix: "-D", graphic: "--A", modifier: "BAFP--", desc_kor: "결빙형태 강수 지역", desc_eng: "Freezing/Frozen,precipitation" },
                        { id: "3.1.7.8", type: "W", pos: "A", fix: "-D", graphic: "--A", modifier: "BAT---", desc_kor: "뇌우지역", desc_eng: "Thunderstorms" },
                        { id: "3.1.7.9", type: "W", pos: "A", fix: "-D", graphic: "--A", modifier: "BAFG--", desc_kor: "안개지역", desc_eng: "Fog" },
                        { id: "3.1.7.10", type: "W", pos: "A", fix: "-D", graphic: "--A", modifier: "BAD---", desc_kor: "풍진지역", desc_eng: "Dust,or,sand" },
                        { id: "3.1.7.11", type: "W", pos: "A", fix: "-D", graphic: "--A", modifier: "BAFF--", desc_kor: "임의지정지역", desc_eng: "Operator-defined,freeform" }
                    ]
                },
                {
                    id: "3.1.8",
                    type: "W",
                    pos: "A",
                    fix: "--",
                    graphic: "---",
                    modifier: "IP----",
                    desc_kor: "등치선",
                    desc_eng: "Isopleths",
                    children: [
                        { id: "3.1.8.1", type: "W", pos: "A", fix: "-D", graphic: "-L-", modifier: "IPIB--", desc_kor: "등압선(표면)", desc_eng: "Isobar,-,Surface" },
                        { id: "3.1.8.2", type: "W", pos: "A", fix: "-D", graphic: "-L-", modifier: "IPCO--", desc_kor: "등압면고도(고층)", desc_eng: "Contour,-,Upper,air" },
                        { id: "3.1.8.3", type: "W", pos: "A", fix: "-D", graphic: "-L-", modifier: "IPIS--", desc_kor: "등온선", desc_eng: "Isotherm" },
                        { id: "3.1.8.4", type: "W", pos: "A", fix: "-D", graphic: "-L-", modifier: "IPIT--", desc_kor: "등풍속선", desc_eng: "Isotach" },
                        { id: "3.1.8.5", type: "W", pos: "A", fix: "-D", graphic: "-L-", modifier: "IPID--", desc_kor: "등이슬점선", desc_eng: "Isodrosotherm" },
                        { id: "3.1.8.6", type: "W", pos: "A", fix: "-D", graphic: "-L-", modifier: "IPTH--", desc_kor: "등겹선", desc_eng: "Thickness" },
                        { id: "3.1.8.7", type: "W", pos: "A", fix: "-D", graphic: "-L-", modifier: "IPFF--", desc_kor: "임의지정등치선", desc_eng: "Operator-defined,freeform" }
                    ]
                },
                {
                    id: "3.1.9",
                    type: "W",
                    pos: "A",
                    fix: "S-",
                    graphic: "---",
                    modifier: "G-----",
                    desc_kor: "지표상태",
                    desc_eng: "State,of,the,ground",
                    children: [{
                            id: "3.1.9.1",
                            type: "W",
                            pos: "A",
                            fix: "S-",
                            graphic: "---",
                            modifier: "GN----",
                            desc_kor: "눈/결빙 없음",
                            desc_eng: "Without,snow,or,measurable,ice,cover",
                            children: [
                                { id: "3.1.9.1.1", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "GND-NC", desc_kor: "지표건조(균열, 주목할만한 먼지, 성긴모래 등이 없음)", desc_eng: "Surface,dry,without,cracks,or,appreciable,dust,or,loose,sand" },
                                { id: "3.1.9.1.2", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "GNM---", desc_kor: "지표습기", desc_eng: "Surface,moist" },
                                { id: "3.1.9.1.3", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "GNW-SW", desc_kor: "지표물기(크고작은 물웅덩이)", desc_eng: "Surface,wet,,standing,water,in,small,or,large,pools" },
                                { id: "3.1.9.1.4", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "GNFL--", desc_kor: "지표홍수", desc_eng: "Surface,flooded" },
                                { id: "3.1.9.1.5", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "GNFZ--", desc_kor: "지표결빙", desc_eng: "Surface,frozen" },
                                { id: "3.1.9.1.6", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "GNG-TI", desc_kor: "지표우빙", desc_eng: "Glaze,(Thin,ice),on,ground" },
                                { id: "3.1.9.1.7", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "GNLDN-", desc_kor: "지표를 완전히 덮지 않는 성긴 먼지/모래", desc_eng: "Loose,dry,dust,or,sand,not,covering,ground,completely" },
                                { id: "3.1.9.1.8", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "GNLDTC", desc_kor: "지표를 얇게 덮는 성긴 먼지/모래", desc_eng: "Thin,loose,dry,dust,or,sand,covering,ground,completely" },
                                { id: "3.1.9.1.9", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "GNLDMC", desc_kor: "지표를 두껍게 덮는 성긴 먼지/모래", desc_eng: "Moderate/Thick,loose,dry,dust,or,sand,covering,ground,completely" },
                                { id: "3.1.9.1.10", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "GNDEWC", desc_kor: "지표 매우건조 및 갈라짐", desc_eng: "Extremely,dry,with,cracks" }
                            ]
                        },
                        {
                            id: "3.1.9.2",
                            type: "W",
                            pos: "A",
                            fix: "S-",
                            graphic: "---",
                            modifier: "GS----",
                            desc_kor: "지표 눈/얼음 덮임",
                            desc_eng: "With,snow,or,measurable,ice,cover",
                            children: [
                                { id: "3.1.9.2.1", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "GSI---", desc_kor: "지표 대부분 얼음 덮임", desc_eng: "Predominately,ice,covered" },
                                { id: "3.1.9.2.2", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "GSSCL-", desc_kor: "지표 반이하 단단한눈 또는 젖은눈 덮임", desc_eng: "Compact,or,wet,snow,(with,or,without,ice),covering,less,than,one-half,of,ground" },
                                { id: "3.1.9.2.3", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "GSSCH-", desc_kor: "지표 반이상 단단한눈 또는 젖은눈 덮임", desc_eng: "Compact,or,wet,snow,(with,or,without,ice),covering,at,least,one-half,ground,,but,ground,not,completely,covered" },
                                { id: "3.1.9.2.4", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "GSSCCE", desc_kor: "지표전체 골고루 단단한눈 또는 젖은눈 덮임", desc_eng: "Even,layer,of,compact,or,wet,snow,covering,ground,completely" },
                                { id: "3.1.9.2.5", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "GSSCCU", desc_kor: "지표전체 불규칙하게 단단한눈 또는 젖은눈 덮임", desc_eng: "Uneven,layer,of,compact,or,wet,snow,covering,ground,completely" },
                                { id: "3.1.9.2.6", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "GSSLL-", desc_kor: "지표 반이하 성기고 마른눈 덮임", desc_eng: "Loose,dry,snow,covering,less,than,one-half,of,ground" },
                                { id: "3.1.9.2.7", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "GSSLH-", desc_kor: "지표 반이상 성기고 마른눈 덮임", desc_eng: "Loose,dry,snow,covering,at,least,one-half,ground,,but,ground,not,completely,covered" },
                                { id: "3.1.9.2.8", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "GSSLCE", desc_kor: "지표전체 골고루 성기고 마른눈 덮임", desc_eng: "Even,layer,of,loose,dry,snow,covering,ground,completely" },
                                { id: "3.1.9.2.9", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "GSSLCU", desc_kor: "지표전체 불규칙하게 성기고 마른눈 덮임", desc_eng: "Uneven,layer,of,loose,dry,snow,covering,ground,completely" },
                                { id: "3.1.9.2.10", type: "W", pos: "A", fix: "S-", graphic: "P--", modifier: "GSSDC-", desc_kor: "지표완전 눈덮임(두꺼운 눈더미)", desc_eng: "Snow,covering,ground,completely;,Deep,drifts" }
                            ]
                        }
                    ]
                },
                {
                    id: "3.1.10",
                    type: "W",
                    pos: "A",
                    fix: "--",
                    graphic: "---",
                    modifier: "F-----",
                    desc_kor: "비행규정",
                    desc_eng: "Flight,rules",
                    children: [
                        { id: "3.1.10.1", type: "W", pos: "A", fix: "--", graphic: "---", modifier: "FI----", desc_kor: "계기상승한도", desc_eng: "Instrument,ceiling" },
                        { id: "3.1.10.2", type: "W", pos: "A", fix: "--", graphic: "---", modifier: "FV----", desc_kor: "시계상승한도", desc_eng: "Visual,ceiling" }
                    ]
                }
            ]
        },
        {
            id: "3.2",
            type: "W",
            pos: "O",
            fix: "--",
            graphic: "---",
            modifier: "------",
            desc_kor: "해양",
            desc_eng: "Oceanic",
            children: [{
                    id: "3.2.1",
                    type: "W",
                    pos: "O",
                    fix: "--",
                    graphic: "---",
                    modifier: "I-----",
                    desc_kor: "얼음",
                    desc_eng: "Ice,systems",
                    children: [{
                            id: "3.2.1.1",
                            type: "W",
                            pos: "O",
                            fix: "S-",
                            graphic: "P--",
                            modifier: "IB----",
                            desc_kor: "빙산군",
                            desc_eng: "Icebergs",
                            children: [
                                { id: "3.2.1.1.1", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "IBM---", desc_kor: "많은 빙산군", desc_eng: "Many,icebergs" },
                                { id: "3.2.1.1.2", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "IBBS--", desc_kor: "빙산띠", desc_eng: "Belts,and,strips" },
                                { id: "3.2.1.1.3", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "IBG---", desc_kor: "빙산(일반)", desc_eng: "Iceberg,-,General" },
                                { id: "3.2.1.1.4", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "IBMG--", desc_kor: "많은 빙산(일반)", desc_eng: "Many,icebergs,-,General" },
                                { id: "3.2.1.1.5", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "IBBB--", desc_kor: "부빙편", desc_eng: "Bergy,bit" },
                                { id: "3.2.1.1.6", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "IBBBM-", desc_kor: "많은 부빙편", desc_eng: "Many,bergy,bits" },
                                { id: "3.2.1.1.7", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "IBGL--", desc_kor: "작은 빙산", desc_eng: "Growler" },
                                { id: "3.2.1.1.8", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "IBGLM-", desc_kor: "작은 빙산(다수)", desc_eng: "Many,growlers" },
                                { id: "3.2.1.1.9", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "IBF---", desc_kor: "부빙", desc_eng: "Floeberg" },
                                { id: "3.2.1.1.10", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "IBII--", desc_kor: "얼음섬", desc_eng: "Ice,island" }
                            ]
                        },
                        {
                            id: "3.2.1.2",
                            type: "W",
                            pos: "O",
                            fix: "--",
                            graphic: "---",
                            modifier: "IC----",
                            desc_kor: "얼음 분포",
                            desc_eng: "Ice,concentration",
                            children: [
                                { id: "3.2.1.2.1", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "ICWB--", desc_kor: "빙산 많음", desc_eng: "Bergy,water" },
                                { id: "3.2.1.2.2", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "ICWR--", desc_kor: "레이다에 포착되는 빙산", desc_eng: "Water,with,radar,targets" },
                                { id: "3.2.1.2.3", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "ICIF--", desc_kor: "빙산 없음", desc_eng: "Ice,free" }
                            ]
                        },
                        {
                            id: "3.2.1.3",
                            type: "W",
                            pos: "O",
                            fix: "--",
                            graphic: "---",
                            modifier: "ID----",
                            desc_kor: "동적 프로세스",
                            desc_eng: "Dynamic,processes",
                            children: [
                                { id: "3.2.1.3.1", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "IDC---", desc_kor: "수렴", desc_eng: "Convergence" },
                                { id: "3.2.1.3.2", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "IDD---", desc_kor: "발산", desc_eng: "Divergence" },
                                { id: "3.2.1.3.3", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "IDS---", desc_kor: "측밀림/측밀림지역", desc_eng: "Shearing,or,shear,zone" },
                                { id: "3.2.1.3.4", type: "W", pos: "O", fix: "-D", graphic: "-L-", modifier: "IDID--", desc_kor: "눈더미(방향)", desc_eng: "Ice,drift,(Direction)" }
                            ]
                        },
                        {
                            id: "3.2.1.4",
                            type: "W",
                            pos: "O",
                            fix: "S-",
                            graphic: "P--",
                            modifier: "II----",
                            desc_kor: "해빙(바다얼음)",
                            desc_eng: "Sea,ice",
                            children: [
                                { id: "3.2.1.4.1", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "IITM--", desc_kor: "해빙두께(관측)", desc_eng: "Ice,thickness,(Observed)" },
                                { id: "3.2.1.4.2", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "IITE--", desc_kor: "해빙두께(추정)", desc_eng: "Ice,thickness,(Estimated)" },
                                { id: "3.2.1.4.3", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "IIP---", desc_kor: "홍수얼음", desc_eng: "Melt,puddles,or,flooded,ice" }
                            ]
                        },
                        {
                            id: "3.2.1.5",
                            type: "W",
                            pos: "O",
                            fix: "--",
                            graphic: "---",
                            modifier: "IL----",
                            desc_kor: "제한",
                            desc_eng: "Limits",
                            children: [
                                { id: "3.2.1.5.1", type: "W", pos: "O", fix: "-D", graphic: "-L-", modifier: "ILOV--", desc_kor: "목측관측 제한", desc_eng: "Limit,of,visual,observation" },
                                { id: "3.2.1.5.2", type: "W", pos: "O", fix: "-D", graphic: "-L-", modifier: "ILUC--", desc_kor: "비행기 아래의 구름", desc_eng: "Limit,of,undercast" },
                                { id: "3.2.1.5.3", type: "W", pos: "O", fix: "-D", graphic: "-L-", modifier: "ILOR--", desc_kor: "레이더 관측 제한", desc_eng: "Limit,of,radar,observation" },
                                { id: "3.2.1.5.4", type: "W", pos: "O", fix: "-D", graphic: "-L-", modifier: "ILIEO-", desc_kor: "관측된 빙산면/경계", desc_eng: "Observed,ice,edge,or,boundary" },
                                { id: "3.2.1.5.5", type: "W", pos: "O", fix: "-D", graphic: "-L-", modifier: "ILIEE-", desc_kor: "추정된 빙산면/경계", desc_eng: "Estimated,ice,edge,or,boundary" },
                                { id: "3.2.1.5.6", type: "W", pos: "O", fix: "-D", graphic: "-L-", modifier: "ILIER-", desc_kor: "레이더 관측 빙산면/경계", desc_eng: "Ice,edge,or,boundary,from,radar" }
                            ]
                        },
                        {
                            id: "3.2.1.6",
                            type: "W",
                            pos: "O",
                            fix: "--",
                            graphic: "---",
                            modifier: "IO----",
                            desc_kor: "얼음 구멍",
                            desc_eng: "Openings,in,the,ice",
                            children: [
                                { id: "3.2.1.6.1", type: "W", pos: "O", fix: "-D", graphic: "-L-", modifier: "IOC---", desc_kor: "균열", desc_eng: "Cracks" },
                                { id: "3.2.1.6.2", type: "W", pos: "O", fix: "-D", graphic: "-L-", modifier: "IOCS--", desc_kor: "특정위치의 균열", desc_eng: "Cracks,at,a,specific,location" },
                                { id: "3.2.1.6.3", type: "W", pos: "O", fix: "-D", graphic: "-L-", modifier: "IOL---", desc_kor: "리드", desc_eng: "Lead" },
                                { id: "3.2.1.6.4", type: "W", pos: "O", fix: "-D", graphic: "-L-", modifier: "IOLF--", desc_kor: "리드(결빙)", desc_eng: "Frozen,lead" }
                            ]
                        },
                        {
                            id: "3.2.1.7",
                            type: "W",
                            pos: "O",
                            fix: "S-",
                            graphic: "P--",
                            modifier: "ISC---",
                            desc_kor: "적설",
                            desc_eng: "Snow,cover",
                            children: [
                                { id: "3.2.1.7.1", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "ISS---", desc_kor: "설면융기(방향)", desc_eng: "Sastrugi,(with,orientation)" }
                            ]
                        },
                        {
                            id: "3.2.1.8",
                            type: "W",
                            pos: "O",
                            fix: "--",
                            graphic: "---",
                            modifier: "IT----",
                            desc_kor: "지형특성",
                            desc_eng: "Topographical,features",
                            children: [
                                { id: "3.2.1.8.1", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "ITRH--", desc_kor: "산마루/작은언덕", desc_eng: "Ridges,or,hummocks" },
                                { id: "3.2.1.8.2", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "ITR---", desc_kor: "급류", desc_eng: "Rafting" },
                                { id: "3.2.1.8.3", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "ITBB--", desc_kor: "빽빽한 유빙조각", desc_eng: "Jammed,brash,barrier" }
                            ]
                        }
                    ]
                },
                {
                    id: "3.2.2",
                    type: "W",
                    pos: "O",
                    fix: "--",
                    graphic: "---",
                    modifier: "H-----",
                    desc_kor: "수부",
                    desc_eng: "Hydrography",
                    children: [{
                            id: "3.2.2.1",
                            type: "W",
                            pos: "O",
                            fix: "--",
                            graphic: "---",
                            modifier: "HD----",
                            desc_kor: "수심",
                            desc_eng: "Depth",
                            children: [
                                { id: "3.2.2.1.1", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "HDS---", desc_kor: "수심측량", desc_eng: "Soundings" },
                                { id: "3.2.2.1.2", type: "W", pos: "O", fix: "-D", graphic: "-L-", modifier: "HDDL--", desc_kor: "수심선", desc_eng: "Depth,curve" },
                                { id: "3.2.2.1.3", type: "W", pos: "O", fix: "-D", graphic: "-L-", modifier: "HDDC--", desc_kor: "등심선", desc_eng: "Depth,contour" },
                                { id: "3.2.2.1.4", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "HDDA--", desc_kor: "등심영역", desc_eng: "Depth,area" }
                            ]
                        },
                        {
                            id: "3.2.2.2",
                            type: "W",
                            pos: "O",
                            fix: "--",
                            graphic: "---",
                            modifier: "HC----",
                            desc_kor: "해안수부",
                            desc_eng: "Coastal,hydrography",
                            children: [
                                { id: "3.2.2.2.1", type: "W", pos: "O", fix: "-D", graphic: "-L-", modifier: "HCC---", desc_kor: "해안선", desc_eng: "Coastline" },
                                { id: "3.2.2.2.2", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "HCI---", desc_kor: "섬", desc_eng: "Island" },
                                { id: "3.2.2.2.3", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "HCB---", desc_kor: "해안", desc_eng: "Beach" },
                                { id: "3.2.2.2.4", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "HCW---", desc_kor: "물", desc_eng: "Water" },
                                {
                                    id: "3.2.2.2.5",
                                    type: "W",
                                    pos: "O",
                                    fix: "-D",
                                    graphic: "---",
                                    modifier: "HCF---",
                                    desc_kor: "물가,갯벌",
                                    desc_eng: "Foreshore",
                                    children: [
                                        { id: "3.2.2.2.5.1", type: "W", pos: "O", fix: "-D", graphic: "-L-", modifier: "HCF---", desc_kor: "물가,갯벌(경계)", desc_eng: "Foreshore" },
                                        { id: "3.2.2.2.5.2", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "HCF---", desc_kor: "물가,갯벌(영역)", desc_eng: "Foreshore" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "3.2.2.3",
                            type: "W",
                            pos: "O",
                            fix: "-D",
                            graphic: "---",
                            modifier: "HP----",
                            desc_kor: "항만,항구",
                            desc_eng: "Ports,and,harbors",
                            children: [{
                                    id: "3.2.2.3.1",
                                    type: "W",
                                    pos: "O",
                                    fix: "S-",
                                    graphic: "---",
                                    modifier: "HPB---",
                                    desc_kor: "항만",
                                    desc_eng: "Ports",
                                    children: [
                                        { id: "3.2.2.3.1.1", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "HPB-O-", desc_kor: "정박지(육지)", desc_eng: "Berths,(Onshore)" },
                                        { id: "3.2.2.3.1.2", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "HPB-A-", desc_kor: "정박지(닻)", desc_eng: "Berths,(Anchor)" },
                                        { id: "3.2.2.3.1.3", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "HPBA--", desc_kor: "정박지(위치)", desc_eng: "Anchorage" },
                                        { id: "3.2.2.3.1.4", type: "W", pos: "O", fix: "-D", graphic: "-L-", modifier: "HPBA--", desc_kor: "정박지(경계)", desc_eng: "Anchorage" },
                                        { id: "3.2.2.3.1.5", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "HPBA--", desc_kor: "정박지(영역)", desc_eng: "Anchorage" },
                                        { id: "3.2.2.3.1.6", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "HPCP--", desc_kor: "호출지점", desc_eng: "Call,in,point" },
                                        { id: "3.2.2.3.1.7", type: "W", pos: "O", fix: "-D", graphic: "-L-", modifier: "HPBP--", desc_kor: "부두", desc_eng: "Pier/Wharf/Quay" }
                                    ]
                                },
                                {
                                    id: "3.2.2.3.2",
                                    type: "W",
                                    pos: "O",
                                    fix: "--",
                                    graphic: "---",
                                    modifier: "HPF---",
                                    desc_kor: "어업",
                                    desc_eng: "Fishing",
                                    children: [
                                        { id: "3.2.2.3.2.1", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "HPFH--", desc_kor: "어항", desc_eng: "Fishing,harbor" },
                                        { id: "3.2.2.3.2.2", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "HPFS--", desc_kor: "둑(위치)", desc_eng: "Fish,stakes/Traps/Weirs" },
                                        { id: "3.2.2.3.2.3", type: "W", pos: "O", fix: "S-", graphic: "-L-", modifier: "HPFS--", desc_kor: "둑(경계)", desc_eng: "Fish,stakes" },
                                        { id: "3.2.2.3.2.4", type: "W", pos: "O", fix: "S-", graphic: "--A", modifier: "HPFF--", desc_kor: "둑(영역)", desc_eng: "Fish,stakes/Traps/Weirs" }
                                    ]
                                },
                                {
                                    id: "3.2.2.3.3",
                                    type: "W",
                                    pos: "O",
                                    fix: "--",
                                    graphic: "---",
                                    modifier: "HPM---",
                                    desc_kor: "항만시설",
                                    desc_eng: "Facilities",
                                    children: [
                                        { id: "3.2.2.3.3.1", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "HPMD--", desc_kor: "건선거", desc_eng: "Drydock" },
                                        { id: "3.2.2.3.3.2", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "HPML--", desc_kor: "상륙장", desc_eng: "Landing,place" },
                                        { id: "3.2.2.3.3.3", type: "W", pos: "O", fix: "-D", graphic: "P--", modifier: "HPMO--", desc_kor: "연안 화물적재시설(위치)", desc_eng: "Offshore,loading,facility" },
                                        { id: "3.2.2.3.3.4", type: "W", pos: "O", fix: "-D", graphic: "-L-", modifier: "HPMO--", desc_kor: "연안 화물적재시설(경계)", desc_eng: "Offshore,loading,facility" },
                                        { id: "3.2.2.3.3.5", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "HPMO--", desc_kor: "연안 화물적재시설(영역)", desc_eng: "Offshore,loading,facility" },
                                        { id: "3.2.2.3.3.6", type: "W", pos: "O", fix: "-D", graphic: "-L-", modifier: "HPMRA-", desc_kor: "경사로(수면)", desc_eng: "Ramp,(Above,water)" },
                                        { id: "3.2.2.3.3.7", type: "W", pos: "O", fix: "-D", graphic: "-L-", modifier: "HPMRB-", desc_kor: "경사로(수중)", desc_eng: "Ramp,(Below,water)" },
                                        { id: "3.2.2.3.3.8", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "HPM-R-", desc_kor: "상륙고리", desc_eng: "Landing,ring" },
                                        { id: "3.2.2.3.3.9", type: "W", pos: "O", fix: "S-", graphic: "-L-", modifier: "HPM-FC", desc_kor: "연락선", desc_eng: "Ferry,crossing" },
                                        { id: "3.2.2.3.3.10", type: "W", pos: "O", fix: "S-", graphic: "-L-", modifier: "HPM-CC", desc_kor: "연락선(케이블)", desc_eng: "Cable,ferry,crossing" },
                                        { id: "3.2.2.3.3.11", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "HPD---", desc_kor: "돌고래", desc_eng: "Dolphin" }
                                    ]
                                },
                                {
                                    id: "3.2.2.3.4",
                                    type: "W",
                                    pos: "O",
                                    fix: "--",
                                    graphic: "---",
                                    modifier: "HPP---",
                                    desc_kor: "해안방제",
                                    desc_eng: "Shoreline,protection",
                                    children: [
                                        { id: "3.2.2.3.4.1", type: "W", pos: "O", fix: "-D", graphic: "-L-", modifier: "HPSPA-", desc_kor: "방파제/제방/둑(수면)", desc_eng: "Breakwater/Groin/Jetty,(Above,water)" },
                                        { id: "3.2.2.3.4.2", type: "W", pos: "O", fix: "-D", graphic: "-L-", modifier: "HPSPB-", desc_kor: "방파제/제방/둑(수중)", desc_eng: "Breakwater/Groin/Jetty,(Below,water)" },
                                        { id: "3.2.2.3.4.3", type: "W", pos: "O", fix: "-D", graphic: "-L-", modifier: "HPSPS-", desc_kor: "방파제", desc_eng: "Seawall" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "3.2.2.4",
                            type: "W",
                            pos: "O",
                            fix: "--",
                            graphic: "---",
                            modifier: "HA----",
                            desc_kor: "항로표지",
                            desc_eng: "Aids,to,navigation",
                            children: [
                                { id: "3.2.2.4.1", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "HABA--", desc_kor: "신호등", desc_eng: "Beacon" },
                                { id: "3.2.2.4.2", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "HABB--", desc_kor: "부표(기본)", desc_eng: "Buoy,default" },
                                { id: "3.2.2.4.3", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "HABM--", desc_kor: "표시", desc_eng: "Marker" },
                                {
                                    id: "3.2.2.4.4",
                                    type: "W",
                                    pos: "O",
                                    fix: "S-",
                                    graphic: "---",
                                    modifier: "HABP--",
                                    desc_kor: "말뚝",
                                    desc_eng: "Perches/Stakes",
                                    children: [
                                        { id: "3.2.2.4.4.1", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "HABP--", desc_kor: "말뚝(위치)", desc_eng: "Perches/Stakes" },
                                        { id: "3.2.2.4.4.2", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "HABP--", desc_kor: "말뚝(지역)", desc_eng: "Perches/Stakes" }
                                    ]
                                },
                                { id: "3.2.2.4.5", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "HAL---", desc_kor: "빛", desc_eng: "Light" },
                                { id: "3.2.2.4.6", type: "W", pos: "O", fix: "-D", graphic: "-L-", modifier: "HALLA-", desc_kor: "유도선", desc_eng: "Leading,line" },
                                { id: "3.2.2.4.7", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "HALV--", desc_kor: "등대선", desc_eng: "Light,vessel/Lightship" },
                                { id: "3.2.2.4.8", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "HALH--", desc_kor: "등대", desc_eng: "Lighthouse" }
                            ]
                        },
                        {
                            id: "3.2.2.5",
                            type: "W",
                            pos: "O",
                            fix: "--",
                            graphic: "---",
                            modifier: "HH----",
                            desc_kor: "위험물/장애물",
                            desc_eng: "Dangers/Hazards",
                            children: [
                                { id: "3.2.2.5.1", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "HHRS--", desc_kor: "암반(침수)", desc_eng: "Rock,submergered" },
                                { id: "3.2.2.5.2", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "HHRA--", desc_kor: "암반(침세)", desc_eng: "Rock,awashed" },
                                { id: "3.2.2.5.3", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "HHD---", desc_kor: "해저 위험물/장애물", desc_eng: "Underwater,danger/Hazard" },
                                {
                                    id: "3.2.2.5.4",
                                    type: "W",
                                    pos: "O",
                                    fix: "S-",
                                    graphic: "---",
                                    modifier: "HHDF--",
                                    desc_kor: "해저암초",
                                    desc_eng: "Foul,ground",
                                    children: [
                                        { id: "3.2.2.5.4.1", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "HHDF--", desc_kor: "해저암초(위치)", desc_eng: "Foul,ground" },
                                        { id: "3.2.2.5.4.2", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "HHDF--", desc_kor: "해저암초(지역)", desc_eng: "Foul,ground" }
                                    ]
                                },
                                {
                                    id: "3.2.2.5.5",
                                    type: "W",
                                    pos: "O",
                                    fix: "-D",
                                    graphic: "---",
                                    modifier: "HHDK--",
                                    desc_kor: "해초",
                                    desc_eng: "Kelp/Seaweed",
                                    children: [
                                        { id: "3.2.2.5.5.1", type: "W", pos: "O", fix: "-D", graphic: "P--", modifier: "HHDK--", desc_kor: "해초(위치)", desc_eng: "Kelp/Seaweed" },
                                        { id: "3.2.2.5.5.2", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "HHDK--", desc_kor: "해초(지역)", desc_eng: "Kelp/Seaweed" }
                                    ]
                                },
                                {
                                    id: "3.2.2.5.6",
                                    type: "W",
                                    pos: "O",
                                    fix: "S-",
                                    graphic: "---",
                                    modifier: "HHDMD-",
                                    desc_kor: "기뢰",
                                    desc_eng: "Mine-naval",
                                    children: [
                                        { id: "3.2.2.5.6.1", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "HHDMDB", desc_kor: "기뢰(의심)", desc_eng: "Mine-naval,(Doubtful)" },
                                        { id: "3.2.2.5.6.2", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "HHDMDF", desc_kor: "기뢰(명확)", desc_eng: "Mine-naval,(Definite)" }
                                    ]
                                },
                                { id: "3.2.2.5.7", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "HHDS--", desc_kor: "암초", desc_eng: "Snags/Stumps" },
                                {
                                    id: "3.2.2.5.8",
                                    type: "W",
                                    pos: "O",
                                    fix: "S-",
                                    graphic: "---",
                                    modifier: "HHDWA-",
                                    desc_kor: "난파선",
                                    desc_eng: "Wreck",
                                    children: [
                                        { id: "3.2.2.5.8.1", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "HHDWA-", desc_kor: "난파선(돌출)", desc_eng: "Wreck,(Uncovers)" },
                                        { id: "3.2.2.5.8.2", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "HHDWB-", desc_kor: "난파선(침수)", desc_eng: "Wreck,(Submerged)" }
                                    ]
                                },
                                { id: "3.2.2.5.9", type: "W", pos: "O", fix: "-D", graphic: "-L-", modifier: "HHDB--", desc_kor: "쇄파", desc_eng: "Breakers" },
                                { id: "3.2.2.5.10", type: "W", pos: "O", fix: "S-", graphic: "-L-", modifier: "HHDR--", desc_kor: "암초", desc_eng: "Reef" },
                                { id: "3.2.2.5.11", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "HHDE--", desc_kor: "회오리/단조/격조", desc_eng: "Eddies/Overfalls/Tide,rips" },
                                { id: "3.2.2.5.12", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "HHDD--", desc_kor: "적조", desc_eng: "Discolored,water" }
                            ]
                        },
                        {
                            id: "3.2.2.6",
                            type: "W",
                            pos: "O",
                            fix: "--",
                            graphic: "---",
                            modifier: "BF----",
                            desc_kor: "해저지형",
                            desc_eng: "Bottom,features",
                            children: [{
                                    id: "3.2.2.6.1",
                                    type: "W",
                                    pos: "O",
                                    fix: "S-",
                                    graphic: "---",
                                    modifier: "BFC---",
                                    desc_kor: "해저지형 특성",
                                    desc_eng: "Bottom,characteristics",
                                    children: [
                                        { id: "3.2.2.6.1.1", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "BFC-S-", desc_kor: "모래", desc_eng: "Sand" },
                                        { id: "3.2.2.6.1.2", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "BFC-M-", desc_kor: "진흙", desc_eng: "Mud" },
                                        { id: "3.2.2.6.1.3", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "BFC-CL", desc_kor: "점토", desc_eng: "Clay" },
                                        { id: "3.2.2.6.1.4", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "BFC-SI", desc_kor: "유사", desc_eng: "Silt" },
                                        { id: "3.2.2.6.1.5", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "BFC-ST", desc_kor: "돌", desc_eng: "Stones" },
                                        { id: "3.2.2.6.1.6", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "BFC-G-", desc_kor: "자갈자", desc_eng: "Gravel" },
                                        { id: "3.2.2.6.1.7", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "BFC-P-", desc_kor: "조약돌", desc_eng: "Pebbles" },
                                        { id: "3.2.2.6.1.8", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "BFC-CB", desc_kor: "굵은 자갈", desc_eng: "Cobbles" },
                                        { id: "3.2.2.6.1.9", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "BFC-R-", desc_kor: "바위", desc_eng: "Rock" },
                                        { id: "3.2.2.6.1.10", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "BFC-CO", desc_kor: "산호", desc_eng: "Coral" },
                                        { id: "3.2.2.6.1.11", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "BFC-SH", desc_kor: "패각", desc_eng: "Shell" }
                                    ]
                                },
                                {
                                    id: "3.2.2.6.2",
                                    type: "W",
                                    pos: "O",
                                    fix: "S-",
                                    graphic: "---",
                                    modifier: "BFQ---",
                                    desc_kor: "해저상태",
                                    desc_eng: "Qualifying,terms",
                                    children: [
                                        { id: "3.2.2.6.2.1", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "BFQ-F-", desc_kor: "좋음", desc_eng: "Fine" },
                                        { id: "3.2.2.6.2.2", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "BFQ-M-", desc_kor: "보통", desc_eng: "Medium" },
                                        { id: "3.2.2.6.2.3", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "BFQ-C-", desc_kor: "거친", desc_eng: "Coarse" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "3.2.2.7",
                            type: "W",
                            pos: "O",
                            fix: "--",
                            graphic: "---",
                            modifier: "TCC---",
                            desc_kor: "조류",
                            desc_eng: "Tide,and,current",
                            children: [
                                { id: "3.2.2.7.1", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "TCCW--", desc_kor: "난류", desc_eng: "Water,turbulence" },
                                { id: "3.2.2.7.2", type: "W", pos: "O", fix: "-D", graphic: "-L-", modifier: "TCCCFE", desc_kor: "조류방향(간조)", desc_eng: "Current,flow,-,Ebb" },
                                { id: "3.2.2.7.3", type: "W", pos: "O", fix: "-D", graphic: "-L-", modifier: "TCCCFF", desc_kor: "조류방향(만조)", desc_eng: "Current,flow,-,Flood" },
                                { id: "3.2.2.7.4", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "TCCTD-", desc_kor: "조류 자료수집점", desc_eng: "Tide,data,point" },
                                { id: "3.2.2.7.5", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "TCCTG-", desc_kor: "검조기", desc_eng: "Tide,gauge" }
                            ]
                        }
                    ]
                },
                {
                    id: "3.2.3",
                    type: "W",
                    pos: "O",
                    fix: "--",
                    graphic: "---",
                    modifier: "O-----",
                    desc_kor: "해양",
                    desc_eng: "Oceanography",
                    children: [{
                            id: "3.2.3.1",
                            type: "W",
                            pos: "O",
                            fix: "--",
                            graphic: "---",
                            modifier: "OB----",
                            desc_kor: "생물발광",
                            desc_eng: "Bioluminescence",
                            children: [
                                { id: "3.2.3.1.1", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "OBVA--", desc_kor: "VDR 레벨 1~2", desc_eng: "VDR,level,1-2" },
                                { id: "3.2.3.1.2", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "OBVB--", desc_kor: "VDR 레벨 2~3", desc_eng: "VDR,level,2-3" },
                                { id: "3.2.3.1.3", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "OBVC--", desc_kor: "VDR 레벨 3~4", desc_eng: "VDR,level,3-4" },
                                { id: "3.2.3.1.4", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "OBVD--", desc_kor: "VDR 레벨 4~5", desc_eng: "VDR,level,4-5" },
                                { id: "3.2.3.1.5", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "OBVE--", desc_kor: "VDR 레벨 5~6", desc_eng: "VDR,level,5-6" },
                                { id: "3.2.3.1.6", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "OBVF--", desc_kor: "VDR 레벨 6~7", desc_eng: "VDR,level,6-7" },
                                { id: "3.2.3.1.7", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "OBVG--", desc_kor: "VDR 레벨 7~8", desc_eng: "VDR,level,7-8" },
                                { id: "3.2.3.1.8", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "OBVH--", desc_kor: "VDR 레벨 8~9", desc_eng: "VDR,level,8-9" },
                                { id: "3.2.3.1.9", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "OBVI--", desc_kor: "VDR 레벨 9~10", desc_eng: "VDR,level,9-10" }
                            ]
                        },
                        {
                            id: "3.2.3.2",
                            type: "W",
                            pos: "O",
                            fix: "--",
                            graphic: "---",
                            modifier: "BS----",
                            desc_kor: "해안경사",
                            desc_eng: "Beach,slope",
                            children: [
                                { id: "3.2.3.2.1", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "BSF---", desc_kor: "평지", desc_eng: "Flat" },
                                { id: "3.2.3.2.2", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "BSG---", desc_kor: "완만한", desc_eng: "Gentle" },
                                { id: "3.2.3.2.3", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "BSM---", desc_kor: "적당한", desc_eng: "Moderate" },
                                { id: "3.2.3.2.4", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "BST---", desc_kor: "가파른가", desc_eng: "Steep" }
                            ]
                        }
                    ]
                },
                {
                    id: "3.2.4",
                    type: "W",
                    pos: "O",
                    fix: "--",
                    graphic: "---",
                    modifier: "G-----",
                    desc_kor: "지구물리/음향",
                    desc_eng: "Geophysics/Acoustics",
                    children: [{
                        id: "3.2.4.1",
                        type: "W",
                        pos: "O",
                        fix: "--",
                        graphic: "---",
                        modifier: "GM----",
                        desc_kor: "기뢰전 해저 설명",
                        desc_eng: "Mine,warfare,bottom,descriptors",
                        children: [{
                                id: "3.2.4.1.1",
                                type: "W",
                                pos: "O",
                                fix: "--",
                                graphic: "---",
                                modifier: "GMS---",
                                desc_kor: "기뢰전 해저 침전물",
                                desc_eng: "Miw-bottom,sediments",
                                children: [
                                    { id: "3.2.4.1.1.1", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMSR--", desc_kor: "암석", desc_eng: "Solid,rock" },
                                    { id: "3.2.4.1.1.2", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMSC--", desc_kor: "점토", desc_eng: "Clay" },
                                    { id: "3.2.4.1.1.3", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMSSVS", desc_kor: "극조사", desc_eng: "Very,coarse,sand" },
                                    { id: "3.2.4.1.1.4", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMSSC-", desc_kor: "조사조", desc_eng: "Coarse,sand" },
                                    { id: "3.2.4.1.1.5", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMSSM-", desc_kor: "중사", desc_eng: "Medium,sand" },
                                    { id: "3.2.4.1.1.6", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMSSF-", desc_kor: "세사", desc_eng: "Fine,sand" },
                                    { id: "3.2.4.1.1.7", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMSSVF", desc_kor: "미세사미", desc_eng: "Very,fine,sand" },
                                    { id: "3.2.4.1.1.8", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMSIVF", desc_kor: "미세사립실트", desc_eng: "Very,fine,silt" },
                                    { id: "3.2.4.1.1.9", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMSIF-", desc_kor: "세립실트", desc_eng: "Fine,silt" },
                                    { id: "3.2.4.1.1.10", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMSIM-", desc_kor: "중립실트", desc_eng: "Medium,silt" },
                                    { id: "3.2.4.1.1.11", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMSIC-", desc_kor: "조립실트", desc_eng: "Coarse,silt" },
                                    { id: "3.2.4.1.1.12", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMSB--", desc_kor: "옥석", desc_eng: "Boulders" },
                                    { id: "3.2.4.1.1.13", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMS-CO", desc_kor: "조약돌,패분", desc_eng: "Cobbles,,oyster,shells" },
                                    { id: "3.2.4.1.1.14", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMS-PH", desc_kor: "자갈,패각", desc_eng: "Pebbles,,shells" },
                                    { id: "3.2.4.1.1.15", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMS-SH", desc_kor: "모래,패각", desc_eng: "Sand,and,shells" },
                                    { id: "3.2.4.1.1.16", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GML---", desc_kor: "육지", desc_eng: "Land" },
                                    { id: "3.2.4.1.1.17", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMN---", desc_kor: "자료없음", desc_eng: "No,data" }
                                ]
                            },
                            {
                                id: "3.2.4.1.2",
                                type: "W",
                                pos: "O",
                                fix: "--",
                                graphic: "---",
                                modifier: "GMR---",
                                desc_kor: "해저 거칠기",
                                desc_eng: "Bottom,roughness",
                                children: [
                                    { id: "3.2.4.1.2.1", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMRS--", desc_kor: "평탄", desc_eng: "Smooth" },
                                    { id: "3.2.4.1.2.2", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMRM--", desc_kor: "보통", desc_eng: "Moderate" },
                                    { id: "3.2.4.1.2.3", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMRR--", desc_kor: "거친", desc_eng: "Rough" }
                                ]
                            },
                            {
                                id: "3.2.4.1.3",
                                type: "W",
                                pos: "O",
                                fix: "--",
                                graphic: "---",
                                modifier: "GMC---",
                                desc_kor: "바닥쓰레기",
                                desc_eng: "Clutter,(Bottom)",
                                children: [
                                    { id: "3.2.4.1.3.1", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMCL--", desc_kor: "적음", desc_eng: "Low" },
                                    { id: "3.2.4.1.3.2", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMCM--", desc_kor: "보통", desc_eng: "Medium" },
                                    { id: "3.2.4.1.3.3", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMCH--", desc_kor: "많음", desc_eng: "High" }
                                ]
                            },
                            {
                                id: "3.2.4.1.4",
                                type: "W",
                                pos: "O",
                                fix: "--",
                                graphic: "---",
                                modifier: "GMIB--",
                                desc_kor: "침전물 충돌가능성",
                                desc_eng: "Impact,burial",
                                children: [
                                    { id: "3.2.4.1.4.1", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMIBA-", desc_kor: "0%", desc_eng: "0%" },
                                    { id: "3.2.4.1.4.2", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMIBB-", desc_kor: "0-10%", desc_eng: "0-10%" },
                                    { id: "3.2.4.1.4.3", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMIBC-", desc_kor: "10-20%", desc_eng: "10-20%" },
                                    { id: "3.2.4.1.4.4", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMIBD-", desc_kor: "20-75%", desc_eng: "20-75%" },
                                    { id: "3.2.4.1.4.5", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMIBE-", desc_kor: ">75%", desc_eng: ">75%" }
                                ]
                            },
                            {
                                id: "3.2.4.1.5",
                                type: "W",
                                pos: "O",
                                fix: "--",
                                graphic: "---",
                                modifier: "GMBC--",
                                desc_kor: "대기뢰전 해저 범주",
                                desc_eng: "MIW,bottom,category",
                                children: [
                                    { id: "3.2.4.1.5.1", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMBCA-", desc_kor: "A", desc_eng: "A" },
                                    { id: "3.2.4.1.5.2", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMBCB-", desc_kor: "B", desc_eng: "B" },
                                    { id: "3.2.4.1.5.3", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMBCC-", desc_kor: "C", desc_eng: "C" }
                                ]
                            },
                            {
                                id: "3.2.4.1.6",
                                type: "W",
                                pos: "O",
                                fix: "--",
                                graphic: "---",
                                modifier: "GMBT--",
                                desc_kor: "대기뢰전 해저 유형",
                                desc_eng: "MIW,bottom,type",
                                children: [
                                    { id: "3.2.4.1.6.1", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMBTA-", desc_kor: "A1", desc_eng: "A1" },
                                    { id: "3.2.4.1.6.2", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMBTB-", desc_kor: "A2", desc_eng: "A2" },
                                    { id: "3.2.4.1.6.3", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMBTC-", desc_kor: "A3", desc_eng: "A3" },
                                    { id: "3.2.4.1.6.4", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMBTD-", desc_kor: "B1", desc_eng: "B1" },
                                    { id: "3.2.4.1.6.5", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMBTE-", desc_kor: "B2", desc_eng: "B2" },
                                    { id: "3.2.4.1.6.6", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMBTF-", desc_kor: "B3", desc_eng: "B3" },
                                    { id: "3.2.4.1.6.7", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMBTG-", desc_kor: "C1", desc_eng: "C1" },
                                    { id: "3.2.4.1.6.8", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMBTH-", desc_kor: "C2", desc_eng: "C2" },
                                    { id: "3.2.4.1.6.9", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "GMBTI-", desc_kor: "C3", desc_eng: "C3" }
                                ]
                            }
                        ]
                    }]
                },
                {
                    id: "3.2.5",
                    type: "W",
                    pos: "O",
                    fix: "--",
                    graphic: "---",
                    modifier: "L-----",
                    desc_kor: "제한",
                    desc_eng: "Limits",
                    children: [
                        { id: "3.2.5.1", type: "W", pos: "O", fix: "-D", graphic: "-L-", modifier: "L-ML--", desc_kor: "해상제한경계", desc_eng: "Maritime,limit,boundary" },
                        { id: "3.2.5.2", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "L-MA--", desc_kor: "연안지역", desc_eng: "Maritime,area" },
                        { id: "3.2.5.3", type: "W", pos: "O", fix: "-D", graphic: "-L-", modifier: "L-RA--", desc_kor: "제한지역(경계)", desc_eng: "Restricted,area" },
                        { id: "3.2.5.4", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "L-SA--", desc_kor: "피해지역", desc_eng: "Swept,area" },
                        { id: "3.2.5.5", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "L-TA--", desc_kor: "훈련지역", desc_eng: "Training,area" },
                        { id: "3.2.5.6", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "L-O---", desc_kor: "임의지정지역", desc_eng: "Operator-defined" }
                    ]
                },
                {
                    id: "3.2.6",
                    type: "W",
                    pos: "O",
                    fix: "--",
                    graphic: "---",
                    modifier: "M-----",
                    desc_kor: "인공구조물",
                    desc_eng: "Man-made,structures",
                    children: [
                        { id: "3.2.6.1", type: "W", pos: "O", fix: "-D", graphic: "-L-", modifier: "MCA---", desc_kor: "해저케이블", desc_eng: "Submarine,cable" },
                        { id: "3.2.6.2", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "MCC---", desc_kor: "해저시설물", desc_eng: "Submerged,crib" },
                        { id: "3.2.6.3", type: "W", pos: "O", fix: "-D", graphic: "-L-", modifier: "MCD---", desc_kor: "운하", desc_eng: "Canal" },
                        { id: "3.2.6.4", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "MF----", desc_kor: "여울", desc_eng: "Ford" },
                        { id: "3.2.6.5", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "ML----", desc_kor: "갑문", desc_eng: "Lock" },
                        { id: "3.2.6.6", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "MOA---", desc_kor: "석유/가스 굴착장치(위치)", desc_eng: "Oil/Gas,rig" },
                        { id: "3.2.6.7", type: "W", pos: "O", fix: "-D", graphic: "--A", modifier: "MOA---", desc_kor: "석유/가스 굴착장치(지역)", desc_eng: "Oil/Gas,rig,field" },
                        { id: "3.2.6.8", type: "W", pos: "O", fix: "-D", graphic: "-L-", modifier: "MPA---", desc_kor: "송유관", desc_eng: "Pipelines/Pipe" },
                        { id: "3.2.6.9", type: "W", pos: "O", fix: "S-", graphic: "P--", modifier: "MPA---", desc_kor: "말뚝/기둥", desc_eng: "Pile/Piling/Post" }
                    ]
                }
            ]
        },
        { id: "3.3", type: "W", pos: "S", fix: "--", graphic: "---", modifier: "------", desc_kor: "우주", desc_eng: "Space" }
    ]
}];



module.exports = {
    code: "W",
    pos: position_Weather,
    fix: fix_Weather,
    graphic: graphic_Weather,
    identifier: functionIdentifier_Weather
};