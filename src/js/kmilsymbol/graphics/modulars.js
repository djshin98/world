function registryModular(graphicModulars) {
    graphicModulars["구역1"] = require("../modular/OAC/FP/area/area-polygon.js");
    graphicModulars["구역2"] = require("../modular/OAC/FP/area/area-rect.js");
    graphicModulars["구역3"] = require("../modular/OAC/FP/area/area-circle.js");

    graphicModulars["매복"] = require("../modular/ambush.js");
 
    graphicModulars["BREACH"] = require("../modular/breach.js");
    graphicModulars["CANALIZE"] = require("../modular/canalize.js");
    
    //graphicModulars.circle = require("../modular/circle.js");

    graphicModulars.corridor = require("../modular/corridor.js");
    graphicModulars.cover = require("../modular/cover.js");
   

    graphicModulars["FIRE SUPPORT AREA"] = require("../modular/fire-support-area.js");
    graphicModulars["FIX"] = require("../modular/OAC/mission/fix.js");
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

   
    graphicModulars["간격"] = require("../modular/gap.js");
    graphicModulars["경계"] = require("../modular/OAC/mission/cover");
    graphicModulars["기만모조"] = require("../modular/fake.js");
    graphicModulars["다각형호"] = require("../modular/polygon.js");
    graphicModulars["목책"] = require("../modular/OAC/AD/obstacle/barrier.js");
    graphicModulars["무인항공기비행경로"] = require("../modular/unmanned-aerial-vehicle-flight-route.js");
    graphicModulars["반격"] = require("../modular/OAC/mission/catk");
    graphicModulars["비치매트"] = require("../modular/OAC/CC/normal/region/mat");
    graphicModulars["사격지원진지"] = require("../modular/shooting-support-positions.js");
    graphicModulars["장애물라인"] = require("../modular/obstacle-line.js");
    graphicModulars["철조망"] = require("../modular/OAC/AD/obstacle/wirenet");
    graphicModulars["폭파예정"] = require("../modular/blasting-schedule.js");
    graphicModulars["항공통제방위호형"] = require("../modular/OAC/CC/ATC/region/arctype");
    graphicModulars["항공통제트랙형"] = require("../modular/OAC/CC/ATC/region/tracktype.js");

    graphicModulars["BLOCK"] = require("../modular/OAC/mission/block.js");
    graphicModulars["BYPASS"] = require("../modular/OAC/mission/bypass.js");
    graphicModulars["우회곤란"] = require("../modular/OAC/AD/obstacle/bypassdifficulty");
    graphicModulars["DELAY"] = require("../modular/OAC/mission/delay.js");
    graphicModulars["도선장"] = require("../modular/OAC/AD/obstacle/ferry");
    graphicModulars["도섭"] = require("../modular/OAC/AD/obstacle/wade");
    graphicModulars["도하"] = require("../modular/OAC/AD/obstacle/crossriver");
    graphicModulars["요새방어선"] = require("../modular/OAC/AD/defence/fortressdefence");
}
module.exports = registryModular;