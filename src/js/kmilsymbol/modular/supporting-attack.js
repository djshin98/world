const bearingBetween = require("../geometry/bearingbetween");
const pointBetween = require("../geometry/pointbetween");
const toDistanceBearing = require("../geometry/todistancebearing");
const distanceBetween = require("../geometry/distancebetween");
// Draws a corridor with a widht in meters
function supportingAttack(feature) {
  var direction, width;
  var points = feature.geometry.coordinates;
  var arrowHead = points.pop();
  var widthHeadRatio = 0.7;

  var geometry = { type: "LineString" };
  geometry.coordinates = [];

  var geometry1 = [];

  // Width of the arrow
  direction = bearingBetween(points[0], points[1]);
  var deltaDirection =
    direction - bearingBetween(points[0], arrowHead);
  //console.log(deltaDirection)
  var distance = distanceBetween(points[0], arrowHead);
  var arrowHead2 = toDistanceBearing(
    points[0],
    distance,
    direction + deltaDirection
  );
  width = distanceBetween(arrowHead, arrowHead2) / 2;

  direction =
    (bearingBetween(
      points[points.length - 1],
      points[points.length - 2]
    ) +
      360) %
    360;
  geometry1.push(
    toDistanceBearing(
      points[points.length - 1],
      width * widthHeadRatio,
      direction - 90
    )
  );

  for (var j = points.length - 2; j > 0; j--) {
    var direction1 =
      (bearingBetween(points[j], points[j + 1]) + 360) % 360;
    var direction2 =
      (bearingBetween(points[j], points[j - 1]) + 360) % 360;
    var factor = 1 / Math.sin((direction2 - direction1) / 2 * (Math.PI / 180));
    geometry1.push(
      toDistanceBearing(
        points[j],
        width * widthHeadRatio * factor,
        (direction1 + direction2) / 2
      )
    );
  }

  // Arrowhead
  direction = (bearingBetween(points[0], points[1]) + 180) % 360;
  geometry1.push(
    toDistanceBearing(
      arrowHead,
      width * (1 - widthHeadRatio),
      direction + 90
    )
  );
  geometry1.push(arrowHead);
  geometry1.push(points[0]);
  geometry1.push(arrowHead2);
  geometry1.push(
    toDistanceBearing(
      arrowHead2,
      width * (1 - widthHeadRatio),
      direction - 90
    )
  );

  for (j = 1; j < points.length - 1; j++) {
    direction1 =
      (bearingBetween(points[j], points[j + 1]) + 360) % 360;
    direction2 =
      (bearingBetween(points[j], points[j - 1]) + 360) % 360;
    factor = 1 / Math.sin((direction2 - direction1) / 2 * (Math.PI / 180));
    geometry1.push(
      toDistanceBearing(
        points[j],
        -(width * widthHeadRatio) * factor,
        (direction1 + direction2) / 2
      )
    );
  }

  direction =
    (bearingBetween(
      points[points.length - 1],
      points[points.length - 2]
    ) +
      360) %
    360;
  geometry1.push(
    toDistanceBearing(
      points[points.length - 1],
      width * widthHeadRatio,
      direction + 90
    )
  );

  geometry.coordinates = geometry1;
  return { geometry: geometry };
}

module.exports = supportingAttack;
