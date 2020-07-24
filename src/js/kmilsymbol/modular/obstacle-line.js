const { calc } = require("../graphics/math");

function obstacle_line(turnPlane, properties, bcompleted) {
    return turnPlane.map((prev, points, index, buffer) => {
        let distance = calc.distance(points[index], points[index + 1]);
        let a = properties.pixelBySize;
        let result = [];

        if (properties.log == "G-M-OGL") {
            result.push(points[index]);
            for (let i = 1; i < distance / properties.pixelBySize.arrow; i++) {
                if ((i + 1) * a.arrow < distance) {
                    if (i % 2 == 0) {
                        result.push({ x: 0, y: i * a.arrow });
                        result.push({ x: -a.arrow, y: i * a.arrow + a.arrow / 2 });
                        result.push({ x: 0, y: (i + 1) * a.arrow });
                    } else {
                        result.push({ x: 0, y: i * a.arrow });
                        result.push({ x: 0, y: (i + 1) * a.arrow });
                    }
                }
            }
            result.push(points[index + 1]);
        } else if (properties.log == "G-M-OAW") {
            result.push(points[index]);
            for (let i = 1; i < distance / properties.pixelBySize.arrow; i++) {
                if ((i + 1) * a.arrow < distance) {
                    if (i % 2 == 0) {
                        result.push({ x: 0, y: i * a.arrow });
                        result.push({ x: a.arrow, y: i * a.arrow + a.arrow / 2 });
                        result.push({ x: 0, y: (i + 1) * a.arrow });
                    } else {
                        result.push({ x: 0, y: i * a.arrow });
                        result.push({ x: 0, y: (i + 1) * a.arrow });
                    }
                }
            }
            result.push(points[index + 1]);
        }

        return {
            type: "polyline",
            geometry: result
        };
    }).end();
}

module.exports = {
    modular: obstacle_line,
    minPointCount: 1,
    properties: {
        size: {
            arrow: 20, //화살표 한쪽 선의 길이
        },
        pixelBySize: {}
    }
};