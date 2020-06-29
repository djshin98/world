const bearingBetween = require("../geometry/bearingbetween");
const pointBetween = require("../geometry/pointbetween");
const toDistanceBearing = require("../geometry/todistancebearing");

function canalize(feature) {
  //var direction, width;
  var annotations = [{}];

  var points = feature.geometry.coordinates;
  var geometry = { type: "MultiLineString" };
  var scale = distanceBetween(points[0], points[1]);
  var pMid = pointBetween(points[0], points[1], 0.5);
  var length = distanceBetween(pMid, points[2]);
  var bearing = bearingBetween(points[0], points[1]);

  geometry.coordinates = [];

  var geom = [points[0]];
  geom.push(toDistanceBearing(points[0], length, bearing + 90));
  geom.push(toDistanceBearing(points[1], length, bearing + 90));
  geom.push(points[1]);
  geometry.coordinates.push(geom);

  geom = [];
  geom.push(
    toDistanceBearing(points[0], scale * 0.2, bearing + 45)
  );
  geom.push(
    toDistanceBearing(points[0], scale * 0.2, bearing + 45 + 180)
  );
  geometry.coordinates.push(geom);

  geom = [];
  geom.push(
    toDistanceBearing(points[1], scale * 0.2, bearing - 45)
  );
  geom.push(
    toDistanceBearing(points[1], scale * 0.2, bearing - 45 + 180)
  );
  geometry.coordinates.push(geom);

  annotations[0].geometry = { type: "Point" };
  annotations[0].properties = {};
  annotations[0].properties.text = "C";
  annotations[0].geometry.coordinates = points[2];

  return { geometry: geometry, annotations: annotations };
}

module.exports = canalize;
