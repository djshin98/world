const bearingBetween = require("../geometry/bearingbetween");
const pointBetween = require("../geometry/pointbetween");
const toDistanceBearing = require("../geometry/todistancebearing");

function eliminationOfObstacle(feature) {

    var annotations = [{}];
    var points = feature.geometry.coordinates;
    var geometry = { type: "MultiLineString" };
    var bearing = bearingBetween(points[0], points[1]);

    var scale = distanceBetween(points[0], points[1]);
    var pMid = pointBetween(points[0], points[1], 0.5);
    var length = distanceBetween(pMid, points[2]);

    var geom = [points[0]];
    geom.push(toDistanceBearing(points[0], length, bearing + 90));
    geometry.coordinates.push(geom);
    
    geom = [points[pMid]];
    geom.push(toDistanceBearing(pMid, length, bearing + 90));
    geometry.coordinates.push(geom);
    
    geom = [points[2]];
    geom.push(toDistanceBearing(points[2], length, bearing + 90));
    geometry.coordinates.push(geom);
    


    geom = [points[0]];
    geom.push(toDistanceBearing(points[0], scale+3, bearing - 180));
    geometry.coordinates.push(geom);

    geom = [points[2]];
    geom.push(toDistanceBearing(points[2], scale+3, bearing));
    geometry.coordinates.push(geom);

}


module.exports = eliminationOfObstacle;