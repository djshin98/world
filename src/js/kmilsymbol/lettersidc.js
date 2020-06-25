/* eslint-disable */
/* ***************************************************************************************
Letter based SIDC
*************************************************************************************** */
const space = require("./lettersidc/sidc/space");

const air = require("./lettersidc/sidc/air");
const ground = require("./lettersidc/sidc/ground");
const equipment = require("./lettersidc/sidc/equipment");
const installations = require("./lettersidc/sidc/installations");
const sea = require("./lettersidc/sidc/sea");
const subsurface = require("./lettersidc/sidc/subsurface");
const sof = require("./lettersidc/sidc/sof");
const signalsIntelligence = require("./lettersidc/sidc/signalsIntelligence");
const stabilityoperations = require("./lettersidc/sidc/stabilityoperations");
const emergencymanagementsymbols = require("./lettersidc/sidc/emergencymanagementsymbols");
// Adding support for symbols in MIL-STD-2525B change 2 that are missing in 2525C
const std2525bextra = require("./lettersidc/sidc/2525b-ch2");

const tacticalpoints2525 = require("./lettersidc/sidc/tactical-points-2525");
const tacticalpointsapp6 = require("./lettersidc/sidc/tactical-points-app6");

var app6b = [
    space,
    air,
    ground,
    equipment,
    installations,
    sea,
    subsurface,
    sof,
    tacticalpointsapp6
];
var std2525b = [
    space,
    air,
    ground,
    equipment,
    installations,
    sea,
    subsurface,
    sof,
    signalsIntelligence,
    stabilityoperations,
    std2525bextra,
    tacticalpoints2525
];
var std2525c = [
    space,
    air,
    ground,
    equipment,
    installations,
    sea,
    subsurface,
    sof,
    signalsIntelligence,
    stabilityoperations,
    emergencymanagementsymbols,
    tacticalpoints2525
];

export {
    app6b,
    std2525b,
    std2525c,
    space,
    air,
    ground,
    equipment,
    installations,
    sea,
    subsurface,
    sof,
    signalsIntelligence,
    stabilityoperations,
    emergencymanagementsymbols,
    std2525bextra,
    tacticalpoints2525,
    tacticalpointsapp6
};