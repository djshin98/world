function registryModular(graphicModulars) {

    //graphicModulars["매복"] = require("../modular/ambush.js");
    graphicModulars["FIX"] = require("../modular/OAC/mission/fix.js");
    graphicModulars["간격"] = require("../modular/OAC/CC/gap.js");
    graphicModulars["경계"] = require("../modular/OAC/mission/cover");
    graphicModulars["기만모조"] = require("../modular/OAC/CC/fake.js");
    graphicModulars["다각형구역"] = require("../modular/OAC/FP/area/area-polygon");
    graphicModulars["다각형호"] = require("../modular/OAC/CC/polygon.js");
    graphicModulars["도선장"] = require("../modular/OAC/AD/obstacle/ferry");
    graphicModulars["도섭"] = require("../modular/OAC/AD/obstacle/wade");
    graphicModulars["도하"] = require("../modular/OAC/AD/obstacle/crossriver");
    graphicModulars["목책"] = require("../modular/OAC/AD/obstacle/barrier.js");
    graphicModulars["반격"] = require("../modular/OAC/mission/catk");
    graphicModulars["방향선"] = require("../modular/OAC/etc/direction-line");
    graphicModulars["보급로"] = require("../modular/OAC/CSS/aline");
    graphicModulars["비행경로"] = require("../modular/OAC/CC/ATC/line/flightpath");
    graphicModulars["비치매트"] = require("../modular/OAC/CC/normal/region/mat");
    graphicModulars["사각구역"] = require("../modular/OAC/FP/area/area-rect");
    graphicModulars["사격선"] = require("../modular/OAC/CC/shootingpoint.js");
    graphicModulars["사격지원진지"] = require("../modular/OAC/CC/shooting-support-positions.js");
    graphicModulars["요새방어선"] = require("../modular/OAC/AD/defence/fortressdefence");
    graphicModulars["우회곤란"] = require("../modular/OAC/AD/obstacle/bypassdifficulty");
    graphicModulars["원구역"] = require("../modular/OAC/FP/area/area-circle.js");
    graphicModulars["장애물"] = require("../modular/OAC/AD/obstacle/obstacle");
    graphicModulars["철조망"] = require("../modular/OAC/AD/obstacle/wirenet");
    graphicModulars["최소안전지대"] = require("../modular/OAC/AD/CBRN/safetyzone");
    graphicModulars["통제선"] = require("../modular/OAC/CSS/control-section");
    graphicModulars["폭파예정"] = require("../modular/OAC/AD/obstacle/blasting-schedule.js");
    graphicModulars["포진지구역"] = require("../modular/OAC/FP/area/acircle.js");
    graphicModulars["항공통제구역"] = require("../modular/OAC/CC/ATC/region/region");
    graphicModulars["항공통제방위호형"] = require("../modular/OAC/CC/ATC/region/arctype");
    graphicModulars["항공통제트랙형"] = require("../modular/OAC/CC/ATC/region/tracktype.js");

    graphicModulars["BLOCK"] = require("../modular/OAC/mission/block.js");
    graphicModulars["BYPASS"] = require("../modular/OAC/mission/bypass.js");
    graphicModulars["DELAY"] = require("../modular/OAC/mission/delay.js");
    graphicModulars["LINE"] = require("../modular/OAC/CC/normal/line");
    

}
module.exports = registryModular;