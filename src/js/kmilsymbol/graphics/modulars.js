function registryModular(graphicModulars) {
    graphicModulars["AIRSPACE COORDINATION AREA"] = require("../modular/airspace-coordination-area.js");
    graphicModulars["AMBUSH"] = require("../modular/ambush.js");
    graphicModulars["ARTILLERY TARGET INTELLIGENCE ZONE"] = require("../modular/artillery-target-intelligence-zone.js");
    graphicModulars["BLOCK"] = require("../modular/block.js");
    graphicModulars["BREAKTHROUGH"] = require("../modular/breakthrough.js");
    graphicModulars["BREACH"] = require("../modular/breach.js");
    graphicModulars["BYPASS"] = require("../modular/bypass.js");
    graphicModulars["CALL FOR FIRE ZONE"] = require("../modular/call-for-fire-zone.js");
    graphicModulars["CANALIZE"] = require("../modular/canalize.js");
    graphicModulars["CENSOR ZONE"] = require("../modular/censor-zone.js");
    //graphicModulars.circle = require("../modular/circle.js");
    graphicModulars["CLEAR"] = require("../modular/clear.js");
    graphicModulars.corridor = require("../modular/corridor.js");
    graphicModulars.cover = require("../modular/cover.js");
    graphicModulars["CRITICAL FRIENDLY ZONE"] = require("../modular/critical-friendly-zone.js");
    graphicModulars["DEAD SPACE AREA"] = require("../modular/dead-space-area.js");
    graphicModulars["DELAY"] = require("../modular/delay.js");
<<<<<<< HEAD
    graphicModulars["기만모조"] = require("../modular/fake.js");
    graphicModulars["DIVERSION"] = require("../modular/diversion.js");
=======
>>>>>>> 3adbd308311bf6376fdf7431309257c2e5231eaa
    graphicModulars["FIRE SUPPORT AREA"] = require("../modular/fire-support-area.js");
    graphicModulars["FIX"] = require("../modular/fix.js");
    graphicModulars["FREE FIRE AREA"] = require("../modular/free-fire-area.js");
    graphicModulars.guard = require("../modular/guard.js");
    graphicModulars["ISOLATE"] = require("../modular/isolate.js");
    graphicModulars["MAIN ATTACK"] = require("../modular/main-attack.js");
    graphicModulars["NAMED AREA OF INTEREST"] = require("../modular/named-area-of-interest.js");
    graphicModulars.occupy = require("../modular/occupy.js");
    graphicModulars["RESTRICTIVE FIRE AREA"] = require("../modular/restrictive-fire-area.js");
    graphicModulars.searchArea = require("../modular/search-area.js");
    graphicModulars["SENSOR ZONE"] = require("../modular/sensor-zone.js");
    graphicModulars["SHOOTING POINT"] = require("../modular/shootingpoint.js");
    graphicModulars["SUPPORTING ATTACK"] = require("../modular/supporting-attack.js");
    graphicModulars["TARGET BUILD-UP AREA"] = require("../modular/target-build-up-area.js");
    graphicModulars["TARGET VALUE AREA"] = require("../modular/target-value-area.js");
    graphicModulars["TARGETED AREA OF INTEREST"] = require("../modular/targeted-area-of-interest.js");
    graphicModulars["TERMINALLY GUIDED MUNITION FOOTPRINT"] = require("../modular/terminally-guided-munition-footprint.js");
    graphicModulars["항공통제트랙형"] = require("../modular/tracktype.js");
    graphicModulars["무인항공기비행경로"] = require("../modular/unmanned-aerial-vehicle-flight-route.js");
    graphicModulars["ZONE OF RESPONSIBILITY"] = require("../modular/zone-of-responsibility.js");
}
module.exports = registryModular;