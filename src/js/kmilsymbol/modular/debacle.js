const bearingBetween = require("../geometry/bearingbetween");
const pointBetween = require("../geometry/pointbetween");
const toDistanceBearing = require("../geometry/todistancebearing");

function debacle(feature) {
    //var direction, width;
    var annotations = [{}];

    var points = feature.geometry.coordinates;
    var geometry = { type: "MultiLineString" };
    var scale = distanceBetween(points[0], points[1]);
    var pMid = pointBetween(points[0], points[1], 0.5);
    var pMidStart = toDistanceBearing(pMid, length / 4, bearing + 90);
    var pMidEnd = toDistanceBearing(pMid, length / 4 * 3, bearing - 90);
    var length = distanceBetween(pMid, points[2]);
    var bearing = bearingBetween(points[0], points[1]);

    geometry.coordinates = [];

    var geom = [points[0], points[1]];
    geometry.coordinates.push(geom);

    goem = [points[0]];
    geometry.coordinates.push(toDistanceBearing(points[0], length / 4 * 2, bearing - 90));
    geometry.coordinates.push(geom);

    goem = [pMidStart];
    geometry.coordinates.push(pMidEnd);
    geometry.coordinates.push(geom);

    goem = [points[1]];
    geometry.coordinates.push(toDistanceBearing(points[1], length / 4 * 4, bearing - 90));
    geometry.coordinates.push(geom);

    annotations[0].geometry = { type: "Point" };
    annotations[0].properties = {};
    annotations[0].properties.text = "D";
    annotations[0].geometry.coordinates = pointBetween(pMidStart, pMidEnd, 0.5);

    return { geometry: geometry, annotations: annotations };
}

module.exports = debacle;