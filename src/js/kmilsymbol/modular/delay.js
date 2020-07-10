/*const bearingBetween = require("../geometry/bearingbetween");
const pointBetween = require("../geometry/pointbetween");
const toDistanceBearing = require("../geometry/todistancebearing");
const distanceBetween = require("../geometry/distancebetween");

function delay(feature) {
  var annotations = [{}];
  var directionFactor = -1;
  var points = feature.geometry.coordinates;

  var width = distanceBetween(points[1], points[2]);
  var bearing = bearingBetween(points[0], points[1]);

  var geometry = { type: "MultiLineString" };

  geometry.coordinates = [];

  var geometry1 = [];
  geometry1.push(points[0]);
  geometry1.push(points[1]);
  //console.log('arrow bearing ' + bearing)
  //console.log('fjomp bearing ' + bearingBetween(points[1],points[2]))

  var midpoint = pointBetween(points[1], points[2], 0.5);
  var curveBearing = bearingBetween(points[1], points[2]);
  if (curveBearing < 0 && bearing < 0) directionFactor = 1; // OK
  //if (curveBearing > 0 && bearing < 0)directionFactor = -1; // OK
  //if (curveBearing < 0 && bearing > 0)directionFactor = -1; // OK
  //if (curveBearing > 0 && bearing > 0)directionFactor = -1; // OK
  //var directionFactor = (Math.abs(curveBearing)/curveBearing)*(Math.abs(bearing)/bearing);

  for (var i = 10; i < 180; i += 10) {
    geometry1.push(
      toDistanceBearing(
        midpoint,
        width / 2,
        curveBearing + i * directionFactor + 180
      )
    );
  }

  geometry1.push(points[2]);

  var geometry2 = [];
  geometry2.push(
    toDistanceBearing(points[0], width * 0.4, bearing + 45)
  );
  geometry2.push(points[0]);
  geometry2.push(
    toDistanceBearing(points[0], width * 0.4, bearing - 45)
  );

  geometry.coordinates = [geometry1, geometry2];

  annotations[0].geometry = { type: "Point" };
  annotations[0].properties = {};
  annotations[0].properties.text = feature.properties.dtg
    ? feature.properties.dtg + "\n"
    : "";
  annotations[0].properties.text += "D";
  annotations[0].geometry.coordinates = pointBetween(
    points[0],
    points[1],
    0.5
  );

  return { geometry: geometry, annotations: annotations };
}

module.exports = delay;
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