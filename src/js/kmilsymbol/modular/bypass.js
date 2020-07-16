function block(turnPlane, properties, bcompleted) {
    if (properties.log == "G-G-OLAV") {
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
    } else if (properties.log == "G-G-OLAA") {
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

}

module.exports = { modular: block, minPointCount: 2, maxPointCount: 3 };