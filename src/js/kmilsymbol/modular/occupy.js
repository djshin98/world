/*const bearingBetween = require("../geometry/bearingbetween");
const pointBetween = require("../geometry/pointbetween");
const toDistanceBearing = require("../geometry/todistancebearing");
const distanceBetween = require("../geometry/distancebetween");

// Draws a circle withe a radius in meters
function occupy(feature) {
  var p = feature.geometry.coordinates;
  var r = distanceBetween(p[0], p[1]);
  var bearing = bearingBetween(p[0], p[1]);

  var geometry = { type: "MultiLineString" };
  geometry.coordinates = [[]];
  for (var d = 0; d <= 340; d += 5) {
    geometry.coordinates[0].push(
      toDistanceBearing(p[0], r, d + bearing)
    );
  }

  var geom = [];
  var pEnd = toDistanceBearing(p[0], r, 340 + bearing);
  geom.push(
    toDistanceBearing(pEnd, r * 0.2, 320 + bearing - (90 - 15) + 45)
  );
  geom.push(pEnd);
  geom.push(
    toDistanceBearing(pEnd, r * 0.2, 320 + bearing - (90 - 15) - 45)
  );
  geometry.coordinates.push(geom);

  geom = [];
  pEnd = toDistanceBearing(p[0], r, 340 + bearing);
  geom.push(
    toDistanceBearing(pEnd, r * 0.2, 320 + bearing + (90 + 15) + 45)
  );
  geom.push(pEnd);
  geom.push(
    toDistanceBearing(pEnd, r * 0.2, 320 + bearing + (90 + 15) - 45)
  );
  geometry.coordinates.push(geom);

  return { geometry: geometry };
}

module.exports = occupy;
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