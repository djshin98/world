/*const circleCorridorPolygon = require("../geometry/circlecorridorpolygon");

// Draws a Fire Support Area
module.exports = function(feature) {
  var annotations = [{}];
  var geometry;

  annotations[0].geometry = { type: "Point" };
  annotations[0].properties = {};
  annotations[0].properties.text = "DA";
  if (feature.properties.uniqueDesignation)
    annotations[0].properties.text +=
      "\n" + feature.properties.uniqueDesignation;
  if (feature.properties.dtg)
    annotations[0].properties.text += "\n" + feature.properties.dtg;
  if (feature.properties.dtg1)
    annotations[0].properties.text += "\n" + feature.properties.dtg1;

  var polygon = circleCorridorPolygon(feature);
  geometry = polygon.geometry;
  if (polygon.annotation.hasOwnProperty("geometry")) {
    annotations[0].geometry = polygon.annotation.geometry;
  }

  return { geometry: geometry, annotations: annotations };
};
*/
function block(turnPlane, properties, bcompleted) {
    return turnPlane.map((prev, points, index, buffer) => {
        if (index == 1) {
            return {
                type: "polyline",
                geometry: [
                    points[index - 1], points[index]
                ]
            };
        }
    }).end();
}

module.exports = { modular: block, minPointCount: 2, maxPointCount: 3 };