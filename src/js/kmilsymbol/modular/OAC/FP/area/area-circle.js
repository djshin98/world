    const { calc, rect } = require("../../../../graphics/math");
    
    function areaCircle(turnPlane, properties, bcompleted) {
        return turnPlane.reduce((prev, p, i, buffer) => {
            if (properties.log == "G-F-ACAC") {
                
                    
            }
        }).end();
    }

    

    module.exports = {
        modular: airspaceCoordinationArea,
        minPointCount: 2,
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