const { calc, rect } = require("../../../graphics/math");

function route(turnPlane, properties, bcompleted) {

    let aname = "b";
    if (properties.log === "G-O-B") {
        aname = "b";
    } else if (properties.log === "G-O-BE") {
        aname = "e";
    } else if (properties.log === "G-O-BA") {
        aname = "a";
    } else if (properties.log === "G-O-BT") {
        aname = "t";
    } else if (properties.log === "G-O-BO") {
        aname = "o";
    }
    let s = properties.pixelBySize;
    let a = properties.annotations;

    return turnPlane.map((prev, p, i, buffer) => {
        return calc.annotationOnLine(a, aname, 0.5, p[0], p[1]);
    }).end();
}

module.exports = {
    modular: route,
    minPointCount: 2,
    maxPointCount: 2,
    properties: {

        annotations: {
            b: {
                filter: ["G-O-B"],
                value: "B",
                anchor: { x: 0, y: 0 }
            },
            e: {
                filter: ["G-O-BE"],
                value: "E",
                anchor: { x: 0, y: 0 }
            },
            a: {
                filter: ["G-O-BA"],
                value: "A",
                anchor: { x: 0, y: 0 }
            },
            t: {
                filter: ["G-O-BT"],
                value: "T",
                anchor: { x: 0, y: 0 }
            },
            o: {
                filter: ["G-O-BO"],
                value: "O",
                anchor: { x: 0, y: 0 }
            }
        }
    }
};