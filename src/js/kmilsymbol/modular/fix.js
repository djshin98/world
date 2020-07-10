/*const bearingBetween = require("../geometry/bearingbetween");
const pointBetween = require("../geometry/pointbetween");
const toDistanceBearing = require("../geometry/todistancebearing");
const distanceBetween = require("../geometry/distancebetween");

function fix(feature) {
  //var direction, width;
  var points = feature.geometry.coordinates;

  var length = distanceBetween(points[0], points[1]);
  var bearing = bearingBetween(points[0], points[1]);
  var widht = length * 0.10;

  var geometry = { type: "MultiLineString" };

  geometry.coordinates = [];

  var geometry1 = [];

  geometry1.push(points[0]);

  geometry1.push(pointBetween(points[0], points[1], 0.2));

  geometry1.push(
    toDistanceBearing(
      pointBetween(points[0], points[1], 0.25),
      widht,
      bearing + 90
    )
  );
  geometry1.push(
    toDistanceBearing(
      pointBetween(points[0], points[1], 0.3),
      widht,
      bearing - 90
    )
  );
  geometry1.push(
    toDistanceBearing(
      pointBetween(points[0], points[1], 0.35),
      widht,
      bearing + 90
    )
  );
  geometry1.push(
    toDistanceBearing(
      pointBetween(points[0], points[1], 0.4),
      widht,
      bearing - 90
    )
  );
  geometry1.push(
    toDistanceBearing(
      pointBetween(points[0], points[1], 0.45),
      widht,
      bearing + 90
    )
  );
  geometry1.push(
    toDistanceBearing(
      pointBetween(points[0], points[1], 0.5),
      widht,
      bearing - 90
    )
  );
  geometry1.push(
    toDistanceBearing(
      pointBetween(points[0], points[1], 0.55),
      widht,
      bearing + 90
    )
  );
  geometry1.push(
    toDistanceBearing(
      pointBetween(points[0], points[1], 0.6),
      widht,
      bearing - 90
    )
  );
  geometry1.push(
    toDistanceBearing(
      pointBetween(points[0], points[1], 0.65),
      widht,
      bearing + 90
    )
  );
  geometry1.push(
    toDistanceBearing(
      pointBetween(points[0], points[1], 0.7),
      widht,
      bearing - 90
    )
  );
  geometry1.push(
    toDistanceBearing(
      pointBetween(points[0], points[1], 0.75),
      widht,
      bearing + 90
    )
  );

  geometry1.push(pointBetween(points[0], points[1], 0.8));

  geometry1.push(points[1]);

  var geometry2 = [];
  geometry2.push(
    toDistanceBearing(points[0], widht * 1.5, bearing + 45)
  );
  geometry2.push(points[0]);
  geometry2.push(
    toDistanceBearing(points[0], widht * 1.5, bearing - 45)
  );

  geometry.coordinates = [geometry1, geometry2];
  return { geometry: geometry };
}

module.exports = fix;
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