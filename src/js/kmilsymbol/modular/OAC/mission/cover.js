const { calc, rect } = require("../../../graphics/math");
const { pass } = require("../../../graphics/prework");

function cover(turnPlane, properties, bcompleted) {
    let arrowSize = properties.pixelBySize.arrow;
    let a = properties.annotations;
    let aname = "s"
    if (properties.log == "G-T-US") {
        aname = "s"
    } else if (properties.log == "G-T-UG") {
        aname = "g"
    } else if (properties.log == "G-T-UC") {
        aname = "c"
    } else if (properties.log == "G-T-UP") {
        aname = "p"
    }

    let orders = [
        [0, 1],
        [0, 2],
    ];

    return turnPlane.map((prev, points, index, buffer) => {

    }, pass, orders).end();

}


module.exports = {
    modular: cover,
    minPointCount: 2,
    maxPointCount: 3,
    properties: {
        size: {
            arrow: 20,
        },
        annotations: {
            a: {
                value: "{A}",
                anchor: { x: 0, y: 0 }
            },
            s: {
                value: "S",
                anchor: { x: 0, y: 0 }
            },
            g: {
                value: "G",
                anchor: { x: 0, y: 0 }
            },
            c: {
                value: "C",
                anchor: { x: 0, y: 0 }
            },
            p: {
                value: "P",
                anchor: { x: 0, y: 0 }
            }
        }
    }
};