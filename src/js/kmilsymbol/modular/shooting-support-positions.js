const { calc } = require("../graphics/math");

function shooting_support_position(turnPlane, properties, bcompleted) {
    return turnPlane.map((prev, points, index, buffer) => {
        if (index == 0) {
            let aPoints = calc.arrow(turnPlane, points[0], points[1], properties.pixelBySize.arrow);
            points = points.concat(aPoints.geometry);
            return [{
                type: "polyline",
                geometry: points
            }];
        }
    }).end();
}

module.exports = {
    modular: shooting_support_position,
    minPointCount: 1,
    maxPointCount: 4,
    properties: {
        size: {
            fontsize: 20,
            arrow: 10, //화살표 한쪽 선의 길이
            zigzag: 100, //zigzag 
            sm: 20, // 화살표가 있는 시작점과 zigzag 시작점의 최소 길이
            em: 20,
            width: 40
        },
        pixelBySize: {}
    }

};