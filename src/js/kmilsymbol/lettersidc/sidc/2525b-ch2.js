const metadata_letter = require("../metadata").metadata;
const getIcons_letter = require("../geticons").geticons;
const std2525bicons = require("../../iconparts/2525b").icons;

module.exports = {
    type: "letter",
    getMetadata: metadata_letter,
    getIcons: getIcons_letter,
    iconParts: [std2525bicons],
    icons: function std2525b(sId, bbox, icn, _STD2525) {
        // These symbols are in 2525B but not in 2525C and because of this they need to be added
        // The icons are in iconparts/2525b.js

        sId["S-S-S-----"] = icn["2525B.STN"]; //WAR.SSUF.CBTT.STN
        sId["S-S-SP----"] = icn["2525B.STN.PKT"]; //WAR.SSUF.CBTT.STN.PKT
        sId["S-S-SA----"] = icn["2525B.STN.ASWSHP"]; //WAR.SSUF.CBTT.STN.ASWSHP
        sId["S-S-NN----"] = icn["2525B.NCBTT.STN"]; //WAR.SSUF.NCBTT.STN
        sId["S-S-NNR---"] = icn["2525B.STN.RSC"]; //WAR.SSUF.NCBTT.STN.RSC

        sId["S-U-SS----"] = icn["2525B.SUB.STN"]; //WAR.SBSUF.SUB.STN
        sId["S-U-SSA---"] = icn["2525B.ASWSUB"]; //WAR.SBSUF.SUB.STN.ASWSUB

        // Tactical points
        sId["G-O-SBWD--"] = icn["TP.WRECK, DANGEROUS"]; //TACGRP.OTH.SSUBSR.BTMRTN.WRKD
        bbox["G-O-SBXD--"] = { x1: 35, x2: 165, y1: 70, y2: 130 };
    }
};