const { ms } = require("../../ms");
const metadata_letter = require("../metadata").metadata;
const getIcons_letter = require("../geticons").geticons;
const icons = require("../../iconparts/ground").icons;
const tacticalpoints = require("../../iconparts/tactical-points").icons;

module.exports = {
    type: "letter",
    getMetadata: metadata_letter,
    getIcons: getIcons_letter,
    iconParts: [icons, tacticalpoints],
    icons: function emergencymanagementsymbols(sId, bbox, icn, _STD2525) {
        //Adds support for 2525C Emergency Management Symbols
        sId["E-I-A-----"] = [icn["AC.IC.CRIMINAL.CIVIL DISTURBANCE"]];
        sId["E-I-AC----"] = [icn["ST.IC.GROUP"], icn["AC.M1.RIOT"]];
        sId["E-I-B-----"] = [icn["AC.IC.CRIMINAL.ACTIVITY.INCIDENT"]];
        sId["E-I-BA----"] = [icn["ST.IC.BOMB"], icn["AC.M1.THREAT"]];
        sId["E-I-BC----"] = [
            icn["ST.IC.EXPLOSION"],
            ms._scale(0.6, icn["ST.IC.BOMB"])
        ];
        sId["E-I-BD----"] = [icn["ST.IC.GROUP"], icn["ST.M1.LOOT"]];
        sId["E-I-BF----"] = [icn["AC.IC.SHOOTING"]];
        sId["E-I-C-----"] = [icn["AC.IC.FIRE EVENT"]];
        sId["E-I-CA----"] = [icn["AC.IC.HOT SPOT"]];
        sId["E-I-CB----"] = [icn["AC.IC.NON-REsIdENTIAL FIRE"]];
        sId["E-I-CC----"] = [icn["AC.IC.FIRE ORIGIN"]];
        sId["E-I-CD----"] = [icn["AC.IC.REsIdENTIAL FIRE"]];
        sId["E-I-CE----"] = [icn["AC.IC.SCHOOL FIRE"]];
        sId["E-I-CF----"] = [icn["AC.IC.SMOKE"]];
        sId["E-I-CG----"] = [icn["AC.IC.SPECIAL NEEDS FIRE"]];
        sId["E-I-CH----"] = [icn["AC.IC.WILD FIRE"]];
        sId["E-I-D-----"] = [icn["AC.IC.HAZARDOUS MATERIALS INCIDENT"]];
        sId["E-I-DA----"] = [icn["AC.IC.CHEMICAL AGENT"]];
        sId["E-I-DB----"] = [icn["AC.IC.CORROSIVE MATERIAL"]];
        sId["E-I-DC----"] = [icn["AC.IC.HAZARDOUS WHEN WET"]];
        sId["E-I-DD----"] = [icn["AC.IC.EXPLOSIVE MATERIAL"]];
        sId["E-I-DE----"] = [icn["AC.IC.FLAMMABLE GAS"]];
        sId["E-I-DF----"] = [icn["AC.IC.FLAMMABLE LIQUID"]];
        sId["E-I-DG----"] = [icn["AC.IC.FLAMMABLE SOLID"]];
        sId["E-I-DH----"] = [icn["AC.IC.NON-FLAMMABLE GAS"]];
        sId["E-I-DI----"] = [icn["AC.IC.ORGANIC PEROXIDE"]];
        sId["E-I-DJ----"] = [icn["AC.IC.OXIDIZER"]];
        sId["E-I-DK----"] = [icn["AC.IC.RADIOACTIVE MATERIAL"]];
        sId["E-I-DL----"] = [icn["AC.IC.SPONTANEOUSLY COMBUSTIBLE MATERIAL"]];
        sId["E-I-DM----"] = [icn["AC.IC.TOXIC GAS"]];
        sId["E-I-DN----"] = [icn["AC.IC.TOXIC INFECTIOUS MATERIAL"]];
        sId["E-I-DO----"] = [icn["AC.IC.UNEXPLODED ORDNANCE"]];
        sId["E-I-E-----"] = [
            icn["ST.M1.INCIDENT"],
            icn["ST.IC.HIJACKING (AIRPLANE)"]
        ];
        sId["E-I-EA----"] = [
            icn["ST.M1.ACCIDENT"],
            icn["ST.IC.HIJACKING (AIRPLANE)"]
        ];
        sId["E-I-F-----"] = [icn["ST.M1.INCIDENT"], icn["ST.IC.HIJACKING (BOAT)"]];
        sId["E-I-FA----"] = [icn["ST.M1.ACCIDENT"], icn["ST.IC.HIJACKING (BOAT)"]];
        sId["E-I-G-----"] = [icn["ST.M1.INCIDENT"], icn["GR.EQ.TRAIN LOCOMOTIVE"]];
        sId["E-I-GA----"] = [icn["ST.M1.ACCIDENT"], icn["GR.EQ.TRAIN LOCOMOTIVE"]];
        sId["E-I-GB----"] = [
            icn["GR.EQ.TRAIN LOCOMOTIVE"],
            icn["ST.M1.HIJACKING/HIJACKED"]
        ];
        sId["E-I-H-----"] = [
            icn["ST.M1.INCIDENT"],
            icn["ST.IC.KNOWN INSURGENT VEHICLE"]
        ];
        sId["E-I-HA----"] = [
            icn["ST.M1.ACCIDENT"],
            icn["ST.IC.KNOWN INSURGENT VEHICLE"]
        ];
        sId["E-N-A-----"] = []; // N/A
        sId["E-N-AA----"] = [icn["AC.IC.AFTERSHOCK"]];
        sId["E-N-AB----"] = [icn["AC.IC.AVALANCHE"]];
        sId["E-N-AC----"] = [icn["AC.IC.EARTHQUAKE EPICENTER"]];
        sId["E-N-AD----"] = [icn["AC.IC.LANDSLIDE"]];
        sId["E-N-AE----"] = [icn["AC.IC.SUBSIDENCE"]];
        sId["W-S-WSVE--"] = [icn["AC.IC.VOLCANIC ERUPTION"]];
        sId["E-N-AG----"] = [icn["AC.IC.VOLCANIC THREAT"]];
        sId["W-S-WSD-LI"] = [icn["ATMOSPHERIC.IC.DRIZZLE.INTERMITTENT LIGHT"]];
        sId["E-N-B-----"] = []; // N/A
        sId["E-N-BB----"] = [icn["AC.IC.DROUGHT"]];
        sId["E-N-BC----"] = [icn["AC.IC.FLOOD"]];
        sId["W-S-WSGRL-"] = [icn["ATMOSPHERIC.IC.HAIL.LIGHT NOT ASSOCIATED WITH THUNDER"]];
        sId["W-S-WSGRMH"] = [icn["우박(중/강)"]];
        sId["W-S-WSSSL-"] = [icn["소낙눈(약)"]];
        sId["W-S-WSSSMH"] = [icn["소낙눈(중/강)"]];
        sId["W-S-MPA---"] = [icn["말뚝/기둥"]];
        sId["W-S-MOA---"] = [icn["석유/가스"]];
        sId["W-S-MF----"] = [icn["여울"]];
        sId["W-S-TCCTG-"] = [icn["검조기"]];
        sId["W-S-TCCTD-"] = [icn["조류자료수집점"]];
        sId["W-S-TCCW--"] = [icn["난류"]];
        sId["W-S-BFQ-C-"] = [icn["거친"]];
        sId["W-S-BFQ-M-"] = [icn["보통"]];
        sId["W-S-BFQ-F-"] = [icn["좋음"]];
        sId["W-S-BFC-SH"] = [icn["패각"]];
        sId["W-S-BFC-CO"] = [icn["산호"]];
        sId["W-S-BFC-R-"] = [icn["바위"]];
        sId["W-S-BFC-CB"] = [icn["굵은자갈"]];
        sId["W-S-BFC-P-"] = [icn["조약돌"]];
        sId["W-S-BFC-G-"] = [icn["자갈자"]];
        sId["W-S-BFC-ST"] = [icn["돌"]];
        sId["W-S-BFC-SI"] = [icn["유사"]];
        sId["W-S-BFC-CL"] = [icn["점토"]];
        sId["W-S-BFC-M-"] = [icn["진흙"]];
        sId["W-S-BFC-S-"] = [icn["모래"]];
        sId["W-S-HHDE--"] = [icn["회오리/단조/격조"]];
        sId["W-S-HHDWB-"] = [icn["난파선(침수)"]];
        sId["W-S-HHDWA-"] = [icn["난파선(돌출)"]];
        sId["W-S-HHDS--"] = [icn["암초"]];
        sId["W-S-HHDMDF"] = [icn["기뢰(명확)"]];
        sId["W-S-HHDMDB"] = [icn["기뢰(의심)"]];
        sId["W-S-HHDF--"] = [icn["해저암초(위치)"]];
        sId["W-S-HHRA--"] = [icn["암반(침세)"]];
        sId["W-S-HHRS--"] = [icn["암반(침수)"]];
        sId["W-S-HALV--"] = [icn["등대선"]];
        sId["W-S-HAL---"] = [icn["말뚝"]];
        sId["W-S-HABP--"] = [icn["말뚝(위치)"]];
        sId["W-S-HABM--"] = [icn["표시"]];
        sId["W-S-HABB--"] = [icn["부표(기본)"]];
        sId["W-S-HABA--"] = [icn["신호등"]];
        sId["W-S-HPD---"] = [icn["돌고래"]];
        sId["W-S-HPM-CC"] = [icn["연락선(케이블)"]];
        sId["W-S-HPM-FC"] = [icn["연락선"]];
        sId["W-S-HPM-R-"] = [icn["상륙고리"]];
        sId["W---HPMO--"] = [icn["연안화물적재시설(위치)"]];
        sId["W-S-HPML--"] = [icn["상륙장"]];
        sId["W-S-HPFS--"] = [icn["둑(경계)"]]; //WOS-HPFS---L---
        sId["W-S-HPFS--"] = [icn["둑(위치)"]]; //WOS-HPFS--P----
        sId["W-S-HPFH--"] = [icn["어항"]];
        sId["W-S-HPCP--"] = [icn["호출지점"]];
        sId["W-S-HPBA--"] = [icn["정박지(위치)"]];
        sId["W-S-HPB-A-"] = [icn["정박지(닻)"]];
        sId["W-S-HPB-O-"] = [icn["정박지(육지)"]];
        sId["W-S-ITR---"] = [icn["급류"]];
        sId["W-S-ITRH--"] = [icn["산마루/작은언덕"]];
        sId["W-S-IIP---"] = [icn["홍수얼음"]];
        sId["W-S-IITE--"] = [icn["해빙두께(추정)"]];
        sId["W-S-IITM--"] = [icn["해빙두께(관측)"]];
        sId["W-S-II----"] = [icn["해빙(바다얼음)"]];
        sId["W---IDID--"] = [icn["눈더미(방향)"]];
        sId["W-S-IDS---"] = [icn["측밀림지역"]];
        sId["W-S-IDD---"] = [icn["발산"]];
        sId["W-S-IDC---"] = [icn["수렴"]];
        sId["W-S-ICIF--"] = [icn["빙산없음"]];
        sId["W-S-ICWR--"] = [icn["레이다에포착되는빙산"]];
        sId["W-S-ICWB--"] = [icn["빙산많음"]];

        sId["E-N-BF----"] = [icn["AC.IC.INVERSION"]];
        sId["W-S-WSDD--"] = [icn["ATMOSPHERIC.IC.TORNADO"]];
        sId["W-S-WSS-LI"] = [icn["ATMOSPHERIC.IC.SNOW.INTERMITTENT LIGHT"]];
        sId["W-S-WSVA--"] = [icn["화산재"]];

        sId["W-S-PA----"] = [icn["고기압중심"]];
        sId["W-S-PC----"] = [icn["싸이클론중심"]];
        sId["W-S-PLT---"] = [icn["대류권계면저고도"]];
        sId["W-S-PHT---"] = [icn["대류권계면고고도"]];

        sId["W-S-TL----"] = [icn["난기류(약)"]];
        sId["W-S-TM----"] = [icn["난기류(중)"]];
        sId["W-S-TS----"] = [icn["난기류(상)"]];
        sId["W-S-TE----"] = [icn["난기류(매우강)"]];
        sId["W-S-T-MW--"] = [icn["산악파"]];

        sId["W-S-ICL---"] = [icn["결빙(약)"]];
        sId["W-S-ICM---"] = [icn["결빙(중)"]];
        sId["W-S-ICS---"] = [icn["결빙(강)"]];

        sId["W-S-IRL---"] = [icn["무빙(약)"]];
        sId["W-S-IRM---"] = [icn["무빙(중)"]];
        sId["W-S-IRS---"] = [icn["무빙(강)"]];

        sId["W-S-IML---"] = [icn["혼빙(약)"]];
        sId["W-S-IMM---"] = [icn["혼빙(중)"]];
        sId["W-S-IMS---"] = [icn["혼빙(강)"]];

        sId["W-S-WC----"] = [icn["무풍"]];
        sId["W-S-WP----"] = [icn["바람기호"]];

        sId["W-S-CCCSCS"] = [icn["맑음"]];
        sId["W-S-CCCSFC"] = [icn["구름조금"]];
        sId["W-S-CCCSSC"] = [icn["구름다소"]];
        sId["W-S-CCCSBC"] = [icn["약간흐림"]];
        sId["W-S-CCCSOC"] = [icn["흐림"]];
        sId["W-S-CCCSOB"] = [icn["하늘덮임"]];

        sId["W-S-WSR-LI"] = [icn["비(간헐-약)"]];
        sId["W-S-WSR-LC"] = [icn["비(지속-약)"]];
        sId["W-S-WSR-MI"] = [icn["비(간헐-중)"]];
        sId["W-S-WSR-MC"] = [icn["비(지속-중)"]];
        sId["W-S-WSR-HI"] = [icn["비(간헐-강)"]];
        sId["W-S-WSR-HC"] = [icn["비(지속-강)"]];


        sId["W-S-WSRSL-"] = [icn["소나기(약)"]];
        sId["W-S-WSRSMH"] = [icn["소나기(중/강)"]];
        sId["W-S-WSRST-"] = [icn["소나기(폭우)"]];

        sId["W-S-WSD-LC"] = [icn["가랑비(간헐-약)"]];
        sId["W-S-WSD-LC"] = [icn["가랑비(지속-약)"]];
        sId["W-S-WSD-MC"] = [icn["가랑비(간헐-중)"]];
        sId["W-S-WSD-LC"] = [icn["가랑비(지속-중)"]];
        sId["W-S-WSD-HC"] = [icn["가랑비(간헐-강)"]];
        sId["W-S-WSD-LC"] = [icn["가랑비(지속-약)"]];

        sId["W-S-WSM-L-"] = [icn["비/가랑비/눈(약)"]];
        sId["W-S-WSM-MH"] = [icn["비/가랑비/눈(중/강)"]];
        sId["W-S-WSMSL-"] = [icn["소나기/소낙눈(약)"]];
        sId["W-S-WSMSMH"] = [icn["소나기/소낙눈(중/강)"]];

        //sId["W-S-WSS-LC"] = [icn["눈(간헐-약)"]];
        sId["W-S-WSS-LC"] = [icn["눈(지속-약)"]];
        //sId["W-S-WSS-MC"] = [icn["눈(간헐-중)"]];
        sId["W-S-WSS-MC"] = [icn["눈(지속-중)"]];

        sId["W-S-WSS-HC"] = [icn["눈(간헐-강)"]];
        //sId["W-S-WSS-HC"] = [icn["눈(지속-강)"]];

        sId["W-S-WSSBLM"] = [icn["눈보라(풍설)(약/중)"]];
        sId["W-S-WSSBH-"] = [icn["눈보라(강)"]];

        sId["W-S-WSSG--"] = [icn["싸락눈"]];
        sId["W-S-WSIC--"] = [icn["얼음결정"]];

        sId["W-S-WSPLL-"] = [icn["싸락우박(약)"]];
        sId["W-S-WSPLM-"] = [icn["싸락우박(중)"]];
        sId["W-S-WSPLH-"] = [icn["싸락우박(강)"]];

        sId["W-S-WST-NP"] = [icn["뇌우"]];
        sId["W-S-WSTMR-"] = [icn["뇌우(약~중)(비/눈)"]];
        sId["W-S-WSTHR-"] = [icn["뇌우(강)(비/눈)"]];
        sId["W-S-WSTMH-"] = [icn["뇌우(약~중)(우박)"]];
        sId["W-S-WSTHH-"] = [icn["뇌우(강)(우박)"]];
        sId["W-S-WST-FC"] = [icn["토네이도"]];
        sId["W-S-WST-SQ"] = [icn["돌풍"]];
        sId["W-S-WST-LG"] = [icn["번개"]];

        sId["W-S-WSFGPS"] = [icn["안개(옅은, 부분적)"]];
        sId["W-S-WSFGCS"] = [icn["안개(옅은, 지속적)"]];
        sId["W-S-WSFGP-"] = [icn["안개(부분적)"]];
        sId["W-S-WSFGSV"] = [icn["안개(하늘보임)"]];
        sId["W-S-WSFGSO"] = [icn["안개(하늘가림)"]];
        sId["W-S-WSFGFV"] = [icn["얼안개(빙무)(하늘보임)"]];
        sId["W-S-WSFGFO"] = [icn["얼안개(빙무)(하늘가림)"]];

        sId["W-S-WSBR--"] = [icn["박무"]];

        sId["W-S-WSDSLM"] = [icn["풍진(약~중)"]];
        sId["W-S-WSDSS-"] = [icn["풍진(강)"]];
        sId["W-S-WSDD--"] = [icn["회오리바람"]];
        sId["W-S-WSDB--"] = [icn["먼지/모래바람"]];

        sId["W-S-WSTSD-"] = [icn["열대성저기압"]];
        sId["W-S-WSTSS-"] = [icn["열대폭풍"]];
        sId["W-S-WSTSH-"] = [icn["허리케인"]];
        sId["W-S-WSTSH-"] = [icn["열대태풍영역/일시"]];
        
        sId["W-S-WST-LV"] = [icn["대류권계면고도"]];


        sId["E-N-BM----"] = [icn["AC.IC.TSUNAMI"]];
        sId["E-N-C-----"] = []; // N/A
        sId["E-N-CA----"] = [icn["AC.IC.BIRD"]];
        sId["E-N-CB----"] = [icn["AC.IC.INSECT"]];
        sId["E-N-CC----"] = [icn["AC.IC.MICROBIAL"]];
        sId["E-N-CD----"] = [icn["AC.IC.REPTILE"]];
        sId["E-N-CE----"] = [icn["AC.IC.RODENT"]];
        sId["E-O-A-----"] = sId["E-O-AA----"] = sId["E-O-AB----"] = sId[
            "E-O-AC----"
        ] = sId["E-O-AD----"] = [icn["GR.IC.EMERGENCY MEDICAL OPERATION"]];
        sId["E-O-AE----"] = [
            icn["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],
            icn["GR.M1.MEDEVAC"]
        ];
        sId["E-O-AF----"] = [
            ms._translate(0, 10, ms._scale(0.8, icn["GR.I.FF.CIVILIAN ROTARY WING"])),
            icn["GR.M1.MEDEVAC"]
        ];
        sId["E-O-AG----"] = [icn["AC.IC.HEALTH DEPARTMENT FACILITY"]];
        sId["E-O-AJ----"] = [icn["AC.IC.MEDICAL FACILITIES OUTPATIENT"]];
        sId["E-O-AK----"] = [icn["AC.IC.OPERATION/EMERGENCY MEDICAL OPERATION"]];
        sId["E-O-AL----"] = [icn["AC.IC.PHARMACY"]];
        sId["E-O-AM----"] = [icn["AC.IC.TRIAGE"]];
        sId["E-O-B-----"] = sId["E-O-BA----"] = sId["E-O-BB----"] = sId[
            "E-O-BC----"
        ] = [icn["GR.IC.FF.EMERGENCY OPERATION"]];
        sId["E-O-BD----"] = [
            ms._scale(0.7, icn["GR.IC.FF.EMERGENCY OPERATION"]),
            icn["AC.M1.EMERGENCY COLLECTION EVACUATION POINT"]
        ];
        sId["E-O-BE----"] = [
            ms._scale(0.7, icn["GR.IC.FF.EMERGENCY OPERATION"]),
            icn["AC.M1.EMERGENCY INCIDENT COMMAND CENTER"]
        ];
        sId["E-O-BF----"] = [
            ms._scale(0.7, icn["GR.IC.FF.EMERGENCY OPERATION"]),
            icn["AC.M1.EMERGENCY OPERATIONS CENTER"]
        ];
        sId["E-O-BG----"] = [icn["AC.IC.EMERGENCY PUBLIC INFORMATION CENTER"]];
        sId["E-O-BH----"] = [
            ms._scale(0.7, icn["GR.IC.FF.EMERGENCY OPERATION"]),
            icn["AC.M1.EMERGENCY SHELTER"]
        ];
        sId["E-O-BI----"] = [
            ms._scale(0.7, icn["GR.IC.FF.EMERGENCY OPERATION"]),
            icn["AC.M1.EMERGENCY STAGING AREA"]
        ];
        sId["E-O-BJ----"] = [icn["GR.IC.FF.EMERGENCY OPERATION"]];
        sId["E-O-BK----"] = sId["S-G-USSW--"];
        sId["E-O-BL----"] = [
            icn["ST.IC.FOOD DISTRIBUTION"],
            icn["AC.M1.EMERGENCY"]
        ];
        sId["E-O-C-----"] = sId["E-O-CA----"] = sId["E-O-CB----"] = sId[
            "E-O-CE----"
        ] = [icn["GR.IC.FIRE PROTECTION"]];
        sId["E-O-CC----"] = [icn["AC.IC.FIRE HYDRANT"]];
        sId["E-O-CD----"] = [icn["AC.IC.OTHER WATER SUPPLY LOCATION"]];
        sId["E-O-D-----"] = sId["E-O-DA----"] = sId["E-O-DB----"] = sId[
            "E-O-DC----"
        ] = [icn["GR.IC.FF.LAW ENFORCEMENT"]];
        sId["E-O-DD----"] = sId["E-O-DDA---"] = sId["E-O-DDB---"] = sId[
            "E-O-DDC---"
        ] = [
            icn[
                "GR.IC.BUREAU OF ALCOHOL, TOBACCO, FIREARMS AND EXPLOSIVES (ATF) (DEPARTMENT OF JUSTICE)"
            ]
        ];
        sId["E-O-DE----"] = sId["E-O-DEA---"] = sId["E-O-DEB---"] = sId[
            "E-O-DEC---"
        ] = [icn["GR.IC.FF.BORDER PATROL"]];
        sId["E-O-DF----"] = sId["E-O-DFA---"] = sId["E-O-DFB---"] = sId[
            "E-O-DFC---"
        ] = [icn["GR.IC.FF.CUSTOMS SERVICE"]];
        sId["E-O-DG----"] = sId["E-O-DGA---"] = sId["E-O-DGB---"] = sId[
            "E-O-DGC---"
        ] = [icn["GR.IC.DRUG ENFORCEMENT AGENCY (DEA)"]];
        sId["E-O-DH----"] = sId["E-O-DHA---"] = sId["E-O-DHB---"] = sId[
            "E-O-DHC---"
        ] = [icn["GR.IC.FF.DEPARTMENT OF JUSTICE (DOJ)"]];
        sId["E-O-DI----"] = sId["E-O-DIA---"] = sId["E-O-DIB---"] = sId[
            "E-O-DIC---"
        ] = [icn["GR.IC.FEDERAL BUREAU OF INVESTIGATION (FBI)"]];
        sId["E-O-DJ----"] = sId["E-O-DJB---"] = sId["E-O-DJC---"] = [
            icn["GR.IC.LAW ENFORCEMENT"]
        ];
        sId["E-O-DK----"] = [icn["GR.IC.FF.PRISON"]];
        sId["E-O-DL----"] = sId["E-O-DLA---"] = sId["E-O-DLB---"] = sId[
            "E-O-DLC---"
        ] = [icn["GR.IC.UNITED STATES SECRET SERVICE(TREAS) (USSS)"]];
        sId["E-O-DM----"] = sId["E-O-DMA---"] = sId["E-O-DMB---"] = sId[
            "E-O-DMC---"
        ] = [icn["GR.IC.TRANSPORTATION SECURITY AGENCY (TSA)"]];
        sId["E-O-DN----"] = sId["E-O-DNA---"] = sId["E-O-DNC---"] = [
            icn["GR.IC.LAW ENFORCEMENT VESSEL"]
        ];
        sId["E-O-DO----"] = sId["E-O-DOA---"] = sId["E-O-DOB---"] = sId[
            "E-O-DOC---"
        ] = [icn["GR.IC.FF.US MARSHALS SERVICE"]];
        sId["E-O-EA----"] = [
            ms._scale(0.6, icn["GR.EQ.SENSOR"]),
            icn["GR.M1.BIOLOGICAL"]
        ];
        sId["E-O-EB----"] = [
            ms._scale(0.6, icn["GR.EQ.SENSOR"]),
            icn["GR.M1.CHEMICAL"]
        ];
        sId["E-O-EC----"] = [
            ms._scale(0.6, icn["GR.EQ.SENSOR"]),
            icn["GR.M1.INTRUSION"]
        ];
        sId["E-O-ED----"] = [
            ms._scale(0.6, icn["GR.EQ.SENSOR"]),
            icn["GR.M1.NUCLEAR"]
        ];
        sId["E-O-EE----"] = [
            ms._scale(0.6, icn["GR.EQ.SENSOR"]),
            icn["GR.M1.RADIOLOGICAL"]
        ];
        sId["E-F-A-----"] = [icn["GR.IN.IC.AGRICULTURE AND FOOD INFRASTRUCTURE"]];
        sId["E-F-AA----"] = [icn["GR.IN.IC.AGRICULTURAL LABORATORY"]];
        sId["E-F-AB----"] = [icn["GR.IN.IC.ANIMAL FEEDLOT"]];
        sId["E-F-AC----"] = [
            icn["ST.IC.FOOD DISTRIBUTION"],
            icn["AC.M1.COMMERCIAL"]
        ];
        sId["E-F-AD----"] = [icn["GR.IN.IC.FARM/RANCH"]];
        sId["E-F-AE----"] = [
            icn["ST.IC.FOOD DISTRIBUTION"],
            icn["AC.M1.PRODUCTION"]
        ];
        sId["E-F-AF----"] = [icn["ST.IC.FOOD DISTRIBUTION"], icn["AC.M1.RETAIL"]];
        sId["E-F-AG----"] = [icn["GR.IN.IC.GRAIN STORAGE"]];
        sId["E-F-B-----"] = [
            icn["AC.IC.BANKING FINANCE AND INSURANCE INFRASTRUCTURE"]
        ];
        sId["E-F-BA----"] = [icn["GR.IN.IC.ATM"]];
        sId["E-F-BB----"] = [icn["GR.IN.IC.BANK"]];
        sId["E-F-BC----"] = [icn["GR.IN.IC.BULLION STORAGE"]];
        sId["E-F-BD----"] = [icn["GR.IN.IC.FEDERAL RESERVE BANK"]];
        sId["E-F-BE----"] = [icn["GR.IN.IC.FINANCIAL EXCHANGE"]];
        sId["E-F-BF----"] = [icn["GR.IN.IC.FINANCIAL SERVICES, OTHER"]];
        sId["E-F-C-----"] = [icn["GR.IN.IC.COMMERCIAL INFRASTRUCTURE"]];
        sId["E-F-CA----"] = [icn["GR.IN.IC.CHEMICAL PLANT"]];
        sId["E-F-CB----"] = [icn["GR.IN.IC.FIREARMS MANUFACTURER"]];
        sId["E-F-CC----"] = [icn["GR.IN.IC.FIREARMS RETAILER"]];
        sId["E-F-CD----"] = [icn["GR.IN.IC.HAZARDOUS MATERIAL PRODUCTION"]];
        sId["E-F-CE----"] = [icn["GR.IN.IC.HAZARDOUS MATERIAL STORAGE"]];
        sId["E-F-CF----"] = [icn["GR.IN.IC.INDUSTRIAL SITE"]];
        sId["E-F-CG----"] = [icn["GR.IN.IC.LANDFILL"]];
        sId["E-F-CH----"] = [icn["GR.IN.IC.PHARMACEUTICAL MANUFACTURER"]];
        sId["E-F-CI----"] = [icn["GR.IN.IC.CONTAMINATED HAZARDOUS WASTE SITE"]];
        sId["E-F-CJ----"] = [icn["GR.IN.IC.TOXIC RELEASE INVENTORY"]];
        sId["E-F-D-----"] = [icn["GR.IN.IC.EDUCATIONAL FACILITIES INFRASTRUCTURE"]];
        sId["E-F-DA----"] = [icn["GR.IN.IC.COLLEGE/UNIVERSITY"]];
        sId["E-F-DB----"] = [icn["GR.IN.IC.SCHOOL"]];
        sId["E-F-EA----"] = [
            ms._translate(0, 15, ms._scale(0.75, icn["GR.IN.IC.ELECTRIC POWER"])),
            icn["AC.M1.GENERATION STATION"]
        ];
        sId["E-F-EB----"] = [icn["GR.IN.IC.NATURAL GAS FACILITY"]];
        sId["E-F-EE----"] = [icn["GR.IN.IC.PROPANE FACILITY"]];
        sId["E-F-F-----"] = [icn["GR.IN.IC.GOVERNMENT SITE INFRASTRUCTURE"]];
        sId["E-F-G-----"] = [icn["GR.IN.IC.MILITARY INFRASTRUCTURE"]];
        sId["E-F-GA----"] = [icn["GR.IN.IC.BASE"], icn["AC.M1.MILITARY ARMORY"]];
        sId["E-F-H-----"] = [icn["GR.IN.IC.POSTAL SERVICE INFRASTRUCTURE"]];
        sId["E-F-HA----"] = [icn["GR.IN.IC.POSTAL DISTRIBUTION CENTER"]];
        sId["E-F-HB----"] = [icn["GR.IN.IC.POST OFFICE"]];
        sId["E-F-I-----"] = [icn["GR.IN.IC.PUBLIC VENUES INFRASTRUCTURE"]];
        sId["E-F-IA----"] = [icn["GR.IN.IC.ENCLOSED FACITLITY (PUBLIC VENUE)"]];
        sId["E-F-IB----"] = [icn["GR.IN.IC.OPEN FACILITY (OPEN VENUE)"]];
        sId["E-F-IC----"] = [icn["GR.IN.IC.RECREATIONAL AREA"]];
        sId["E-F-ID----"] = [icn["GR.IN.IC.RELIGIOUS INSTITUTION"]];
        sId["E-F-J-----"] = [icn["GR.IN.IC.SPECIAL NEEDS INFRASTRUCTURE"]];
        sId["E-F-JA----"] = [icn["GR.IN.IC.ADULT DAY CARE"]];
        sId["E-F-JB----"] = [icn["GR.IN.IC.CHILD DAY CARE"]];
        sId["E-F-JC----"] = [icn["GR.IN.IC.ELDER CARE"]];
        sId["E-F-K-----"] = [icn["GR.IN.IC.TELECOMMUNICATIONS INFRASTRUCTURE"]];
        sId["E-F-KB----"] = [icn["GR.IN.IC.TELECOMMUNICATIONS TOWER"]];
        sId["E-F-LA----"] = [icn["GR.IN.IC.AIR TRAFFIC CONTROL FACILITY"]];
        sId["G-M-BCB---"] = [icn["GR.IN.IC.BRIDGE"]];
        bbox["G-M-BCB---"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
        sId["E-F-LD----"] = [
            icn["GR.EQ.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE"]
        ];
        sId["E-F-LE----"] = [icn["GR.IC.FERRY"]];
        sId["E-F-LF----"] = [icn["GR.IN.IC.HELICOPTER LANDING SITE"]];
        sId["W-S-ML----"] = [icn["GR.IN.IC.TRANSPORTATION INFRASTRUCTURE LOCK"]];
        sId["E-F-LH----"] = [icn["GR.IC.MAINTENANCE"]];
        sId["E-F-LJ----"] = [icn["GR.IC.RAILHEAD"]];
        sId["E-F-LK----"] = [icn["GR.IN.IC.REST STOP"]];
        sId["W-S-HPBA--"] = [
            icn["GR.IN.IC.TRANSPORTATION INFRASTRUCTURE SHIP ANCHORAGE"]
        ];
        sId["E-F-LM----"] = [icn["GR.IN.IC.TOLL FACILITY"]];
        /*sId["G-S-PO----"] = [
          icn["GR.IN.IC.TRANSPORTATION INFRASTRUCTURE.TRAFFIC CONTROL POINT"]
        ];*/
        sId["G-S-PO----"] = icn["TP.TRAFFIC CONTROL POST"]; //TACGRP.CSS.PNT.TCP
        bbox["G-S-PO----"] = { x1: 60, x2: 140, y1: -60 };
        sId["E-F-LO----"] = [icn["GR.IN.IC.TRAFFIC INSPECTION FACILITY"]];
        sId["E-F-LP----"] = [icn["GR.IN.IC.TUNNEL"]];
        sId["E-F-MA----"] = [icn["GR.IN.IC.CONTROL VALVE"]];
        sId["E-F-MB----"] = [icn["GR.IN.IC.DAM"]];
        sId["E-F-MC----"] = [icn["GR.IN.IC.DISCHARGE OUTFALL"]];
        sId["E-F-MD----"] = [icn["GR.IN.IC.GROUND WATER WELL"]];
        sId["E-F-ME----"] = [icn["GR.IN.IC.PUMPING STATION"]];
        sId["E-F-MF----"] = [icn["GR.IN.IC.RESERVOIR"]];
        sId["E-F-MG----"] = [icn["GR.IN.IC.STORAGE TOWER"]];
        sId["E-F-MH----"] = [icn["GR.IN.IC.SURFACE WATER INTAKE"]];
        sId["E-F-MI----"] = [icn["GR.IN.IC.WASTEWATER TREATMENT FACILITY"]];

        // In other apendixes as well...
        sId["O-O-D-----"] = [icn["ST.IC.DEMONSTRATION"]];
        sId["O-I-R-----"] = [icn["ST.IC.GROUP"]];
        sId["O-V-B-----"] = [icn["ST.IC.BOMB"]];
        sId["O-V-P-----"] = [icn["ST.IC.POISONING"]];
        sId["O-O-HA----"] = [
            icn["ST.IC.HIJACKING (AIRPLANE)"],
            icn["ST.M1.HIJACKING/HIJACKED"]
        ];
        sId["O-O-HV----"] = [
            icn["ST.IC.HIJACKING (BOAT)"],
            icn["ST.M1.HIJACKING/HIJACKED"]
        ];
        sId["O-O-HT----"] = [
            icn["ST.IC.KNOWN INSURGENT VEHICLE"],
            icn["ST.M1.HIJACKING/HIJACKED"]
        ];

        sId["S-G-IXH---"] = [icn["GR.IC.FF.MEDICAL TREATMENT FACILITY"]];
        sId["S-S-NM----"] = [icn["GR.IC.HOSPITAL SHIP"]];
        sId["E-O-BK----"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.WATER"]];
        sId["S-G-UULC--"] = [icn["GR.IC.LAW ENFORCEMENT"]];
        sId["S-S-XL----"] = [icn["GR.IC.LAW ENFORCEMENT VESSEL"]];
        sId["S-G-ES----"] = [icn["GR.EQ.SENSOR"]];
        sId["S-G-IUE---"] = [icn["GR.IN.IC.ELECTRIC POWER"]];
        sId["S-G-IUEN--"] = [
            icn["GR.IN.IC.ELECTRIC POWER"],
            icn["GR.IN.IC.ELECTRIC POWER NUCLEAR"]
        ];
        sId["S-G-IRP---"] = [icn["GR.IC.FF.CLASS III"]];
        sId["S-G-IB----"] = [icn["GR.IN.IC.BASE"]];
        sId["S-G-IUT---"] = [icn["GR.IN.IC.TELECOMMUNICATIONS"]];
        sId["S-G-IT----"] = [icn["GR.IC.TRANSPORTATION"]];
        sId["S-G-IBA---"] = [
            icn["GR.IC.TRANSPORTATION"],
            icn["GR.IC.AIRPORT OF DEBARKATION"]
        ];
        sId["S-G-IBN---"] = [icn["GR.IC.NAVAL"]];
        sId["S-G-IUP---"] = [icn["GR.IC.WATER"]];
    }
};