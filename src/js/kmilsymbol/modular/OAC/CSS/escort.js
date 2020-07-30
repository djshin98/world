const { calc } = require("../../../graphics/math");

function route(turnPlane, properties, bcompleted) {

    let aname = "lcm";

    let s = properties.pixelBySize;
    let a = properties.annotations;

    return turnPlane.reduce((prev, p, i, buffer) => {

        let ret = [];
        let points = [];
        let distance = calc.distance(p[0], p[1]);
        if (properties.log == "G-S-LCM") {
            let p1 = { x: -s.arrow + s.arrow / 6, y: s.arrow };
            let p2 = { x: s.arrow - s.arrow / 6, y: s.arrow };
            points.push({ x: -s.arrow, y: s.arrow });
            points.push({ x: 0, y: 0 });
            points.push({ x: s.arrow, y: s.arrow });
            points.push(p2);
            points.push({ x: s.arrow - s.arrow / 6, y: distance });
            points.push({ x: -s.arrow + s.arrow / 6, y: distance });
            points.push(p1);
            points.push({ x: -s.arrow, y: s.arrow });
            ret.push({ type: "polyline", geometry: points });
        } else if (properties.log == "G-S-LCH") {
            let p1 = { x: -s.arrow - s.arrow / 6, y: -s.arrow };
            let p2 = { x: s.arrow + s.arrow / 6, y: -s.arrow };
            points.push(p1);
            points.push(p2);
            points.push({ x: 0, y: 0 });
            points.push(p1);
            ret.push({ type: "polyline", geometry: points });
            points = [];
            points.push({ x: s.arrow, y: 0 });
            points.push({ x: s.arrow, y: distance });
            points.push({ x: -s.arrow, y: distance });
            points.push({ x: -s.arrow, y: 0 });
            points.push({ x: s.arrow, y: 0 });
            ret.push({ type: "polyline", geometry: points });
        }


        ret.push(calc.annotation(a, aname, calc.mid(p[0], p[1])));
        ret.push(calc.annotation(a, "w", { x: s.arrow + a.w.height, y: distance / 2 }));
        return ret;

    }).end();
}

module.exports = {
    modular: route,
    minPointCount: 2,
    maxPointCount: 2,
    properties: {
        size: {
            arrow: 50,
        },
        pixelBySize: {},
        annotations: {
            lcm: {
                value: "{H} {A} {H1}",
                anchor: { x: 0.0, y: 0 }
            },
            w: {
                value: "{W}-{W1}",
                anchor: { x: 0.0, y: 0 }
            }
        },
        variables: { // 사용자가 변경할 수 있다.
            H: "M1A1",
            A: "ALPHA",
            H1: "12",
            W: "W",
            W1: "W1"
        }
    }
};