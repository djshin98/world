function block(turnPlane, properties, bcompleted) {
    if (properties.sidc.equal("G-G-OLAV")) {
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
    } else if (properties.sidc.equal("G-G-OLAA")) {
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