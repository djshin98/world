/*const toDistanceBearing = require("../geometry/todistancebearing");

// Draws a circle withe a radius in meters
module.exports = function(feature) {
  var p = feature.geometry.coordinates;
  var r = feature.properties.distance;
  var geometry = { type: "Polygon" };
  geometry.coordinates = [[]];
  for (var direction = 360; direction >= 0; direction -= 5) {
    geometry.coordinates[0].push(
      toDistanceBearing(p, r, direction)
    );
  }
  return { geometry: geometry };
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