const { calc, rect } = require("../../../graphics/math");

function airspaceCoordinationArea(turnPlane, properties, bcompleted) {

    return turnPlane.reduce((prev, p, i, buffer) => {
        if (properties.log == "G-F-ACAC") {


        }
    }).end();
}

module.exports = {
    modular: airspaceCoordinationArea,
    minPointCount: 1,
    maxPointCount: 2,
    properties: {
        annotations: {
            k: {
                value: "{N}\nACA \n{T} \nMIN ALT: {X}  \nMIX ALT: {X1} \nGrids : {H2} \nEFF: {W} \n{W1}",
                anchor: { x: 0, y: 0 }
            },
        }
    }
};