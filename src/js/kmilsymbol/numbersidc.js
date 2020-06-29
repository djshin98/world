/* eslint-disable */
/* ***************************************************************************************
 based SIDC
*************************************************************************************** */
const air = require("./numbersidc/sidc/air");
const airmissile = require("./numbersidc/sidc/airmissile");
const space = require("./numbersidc/sidc/space");
const spacemissile = require("./numbersidc/sidc/spacemissile");
const landunit = require("./numbersidc/sidc/landunit");
const landcivilian = require("./numbersidc/sidc/landcivilian");
const landequipment = require("./numbersidc/sidc/landequipment");
const landinstallation = require("./numbersidc/sidc/landinstallation");
const sea = require("./numbersidc/sidc/sea");
const subsurface = require("./numbersidc/sidc/subsurface");
const minewarfare = require("./numbersidc/sidc/minewarfare");
const activites = require("./numbersidc/sidc/activites");
const signalsintelligence = require("./numbersidc/sidc/signalsintelligence");
const cyberspace = require("./numbersidc/sidc/cyberspace");
const dismountedindividual = require("./numbersidc/sidc/dismountedindividual");
const tacticalpoints = require("./numbersidc/sidc/control-measure");

var app6d = [
    air,
    airmissile,
    space,
    spacemissile,
    landunit,
    landcivilian,
    landequipment,
    landinstallation,
    sea,
    subsurface,
    minewarfare,
    activites,
    signalsintelligence,
    dismountedindividual,
    tacticalpoints
];
var std2525d = [
    air,
    airmissile,
    space,
    spacemissile,
    landunit,
    landcivilian,
    landequipment,
    landinstallation,
    sea,
    subsurface,
    minewarfare,
    activites,
    signalsintelligence,
    cyberspace,
    tacticalpoints
];
export {
    app6d,
    std2525d,
    air,
    airmissile,
    space,
    spacemissile,
    landunit,
    landcivilian,
    landequipment,
    landinstallation,
    sea,
    subsurface,
    minewarfare,
    activites,
    signalsintelligence,
    cyberspace,
    dismountedindividual,
    tacticalpoints
};