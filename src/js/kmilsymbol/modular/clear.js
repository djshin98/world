/*const bearingBetween = require("../geometry/bearingbetween");
const pointBetween = require("../geometry/pointbetween");
const toDistanceBearing = require("../geometry/todistancebearing");

function clear(feature) {
  //var direction, width;
  var annotations = [{}];

  var points = feature.geometry.coordinates;
  var geometry = { type: "MultiLineString" };
  var scale = distanceBetween(points[0], points[1]);

  geometry.coordinates = [];

  var geom = [points[0], points[1]];
  geometry.coordinates.push(geom);

  var pMid = pointBetween(points[0], points[1], 0.5);
  var length = distanceBetween(pMid, points[2]);
  var bearing = bearingBetween(points[0], points[1]);

  geom = [pMid, toDistanceBearing(pMid, length, bearing + 90)];
  geometry.coordinates.push(geom);

  annotations[0].geometry = { type: "Point" };
  annotations[0].properties = {};
  annotations[0].properties.text = "C";
  annotations[0].geometry.coordinates = pointBetween(
    pMid,
    geom[1],
    0.5
  );

  geom = [];
  geom.push(toDistanceBearing(pMid, scale * 0.15, bearing + 60));
  geom.push(pMid);
  geom.push(
    toDistanceBearing(pMid, scale * 0.15, bearing + 60 + 60)
  );
  geometry.coordinates.push(geom);

  pMid = pointBetween(points[0], points[1], 0.2);
  geom = [pMid, toDistanceBearing(pMid, length, bearing + 90)];
  geometry.coordinates.push(geom);

  geom = [];
  geom.push(toDistanceBearing(pMid, scale * 0.15, bearing + 60));
  geom.push(pMid);
  geom.push(
    toDistanceBearing(pMid, scale * 0.15, bearing + 60 + 60)
  );
  geometry.coordinates.push(geom);

  pMid = pointBetween(points[0], points[1], 0.8);
  geom = [pMid, toDistanceBearing(pMid, length, bearing + 90)];
  geometry.coordinates.push(geom);

  geom = [];
  geom.push(toDistanceBearing(pMid, scale * 0.15, bearing + 60));
  geom.push(pMid);
  geom.push(
    toDistanceBearing(pMid, scale * 0.15, bearing + 60 + 60)
  );
  geometry.coordinates.push(geom);

  return { geometry: geometry, annotations: annotations };
}

module.exports = clear;
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