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
    //sidc['G-T-T-----'] = [];//TACGRP.TSK.DRT
    sidc["G-T-F-----"] = modular["FIX"]; //TACGRP.TSK.FIX
    //sidc['G-T-A-----'] = [];//TACGRP.TSK.FLWASS
    //sidc['G-T-AS----'] = [];//TACGRP.TSK.FLWASS.FLWSUP
    sidc["G-T-E-----"] = modular["ISOLATE"]; //TACGRP.TSK.ISL
    sidc["G-T-O-----"] = modular.occupy; //TACGRP.TSK.OCC
    sidc['G-T-P-----'] = modular["BLOCK"]; //TACGRP.TSK.PNE
    //sidc['G-T-R-----'] = [];//TACGRP.TSK.RIP
    //sidc['G-T-Q-----'] = [];//TACGRP.TSK.RTN
    //sidc["G-T-M-----"] = modular.delay; //TACGRP.TSK.RTM
    //sidc['G-T-S-----'] = [];//TACGRP.TSK.SCE
    //sidc['G-T-U-----'] = [];//TACGRP.TSK.SEC
    //sidc['G-T-US----'] = [];//TACGRP.TSK.SEC.SCN
    sidc["G-T-UG----"] = modular.guard; //TACGRP.TSK.SEC.GUD
    sidc["G-T-UC----"] = modular.cover; //TACGRP.TSK.SEC.COV
    //sidc['G-T-Z-----'] = [];//TACGRP.TSK.SZE
    //sidc['G-T-W-----'] = [];//TACGRP.TSK.WDR
    //sidc['G-T-WP----'] = [];//TACGRP.TSK.WDR.WDRUP
    //sidc['G-G-------'] = [];//TACGRP.C2GM
    //sidc['G-G-G-----'] = [];//TACGRP.C2GM.GNL
    //sidc['G-G-GP----'] = [];//TACGRP.C2GM.GNL.PNT
    //sidc['G-G-GPU---'] = [];//TACGRP.C2GM.GNL.PNT.USW
    //sidc['G-G-GPUU--'] = [];//TACGRP.C2GM.GNL.PNT.USW.UH2
    //sidc['G-G-GPW---'] = [];//TACGRP.C2GM.GNL.PNT.WPN
    //sidc['G-G-GL----'] = [];//TACGRP.C2GM.GNL.LNE
    //sidc['G-G-GLB---'] = [];//TACGRP.C2GM.GNL.LNE.BNDS
    //sidc['G-G-GLF---'] = [];//TACGRP.C2GM.GNL.LNE.FLOT
    //sidc['G-G-GLC---'] = [];//TACGRP.C2GM.GNL.LNE.LOC
    //sidc['G-G-GLP---'] = [];//TACGRP.C2GM.GNL.LNE.PHELNE
    //sidc['G-G-GLL---'] = [];//TACGRP.C2GM.GNL.LNE.LITLNE
    //sidc['G-G-GA----'] = [];//TACGRP.C2GM.GNL.ARS
    //sidc['G-G-GAG---'] = [];//TACGRP.C2GM.GNL.ARS.GENARA
    //sidc['G-G-GAA---'] = [];//TACGRP.C2GM.GNL.ARS.ABYARA
    //sidc['G-G-GAE---'] = [];//TACGRP.C2GM.GNL.ARS.EMTARA
    //sidc['G-G-GAF---'] = [];//TACGRP.C2GM.GNL.ARS.FTFDAR
    //sidc['G-G-GAD---'] = [];//TACGRP.C2GM.GNL.ARS.DRPZ
    //sidc['G-G-GAX---'] = [];//TACGRP.C2GM.GNL.ARS.EZ
    //sidc['G-G-GAL---'] = [];//TACGRP.C2GM.GNL.ARS.LZ
    //sidc['G-G-GAP---'] = [];//TACGRP.C2GM.GNL.ARS.PZ
    //sidc['G-G-GAS---'] = [];//TACGRP.C2GM.GNL.ARS.SRHARA
    //sidc['G-G-GAY---'] = [];//TACGRP.C2GM.GNL.ARS.LAARA
    //sidc['G-G-GAZ---'] = [];//TACGRP.C2GM.GNL.ARS.AIRFZ
    //sidc['G-G-A-----'] = [];//TACGRP.C2GM.AVN
    //sidc['G-G-AP----'] = [];//TACGRP.C2GM.AVN.PNT
    //sidc['G-G-AL----'] = [];//TACGRP.C2GM.AVN.LNE
    //sidc['G-G-ALC---'] = [];//TACGRP.C2GM.AVN.LNE.ACDR
    //sidc['G-G-ALM---'] = [];//TACGRP.C2GM.AVN.LNE.MRR
    //sidc['G-G-ALS---'] = [];//TACGRP.C2GM.AVN.LNE.SAAFR
    sidc['G-G-ALU---'] = modular["무인항공기비행경로"]; //TACGRP.C2GM.AVN.LNE.UAR
    //sidc['G-G-ALL---'] = [];//TACGRP.C2GM.AVN.LNE.LLTR
    //sidc['G-G-AA----'] = [];//TACGRP.C2GM.AVN.ARS
    //sidc['G-G-AAR---'] = [];//TACGRP.C2GM.AVN.ARS.ROZ
    //sidc['G-G-AAF---'] = [];//TACGRP.C2GM.AVN.ARS.SHRDEZ
    //sidc['G-G-AAH---'] = [];//TACGRP.C2GM.AVN.ARS.HIDACZ
    //sidc['G-G-AAM---'] = [];//TACGRP.C2GM.AVN.ARS.MEZ
    //sidc['G-G-AAML--'] = [];//TACGRP.C2GM.AVN.ARS.MEZ.LAMEZ
    //sidc['G-G-AAMH--'] = [];//TACGRP.C2GM.AVN.ARS.MEZ.HAMEZ
    sidc['G-G-AAA---'] = modular["항공통제방위호형"];
    sidc['G-G-AAO---'] = modular["항공통제방위호형"];
    sidc['G-G-AAP---'] = modular["다각형호"]; //TACGRP.C2GM.AVN.ARS.MEZ
    sidc['G-G-AAT---'] = modular["항공통제트랙형"]; //TACGRP.C2GM.AVN.ARS.MEZ
    //sidc['G-G-AAW---'] = [];//TACGRP.C2GM.AVN.ARS.WFZ
    //sidc['G-G-P-----'] = [];//TACGRP.C2GM.DCPN
    sidc['G-G-PD----'] = modular["기만모조"]; //TACGRP.C2GM.DCPN.DMY
    //sidc['G-G-PA----'] = [];//TACGRP.C2GM.DCPN.AAFF
    //sidc['G-G-PF----'] = [];//TACGRP.C2GM.DCPN.DAFF
    //sidc['G-G-PM----'] = [];//TACGRP.C2GM.DCPN.DMA
    //sidc['G-G-PY----'] = [];//TACGRP.C2GM.DCPN.DMAF
    //sidc['G-G-PC----'] = [];//ACGRP.C2GM.DCPN.DMYMD
    //sidc['G-G-D-----'] = [];//TACGRP.C2GM.DEF
    //sidc['G-G-DP----'] = [];//TACGRP.C2GM.DEF.PNT
    //sidc['G-G-DL----'] = [];//TACGRP.C2GM.DEF.LNE
    //sidc['G-G-DLF---'] = [];//TACGRP.C2GM.DEF.LNE.FEBA
    //sidc['G-G-DLP---'] = [];//TACGRP.C2GM.DEF.LNE.PDF
    //sidc['G-G-DA----'] = [];//TACGRP.C2GM.DEF.ARS
    //sidc['G-G-DAB---'] = [];//TACGRP.C2GM.DEF.ARS.BTLPSN
    //sidc['G-G-DABP--'] = [];//TACGRP.C2GM.DEF.ARS.BTLPSN.PBNO
    //sidc['G-G-DAE---'] = [];//TACGRP.C2GM.DEF.ARS.EMTARA
    //sidc['G-G-O-----'] = [];//TACGRP.C2GM.OFF
    //sidc['G-G-OP----'] = [];//TACGRP.C2GM.OFF.PNT
    //sidc['G-G-OL----'] = [];//TACGRP.C2GM.OFF.LNE
    //sidc['G-G-OLA---'] = [];//TACGRP.C2GM.OFF.LNE.AXSADV
    //sidc['G-G-OLAV--'] = [];//TACGRP.C2GM.OFF.LNE.AXSADV.AVN
    //sidc['G-G-OLAA--'] = [];//TACGRP.C2GM.OFF.LNE.AXSADV.ABN
    //sidc['G-G-OLAR--'] = [];//TACGRP.C2GM.OFF.LNE.AXSADV.ATK
    //sidc['G-G-OLAG--'] = [];//TACGRP.C2GM.OFF.LNE.AXSADV.GRD
    sidc["G-G-OLAGM-"] = modular["MAIN ATTACK"]; //TACGRP.C2GM.OFF.LNE.AXSADV.GRD.MANATK
    sidc["G-G-OLAGS-"] = modular["SUPPORTING ATTACK"]; //TACGRP.C2GM.OFF.LNE.AXSADV.GRD.SUPATK
    //sidc['G-G-OLK---'] = [];//TACGRP.C2GM.OFF.LNE.DIRATK
    //sidc['G-G-OLKA--'] = [];//TACGRP.C2GM.OFF.LNE.DIRATK.AVN
    //sidc['G-G-OLKG--'] = [];//TACGRP.C2GM.OFF.LNE.DIRATK.GRD
    //sidc['G-G-OLKGM-'] = [];//TACGRP.C2GM.OFF.LNE.DIRATK.GRD.MANATK
    //sidc['G-G-OLKGS-'] = [];//TACGRP.C2GM.OFF.LNE.DIRATK.GRD.SUPATK
    //sidc['G-G-OLF---'] = [];//TACGRP.C2GM.OFF.LNE.FCL
    //sidc['G-G-OLI---'] = [];//TACGRP.C2GM.OFF.LNE.INFNLE
    //sidc['G-G-OLL---'] = [];//TACGRP.C2GM.OFF.LNE.LMTADV
    //sidc['G-G-OLT---'] = [];//TACGRP.C2GM.OFF.LNE.LD
    //sidc['G-G-OLC---'] = [];//TACGRP.C2GM.OFF.LNE.LDLC
    //sidc['G-G-OLP---'] = [];//TACGRP.C2GM.OFF.LNE.PLD
    //sidc['G-G-OA----'] = [];//TACGRP.C2GM.OFF.ARS
    //sidc['G-G-OAA---'] = [];//TACGRP.C2GM.OFF.ARS.ASTPSN
    //sidc['G-G-OAK---'] = [];//TACGRP.C2GM.OFF.ARS.ATKPSN
    sidc['G-G-OAF---'] = modular["SHOOTING POINT"]; //TACGRP.C2GM.OFF.ARS.AFP
    sidc['G-G-OAS---'] = modular["사격지원진지"]; //TACGRP.C2GM.OFF.ARS.SFP
    //sidc['G-G-OAO---'] = [];//TACGRP.C2GM.OFF.ARS.OBJ
    //sidc['G-G-OAP---'] = [];//TACGRP.C2GM.OFF.ARS.PBX
    //sidc['G-G-S-----'] = [];//TACGRP.C2GM.SPL
    //sidc['G-G-SL----'] = [];//TACGRP.C2GM.SPL.LNE
    sidc["G-G-SLA---"] = modular["AMBUSH"]; //TACGRP.C2GM.SPL.LNE.AMB
    //sidc['G-G-SLH---'] = [];//TACGRP.C2GM.SPL.LNE.HGL
    //sidc['G-G-SLR---'] = [];//TACGRP.C2GM.SPL.LNE.REL
    //sidc['G-G-SLB---'] = [];//TACGRP.C2GM.SPL.LNE.BRGH
    //sidc['G-G-SA----'] = [];//TACGRP.C2GM.SPL.ARA
    //sidc['G-G-SAO---'] = [];//TACGRP.C2GM.SPL.ARA.AOO
    //sidc['G-G-SAA---'] = [];//TACGRP.C2GM.SPL.ARA.AHD
    //sidc['G-G-SAE---'] = [];//TACGRP.C2GM.SPL.ARA.ENCMT
    sidc["G-G-SAN---"] = modular["NAMED AREA OF INTEREST"]; //TACGRP.C2GM.SPL.ARA.NAI
    sidc["G-G-SAT---"] = modular["TARGETED AREA OF INTEREST"]; //TACGRP.C2GM.SPL.ARA.TAIS
    //sidc['G-M-------'] = [];//TACGRP.MOBSU
    //sidc['G-M-O-----'] = [];//TACGRP.MOBSU.OBST
    //sidc['G-M-OG----'] = [];//TACGRP.MOBSU.OBST.GNL
    //sidc['G-M-OGB---'] = [];//TACGRP.MOBSU.OBST.GNL.BLT
    sidc['G-M-OGL---'] = modular["장애물라인"]; //TACGRP.MOBSU.OBST.GNL.LNE
    //sidc['G-M-OGZ---'] = [];//TACGRP.MOBSU.OBST.GNL.Z
    //sidc['G-M-OGF---'] = [];//TACGRP.MOBSU.OBST.GNL.OFA
    //sidc['G-M-OGR---'] = [];//TACGRP.MOBSU.OBST.GNL.ORA
    sidc['G-M-OS----'] = modular["목책"]; //TACGRP.MOBSU.OBST.ABS
    //sidc['G-M-OA----'] = [];//TACGRP.MOBSU.OBST.ATO
    //sidc['G-M-OAD---'] = [];//TACGRP.MOBSU.OBST.ATO.ATD
    sidc['G-M-OADU--'] = modular["대전차구건설중"]; //TACGRP.MOBSU.OBST.ATO.ATD.ATDUC
    //sidc['G-M-OADC--'] = [];//TACGRP.MOBSU.OBST.ATO.ATD.ATDC
    //sidc['G-M-OAR---'] = [];//TACGRP.MOBSU.OBST.ATO.ATDATM
    //sidc['G-M-OAO---'] = [];//TACGRP.MOBSU.OBST.ATO.TDTSM
    //sidc['G-M-OAW---'] = [];//TACGRP.MOBSU.OBST.ATO.ATW
    //sidc['G-M-OM----'] = [];//TACGRP.MOBSU.OBST.MNE
    //sidc['G-M-OMC---'] = [];//TACGRP.MOBSU.OBST.MNE.MCLST
    //sidc['G-M-OF----'] = [];//TACGRP.MOBSU.OBST.MNEFLD
    //sidc['G-M-OFD---'] = [];//TACGRP.MOBSU.OBST.MNEFLD.DYN
    sidc['G-M-OFG---'] = modular["간격"]; //TACGRP.MOBSU.OBST.MNEFLD.GAP
    //sidc['G-M-OFA---'] = [];//TACGRP.MOBSU.OBST.MNEFLD.MNDARA
    //sidc['G-M-OE----'] = [];//TACGRP.MOBSU.OBST.OBSEFT
    //sidc['G-M-OEB---'] = [];//TACGRP.MOBSU.OBST.OBSEFT.BLK
    //sidc['G-M-OEF---'] = [];//TACGRP.MOBSU.OBST.OBSEFT.FIX
    //sidc['G-M-OET---'] = [];//TACGRP.MOBSU.OBST.OBSEFT.TUR
    //sidc['G-M-OED---'] = [];//TACGRP.MOBSU.OBST.OBSEFT.DRT
    //sidc['G-M-OU----'] = [];//TACGRP.MOBSU.OBST.UXO
    //sidc['G-M-OR----'] = [];//TACGRP.MOBSU.OBST.RCBB
    sidc['G-M-ORP---'] = modular["폭파예정"]; //TACGRP.MOBSU.OBST.RCBB.PLND
    //sidc['G-M-ORS---'] = [];//TACGRP.MOBSU.OBST.RCBB.SAFE
    //sidc['G-M-ORA---'] = [];//TACGRP.MOBSU.OBST.RCBB.ABP
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
    //sidc['G-M-BDI---'] = [];//TACGRP.MOBSU.OBSTBP.DFTY.IMP
    //sidc['G-M-BC----'] = [];//TACGRP.MOBSU.OBSTBP.CSGSTE
    //sidc['G-M-BCA---'] = [];//TACGRP.MOBSU.OBSTBP.CSGSTE.ASTCA
    //sidc['G-M-BCB---'] = [];//TACGRP.MOBSU.OBSTBP.CSGSTE.BRG
    //sidc['G-M-BCF---'] = [];//TACGRP.MOBSU.OBSTBP.CSGSTE.FRY
    //sidc['G-M-BCE---'] = [];//TACGRP.MOBSU.OBSTBP.CSGSTE.FRDESY
    //sidc['G-M-BCD---'] = [];//TACGRP.MOBSU.OBSTBP.CSGSTE.FRDDFT
    //sidc['G-M-BCL---'] = [];//TACGRP.MOBSU.OBSTBP.CSGSTE.LANE
    //sidc['G-M-BCR---'] = [];//TACGRP.MOBSU.OBSTBP.CSGSTE.RFT
    //sidc['G-M-S-----'] = [];//TACGRP.MOBSU.SU
    //sidc['G-M-SL----'] = [];//TACGRP.MOBSU.SU.FTFDLN
    //sidc['G-M-SW----'] = [];//TACGRP.MOBSU.SU.FEWS
    //sidc['G-M-SP----'] = [];//TACGRP.MOBSU.SU.STRGPT
    //sidc['G-M-N-----'] = [];//TACGRP.MOBSU.CBRN
    //sidc['G-M-NM----'] = [];//TACGRP.MOBSU.CBRN.MSDZ
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
    //sidc['G-F-AT----'] = [];//TACGRP.FSUPP.ARS.ARATGT
    //sidc['G-F-ATG---'] = [];//TACGRP.FSUPP.ARS.ARATGT.SGTGT
    //sidc['G-F-ATS---'] = [];//TACGRP.FSUPP.ARS.ARATGT.SMK
    //sidc['G-F-ATB---'] = [];//TACGRP.FSUPP.ARS.ARATGT.BMARA
    //sidc['G-F-AC----'] = [];//TACGRP.FSUPP.ARS.C2ARS
    //TACGRP.FSUPP.ARS.C2ARS.FSA
    sidc["G-F-ACSI--"] = modular["FIRE SUPPORT AREA"]; //TACGRP.FSUPP.ARS.C2ARS.FSA.IRR
    sidc["G-F-ACSR--"] = modular["FIRE SUPPORT AREA"]; //TACGRP.FSUPP.ARS.C2ARS.FSA.RTG
    sidc["G-F-ACSC--"] = modular["FIRE SUPPORT AREA"]; //TACGRP.FSUPP.ARS.C2ARS.FSA.CIRCLR
    //sidc['G-F-ACA---'] = [];//TACGRP.FSUPP.ARS.C2ARS.ACA
    sidc["G-F-ACAI--"] = modular["AIRSPACE COORDINATION AREA"]; //TACGRP.FSUPP.ARS.C2ARS.ACA.IRR
    sidc["G-F-ACAR--"] = modular["AIRSPACE COORDINATION AREA"]; //TACGRP.FSUPP.ARS.C2ARS.ACA.RTG
    sidc["G-F-ACAC--"] = modular["AIRSPACE COORDINATION AREA"]; //TACGRP.FSUPP.ARS.C2ARS.ACA.CIRCLR
    //TACGRP.FSUPP.ARS.C2ARS.FFA
    sidc["G-F-ACFI--"] = modular["FREE FIRE AREA"]; //TACGRP.FSUPP.ARS.C2ARS.FFA.IRR
    sidc["G-F-ACFR--"] = modular["FREE FIRE AREA"]; //TACGRP.FSUPP.ARS.C2ARS.FFA.RTG
    sidc["G-F-ACFC--"] = modular["FREE FIRE AREA"]; //TACGRP.FSUPP.ARS.C2ARS.FFA.CIRCLR
    //sidc['G-F-ACN---'] = [];//TACGRP.FSUPP.ARS.C2ARS.NFA
    //sidc['G-F-ACNI--'] = [];//TACGRP.FSUPP.ARS.C2ARS.NFA.IRR
    //sidc['G-F-ACNR--'] = [];//TACGRP.FSUPP.ARS.C2ARS.NFA.RTG
    //sidc["G-F-ACNC--"] = []; //TACGRP.FSUPP.ARS.C2ARS.NFA.CIRCLR
    //TACGRP.FSUPP.ARS.C2ARS.RFA
    sidc["G-F-ACRI--"] = modular["RESTRICTIVE FIRE AREA"]; //TACGRP.FSUPP.ARS.C2ARS.RFA.IRR
    sidc["G-F-ACRR--"] = modular["RESTRICTIVE FIRE AREA"]; //TACGRP.FSUPP.ARS.C2ARS.RFA.RTG
    sidc["G-F-ACRC--"] = modular["RESTRICTIVE FIRE AREA"]; //TACGRP.FSUPP.ARS.C2ARS.RFA.CIRCLR
    //sidc['G-F-ACP---'] = [];//TACGRP.FSUPP.ARS.C2ARS.PAA
    //sidc['G-F-ACPR--'] = [];//TACGRP.FSUPP.ARS.C2ARS.PAA.RTG
    //sidc["G-F-ACPC--"] = []; //TACGRP.FSUPP.ARS.C2ARS.PAA.CIRCLR
    //TACGRP.FSUPP.ARS.C2ARS.SNSZ
    sidc["G-F-ACEI--"] = modular["SENSOR ZONE"]; //TACGRP.FSUPP.ARS.C2ARS.SNSZ.IRR
    sidc["G-F-ACER--"] = modular["SENSOR ZONE"]; //TACGRP.FSUPP.ARS.C2ARS.SNSZ.RTG
    sidc["G-F-ACEC--"] = modular["SENSOR ZONE"]; //TACGRP.FSUPP.ARS.C2ARS.SNSZ.CIRCLR
    //TACGRP.FSUPP.ARS.C2ARS.DA
    sidc["G-F-ACDI--"] = modular["DEAD SPACE AREA"]; //TACGRP.FSUPP.ARS.C2ARS.DA.IRR
    sidc["G-F-ACDR--"] = modular["DEAD SPACE AREA"]; //TACGRP.FSUPP.ARS.C2ARS.DA.RTG
    sidc["G-F-ACDC--"] = modular["DEAD SPACE AREA"]; //TACGRP.FSUPP.ARS.C2ARS.DA.CIRCLR
    //TACGRP.FSUPP.ARS.C2ARS.ZOR
    sidc["G-F-ACZI--"] = modular["ZONE OF RESPONSIBILITY"]; //TACGRP.FSUPP.ARS.C2ARS.ZOR.IRR
    sidc["G-F-ACZR--"] = modular["ZONE OF RESPONSIBILITY"]; //TACGRP.FSUPP.ARS.C2ARS.ZOR.RTG
    sidc["G-F-ACZC--"] = modular["ZONE OF RESPONSIBILITY"]; //TACGRP.FSUPP.ARS.C2ARS.ZOR.CIRCLR
    //TACGRP.FSUPP.ARS.C2ARS.TBA
    sidc["G-F-ACBI--"] = modular["TARGET BUILD-UP AREA"]; //TACGRP.FSUPP.ARS.C2ARS.TBA.IRR
    sidc["G-F-ACBR--"] = modular["TARGET BUILD-UP AREA"]; //TACGRP.FSUPP.ARS.C2ARS.TBA.RTG
    sidc["G-F-ACBC--"] = modular["TARGET BUILD-UP AREA"]; //TACGRP.FSUPP.ARS.C2ARS.TBA.CIRCLR
    //TACGRP.FSUPP.ARS.C2ARS.TVAR
    sidc["G-F-ACVI--"] = modular["TARGET VALUE AREA"]; //TACGRP.FSUPP.ARS.C2ARS.TVAR.IRR
    sidc["G-F-ACVR--"] = modular["TARGET VALUE AREA"]; //TACGRP.FSUPP.ARS.C2ARS.TVAR.RTG
    sidc["G-F-ACVC--"] = modular["TARGET VALUE AREA"]; //TACGRP.FSUPP.ARS.C2ARS.TVAR.CIRCLR
    sidc["G-F-ACT---"] =
        modular["TERMINALLY GUIDED MUNITION FOOTPRINT"]; //TACGRP.FSUPP.ARS.C2ARS.TGMF
    //sidc['G-F-AZ----'] = [];//TACGRP.FSUPP.ARS.TGTAQZ
    //TACGRP.FSUPP.ARS.TGTAQZ.ATIZ
    sidc["G-F-AZII--"] =
        modular["ARTILLERY TARGET INTELLIGENCE ZONE"]; //TACGRP.FSUPP.ARS.TGTAQZ.ATIZ.IRR
    sidc["G-F-AZIR--"] =
        modular["ARTILLERY TARGET INTELLIGENCE ZONE"]; //TACGRP.FSUPP.ARS.TGTAQZ.ATIZ.RTG
    //TACGRP.FSUPP.ARS.TGTAQZ.CFFZ
    sidc["G-F-AZXI--"] = modular["CALL FOR FIRE ZONE"]; //TACGRP.FSUPP.ARS.TGTAQZ.CFFZ.IRR
    sidc["G-F-AZXR--"] = modular["CALL FOR FIRE ZONE"]; //TACGRP.FSUPP.ARS.TGTAQZ.CFFZ.RTG
    //TACGRP.FSUPP.ARS.TGTAQZ.CNS
    sidc["G-F-AZCI--"] = modular["CENSOR ZONE"]; //TACGRP.FSUPP.ARS.TGTAQZ.CNS.IRR
    sidc["G-F-AZCR--"] = modular["CENSOR ZONE"]; //TACGRP.FSUPP.ARS.TGTAQZ.CNS.RTG
    //TACGRP.FSUPP.ARS.TGTAQZ.CFZ
    sidc["G-F-AZFI--"] = modular["CRITICAL FRIENDLY ZONE"]; //TACGRP.FSUPP.ARS.TGTAQZ.CFZ.IRR
    sidc["G-F-AZFR--"] = modular["CRITICAL FRIENDLY ZONE"]; //TACGRP.FSUPP.ARS.TGTAQZ.CFZ.RTG
    //sidc['G-F-AX----'] = [];//TACGRP.FSUPP.ARS.WPNRF
    //sidc["G-F-AXC---"] = []; //modular.circle;//TACGRP.FSUPP.ARS.WPNRF.CIRCLR
    //sidc['G-F-AXS---'] = [];//TACGRP.FSUPP.ARS.WPNRF.SCR
    //sidc['G-F-AK----'] = [];//TACGRP.FSUPP.ARS.KLBOX
    //sidc['G-F-AKB---'] = [];//TACGRP.FSUPP.ARS.KLBOX.BLUE
    //sidc["G-F-AKBC--"] = []; //modular.circle;//TACGRP.FSUPP.ARS.KLBOX.BLUE.CIRCLR
    //sidc['G-F-AKBI--'] = [];//TACGRP.FSUPP.ARS.KLBOX.BLUE.IRR
    //sidc['G-F-AKBR--'] = [];//TACGRP.FSUPP.ARS.KLBOX.BLUE.RTG
    //sidc['G-F-AKP---'] = [];//TACGRP.FSUPP.ARS.KLBOX.PURPLE
    //sidc["G-F-AKPC--"] = []; //modular.circle;//TACGRP.FSUPP.ARS.KLBOX.PURPLE.CIRCLR
    //sidc['G-F-AKPI--'] = [];//TACGRP.FSUPP.ARS.KLBOX.PURPLE.IRR
    //sidc['G-F-AKPR--'] = [];//TACGRP.FSUPP.ARS.KLBOX.PURPLE.RTG
    //sidc['G-S-------'] = [];//TACGRP.CSS
    //sidc['G-S-P-----'] = [];//TACGRP.CSS.PNT
    //sidc['G-S-L-----'] = [];//TACGRP.CSS.LNE
    //sidc['G-S-LC----'] = [];//TACGRP.CSS.LNE.CNY
    //sidc['G-S-LCM---'] = [];//TACGRP.CSS.LNE.CNY.MCNY
    //sidc['G-S-LCH---'] = [];//TACGRP.CSS.LNE.CNY.HCNY
    //sidc['G-S-LR----'] = [];//TACGRP.CSS.LNE.SLPRUT
    //sidc['G-S-LRM---'] = [];//TACGRP.CSS.LNE.SLPRUT.MSRUT
    //sidc['G-S-LRA---'] = [];//TACGRP.CSS.LNE.SLPRUT.ASRUT
    //sidc['G-S-LRO---'] = [];//TACGRP.CSS.LNE.SLPRUT.1WTRFF
    //sidc['G-S-LRT---'] = [];//TACGRP.CSS.LNE.SLPRUT.ATRFF
    //sidc['G-S-LRW---'] = [];//TACGRP.CSS.LNE.SLPRUT.2WTRFF
    //sidc['G-S-A-----'] = [];//TACGRP.CSS.ARA
    //sidc['G-S-AD----'] = [];//TACGRP.CSS.ARA.DHA
    //sidc['G-S-AE----'] = [];//TACGRP.CSS.ARA.EPWHA
    //sidc['G-S-AR----'] = [];//TACGRP.CSS.ARA.FARP
    //sidc['G-S-AH----'] = [];//TACGRP.CSS.ARA.RHA
    //sidc['G-S-AS----'] = [];//TACGRP.CSS.ARA.SUPARS
    //sidc['G-S-ASB---'] = [];//TACGRP.CSS.ARA.SUPARS.BSA
    //sidc['G-S-ASD---'] = [];//TACGRP.CSS.ARA.SUPARS.DSA
    //sidc['G-S-ASR---'] = [];//TACGRP.CSS.ARA.SUPARS.RSA
    //sidc['G-O-------'] = [];//TACGRP.OTH
    //sidc['G-O-E-----'] = [];//TACGRP.OTH.ER
    //sidc['G-O-H-----'] = [];//TACGRP.OTH.HAZ
    //sidc['G-O-HN----'] = [];//TACGRP.OTH.HAZ.NVGL
    //sidc['G-O-S-----'] = [];//TACGRP.OTH.SSUBSR
    //sidc['G-O-B-----'] = [];//TACGRP.OTH.BERLNE
    //sidc['G-O-BE----'] = [];//TACGRP.OTH.BERLNE.ELC
    //sidc['G-O-BA----'] = [];//TACGRP.OTH.BERLNE.ACU
    //sidc['G-O-BT----'] = [];//TACGRP.OTH.BERLNE.TPD
    //sidc['G-O-BO----'] = [];//TACGRP.OTH.BERLNE.EOPI
    //sidc['G-O-F-----'] = [];//TACGRP.OTH.FIX

    //2525B compatibility
    //sidc["G-F-ATC---"] = []; //modular.circle;
    //sidc["G-F-AZIC--"] = []; //modular.circle;

    /*
    // Army XML compability
    sidc["C-R-LE----"] = ms.geometry.circle;

    // Systematic SitaWare compatibility
    sidc["X---C-----"] = modular.corridor;
    sidc["X---I-----"] = ms.geometry.circle;
    sidc["X---A-----"] = modular["SUPPORTING ATTACK"];
    */
};