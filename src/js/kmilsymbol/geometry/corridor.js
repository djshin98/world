const toDistanceBearing = require("./toDistanceBearing");
const bearingBetween = require("./bearingBetween");
const bearingBetween = require("./bearingBetween");

// Draws a corridor with a widht in meters
function corridor(feature) {
    var direction;
    var points = feature.geometry.coordinates;
    var width = feature.properties.distance;
    var geometry = { type: "Polygon" };
    geometry.coordinates = [
        []
    ];
    direction = (bearingBetween(points[0], points[1]) + 360) % 360;
    geometry.coordinates[0].push(
        toDistanceBearing(points[0], width / 2, direction - 90)
    );
    for (var j = 1; j < points.length - 1; j++) {
        var direction1 =
            (bearingBetween(points[j], points[j - 1]) + 360) % 360;
        var direction2 =
            (bearingBetween(points[j], points[j + 1]) + 360) % 360;
        var factor = 1 / Math.sin((direction2 - direction1) / 2 * (Math.PI / 180));
        geometry.coordinates[0].push(
            toDistanceBearing(
                points[j],
                width / 2 * factor,
                (direction1 + direction2) / 2
            )
        );
    }

    direction =
        (bearingBetween(
                points[points.length - 1],
                points[points.length - 2]
            ) +
            180) %
        360;
    geometry.coordinates[0].push(
        toDistanceBearing(
            points[points.length - 1],
            width / 2,
            direction - 90
        )
    );
    geometry.coordinates[0].push(
        toDistanceBearing(
            points[points.length - 1],
            width / 2,
            direction + 90
        )
    );

    for (j = points.length - 2; j > 0; j--) {
        direction1 =
            (bearingBetween(points[j], points[j - 1]) + 360) % 360;
        direction2 =
            (bearingBetween(points[j], points[j + 1]) + 360) % 360;
        factor = 1 / Math.sin((direction2 - direction1) / 2 * (Math.PI / 180));
        geometry.coordinates[0].push(
            toDistanceBearing(
                points[j], -(width / 2) * factor,
                (direction1 + direction2) / 2
            )
        );
    }

    direction = (bearingBetween(points[0], points[1]) + 360) % 360;
    geometry.coordinates[0].push(
        toDistanceBearing(points[0], width / 2, direction + 90)
    );
    geometry.coordinates[0].push(
        toDistanceBearing(points[0], width / 2, direction - 90)
    ); //Close line
    return { geometry: geometry };
}

module.exports = corridor;