// Tactical graphics in 2525C + some extra

module.exports = function tacticalPoints(sidc, modular) {
    sidc["G-T-B-----"] = modular["BLOCK"]; //TACGRP.TSK.BLK
    sidc["G-T-H-----"] = modular["BYPASS"]; //TACGRP.TSK.BRH
    sidc["G-T-Y-----"] = modular["BYPASS"]; //TACGRP.TSK.BYS
    sidc["G-T-C-----"] = modular["BYPASS"]; //TACGRP.TSK.CNZ
    sidc["G-T-X-----"] = modular["BLOCK"]; //TACGRP.TSK.CLR
    sidc['G-T-J-----'] = modular["BLOCK"]; //TACGRP.TSK.CNT
    sidc['G-T-K-----'] = modular["반격"]; //TACGRP.TSK.CATK
    sidc['G-T-KF----'] = modular["반격"]; //TACGRP.TSK.CATK.CATKF
    sidc["G-T-L-----"] = modular["DELAY"]; //TACGRP.TSK.DLY
    sidc['G-T-T-----'] = modular["DELAY"]; //TACGRP.TSK.DRT
    sidc["G-T-F-----"] = modular["FIX"]; //TACGRP.TSK.FIX
    sidc['G-T-A-----'] = modular["FIX"]; //TACGRP.TSK.FLWASS
    sidc['G-T-AS----'] = modular["FIX"]; //TACGRP.TSK.FLWASS.FLWSUP
    sidc["G-T-E-----"] = modular["원"]; //TACGRP.TSK.ISL
    sidc["G-T-O-----"] = modular["원"]; //TACGRP.TSK.OCC
    sidc['G-T-P-----'] = modular["BLOCK"]; //TACGRP.TSK.PNE
    sidc['G-T-R-----'] = modular["DELAY2"]; //TACGRP.TSK.RIP
    sidc['G-T-Q-----'] = modular["원"]; //TACGRP.TSK.RTN
    sidc["G-T-M-----"] = modular["DELAY"]; //TACGRP.TSK.RTM
    sidc['G-T-S-----'] = modular["원"]; //TACGRP.TSK.SCE
    //sidc['G-T-U-----'] = [];//TACGRP.TSK.SEC
    sidc['G-T-US----'] = modular["경계"]; //TACGRP.TSK.SEC.SCN
    sidc["G-T-UG----"] = modular["경계"]; //TACGRP.TSK.SEC.GUD
    sidc["G-T-UC----"] = modular["경계"]; //TACGRP.TSK.SEC.COV
    sidc["G-T-UP----"] = modular["경계"];
    sidc['G-T-Z-----'] = modular["탈취"]; //TACGRP.TSK.SZE
    sidc['G-T-W-----'] = modular["DELAY"]; //TACGRP.TSK.WDR
    sidc['G-T-WP----'] = modular["DELAY"]; //TACGRP.TSK.WDR.WDRUP
    //sidc['G-G-------'] = [];//TACGRP.C2GM
    //sidc['G-G-G-----'] = [];//TACGRP.C2GM.GNL
    //sidc['G-G-GP----'] = [];//TACGRP.C2GM.GNL.PNT
    //sidc['G-G-GPU---'] = [];//TACGRP.C2GM.GNL.PNT.USW
    //sidc['G-G-GPUU--'] = [];//TACGRP.C2GM.GNL.PNT.USW.UH2
    //sidc['G-G-GPW---'] = [];//TACGRP.C2GM.GNL.PNT.WPN
    //sidc['G-G-GL----'] = [];//TACGRP.C2GM.GNL.LNE
    //sidc['G-G-GLB---'] = [];//TACGRP.C2GM.GNL.LNE.BNDS
    sidc['G-G-GL2---'] = modular["LINE"];
    sidc['G-G-GL3---'] = modular["LINE"];
    sidc['G-G-GL4---'] = modular["LINE"];
    sidc['G-G-GL5C--'] = modular["LINE"];
    sidc['G-G-GL5D--'] = modular["LINE"];
    sidc['G-G-GL5EA-'] = modular["LINE"];
    sidc['G-G-GL5EM-'] = modular["LINE"];
    sidc['G-G-GL5L--'] = modular["LINE"];
    sidc['G-G-GL5W--'] = modular["LINE"];
    sidc['G-G-GL6---'] = modular["LINE"];
    sidc['G-G-GLA---'] = modular["LINE"];
    sidc['G-G-GLB---'] = modular["LINE"];
    sidc['G-G-GLE---'] = modular["LINE"];
    sidc['G-G-GLF---'] = modular["LINE"]; //TACGRP.C2GM.GNL.LNE.FLOT
    sidc['G-G-GLC---'] = modular["LINE"]; //TACGRP.C2GM.GNL.LNE.LOC
    sidc['G-G-GLP---'] = modular["LINE"]; //TACGRP.C2GM.GNL.LNE.PHELNE
    sidc['G-G-GLL---'] = modular["LINE"]; //TACGRP.C2GM.GNL.LNE.LITLNE
    //sidc['G-G-GA----'] = [];//TACGRP.C2GM.GNL.ARS
    //sidc['G-G-GAG---'] = [];//TACGRP.C2GM.GNL.ARS.GENARA
    //sidc['G-G-GAA---'] = [];//TACGRP.C2GM.GNL.ARS.ABYARA
    //sidc['G-G-GAE---'] = [];//TACGRP.C2GM.GNL.ARS.EMTARA
    //sidc['G-G-GAF---'] = [];//TACGRP.C2GM.GNL.ARS.FTFDAR
    //sidc['G-G-GAD---'] = [];//TACGRP.C2GM.GNL.ARS.DRPZ
    //sidc['G-G-GAX---'] = [];//TACGRP.C2GM.GNL.ARS.EZ
    //sidc['G-G-GAL---'] = [];//TACGRP.C2GM.GNL.ARS.LZ
    //sidc['G-G-GAP---'] = [];//TACGRP.C2GM.GNL.ARS.PZ
    sidc['G-G-GAS---'] = ["경계"]; //TACGRP.C2GM.GNL.ARS.SRHARA
    //sidc['G-G-GAY---'] = [];//TACGRP.C2GM.GNL.ARS.LAARA
    //sidc['G-G-GAZ---'] = [];//TACGRP.C2GM.GNL.ARS.AIRFZ
    //sidc['G-G-A-----'] = [];//TACGRP.C2GM.AVN
    //sidc['G-G-AP----'] = [];//TACGRP.C2GM.AVN.PNT
    //sidc['G-G-AL----'] = [];//TACGRP.C2GM.AVN.LNE
    sidc['G-G-ALC---'] = modular["비행경로"]; //TACGRP.C2GM.AVN.LNE.ACDR
    sidc['G-G-ALM---'] = modular["비행경로"]; //TACGRP.C2GM.AVN.LNE.MRR
    sidc['G-G-ALS---'] = modular["비행경로"]; //TACGRP.C2GM.AVN.LNE.SAAFR
    sidc['G-G-ALU---'] = modular["비행경로"]; //TACGRP.C2GM.AVN.LNE.UAR
    sidc['G-G-ALL---'] = modular["비행경로"]; //TACGRP.C2GM.AVN.LNE.LLTR
    //sidc['G-G-AA----'] = [];//TACGRP.C2GM.AVN.ARS
    sidc['G-G-AAR---'] = modular["항공통제구역"]; //TACGRP.C2GM.AVN.ARS.ROZ
    sidc['G-G-AAF---'] = modular["항공통제구역"]; //TACGRP.C2GM.AVN.ARS.SHRDEZ
    sidc['G-G-AAH---'] = modular["항공통제구역"]; //TACGRP.C2GM.AVN.ARS.HIDACZ
    sidc['G-G-AAM---'] = modular["항공통제구역"]; //TACGRP.C2GM.AVN.ARS.MEZ
    sidc['G-G-AAML--'] = modular["항공통제구역"]; //TACGRP.C2GM.AVN.ARS.MEZ.LAMEZ
    sidc['G-G-AAMH--'] = modular["항공통제구역"]; //TACGRP.C2GM.AVN.ARS.MEZ.HAMEZ
    sidc['G-G-AAA---'] = modular["항공통제방위호형"];
    sidc['G-G-AAO---'] = modular["항공통제방위호형"];
    sidc['G-G-AAP---'] = modular["다각형호"]; //TACGRP.C2GM.AVN.ARS.MEZ
    sidc['G-G-AAT---'] = modular["항공통제트랙형"]; //TACGRP.C2GM.AVN.ARS.MEZ
    sidc['G-G-AAW---'] = modular["다각형구역"]; //TACGRP.C2GM.AVN.ARS.WFZ
    //sidc['G-G-P-----'] = [];//TACGRP.C2GM.DCPN
    sidc['G-G-PD----'] = modular["기만모조"]; //TACGRP.C2GM.DCPN.DMY
    sidc['G-G-PA----'] = modular["반격"]; //TACGRP.C2GM.DCPN.AAFF
    sidc['G-G-PF----'] = modular["반격"]; //TACGRP.C2GM.DCPN.DAFF
    //sidc['G-G-PM----'] = [];//TACGRP.C2GM.DCPN.DMA
    //sidc['G-G-PY----'] = [];//TACGRP.C2GM.DCPN.DMAF
    //sidc['G-G-PC----'] = [];//ACGRP.C2GM.DCPN.DMYMD
    //sidc['G-G-D-----'] = [];//TACGRP.C2GM.DEF
    //sidc['G-G-DP----'] = [];//TACGRP.C2GM.DEF.PNT
    //sidc['G-G-DL----'] = [];//TACGRP.C2GM.DEF.LNE
    sidc['G-G-DLA---'] = modular["LINE"];
    sidc['G-G-DLB---'] = modular["LINE"];
    sidc['G-G-DLC---'] = modular["LINE"];
    //sidc['G-G-DLF---'] = [];//TACGRP.C2GM.DEF.LNE.FEBA
    sidc['G-G-DLP---'] = modular["기만모조"]; //TACGRP.C2GM.DEF.LNE.PDF
    //sidc['G-G-DA----'] = [];//TACGRP.C2GM.DEF.ARS
    //sidc['G-G-DAB---'] = [];//TACGRP.C2GM.DEF.ARS.BTLPSN
    //sidc['G-G-DABP--'] = [];//TACGRP.C2GM.DEF.ARS.BTLPSN.PBNO
    //sidc['G-G-DAE---'] = [];//TACGRP.C2GM.DEF.ARS.EMTARA
    //sidc['G-G-O-----'] = [];//TACGRP.C2GM.OFF
    //sidc['G-G-OP----'] = [];//TACGRP.C2GM.OFF.PNT
    //sidc['G-G-OL----'] = [];//TACGRP.C2GM.OFF.LNE
    //sidc['G-G-OLA---'] = [];//TACGRP.C2GM.OFF.LNE.AXSADV
    sidc['G-G-OLAV--'] = modular["반격"]; //TACGRP.C2GM.OFF.LNE.AXSADV.AVN
    sidc['G-G-OLAA--'] = modular["반격"]; //TACGRP.C2GM.OFF.LNE.AXSADV.ABN
    sidc['G-G-OLAR--'] = modular["반격"]; //TACGRP.C2GM.OFF.LNE.AXSADV.ATK
    //sidc['G-G-OLAG--'] = [];//TACGRP.C2GM.OFF.LNE.AXSADV.GRD
    sidc["G-G-OLAGM-"] = modular["반격"]; //"MAIN ATTACK"]; //TACGRP.C2GM.OFF.LNE.AXSADV.GRD.MANATK
    sidc["G-G-OLAGS-"] = modular["반격"]; //"SUPPORTING ATTACK"]; //TACGRP.C2GM.OFF.LNE.AXSADV.GRD.SUPATK
    //sidc['G-G-OLK---'] = [];//TACGRP.C2GM.OFF.LNE.DIRATK
    sidc['G-G-OLKA--'] = modular["공격방향"]; //TACGRP.C2GM.OFF.LNE.DIRATK.AVN
    //sidc['G-G-OLKG--'] = [];//TACGRP.C2GM.OFF.LNE.DIRATK.GRD
    sidc['G-G-OLKGM-'] = modular["공격방향"]; //TACGRP.C2GM.OFF.LNE.DIRATK.GRD.MANATK
    sidc['G-G-OLKGS-'] = modular["공격방향"]; //TACGRP.C2GM.OFF.LNE.DIRATK.GRD.SUPATK
    sidc['G-G-OLF---'] = modular["LINE"]; //TACGRP.C2GM.OFF.LNE.FCL
    sidc['G-G-OLI---'] = modular["침투로"];
    sidc['G-G-OLL---'] = modular["LINE"]; //TACGRP.C2GM.OFF.LNE.LMTADV
    sidc['G-G-OLT---'] = modular["LINE"]; //TACGRP.C2GM.OFF.LNE.LD
    sidc['G-G-OLC---'] = modular["LINE"]; //TACGRP.C2GM.OFF.LNE.LDLC
    sidc['G-G-OLP---'] = modular["LINE"]; //TACGRP.C2GM.OFF.LNE.PLD
    //sidc['G-G-OA----'] = [];//TACGRP.C2GM.OFF.ARS
    sidc['G-G-OAA---'] = modular["다각형구역"]; //TACGRP.C2GM.OFF.ARS.ASTPSN
    sidc['G-G-OAK---'] = modular["다각형구역"]; //TACGRP.C2GM.OFF.ARS.ATKPSN
    sidc['G-G-OAF---'] = modular["사격선"]; //TACGRP.C2GM.OFF.ARS.AFP
    sidc['G-G-OAS---'] = modular["사격지원진지"]; //TACGRP.C2GM.OFF.ARS.SFP
    sidc['G-G-OAO---'] = modular["다각형구역"]; //TACGRP.C2GM.OFF.ARS.OBJ
    sidc['G-G-OAP---'] = modular["다각형호"]; //TACGRP.C2GM.OFF.ARS.PBX
    //sidc['G-G-S-----'] = [];//TACGRP.C2GM.SPL
    //sidc['G-G-SL----'] = [];//TACGRP.C2GM.SPL.LNE
    sidc["G-G-SLA---"] = modular["매복"]; //TACGRP.C2GM.SPL.LNE.AMB
    sidc["G-G-SLAA--"] = modular["매복2"];
    sidc["G-G-SLAB--"] = modular["매복2"];
    sidc["G-G-SLAD--"] = modular["매복2"];
    sidc['G-G-SLH---'] = modular["LINE"]; //TACGRP.C2GM.SPL.LNE.HGL
    sidc['G-G-SLR---'] = modular["LINE"]; //TACGRP.C2GM.SPL.LNE.REL
    sidc['G-G-SLB---'] = modular["LINE"]; //TACGRP.C2GM.SPL.LNE.BRGH
    //sidc['G-G-SA----'] = [];//TACGRP.C2GM.SPL.ARA
    sidc['G-G-SAO---'] = modular["다각형구역"]; //TACGRP.C2GM.SPL.ARA.AOO
    sidc['G-G-SAA---'] = ["다각형구역"]; //TACGRP.C2GM.SPL.ARA.AHD
    //sidc['G-G-SAE---'] = [];//TACGRP.C2GM.SPL.ARA.ENCMT
    sidc["G-G-SAN---"] = modular["다각형구역"]; //TACGRP.C2GM.SPL.ARA.NAI
    sidc["G-G-SAT---"] = modular["다각형구역"]; //TACGRP.C2GM.SPL.ARA.TAIS
    //sidc['G-M-------'] = [];//TACGRP.MOBSU
    //sidc['G-M-O-----'] = [];//TACGRP.MOBSU.OBST
    //sidc['G-M-OG----'] = [];//TACGRP.MOBSU.OBST.GNL
    sidc['G-M-OGB---'] = modular["목책"]; //TACGRP.MOBSU.OBST.GNL.BLT
    sidc['G-M-OGL---'] = modular["목책"]; //TACGRP.MOBSU.OBST.GNL.LNE
    sidc['G-M-OGZ---'] = modular["목책"]; //TACGRP.MOBSU.OBST.GNL.Z
    sidc['G-M-OGF---'] = modular["목책"]; //TACGRP.MOBSU.OBST.GNL.OFA
    sidc['G-M-OGR---'] = modular["목책"]; //TACGRP.MOBSU.OBST.GNL.ORA
    sidc['G-M-OS----'] = modular["목책"]; //TACGRP.MOBSU.OBST.ABS
    //sidc['G-M-OA----'] = [];//TACGRP.MOBSU.OBST.ATO
    //sidc['G-M-OAD---'] = [];//TACGRP.MOBSU.OBST.ATO.ATD
    sidc['G-M-OADU--'] = modular["목책"]; //TACGRP.MOBSU.OBST.ATO.ATD.ATDUC
    sidc['G-M-OADC--'] = modular["목책"]; //TACGRP.MOBSU.OBST.ATO.ATD.ATDC
    sidc['G-M-OAW--'] = modular["목책"]; //TACGRP.MOBSU.OBST.ATO.ATD.ATDC
    sidc['G-M-OAR---'] = modular["목책"]; //TACGRP.MOBSU.OBST.ATO.ATDATM
    //sidc['G-M-OAO---'] = [];//TACGRP.MOBSU.OBST.ATO.TDTSM
    sidc['G-M-OAW---'] = modular["목책"]; //TACGRP.MOBSU.OBST.ATO.ATW
    //sidc['G-M-OM----'] = [];//TACGRP.MOBSU.OBST.MNE
    sidc['G-M-OMC---'] = modular["목책"];
    sidc['G-M-OMTA--'] = modular["목책"];
    sidc['G-M-OMPA--'] = modular["목책"];
    sidc['G-M-OGD---'] = modular["장애물"];
    sidc['G-M-OGG---'] = modular["장애물"];
    //sidc['G-M-OF----'] = [];//TACGRP.MOBSU.OBST.MNEFLD
    //sidc['G-M-OFD---'] = [];//TACGRP.MOBSU.OBST.MNEFLD.DYN
    sidc['G-M-OFG---'] = modular["간격"]; //TACGRP.MOBSU.OBST.MNEFLD.GAP
    //sidc['G-M-OFA---'] = [];//TACGRP.MOBSU.OBST.MNEFLD.MNDARA
    //sidc['G-M-OE----'] = [];//TACGRP.MOBSU.OBST.OBSEFT
    sidc['G-M-OEB---'] = modular["BLOCK"]; //TACGRP.MOBSU.OBST.OBSEFT.BLK
    //sidc['G-M-OEF---'] = [];//TACGRP.MOBSU.OBST.OBSEFT.FIX
    //sidc['G-M-OET---'] = [];//TACGRP.MOBSU.OBST.OBSEFT.TUR
    //sidc['G-M-OED---'] = [];//TACGRP.MOBSU.OBST.OBSEFT.DRT
    //sidc['G-M-OU----'] = [];//TACGRP.MOBSU.OBST.UXO
    //sidc['G-M-OR----'] = [];//TACGRP.MOBSU.OBST.RCBB
    sidc['G-M-ORP---'] = modular["폭파예정"]; //TACGRP.MOBSU.OBST.RCBB.PLND
    sidc['G-M-ORS---'] = modular["폭파예정"]; //TACGRP.MOBSU.OBST.RCBB.SAFE
    sidc['G-M-ORA---'] = modular["폭파예정"]; //TACGRP.MOBSU.OBST.RCBB.ABP
    //sidc['G-M-ORC---'] = [];//TACGRP.MOBSU.OBST.RCBB.EXCD
    //sidc['G-M-OT----'] = [];//TACGRP.MOBSU.OBST.TRIPWR
    //sidc['G-M-OW----'] = [];//TACGRP.MOBSU.OBST.WREOBS
    sidc['G-M-OWU---'] = modular["철조망"]; //[];//TACGRP.MOBSU.OBST.WREOBS.USP
    sidc['G-M-OWS---'] = modular["철조망"]; //TACGRP.MOBSU.OBST.WREOBS.SNGFNC
    sidc['G-M-OWD---'] = modular["철조망"]; //TACGRP.MOBSU.OBST.WREOBS.DBLFNC
    sidc['G-M-OWA---'] = modular["철조망"]; //TACGRP.MOBSU.OBST.WREOBS.DAFNC
    sidc['G-M-OWL---'] = modular["철조망"]; //TACGRP.MOBSU.OBST.WREOBS.LWFNC
    sidc['G-M-OWH---'] = modular["철조망"]; //TACGRP.MOBSU.OBST.WREOBS.HWFNC
    //sidc['G-M-OWC---'] = [];//TACGRP.MOBSU.OBST.WREOBS.CCTA
    sidc['G-M-OWCS--'] = modular["철조망"]; //TACGRP.MOBSU.OBST.WREOBS.CCTA.SNG
    sidc['G-M-OWCD--'] = modular["철조망"]; //TACGRP.MOBSU.OBST.WREOBS.CCTA.DBLSTD
    sidc['G-M-OWCT--'] = modular["철조망"]; //TACGRP.MOBSU.OBST.WREOBS.CCTA.TRISTD
    sidc['G-M-OWCA--'] = modular["철조망"];
    //sidc['G-M-OH----'] = [];//TACGRP.MOBSU.OBST.AVN
    //sidc['G-M-OHT---'] = [];//TACGRP.MOBSU.OBST.AVN.TWR
    //sidc['G-M-OHO---'] = [];//TACGRP.MOBSU.OBST.AVN.OHWIRE
    //sidc['G-M-B-----'] = [];//TACGRP.MOBSU.OBSTBP
    //sidc['G-M-BD----'] = [];//TACGRP.MOBSU.OBSTBP.DFTY
    //sidc['G-M-BDE---'] = [];//TACGRP.MOBSU.OBSTBP.DFTY.ESY
    sidc['G-M-BDD---'] = modular["우회곤란"]; //TACGRP.MOBSU.OBSTBP.DFTY.DFT
    sidc['G-M-BDI---'] = modular["우회곤란"]; //TACGRP.MOBSU.OBSTBP.DFTY.IMP
    //sidc['G-M-BC----'] = [];//TACGRP.MOBSU.OBSTBP.CSGSTE
    //sidc['G-M-BCA---'] = [];//TACGRP.MOBSU.OBSTBP.CSGSTE.ASTCA
    //sidc['G-M-BCB---'] = [];//TACGRP.MOBSU.OBSTBP.CSGSTE.BRG
    sidc['G-M-BCF---'] = modular["도선장"]; //TACGRP.MOBSU.OBSTBP.CSGSTE.FRY
    sidc['G-M-BCE---'] = modular["도섭"]; //TACGRP.MOBSU.OBSTBP.CSGSTE.FRDESY
    sidc['G-M-BCD---'] = modular["도섭"]; //TACGRP.MOBSU.OBSTBP.CSGSTE.FRDDFT
    sidc['G-M-BCL---'] = modular["도하"]; //TACGRP.MOBSU.OBSTBP.CSGSTE.LANE
    sidc['G-M-BCR---'] = modular["도하"]; //TACGRP.MOBSU.OBSTBP.CSGSTE.RFT
    //sidc['G-M-S-----'] = [];//TACGRP.MOBSU.SU
    sidc['G-M-SL----'] = modular["요새방어선"]; //TACGRP.MOBSU.SU.FTFDLN
    sidc['G-M-SW----'] = modular["도하"]; //TACGRP.MOBSU.SU.FEWS
    sidc['G-M-SP----'] = modular["POLYGON"]; //TACGRP.MOBSU.SU.STRGPT
    //sidc['G-M-N-----'] = [];//TACGRP.MOBSU.CBRN
    sidc['G-M-NM----'] = modular["최소안전지대"]; //TACGRP.MOBSU.CBRN.MSDZ
    //sidc['G-M-NR----'] = [];//TACGRP.MOBSU.CBRN.RADA
    //sidc['G-M-NB----'] = [];//TACGRP.MOBSU.CBRN.BIOCA
    //sidc['G-M-NC----'] = [];//TACGRP.MOBSU.CBRN.CMLCA
    //sidc['G-M-NE----'] = [];//TACGRP.MOBSU.CBRN.REEVNT
    //sidc['G-M-ND----'] = [];//TACGRP.MOBSU.CBRN.DECONP
    //sidc['G-M-NL----'] = [];//TACGRP.MOBSU.CBRN.DRCL
    //sidc['G-F-------'] = [];//TACGRP.FSUPP
    //sidc['G-F-P-----'] = [];//TACGRP.FSUPP.PNT
    //sidc['G-F-PT----'] = [];//TACGRP.FSUPP.PNT.TGT
    //sidc['G-F-PC----'] = [];//TACGRP.FSUPP.PNT.C2PNT
    //sidc['G-F-L-----'] = [];//TACGRP.FSUPP.LNE
    //sidc['G-F-LT----'] = [];//TACGRP.FSUPP.LNE.LNRTGT
    //sidc['G-F-LTS---'] = [];//TACGRP.FSUPP.LNE.LNRTGT.LSTGT
    //sidc['G-F-LTF---'] = [];//TACGRP.FSUPP.LNE.LNRTGT.FPF
    //sidc['G-F-LC----'] = [];//TACGRP.FSUPP.LNE.C2LNE
    //sidc['G-F-LCF---'] = [];//TACGRP.FSUPP.LNE.C2LNE.FSCL
    //sidc['G-F-LCC---'] = [];//TACGRP.FSUPP.LNE.C2LNE.CFL
    //sidc['G-F-LCN---'] = [];//TACGRP.FSUPP.LNE.C2LNE.NFL
    //sidc['G-F-LCR---'] = [];//TACGRP.FSUPP.LNE.C2LNE.RFL
    //sidc['G-F-LCM---'] = [];//TACGRP.FSUPP.LNE.C2LNE.MFP
    //sidc['G-F-A-----'] = [];//TACGRP.FSUPP.ARS
    sidc['G-F-AT----'] = modular["다각형구역"]; //TACGRP.FSUPP.ARS.ARATGT
    //sidc['G-F-ATG---'] = [];//TACGRP.FSUPP.ARS.ARATGT.SGTGT
    sidc['G-F-ATS---'] = modular["다각형구역"]; //TACGRP.FSUPP.ARS.ARATGT.SMK
    sidc['G-F-ATB---'] = modular["다각형구역"]; //TACGRP.FSUPP.ARS.ARATGT.BMARA
    sidc['G-F-ATR---'] = modular["사각구역"]; //TACGRP.FSUPP.ARS.ARATGT.BMARA
    //sidc['G-F-AC----'] = [];//TACGRP.FSUPP.ARS.C2ARS
    //TACGRP.FSUPP.ARS.C2ARS.FSA
    sidc["G-F-ACSI--"] = modular["다각형구역"]; //TACGRP.FSUPP.ARS.C2ARS.FSA.IRR
    sidc["G-F-ACSR--"] = modular["사각구역"]; //TACGRP.FSUPP.ARS.C2ARS.FSA.RTG
    sidc["G-F-ACSC--"] = modular["원구역"]; //TACGRP.FSUPP.ARS.C2ARS.FSA.CIRCLR
    //sidc['G-F-ACA---'] = [];//TACGRP.FSUPP.ARS.C2ARS.ACA
    sidc["G-F-ACAI--"] = modular["다각형구역"]; //TACGRP.FSUPP.ARS.C2ARS.ACA.IRR
    sidc["G-F-ACAR--"] = modular["사각구역"]; //TACGRP.FSUPP.ARS.C2ARS.ACA.RTG
    sidc["G-F-ACAC--"] = modular["원구역"]; //TACGRP.FSUPP.ARS.C2ARS.ACA.CIRCLR
    //TACGRP.FSUPP.ARS.C2ARS.FFA
    sidc["G-F-ACFI--"] = modular["다각형구역"]; //TACGRP.FSUPP.ARS.C2ARS.FFA.IRR
    sidc["G-F-ACFR--"] = modular["사각구역"]; //TACGRP.FSUPP.ARS.C2ARS.FFA.RTG
    sidc["G-F-ACFC--"] = modular["원구역"]; //TACGRP.FSUPP.ARS.C2ARS.FFA.CIRCLR
    //sidc['G-F-ACN---'] = [];//TACGRP.FSUPP.ARS.C2ARS.NFA
    sidc['G-F-ACNI--'] = modular["다각형구역"]; //TACGRP.FSUPP.ARS.C2ARS.NFA.IRR
    sidc['G-F-ACNR--'] = modular["사각구역"]; //TACGRP.FSUPP.ARS.C2ARS.NFA.RTG
    sidc["G-F-ACNC--"] = modular["원구역"]; //TACGRP.FSUPP.ARS.C2ARS.NFA.CIRCLR
    //TACGRP.FSUPP.ARS.C2ARS.RFA
    sidc["G-F-ACRI--"] = modular["다각형구역"]; //TACGRP.FSUPP.ARS.C2ARS.RFA.IRR
    sidc["G-F-ACRR--"] = modular["사각구역"]; //TACGRP.FSUPP.ARS.C2ARS.RFA.RTG
    sidc["G-F-ACRC--"] = modular["원구역"]; //TACGRP.FSUPP.ARS.C2ARS.RFA.CIRCLR
    //sidc['G-F-ACP---'] = [];//TACGRP.FSUPP.ARS.C2ARS.PAA
    sidc['G-F-ACPR--'] = modular["포진지구역(사각형)"]; //TACGRP.FSUPP.ARS.C2ARS.PAA.RTG
    sidc["G-F-ACPC--"] = modular["포진지구역"]; //TACGRP.FSUPP.ARS.C2ARS.PAA.CIRCLR
    //TACGRP.FSUPP.ARS.C2ARS.SNSZ
    sidc["G-F-ACEI--"] = modular["다각형구역"]; //TACGRP.FSUPP.ARS.C2ARS.SNSZ.IRR
    sidc["G-F-ACER--"] = modular["사각구역"]; //TACGRP.FSUPP.ARS.C2ARS.SNSZ.RTG
    sidc["G-F-ACEC--"] = modular["원구역"]; //TACGRP.FSUPP.ARS.C2ARS.SNSZ.CIRCLR
    //TACGRP.FSUPP.ARS.C2ARS.DA
    sidc["G-F-ACDI--"] = modular["다각형구역"]; //TACGRP.FSUPP.ARS.C2ARS.DA.IRR
    sidc["G-F-ACDR--"] = modular["사각구역"]; //TACGRP.FSUPP.ARS.C2ARS.DA.RTG
    sidc["G-F-ACDC--"] = modular["원구역"]; //TACGRP.FSUPP.ARS.C2ARS.DA.CIRCLR
    //TACGRP.FSUPP.ARS.C2ARS.ZOR
    sidc["G-F-ACZI--"] = modular["다각형구역"]; //TACGRP.FSUPP.ARS.C2ARS.ZOR.IRR
    sidc["G-F-ACFR--"] = modular["사각구역"]; //TACGRP.FSUPP.ARS.C2ARS.ZOR.RTG
    sidc["G-F-ACZC--"] = modular["원구역"]; //TACGRP.FSUPP.ARS.C2ARS.ZOR.CIRCLR
    sidc["G-F-ACZR--"] = modular["사각구역"];
    //TACGRP.FSUPP.ARS.C2ARS.TBA
    sidc["G-F-ACBI--"] = modular["다각형구역"]; //TACGRP.FSUPP.ARS.C2ARS.TBA.IRR
    sidc["G-F-ACBR--"] = modular["사각구역"]; //TACGRP.FSUPP.ARS.C2ARS.TBA.RTG
    sidc["G-F-ACBC--"] = modular["원구역"]; //TACGRP.FSUPP.ARS.C2ARS.TBA.CIRCLR
    //TACGRP.FSUPP.ARS.C2ARS.TVAR
    sidc["G-F-ACCI--"] = modular["다각형구역"]; //TACGRP.FSUPP.ARS.C2ARS.TVAR.IRR
    sidc["G-F-ACGI--"] = modular["다각형구역"]; //TACGRP.FSUPP.ARS.C2ARS.TVAR.IRR
    sidc["G-F-ACVI--"] = modular["다각형구역"]; //TACGRP.FSUPP.ARS.C2ARS.TVAR.IRR
    sidc["G-F-ACVR--"] = modular["사각구역"]; //TACGRP.FSUPP.ARS.C2ARS.TVAR.RTG
    sidc["G-F-ACVC--"] = modular["원구역"]; //TACGRP.FSUPP.ARS.C2ARS.TVAR.CIRCLR
    sidc["G-F-ACT---"] = modular["다각형구역"]; //TACGRP.FSUPP.ARS.C2ARS.TGMF
    //sidc['G-F-AZ----'] = [];//TACGRP.FSUPP.ARS.TGTAQZ
    //TACGRP.FSUPP.ARS.TGTAQZ.ATIZ
    sidc["G-F-AZII--"] = modular["다각형구역"]; //TACGRP.FSUPP.ARS.TGTAQZ.ATIZ.IRR
    sidc["G-F-AZIR--"] = modular["사각구역"]; //TACGRP.FSUPP.ARS.TGTAQZ.ATIZ.RTG
    //TACGRP.FSUPP.ARS.TGTAQZ.CFFZ
    sidc["G-F-AZXI--"] = modular["다각형구역"]; //TACGRP.FSUPP.ARS.TGTAQZ.CFFZ.IRR
    sidc["G-F-AZXR--"] = modular["사각구역"]; //TACGRP.FSUPP.ARS.TGTAQZ.CFFZ.RTG
    //TACGRP.FSUPP.ARS.TGTAQZ.CNS
    sidc["G-F-AZCI--"] = modular["다각형구역"]; //TACGRP.FSUPP.ARS.TGTAQZ.CNS.IRR
    sidc["G-F-AZCR--"] = modular["사각구역"]; //TACGRP.FSUPP.ARS.TGTAQZ.CNS.RTG
    //TACGRP.FSUPP.ARS.TGTAQZ.CFZ
    sidc["G-F-AZFI--"] = modular["다각형구역"]; //TACGRP.FSUPP.ARS.TGTAQZ.CFZ.IRR
    sidc["G-F-AZFR--"] = modular["사각구역"]; //TACGRP.FSUPP.ARS.TGTAQZ.CFZ.RTG
    //sidc['G-F-AX----'] = [];//TACGRP.FSUPP.ARS.WPNRF
    //sidc["G-F-AXC---"] = []; //modular.circle;//TACGRP.FSUPP.ARS.WPNRF.CIRCLR
    //sidc['G-F-AXS---'] = [];//TACGRP.FSUPP.ARS.WPNRF.SCR
    //sidc['G-F-AK----'] = [];//TACGRP.FSUPP.ARS.KLBOX
    //sidc['G-F-AKB---'] = [];//TACGRP.FSUPP.ARS.KLBOX.BLUE
    sidc["G-F-AKBC--"] = modular["원구역"]; //modular.circle;//TACGRP.FSUPP.ARS.KLBOX.BLUE.CIRCLR
    sidc['G-F-AKBI--'] = modular["다각형구역"]; //TACGRP.FSUPP.ARS.KLBOX.BLUE.IRR
    sidc['G-F-AKBR--'] = modular["사각구역"]; //TACGRP.FSUPP.ARS.KLBOX.BLUE.RTG
    //sidc['G-F-AKP---'] = [];//TACGRP.FSUPP.ARS.KLBOX.PURPLE
    sidc["G-F-AKPC--"] = modular["원구역"]; //modular.circle;//TACGRP.FSUPP.ARS.KLBOX.PURPLE.CIRCLR
    sidc['G-F-AKPI--'] = modular["다각형구역"]; //TACGRP.FSUPP.ARS.KLBOX.PURPLE.IRR
    sidc['G-F-AKPR--'] = modular["사각구역"]; //TACGRP.FSUPP.ARS.KLBOX.PURPLE.RTG
    //sidc['G-S-------'] = [];//TACGRP.CSS
    //sidc['G-S-P-----'] = [];//TACGRP.CSS.PNT
    //sidc['G-S-L-----'] = [];//TACGRP.CSS.LNE
    //sidc['G-S-LC----'] = [];//TACGRP.CSS.LNE.CNY
    sidc['G-S-LCM---'] = modular["호위"]; //TACGRP.CSS.LNE.CNY.MCNY
    sidc['G-S-LCH---'] = modular["호위"]; //TACGRP.CSS.LNE.CNY.HCNY
    //sidc['G-S-LR----'] = [];//TACGRP.CSS.LNE.SLPRUT
    sidc['G-S-LRM---'] = modular["보급로"]; //TACGRP.CSS.LNE.SLPRUT.MSRUT
    sidc['G-S-LRA---'] = modular["보급로"]; //TACGRP.CSS.LNE.SLPRUT.ASRUT
    sidc['G-S-LRO---'] = modular["보급로"]; //TACGRP.CSS.LNE.SLPRUT.1WTRFF
    sidc['G-S-LRT---'] = modular["보급로"]; //TACGRP.CSS.LNE.SLPRUT.ATRFF
    sidc['G-S-LRW---'] = modular["보급로"]; //TACGRP.CSS.LNE.SLPRUT.2WTRFF
    sidc['G-S-LRB---'] = modular["통제선"]; //TACGRP.CSS.LNE.SLPRUT.ASRUT
    //sidc['G-S-A-----'] = [];//TACGRP.CSS.ARA
    sidc['G-S-AD----'] = modular["다각형구역"]; //TACGRP.CSS.ARA.DHA
    sidc['G-S-AE----'] = modular["다각형구역"]; //TACGRP.CSS.ARA.EPWHA
    sidc['G-S-AR----'] = modular["다각형구역"]; //TACGRP.CSS.ARA.FARP
    sidc['G-S-AH----'] = modular["다각형구역"]; //TACGRP.CSS.ARA.RHA
    sidc['G-S-ASA----'] = modular["다각형구역"]; //TACGRP.CSS.ARA.SUPARS
    sidc['G-S-ASB---'] = modular["다각형구역"]; //TACGRP.CSS.ARA.SUPARS.BSA
    sidc['G-S-ASD---'] = modular["다각형구역"]; //TACGRP.CSS.ARA.SUPARS.DSA
    sidc['G-S-ASR---'] = modular["다각형구역"]; //TACGRP.CSS.ARA.SUPARS.RSA
    //sidc['G-O-------'] = [];//TACGRP.OTH
    //sidc['G-O-E-----'] = [];//TACGRP.OTH.ER
    //sidc['G-O-H-----'] = [];//TACGRP.OTH.HAZ
    sidc['G-O-HN----'] = modular["방향선"]; //TACGRP.OTH.HAZ.NVGL
    //sidc['G-O-S-----'] = [];//TACGRP.OTH.SSUBSR
    sidc['G-O-B-----'] = modular["방향선"]; //TACGRP.OTH.BERLNE
    sidc['G-O-BE----'] = modular["방향선"]; //TACGRP.OTH.BERLNE.ELC
    sidc['G-O-BA----'] = modular["방향선"]; //TACGRP.OTH.BERLNE.ACU
    sidc['G-O-BT----'] = modular["방향선"]; //TACGRP.OTH.BERLNE.TPD
    sidc['G-O-BO----'] = modular["방향선"]; //TACGRP.OTH.BERLNE.EOPI
    //sidc['G-O-F-----'] = [];//TACGRP.OTH.FIX


    //2525B compatibility
    sidc["G-F-ATC---"] = modular["원구역"]; //modular.circle;
    //sidc["G-F-AZIC--"] = []; //modular.circle;

    /*
    // Army XML compability
    sidc["C-R-LE----"] = ms.geometry.circle;

    // Systematic SitaWare compatibility
    sidc["X---C-----"] = modular.corridor;
    sidc["X---I-----"] = ms.geometry.circle;
    sidc["X---A-----"] = modular["SUPPORTING ATTACK"];
    */

    sidc["WA-DPFCU---L---"] = modular["전선"];
    
    sidc['WAS-PC----P--'] = modular['싸이클론중심'];
    sidc['WAS-PLT---P--'] = modular['대류권계면 저고도'];
    sidc['WAS-PA----P--'] = modular['고기압중심'];
    sidc['WAS-PHT---P--'] = modular['대류권계면 고고도'];
    sidc['WA-DPFCU---L-'] = modular['상층 한랭전선'];
    sidc['WA-DPFC-FG-L-'] = modular['한랭전선 발생'];
    sidc['WA-DPFC-FY-L-'] = modular['한랭전선 소멸'];
    sidc['WA-DPFWU---L-'] = modular['상층 온난전선'];
    sidc['WA-DPFW-FG-L-'] = modular['온난전선 발생'];
    sidc['WA-DPFW-FY-L-'] = modular['온난전선 소멸'];
    sidc['WA-DPFOU---L-'] = modular['상층 폐색전선'];
    sidc['WA-DPFO-FY-L-'] = modular['폐색전선 소멸'];
    sidc['WA-DPFSU---L-'] = modular['상층 정체전선'];
    sidc['WA-DPFS-FG-L-'] = modular['정체전선 발생'];
    sidc['WA-DPFS-FY-L-'] = modular['정체전선 소멸'];
    sidc['WA-DPXT----L-'] = modular['기압골'];
    sidc['WA-DPXR----L-'] = modular['기압마루'];
    sidc['WA-DPXSQ---L-'] = modular['강한돌풍선'];
    sidc['WA-DPXIL---L-'] = modular['대기불안정선'];
    sidc['WA-DPXSH---L-'] = modular['측밀림선'];
    sidc['WA-DPXITCZ-L-'] = modular['열대수렴대(ITCZ)'];
    sidc['WA-DPXCV---L-'] = modular['수렴선'];
    sidc['WA-DPXITD--L-'] = modular['열대불연속(ITD)'];
    
    sidc['WAS-WP----P--'] = modular['바람기호'];
    sidc['WA-DWJ-----L-'] = modular['제트기류'];
    sidc['WA-DWS-----L-'] = modular['기류선'];

    sidc['WA-DWSTSWA--A'] = modular['열대태풍 영역/일시'];
    sidc['WAS-WSF-LVP--'] = modular['결빙 고도'];

    sidc['WA-DBAIF----A'] = modular['계기비행 지역'];
    sidc['WA-DBAMV----A'] = modular['유시계비행한계 지역'];
    sidc['WA-DBATB----A'] = modular['난기류 지역'];
    sidc['WA-DBAI-----A'] = modular['착빙 지역'];
    sidc['WA-DBALPNC--A'] = modular['액체형태 강수(비대류성, 연속 또는 간헐) 지역'];
    sidc['WA-DBALPC---A'] = modular['액체형태 강수(대류성) 지역'];
    sidc['WA-DBAFP----A'] = modular['결빙형태 강수 지역'];
    sidc['WA-DBAT-----A'] = modular['뇌우지역'];
    sidc['WA-DBAFG----A'] = modular['안개지역'];
    sidc['WA-DBAD-----A'] = modular['풍진지역'];
    sidc['WA-DBAFF----A'] = modular['임의지정지역'];


    sidc['WA-DIPIB---L-'] = modular['등압선(표면)'];
    sidc['WA-DIPCO---L-'] = modular['등압면고도(고층)'];
    sidc['WA-DIPIS---L-'] = modular['등온선'];
    sidc['WA-DIPIT---L-'] = modular['등풍속선'];
    sidc['WA-DIPID---L-'] = modular['등이슬점선'];
    sidc['WA-DIPTH---L-'] = modular['등겹선'];
    sidc['WA-DIPFF---L-'] = modular['임의지정등치선'];

    sidc['WA--FI-------'] = modular['계기상승한도'];
    sidc['WA--FV-------'] = modular['시계상승한도'];

    sidc['WO-DILOV---L-'] = modular['목측관측 제한'];
    sidc['WO-DILUC---L-'] = modular['비행기 아래의 구름'];
    sidc['WO-DILOR---L-'] = modular['레이더 관측 제한'];
    sidc['WO-DILIEO--L-'] = modular['관측된 빙산면/경계'];
    sidc['WO-DILIEE--L-'] = modular['추정된 빙산면/경계'];
    sidc['WO-DILIER--L-'] = modular['레이더 관측 빙산면/경계'];

    sidc['WO-DIOC----L-'] = modular['균열'];
    sidc['WO-DIOCS---L-'] = modular['특정위치의 균열'];
    sidc['WO-DIOL----L-'] = modular['리드'];
    sidc['WO-DIOLF---L-'] = modular['리드(결빙)'];

    sidc['WOS-ISS---P--'] = modular['설면융기(방향)'];
    
    sidc['WOS-HDS---P--'] = modular['수심측량'];
    sidc['WO-DHDDL---L-'] = modular['수심선'];
    sidc['WO-DHDDC---L-'] = modular['등심선'];
    sidc['WO-DHDDA----A'] = modular['등심영역'];

    sidc['WO-DHCC----L-'] = modular['해안선'];
    sidc['WO-DHCI-----A'] = modular['섬'];
    sidc['WO-DHCB-----A'] = modular['해안'];
    sidc['WO-DHCW-----A'] = modular['물'];

    sidc['WO-DHCF----L-'] = modular['물가,갯벌(경계)'];
    sidc['WO-DHCF-----A'] = modular['물가,갯벌(영역)'];

    sidc['WO-DHPBA---L-'] = modular['정박지(경계)'];
    sidc['WO-DHPBA----A'] = modular['정박지(영역)'];
    sidc['WO-DHPBP---L-'] = modular['부두'];
    sidc['WOS-HPFF----A'] = modular['둑(영역)'];
    sidc['WO-DHPMD----A'] = modular['건선거'];

    sidc['WO-DHPMO---L-'] = modular['연안 화물적재시설(경계)'];
    sidc['WO-DHPMO----A'] = modular['연안 화물적재시설(영역)'];

    sidc['WO-DHPMRA--L-'] = modular['경사로(수면)'];
    sidc['WO-DHPMRB--L-'] = modular['경사로(수중)'];

    sidc['WO-DHPSPA--L-'] = modular['방파제/제방/둑(수면)'];
    sidc['WO-DHPSPB--L-'] = modular['방파제/제방/둑(수중)'];
    sidc['WO-DHPSPS--L-'] = modular['방파제'];

    sidc['WO-DHABP----A'] = modular['말뚝(지역)'];

    sidc['WOS-HAL---P--'] = modular['빛'];
    sidc['WO-DHALLA--L-'] = modular['유도선'];
    sidc['WOS-HALH--P--'] = modular['등대'];

    sidc['WO-DHHD-----A'] = modular['해저 위험물/장애물'];
    sidc['WO-DHHDF----A'] = modular['해저암초(지역)'];

    sidc['WO-DHHDK--P--'] = modular['해초(위치)'];
    sidc['WO-DHHDK----A'] = modular['해초(지역)'];

    
    sidc['WO-DHHDB---L-'] = modular['쇄파'];
    sidc['WOS-HHDR---L-'] = modular['암초'];
    sidc['WOS-HHDE--P--'] = modular['회오리/단조/격조'];
    sidc['WO-DHHDD----A'] = modular['적조'];
   
  
    sidc['WOS-TCCW--P--'] = modular['난류'];
    sidc['WO-DTCCCFE-L-'] = modular['조류방향(간조)'];
    sidc['WO-DTCCCFF-L-'] = modular['조류방향(만조)'];

    sidc['WO-DOBVA----A'] = modular['VDR 레벨 1~2'];
    sidc['WO-DOBVB----A'] = modular['VDR 레벨 2~3'];
    sidc['WO-DOBVC----A'] = modular['VDR 레벨 3~4'];
    sidc['WO-DOBVD----A'] = modular['VDR 레벨 4~5'];
    sidc['WO-DOBVE----A'] = modular['VDR 레벨 5~6'];
    sidc['WO-DOBVF----A'] = modular['VDR 레벨 6~7'];
    sidc['WO-DOBVG----A'] = modular['VDR 레벨 7~8'];
    sidc['WO-DOBVH----A'] = modular['VDR 레벨 8~9'];
    sidc['WO-DOBVI----A'] = modular['VDR 레벨 9~10'];
    sidc['WO-DBSF-----A'] = modular['평지'];
    sidc['WO-DBSG-----A'] = modular['완만한'];
    sidc['WO-DBSM-----A'] = modular['적당한'];
    sidc['WO-DBST-----A'] = modular['가파른가'];

    sidc['WO-DGMSR----A'] = modular['암석'];
    sidc['WO-DGMSC----A'] = modular['점토'];
    sidc['WO-DGMSSVS--A'] = modular['극조사'];
    sidc['WO-DGMSSC---A'] = modular['조사조'];
    sidc['WO-DGMSSM---A'] = modular['중사'];
    sidc['WO-DGMSSF---A'] = modular['세사'];
    sidc['WO-DGMSSVF--A'] = modular['미세사미'];
    sidc['WO-DGMSIVF--A'] = modular['미세사립실트'];
    sidc['WO-DGMSIF---A'] = modular['세립실트'];
    sidc['WO-DGMSIM---A'] = modular['중립실트'];
    sidc['WO-DGMSIC---A'] = modular['조립실트'];
    sidc['WO-DGMSB----A'] = modular['옥석'];
    sidc['WO-DGMS-CO--A'] = modular['조약돌,패분'];
    sidc['WO-DGMS-PH--A'] = modular['자갈,패각'];
    sidc['WO-DGMS-SH--A'] = modular['모래,패각'];
    sidc['WO-DGML-----A'] = modular['육지'];
    sidc['WO-DGMN-----A'] = modular['자료없음'];

    sidc['WO-DGMRS----A'] = modular['평탄'];
    sidc['WO-DGMRM----A'] = modular['보통'];
    sidc['WO-DGMRR----A'] = modular['거친'];

    sidc['WO-DGMCL----A'] = modular['적음'];
    sidc['WO-DGMCM----A'] = modular['보통'];
    sidc['WO-DGMCH----A'] = modular['많음'];

    sidc['WO-DGMIBA---A'] = modular['0%'];
    sidc['WO-DGMIBB---A'] = modular['0-10%'];
    sidc['WO-DGMIBC---A'] = modular['10-20%'];
    sidc['WO-DGMIBD---A'] = modular['20-75%'];
    sidc['WO-DGMIBE---A'] = modular['>75%'];

    sidc['WO-DGMBCA---A'] = modular['A'];
    sidc['WO-DGMBCB---A'] = modular['B'];
    sidc['WO-DGMBCC---A'] = modular['C'];
    sidc['WO-DGMBTA---A'] = modular['A1'];
    sidc['WO-DGMBTB---A'] = modular['A2'];
    sidc['WO-DGMBTC---A'] = modular['A3'];
    sidc['WO-DGMBTD---A'] = modular['B1'];
    sidc['WO-DGMBTE---A'] = modular['B2'];
    sidc['WO-DGMBTF---A'] = modular['B3'];
    sidc['WO-DGMBTG---A'] = modular['C1'];
    sidc['WO-DGMBTH---A'] = modular['C2'];
    sidc['WO-DGMBTI---A'] = modular['C3'];


    sidc['WO-DL-ML---L-'] = modular['해상제한경계'];
    sidc['WO-DL-MA----A'] = modular['연안지역'];
    sidc['WO-DL-RA---L-'] = modular['제한지역(경계)'];
    sidc['WO-DL-SA----A'] = modular['피해지역'];
    sidc['WO-DL-TA----A'] = modular['훈련지역'];
    sidc['WO-DL-O-----A'] = modular['임의지정지역'];

    sidc['WO-DMCA----L-'] = modular['해저케이블'];
    sidc['WO-DMCC-----A'] = modular['해저시설물'];
    sidc['WO-DMCD----L-'] = modular['운하'];
    sidc['WOS-ML----P--'] = modular['갑문'];
    sidc['WOS-MOA---P--'] = modular['석유/가스 굴착장치(위치)'];
    sidc['WO-DMOA-----A'] = modular['석유/가스 굴착장치(지역)'];
    sidc['WO-DMPA----L-'] = modular['송유관'];
    sidc['WS-----------'] = modular['우주'];
    
};