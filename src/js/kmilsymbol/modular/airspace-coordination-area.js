/*
const circleCorridorPolygon = require("../geometry/circlecorridorpolygon");

// Draws a NAI
module.exports = function(feature) {
  var annotations = [{}];
  var geometry;

  annotations[0].geometry = { type: "Point" };
  annotations[0].properties = {};
  annotations[0].properties.text = "ACA";
  if (feature.properties.uniqueDesignation)
    annotations[0].properties.text +=
      "\n" + feature.properties.uniqueDesignation;
  if (feature.properties.altitudeDepth)
    annotations[0].properties.text +=
      "\nMIN ALT: " + feature.properties.altitudeDepth;
  if (feature.properties.altitudeDepth1)
    annotations[0].properties.text +=
      "\nMAX ALT: " + feature.properties.altitudeDepth1;
  if (feature.properties.additionalInformation1)
    annotations[0].properties.text +=
      "\nGrids " + feature.properties.additionalInformation1;
  if (feature.properties.dtg)
    annotations[0].properties.text += "\nEFF: " + feature.properties.dtg;
  if (feature.properties.dtg1)
    annotations[0].properties.text += "\n- " + feature.properties.dtg1;

  var polygon = circleCorridorPolygon(feature);
  geometry = polygon.geometry;
  if (polygon.annotation.hasOwnProperty("geometry")) {
    annotations[0].geometry = polygon.annotation.geometry;
  }

  return { geometry: geometry, annotations: annotations };
};
*/
const { calc, rect } = require("../graphics/math");
const { centerRightAngle } = require("../graphics/prework");

function airspaceCoordinationArea(turnPlane, properties, bcompleted) {
    let dist;
    let arrowSize = properties.pixelBySize.arrow;
    let a = properties.annotations;

    let orders = [
        [0, 2],
        [1, 3]
    ];
    return turnPlane.map((prev, p, i, buffer) => {
        if (properties.log == "G-F-ACAI--") {
            if (i == 0) {
              p.push(p[0]);
            }  
                return [{
                  type: "polyline",
                  geometry: 
                      p
                  }
              ];
              
            
        } else if (properties.log == "G-F-ACAR--") {
            if (i == 0) {
                dist = calc.distance(p[0], p[1]) / 2;
                //return { type: "polyline", geometry: [p[i], p[i + 1]] };
            } else if (i == 1) {
                //return calc.annotationOnLine(a, "r", 0.5, p[1], p[3]);
                let pp = [p[0], p[1], calc.mid(p[0], p[1]), p[2]];
                let a = properties.annotations;
                let s = properties.pixelBySize;
                return turnPlane.turnStack(pp, 2, 3, (pt) => {

                    let r = rect(0, (pt[3].y) / 2, a.eny.width, a.eny.height);
                    let c = rect(0, -dist, a.c.width, a.c.height);
                    let ll = r.linkLine(pt[3], pt[2]);
                    let arrow = calc.arrow(turnPlane, pt[3], pt[2], s.arrow, 30);
                    let arc = calc.arc(-Math.PI / 2, -Math.PI * 3 / 2, dist, { div: 5, hair: { length: -0.1, freq: 10 }, annotation: c });
                    return [{
                        type: "annotation",
                        geometry: r.geometry(),
                        name: "eny",
                        debug: true
                    }, {
                        type: "annotation",
                        geometry: c.geometry(),
                        name: "c",
                        debug: true
                    }, ll[0], ll[1], arrow].concat(arc);
                });
            }
        } else if (properties.log == "G-F-ACAC--") {
            if (i == 0) {
                return { type: "polyline", geometry: [p[0], p[2]] };
            } else if (i == 1) {
                let ret = calc.annotationOnLine(a, "b", 0.5, p[1], p[3]);
                ret.push(calc.arrow(turnPlane, p[3], p[1], arrowSize));
                return ret;
            }
        }

    }, centerRightAngle, orders).end();
}

module.exports = {
    modular: airspaceCoordinationArea,
    minPointCount: 2,
    maxPointCount: 3,
    properties: {
        size: {
            arrow: 30
        },
        annotations: {
            r: {
                value: "B",
                anchor: { x: 0, y: 0 }
            },
        }
    }
};