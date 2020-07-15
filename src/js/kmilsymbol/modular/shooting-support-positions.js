"use strict";
const { calc } = require("../graphics/math");

function shooting_support_position(turnPlane, properties, bcompleted) {
    return turnPlane.map((prev, points, index, buffer) => {
        let distance = calc.distance(points[0], points[1]);
        let width = distance / 3;
        let pts = [];
        if (index == 0) {
            return {
                type: "polyline",
                geometry: [{ x: -width, y: -width }, points[0], points[1], { x: -width, y: points[1].y + width }]
            };
        } else if (index == 1) {
            pts = [points[0], points[2]];
        } else if (index == 2) {
            pts = [points[1], points[3]];
        }
        let aPoints = calc.arrow(turnPlane, pts[0], pts[1], properties.pixelBySize.arrow, 30);
        return [{
            type: "polyline",
            geometry: pts
        }, {
            type: "polyline",
            geometry: aPoints.geometry
        }];
    }).end();
}

module.exports = {
    modular: shooting_support_position,
    minPointCount: 2,
    maxPointCount: 4,
    properties: {
        size: {
            arrow: 20, //화살표 한쪽 선의 길이
        },
        pixelBySize: {}
    }
};