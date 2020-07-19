const { calc } = require("../graphics/math");

function antitank_under_construction(turnPlane, properties, bcompleted) {
    return turnPlane.map((prev, points, index, buffer) => {
        let distance = calc.distance(points[index], points[index + 1]);
        let result = [];

        for (let i = 1; i < distance / properties.pixelBySize.arrow; i++) {
            let p1 = { x: 0, y: (i * properties.pixelBySize.arrow) };
            let p2 = { x: -(properties.pixelBySize.arrow), y: (i * properties.pixelBySize.arrow) };
            let arrow = calc.arrow(turnPlane, p1, p2, properties.pixelBySize.arrow);
            result = result.concat(arrow.geometry);
        }

        return {
            type: "polyline",
            geometry: result
        };
    }).end();
}

module.exports = {
    modular: antitank_under_construction,
    minPointCount: 1,
    properties: {
        size: {
            arrow: 50, //화살표 한쪽 선의 길이
        },
        pixelBySize: {}
    }
};