/* eslint-disable */



var affiliation_Basic = [
    { code: "P", desc: "식별보류(P / 황색)" },
    { code: "U", desc: "미식별(U / 황색)" },
    { code: "F", desc: "아군(F / 청색)" },
    { code: "N", desc: "중립(N / 녹색)" },
    { code: "H", desc: "적(H / 적색)" },
    { code: "A", desc: "아군간주(A / 청색)" },
    { code: "S", desc: "적군간주(S / 적색)" },
    { code: "G", desc: "훈련 식별보류(G / 황색)" },
    { code: "W", desc: "훈련 미식별(W / 황색)" },
    { code: "D", desc: "훈련 아군(D / 청색)" },
    { code: "L", desc: "훈련 중립(L / 녹색)" },
    { code: "M", desc: "훈련아군간주(M / 청색)" },
    { code: "J", desc: "훈련 의심적(J / 적색)" },
    { code: "K", desc: "훈련 가상적(K / 적색)" }
];

var battlefield_Basic = [
    { code: "P", desc: "우주(P)" },
    { code: "A", desc: "공중(A)" },
    { code: "G", desc: "지상(G)" },
    { code: "S", desc: "해상(S)" },
    { code: "U", desc: "해중(U)" },
    { code: "F", desc: "기동부대(F)" },
    { code: "X", desc: "기타(외형없음:X)" },
    { code: "Z", desc: "미식별(Z)" }
];

var status_Basic = [
    { code: "A", desc: "예상/계획(A)" },
    { code: "P", desc: "현재(P)" },
    { code: "C", desc: "현재 / 정상(C)" },
    { code: "D", desc: "현재 / 손상된(D)" },
    { code: "X", desc: "현재 / 파괴된(X)" },
    { code: "F", desc: "현재 / 최대가동(F)" }
];

var mission_Basic = [
    { code: "A", desc: "공중(A)" },
    { code: "B", desc: "전자(B)" },
    { code: "C", desc: "민간(C)" },
    { code: "G", desc: "지상(G)" },
    { code: "N", desc: "해군(N)" },
    { code: "S", desc: "전략군(S)" }
];

var unit_Basic = {
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
    ],
    "A": [
        { code: "A-", desc: " HEADQUARTERS(HQ) 지휘소 " },
        { code: "AA", desc: " HQ TEAM / CREW 조 / 병사 지휘소 " },
        { code: "AB", desc: " HQ SQUAD 분대 지휘소 " },
        { code: "AC", desc: " HQ SECTION 반 지휘소 " },
        { code: "AD", desc: " HQ PLATOON/DETACHMENT 소대/분견대 지휘소 " },
        { code: "AE", desc: " HQ COMPANY / BATTERY / TROOP 중대 / 포대 / 기갑 지휘소 " },
        { code: "AF", desc: " HQ BATTALION / SQUADRON 대대/비행대대 지휘소 " },
        { code: "AG", desc: " HQ REGIMENT / GROUP 연대 / 단 지휘소 " },
        { code: "AH", desc: " HQ BRIGADE 여단 지휘소 " },
        { code: "AI", desc: " HQ DIVISION 사단 지휘소 " },
        { code: "AJ", desc: " HQ CORPS / MEF 군단 지휘소 " },
        { code: "AK", desc: " HQ ARMY 야전군 지휘소 " },
        { code: "AL", desc: " HQ ARMY GROUP / FRONT 집단군 지휘소 " },
        { code: "AM", desc: " HQ REGION 지역군 지휘소 " },
        { code: "AN", desc: " HQ COMMAND 사령부 지휘소" }
    ],
    "B": [
        { code: "B-", desc: " TASK FORCE(TF) HQ 기동부대 " },
        { code: "BA", desc: " TF HQ TEAM / CREW 기동부대 조 / 병사 지휘소 " },
        { code: "BB", desc: " TF HQ SQUAD 기동부대 분대 지휘소 " },
        { code: "BC", desc: " TF HQ SECTION 기동부대 반 지휘소 " },
        { code: "BD", desc: " TF HQ PLATOON / DETACHMENT 기동부대 소대 / 분견대 지휘소 " },
        { code: "BE", desc: " TF HQ COMPANY / BATTERY / TROOP 기동부대 중대 / 포대 / 기갑 지휘소 " },
        { code: "BF", desc: " TF HQ BATTALION / SQUADRON 기동부대 대대 / 비행대대 지휘소 " },
        { code: "BG", desc: " TF HQ REGIMENT / GROUP 기동부대 연대 / 단 지휘소 " },
        { code: "BH", desc: " TF HQ BRIGADE 기동부대 여단 지휘소 " },
        { code: "BI", desc: " TF HQ DIVISION 기동부대 사단 지휘소 " },
        { code: "BJ", desc: " TF HQ CORPS/MEF 기동부대 군단 지휘소 BIK TF HQ ARMY 기동부대 야전군 지휘소 " },
        { code: "BL", desc: " TF HQ ARMY GROUP / FRONT 기동부대 집단군 지휘소 " },
        { code: "BM", desc: " TF HQ REGION 기동부대 지역군 지휘소 " },
        { code: "BN", desc: " TF HQ COMMAND 기동부대 사령부 지휘소" }
    ],
    "C": [
        { code: "C-", desc: " FEINT DUMMY(FD) HQ 가장/가상 지휘소 " },
        { code: "CA", desc: " FD HQ TEAM / CREW 가장 / 가상 조 / 병사 지휘소 " },
        { code: "CB", desc: " FD HQ SQUAD 가장 / 가상 분대 지휘소 " },
        { code: "CC", desc: " FD HQ SECTION 가장 / 가상 반 지휘소 " },
        { code: "CD", desc: " FD HQ PLATOON / DETACHMENT 가장 / 가상 소대 / 분견대 지휘소 " },
        { code: "CE", desc: " FD HQ COMPANY / BATTERY / TROOP 가장 / 가상 중대 / 포대 / 기갑 지휘소 " },
        { code: "CF", desc: " FD HQ BATTALION / SQUADRON 가장 / 가상 대대 / 비행대대 지휘소 " },
        { code: "CG", desc: " FD HQ REGIMENT / GROUP 가장 / 가상 연대 / 단 지휘소 " },
        { code: "CH", desc: " FD HQ BRIGADE 가장 / 가상 여단 지휘소 " },
        { code: "CI", desc: " FD HQ DIVISION 가장 / 가상 사단 지휘소 " },
        { code: "CJ", desc: " FD HQ CORPS / MEF 가상 / 가장 군단 지휘소 " },
        { code: "CK", desc: " FD HQ ARMY 가장 / 가상 야전군 지휘소 " },
        { code: "CL", desc: " FD HQ ARMY GROUP / FRONT 가장 / 가상 집단군 지휘소 " },
        { code: "CM", desc: " FD HQ REGION 가장 / 가상 지역군 지휘소 " },
        { code: "CN", desc: " FD HQ COMMAND 가장 / 가상 사령부 지휘소" }
    ],
    "D": [
        { code: "D-", desc: " FEINTDUMMY / TASK FORCE(FD / TF)HQ 가장 / 가상 기동부대 지휘소 " },
        { code: "DA", desc: " FD / TF TEAM / CREW 가장 / 가상 기동부대 조 / 병사 지휘소 " },
        { code: "DB", desc: " FD / TF HQ SQUAD 가장 / 가상 기동부대 분대 지휘소 " },
        { code: "DC", desc: " FD/TF SECTION 가장 / 가상 기동부대 반 지휘소 " },
        { code: "DD", desc: " FD / TF HQ PLATOON / DETACHMENT 가장 / 가상 기동부대 소대 / 분견대 지휘소 " },
        { code: "DE", desc: " FD / TF COMPANY / BATTERY / TROOP 가장 / 가상 기동부대 중대 / 포대 / 기갑 지휘소 " },
        { code: "DF", desc: " FD/TF HQ BATTALION / SQUADRON 가장 / 가상 기동부대 대대 / 비행대대 지휘소 " },
        { code: "DG", desc: " FD / TF REGIMENT / GROUP 가장 / 가상 기동부대 연대/단 지휘소 " },
        { code: "DH", desc: " FD / TF HQ BRIGADE 가장 / 가상 기동부대 여단 지휘소 " },
        { code: "DI", desc: " FD / TF DIVISION 가장 / 가상 기동부대 사단 지휘소 " },
        { code: "DJ", desc: " FD/TF HQ CORPS / MEF 가장 / 가상 기동부대 군단 지휘소 " },
        { code: "DK", desc: " FD / TF ARMY 가장 / 가상 기동부대 야전군 지휘소 " },
        { code: "DL", desc: " FD / TF HQ ARMY GROUP / FRONT 가장 / 가상 기동부대 집단군 지휘소 " },
        { code: "DM", desc: " FD / TF REGION 가장 / 가상 기동부대 지역군 지휘소 " },
        { code: "DN", desc: " FD / TF HQ COMMAND 가장 /가상 기동부대 사령부 지휘소" }
    ],
    "E": [
        { code: "E-", desc: " TASK FORCE(TF) 기동부대 " },
        { code: "EA", desc: " TF TEAM / CREW 기동부대 조 / 병사 " },
        { code: "EB", desc: " TF SQUAD 기동부대 분대 " },
        { code: "EC", desc: " TF SECTION 기동부대 반 " },
        { code: "ED", desc: " TF PLATOON / DETACHMENT 기동부대 소대 / 분견대 " },
        { code: "EE", desc: " TF COMPANY / BATTERY / TROOP 기동부대 중대 / 포대 / 기갑 " },
        { code: "EF", desc: " TF BATTALION / SQUADRON 기동부대 대대 / 비행대대 " },
        { code: "EG", desc: " TF REGIMENT / GROUP 기동부대 연대 / 단 " },
        { code: "EH", desc: " TF BRIGADE 기동부대 여단 " },
        { code: "EI", desc: " TF DIVISION 기동부대 사단 " },
        { code: "EJ", desc: " TF CORPS / MEF 기동부대 군단 " },
        { code: "EK", desc: " TF ARMY 기동부대 야전군 " },
        { code: "EL", desc: " TF ARMY GROUP / FRONT 기동부대 집단군 " },
        { code: "EM", desc: " TF REGION 기동부대 지역군 " },
        { code: "EN", desc: " TF COMMAND 기동부대 사령부" }
    ],
    "F": [
        { code: "F-", desc: " FEINT DUMMY(FD) 가장 / 가상 " },
        { code: "FA", desc: " 'FD TEAM / CREW 가장 / 가상 조 / 병사 " },
        { code: "FB", desc: " 'FD SQUAD 가장 / 가상 분대 " },
        { code: "FC", desc: " 'FD SECTION 가장 / 가상 반 " },
        { code: "FD", desc: " FD PLATOON / DETACHMENT 가장 / 가상 소대 / 분견대 " },
        { code: "FE", desc: " FD COMPANY / BATTERY / TROOP 가장 / 가상 중대 / 포대/기갑 " },
        { code: "FF", desc: " FD BATTALION / SQUADRON 가장 / 가상 대대 / 비행대대 " },
        { code: "FG", desc: " FD REGIMENT / GROUP 가장 / 가상 연대 / 단 " },
        { code: "FH", desc: " FD BRIGADE 가장 / 가상 여단 " },
        { code: "FI", desc: " FD DIVISION 가장 / 가상 사단 " },
        { code: "FJ", desc: " FD CPR[S/MEF 가장 / 가상 군단 " },
        { code: "FK", desc: " FD ARMY 가장 / 가상 야전군 " },
        { code: "FL", desc: " FD ARMY GROUP / FRONT 가장 / 가상 집단군 " },
        { code: "FM", desc: " FD REGION 가장 / 가상 지역군 " },
        { code: "FN", desc: " FD COMMAND 가장 / 가상 사령부" }
    ],
    "G": [
        { code: "G-", desc: " FEINT DUMMY / TASK FORCE(FD / TF) 가장 / 가상 기동부대 " },
        { code: "GA", desc: " FD / TF TEAM / CREW 가장 / 가상 기동부대 조 / 병사 " },
        { code: "GB", desc: " FD / TF SQUAD 가장 / 가상 기동부대 분대 " },
        { code: "GC", desc: " FD / TF SECTION 가장 / 가상 기동부대 반 " },
        { code: "GD", desc: " FD / TF PLATOON / DETACHMENT 가장 / 가상 기동부대 소대 / 분견대 " },
        { code: "GE", desc: " FD/TF COMPANY / BATTERY / TROOP 가장 / 가상 기동부대 중대 / 포대 / 기갑 " },
        { code: "GF", desc: " FD / TF BATTALION / SQUADRON 가장 / 가상 기동부대 대대 / 비행대대 " },
        { code: "GG", desc: " FD / TF REGIMENT / GROUP 가장 / 가상 기동부대 연대 / 단 " },
        { code: "GH", desc: " FD/TF BRIGADE 가장/가상 기동부대 여단 " },
        { code: "GI", desc: " FD / TF DIVISION 가장 / 가상 기동부대 사단 " },
        { code: "GJ", desc: " FD / TF CORPS / MEF 가장 / 가상 기동부대 군단 " },
        { code: "GK", desc: " FD / TF ARMY 가장 / 가상 기동부대 야전군 " },
        { code: "GL", desc: " FD/TF ARMY GROUP/FRONT 가장/가상 기동부대 집단군 " },
        { code: "GM", desc: " FD / TF REGION 가장 / 가상 기동부대 지역군 " },
        { code: "GN", desc: " FD / TF COMMAND 가장 / 가상 기동부대 사령부" }
    ],
    "H": [
        { code: "H-", desc: " INSTALLAION 시설 " },
        { code: "HB", desc: " FEINT DUMMY INSTALLATION 가장 / 가상 시설" }
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
    ],
    "N": [
        { code: "NS", desc: " TOWED ARRAY (SHORT) 견인 소나 열 (단) " },
        { code: "NL", desc: " TOWED ARRAY (LONG) 견인 소나 열 (장)" }
    ]
};

var functionIdentifier_Basic = [
    { id: "0", type: "S", affiliation: "*", battlefield: "Z", status: "*", modifier: "------", desc_kor: "미식별", desc_eng: "Unknown" },
    {
        id: "1",
        type: "S",
        affiliation: "-",
        battlefield: "-",
        status: "-",
        modifier: "------",
        desc_kor: "기본군대부호",
        desc_eng: "Warfighting,symbols",
        children: [{
                id: "1.1",
                type: "S",
                affiliation: "*",
                battlefield: "P",
                status: "*",
                modifier: "------",
                desc_kor: "우주항적",
                desc_eng: "Space,track",
                children: [
                    { id: "1.1.1", type: "S", affiliation: "*", battlefield: "P", status: "*", modifier: "S-----", desc_kor: "위성", desc_eng: "Satellite" },
                    { id: "1.1.2", type: "S", affiliation: "*", battlefield: "P", status: "*", modifier: "V-----", desc_kor: "우주비행선", desc_eng: "Crewed,space,vehicle" },
                    { id: "1.1.3", type: "S", affiliation: "*", battlefield: "P", status: "*", modifier: "T-----", desc_kor: "우주정거장", desc_eng: "Space,station" },
                    { id: "1.1.4", type: "S", affiliation: "*", battlefield: "P", status: "*", modifier: "L-----", desc_kor: "우주로켓", desc_eng: "Space,launch,vehicle" }
                ]
            },
            {
                id: "1.2",
                type: "S",
                affiliation: "*",
                battlefield: "A",
                status: "*",
                modifier: "------",
                desc_kor: "공중항적",
                desc_eng: "Air,track",
                children: [{
                        id: "1.2.1",
                        type: "S",
                        affiliation: "*",
                        battlefield: "A",
                        status: "*",
                        modifier: "M-----",
                        desc_kor: "공중항적(군용)",
                        desc_eng: "Military",
                        children: [{
                                id: "1.2.1.1",
                                type: "S",
                                affiliation: "*",
                                battlefield: "A",
                                status: "*",
                                modifier: "MF----",
                                desc_kor: "고정익(군용)",
                                desc_eng: "Fixed,wing",
                                children: [
                                    { id: "1.2.1.1.1", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFB---", desc_kor: "폭격기", desc_eng: "Bomber" },
                                    {
                                        id: "1.2.1.1.2",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "A",
                                        status: "*",
                                        modifier: "MFF---",
                                        desc_kor: "전투기",
                                        desc_eng: "Fighter",
                                        children: [
                                            { id: "1.2.1.1.2.1", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFFI--", desc_kor: "요격기", desc_eng: "Interceptor" },
                                            { id: "1.2.1.1.2.1", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFFA--", desc_kor: "요격기", desc_eng: "Interceptor" }
                                        ]
                                    },
                                    { id: "1.2.1.1.3", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFT---", desc_kor: "훈련기", desc_eng: "Trainer" },
                                    { id: "1.2.1.1.4", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFA---", desc_kor: "공격기", desc_eng: "Attack/strike" },
                                    { id: "1.2.1.1.5", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFL---", desc_kor: "수직이착륙기", desc_eng: "V/STOL" },
                                    {
                                        id: "1.2.1.1.6",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "A",
                                        status: "*",
                                        modifier: "MFK---",
                                        desc_kor: "공중급유기",
                                        desc_eng: "Tanker",
                                        children: [
                                            { id: "1.2.1.1.6.1", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFKB--", desc_kor: "공중급유기(Boom)", desc_eng: "Tanker,boom-only" },
                                            { id: "1.2.1.1.6.2", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFKD--", desc_kor: "공중급유기(Drogue)", desc_eng: "Tanker,drogue-only" }
                                        ]
                                    },
                                    {
                                        id: "1.2.1.1.7",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "A",
                                        status: "*",
                                        modifier: "MFC---",
                                        desc_kor: "수송기",
                                        desc_eng: "Cargo,airlift,(transport)",
                                        children: [
                                            { id: "1.2.1.1.7.1", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFCL--", desc_kor: "수송기(경)", desc_eng: "Cargo,airlift,(light)" },
                                            { id: "1.2.1.1.7.2", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFCM--", desc_kor: "수송기(중)", desc_eng: "Cargo,airlift,(medium)" },
                                            { id: "1.2.1.1.7.3", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFCH--", desc_kor: "수송기(대)", desc_eng: "Cargo,airlift,(heavy)" }
                                        ]
                                    },
                                    { id: "1.2.1.1.8", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFJ---", desc_kor: "전자전기", desc_eng: "Electronic,countermeasures,(ECM/jammer)" },
                                    { id: "1.2.1.1.9", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFO---", desc_kor: "의무후송기", desc_eng: "Medical,evacuation,(MEDEVAC)" },
                                    {
                                        id: "1.2.1.1.10",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "A",
                                        status: "*",
                                        modifier: "MFR---",
                                        desc_kor: "수색정찰기",
                                        desc_eng: "Reconnaissance",
                                        children: [
                                            { id: "1.2.1.1.10.1", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFRW--", desc_kor: "수색정찰기(공중조기경보)", desc_eng: "Airborne,early,warning,(AEW)" },
                                            { id: "1.2.1.1.10.2", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFRZ--", desc_kor: "수색정찰기(전자감시)", desc_eng: "Electronic,surveillance,measures" },
                                            { id: "1.2.1.1.10.3", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFRX--", desc_kor: "수색정찰기(사진)", desc_eng: "Photographic" }
                                        ]
                                    },
                                    {
                                        id: "1.2.1.1.11",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "A",
                                        status: "*",
                                        modifier: "MFP---",
                                        desc_kor: "초계기",
                                        desc_eng: "Patrol",
                                        children: [
                                            { id: "1.2.1.1.11.1", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFPN--", desc_kor: "대함초계기", desc_eng: "Antisurface,warfare,(ASUW)" },
                                            { id: "1.2.1.1.11.2", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFPM--", desc_kor: "대기뢰초계기", desc_eng: "Mine,countermeasures" },
                                            { id: "1.2.1.1.11.3", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFPU--", desc_kor: "대잠초계기", desc_eng: "Antisubmarine,patrol" }
                                        ]
                                    },
                                    {
                                        id: "1.2.1.1.12",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "A",
                                        status: "*",
                                        modifier: "MFU---",
                                        desc_kor: "다목적기",
                                        desc_eng: "Utility",
                                        children: [
                                            { id: "1.2.1.1.12.1", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFUL--", desc_kor: "다목적기(경)", desc_eng: "Utility,(light)" },
                                            { id: "1.2.1.1.12.2", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFUM--", desc_kor: "다목적기(중)", desc_eng: "Utility,(medium)" },
                                            { id: "1.2.1.1.12.3", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFUH--", desc_kor: "다목적기(대)", desc_eng: "Utility,(heavy)" }
                                        ]
                                    },
                                    { id: "1.2.1.1.13", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFY---", desc_kor: "통신항공기", desc_eng: "Communications" },
                                    { id: "1.2.1.1.14", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFH---", desc_kor: "탐색구조기", desc_eng: "Combat,search,and,rescue,(CSAR)" },
                                    { id: "1.2.1.1.15", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFD---", desc_kor: "공중지휘기", desc_eng: "Airborne,command,post,(C2)" },
                                    {
                                        id: "1.2.1.1.16",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "A",
                                        status: "*",
                                        modifier: "MFQ---",
                                        desc_kor: "무인 항공기",
                                        desc_eng: "Drone,(RPV/UAV)",
                                        children: [
                                            { id: "1.2.1.1.16.1", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFQA--", desc_kor: "무인 공격기", desc_eng: "Attack" },
                                            { id: "1.2.1.1.16.2", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFQB--", desc_kor: "무인 폭격기", desc_eng: "Bomber" },
                                            { id: "1.2.1.1.16.3", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFQC--", desc_kor: "무인 수송기", desc_eng: "Cargo" },
                                            { id: "1.2.1.1.16.4", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFQD--", desc_kor: "무인 공중 사령기", desc_eng: "Airborne,command,post" },
                                            { id: "1.2.1.1.16.5", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFQF--", desc_kor: "무인 전투기", desc_eng: "Fighter" },
                                            { id: "1.2.1.1.16.6", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFQH--", desc_kor: "무인 탐색구조기", desc_eng: "Search,and,rescue,(CSAR)" },
                                            { id: "1.2.1.1.16.7", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFQJ--", desc_kor: "무인 전파방해기", desc_eng: "Electronic,countermeasures,(jammer)" },
                                            { id: "1.2.1.1.16.8", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFQK--", desc_kor: "무인 공중급유기", desc_eng: "Tanker" },
                                            { id: "1.2.1.1.16.9", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFQL--", desc_kor: "무인 수직 단거리 이착륙기", desc_eng: "V/STOL" },
                                            { id: "1.2.1.1.16.10", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFQM--", desc_kor: "무인 특수작전기", desc_eng: "Special,operations,forces,(SOF)" },
                                            { id: "1.2.1.1.16.11", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFQI--", desc_kor: "무인 대기뢰기", desc_eng: "Mine,countermeasures" },
                                            { id: "1.2.1.1.16.12", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFQN--", desc_kor: "무인 대수상전 초계기", desc_eng: "Antisurface,warfare,(ASUW)" },
                                            { id: "1.2.1.1.16.13", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFQP--", desc_kor: "무인 초계기", desc_eng: "Patrol" },
                                            {
                                                id: "1.2.1.1.16.14",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "A",
                                                status: "*",
                                                modifier: "MFQR--",
                                                desc_kor: "무인 수색정찰기",
                                                desc_eng: "Reconnaissance",
                                                children: [
                                                    { id: "1.2.1.1.16.14.1", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFQRW-", desc_kor: "무인 조기경보기", desc_eng: "Airborne,early,warning,(AEW)" },
                                                    { id: "1.2.1.1.16.14.2", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFQRZ-", desc_kor: "무인 전탐기", desc_eng: "Electronic,surveillance,measures" },
                                                    { id: "1.2.1.1.16.14.3", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFQRX-", desc_kor: "무인 촬영기", desc_eng: "Photographic" }
                                                ]
                                            },
                                            { id: "1.2.1.1.16.15", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFQS--", desc_kor: "무인 대잠전 초계기", desc_eng: "Antisubmarine,warfare,(ASW)" },
                                            { id: "1.2.1.1.16.16", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFQT--", desc_kor: "무인 훈련기", desc_eng: "Trainer" },
                                            { id: "1.2.1.1.16.17", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFQU--", desc_kor: "무인 다목적기", desc_eng: "Utility" },
                                            { id: "1.2.1.1.16.18", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFQY--", desc_kor: "무인 통신기", desc_eng: "Communications" },
                                            { id: "1.2.1.1.16.19", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFQO--", desc_kor: "무인 의무후송기", desc_eng: "Medevac" }
                                        ]
                                    },
                                    { id: "1.2.1.1.17", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFS---", desc_kor: "대잠항공기(함재기)", desc_eng: "Antisubmarine,warfare,(ASW),carrier,based" },
                                    { id: "1.2.1.1.18", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MFM---", desc_kor: "특수작전기", desc_eng: "Special,operations,forces,(SOF)" }
                                ]
                            },
                            {
                                id: "1.2.1.2",
                                type: "S",
                                affiliation: "*",
                                battlefield: "A",
                                status: "*",
                                modifier: "MH----",
                                desc_kor: "회전익",
                                desc_eng: "Rotary,wing",
                                children: [
                                    { id: "1.2.1.2.1", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MH--", desc_kor: "공격헬기", desc_eng: "Attack" },
                                    { id: "1.2.1.2.2", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MHS---", desc_kor: "대잠헬기", desc_eng: "Antisubmarin" },
                                    {
                                        id: "1.2.1.2.3",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "A",
                                        status: "*",
                                        modifier: "MHU---",
                                        desc_kor: "다목적헬기",
                                        desc_eng: "Utility",
                                        children: [
                                            { id: "1.2.1.2.3.1", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MHUL--", desc_kor: "다목적헬기(경)", desc_eng: "Utility,(light)" },
                                            { id: "1.2.1.2.3.2", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MHUM--", desc_kor: "다목적헬기(중)", desc_eng: "Utility,(medium)" },
                                            { id: "1.2.1.2.3.3", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MHUH--", desc_kor: "다목적헬기(대)", desc_eng: "Utility,(heavy)" }
                                        ]
                                    },
                                    { id: "1.2.1.2.4", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MHI---", desc_kor: "대기뢰헬기", desc_eng: "Mine,countermeasures" },
                                    { id: "1.2.1.2.5", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MHH---", desc_kor: "탐색구조헬기", desc_eng: "Combat,search,and,rescue,(CSAR)" },
                                    { id: "1.2.1.2.6", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MHR---", desc_kor: "수색정찰헬기", desc_eng: "Reconnaissance" },
                                    { id: "1.2.1.2.7", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MHQ---", desc_kor: "무인조정헬기", desc_eng: "Drone,(RPV/UA)" },
                                    {
                                        id: "1.2.1.2.8",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "A",
                                        status: "*",
                                        modifier: "MHC---",
                                        desc_kor: "수송헬기",
                                        desc_eng: "Cargo,airlift,(transport)",
                                        children: [
                                            { id: "1.2.1.2.8.1", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MHCL--", desc_kor: "수송헬기(경)", desc_eng: "Cargo,airlift,(light)" },
                                            { id: "1.2.1.2.8.2", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MHCM--", desc_kor: "수송헬기(중)", desc_eng: "Cargo,airlift,(medium)" },
                                            { id: "1.2.1.2.8.3", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MHCH--", desc_kor: "수송헬기(대)", desc_eng: "Cargo,airlift,(heavy)" }
                                        ]
                                    },
                                    { id: "1.2.1.2.9", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MHT---", desc_kor: "훈련헬기", desc_eng: "Trainer" },
                                    { id: "1.2.1.2.10", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MHO---", desc_kor: "의무후송헬기", desc_eng: "Medevac" },
                                    { id: "1.2.1.2.11", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MHM---", desc_kor: "기동부대헬기", desc_eng: "Special,operations,forces,(SOF)" },
                                    { id: "1.2.1.2.12", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MHD---", desc_kor: "공수지휘헬기", desc_eng: "Airborne,command,post,(C2)" },
                                    { id: "1.2.1.2.13", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MHK---", desc_kor: "공중급유헬기", desc_eng: "Tanker" },
                                    { id: "1.2.1.2.14", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MHJ---", desc_kor: "전파교란헬기", desc_eng: "Electronic,countermeasures,(ECM/jammer)" }
                                ]
                            },
                            { id: "1.2.1.3", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "ML----", desc_kor: "풍선기구(군용)", desc_eng: "Lighter,than,air" },
                            { id: "1.2.1.4", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "MV----", desc_kor: "VIP", desc_eng: "Very,important,person,(VIP)" },
                            { id: "1.2.1.5", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "ME----", desc_kor: "호위", desc_eng: "Escort" }
                        ]
                    },
                    {
                        id: "1.2.2",
                        type: "S",
                        affiliation: "*",
                        battlefield: "A",
                        status: "*",
                        modifier: "W-----",
                        desc_kor: "공중화기",
                        desc_eng: "Weapon",
                        children: [{
                                id: "1.2.2.1",
                                type: "S",
                                affiliation: "*",
                                battlefield: "A",
                                status: "*",
                                modifier: "WM----",
                                desc_kor: "유도탄(공중)",
                                desc_eng: "Missile,in,flight",
                                children: [{
                                        id: "1.2.2.1.1",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "A",
                                        status: "*",
                                        modifier: "WMS---",
                                        desc_kor: "지대(함)유도탄",
                                        desc_eng: "Surface,launched,missile",
                                        children: [
                                            { id: "1.2.2.1.1.1", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "WMSS--", desc_kor: "지(함)대지(함)유도탄", desc_eng: "Surface-to-surface,missile,(SSM)" },
                                            { id: "1.2.2.1.1.2", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "WMS-", desc_kor: "지(함)대공유도탄", desc_eng: "Surface-to-air,missile,(SAM)" },
                                            { id: "1.2.2.1.1.3", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "WMSU--", desc_kor: "대잠유도탄", desc_eng: "Surface-to-subsurface,missile" },
                                            { id: "1.2.2.1.1.4", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "WMSB--", desc_kor: "탄도탄 요격 유도탄", desc_eng: "Antiballistic,missile,(ABM)" }
                                        ]
                                    },
                                    {
                                        id: "1.2.2.1.2",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "A",
                                        status: "*",
                                        modifier: "WM--",
                                        desc_kor: "공대유도탄",
                                        desc_eng: "Air,launched,missile",
                                        children: [
                                            { id: "1.2.2.1.2.1", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "WMAS--", desc_kor: "공대지(함)유도탄", desc_eng: "Air-to-surface,missile,(ASM)" },
                                            { id: "1.2.2.1.2.2", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "WMA-", desc_kor: "공대공유도탄", desc_eng: "Air-to-air,missile,(AAM)" },
                                            { id: "1.2.2.1.2.3", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "WMAP--", desc_kor: "공대 우주 유도탄", desc_eng: "Air-to-space,missile" }
                                        ]
                                    },
                                    {
                                        id: "1.2.2.1.3",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "A",
                                        status: "*",
                                        modifier: "WMU---",
                                        desc_kor: "잠대지(함) 유도탄",
                                        desc_eng: "Subsurface-to-surface,missile,(S/SSM)",
                                        children: [
                                            { id: "1.2.2.1.3.1", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "WMCM--", desc_kor: "순항유도탄", desc_eng: "Cruise,missile" }
                                        ]
                                    },
                                    { id: "1.2.2.1.4", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "WMB---", desc_kor: "탄도유도탄", desc_eng: "Ballistic,missile" },
                                    { id: "1.2.2.1.5", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "WML---", desc_kor: "지상공격유도탄", desc_eng: "Ground,attack,missile" }
                                ]
                            },
                            { id: "1.2.2.2", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "WD----", desc_kor: "유인유도탄", desc_eng: "Decoy" },
                            { id: "1.2.2.3", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "WB----", desc_kor: "폭탄", desc_eng: "Bomb" }
                        ]
                    },
                    {
                        id: "1.2.3",
                        type: "S",
                        affiliation: "*",
                        battlefield: "A",
                        status: "*",
                        modifier: "C-----",
                        desc_kor: "공중항적(민간)",
                        desc_eng: "Civil,aircraft",
                        children: [
                            { id: "1.2.3.1", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "CF----", desc_kor: "고정익(민간)", desc_eng: "Fixed,wing" },
                            { id: "1.2.3.2", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "CH----", desc_kor: "회전익(민간)", desc_eng: "Rotary,wing" },
                            { id: "1.2.3.3", type: "S", affiliation: "*", battlefield: "A", status: "*", modifier: "CL----", desc_kor: "풍선기구(민간)", desc_eng: "Lighter,than,air" }
                        ]
                    }
                ]
            },
            {
                id: "1.3",
                type: "S",
                affiliation: "*",
                battlefield: "G",
                status: "*",
                modifier: "------",
                desc_kor: "지상항적",
                desc_eng: "Ground,track",
                children: [{
                        id: "1.3.1",
                        type: "S",
                        affiliation: "*",
                        battlefield: "G",
                        status: "*",
                        modifier: "U-----",
                        desc_kor: "부대",
                        desc_eng: "Unit",
                        children: [{
                                id: "1.3.1.1",
                                type: "S",
                                affiliation: "*",
                                battlefield: "G",
                                status: "*",
                                modifier: "UC----",
                                desc_kor: "전투",
                                desc_eng: "Combat",
                                children: [{
                                        id: "1.3.1.1.1",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "UCD---",
                                        desc_kor: "방공",
                                        desc_eng: "Air,defense",
                                        children: [{
                                                id: "1.3.1.1.1.1",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "UCDS--",
                                                desc_kor: "단거리방공",
                                                desc_eng: "Short,range",
                                                children: [
                                                    { id: "1.3.1.1.1.1.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCDSC-", desc_kor: "채퍼럴방공", desc_eng: "Chaparral" },
                                                    { id: "1.3.1.1.1.1.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCDSS-", desc_kor: "스팅거방공", desc_eng: "Stinger" },
                                                    { id: "1.3.1.1.1.1.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCDSV-", desc_kor: "발칸방공", desc_eng: "Vulcan" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.1.1.2",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "UCDM--",
                                                desc_kor: "방공유도탄",
                                                desc_eng: "Air,defense,missile",
                                                children: [{
                                                        id: "1.3.1.1.1.2.1",
                                                        type: "S",
                                                        affiliation: "*",
                                                        battlefield: "G",
                                                        status: "*",
                                                        modifier: "UCDML-",
                                                        desc_kor: "방공유도탄(경)",
                                                        desc_eng: "Air,defense,missile,light",
                                                        children: [
                                                            { id: "1.3.1.1.1.2.1.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCDMLA", desc_kor: "방공유도탄(경-차량화)", desc_eng: "Air,defense,missile,motorized,(Avenger)" }
                                                        ]
                                                    },
                                                    { id: "1.3.1.1.1.2.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCDMM-", desc_kor: "방공유도탄(중)", desc_eng: "Air,defense,missile,medium" },
                                                    { id: "1.3.1.1.1.2.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCDMH-", desc_kor: "방공유도탄(대)", desc_eng: "Air,defense,missile,heavy" },
                                                    {
                                                        id: "1.3.1.1.1.2.4",
                                                        type: "S",
                                                        affiliation: "*",
                                                        battlefield: "G",
                                                        status: "*",
                                                        modifier: "UCDH--",
                                                        desc_kor: "방공(고고도)",
                                                        desc_eng: "H/MAD",
                                                        children: [
                                                            { id: "1.3.1.1.1.2.4.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCDHH-", desc_kor: "호크방공", desc_eng: "Hawk" },
                                                            { id: "1.3.1.1.1.2.4.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCDHP-", desc_kor: "패트리어트방공", desc_eng: "Patriot" },
                                                            { id: "1.3.1.1.1.2.4.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCDHN-", desc_kor: "나이키방공", desc_eng: "Nike" }
                                                        ]
                                                    }
                                                ]
                                            },
                                            { id: "1.3.1.1.1.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCDG--", desc_kor: "대공포", desc_eng: "Gun,unit" },
                                            { id: "1.3.1.1.1.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCDC--", desc_kor: "복합(포/유도탄)", desc_eng: "Composite" },
                                            { id: "1.3.1.1.1.5", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCDT--", desc_kor: "방공표적획득", desc_eng: "Targeting,unit" },
                                            { id: "1.3.1.1.1.6", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCDO--", desc_kor: "전구유도탄방어", desc_eng: "Theater,missile,defense,unit" }
                                        ]
                                    },
                                    {
                                        id: "1.3.1.1.2",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "UC--",
                                        desc_kor: "기갑",
                                        desc_eng: "Armor",
                                        children: [{
                                                id: "1.3.1.1.2.1",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "UCAT--",
                                                desc_kor: "기갑(궤도)",
                                                desc_eng: "Armor,track",
                                                children: [
                                                    { id: "1.3.1.1.2.1.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCAT", desc_kor: "기갑(궤도-공수)", desc_eng: "Armor,track,airborne" },
                                                    {
                                                        id: "1.3.1.1.2.1.2",
                                                        type: "S",
                                                        affiliation: "*",
                                                        battlefield: "G",
                                                        status: "*",
                                                        modifier: "UCATW-",
                                                        desc_kor: "기갑(궤도-상륙)",
                                                        desc_eng: "Armor,track,amphibious",
                                                        children: [
                                                            { id: "1.3.1.1.2.1.2.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCATWR", desc_kor: "기갑(궤도-상륙정비)", desc_eng: "Armor,track,amphibious,recovery" }
                                                        ]
                                                    },
                                                    { id: "1.3.1.1.2.1.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCATL-", desc_kor: "기갑(궤도-경)", desc_eng: "Armor,track,,Light" },
                                                    { id: "1.3.1.1.2.1.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCATM-", desc_kor: "기갑(궤도-중)", desc_eng: "Armor,track,,Medium" },
                                                    { id: "1.3.1.1.2.1.5", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCATH-", desc_kor: "기갑(궤도-대)", desc_eng: "Armor,track,,Heavy" },
                                                    { id: "1.3.1.1.2.1.6", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCATR-", desc_kor: "기갑(궤도-정비)", desc_eng: "Armor,track,,Recovery" },
                                                    { id: "1.3.1.1.2.1.7", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCATD-", desc_kor: "기갑(궤도-방공)", desc_eng: "Armor,track,,Air,defense" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.1.2.2",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "UCAW--",
                                                desc_kor: "기갑(차륜)",
                                                desc_eng: "Armor,,wheeled",
                                                children: [
                                                    { id: "1.3.1.1.2.2.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCAWS-", desc_kor: "기갑(차륜-강습)", desc_eng: "Armor,,wheeled,air,assault" },
                                                    { id: "1.3.1.1.2.2.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCAWA-", desc_kor: "기갑(차륜-공수)", desc_eng: "Armor,,wheeled,airborne" },
                                                    {
                                                        id: "1.3.1.1.2.2.3",
                                                        type: "S",
                                                        affiliation: "*",
                                                        battlefield: "G",
                                                        status: "*",
                                                        modifier: "UCAWW-",
                                                        desc_kor: "기갑(차륜-상륙)",
                                                        desc_eng: "Armor,,wheeled,amphibious",
                                                        children: [
                                                            { id: "1.3.1.1.2.2.3.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCAWWR", desc_kor: "기갑(차륜-상륙구조)", desc_eng: "Armor,,wheeled,amphibious,recovery" }
                                                        ]
                                                    },
                                                    { id: "1.3.1.1.2.2.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCAWL-", desc_kor: "기갑(차륜-경)", desc_eng: "Armor,,wheeled,light" },
                                                    { id: "1.3.1.1.2.2.5", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCAWM-", desc_kor: "기갑(차륜-중)", desc_eng: "Armor,,wheeled,medium" },
                                                    { id: "1.3.1.1.2.2.6", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCAWH-", desc_kor: "기갑(차륜-대)", desc_eng: "Armor,,wheeled,heavy" },
                                                    { id: "1.3.1.1.2.2.7", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCAWR-", desc_kor: "기갑(차륜-정비)", desc_eng: "Armor,,wheeled,recovery" }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        id: "1.3.1.1.3",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "UCAA--",
                                        desc_kor: "대전차",
                                        desc_eng: "Antiarmor",
                                        children: [
                                            { id: "1.3.1.1.3.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCAAD-", desc_kor: "대전차(하차)", desc_eng: "Antiarmor,dismounted" },
                                            { id: "1.3.1.1.3.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCAAL-", desc_kor: "대전차(경)", desc_eng: "Antiarmor,light" },
                                            { id: "1.3.1.1.3.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCAAM-", desc_kor: "대전차(공수)", desc_eng: "Antiarmor,airborne" },
                                            { id: "1.3.1.1.3.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCAAS-", desc_kor: "대전차(강습)", desc_eng: "Antiarmor,air,assault" },
                                            { id: "1.3.1.1.3.5", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCAAU-", desc_kor: "대전차(산악)", desc_eng: "Antiarmor,mountain" },
                                            { id: "1.3.1.1.3.6", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCAAC-", desc_kor: "대전차(빙상)", desc_eng: "Antiarmor,arctic" },
                                            {
                                                id: "1.3.1.1.3.7",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "UCAAA-",
                                                desc_kor: "대전차기갑",
                                                desc_eng: "Antiarmor,armored",
                                                children: [
                                                    { id: "1.3.1.1.3.7.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCAAAT", desc_kor: "대전차기갑(궤도)", desc_eng: "Antiarmor,armored,tracked" },
                                                    { id: "1.3.1.1.3.7.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCAAAW", desc_kor: "대전차기갑(차륜)", desc_eng: "Antiarmor,armored,wheeled" },
                                                    { id: "1.3.1.1.3.7.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCAAAS", desc_kor: "대전차기갑(강습)", desc_eng: "Antiarmor,armored,air,assault" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.1.3.8",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "UCAAO-",
                                                desc_kor: "대전차차량화",
                                                desc_eng: "Antiarmor,motorized",
                                                children: [
                                                    { id: "1.3.1.1.3.8.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCAAOS", desc_kor: "대전차차량화(강습)", desc_eng: "Antiarmor,motorized,air,assault" }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        id: "1.3.1.1.4",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "UCV---",
                                        desc_kor: "항공",
                                        desc_eng: "Aviation",
                                        children: [{
                                                id: "1.3.1.1.4.1",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "UCVF--",
                                                desc_kor: "고정익항공",
                                                desc_eng: "Fixed,wing",
                                                children: [
                                                    { id: "1.3.1.1.4.1.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCVFU-", desc_kor: "다목적고정익항공", desc_eng: "Utility,fixed,wing" },
                                                    { id: "1.3.1.1.4.1.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCVFA-", desc_kor: "공격고정익항공", desc_eng: "Attack,fixed,wing" },
                                                    { id: "1.3.1.1.4.1.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCVFR-", desc_kor: "수색정찰고정익항공", desc_eng: "Recon,fixed,wing" },
                                                    { id: "1.3.1.1.4.1.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCVFT-", desc_kor: "고정익항공훈련", desc_eng: "Trainer,fixed,wing" },
                                                    { id: "1.3.1.1.4.1.5", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCVFP-", desc_kor: "초계고정익항공", desc_eng: "Patrol,fixed,wing" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.1.4.2",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "UCVR--",
                                                desc_kor: "회전익항공",
                                                desc_eng: "Rotary,wing",
                                                children: [
                                                    { id: "1.3.1.1.4.2.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCVRA-", desc_kor: "공격헬기", desc_eng: "Attack,rotary,wing" },
                                                    { id: "1.3.1.1.4.2.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCVRS-", desc_kor: "수색정찰헬기", desc_eng: "Scout,rotary,wing" },
                                                    { id: "1.3.1.1.4.2.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCVRW-", desc_kor: "대잠헬기", desc_eng: "Antisubmarine,warfare,rotary,wing" },
                                                    {
                                                        id: "1.3.1.1.4.2.4",
                                                        type: "S",
                                                        affiliation: "*",
                                                        battlefield: "G",
                                                        status: "*",
                                                        modifier: "UCVRU-",
                                                        desc_kor: "다목적헬기",
                                                        desc_eng: "Utility,rotary,wing",
                                                        children: [
                                                            { id: "1.3.1.1.4.2.4.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCVRUL", desc_kor: "다목적헬기(경)", desc_eng: "Light,utility,rotary,wing" },
                                                            { id: "1.3.1.1.4.2.4.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCVRUM", desc_kor: "다목적헬기(중)", desc_eng: "Medium,utility,rotary,wing" },
                                                            { id: "1.3.1.1.4.2.4.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCVRUH", desc_kor: "다목적헬기(대)", desc_eng: "Heavy,utility,rotary,wing" }
                                                        ]
                                                    },
                                                    { id: "1.3.1.1.4.2.5", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCVRUC", desc_kor: "지휘통제헬기", desc_eng: "C2,rotary,wing" },
                                                    { id: "1.3.1.1.4.2.6", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCVRUE", desc_kor: "의무후송헬기", desc_eng: "Medevac,rotary,wing" },
                                                    { id: "1.3.1.1.4.2.7", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCVRM-", desc_kor: "대기뢰헬기", desc_eng: "Mine,countermeasure,rotary,wing" }
                                                ]
                                            },
                                            { id: "1.3.1.1.4.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCVS--", desc_kor: "탐색구조헬기", desc_eng: "Search,and,rescue" },
                                            { id: "1.3.1.1.4.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCVC--", desc_kor: "복합(고정/회전익)", desc_eng: "Composite" },
                                            { id: "1.3.1.1.4.5", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCVV--", desc_kor: "수직이착륙기", desc_eng: "Vertical,and/or,short,takeoff,and,landing,aircraft,(V/STOL)" },
                                            {
                                                id: "1.3.1.1.4.6",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "UCVU--",
                                                desc_kor: "무인항공기",
                                                desc_eng: "Unmanned,aircraft",
                                                children: [
                                                    { id: "1.3.1.1.4.6.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCVUF-", desc_kor: "무인항공기(고정익)", desc_eng: "Unmanned,aircraft,fixed,wing" },
                                                    { id: "1.3.1.1.4.6.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCVUR-", desc_kor: "무인항공기(회전익)", desc_eng: "Unmanned,aircraft,rotary,wing" }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        id: "1.3.1.1.5",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "UCI---",
                                        desc_kor: "보병",
                                        desc_eng: "Infantry",
                                        children: [
                                            { id: "1.3.1.1.5.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCIL--", desc_kor: "보병(경)", desc_eng: "Infantry,light" },
                                            { id: "1.3.1.1.5.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCIM--", desc_kor: "차량화보병", desc_eng: "Infantry,motorized" },
                                            { id: "1.3.1.1.5.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCIO--", desc_kor: "산악보병", desc_eng: "Infantry,mountain" },
                                            { id: "1.3.1.1.5.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCIA--", desc_kor: "공수보병", desc_eng: "Infantry,airborne" },
                                            { id: "1.3.1.1.5.5", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCIS--", desc_kor: "강습보병", desc_eng: "Infantry,air,assault" },
                                            { id: "1.3.1.1.5.6", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCIZ--", desc_kor: "기계화보병", desc_eng: "Infantry,mechanized" },
                                            { id: "1.3.1.1.5.7", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCIN--", desc_kor: "해군보병", desc_eng: "Infantry,naval" },
                                            { id: "1.3.1.1.5.8", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCII--", desc_kor: "전투차량화보병", desc_eng: "Infantry,fighting,vehicle" },
                                            { id: "1.3.1.1.5.9", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCIC--", desc_kor: "빙상보병", desc_eng: "Infantry,arctic" },
                                            { id: "1.3.1.1.5.10", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCIP--", desc_kor: "상륙보병", desc_eng: "Infantry,amphibious" },
                                            { id: "1.3.1.1.5.11", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCIB--", desc_kor: "특공", desc_eng: "Infantry,special,force" }
                                        ]
                                    },
                                    {
                                        id: "1.3.1.1.6",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "UCE---",
                                        desc_kor: "공병",
                                        desc_eng: "Engineer",
                                        children: [{
                                                id: "1.3.1.1.6.1",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "UCEC--",
                                                desc_kor: "전투공병",
                                                desc_eng: "Engineer,combat",
                                                children: [
                                                    { id: "1.3.1.1.6.1.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCECS-", desc_kor: "강습공병", desc_eng: "Engineer,combat,air,assault" },
                                                    { id: "1.3.1.1.6.1.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCECA-", desc_kor: "공수공병", desc_eng: "Engineer,combat,airborne" },
                                                    { id: "1.3.1.1.6.1.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCECC-", desc_kor: "한대전투공병", desc_eng: "Engineer,combat,arctic" },
                                                    { id: "1.3.1.1.6.1.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCECL-", desc_kor: "전투공병(경)", desc_eng: "Engineer,combat,Light,(Sapper)" },
                                                    { id: "1.3.1.1.6.1.5", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCECM-", desc_kor: "전투공병(중)", desc_eng: "Engineer,combat,Medium" },
                                                    { id: "1.3.1.1.6.1.6", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCECH-", desc_kor: "전투공병(대)", desc_eng: "Engineer,combat,Heavy" },
                                                    { id: "1.3.1.1.6.1.7", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCECT-", desc_kor: "기계화공병", desc_eng: "Engineer,combat,Mechanized,(Track)" },
                                                    { id: "1.3.1.1.6.1.8", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCECW-", desc_kor: "차량화공병", desc_eng: "Engineer,combat,Motorized" },
                                                    { id: "1.3.1.1.6.1.9", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCECO-", desc_kor: "산악공병", desc_eng: "Engineer,combat,Mountain" },
                                                    { id: "1.3.1.1.6.1.10", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCECR-", desc_kor: "수색정찰공병", desc_eng: "Engineer,combat,Recon" },
                                                    { id: "1.3.1.1.6.1.11", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCECV-", desc_kor: "도하공병", desc_eng: "Engineer,combat,Water,crossing" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.1.6.2",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "UCEN--",
                                                desc_kor: "건설공병",
                                                desc_eng: "Engineer,construction",
                                                children: [
                                                    { id: "1.3.1.1.6.2.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCENN-", desc_kor: "해군건설공병", desc_eng: "Engineer,naval,construction" },
                                                    { id: "1.3.1.1.6.2.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCENA-", desc_kor: "공군건설공병", desc_eng: "Engineer,air,force,construction" },
                                                    { id: "1.3.1.1.6.2.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCENB-", desc_kor: "도하 및 교량가설", desc_eng: "Engineer,construction,,Water,crossing/Bridge" }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        id: "1.3.1.1.7",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "UCF---",
                                        desc_kor: "포병(야전)",
                                        desc_eng: "Field,artillery",
                                        children: [{
                                                id: "1.3.1.1.7.1",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "UCFH--",
                                                desc_kor: "포",
                                                desc_eng: "Howitzer/Gun",
                                                children: [
                                                    { id: "1.3.1.1.7.1.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFHE-", desc_kor: "자주포", desc_eng: "Self-propelled" },
                                                    { id: "1.3.1.1.7.1.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFHS-", desc_kor: "강습(포병)", desc_eng: "Air,assault" },
                                                    { id: "1.3.1.1.7.1.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFHA-", desc_kor: "공수(포병)", desc_eng: "Airborne" },
                                                    { id: "1.3.1.1.7.1.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFHC-", desc_kor: "빙상(포병)", desc_eng: "Arctic" },
                                                    { id: "1.3.1.1.7.1.5", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFHO-", desc_kor: "산악(포병)", desc_eng: "Mountain" },
                                                    { id: "1.3.1.1.7.1.6", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFHL-", desc_kor: "포(경)", desc_eng: "Light" },
                                                    { id: "1.3.1.1.7.1.7", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFHM-", desc_kor: "포(중)", desc_eng: "Medium" },
                                                    { id: "1.3.1.1.7.1.8", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFHH-", desc_kor: "포(대)", desc_eng: "Heavy" },
                                                    { id: "1.3.1.1.7.1.9", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFHX-", desc_kor: "상륙포병", desc_eng: "Amphibious" },
                                                    { id: "1.3.1.1.7.1.10", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFHI-", desc_kor: "기계화포병(보병부대)", desc_eng: "Mechanized,(Infantry)" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.1.7.2",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "UCFR--",
                                                desc_kor: "로켓",
                                                desc_eng: "Rocket",
                                                children: [{
                                                        id: "1.3.1.1.7.2.1",
                                                        type: "S",
                                                        affiliation: "*",
                                                        battlefield: "G",
                                                        status: "*",
                                                        modifier: "UCFRS-",
                                                        desc_kor: "단연장로켓발사기",
                                                        desc_eng: "Single,rocket,,Launcher",
                                                        children: [
                                                            { id: "1.3.1.1.7.2.1.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFRSS", desc_kor: "단연장로켓발사기(자주식)", desc_eng: "Single,rocket,,Self-propelled" },
                                                            { id: "1.3.1.1.7.2.1.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFRSR", desc_kor: "단연장로켓발사기(차량)", desc_eng: "Single,rocket,,Truck" },
                                                            { id: "1.3.1.1.7.2.1.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFRST", desc_kor: "단연장로켓발사기(견인)", desc_eng: "Single,rocket,,Towed" }
                                                        ]
                                                    },
                                                    {
                                                        id: "1.3.1.1.7.2.2",
                                                        type: "S",
                                                        affiliation: "*",
                                                        battlefield: "G",
                                                        status: "*",
                                                        modifier: "UCFRM-",
                                                        desc_kor: "다련장로켓발사기",
                                                        desc_eng: "Multiple,rocket,,Launcher",
                                                        children: [
                                                            { id: "1.3.1.1.7.2.2.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFRMS", desc_kor: "다련장로켓발사기(자주식)", desc_eng: "Multiple,rocket,,Self-propelled" },
                                                            { id: "1.3.1.1.7.2.2.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFRMR", desc_kor: "다련장로켓발사기(차량)", desc_eng: "Multiple,rocket,,Truck" },
                                                            { id: "1.3.1.1.7.2.2.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFRMT", desc_kor: "다련장로켓발사기(견인)", desc_eng: "Multiple,rocket,,Towed" }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.1.7.3",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "UCFT--",
                                                desc_kor: "포병표적획득",
                                                desc_eng: "Target,acquisition",
                                                children: [
                                                    { id: "1.3.1.1.7.3.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFTR-", desc_kor: "포병표적획득(레이다)", desc_eng: "Radar" },
                                                    { id: "1.3.1.1.7.3.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFTS-", desc_kor: "포병표적획득(음향)", desc_eng: "Sound" },
                                                    { id: "1.3.1.1.7.3.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFTF-", desc_kor: "포병표적획득(광학)", desc_eng: "Flash,(Optical)" },
                                                    {
                                                        id: "1.3.1.1.7.3.4",
                                                        type: "S",
                                                        affiliation: "*",
                                                        battlefield: "G",
                                                        status: "*",
                                                        modifier: "UCFTC-",
                                                        desc_kor: "관측반",
                                                        desc_eng: "Colt/fist",
                                                        children: [
                                                            { id: "1.3.1.1.7.3.4.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFTCD", desc_kor: "관측반(하차)", desc_eng: "Dismounted,colt/Fist" },
                                                            { id: "1.3.1.1.7.3.4.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFTCM", desc_kor: "관측반(궤도화)", desc_eng: "Tracked,colt/Fist" }
                                                        ]
                                                    },
                                                    { id: "1.3.1.1.7.3.5", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFTA-", desc_kor: "함포항공연락", desc_eng: "Anglico" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.1.7.4",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "UCFM--",
                                                desc_kor: "박격포",
                                                desc_eng: "Mortar",
                                                children: [
                                                    { id: "1.3.1.1.7.4.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFMS-", desc_kor: "박격포(자주궤도식)", desc_eng: "Self-propelled,(SP),tracked,mortar" },
                                                    { id: "1.3.1.1.7.4.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFMW-", desc_kor: "박격포(자주차륜식)", desc_eng: "Sp,wheeled,mortar" },
                                                    {
                                                        id: "1.3.1.1.7.4.3",
                                                        type: "S",
                                                        affiliation: "*",
                                                        battlefield: "G",
                                                        status: "*",
                                                        modifier: "UCFMT-",
                                                        desc_kor: "박격포(견인)",
                                                        desc_eng: "Towed,mortar",
                                                        children: [
                                                            { id: "1.3.1.1.7.4.3.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFMTA", desc_kor: "박격포(견인-공수)", desc_eng: "Towed,airborne,mortar" },
                                                            { id: "1.3.1.1.7.4.3.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFMTS", desc_kor: "박격포(견인-강습)", desc_eng: "Towed,air,assault,mortar" },
                                                            { id: "1.3.1.1.7.4.3.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFMTC", desc_kor: "박격포(견인-빙상)", desc_eng: "Towed,arctic,mortar" },
                                                            { id: "1.3.1.1.7.4.3.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFMTO", desc_kor: "박격포(견인-산악)", desc_eng: "Towed,mountain,mortar" }
                                                        ]
                                                    },
                                                    { id: "1.3.1.1.7.4.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFML-", desc_kor: "박격포(상륙)", desc_eng: "Amphibious,mortar" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.1.7.5",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "UCFS--",
                                                desc_kor: "포병측지",
                                                desc_eng: "Artillery,survey",
                                                children: [
                                                    { id: "1.3.1.1.7.5.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFSS-", desc_kor: "포병측지(강습)", desc_eng: "Air,assault" },
                                                    { id: "1.3.1.1.7.5.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFSA-", desc_kor: "포병측지(공수)", desc_eng: "Airborne" },
                                                    { id: "1.3.1.1.7.5.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFSL-", desc_kor: "포병측지(경)", desc_eng: "Light" },
                                                    { id: "1.3.1.1.7.5.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFSO-", desc_kor: "포병측지(산악)", desc_eng: "Mountain" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.1.7.6",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "UCFO--",
                                                desc_kor: "기상관측",
                                                desc_eng: "Meteorological",
                                                children: [
                                                    { id: "1.3.1.1.7.6.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFOS-", desc_kor: "기상관측(강습)", desc_eng: "Air,assault,meteorological" },
                                                    { id: "1.3.1.1.7.6.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFOA-", desc_kor: "기상관측(공수)", desc_eng: "Airborne,meteorological" },
                                                    { id: "1.3.1.1.7.6.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFOL-", desc_kor: "기상관측(경)", desc_eng: "Light,meteorological" },
                                                    { id: "1.3.1.1.7.6.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCFOO-", desc_kor: "기상관측(산악)", desc_eng: "Mountain,meteorological" }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        id: "1.3.1.1.8",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "UCR---",
                                        desc_kor: "수색정찰",
                                        desc_eng: "Reconnaissance",
                                        children: [
                                            { id: "1.3.1.1.8.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCRH--", desc_kor: "수색정찰(기병)", desc_eng: "Reconnaissance,,Horse" },
                                            {
                                                id: "1.3.1.1.8.2",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "UCRV--",
                                                desc_kor: "수색정찰(기갑)",
                                                desc_eng: "Reconnaissance,,Cavalry",
                                                children: [
                                                    { id: "1.3.1.1.8.2.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCRVA-", desc_kor: "수색정찰(기갑-장갑화)", desc_eng: "Reconnaissance,,Cavalry,armored" },
                                                    { id: "1.3.1.1.8.2.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCRVM-", desc_kor: "수색정찰(기갑-차량화)", desc_eng: "Reconnaissance,,Cavalry,motorized" },
                                                    { id: "1.3.1.1.8.2.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCRVG-", desc_kor: "수색정찰(기갑-지상)", desc_eng: "Reconnaissance,,Cavalry,ground" },
                                                    { id: "1.3.1.1.8.2.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCRVO-", desc_kor: "수색정찰(기갑-공중)", desc_eng: "Reconnaissance,,Cavalry,air" }
                                                ]
                                            },
                                            { id: "1.3.1.1.8.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCRC--", desc_kor: "수색정찰(빙상)", desc_eng: "Reconnaissance,,Arctic" },
                                            { id: "1.3.1.1.8.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCRS--", desc_kor: "수색정찰(강습)", desc_eng: "Reconnaissance,,Air,assault" },
                                            { id: "1.3.1.1.8.5", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCRA--", desc_kor: "수색정찰(공수)", desc_eng: "Reconnaissance,,Airborne" },
                                            { id: "1.3.1.1.8.6", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCRO--", desc_kor: "수색정찰(산악)", desc_eng: "Reconnaissance,,Mountain" },
                                            { id: "1.3.1.1.8.7", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCRL--", desc_kor: "수색정찰(경)", desc_eng: "Reconnaissance,,Light" },
                                            {
                                                id: "1.3.1.1.8.8",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "UCRR--",
                                                desc_kor: "수색정찰(해병)",
                                                desc_eng: "Reconnaissance,,Marine",
                                                children: [
                                                    { id: "1.3.1.1.8.8.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCRRD-", desc_kor: "수색정찰(해병-사단)", desc_eng: "Reconnaissance,,Marine,division" },
                                                    { id: "1.3.1.1.8.8.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCRRF-", desc_kor: "수색정찰(해병대-원정군)", desc_eng: "Reconnaissance,,Marine,force" },
                                                    { id: "1.3.1.1.8.8.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCRRL-", desc_kor: "수색정찰(해병-경무장)", desc_eng: "Reconnaissance,,Marine,light,armored,reconnaissnace,(LAR)" }
                                                ]
                                            },
                                            { id: "1.3.1.1.8.9", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCRX--", desc_kor: "수색정찰(광역수색)", desc_eng: "Reconnaissance,,Long,range,surveillance,(LRS)" },
                                            { id: "1.3.1.1.8.10", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCRB--", desc_kor: "수색정찰(기구정찰)", desc_eng: "Reconnaissance,,Lighter,than,air,surveillance" }
                                        ]
                                    },
                                    {
                                        id: "1.3.1.1.9",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "UCM---",
                                        desc_kor: "유도탄(지대지)",
                                        desc_eng: "Missile,(Surf-Surf)",
                                        children: [
                                            { id: "1.3.1.1.9.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCMT--", desc_kor: "유도탄(전술)", desc_eng: "Missile,(Surf-Surf),tactical" },
                                            { id: "1.3.1.1.9.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCMS--", desc_kor: "유도탄(전략)", desc_eng: "Missile,(Surf-Surf),strategic" }
                                        ]
                                    },
                                    {
                                        id: "1.3.1.1.10",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "UCS---",
                                        desc_kor: "경비부대",
                                        desc_eng: "Internal,security,forces",
                                        children: [
                                            { id: "1.3.1.1.10.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCSW--", desc_kor: "경비부대(강변)", desc_eng: "Riverine" },
                                            {
                                                id: "1.3.1.1.10.2",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "UCSG--",
                                                desc_kor: "경비지상군",
                                                desc_eng: "Ground",
                                                children: [
                                                    { id: "1.3.1.1.10.2.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCSGD-", desc_kor: "경비지상군(하차)", desc_eng: "Dismounted,ground" },
                                                    { id: "1.3.1.1.10.2.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCSGM-", desc_kor: "경비지상군(차량화)", desc_eng: "Motorized,ground" },
                                                    { id: "1.3.1.1.10.2.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCSGA-", desc_kor: "경비지상군(기계화)", desc_eng: "Mechanized,ground" }
                                                ]
                                            },
                                            { id: "1.3.1.1.10.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCSM--", desc_kor: "경비지상군(기갑화)", desc_eng: "Wheeled,mechanized" },
                                            { id: "1.3.1.1.10.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCSR--", desc_kor: "경비부대(철도)", desc_eng: "Railroad" },
                                            { id: "1.3.1.1.10.5", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCSA--", desc_kor: "경비부대(항공)", desc_eng: "Aviation" }
                                        ]
                                    },
                                    { id: "1.3.1.1.11", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UCO---", desc_kor: "관측 및 감시", desc_eng: "Observation,and,surveillance" }
                                ]
                            },
                            {
                                id: "1.3.1.2",
                                type: "S",
                                affiliation: "*",
                                battlefield: "G",
                                status: "*",
                                modifier: "UU----",
                                desc_kor: "전투지원",
                                desc_eng: "Combat,support",
                                children: [{
                                        id: "1.3.1.2.1",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "UUA---",
                                        desc_kor: "화학",
                                        desc_eng: "Combat,support,cbrn",
                                        children: [{
                                                id: "1.3.1.2.1.1",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "UUAC--",
                                                desc_kor: "화학전",
                                                desc_eng: "Chemical",
                                                children: [{
                                                        id: "1.3.1.2.1.1.1",
                                                        type: "S",
                                                        affiliation: "*",
                                                        battlefield: "G",
                                                        status: "*",
                                                        modifier: "UUACC-",
                                                        desc_kor: "연막/제독",
                                                        desc_eng: "Smoke/Decon",
                                                        children: [
                                                            { id: "1.3.1.2.1.1.1.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUACCK", desc_kor: "연막/제독(기계화)", desc_eng: "Mechanized,smoke/Decon" },
                                                            { id: "1.3.1.2.1.1.1.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUACCM", desc_kor: "연막/제독(차량화)", desc_eng: "Motorized,smoke/Decon" }
                                                        ]
                                                    },
                                                    {
                                                        id: "1.3.1.2.1.1.2",
                                                        type: "S",
                                                        affiliation: "*",
                                                        battlefield: "G",
                                                        status: "*",
                                                        modifier: "UUACS-",
                                                        desc_kor: "연막",
                                                        desc_eng: "Smoke",
                                                        children: [
                                                            { id: "1.3.1.2.1.1.2.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUACSM", desc_kor: "연막(차량화)", desc_eng: "Motorized,smoke" },
                                                            { id: "1.3.1.2.1.1.2.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUACSA", desc_kor: "연막(장갑)", desc_eng: "Armor,smoke" }
                                                        ]
                                                    },
                                                    {
                                                        id: "1.3.1.2.1.1.3",
                                                        type: "S",
                                                        affiliation: "*",
                                                        battlefield: "G",
                                                        status: "*",
                                                        modifier: "UUACR-",
                                                        desc_kor: "화학(정찰)",
                                                        desc_eng: "Chemical,recon",
                                                        children: [
                                                            { id: "1.3.1.2.1.1.3.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUACRW", desc_kor: "화학정찰(기갑)", desc_eng: "Chemical,wheeled,armored,vehicle" },
                                                            { id: "1.3.1.2.1.1.3.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUACRS", desc_kor: "화학정찰(기갑-정찰감시)", desc_eng: "Chemical,wheeled,armored,vehicle,reconnaissance,surveillance" }
                                                        ]
                                                    }
                                                ]
                                            },
                                            { id: "1.3.1.2.1.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUAN--", desc_kor: "방사능전", desc_eng: "Nuclear" },
                                            {
                                                id: "1.3.1.2.1.3",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "UUAB--",
                                                desc_kor: "생물학전",
                                                desc_eng: "Biological",
                                                children: [
                                                    { id: "1.3.1.2.1.3.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUABR-", desc_kor: "생물학정찰(장비착용)", desc_eng: "Recon,equipped" }
                                                ]
                                            },
                                            { id: "1.3.1.2.1.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUAD--", desc_kor: "제독", desc_eng: "Decontamination" },
                                            { id: "1.3.1.2.1.5", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUAW--", desc_kor: "대량살상무기(대응)팀", desc_eng: "Weapon,Mass,Destruction(WMD)" },
                                            { id: "1.3.1.2.1.6", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUAR--", desc_kor: "화생방(신속대응)팀", desc_eng: "Chemical,Biological,Nuclear,Rapid,Response,Team(CRRT)" }
                                        ]
                                    },
                                    {
                                        id: "1.3.1.2.2",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "UUM---",
                                        desc_kor: "정보",
                                        desc_eng: "Military,intelligence",
                                        children: [
                                            { id: "1.3.1.2.2.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUMA--", desc_kor: "정보(공중감시)", desc_eng: "Aerial,exploitation" },
                                            {
                                                id: "1.3.1.2.2.2",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "UUMS--",
                                                desc_kor: "정보(신호정보-도청)",
                                                desc_eng: "Signal,intelligence,(SIGINT)",
                                                children: [{
                                                    id: "1.3.1.2.2.2.1",
                                                    type: "S",
                                                    affiliation: "*",
                                                    battlefield: "G",
                                                    status: "*",
                                                    modifier: "UUMSE-",
                                                    desc_kor: "전자전",
                                                    desc_eng: "Electronic,warfare",
                                                    children: [
                                                        { id: "1.3.1.2.2.2.1.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUMSEA", desc_kor: "전자전(기갑)", desc_eng: "Armored,wheeled,vehicle" },
                                                        { id: "1.3.1.2.2.2.1.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUMSED", desc_kor: "전파방향탐지", desc_eng: "Direction,finding" },
                                                        { id: "1.3.1.2.2.2.1.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUMSEI", desc_kor: "전파도청", desc_eng: "Intercept" },
                                                        { id: "1.3.1.2.2.2.1.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUMSEJ", desc_kor: "전파교란", desc_eng: "Jamming" },
                                                        { id: "1.3.1.2.2.2.1.5", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUMSET", desc_kor: "전자전전구", desc_eng: "Theater" },
                                                        { id: "1.3.1.2.2.2.1.6", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUMSEC", desc_kor: "전자전군단", desc_eng: "Corps" },
                                                        { id: "1.3.1.2.2.2.1.7", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUMSEF", desc_kor: "전파탐지", desc_eng: "Radiolocation" }
                                                    ]
                                                }]
                                            },
                                            { id: "1.3.1.2.2.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUMC--", desc_kor: "정보(방첩)", desc_eng: "Counterintelligence" },
                                            {
                                                id: "1.3.1.2.2.4",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "UUMR--",
                                                desc_kor: "정보(감시)",
                                                desc_eng: "Surveillance",
                                                children: [
                                                    { id: "1.3.1.2.2.4.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUMRG-", desc_kor: "정보지상감시레이다", desc_eng: "Ground,surveillance,radar" },
                                                    {
                                                        id: "1.3.1.2.2.4.2",
                                                        type: "S",
                                                        affiliation: "*",
                                                        battlefield: "G",
                                                        status: "*",
                                                        modifier: "UUMRS-",
                                                        desc_kor: "감시센서",
                                                        desc_eng: "Sensor",
                                                        children: [
                                                            { id: "1.3.1.2.2.4.2.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUMRSS", desc_kor: "감시센서(제어)", desc_eng: "Sensor,scm" }
                                                        ]
                                                    },
                                                    { id: "1.3.1.2.2.4.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUMRX-", desc_kor: "감시소", desc_eng: "Ground,station,module" },
                                                    { id: "1.3.1.2.2.4.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUMMO-", desc_kor: "정보(기상)", desc_eng: "Meteorological" }
                                                ]
                                            },
                                            { id: "1.3.1.2.2.5", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUMO--", desc_kor: "정보작전", desc_eng: "Operations" },
                                            { id: "1.3.1.2.2.6", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUMT--", desc_kor: "정보(선전전술)", desc_eng: "Tactical,exploit" },
                                            { id: "1.3.1.2.2.7", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUMQ--", desc_kor: "정보(심문)", desc_eng: "Interrogation" },
                                            { id: "1.3.1.2.2.8", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUMJ--", desc_kor: "합동정보본부", desc_eng: "Joint,intelligence,center" }
                                        ]
                                    },
                                    {
                                        id: "1.3.1.2.3",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "UUL---",
                                        desc_kor: "법시행부대",
                                        desc_eng: "Law,enforcement,unit",
                                        children: [
                                            { id: "1.3.1.2.3.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UULS--", desc_kor: "해안경비", desc_eng: "Shore,patrol" },
                                            { id: "1.3.1.2.3.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UULM--", desc_kor: "헌병", desc_eng: "Military,police" },
                                            {
                                                id: "1.3.1.2.3.3",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "UULC--",
                                                desc_kor: "민간경찰",
                                                desc_eng: "Civilian,law,enforcement",
                                                children: [
                                                    { id: "1.3.1.2.3.3.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UULCE-", desc_kor: "통신", desc_eng: "Communication" },
                                                    { id: "1.3.1.2.3.3.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UULCN-", desc_kor: "해양경찰", desc_eng: "Martime,police" },
                                                    { id: "1.3.1.2.3.3.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UULCA-", desc_kor: "항공경찰", desc_eng: "Aviation,police" },
                                                    { id: "1.3.1.2.3.3.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UULCC-", desc_kor: "전투경찰", desc_eng: "Combat,police" },
                                                    { id: "1.3.1.2.3.3.5", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UULCM-", desc_kor: "기동대", desc_eng: "Task,force" },
                                                    { id: "1.3.1.2.3.3.6", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UULCP-", desc_kor: "방범기동대", desc_eng: "Neighborhood,guard" },
                                                    { id: "1.3.1.2.3.3.7", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UULCG-", desc_kor: "경비대", desc_eng: "Guard" }
                                                ]
                                            },
                                            { id: "1.3.1.2.3.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UULF--", desc_kor: "기무부대", desc_eng: "Security,police,(Air)" },
                                            { id: "1.3.1.2.3.5", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UULD--", desc_kor: "중앙정보부", desc_eng: "Central,intelligence,division,(CID)" }
                                        ]
                                    },
                                    {
                                        id: "1.3.1.2.4",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "UUS---",
                                        desc_kor: "통신",
                                        desc_eng: "Signal,unit",
                                        children: [
                                            { id: "1.3.1.2.4.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUSA--", desc_kor: "통신구역", desc_eng: "Area" },
                                            {
                                                id: "1.3.1.2.4.2",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "UUSC--",
                                                desc_kor: "통신형성패키지",
                                                desc_eng: "Communication,configured,package",
                                                children: [
                                                    { id: "1.3.1.2.4.2.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUSCL-", desc_kor: "통신형성패키지(대)", desc_eng: "Large,communication,configured,package,(LCCP)" }
                                                ]
                                            },
                                            { id: "1.3.1.2.4.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUSO--", desc_kor: "통신지휘작전", desc_eng: "Command,operations" },
                                            { id: "1.3.1.2.4.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUSF--", desc_kor: "통신전송", desc_eng: "Forward,communications" },
                                            {
                                                id: "1.3.1.2.4.5",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "UUSM--",
                                                desc_kor: "다중채널",
                                                desc_eng: "Multiple,subscriber,element",
                                                children: [
                                                    { id: "1.3.1.2.4.5.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUSMS-", desc_kor: "확장단말(소)", desc_eng: "Small,extension,node" },
                                                    { id: "1.3.1.2.4.5.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUSML-", desc_kor: "확장단말(대)", desc_eng: "Large,extension,node" },
                                                    { id: "1.3.1.2.4.5.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUSMN-", desc_kor: "단말 본부", desc_eng: "Node,center" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.2.4.6",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "UUSR--",
                                                desc_kor: "무선통신소",
                                                desc_eng: "Radio,unit",
                                                children: [
                                                    { id: "1.3.1.2.4.6.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUSRS-", desc_kor: "전술위성", desc_eng: "Tactical,satellite" },
                                                    { id: "1.3.1.2.4.6.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUSRT-", desc_kor: "전신타자", desc_eng: "Teletype,center" },
                                                    { id: "1.3.1.2.4.6.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUSRW-", desc_kor: "중계소", desc_eng: "Relay" }
                                                ]
                                            },
                                            { id: "1.3.1.2.4.7", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUSS--", desc_kor: "통신지원", desc_eng: "Signal,support" },
                                            { id: "1.3.1.2.4.8", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUSW--", desc_kor: "교환대", desc_eng: "Telephone,switch" },
                                            { id: "1.3.1.2.4.9", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUSX--", desc_kor: "전자탐지", desc_eng: "Electronic,ranging" },
                                            { id: "1.3.1.2.4.10", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUB---", desc_kor: "민사", desc_eng: "Civil" }
                                        ]
                                    },
                                    { id: "1.3.1.2.5", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUI---", desc_kor: "정보전부대", desc_eng: "Information,warfare,unit" },
                                    { id: "1.3.1.2.6", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUP---", desc_kor: "상륙지원", desc_eng: "Landing,support" },
                                    { id: "1.3.1.2.7", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUE---", desc_kor: "폭발물처리", desc_eng: "Explosive,ordnance,disposal" },
                                    { id: "1.3.1.2.8", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UUW---", desc_kor: "기상", desc_eng: "Weather" }
                                ]
                            },
                            {
                                id: "1.3.1.3",
                                type: "S",
                                affiliation: "*",
                                battlefield: "G",
                                status: "*",
                                modifier: "US----",
                                desc_kor: "전투근무지원",
                                desc_eng: "Combat,service,support",
                                children: [{
                                        id: "1.3.1.3.1",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "USA---",
                                        desc_kor: "행정",
                                        desc_eng: "Administrative,(Admin)",
                                        children: [
                                            { id: "1.3.1.3.1.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USAT--", desc_kor: "행정(전구)", desc_eng: "Admin,theater" },
                                            { id: "1.3.1.3.1.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USAC--", desc_kor: "행정(군단)", desc_eng: "Admin,corps" },
                                            {
                                                id: "1.3.1.3.1.3",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USAJ--",
                                                desc_kor: "법무",
                                                desc_eng: "Judge,advocate,general,(JAG)",
                                                children: [
                                                    { id: "1.3.1.3.1.3.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USAJT-", desc_kor: "법무(전구)", desc_eng: "Jag,theater" },
                                                    { id: "1.3.1.3.1.3.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USAJC-", desc_kor: "법무(군단)", desc_eng: "Jag,corps" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.3.1.4",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USAO--",
                                                desc_kor: "우편",
                                                desc_eng: "Postal",
                                                children: [
                                                    { id: "1.3.1.3.1.4.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USAOT-", desc_kor: "우편(전구)", desc_eng: "Postal,theater" },
                                                    { id: "1.3.1.3.1.4.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USAOC-", desc_kor: "우편(군단)", desc_eng: "Postal,corps" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.3.1.5",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USAF--",
                                                desc_kor: "경리",
                                                desc_eng: "Finance",
                                                children: [
                                                    { id: "1.3.1.3.1.5.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USAFT-", desc_kor: "경리(전구)", desc_eng: "Finance,theater" },
                                                    { id: "1.3.1.3.1.5.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USAFC-", desc_kor: "경리(군단)", desc_eng: "Finance,corps" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.3.1.6",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USAS--",
                                                desc_kor: "인사",
                                                desc_eng: "Personnel,services",
                                                children: [
                                                    { id: "1.3.1.3.1.6.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USAST-", desc_kor: "인사(전구)", desc_eng: "Personnel,theater" },
                                                    { id: "1.3.1.3.1.6.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USASC-", desc_kor: "인사(군단)", desc_eng: "Personnel,corps" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.3.1.7",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USAM--",
                                                desc_kor: "영현",
                                                desc_eng: "Mortuary/Graves,registry",
                                                children: [
                                                    { id: "1.3.1.3.1.7.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USAMT-", desc_kor: "영현(전구)", desc_eng: "Mortuary/Graves,registry,theater" },
                                                    { id: "1.3.1.3.1.7.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USAMC-", desc_kor: "영현(군단)", desc_eng: "Mortuary/Graves,registry,corps" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.3.1.8",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USAR--",
                                                desc_kor: "군종",
                                                desc_eng: "Religious/Chaplain",
                                                children: [
                                                    { id: "1.3.1.3.1.8.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USART-", desc_kor: "군종(전구)", desc_eng: "Religious/Chaplain,theater" },
                                                    { id: "1.3.1.3.1.8.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USARC-", desc_kor: "군종(군단)", desc_eng: "Religious/Chaplain,corps" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.3.1.9",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USAP--",
                                                desc_kor: "공무",
                                                desc_eng: "Public,affairs",
                                                children: [
                                                    { id: "1.3.1.3.1.9.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USAPT-", desc_kor: "공무(전구)", desc_eng: "Public,affairs,theater" },
                                                    { id: "1.3.1.3.1.9.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USAPC-", desc_kor: "공무(군단)", desc_eng: "Public,affairs,corps" },
                                                    {
                                                        id: "1.3.1.3.1.9.3",
                                                        type: "S",
                                                        affiliation: "*",
                                                        battlefield: "G",
                                                        status: "*",
                                                        modifier: "USAPB-",
                                                        desc_kor: "공무(방송)",
                                                        desc_eng: "Public,affairs,broadcast",
                                                        children: [
                                                            { id: "1.3.1.3.1.9.3.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USAPBT", desc_kor: "공무(전구 방송)", desc_eng: "Public,affairs,broadcast,theater" },
                                                            { id: "1.3.1.3.1.9.3.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USAPBC", desc_kor: "공무(군단 방송)", desc_eng: "Public,affairs,broadcast,corps" }
                                                        ]
                                                    },
                                                    {
                                                        id: "1.3.1.3.1.9.4",
                                                        type: "S",
                                                        affiliation: "*",
                                                        battlefield: "G",
                                                        status: "*",
                                                        modifier: "USAPM-",
                                                        desc_kor: "공무(합동정보국)",
                                                        desc_eng: "Public,affairs,joint,information,bureau,(JIB)",
                                                        children: [
                                                            { id: "1.3.1.3.1.9.4.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USAPMT", desc_kor: "공무(전구 합동정보국)", desc_eng: "Public,affairs,jib,theater" },
                                                            { id: "1.3.1.3.1.9.4.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USAPMC", desc_kor: "공무(군단 합동정보국)", desc_eng: "Public,affairs,jib,corps" }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.3.1.10",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USAX--",
                                                desc_kor: "보충부대",
                                                desc_eng: "Replacement,holding,unit,(RHU)",
                                                children: [
                                                    { id: "1.3.1.3.1.10.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USAXT-", desc_kor: "보충부대(전구)", desc_eng: "RHU,theater" },
                                                    { id: "1.3.1.3.1.10.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USAXC-", desc_kor: "보충부대(군단)", desc_eng: "RHU,corps" },
                                                    { id: "1.3.1.3.1.10.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USAXP-", desc_kor: "훈련소", desc_eng: "Recruit,training,center" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.3.1.11",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USAL--",
                                                desc_kor: "노무",
                                                desc_eng: "Labor",
                                                children: [
                                                    { id: "1.3.1.3.1.11.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USALT-", desc_kor: "노무(전구)", desc_eng: "Labor,theater" },
                                                    { id: "1.3.1.3.1.11.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USALC-", desc_kor: "노무(군단)", desc_eng: "Labor,corps" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.3.1.12",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USAW--",
                                                desc_kor: "사기복지",
                                                desc_eng: "Morale,,welfare,,recreation,(MWR)",
                                                children: [
                                                    { id: "1.3.1.3.1.12.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USAWT-", desc_kor: "사기복지(전구)", desc_eng: "MWR,theater" },
                                                    { id: "1.3.1.3.1.12.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USAWC-", desc_kor: "사기복지(군단)", desc_eng: "MWR,corps" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.3.1.13",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USAQ--",
                                                desc_kor: "병참",
                                                desc_eng: "Quartermaster,(Supply)",
                                                children: [
                                                    { id: "1.3.1.3.1.13.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USAQT-", desc_kor: "병참(전구)", desc_eng: "Quartermaster,(Supply),theater" },
                                                    { id: "1.3.1.3.1.13.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USAQC-", desc_kor: "병참(군단)", desc_eng: "Quartermaster,(Supply),corps" }
                                                ]
                                            },
                                            { id: "1.3.1.3.1.14", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USAA--", desc_kor: "병기", desc_eng: "Weapon" },
                                            { id: "1.3.1.3.1.15", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USAB--", desc_kor: "예비군", desc_eng: "Reserved" },
                                            { id: "1.3.1.3.1.16", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USAE--", desc_kor: "포로", desc_eng: "Prisoner,of,War(POW)" }
                                        ]
                                    },
                                    {
                                        id: "1.3.1.3.2",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "USM---",
                                        desc_kor: "의무",
                                        desc_eng: "Medical",
                                        children: [
                                            { id: "1.3.1.3.2.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USMT--", desc_kor: "의무(전구)", desc_eng: "Medical,theater" },
                                            { id: "1.3.1.3.2.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USMC--", desc_kor: "의무(군단)", desc_eng: "Medical,corps" },
                                            {
                                                id: "1.3.1.3.2.3",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USMM--",
                                                desc_kor: "의무대",
                                                desc_eng: "Medical,treatment,facility",
                                                children: [
                                                    { id: "1.3.1.3.2.3.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USMMT-", desc_kor: "의무대(전구)", desc_eng: "Medical,treatment,facility,theater" },
                                                    { id: "1.3.1.3.2.3.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USMMC-", desc_kor: "의무대(군단)", desc_eng: "Medical,treatment,facility,corps" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.3.2.4",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USMV--",
                                                desc_kor: "수의",
                                                desc_eng: "Medical,veterinary",
                                                children: [
                                                    { id: "1.3.1.3.2.4.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USMVT-", desc_kor: "수의(전구)", desc_eng: "Medical,veterinary,theater" },
                                                    { id: "1.3.1.3.2.4.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USMVC-", desc_kor: "수의(군단)", desc_eng: "Medical,veterinary,corps" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.3.2.5",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USMD--",
                                                desc_kor: "치과",
                                                desc_eng: "Medical,dental",
                                                children: [
                                                    { id: "1.3.1.3.2.5.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USMDT-", desc_kor: "치과(전구)", desc_eng: "Medical,dental,theater" },
                                                    { id: "1.3.1.3.2.5.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USMDC-", desc_kor: "치과(군단)", desc_eng: "Medical,dental,corps" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.3.2.6",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USMP--",
                                                desc_kor: "의무(신경과)",
                                                desc_eng: "Medical,psychological",
                                                children: [
                                                    { id: "1.3.1.3.2.6.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USMPT-", desc_kor: "의무신경과(전구)", desc_eng: "Medical,psychological,theater" },
                                                    { id: "1.3.1.3.2.6.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USMPC-", desc_kor: "의무신경과(군단)", desc_eng: "Medical,psychological,corps" }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        id: "1.3.1.3.3",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "USS---",
                                        desc_kor: "보급-군수",
                                        desc_eng: "Supply",
                                        children: [
                                            { id: "1.3.1.3.3.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USST--", desc_kor: "보급(전구)", desc_eng: "Supply,theater" },
                                            { id: "1.3.1.3.3.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USSC--", desc_kor: "보급(군단)", desc_eng: "Supply,corps" },
                                            {
                                                id: "1.3.1.3.3.3",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USS1--",
                                                desc_kor: "보급1종(식량)",
                                                desc_eng: "Supply,class,I",
                                                children: [
                                                    { id: "1.3.1.3.3.3.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USS1T-", desc_kor: "보급1종(전구)", desc_eng: "Supply,class,I,theater" },
                                                    { id: "1.3.1.3.3.3.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USS1C-", desc_kor: "보급1종(군단)", desc_eng: "Supply,class,I,corps" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.3.3.4",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USS2--",
                                                desc_kor: "보급2종(물자)",
                                                desc_eng: "Supply,class,II",
                                                children: [
                                                    { id: "1.3.1.3.3.4.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USS2T-", desc_kor: "보급2종(전구)", desc_eng: "Supply,class,II,theater" },
                                                    { id: "1.3.1.3.3.4.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USS2C-", desc_kor: "보급2종(군단)", desc_eng: "Supply,class,II,corps" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.3.3.5",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USS3--",
                                                desc_kor: "보급3종(유류)",
                                                desc_eng: "Supply,class,III",
                                                children: [
                                                    { id: "1.3.1.3.3.5.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USS3T-", desc_kor: "보급3종(전구)", desc_eng: "Supply,class,III,theater" },
                                                    { id: "1.3.1.3.3.5.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USS3C-", desc_kor: "보급3종(군단)", desc_eng: "Supply,class,III,corps" },
                                                    {
                                                        id: "1.3.1.3.3.5.3",
                                                        type: "S",
                                                        affiliation: "*",
                                                        battlefield: "G",
                                                        status: "*",
                                                        modifier: "USS3A-",
                                                        desc_kor: "보급3종(항공)",
                                                        desc_eng: "Supply,class,III,aviation",
                                                        children: [
                                                            { id: "1.3.1.3.3.5.3.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USS3AT", desc_kor: "보급3종(항공전구)", desc_eng: "Supply,class,III,aviation,theater" },
                                                            { id: "1.3.1.3.3.5.3.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USS3AC", desc_kor: "보급3종(항공군단)", desc_eng: "Supply,class,III,aviation,corps" }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.3.3.6",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USS4--",
                                                desc_kor: "보급4종(자재)",
                                                desc_eng: "Supply,class,IV",
                                                children: [
                                                    { id: "1.3.1.3.3.6.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USS4T-", desc_kor: "보급4종(전구)", desc_eng: "Supply,class,IV,theater" },
                                                    { id: "1.3.1.3.3.6.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USS4C-", desc_kor: "보급4종(군단)", desc_eng: "Supply,class,IV,corps" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.3.3.7",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USS5--",
                                                desc_kor: "보급5종(탄약)",
                                                desc_eng: "Supply,class,V",
                                                children: [
                                                    { id: "1.3.1.3.3.7.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USS5T-", desc_kor: "보급5종(전구)", desc_eng: "Supply,class,V,theater" },
                                                    { id: "1.3.1.3.3.7.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USS5C-", desc_kor: "보급5종(군단)", desc_eng: "Supply,class,V,corps" },
                                                    { id: "1.3.1.3.3.7.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USS5M-", desc_kor: "로켓 및 유도탄 탄약", desc_eng: "Supply,rocket/missile,munition" },
                                                    { id: "1.3.1.3.3.7.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USS5I-", desc_kor: "보병탄약", desc_eng: "Supply,infantry,munition" },
                                                    { id: "1.3.1.3.3.7.5", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USS5S-", desc_kor: "특수탄약", desc_eng: "Supply,special,munition" },
                                                    { id: "1.3.1.3.3.7.6", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USS5L-", desc_kor: "포병탄약", desc_eng: "Supply,artillery,munition" },
                                                    { id: "1.3.1.3.3.7.7", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USS5A-", desc_kor: "항공탄약", desc_eng: "Supply,aviation,munition" },
                                                    { id: "1.3.1.3.3.7.8", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USS5N-", desc_kor: "해군탄약", desc_eng: "Supply,martime,munition" },
                                                    { id: "1.3.1.3.3.7.9", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USS5H-", desc_kor: "화학탄약", desc_eng: "Supply,chemical,munition" },
                                                    { id: "1.3.1.3.3.7.10", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USS5R-", desc_kor: "탄약보급 정비부대", desc_eng: "Maintenance,supply,munition" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.3.3.8",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USS6--",
                                                desc_kor: "보급6종(PX)",
                                                desc_eng: "Supply,class,VI",
                                                children: [
                                                    { id: "1.3.1.3.3.8.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USS6T-", desc_kor: "보급6종(전구)", desc_eng: "Supply,class,VI,theater" },
                                                    { id: "1.3.1.3.3.8.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USS6C-", desc_kor: "보급6종(군단)", desc_eng: "Supply,class,VI,corps" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.3.3.9",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USS7--",
                                                desc_kor: "보급7종(장비)",
                                                desc_eng: "Supply,class,VII",
                                                children: [
                                                    { id: "1.3.1.3.3.9.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USS7T-", desc_kor: "보급7종(전구)", desc_eng: "Supply,class,VII,theater" },
                                                    { id: "1.3.1.3.3.9.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USS7C-", desc_kor: "보급7종(군단)", desc_eng: "Supply,class,VII,corps" },
                                                    { id: "1.3.1.3.3.9.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USS7I-", desc_kor: "C4I장비 보급", desc_eng: "Supply,C4I,equipments" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.3.3.10",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USS8--",
                                                desc_kor: "보급8종(의료)",
                                                desc_eng: "Supply,class,VIII",
                                                children: [
                                                    { id: "1.3.1.3.3.10.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USS8T-", desc_kor: "보급8종(전구)", desc_eng: "Supply,class,VIII,theater" },
                                                    { id: "1.3.1.3.3.10.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USS8C-", desc_kor: "보급8종(군단)", desc_eng: "Supply,class,VIII,corps" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.3.3.11",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USS9--",
                                                desc_kor: "보급9종(수리부속)",
                                                desc_eng: "Supply,class,IX",
                                                children: [
                                                    { id: "1.3.1.3.3.11.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USS9T-", desc_kor: "보급9종(전구)", desc_eng: "Supply,class,IX,theater" },
                                                    { id: "1.3.1.3.3.11.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USS9C-", desc_kor: "보급9종(군단)", desc_eng: "Supply,class,IX,corps" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.3.3.12",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USSX--",
                                                desc_kor: "보급10종(비군사적물자)",
                                                desc_eng: "Supply,class,X",
                                                children: [
                                                    { id: "1.3.1.3.3.12.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USSXT-", desc_kor: "보급10종(전구)", desc_eng: "Supply,class,X,theater" },
                                                    { id: "1.3.1.3.3.12.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USSXC-", desc_kor: "보급10종(군단)", desc_eng: "Supply,class,X,corps" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.3.3.13",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USSL--",
                                                desc_kor: "보급(세탁/목욕)",
                                                desc_eng: "Supply,laundry/Bath",
                                                children: [
                                                    { id: "1.3.1.3.3.13.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USSLT-", desc_kor: "보급(세탁/목욕-전구)", desc_eng: "Supply,laundry/Bath,theater" },
                                                    { id: "1.3.1.3.3.13.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USSLC-", desc_kor: "보급(세탁/목욕-군단)", desc_eng: "Supply,laundry/Bath,corps" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.3.3.14",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USSW--",
                                                desc_kor: "급수지원",
                                                desc_eng: "Supply,water",
                                                children: [
                                                    { id: "1.3.1.3.3.14.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USSWT-", desc_kor: "급수지원(전구)", desc_eng: "Supply,water,theater" },
                                                    { id: "1.3.1.3.3.14.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USSWC-", desc_kor: "급수지원(군단)", desc_eng: "Supply,water,corps" },
                                                    {
                                                        id: "1.3.1.3.3.14.3",
                                                        type: "S",
                                                        affiliation: "*",
                                                        battlefield: "G",
                                                        status: "*",
                                                        modifier: "USSWP-",
                                                        desc_kor: "급수지원(정화)",
                                                        desc_eng: "Supply,water,purification",
                                                        children: [
                                                            { id: "1.3.1.3.3.14.3.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USSWPT", desc_kor: "급수지원(정화-전구)", desc_eng: "Supply,water,purification,theater" },
                                                            { id: "1.3.1.3.3.14.3.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USSWPC", desc_kor: "급수지원(정화-군단)", desc_eng: "Supply,water,purification,corps" }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        id: "1.3.1.3.4",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "UST---",
                                        desc_kor: "수송",
                                        desc_eng: "Transportation",
                                        children: [
                                            { id: "1.3.1.3.4.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USTT--", desc_kor: "수송(전구)", desc_eng: "Transportation,theater" },
                                            { id: "1.3.1.3.4.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USTC--", desc_kor: "수송(군단)", desc_eng: "Transportation,corps" },
                                            {
                                                id: "1.3.1.3.4.3",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USTM--",
                                                desc_kor: "이동통제본부",
                                                desc_eng: "Movement,control,center,(MCC)",
                                                children: [
                                                    { id: "1.3.1.3.4.3.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USTMT-", desc_kor: "이동통제본부(전구)", desc_eng: "Mcc,theater" },
                                                    { id: "1.3.1.3.4.3.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USTMC-", desc_kor: "이동통제본부(군단)", desc_eng: "Mcc,corps" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.3.4.4",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USTR--",
                                                desc_kor: "철도수송",
                                                desc_eng: "Railhead",
                                                children: [
                                                    { id: "1.3.1.3.4.4.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USTRT-", desc_kor: "철도수송(전구)", desc_eng: "Railhead,theater" },
                                                    { id: "1.3.1.3.4.4.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USTRC-", desc_kor: "철도수송(군단)", desc_eng: "Railhead,corps" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.3.4.5",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USTS--",
                                                desc_kor: "해상수송",
                                                desc_eng: "SPOD/SPOE",
                                                children: [
                                                    { id: "1.3.1.3.4.5.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USTST-", desc_kor: "해상수송(전구)", desc_eng: "SPOD/SPOE,theater" },
                                                    { id: "1.3.1.3.4.5.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USTSC-", desc_kor: "해상수송(군단)", desc_eng: "SPOD/SPOE,corps" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.3.4.6",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USTA--",
                                                desc_kor: "항공수송",
                                                desc_eng: "APOD/APOE",
                                                children: [
                                                    { id: "1.3.1.3.4.6.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USTAT-", desc_kor: "항공수송(전구)", desc_eng: "APOD/APOE,theater" },
                                                    { id: "1.3.1.3.4.6.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USTAC-", desc_kor: "항공수송(군단)", desc_eng: "APOD/APOE,corps" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.3.4.7",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USTI--",
                                                desc_kor: "유도탄수송",
                                                desc_eng: "Missile",
                                                children: [
                                                    { id: "1.3.1.3.4.7.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USTIT-", desc_kor: "유도탄수송(전구)", desc_eng: "Missile,theater" },
                                                    { id: "1.3.1.3.4.7.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USTIC-", desc_kor: "유도탄수송(군단)", desc_eng: "Missile,corps" }
                                                ]
                                            },
                                            { id: "1.3.1.3.4.8", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USTU--", desc_kor: "보급수송", desc_eng: "Supply,transportation" }
                                        ]
                                    },
                                    {
                                        id: "1.3.1.3.5",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "USX---",
                                        desc_kor: "정비",
                                        desc_eng: "Maintenance",
                                        children: [
                                            { id: "1.3.1.3.5.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USXT--", desc_kor: "정비(전구)", desc_eng: "Maintenance,theater" },
                                            { id: "1.3.1.3.5.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USXC--", desc_kor: "정비(군단)", desc_eng: "Maintenance,corps" },
                                            {
                                                id: "1.3.1.3.5.3",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USXH--",
                                                desc_kor: "정비대",
                                                desc_eng: "Maintenance,heavy",
                                                children: [
                                                    { id: "1.3.1.3.5.3.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USXHT-", desc_kor: "정비대(전구)", desc_eng: "Maintenance,heavy,theater" },
                                                    { id: "1.3.1.3.5.3.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USXHC-", desc_kor: "정비대(군단)", desc_eng: "Maintenance,heavy,corps" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.3.5.4",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USXR--",
                                                desc_kor: "정비(복구)",
                                                desc_eng: "Maintenance,recovery",
                                                children: [
                                                    { id: "1.3.1.3.5.4.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USXRT-", desc_kor: "정비(복구-전구)", desc_eng: "Maintenance,recovery,theater" },
                                                    { id: "1.3.1.3.5.4.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USXRC-", desc_kor: "정비(복구-군단)", desc_eng: "Maintenance,recovery,corps" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.3.5.5",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USXO--",
                                                desc_kor: "정비-병기",
                                                desc_eng: "Ordnance",
                                                children: [
                                                    { id: "1.3.1.3.5.5.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USXOT-", desc_kor: "정비-병기(전구)", desc_eng: "Ordnance,theater" },
                                                    { id: "1.3.1.3.5.5.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USXOC-", desc_kor: "정비-병기(군단)", desc_eng: "Ordnance,corps" },
                                                    {
                                                        id: "1.3.1.3.5.5.3",
                                                        type: "S",
                                                        affiliation: "*",
                                                        battlefield: "G",
                                                        status: "*",
                                                        modifier: "USXOM-",
                                                        desc_kor: "정비-유도탄",
                                                        desc_eng: "Ordnance,missile",
                                                        children: [
                                                            { id: "1.3.1.3.5.5.3.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USXOMT", desc_kor: "정비-유도탄(전구)", desc_eng: "Ordnance,missile,theater" },
                                                            { id: "1.3.1.3.5.5.3.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USXOMC", desc_kor: "정비-유도탄(군단)", desc_eng: "Ordnance,missile,corps" }
                                                        ]
                                                    },
                                                    { id: "1.3.1.3.5.5.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USXOA-", desc_kor: "정비-항공무기", desc_eng: "Aviation,weapon" }
                                                ]
                                            },
                                            {
                                                id: "1.3.1.3.5.6",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USXE--",
                                                desc_kor: "정비-전자광학",
                                                desc_eng: "Electro-optical",
                                                children: [
                                                    { id: "1.3.1.3.5.6.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USXET-", desc_kor: "정비-전자광학(전구)", desc_eng: "Electro-optical,theater" },
                                                    { id: "1.3.1.3.5.6.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USXEC-", desc_kor: "정비-전자광학(군단)", desc_eng: "Electro-optical,corps" }
                                                ]
                                            },
                                            { id: "1.3.1.3.5.7", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USXQ--", desc_kor: "정비-통신", desc_eng: "Communication" },
                                            {
                                                id: "1.3.1.3.5.8",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "USXA--",
                                                desc_kor: "정비-항공",
                                                desc_eng: "Aviation",
                                                children: [
                                                    { id: "1.3.1.3.5.8.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USXAE-", desc_kor: "정비-항공전자", desc_eng: "Avionic" }
                                                ]
                                            },
                                            { id: "1.3.1.3.5.9", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USXN--", desc_kor: "정비-함정", desc_eng: "Ship" },
                                            { id: "1.3.1.3.5.10", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USXD--", desc_kor: "정비-방공포병", desc_eng: "Air,defense,artillery" },
                                            { id: "1.3.1.3.5.11", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USXS--", desc_kor: "보급정비", desc_eng: "Supply" },
                                            { id: "1.3.1.3.5.12", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USXM--", desc_kor: "의무보급정비", desc_eng: "Medical,supply" },
                                            { id: "1.3.1.3.5.13", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USXP--", desc_kor: "정비-특전장비", desc_eng: "Special,force,equipment" }
                                        ]
                                    },
                                    { id: "1.3.1.3.6", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USI---", desc_kor: "전산", desc_eng: "Computer" },
                                    { id: "1.3.1.3.7", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USP---", desc_kor: "인쇄", desc_eng: "Presswork" },
                                    { id: "1.3.1.3.8", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "USG---", desc_kor: "지도제작", desc_eng: "Cartographic" }
                                ]
                            },
                            { id: "1.3.1.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "UH----", desc_kor: "지휘통제소", desc_eng: "Special,C2,headquarters,component" }
                        ]
                    },
                    {
                        id: "1.3.2",
                        type: "S",
                        affiliation: "*",
                        battlefield: "G",
                        status: "*",
                        modifier: "E-----",
                        desc_kor: "지상장비",
                        desc_eng: "Ground,track,equipment",
                        children: [{
                                id: "1.3.2.1",
                                type: "S",
                                affiliation: "*",
                                battlefield: "G",
                                status: "*",
                                modifier: "EW----",
                                desc_kor: "화기",
                                desc_eng: "Weapon",
                                children: [{
                                        id: "1.3.2.1.1",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "EWM---",
                                        desc_kor: "유도탄 발사기",
                                        desc_eng: "Missile,launcher",
                                        children: [{
                                                id: "1.3.2.1.1.1",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "EWMA--",
                                                desc_kor: "방공유도탄 발사기",
                                                desc_eng: "Air,defense,(AD),missile,launcher",
                                                children: [{
                                                        id: "1.3.2.1.1.1.1",
                                                        type: "S",
                                                        affiliation: "*",
                                                        battlefield: "G",
                                                        status: "*",
                                                        modifier: "EWMAS-",
                                                        desc_kor: "방공유도탄(단거리) 발사기",
                                                        desc_eng: "Short,range,AD,missile,launcher",
                                                        children: [
                                                            { id: "1.3.2.1.1.1.1.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWMASR", desc_kor: "방공유도탄(단거리) 이동식 발사기", desc_eng: "Transporter,launcher,and,radar,(TLAR)" },
                                                            { id: "1.3.2.1.1.1.1.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWMASE", desc_kor: "방공유도탄(단거리) 이동식 직립 발사기", desc_eng: "Transporter,erector,launcher,and,radar,(TELAR)" }
                                                        ]
                                                    },
                                                    {
                                                        id: "1.3.2.1.1.1.2",
                                                        type: "S",
                                                        affiliation: "*",
                                                        battlefield: "G",
                                                        status: "*",
                                                        modifier: "EWMAI-",
                                                        desc_kor: "방공유도탄(중거리) 발사기",
                                                        desc_eng: "Intermediate,range,ad,missile,launcher",
                                                        children: [
                                                            { id: "1.3.2.1.1.1.2.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWMAIR", desc_kor: "방공유도탄(중거리) 이동식 발사기", desc_eng: "Transporter,launcher,and,radar,(TLAR)" },
                                                            { id: "1.3.2.1.1.1.2.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWMAIE", desc_kor: "방공유도탄(중거리) 이동식 직립 발사기", desc_eng: "Transporter,erector,launcher,and,radar,(TELAR)" }
                                                        ]
                                                    },
                                                    {
                                                        id: "1.3.2.1.1.1.3",
                                                        type: "S",
                                                        affiliation: "*",
                                                        battlefield: "G",
                                                        status: "*",
                                                        modifier: "EWMAL-",
                                                        desc_kor: "방공유도탄(장거리) 발사기",
                                                        desc_eng: "Long,range,ad,missile,launcher",
                                                        children: [
                                                            { id: "1.3.2.1.1.1.3.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWMALR", desc_kor: "방공유도탄(장거리) 이동식 발사기", desc_eng: "Transporter,launcher,and,radar,(TLAR)" },
                                                            { id: "1.3.2.1.1.1.3.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWMALE", desc_kor: "방공유도탄(장거리) 이동식 직립 발사기", desc_eng: "Transporter,erector,launcher,and,radar,(TELAR)" }
                                                        ]
                                                    },
                                                    {
                                                        id: "1.3.2.1.1.1.4",
                                                        type: "S",
                                                        affiliation: "*",
                                                        battlefield: "G",
                                                        status: "*",
                                                        modifier: "EWMAT-",
                                                        desc_kor: "방공유도탄(전구)",
                                                        desc_eng: "Ad,missile,launcher,theater",
                                                        children: [
                                                            { id: "1.3.2.1.1.1.4.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWMATR", desc_kor: "방공유도탄(전구) 이동식 발사기", desc_eng: "Transporter,launcher,and,radar,(TLAR)" },
                                                            { id: "1.3.2.1.1.1.4.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWMATE", desc_kor: "방공유도탄(전구) 이동식 직립 발사기", desc_eng: "Transporter,erector,launcher,and,radar,(TELAR)" }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                id: "1.3.2.1.1.2",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "EWMS--",
                                                desc_kor: "지대지유도탄 발사기",
                                                desc_eng: "Surf-surf,(ss),missile,launcher",
                                                children: [
                                                    { id: "1.3.2.1.1.2.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWMSS-", desc_kor: "지대지유도탄(단거리) 발사기", desc_eng: "Short,range,ss,missile,launcher" },
                                                    { id: "1.3.2.1.1.2.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWMSI-", desc_kor: "지대지유도탄(중거리) 발사기", desc_eng: "Intermediate,range,ss,missile,launcher" },
                                                    { id: "1.3.2.1.1.2.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWMSL-", desc_kor: "지대지유도탄(장거리) 발사기", desc_eng: "Long,range,ss,missile,launcher" }
                                                ]
                                            },
                                            {
                                                id: "1.3.2.1.1.3",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "EWMT--",
                                                desc_kor: "대전차유도탄 발사기",
                                                desc_eng: "Missile,launcher,antitank,(AT)",
                                                children: [
                                                    { id: "1.3.2.1.1.3.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWMTL-", desc_kor: "대전차유도탄(경) 발사기", desc_eng: "Missile,launcher,at,light" },
                                                    { id: "1.3.2.1.1.3.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWMTM-", desc_kor: "대전차유도탄(중) 발사기", desc_eng: "Missile,launcher,at,medium" },
                                                    { id: "1.3.2.1.1.3.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWMTH-", desc_kor: "대전차유도탄(대) 발사기", desc_eng: "Missile,launcher,at,heavy" }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        id: "1.3.2.1.2",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "EWS---",
                                        desc_kor: "단연장로켓 발사기",
                                        desc_eng: "Single,rocket,launcher",
                                        children: [
                                            { id: "1.3.2.1.2.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWSL--", desc_kor: "단연장로켓(경) 발사기", desc_eng: "Single,rocket,launcher,light" },
                                            { id: "1.3.2.1.2.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWSM--", desc_kor: "단연장로켓(중) 발사기", desc_eng: "Single,rocket,launcher,medium" },
                                            { id: "1.3.2.1.2.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWSH--", desc_kor: "단연장로켓(대) 발사기", desc_eng: "Single,rocket,launcher,heavy" }
                                        ]
                                    },
                                    {
                                        id: "1.3.2.1.3",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "EWX---",
                                        desc_kor: "다련장로켓 발사기",
                                        desc_eng: "Multiple,rocket,launcher",
                                        children: [
                                            { id: "1.3.2.1.3.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWXL--", desc_kor: "다련장로켓(경) 발사기", desc_eng: "Multiple,rocket,launcher,light" },
                                            { id: "1.3.2.1.3.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWXM--", desc_kor: "다련장로켓(중) 발사기", desc_eng: "Multiple,rocket,launcher,medium" },
                                            { id: "1.3.2.1.3.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWXH--", desc_kor: "다련장로켓(대) 발사기", desc_eng: "Multiple,rocket,launcher,heavy" }
                                        ]
                                    },
                                    {
                                        id: "1.3.2.1.4",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "EWT---",
                                        desc_kor: "대전차로켓 발사기",
                                        desc_eng: "Antitank,rocket,launcher",
                                        children: [
                                            { id: "1.3.2.1.4.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWTL--", desc_kor: "대전차로켓(경) 발사기", desc_eng: "Antitank,rocket,launcher,light" },
                                            { id: "1.3.2.1.4.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWTM--", desc_kor: "대전차로켓(중) 발사기", desc_eng: "Antitank,rocket,launcher,medium" },
                                            { id: "1.3.2.1.4.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWTH--", desc_kor: "대전차로켓(대) 발사기", desc_eng: "Antitank,rocket,launcher,heavy" }
                                        ]
                                    },
                                    {
                                        id: "1.3.2.1.5",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "EWR---",
                                        desc_kor: "소총/자동무기",
                                        desc_eng: "Rifle/Automatic,weapon",
                                        children: [
                                            { id: "1.3.2.1.5.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWRR--", desc_kor: "소총", desc_eng: "Rifle" },
                                            { id: "1.3.2.1.5.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWRL--", desc_kor: "기관총(중)", desc_eng: "Light,machine,gun" },
                                            { id: "1.3.2.1.5.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWRH--", desc_kor: "기관총(대)", desc_eng: "Heavy,machine,gun" }
                                        ]
                                    },
                                    {
                                        id: "1.3.2.1.6",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "EWZ---",
                                        desc_kor: "유탄 발사기",
                                        desc_eng: "Grenade,launcher",
                                        children: [
                                            { id: "1.3.2.1.6.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWZL--", desc_kor: "유탄 발사기(경)", desc_eng: "Grenade,launcher,light" },
                                            { id: "1.3.2.1.6.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWZM--", desc_kor: "유탄 발사기(중)", desc_eng: "Grenade,launcher,medium" },
                                            { id: "1.3.2.1.6.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWZH--", desc_kor: "유탄 발사기(대)", desc_eng: "Grenade,launcher,heavy" }
                                        ]
                                    },
                                    {
                                        id: "1.3.2.1.7",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "EWO---",
                                        desc_kor: "박격포",
                                        desc_eng: "Mortar",
                                        children: [
                                            { id: "1.3.2.1.7.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWOL--", desc_kor: "박격포(경)", desc_eng: "Mortar,light" },
                                            { id: "1.3.2.1.7.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWOM--", desc_kor: "박격포(중)", desc_eng: "Mortar,medium" },
                                            { id: "1.3.2.1.7.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWOH--", desc_kor: "박격포(대)", desc_eng: "Mortar,heavy" }
                                        ]
                                    },
                                    {
                                        id: "1.3.2.1.8",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "EWH---",
                                        desc_kor: "곡사포",
                                        desc_eng: "Howitzer",
                                        children: [{
                                                id: "1.3.2.1.8.1",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "EWHL--",
                                                desc_kor: "곡사포(경)",
                                                desc_eng: "Howitzer,light",
                                                children: [
                                                    { id: "1.3.2.1.8.1.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWHLS-", desc_kor: "곡사포(경-자주식)", desc_eng: "Howitzer,light,self-propelled" }
                                                ]
                                            },
                                            {
                                                id: "1.3.2.1.8.2",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "EWHM--",
                                                desc_kor: "곡사포(중)",
                                                desc_eng: "Howitzer,medium",
                                                children: [
                                                    { id: "1.3.2.1.8.2.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWHMS-", desc_kor: "곡사포(중-자주식)", desc_eng: "Howitzer,medium,self-propelled" }
                                                ]
                                            },
                                            {
                                                id: "1.3.2.1.8.3",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "EWHH--",
                                                desc_kor: "곡사포 (대)",
                                                desc_eng: "Howitzer,heavy",
                                                children: [
                                                    { id: "1.3.2.1.8.3.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWHHS-", desc_kor: "곡사포(대-자주식)", desc_eng: "Howitzer,heavy,self-propelled" }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        id: "1.3.2.1.9",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "EWG---",
                                        desc_kor: "대전차포",
                                        desc_eng: "Antitank,gun",
                                        children: [
                                            { id: "1.3.2.1.9.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWGL--", desc_kor: "대전차포(경)", desc_eng: "Antitank,gun,light" },
                                            { id: "1.3.2.1.9.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWGM--", desc_kor: "대전차포(중)", desc_eng: "Antitank,gun,medium" },
                                            { id: "1.3.2.1.9.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWGH--", desc_kor: "대전차포(대)", desc_eng: "Antitank,gun,heavy" },
                                            { id: "1.3.2.1.9.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWGR--", desc_kor: "무반동포", desc_eng: "Antitank,gun,recoilless" }
                                        ]
                                    },
                                    {
                                        id: "1.3.2.1.10",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "EWD---",
                                        desc_kor: "평사포",
                                        desc_eng: "Direct,fire,gun",
                                        children: [{
                                                id: "1.3.2.1.10.1",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "EWDL--",
                                                desc_kor: "평사포(경)",
                                                desc_eng: "Direct,fire,gun,light",
                                                children: [
                                                    { id: "1.3.2.1.10.1.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWDLS-", desc_kor: "평사포(경-자주식)", desc_eng: "Direct,fire,gun,light,self-propelled" }
                                                ]
                                            },
                                            {
                                                id: "1.3.2.1.10.2",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "EWDM--",
                                                desc_kor: "평사포(중)",
                                                desc_eng: "Direct,fire,gun,medium",
                                                children: [
                                                    { id: "1.3.2.1.10.2.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWDMS-", desc_kor: "평사포(중-자주식)", desc_eng: "Direct,fire,gun,medium,self-propelled" }
                                                ]
                                            },
                                            {
                                                id: "1.3.2.1.10.3",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "EWDH--",
                                                desc_kor: "평사포(대)",
                                                desc_eng: "Direct,fire,gun,heavy",
                                                children: [
                                                    { id: "1.3.2.1.10.3.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWDHS-", desc_kor: "평사포(대-자주식)", desc_eng: "Direct,fire,gun,heavy,self-propelled" }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        id: "1.3.2.1.11",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "EWA---",
                                        desc_kor: "대공포",
                                        desc_eng: "Air,defense,gun",
                                        children: [
                                            { id: "1.3.2.1.11.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWAL--", desc_kor: "대공포(경)", desc_eng: "Air,defense,gun,light" },
                                            { id: "1.3.2.1.11.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWAM--", desc_kor: "대공포(중)", desc_eng: "Air,defense,gun,medium" },
                                            { id: "1.3.2.1.11.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EWAH--", desc_kor: "대공포(대)", desc_eng: "Air,defense,gun,heavy" }
                                        ]
                                    }
                                ]
                            },
                            {
                                id: "1.3.2.2",
                                type: "S",
                                affiliation: "*",
                                battlefield: "G",
                                status: "*",
                                modifier: "EV----",
                                desc_kor: "지상차량",
                                desc_eng: "Ground,vehicle",
                                children: [{
                                        id: "1.3.2.2.1",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "EVA---",
                                        desc_kor: "장갑차량",
                                        desc_eng: "Armored,vehicle",
                                        children: [{
                                                id: "1.3.2.2.1.1",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "EVAT--",
                                                desc_kor: "탱크",
                                                desc_eng: "Tank",
                                                children: [{
                                                        id: "1.3.2.2.1.1.1",
                                                        type: "S",
                                                        affiliation: "*",
                                                        battlefield: "G",
                                                        status: "*",
                                                        modifier: "EVATL-",
                                                        desc_kor: "탱크(경)",
                                                        desc_eng: "Tank,light",
                                                        children: [
                                                            { id: "1.3.2.2.1.1.1.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVATLR", desc_kor: "탱크(경-정비)", desc_eng: "Tank,light,recovery" }
                                                        ]
                                                    },
                                                    {
                                                        id: "1.3.2.2.1.1.2",
                                                        type: "S",
                                                        affiliation: "*",
                                                        battlefield: "G",
                                                        status: "*",
                                                        modifier: "EVATM-",
                                                        desc_kor: "탱크(중)",
                                                        desc_eng: "Tank,medium",
                                                        children: [
                                                            { id: "1.3.2.2.1.1.2.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVATMR", desc_kor: "탱크(중-정비)", desc_eng: "Tank,medium,recovery" }
                                                        ]
                                                    },
                                                    {
                                                        id: "1.3.2.2.1.1.3",
                                                        type: "S",
                                                        affiliation: "*",
                                                        battlefield: "G",
                                                        status: "*",
                                                        modifier: "EVATH-",
                                                        desc_kor: "탱크(대)",
                                                        desc_eng: "Tank,heavy",
                                                        children: [
                                                            { id: "1.3.2.2.1.1.3.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVATHR", desc_kor: "탱크(대-정비)", desc_eng: "Tank,heavy,recovery" }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                id: "1.3.2.2.1.2",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "EVAA--",
                                                desc_kor: "수송장갑차",
                                                desc_eng: "Armored,personnel,carrier",
                                                children: [
                                                    { id: "1.3.2.2.1.2.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVAAR-", desc_kor: "수송장갑차(정비)", desc_eng: "Armored,personnel,carrier,recovery" }
                                                ]
                                            },
                                            { id: "1.3.2.2.1.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVAI--", desc_kor: "장갑보병장갑차", desc_eng: "Armored,infantry" },
                                            { id: "1.3.2.2.1.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVAC--", desc_kor: "지휘통제장갑차", desc_eng: "C2V/ACV" },
                                            { id: "1.3.2.2.1.5", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVAS--", desc_kor: "전투근무지원차량", desc_eng: "Combat,service,support,vehicle" },
                                            { id: "1.3.2.2.1.6", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVAL--", desc_kor: "경장갑화차량", desc_eng: "Light,armored,vehicle" },
                                            {
                                                id: "1.3.2.2.1.7",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "EVAP--",
                                                desc_kor: "상륙용장갑차",
                                                desc_eng: "Amphibious,armored,vehicle",
                                                children: [
                                                    { id: "1.3.2.2.1.7.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVAPP-", desc_kor: "상륙용장갑차(병력수송)", desc_eng: "Amphibious,armored,vehicle" },
                                                    { id: "1.3.2.2.1.7.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVAPH-", desc_kor: "상륙용장갑차(곡사포)", desc_eng: "Amphibious,armored,vehicle(Howitzer)" }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        id: "1.3.2.2.2",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "EVU---",
                                        desc_kor: "다목적차량",
                                        desc_eng: "Utility,vehicle",
                                        children: [
                                            { id: "1.3.2.2.2.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVUB--", desc_kor: "버스", desc_eng: "Bus" },
                                            {
                                                id: "1.3.2.2.2.2",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "EVUS--",
                                                desc_kor: "승합",
                                                desc_eng: "Semi",
                                                children: [
                                                    { id: "1.3.2.2.2.2.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVUSL-", desc_kor: "승합(경)", desc_eng: "Semi,light" },
                                                    { id: "1.3.2.2.2.2.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVUSM-", desc_kor: "승합(중)", desc_eng: "Semi,medium" },
                                                    { id: "1.3.2.2.2.2.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVUSH-", desc_kor: "승합(대)", desc_eng: "Semi,heavy" }
                                                ]
                                            },
                                            { id: "1.3.2.2.2.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVUL--", desc_kor: "트럭", desc_eng: "Limited,cross-country,truck" },
                                            { id: "1.3.2.2.2.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVUX--", desc_kor: "야지횡단트럭", desc_eng: "Cross-country,truck" },
                                            { id: "1.3.2.2.2.5", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVUR--", desc_kor: "야지횡단수상트럭", desc_eng: "Water,craft" },
                                            {
                                                id: "1.3.2.2.2.6",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "EVUT--",
                                                desc_kor: "견인트럭",
                                                desc_eng: "Tow,truck",
                                                children: [
                                                    { id: "1.3.2.2.2.6.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVUTL-", desc_kor: "견인트럭(경)", desc_eng: "Tow,truck,light" },
                                                    { id: "1.3.2.2.2.6.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVUTH-", desc_kor: "견인트럭(대)", desc_eng: "Tow,truck,heavy" }
                                                ]
                                            },
                                            {
                                                id: "1.3.2.2.2.7",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "EVUA--",
                                                desc_kor: "구급차",
                                                desc_eng: "Ambulance",
                                                children: [
                                                    { id: "1.3.2.2.2.7.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVUAA-", desc_kor: "장갑구급차", desc_eng: "Armored,ambulance" }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        id: "1.3.2.2.3",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "EVE---",
                                        desc_kor: "공병차량",
                                        desc_eng: "Engineer,vehicle",
                                        children: [
                                            { id: "1.3.2.2.3.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVEB--", desc_kor: "교량건설차량", desc_eng: "Bridge" },
                                            { id: "1.3.2.2.3.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVEE--", desc_kor: "도로건설차량", desc_eng: "Earthmover" },
                                            { id: "1.3.2.2.3.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVEC--", desc_kor: "공병차량", desc_eng: "Construction,vehicle" },
                                            {
                                                id: "1.3.2.2.3.4",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "EVEM--",
                                                desc_kor: "지뢰매설차량",
                                                desc_eng: "Mine,laying,vehicle",
                                                children: [
                                                    { id: "1.3.2.2.3.4.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVEMV-", desc_kor: "지뢰매설차량(장갑)", desc_eng: "Armored,carrier,with,volcano" },
                                                    { id: "1.3.2.2.3.4.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVEML-", desc_kor: "지뢰매설차량(트럭)", desc_eng: "Truck,mounted,with,volcano" }
                                                ]
                                            },
                                            {
                                                id: "1.3.2.2.3.5",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "EVEA--",
                                                desc_kor: "지뢰제거차량",
                                                desc_eng: "Mine,clearing,vehicle",
                                                children: [
                                                    { id: "1.3.2.2.3.5.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVEAA-", desc_kor: "지뢰제거차량(장갑)", desc_eng: "Armored,mounted,mine,clearing,vehicle" },
                                                    { id: "1.3.2.2.3.5.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVEAT-", desc_kor: "지뢰제거차량(트레일러)", desc_eng: "Trailer,mounted,mine,clearing,vehicle" }
                                                ]
                                            },
                                            {
                                                id: "1.3.2.2.3.6",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "EVED--",
                                                desc_kor: "불도저",
                                                desc_eng: "Dozer",
                                                children: [
                                                    { id: "1.3.2.2.3.6.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVEDA-", desc_kor: "장갑화 불도저", desc_eng: "Armored,dozer" }
                                                ]
                                            },
                                            { id: "1.3.2.2.3.7", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVES--", desc_kor: "장갑강습공병차량", desc_eng: "Armored,assault" },
                                            { id: "1.3.2.2.3.8", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVER--", desc_kor: "장갑정찰공병차량", desc_eng: "Armored,engineer,recon,vehicle,(AERV)" },
                                            { id: "1.3.2.2.3.9", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVEH--", desc_kor: "굴착기", desc_eng: "Backhoe" },
                                            { id: "1.3.2.2.3.10", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVEF--", desc_kor: "페리 수송차량", desc_eng: "Ferry,transporter" }
                                        ]
                                    },
                                    { id: "1.3.2.2.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVT---", desc_kor: "기관차", desc_eng: "Train,locomotive" },
                                    {
                                        id: "1.3.2.2.5",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "EVC---",
                                        desc_kor: "민간 차량",
                                        desc_eng: "Civilian,vehicle",
                                        children: [{
                                                id: "1.3.2.2.5.1",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "EVCA--",
                                                desc_kor: "승용차",
                                                desc_eng: "Automobile",
                                                children: [
                                                    { id: "1.3.2.2.5.1.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVCAL-", desc_kor: "승용차(소형)", desc_eng: "Compact,automobile" },
                                                    { id: "1.3.2.2.5.1.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVCAM-", desc_kor: "승용차(중형)", desc_eng: "Midsize,automobile" },
                                                    { id: "1.3.2.2.5.1.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVCAH-", desc_kor: "승용차(세단)", desc_eng: "Sedan,automobile" }
                                                ]
                                            },
                                            {
                                                id: "1.3.2.2.5.2",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "EVCO--",
                                                desc_kor: "트럭(개방적재함)",
                                                desc_eng: "Open-bed,truck",
                                                children: [
                                                    { id: "1.3.2.2.5.2.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVCOL-", desc_kor: "픽업", desc_eng: "Pickup,open-bed,truck" },
                                                    { id: "1.3.2.2.5.2.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVCOM-", desc_kor: "트럭(개방적재함)(경)", desc_eng: "Small,open-bed,truck" },
                                                    { id: "1.3.2.2.5.2.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVCOH-", desc_kor: "트럭(개방적재함)(대)", desc_eng: "Large,open-bed,truck" }
                                                ]
                                            },
                                            {
                                                id: "1.3.2.2.5.3",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "EVCM--",
                                                desc_kor: "다인승 차량",
                                                desc_eng: "Multiple,passenger,vehicle",
                                                children: [
                                                    { id: "1.3.2.2.5.3.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVCML-", desc_kor: "다인승 밴", desc_eng: "Van,multiple,passenger,vehicle" },
                                                    { id: "1.3.2.2.5.3.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVCMM-", desc_kor: "다인승 버스(경)", desc_eng: "Small,bus,multiple,passenger,vehicle" },
                                                    { id: "1.3.2.2.5.3.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVCMH-", desc_kor: "다인승 버스(대)", desc_eng: "Large,bus,multiple,passenger,vehicle" }
                                                ]
                                            },
                                            {
                                                id: "1.3.2.2.5.4",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "EVCU--",
                                                desc_kor: "다목적 차량",
                                                desc_eng: "Utility,vehicle",
                                                children: [
                                                    { id: "1.3.2.2.5.4.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVCUL-", desc_kor: "스포트용 다목적 차량", desc_eng: "(SUV),Sport,utility,vehicle,(SUV),,utility,vehicle" },
                                                    { id: "1.3.2.2.5.4.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVCUM-", desc_kor: "다목적 차량(소형 적재함)", desc_eng: "Small,box,truck,,utility,vehicle" },
                                                    { id: "1.3.2.2.5.4.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVCUH-", desc_kor: "다목적 차량(대형 적재함)", desc_eng: "Large,box,truck,,utility,vehicle" }
                                                ]
                                            },
                                            {
                                                id: "1.3.2.2.5.5",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "EVCJ--",
                                                desc_kor: "지프형 차량",
                                                desc_eng: "Jeep,type,vehicle",
                                                children: [
                                                    { id: "1.3.2.2.5.5.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVCJL-", desc_kor: "지프형 차량(경)", desc_eng: "Small/Light,jeep,type,vehicle" },
                                                    { id: "1.3.2.2.5.5.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVCJM-", desc_kor: "지프형 차량(중)", desc_eng: "Medium,jeep,type,vehicle" },
                                                    { id: "1.3.2.2.5.5.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVCJH-", desc_kor: "지프형 차량(대)", desc_eng: "Large/Heavy,jeep,type,vehicle" }
                                                ]
                                            },
                                            {
                                                id: "1.3.2.2.5.6",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "EVCT--",
                                                desc_kor: "트랙터 운반 트럭(트레일러 박스)",
                                                desc_eng: "Tractor,trailer,truck,with,box,trailer",
                                                children: [
                                                    { id: "1.3.2.2.5.6.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVCTL-", desc_kor: "트랙터 운반 트럭(트레일러 박스)(경)", desc_eng: "Small/Light,box,trailer,,tractor,trailer,truck" },
                                                    { id: "1.3.2.2.5.6.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVCTM-", desc_kor: "트랙터 운반 트럭(트레일러 박스)(중)", desc_eng: "Medium,box,trailer,,tractor,trailer,truck" },
                                                    { id: "1.3.2.2.5.6.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVCTH-", desc_kor: "트랙터 운반 트럭(트레일러 박스)(대)", desc_eng: "Large/Heavy,box,trailer,,tractor,trailer,truck" }
                                                ]
                                            },
                                            {
                                                id: "1.3.2.2.5.7",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "EVCF--",
                                                desc_kor: "트랙터 운반 트럭(평상형)",
                                                desc_eng: "Tractor,trailer,truck,with,flatbed,trailer",
                                                children: [
                                                    { id: "1.3.2.2.5.7.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVCFL-", desc_kor: "트랙터 운반 트럭(평상형)(경)", desc_eng: "Small/Light,flatbed,trailer,,tractor,trailer,truck" },
                                                    { id: "1.3.2.2.5.7.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVCFM-", desc_kor: "트랙터 운반 트럭(평상형)(중)", desc_eng: "Medium,flatbed,trailer,,tractor,trailer,truck" },
                                                    { id: "1.3.2.2.5.7.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVCFH-", desc_kor: "트랙터 운반 트럭(평상형)(대)", desc_eng: "Large/Heavy,flatbed,trailer,,tractor,trailer,truck" }
                                                ]
                                            },
                                            { id: "1.3.2.2.5.8", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVM---", desc_kor: "운반용 동물", desc_eng: "Pack,animal(s)" },
                                            {
                                                id: "1.3.2.2.5.9",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "EVS---",
                                                desc_kor: "유도탄 지원 차량",
                                                desc_eng: "Missile,support,vehicle",
                                                children: [
                                                    { id: "1.3.2.2.5.9.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVST--", desc_kor: "유도탄 지원 차량(적재)", desc_eng: "Missile,support,vehicle,transloader" },
                                                    { id: "1.3.2.2.5.9.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVSR--", desc_kor: "유도탄 지원 차량(운송)", desc_eng: "Missile,support,vehicle,transporter" },
                                                    { id: "1.3.2.2.5.9.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVSC--", desc_kor: "유도탄 지원 차량(크레인/적재장치)", desc_eng: "Missile,support,vehicle,crane/Loading,device" },
                                                    { id: "1.3.2.2.5.9.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVSP--", desc_kor: "유도탄 지원 차량(추진체 운송)", desc_eng: "Missile,support,vehicle,propellant,transporter" },
                                                    { id: "1.3.2.2.5.9.5", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EVSW--", desc_kor: "유도탄 지원 차량(탄두 운송)", desc_eng: "Missile,support,vehicle,warhead,transporter" }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                id: "1.3.2.3",
                                type: "S",
                                affiliation: "*",
                                battlefield: "G",
                                status: "*",
                                modifier: "ES----",
                                desc_kor: "감지기",
                                desc_eng: "Sensor",
                                children: [
                                    { id: "1.3.2.3.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "ESR---", desc_kor: "레이다", desc_eng: "Radar" },
                                    { id: "1.3.2.3.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "ESE---", desc_kor: "감지기(고정)", desc_eng: "Emplaced,sensor" }
                                ]
                            },
                            {
                                id: "1.3.2.4",
                                type: "S",
                                affiliation: "*",
                                battlefield: "G",
                                status: "*",
                                modifier: "EX----",
                                desc_kor: "특수장비",
                                desc_eng: "Special,equipment",
                                children: [
                                    { id: "1.3.2.4.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EXI---", desc_kor: "폭발물(IED)", desc_eng: "Improvised,explosive,device" },
                                    { id: "1.3.2.4.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EXL---", desc_kor: "레이저", desc_eng: "Laser" },
                                    { id: "1.3.2.4.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EXN---", desc_kor: "화생방장비", desc_eng: "Cbrn,equipment" },
                                    { id: "1.3.2.4.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EXF---", desc_kor: "화염방사기", desc_eng: "Flame,thrower" },
                                    {
                                        id: "1.3.2.4.5",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "EXM---",
                                        desc_kor: "지뢰",
                                        desc_eng: "Land,mines",
                                        children: [
                                            { id: "1.3.2.4.5.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EXMC--", desc_kor: "크레모아", desc_eng: "Claymore" },
                                            { id: "1.3.2.4.5.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EXML--", desc_kor: "지뢰(상해)", desc_eng: "Less,than,lethal" }
                                        ]
                                    },
                                    {
                                        id: "1.3.2.4.6",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "EXC---",
                                        desc_kor: "통신장비",
                                        desc_eng: "Communications,equipment",
                                        children: [
                                            { id: "1.3.2.4.6.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EXCB--", desc_kor: "교환기", desc_eng: "Switchboard" },
                                            { id: "1.3.2.4.6.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EXCD--", desc_kor: "다중집선기", desc_eng: "Multiplex,aggregator" },
                                            { id: "1.3.2.4.6.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EXCR--", desc_kor: "라우터", desc_eng: "Router" },
                                            { id: "1.3.2.4.6.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EXCE--", desc_kor: "전술다중장비(단말)", desc_eng: "Tactical,multiplex,equipment(Terminal)" },
                                            { id: "1.3.2.4.6.5", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EXCG--", desc_kor: "전술다중장비(중계)", desc_eng: "Tactical,multiplex,equipment(Repeater)" },
                                            { id: "1.3.2.4.6.6", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EXCA--", desc_kor: "이동무선기지국", desc_eng: "Mobile,subscriber,base,station" },
                                            { id: "1.3.2.4.6.7", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EXCM--", desc_kor: "전술용이동통신장비", desc_eng: "Tactical,moblie,communication,equipment" },
                                            { id: "1.3.2.4.6.8", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EXCH--", desc_kor: "위성통신장비", desc_eng: "Satellite,communication,equipment" },
                                            { id: "1.3.2.4.6.9", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EXCI--", desc_kor: "전투무선장비(단말)", desc_eng: "Combat,radio,equipment(Terminal)" },
                                            { id: "1.3.2.4.6.10", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EXCJ--", desc_kor: "전투무선장비(중계)", desc_eng: "Combat,radio,equipment(Repeater)" },
                                            { id: "1.3.2.4.6.11", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EXCK--", desc_kor: "망관리장비", desc_eng: "Network,management,equipment" },
                                            { id: "1.3.2.4.6.12", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EXCP--", desc_kor: "전화기", desc_eng: "Field,phone" },
                                            { id: "1.3.2.4.6.13", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EXCF--", desc_kor: "모사전송기", desc_eng: "Facsimile,equipment" },
                                            { id: "1.3.2.4.6.14", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EXCC--", desc_kor: "컴퓨터", desc_eng: "Computer" },
                                            { id: "1.3.2.4.6.15", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EXCL--", desc_kor: "광 전송장비", desc_eng: "Optical,transmission,equipment" },
                                            { id: "1.3.2.4.6.16", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "EXCS--", desc_kor: "스위치", desc_eng: "Switch" }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: "1.3.3",
                        type: "S",
                        affiliation: "*",
                        battlefield: "G",
                        status: "*",
                        modifier: "I-----",
                        desc_kor: "시설",
                        desc_eng: "Installation",
                        children: [{
                                id: "1.3.3.1",
                                type: "S",
                                affiliation: "*",
                                battlefield: "G",
                                status: "*",
                                modifier: "IR----",
                                desc_kor: "원료생산/저장",
                                desc_eng: "Raw,material,production/Storage",
                                children: [
                                    { id: "1.3.3.1.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IRM---", desc_kor: "광산", desc_eng: "Mine" },
                                    { id: "1.3.3.1.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IRP---", desc_kor: "석유/가스/기름", desc_eng: "Petroleum/Gas/Oil" },
                                    {
                                        id: "1.3.3.1.3",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "IRN---",
                                        desc_kor: "화생방시설",
                                        desc_eng: "CBRN",
                                        children: [
                                            { id: "1.3.3.1.3.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IRNB--", desc_kor: "화생방시설(생물학전)", desc_eng: "Biological" },
                                            { id: "1.3.3.1.3.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IRNC--", desc_kor: "화생방시설(화학전)", desc_eng: "Chemical" },
                                            { id: "1.3.3.1.3.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IRNN--", desc_kor: "화생방시설(방사능전)", desc_eng: "Nuclear" }
                                        ]
                                    }
                                ]
                            },
                            {
                                id: "1.3.3.2",
                                type: "S",
                                affiliation: "*",
                                battlefield: "G",
                                status: "*",
                                modifier: "IP----",
                                desc_kor: "처리설비",
                                desc_eng: "Processing,facility",
                                children: [
                                    { id: "1.3.3.2.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IPD---", desc_kor: "제독시설", desc_eng: "Decontamination" }
                                ]
                            },
                            { id: "1.3.3.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IE----", desc_kor: "장비제조", desc_eng: "Equipment,manufacture" },
                            {
                                id: "1.3.3.4",
                                type: "S",
                                affiliation: "*",
                                battlefield: "G",
                                status: "*",
                                modifier: "IU----",
                                desc_kor: "다목적시설",
                                desc_eng: "Service,,research,,utility,facility",
                                children: [
                                    { id: "1.3.3.4.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IUR---", desc_kor: "기술연구소", desc_eng: "Technological,research,facility" },
                                    {
                                        id: "1.3.3.4.2",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "IUT---",
                                        desc_kor: "전화국",
                                        desc_eng: "Telecommunications,facility",
                                        children: [
                                            { id: "1.3.3.4.2.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IUTA--", desc_kor: "방송시설", desc_eng: "Broadcasting,facility" }
                                        ]
                                    },
                                    {
                                        id: "1.3.3.4.3",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "IUE---",
                                        desc_kor: "발전소",
                                        desc_eng: "Electric,power,facility",
                                        children: [
                                            { id: "1.3.3.4.3.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IUEN--", desc_kor: "핵발전소", desc_eng: "Nuclear,plant" },
                                            { id: "1.3.3.4.3.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IUED--", desc_kor: "수력발전소", desc_eng: "Dam" },
                                            { id: "1.3.3.4.3.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IUEF--", desc_kor: "화력발전소", desc_eng: "Fossil,fuel" },
                                            { id: "1.3.3.4.3.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IUEW--", desc_kor: "풍력/조력발전소", desc_eng: "Wind/Tidal,plant" },
                                            { id: "1.3.3.4.3.5", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IUEE--", desc_kor: "열병합발전소", desc_eng: "Cogeneration,plant" }
                                        ]
                                    },
                                    { id: "1.3.3.4.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IUP---", desc_kor: "급수시설", desc_eng: "Public,water,services" },
                                    { id: "1.3.3.4.5", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IUN---", desc_kor: "전력시설", desc_eng: "Power,supply,facility" },
                                    { id: "1.3.3.4.6", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IL----", desc_kor: "재머", desc_eng: "Jammer" }
                                ]
                            },
                            {
                                id: "1.3.3.5",
                                type: "S",
                                affiliation: "*",
                                battlefield: "G",
                                status: "*",
                                modifier: "IM----",
                                desc_kor: "군수공장",
                                desc_eng: "Military,materiel,facility",
                                children: [{
                                        id: "1.3.3.5.1",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "IMF---",
                                        desc_kor: "핵시설",
                                        desc_eng: "Nuclear,energy",
                                        children: [
                                            { id: "1.3.3.5.1.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IMFA--", desc_kor: "원자로", desc_eng: "Atomic,energy,reactor" },
                                            {
                                                id: "1.3.3.5.1.2",
                                                type: "S",
                                                affiliation: "*",
                                                battlefield: "G",
                                                status: "*",
                                                modifier: "IMFP--",
                                                desc_kor: "핵물질생산",
                                                desc_eng: "Nuclear,material,production",
                                                children: [
                                                    { id: "1.3.3.5.1.2.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IMFPW-", desc_kor: "핵물질생산(무기등급)", desc_eng: "Weapons,grade" }
                                                ]
                                            },
                                            { id: "1.3.3.5.1.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IMFS--", desc_kor: "핵물질저장", desc_eng: "Nuclear,material,storage" }
                                        ]
                                    },
                                    { id: "1.3.3.5.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IMA---", desc_kor: "군수공장(항공기)", desc_eng: "Aircraft,production,and,assembly" },
                                    { id: "1.3.3.5.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IME---", desc_kor: "군수공장(탄약/폭약)", desc_eng: "Ammunition,and,explosives,production" },
                                    { id: "1.3.3.5.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IMG---", desc_kor: "군수공장(병기)", desc_eng: "Armament,production" },
                                    { id: "1.3.3.5.5", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IMV---", desc_kor: "군수공장(차량)", desc_eng: "Military,vehicle,production" },
                                    {
                                        id: "1.3.3.5.6",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "IMN---",
                                        desc_kor: "군수공장(공병장비)",
                                        desc_eng: "Engineering,equipment,production",
                                        children: [
                                            { id: "1.3.3.5.6.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IMNB--", desc_kor: "군수공장(공병장비-교량)", desc_eng: "Bridge" }
                                        ]
                                    },
                                    { id: "1.3.3.5.7", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IMC---", desc_kor: "군수공장(화생방전)", desc_eng: "Chemical,and,biological,warfare,production" },
                                    { id: "1.3.3.5.8", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IMS---", desc_kor: "군수공장(조선)", desc_eng: "Ship,construction" },
                                    { id: "1.3.3.5.9", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IMM---", desc_kor: "군수공장(유도탄/우주장비)", desc_eng: "Missile,and,space,system,production" },
                                    { id: "1.3.3.5.10", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IMD---", desc_kor: "군수물자공장", desc_eng: "War,supplies,factory" }
                                ]
                            },
                            {
                                id: "1.3.3.6",
                                type: "S",
                                affiliation: "*",
                                battlefield: "G",
                                status: "*",
                                modifier: "IG----",
                                desc_kor: "국가중요시설",
                                desc_eng: "Government,leadership",
                                children: [
                                    { id: "1.3.3.6.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IGA---", desc_kor: "대사관 및 영사관", desc_eng: "Embassy" }
                                ]
                            },
                            {
                                id: "1.3.3.7",
                                type: "S",
                                affiliation: "*",
                                battlefield: "G",
                                status: "*",
                                modifier: "IB----",
                                desc_kor: "군용기지",
                                desc_eng: "Military,base/Facility",
                                children: [{
                                        id: "1.3.3.7.1",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "IBA---",
                                        desc_kor: "공항/공군기지",
                                        desc_eng: "Airport/Airbase",
                                        children: [
                                            { id: "1.3.3.7.1.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IBAP--", desc_kor: "공항", desc_eng: "Airport" },
                                            { id: "1.3.3.7.1.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IBAR--", desc_kor: "비행장", desc_eng: "Airfield" },
                                            { id: "1.3.3.7.1.3", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IBAE--", desc_kor: "비상활주로", desc_eng: "Emergency,runway" },
                                            { id: "1.3.3.7.1.4", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IBAH--", desc_kor: "헬기장", desc_eng: "Heliport" }
                                        ]
                                    },
                                    {
                                        id: "1.3.3.7.2",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "IBN---",
                                        desc_kor: "항구/해군기지",
                                        desc_eng: "Seaport/Naval,base",
                                        children: [
                                            { id: "1.3.3.7.2.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IBND--", desc_kor: "해안방어유도탄기지", desc_eng: "해안방어유도탄기지" }
                                        ]
                                    },
                                    {
                                        id: "1.3.3.7.3",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "G",
                                        status: "*",
                                        modifier: "IBG---",
                                        desc_kor: "육군기지",
                                        desc_eng: "육군기지",
                                        children: [
                                            { id: "1.3.3.7.3.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IBGA--", desc_kor: "갱도포병기지", desc_eng: "갱도포병기지" }
                                        ]
                                    }
                                ]
                            },
                            {
                                id: "1.3.3.8",
                                type: "S",
                                affiliation: "*",
                                battlefield: "G",
                                status: "*",
                                modifier: "IT----",
                                desc_kor: "수송설비",
                                desc_eng: "Transport,facility",
                                children: [
                                    { id: "1.3.3.8.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "ITA---", desc_kor: "조차장", desc_eng: "Switchyard" }
                                ]
                            },
                            {
                                id: "1.3.3.9",
                                type: "S",
                                affiliation: "*",
                                battlefield: "G",
                                status: "*",
                                modifier: "IX----",
                                desc_kor: "의료설비",
                                desc_eng: "Medical,facility",
                                children: [
                                    { id: "1.3.3.9.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IXH---", desc_kor: "병원", desc_eng: "Hospital" }
                                ]
                            },
                            { id: "1.3.3.10", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IC----", desc_kor: "전산시설", desc_eng: "Data,center" },
                            { id: "1.3.3.11", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IN----", desc_kor: "인쇄창", desc_eng: "Printing,house" },
                            { id: "1.3.3.12", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IA----", desc_kor: "지도창", desc_eng: "Mapping,house" },
                            {
                                id: "1.3.3.13",
                                type: "S",
                                affiliation: "*",
                                battlefield: "G",
                                status: "*",
                                modifier: "ID----",
                                desc_kor: "문화재",
                                desc_eng: "Cultural,Properties",
                                children: [
                                    { id: "1.3.3.13.1", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IDN---", desc_kor: "국보", desc_eng: "National,Treasure" },
                                    { id: "1.3.3.13.2", type: "S", affiliation: "*", battlefield: "G", status: "*", modifier: "IDT---", desc_kor: "보물", desc_eng: "Treasure" }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: "1.4",
                type: "S",
                affiliation: "*",
                battlefield: "S",
                status: "*",
                modifier: "------",
                desc_kor: "수상항적",
                desc_eng: "Sea,surface,track",
                children: [{
                        id: "1.4.1",
                        type: "S",
                        affiliation: "*",
                        battlefield: "S",
                        status: "*",
                        modifier: "C-----",
                        desc_kor: "전투함",
                        desc_eng: "Combatant",
                        children: [{
                                id: "1.4.1.1",
                                type: "S",
                                affiliation: "*",
                                battlefield: "S",
                                status: "*",
                                modifier: "CL----",
                                desc_kor: "함정",
                                desc_eng: "함정",
                                children: [
                                    { id: "1.4.1.1.1", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "CLCV--", desc_kor: "항공모함", desc_eng: "Carrier" },
                                    { id: "1.4.1.1.2", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "CLBB--", desc_kor: "전함", desc_eng: "Battleship" },
                                    { id: "1.4.1.1.3", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "CLCC--", desc_kor: "순양함", desc_eng: "Cruiser" },
                                    {
                                        id: "1.4.1.1.4",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "S",
                                        status: "*",
                                        modifier: "CLDD--",
                                        desc_kor: "구축함",
                                        desc_eng: "Destroyer",
                                        children: [
                                            { id: "1.4.1.1.4.1", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "CLDDH-", desc_kor: "헬기탑재구축함", desc_eng: "Destroyer(Helicopter)" },
                                            { id: "1.4.1.1.4.2", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "CLDDG-", desc_kor: "유인유도탄구축함", desc_eng: "Destroyer(Decoy)" },
                                            { id: "1.4.1.1.4.3", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "CLDDX-", desc_kor: "중차기구축함", desc_eng: "Destroyer" }
                                        ]
                                    },
                                    {
                                        id: "1.4.1.1.5",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "S",
                                        status: "*",
                                        modifier: "CLFF--",
                                        desc_kor: "호위함",
                                        desc_eng: "Frigate/Corvette",
                                        children: [
                                            { id: "1.4.1.1.5.1", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "CLFFX-", desc_kor: "차기호위함", desc_eng: "Frigate/Corvette" }
                                        ]
                                    },
                                    {
                                        id: "1.4.1.1.6",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "S",
                                        status: "*",
                                        modifier: "CLLL--",
                                        desc_kor: "연안전투함",
                                        desc_eng: "Littoral,combatant",
                                        children: [
                                            { id: "1.4.1.1.6.1", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "CLLLAS", desc_kor: "대잠전 임무 패키지", desc_eng: "Antisubmarine,warfare,mission,package" },
                                            { id: "1.4.1.1.6.2", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "CLLLMI", desc_kor: "기뢰전 임무 패키지", desc_eng: "Mine,warfare,mission,package" },
                                            { id: "1.4.1.1.6.3", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "CLLLSU", desc_kor: "수상전 임무 패키지", desc_eng: "Surface,warfare,(SUW),mission,package" }
                                        ]
                                    }
                                ]
                            },
                            {
                                id: "1.4.1.2",
                                type: "S",
                                affiliation: "*",
                                battlefield: "S",
                                status: "*",
                                modifier: "CA----",
                                desc_kor: "상륙전함",
                                desc_eng: "Amphibious,warfare,ship",
                                children: [
                                    { id: "1.4.1.2.1", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "CALA--", desc_kor: "공격함", desc_eng: "Assault,vessel" },
                                    {
                                        id: "1.4.1.2.2",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "S",
                                        status: "*",
                                        modifier: "CALS--",
                                        desc_kor: "상륙함",
                                        desc_eng: "Landing,ship",
                                        children: [
                                            { id: "1.4.1.2.2.1", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "CALSH-", desc_kor: "대형수송함", desc_eng: "Transport,ship(Large)" },
                                            { id: "1.4.1.2.2.2", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "CALST-", desc_kor: "상륙함", desc_eng: "Landing,ship,tank" },
                                            { id: "1.4.1.2.2.3", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "CALSF-", desc_kor: "고속상륙정", desc_eng: "Landing,ship(High,speed)" },
                                            { id: "1.4.1.2.2.4", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "CALSM-", desc_kor: "상륙함(중)", desc_eng: "Landing,ship,medium" }
                                        ]
                                    },
                                    { id: "1.4.1.2.3", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "CALC--", desc_kor: "상륙정", desc_eng: "Landing,craft" }
                                ]
                            },
                            {
                                id: "1.4.1.3",
                                type: "S",
                                affiliation: "*",
                                battlefield: "S",
                                status: "*",
                                modifier: "CM----",
                                desc_kor: "기뢰전함",
                                desc_eng: "Mine,warfare,vessel",
                                children: [{
                                        id: "1.4.1.3.1",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "S",
                                        status: "*",
                                        modifier: "CMML--",
                                        desc_kor: "기뢰부설함",
                                        desc_eng: "Minelayer",
                                        children: [
                                            { id: "1.4.1.3.1.1", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "CMMLS-", desc_kor: "기뢰부설함", desc_eng: "Minelayer" },
                                            { id: "1.4.1.3.1.2", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "CMMLL-", desc_kor: "기뢰부설정", desc_eng: "Minelayer" }
                                        ]
                                    },
                                    {
                                        id: "1.4.1.3.2",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "S",
                                        status: "*",
                                        modifier: "CMMS--",
                                        desc_kor: "소해함",
                                        desc_eng: "Minesweeper",
                                        children: [
                                            { id: "1.4.1.3.2.1", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "CMMSH-", desc_kor: "소해함", desc_eng: "Minesweeper" }
                                        ]
                                    },
                                    {
                                        id: "1.4.1.3.3",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "S",
                                        status: "*",
                                        modifier: "CMMH--",
                                        desc_kor: "기뢰탐색함",
                                        desc_eng: "Minehunter",
                                        children: [
                                            { id: "1.4.1.3.3.1", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "CMMHC-", desc_kor: "기뢰탐색함", desc_eng: "Minehunter" }
                                        ]
                                    },
                                    { id: "1.4.1.3.4", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "CMMA--", desc_kor: "대기뢰함지원함", desc_eng: "Mcm,support" }
                                ]
                            },
                            {
                                id: "1.4.1.4",
                                type: "S",
                                affiliation: "*",
                                battlefield: "S",
                                status: "*",
                                modifier: "CP----",
                                desc_kor: "초계함",
                                desc_eng: "Patrol",
                                children: [
                                    { id: "1.4.1.4.1", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "CPSB--", desc_kor: "대잠전초계함", desc_eng: "Antisubmarine,warfare" },
                                    {
                                        id: "1.4.1.4.2",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "S",
                                        status: "*",
                                        modifier: "CPSU--",
                                        desc_kor: "대수상전초계함",
                                        desc_eng: "Antisurface,warfare",
                                        children: [
                                            { id: "1.4.1.4.2.1", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "CPSUM-", desc_kor: "초계함(대함유도탄)", desc_eng: "Antiship,missile,patrol,craft" },
                                            { id: "1.4.1.4.2.2", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "CPSUT-", desc_kor: "초계함(어뢰)", desc_eng: "Torpedo,patrol,craft" },
                                            { id: "1.4.1.4.2.3", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "CPSUG-", desc_kor: "초계함(포)", desc_eng: "Gun,patrol,craft" }
                                        ]
                                    },
                                    {
                                        id: "1.4.1.4.3",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "S",
                                        status: "*",
                                        modifier: "CPSP--",
                                        desc_kor: "고속정",
                                        desc_eng: "Patrol,killer",
                                        children: [
                                            { id: "1.4.1.4.3.1", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "CPSPX-", desc_kor: "차기고속정", desc_eng: "Patrol,killer,experimental" }
                                        ]
                                    }
                                ]
                            },
                            { id: "1.4.1.5", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "CH----", desc_kor: "공기부양정", desc_eng: "Hovercraft" },
                            {
                                id: "1.4.1.6",
                                type: "S",
                                affiliation: "*",
                                battlefield: "S",
                                status: "*",
                                modifier: "S-----",
                                desc_kor: "위치",
                                desc_eng: "Station",
                                children: [
                                    { id: "1.4.1.6.1", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "SP----", desc_kor: "전초함", desc_eng: "Patrol,ship" },
                                    { id: "1.4.1.6.2", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "SA----", desc_kor: "대잠함", desc_eng: "Anti,submarine,ship" }
                                ]
                            },
                            {
                                id: "1.4.1.7",
                                type: "S",
                                affiliation: "*",
                                battlefield: "S",
                                status: "*",
                                modifier: "G-----",
                                desc_kor: "해군그룹",
                                desc_eng: "Navy,group",
                                children: [
                                    { id: "1.4.1.7.1", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "GT----", desc_kor: "기동함대(TF)", desc_eng: "Navy,task,force" },
                                    { id: "1.4.1.7.2", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "GG----", desc_kor: "기동전단(TG)", desc_eng: "Navy,task,group" },
                                    { id: "1.4.1.7.3", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "GU----", desc_kor: "기동전대(TU)", desc_eng: "Navy,task,unit" },
                                    { id: "1.4.1.7.4", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "GC----", desc_kor: "호송단대", desc_eng: "Convoy" }
                                ]
                            },
                            { id: "1.4.1.8", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "CD----", desc_kor: "수상유인", desc_eng: "Surface,decoy" },
                            {
                                id: "1.4.1.9",
                                type: "S",
                                affiliation: "*",
                                battlefield: "S",
                                status: "*",
                                modifier: "CU----",
                                desc_kor: "무인수상선(USV)",
                                desc_eng: "Unmanned,surface,vehicle",
                                children: [
                                    { id: "1.4.1.9.1", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "CUM---", desc_kor: "무인수상선(대기뢰초계)", desc_eng: "Mine,countermeasures,surface,drone" },
                                    { id: "1.4.1.9.2", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "CUS---", desc_kor: "무인수상선(대잠전)", desc_eng: "Antisubmarine,warfare,surface,drone" },
                                    { id: "1.4.1.9.3", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "CUN---", desc_kor: "무인수상선(대수상전)", desc_eng: "Antisurface,warfare,surface,drone" },
                                    { id: "1.4.1.9.4", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "CUR---", desc_kor: "원격 다중임무 무인 수상선", desc_eng: "Remote,multimission,vehicle" }
                                ]
                            }
                        ]
                    },
                    {
                        id: "1.4.2",
                        type: "S",
                        affiliation: "*",
                        battlefield: "S",
                        status: "*",
                        modifier: "N-----",
                        desc_kor: "지원함",
                        desc_eng: "Noncombatant",
                        children: [
                            { id: "1.4.2.1", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "NR----", desc_kor: "잠수함지원함", desc_eng: "Underway,replenishment" },
                            {
                                id: "1.4.2.2",
                                type: "S",
                                affiliation: "*",
                                battlefield: "S",
                                status: "*",
                                modifier: "NF----",
                                desc_kor: "해상지원함",
                                desc_eng: "Fleet,support",
                                children: [
                                    { id: "1.4.2.2.1", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "NFL---", desc_kor: "보조함", desc_eng: "보조함" },
                                    { id: "1.4.2.2.2", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "NFM---", desc_kor: "동원선박", desc_eng: "동원선박" },
                                    { id: "1.4.2.2.3", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "NFO---", desc_kor: "유조함", desc_eng: "유조함" },
                                    { id: "1.4.2.2.4", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "NFT---", desc_kor: "수상구조함", desc_eng: "수상구조함" },
                                    { id: "1.4.2.2.5", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "NFR---", desc_kor: "잠수함구조함", desc_eng: "잠수함구조함" },
                                    { id: "1.4.2.2.6", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "NFS---", desc_kor: "잠수정모함", desc_eng: "잠수정모함" },
                                    { id: "1.4.2.2.7", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "NFU---", desc_kor: "군수지원정", desc_eng: "군수지원정" },
                                    {
                                        id: "1.4.2.2.8",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "S",
                                        status: "*",
                                        modifier: "NFP---",
                                        desc_kor: "경비정",
                                        desc_eng: "경비정",
                                        children: [
                                            { id: "1.4.2.2.8.1", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "NFPR--", desc_kor: "RIB", desc_eng: "RIB" },
                                            { id: "1.4.2.2.8.2", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "NFPA--", desc_kor: "육경정", desc_eng: "육경정" },
                                            { id: "1.4.2.2.8.3", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "NFPY--", desc_kor: "연안경비정", desc_eng: "연안경비정" },
                                            { id: "1.4.2.2.8.4", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "NFPS--", desc_kor: "대동호", desc_eng: "대동호" }
                                        ]
                                    }
                                ]
                            },
                            {
                                id: "1.4.2.3",
                                type: "S",
                                affiliation: "*",
                                battlefield: "S",
                                status: "*",
                                modifier: "NI----",
                                desc_kor: "정보함",
                                desc_eng: "Intelligence",
                                children: [
                                    { id: "1.4.2.3.1", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "NIN---", desc_kor: "해양정보함", desc_eng: "해양정보함" }
                                ]
                            },
                            { id: "1.4.2.4", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "NS----", desc_kor: "지원항(전진기지", desc_eng: "YPK),Service,and,support,harbor" },
                            { id: "1.4.2.5", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "NM----", desc_kor: "병원선", desc_eng: "Hospital,ship" },
                            { id: "1.4.2.6", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "NH----", desc_kor: "공기부양정(비전투)", desc_eng: "Hovercraft" },
                            {
                                id: "1.4.2.7",
                                type: "S",
                                affiliation: "*",
                                battlefield: "S",
                                status: "*",
                                modifier: "NN----",
                                desc_kor: "위치(비전투)",
                                desc_eng: "Station",
                                children: [
                                    { id: "1.4.2.7.1", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "NNR---", desc_kor: "구조함", desc_eng: "Rescue" }
                                ]
                            }
                        ]
                    },
                    {
                        id: "1.4.3",
                        type: "S",
                        affiliation: "*",
                        battlefield: "S",
                        status: "*",
                        modifier: "X-----",
                        desc_kor: "민간선박",
                        desc_eng: "Non-military",
                        children: [{
                                id: "1.4.3.1",
                                type: "S",
                                affiliation: "*",
                                battlefield: "S",
                                status: "*",
                                modifier: "XM----",
                                desc_kor: "상선",
                                desc_eng: "Merchant",
                                children: [
                                    { id: "1.4.3.1.1", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "XMC---", desc_kor: "화물선", desc_eng: "Cargo" },
                                    { id: "1.4.3.1.2", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "XMR---", desc_kor: "트레일러선", desc_eng: "Roll,on/Roll,off" },
                                    { id: "1.4.3.1.3", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "XMO---", desc_kor: "유조선", desc_eng: "Oiler/Tanker" },
                                    { id: "1.4.3.1.4", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "XMTU--", desc_kor: "예인선", desc_eng: "Tug" },
                                    { id: "1.4.3.1.5", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "XMF---", desc_kor: "페리", desc_eng: "Ferry" },
                                    { id: "1.4.3.1.6", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "XMP---", desc_kor: "여객선", desc_eng: "Passenger" },
                                    { id: "1.4.3.1.7", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "XMH---", desc_kor: "위험물질운반선", desc_eng: "Hazardous,materials,(HazMat)" },
                                    { id: "1.4.3.1.8", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "XMTO--", desc_kor: "견인선", desc_eng: "Towing,vessel" }
                                ]
                            },
                            {
                                id: "1.4.3.2",
                                type: "S",
                                affiliation: "*",
                                battlefield: "S",
                                status: "*",
                                modifier: "XF----",
                                desc_kor: "어선",
                                desc_eng: "Fishing",
                                children: [
                                    { id: "1.4.3.2.1", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "XFDF--", desc_kor: "유망어선", desc_eng: "Drifter" },
                                    { id: "1.4.3.2.2", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "XFDR--", desc_kor: "준설선", desc_eng: "Dredge" },
                                    { id: "1.4.3.2.3", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "XFTR--", desc_kor: "저인망어선", desc_eng: "Trawler" }
                                ]
                            },
                            { id: "1.4.3.3", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "XR----", desc_kor: "레저용 선박", desc_eng: "Leisure,craft" },
                            { id: "1.4.3.4", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "XL----", desc_kor: "해경선", desc_eng: "Law,enforcement,vessel" },
                            { id: "1.4.3.5", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "XH----", desc_kor: "공기부양정", desc_eng: "Hovercraft" },
                            { id: "1.4.3.6", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "XG----", desc_kor: "관공선", desc_eng: "관공선" },
                            {
                                id: "1.4.3.7",
                                type: "S",
                                affiliation: "*",
                                battlefield: "S",
                                status: "*",
                                modifier: "XA----",
                                desc_kor: "고속 레크리에이션 선박",
                                desc_eng: "Fast,recreactional,craft",
                                children: [
                                    { id: "1.4.3.7.1", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "XAR---", desc_kor: "경장갑공기정(RHIB)", desc_eng: "Rigid-hull,inflatable,boat" },
                                    { id: "1.4.3.7.2", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "XAS---", desc_kor: "쾌속정", desc_eng: "Speed,boat" }
                                ]
                            },
                            { id: "1.4.3.8", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "XP----", desc_kor: "개인용 선박", desc_eng: "Personal,watercraft" }
                        ]
                    },
                    { id: "1.4.4", type: "S", affiliation: "*", battlefield: "S", status: "*", modifier: "O-----", desc_kor: "자함항적", desc_eng: "Own,track" }
                ]
            },
            {
                id: "1.5",
                type: "S",
                affiliation: "*",
                battlefield: "U",
                status: "*",
                modifier: "------",
                desc_kor: "수중항적",
                desc_eng: "Subsurface,track",
                children: [{
                        id: "1.5.1",
                        type: "S",
                        affiliation: "*",
                        battlefield: "U",
                        status: "*",
                        modifier: "S-----",
                        desc_kor: "잠수함",
                        desc_eng: "Submarine",
                        children: [
                            { id: "1.5.1.1", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "SN----", desc_kor: "핵잠수함", desc_eng: "Nuclear,propulsion" },
                            {
                                id: "1.5.1.2",
                                type: "S",
                                affiliation: "*",
                                battlefield: "U",
                                status: "*",
                                modifier: "SC----",
                                desc_kor: "재래식잠수함",
                                desc_eng: "Conventional,propulsion",
                                children: [
                                    { id: "1.5.1.2.1", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "SCF---", desc_kor: "재래식잠수함(수상)", desc_eng: "Surfaced,conventional,propulsion,submarine" },
                                    { id: "1.5.1.2.2", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "SCA---", desc_kor: "재래식잠수함(공격)", desc_eng: "Attack,submarine,(SS)" },
                                    { id: "1.5.1.2.3", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "SCM---", desc_kor: "재래식잠수함(유도탄)(종류미상)", desc_eng: "Missile,submarine,(Type,unknown)" },
                                    { id: "1.5.1.2.4", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "SCG---", desc_kor: "재래식잠수함(SSG)(유도미사일)", desc_eng: "Guided,missile,submarine,(SSG)" },
                                    { id: "1.5.1.2.5", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "SCB---", desc_kor: "재래식잠수함(SSB)(탄도미사일)", desc_eng: "Ballistic,missile,submarine,(SSB)" }
                                ]
                            },
                            {
                                id: "1.5.1.3",
                                type: "S",
                                affiliation: "*",
                                battlefield: "U",
                                status: "*",
                                modifier: "SO----",
                                desc_kor: "기타잠수함",
                                desc_eng: "Other,submersible",
                                children: [{
                                        id: "1.5.1.3.1",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "U",
                                        status: "*",
                                        modifier: "SU----",
                                        desc_kor: "무인잠수정",
                                        desc_eng: "Unmanned,underwater,vehicle,(UUV)",
                                        children: [
                                            { id: "1.5.1.3.1.1", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "SUM---", desc_kor: "대기뢰무인잠수정", desc_eng: "Mine,warfare,subsurface,drone" },
                                            { id: "1.5.1.3.1.2", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "SUS---", desc_kor: "대잠무인잠수정", desc_eng: "Antisubmarine,warfare,subsurface,drone" },
                                            { id: "1.5.1.3.1.3", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "SUN---", desc_kor: "대수상전무인잠수정", desc_eng: "Antisurface,warfare,subsurface,drone" }
                                        ]
                                    },
                                    { id: "1.5.1.3.2", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "SM----", desc_kor: "잠수정", desc_eng: "Midget,submarine" },
                                    { id: "1.5.1.3.3", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "SOF---", desc_kor: "기타잠수함(수상)", desc_eng: "Surfaced,other,submersible" }
                                ]
                            },
                            {
                                id: "1.5.1.4",
                                type: "S",
                                affiliation: "*",
                                battlefield: "U",
                                status: "*",
                                modifier: "SS----",
                                desc_kor: "위치",
                                desc_eng: "Station",
                                children: [
                                    { id: "1.5.1.4.1", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "SSA---", desc_kor: "대잠전 잠수함", desc_eng: "ASW,submarine" }
                                ]
                            },
                            { id: "1.5.1.5", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "SF----", desc_kor: "잠수함(수상)", desc_eng: "Surfaced,submarine" },
                            { id: "1.5.1.6", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "SB----", desc_kor: "잠수함(해저)", desc_eng: "Bottomed,submarine" },
                            { id: "1.5.1.7", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "SR----", desc_kor: "잠수함(확실)", desc_eng: "Certain,submarine" },
                            {
                                id: "1.5.1.8",
                                type: "S",
                                affiliation: "*",
                                battlefield: "U",
                                status: "*",
                                modifier: "SX----",
                                desc_kor: "비잠수함",
                                desc_eng: "Nonsubmarine",
                                children: [
                                    { id: "1.5.1.8.1", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "SNF---", desc_kor: "핵잠수함(수상)", desc_eng: "Surfaced,nuclear,propulsion,submarine" },
                                    { id: "1.5.1.8.2", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "SNA---", desc_kor: "핵잠수함(SSN)(공격)", desc_eng: "Attack,submarine,(SSN)" },
                                    { id: "1.5.1.8.3", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "SNM---", desc_kor: "핵잠수함(유도탄)(종류미상)", desc_eng: "Missile,submarine,(Type,unknown)" },
                                    { id: "1.5.1.8.4", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "SNG---", desc_kor: "핵잠수함(SSGN)(유도미사일)", desc_eng: "Guided,missile,submarine,(SSGN)" },
                                    { id: "1.5.1.8.5", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "SNB---", desc_kor: "핵잠수함(SSBN)(탄도미사일)", desc_eng: "Ballistic,missile,submarine,(SSBN)" }
                                ]
                            },
                            { id: "1.5.1.9", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "S1----", desc_kor: "잠수함 가능", desc_eng: "1,Possible,submarine,1" },
                            { id: "1.5.1.10", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "S2----", desc_kor: "잠수함 가능", desc_eng: "2,Possible,submarine,2" },
                            { id: "1.5.1.11", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "S3----", desc_kor: "잠수함 가능", desc_eng: "3,Possible,submarine,3" },
                            { id: "1.5.1.12", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "S4----", desc_kor: "잠수함 가능", desc_eng: "4,Possible,submarine,4" },
                            { id: "1.5.1.13", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "SL----", desc_kor: "잠수함 추정", desc_eng: "Probable,submarine" },
                            { id: "1.5.1.14", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "SK----", desc_kor: "스노클링 잠수함", desc_eng: "Snorkeling,submarine" }
                        ]
                    },
                    {
                        id: "1.5.2",
                        type: "S",
                        affiliation: "*",
                        battlefield: "U",
                        status: "*",
                        modifier: "W-----",
                        desc_kor: "수중화기",
                        desc_eng: "Underwater,weapon",
                        children: [{
                                id: "1.5.2.1",
                                type: "S",
                                affiliation: "*",
                                battlefield: "U",
                                status: "*",
                                modifier: "WT----",
                                desc_kor: "어뢰",
                                desc_eng: "Torpedo",
                                children: [
                                    { id: "1.5.2.1.1", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "WB----", desc_kor: "폭뢰", desc_eng: "Depth,bomb" }
                                ]
                            },
                            {
                                id: "1.5.2.2",
                                type: "S",
                                affiliation: "*",
                                battlefield: "U",
                                status: "*",
                                modifier: "WM----",
                                desc_kor: "기뢰",
                                desc_eng: "Sea,mine",
                                children: [
                                    { id: "1.5.2.2.1", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "WMD---", desc_kor: "기뢰(처리된)", desc_eng: "Sea,mine,neutralized" },
                                    {
                                        id: "1.5.2.2.2",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "U",
                                        status: "*",
                                        modifier: "WMG---",
                                        desc_kor: "해저기뢰",
                                        desc_eng: "Sea,mine,(Ground)",
                                        children: [
                                            { id: "1.5.2.2.2.1", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "WMGD--", desc_kor: "해저기뢰(처리된)", desc_eng: "Sea,mine,(Ground),neutralized" },
                                            { id: "1.5.2.2.2.2", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "WMGX--", desc_kor: "해저기뢰(훈련용)", desc_eng: "Ground,(Bottom),exercise,mine" },
                                            { id: "1.5.2.2.2.3", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "WMGE--", desc_kor: "해저기뢰 유사 에코(MILEC)", desc_eng: "Ground,(Bottom),mine-like,echo,(MILEC)" },
                                            { id: "1.5.2.2.2.4", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "WMGC--", desc_kor: "해저기뢰 유사 접촉(MILCO)", desc_eng: "Ground,(Bottom),mine-like,contact,(MILCO)" },
                                            { id: "1.5.2.2.2.5", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "WMGR--", desc_kor: "해저기뢰 재포착 불가", desc_eng: "Ground,(Bottom),negative,reacquisition" },
                                            { id: "1.5.2.2.2.6", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "WMGO--", desc_kor: "해저기뢰 유사 접촉(비기뢰)", desc_eng: "Ground,(Bottom),non-mine,mine-like,contact" }
                                        ]
                                    },
                                    {
                                        id: "1.5.2.2.3",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "U",
                                        status: "*",
                                        modifier: "WMM---",
                                        desc_kor: "계류기뢰",
                                        desc_eng: "Sea,mine,(Moored)",
                                        children: [
                                            { id: "1.5.2.2.3.1", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "WMMD--", desc_kor: "계류기뢰(처리된)", desc_eng: "Sea,mine,(Moored),neutralized" },
                                            { id: "1.5.2.2.3.2", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "WMMX--", desc_kor: "계류기뢰(훈련용)", desc_eng: "Moored,exercise,mine" },
                                            { id: "1.5.2.2.3.3", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "WMME--", desc_kor: "계류기뢰 유사 에코(MILEC)", desc_eng: "Moored,mine-like,echo" },
                                            { id: "1.5.2.2.3.4", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "WMMC--", desc_kor: "계류기뢰 유사 접촉(MILCO)", desc_eng: "Moored,mine-like,contact" },
                                            { id: "1.5.2.2.3.5", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "WMMR--", desc_kor: "계류기뢰 재포착 불가", desc_eng: "Moored,negative,reacquisition" },
                                            { id: "1.5.2.2.3.6", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "WMMO--", desc_kor: "계류기뢰 유사 접촉(비기뢰)", desc_eng: "Moored,non-mine,mine-like,object" }
                                        ]
                                    },
                                    {
                                        id: "1.5.2.2.4",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "U",
                                        status: "*",
                                        modifier: "WMF---",
                                        desc_kor: "부유기뢰",
                                        desc_eng: "Sea,mine,(Floating)",
                                        children: [
                                            { id: "1.5.2.2.4.1", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "WMFD--", desc_kor: "부유기뢰(처리된)", desc_eng: "Sea,mine,(Floating),neutralized" },
                                            { id: "1.5.2.2.4.2", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "WMFX--", desc_kor: "부유기뢰(훈련용)", desc_eng: "Floating,exercise,mine" },
                                            { id: "1.5.2.2.4.3", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "WMFE--", desc_kor: "부유기뢰 유사 에코(MILEC)", desc_eng: "Floating,mine-like,echo,(MILEC)" },
                                            { id: "1.5.2.2.4.4", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "WMFC--", desc_kor: "부유기뢰 유사 접촉(MILCO)", desc_eng: "Floating,mine-like,contact,(MILCO)" },
                                            { id: "1.5.2.2.4.5", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "WMFR--", desc_kor: "부유기뢰 재포착 불가", desc_eng: "Floating,negative,reacquisition" },
                                            { id: "1.5.2.2.4.6", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "WMFO--", desc_kor: "부유기뢰 유사 접촉(비기뢰)", desc_eng: "Floating,non-mine,mine-like,contact" }
                                        ]
                                    },
                                    {
                                        id: "1.5.2.2.5",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "U",
                                        status: "*",
                                        modifier: "WMO---",
                                        desc_kor: "기타기뢰",
                                        desc_eng: "Sea,mine,(Other,position)",
                                        children: [
                                            { id: "1.5.2.2.5.1", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "WMOD--", desc_kor: "기타기뢰(처리된)", desc_eng: "Sea,mine,(Other,position),neutralized" }
                                        ]
                                    },
                                    {
                                        id: "1.5.2.2.6",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "U",
                                        status: "*",
                                        modifier: "WMA---",
                                        desc_kor: "안테나기뢰",
                                        desc_eng: "General,mine,anchor",
                                        children: [
                                            { id: "1.5.2.2.6.1", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "WMAD--", desc_kor: "안테나기뢰(처리된)", desc_eng: "General,mine,anchor,neutralized" }
                                        ]
                                    },
                                    {
                                        id: "1.5.2.2.7",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "U",
                                        status: "*",
                                        modifier: "WMS---",
                                        desc_kor: "부동색기뢰",
                                        desc_eng: "Rising,mine",
                                        children: [
                                            { id: "1.5.2.2.7.1", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "WMSD--", desc_kor: "부동색기뢰(처리된)", desc_eng: "Rising,neutralized,mine" },
                                            { id: "1.5.2.2.7.2", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "WMSX--", desc_kor: "부동색기뢰(훈련용)", desc_eng: "Rising,exercise,mine" }
                                        ]
                                    },
                                    { id: "1.5.2.2.8", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "WMX---", desc_kor: "기타기뢰(훈련용)", desc_eng: "General,exercise,mine" },
                                    { id: "1.5.2.2.9", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "WME---", desc_kor: "기타기뢰 유사 에코(MILEC)", desc_eng: "General,mine-like,echo,(MILEC)" },
                                    { id: "1.5.2.2.10", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "WMC---", desc_kor: "기타기뢰 유사 접촉(MILCO)", desc_eng: "General,mine-like,contact,(MILCO)" },
                                    { id: "1.5.2.2.11", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "WMR---", desc_kor: "기타기뢰 재포착 불가", desc_eng: "General,negative,reacquisition" },
                                    {
                                        id: "1.5.2.2.12",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "U",
                                        status: "*",
                                        modifier: "WMB---",
                                        desc_kor: "기타기뢰 방해물",
                                        desc_eng: "General,obstructor",
                                        children: [
                                            { id: "1.5.2.2.12.1", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "WMBD--", desc_kor: "기타기뢰(처리된) 방해물", desc_eng: "General,neutralized,obstructor" }
                                        ]
                                    },
                                    { id: "1.5.2.2.13", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "WMN---", desc_kor: "기타기뢰 유사 접촉(비기뢰)", desc_eng: "General,non-mine,mine-like,object" }
                                ]
                            }
                        ]
                    },
                    {
                        id: "1.5.3",
                        type: "S",
                        affiliation: "*",
                        battlefield: "U",
                        status: "*",
                        modifier: "WD----",
                        desc_kor: "수중유인(교란)",
                        desc_eng: "Underwater,decoy",
                        children: [{
                            id: "1.5.3.1",
                            type: "S",
                            affiliation: "*",
                            battlefield: "U",
                            status: "*",
                            modifier: "WDM---",
                            desc_kor: "기뢰유인",
                            desc_eng: "Sea,mine,decoy",
                            children: [
                                { id: "1.5.3.1.1", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "WDMG--", desc_kor: "해저기뢰유인", desc_eng: "Ground,(Bottom),decoy" },
                                { id: "1.5.3.1.2", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "WDMM--", desc_kor: "계류기뢰유인", desc_eng: "Moored,decoy" }
                            ]
                        }]
                    },
                    {
                        id: "1.5.4",
                        type: "S",
                        affiliation: "*",
                        battlefield: "U",
                        status: "*",
                        modifier: "N-----",
                        desc_kor: "비잠수함",
                        desc_eng: "Non-submarine",
                        children: [
                            { id: "1.5.4.1", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "ND----", desc_kor: "잠수부", desc_eng: "Diver" }
                        ]
                    },
                    { id: "1.5.5", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "E-----", desc_kor: "환경보고지점", desc_eng: "Environmental,report,location" },
                    { id: "1.5.6", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "V-----", desc_kor: "잠수보고지점", desc_eng: "Dive,report,location" },
                    { id: "1.5.7", type: "S", affiliation: "*", battlefield: "U", status: "*", modifier: "X-----", desc_kor: "불발탄지역", desc_eng: "Unexploded,ordnance,area" }
                ]
            },
            {
                id: "1.6",
                type: "S",
                affiliation: "*",
                battlefield: "F",
                status: "*",
                modifier: "------",
                desc_kor: "기동부대",
                desc_eng: "Special,operations,forces,(SOF),unit",
                children: [{
                        id: "1.6.1",
                        type: "S",
                        affiliation: "*",
                        battlefield: "F",
                        status: "*",
                        modifier: "A-----",
                        desc_kor: "기동부대(항공)",
                        desc_eng: "SOF,unit,aviation",
                        children: [{
                                id: "1.6.1.1",
                                type: "S",
                                affiliation: "*",
                                battlefield: "F",
                                status: "*",
                                modifier: "AF----",
                                desc_kor: "기동부대(고정익)",
                                desc_eng: "SOF,unit,fixed,wing",
                                children: [
                                    { id: "1.6.1.1.1", type: "S", affiliation: "*", battlefield: "F", status: "*", modifier: "AFA---", desc_kor: "기동부대(공격고정익)", desc_eng: "SOF,unit,attack" },
                                    { id: "1.6.1.1.2", type: "S", affiliation: "*", battlefield: "F", status: "*", modifier: "AFK---", desc_kor: "기동부대(재급유고정익)", desc_eng: "SOF,unit,refuel" },
                                    {
                                        id: "1.6.1.1.3",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "F",
                                        status: "*",
                                        modifier: "AFU---",
                                        desc_kor: "기동부대(다목적고정익)",
                                        desc_eng: "SOF,unit,utility",
                                        children: [
                                            { id: "1.6.1.1.3.1", type: "S", affiliation: "*", battlefield: "F", status: "*", modifier: "AFUL--", desc_kor: "기동부대(다목적고정익-경)", desc_eng: "SOF,unit,utility,(Light)" },
                                            { id: "1.6.1.1.3.2", type: "S", affiliation: "*", battlefield: "F", status: "*", modifier: "AFUM--", desc_kor: "기동부대(다목적고정익-중)", desc_eng: "SOF,unit,utility,(Medium)" },
                                            { id: "1.6.1.1.3.3", type: "S", affiliation: "*", battlefield: "F", status: "*", modifier: "AFUH--", desc_kor: "기동부대(다목적고정익-대)", desc_eng: "SOF,unit,utility,(Heavy)" }
                                        ]
                                    }
                                ]
                            },
                            { id: "1.6.1.2", type: "S", affiliation: "*", battlefield: "F", status: "*", modifier: "AV----", desc_kor: "기동부대(수직이착륙기)", desc_eng: "SOF,unit,V/STOL" },
                            {
                                id: "1.6.1.3",
                                type: "S",
                                affiliation: "*",
                                battlefield: "F",
                                status: "*",
                                modifier: "AH----",
                                desc_kor: "기동부대(회전익)",
                                desc_eng: "SOF,unit,rotary,wing",
                                children: [
                                    { id: "1.6.1.3.1", type: "S", affiliation: "*", battlefield: "F", status: "*", modifier: "AHH---", desc_kor: "기동부대(탐색구조헬기)", desc_eng: "SOF,unit,combat,search,and,rescue" },
                                    { id: "1.6.1.3.2", type: "S", affiliation: "*", battlefield: "F", status: "*", modifier: "AHA---", desc_kor: "기동부대(공격헬기)", desc_eng: "SOF,unit,attack" },
                                    {
                                        id: "1.6.1.3.3",
                                        type: "S",
                                        affiliation: "*",
                                        battlefield: "F",
                                        status: "*",
                                        modifier: "AHU---",
                                        desc_kor: "기동부대(다목적헬기)",
                                        desc_eng: "SOF,unit,utility",
                                        children: [
                                            { id: "1.6.1.3.3.1", type: "S", affiliation: "*", battlefield: "F", status: "*", modifier: "AHUL--", desc_kor: "기동부대(다목적헬기-경)", desc_eng: "SOF,unit,utility,(Light)" },
                                            { id: "1.6.1.3.3.2", type: "S", affiliation: "*", battlefield: "F", status: "*", modifier: "AHUM--", desc_kor: "기동부대(다목적헬기-중)", desc_eng: "SOF,unit,utility,(Medium)" },
                                            { id: "1.6.1.3.3.3", type: "S", affiliation: "*", battlefield: "F", status: "*", modifier: "AHUH--", desc_kor: "기동부대(다목적헬기-대)", desc_eng: "SOF,unit,utility,(Heavy)" }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: "1.6.2",
                        type: "S",
                        affiliation: "*",
                        battlefield: "F",
                        status: "*",
                        modifier: "N-----",
                        desc_kor: "해군특수작전",
                        desc_eng: "SOF,unit,SOF,unit,naval",
                        children: [
                            { id: "1.6.2.1", type: "S", affiliation: "*", battlefield: "F", status: "*", modifier: "NS----", desc_kor: "특전작전팀", desc_eng: "SOF,unit,seal" },
                            { id: "1.6.2.2", type: "S", affiliation: "*", battlefield: "F", status: "*", modifier: "NU----", desc_kor: "수중 폭파팀", desc_eng: "SOF,unit,underwater,demolition,team" },
                            { id: "1.6.2.3", type: "S", affiliation: "*", battlefield: "F", status: "*", modifier: "NB----", desc_kor: "특수작전용 보트", desc_eng: "SOF,unit,special,boat" },
                            { id: "1.6.2.4", type: "S", affiliation: "*", battlefield: "F", status: "*", modifier: "NN----", desc_kor: "특수작전용 잠수함", desc_eng: "SOF,unit,special,SSNR" }
                        ]
                    },
                    {
                        id: "1.6.3",
                        type: "S",
                        affiliation: "*",
                        battlefield: "F",
                        status: "*",
                        modifier: "G-----",
                        desc_kor: "지상 특수작전용",
                        desc_eng: "SOF,unit,ground",
                        children: [
                            { id: "1.6.3.1", type: "S", affiliation: "*", battlefield: "F", status: "*", modifier: "GS----", desc_kor: "특수전부대", desc_eng: "SOF,unit,special,forces" },
                            { id: "1.6.3.2", type: "S", affiliation: "*", battlefield: "F", status: "*", modifier: "GR----", desc_kor: "공수특전", desc_eng: "SOF,unit,ranger" },
                            {
                                id: "1.6.3.3",
                                type: "S",
                                affiliation: "*",
                                battlefield: "F",
                                status: "*",
                                modifier: "GP----",
                                desc_kor: "기동부대(심리작전)",
                                desc_eng: "SOF,unit,psychological,operations,(PSYOP)",
                                children: [
                                    { id: "1.6.3.3.1", type: "S", affiliation: "*", battlefield: "F", status: "*", modifier: "GPA---", desc_kor: "기동부대(심리작전-항공)", desc_eng: "SOF,unit,fixed,wing,aviation" }
                                ]
                            },
                            { id: "1.6.3.4", type: "S", affiliation: "*", battlefield: "F", status: "*", modifier: "GC----", desc_kor: "기동부대(민사)", desc_eng: "SOF,unit,civil,affairs" }
                        ]
                    },
                    { id: "1.6.4", type: "S", affiliation: "*", battlefield: "F", status: "*", modifier: "B-----", desc_kor: "특수작전지원부대", desc_eng: "Sof,unit,support" },
                    { id: "1.6.5", type: "S", affiliation: "*", battlefield: "F", status: "*", modifier: "U-----", desc_kor: "합동특수작전", desc_eng: "합동특수작전" }
                ]
            }
        ]
    }
];

module.exports = {
    code: "S",
    affiliation: affiliation_Basic,
    battlefield: battlefield_Basic,
    status: status_Basic,
    unit: unit_Basic,
    mission: mission_Basic,
    identifier: functionIdentifier_Basic
};