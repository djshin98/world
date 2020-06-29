const bearingBetween = require("../geometry/bearingbetween");
const pointBetween = require("../geometry/pointbetween");
const toDistanceBearing = require("../geometry/todistancebearing");
const distanceBetween = require("../geometry/distancebetween");

// Draws a circle withe a radius in meters
function cover(feature) {
  var p = feature.geometry.coordinates;
  var scale = Math.max(
    distanceBetween(p[0], p[1]),
    distanceBetween(p[0], p[2])
  );
  var geometry = { type: "MultiLineString" };
  geometry.coordinates = [[]];

  var geom = [];
  var pMid = pointBetween(p[0], p[1], 0.5);
  var bearing = bearingBetween(p[0], p[1]);
  geom.push(p[0]);
  geom.push(
    toDistanceBearing(pMid, scale * 0.05, bearing + (120 - 180))
  );
  var pMid2 = toDistanceBearing(pMid, scale * 0.05, bearing + 120);
  geom.push(pMid2);
  geom.push(p[1]);
  geometry.coordinates.push(geom);

  geom = [];
  bearing = bearingBetween(p[1], pMid2);
  geom.push(toDistanceBearing(p[1], scale * 0.08, bearing - 45));
  geom.push(p[1]);
  geom.push(toDistanceBearing(p[1], scale * 0.08, bearing + 45));
  geometry.coordinates.push(geom);

  geom = [];
  pMid = pointBetween(p[0], p[2], 0.5);
  bearing = bearingBetween(p[0], p[2]);
  geom.push(p[0]);
  geom.push(
    toDistanceBearing(pMid, scale * 0.05, bearing + (120 - 180))
  );
  pMid2 = toDistanceBearing(pMid, scale * 0.05, bearing + 120);
  geom.push(pMid2);
  geom.push(p[2]);
  geometry.coordinates.push(geom);

  geom = [];
  bearing = bearingBetween(p[2], pMid2);
  geom.push(toDistanceBearing(p[2], scale * 0.08, bearing - 45));
  geom.push(p[2]);
  geom.push(toDistanceBearing(p[2], scale * 0.08, bearing + 45));
  geometry.coordinates.push(geom);

  return { geometry: geometry };
}

module.exports = cover;
