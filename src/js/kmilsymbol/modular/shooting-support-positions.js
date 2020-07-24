const { calc } = require("../graphics/math");

function shooting_support_position(turnPlane, properties, bcompleted) {
    return turnPlane.map((prev, points, index, buffer) => {
        distance = calc.distance(points[0], points[1]);
        width = distance / 3;

        if (index == 0) {
            /*
            let aPoints = calc.arrow(turnPlane, points[0], points[1], properties.pixelBySize.arrow);
            points = points.concat(aPoints.geometry);
            return [{
                type: "polyline",
                geometry: points
            }];
            */

            return {
                type: "polyline",
                geometry: [{ x: -width, y: -width }, points[0], points[1], { x: -width, y: points[1].y + width }]
            };
        } else if (index == 1) {
            let aPoints = calc.arrow(turnPlane, points[0], points[2], properties.pixelBySize.arrow);
            let result = [points[0], points[2]];
            result = result.concat(aPoints.geometry);

            return {
                type: "polyline",
                geometry: result
            };
        } else if (index == 2) {
            let aPoints = calc.arrow(turnPlane, points[1], points[3], properties.pixelBySize.arrow);
            let result = [points[1], points[3]];
            result = result.concat(aPoints.geometry);

            return {
                type: "polyline",
                geometry: result
            };
        }
    }).end();
}

module.exports = {
    modular: shooting_support_position,
    minPointCount: 2,
    maxPointCount: 4,
    properties: {
        size: {
            arrow: 10, //화살표 한쪽 선의 길이
        },
        pixelBySize: {}
    }

};