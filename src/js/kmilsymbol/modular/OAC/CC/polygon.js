const { calc } = require("../../../graphics/math");

function bypass(turnPlane, properties, bcompleted) {
    return turnPlane.map((prev, point, i, buffer) => {
        // let s = properties.pixelBySize;
        if (i == 0) {

            point.push(point[0]);

            return [{
                type: "polygon",
                geometry: point
            }];
        }


    }).end();
}

module.exports = {
    modular: bypass,
    minPointCount: 3,

};