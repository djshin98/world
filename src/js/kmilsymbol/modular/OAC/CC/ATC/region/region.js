const { calc, rect } = require("../../../../../graphics/math");

function region(turnPlane, properties, bcompleted) {

    let aname = "aar";
    let style;
    if (properties.log === "G-G-AAR") {
        aname = "aar";
    } else if (properties.log === "G-G-AAF") {
        aname = "aaf";
    } else if (properties.log === "G-G-AAH") {
        aname = "aah";
    } else if (properties.log === "G-G-AAM") {
        aname = "aam";
    } else if (properties.log === "G-G-AAML") {
        aname = "aaml";
    } else if (properties.log === "G-G-AAMH") {
        aname = "aamh";
    } else if (properties.log === "G-G-AAW") {
        aname = "aaw";
        style = "hatching";
    }
    let s = properties.pixelBySize;
    let a = properties.annotations;

    return turnPlane.reduce((prev, p, i, buffer) => {
        if (bcompleted === true && (p.length - 2) == i) {
            p.push(p[0]);
            let ret = [calc.annotation(a, aname, calc.avg(p))];
            if (Q.isValid(style)) {
                ret.push({ type: "polygon", style: style, geometry: p });
            } else {
                ret.push({ type: "polyline", geometry: p });
            }
            return ret;
        } else {
            p.push(p[0]);
            return { type: "polyline", geometry: p };
        }
    }).end();
}

module.exports = {
    modular: region,
    minPointCount: 2,
    properties: {
        size: {
            width: 40,
            fontsize: 20
        },
        pixelBySize: {},
        annotations: {
            aar: {
                value: "ROZ\n{T}\nMIN ALT: {X}\nMAX ALT: {X1}\nTIME FROM: {W}\nTIME TO: {W1}",
                anchor: { x: 0, y: 0 }
            },
            aaf: {
                value: "SHORADEZ\n{T}\nMIN ALT: {X}\nMAX ALT: {X1}\nTIME FROM: {W}\nTIME TO: {W1}",
                anchor: { x: 0, y: 0 }
            },
            aah: {
                value: "HIDACZ\n{T}\nMIN ALT: {X}\nMAX ALT: {X1}\nTIME FROM: {W}\nTIME TO: {W1}",
                anchor: { x: 0, y: 0 }
            },
            aam: {
                value: "MEZ\n{T}\nMIN ALT: {X}\nMAX ALT: {X1}\nTIME FROM: {W}\nTIME TO: {W1}",
                anchor: { x: 0, y: 0 }
            },
            aaml: {
                value: "LOMEZ\n{T}\nMIN ALT: {X}\nMAX ALT: {X1}\nTIME FROM: {W}\nTIME TO: {W1}",
                anchor: { x: 0, y: 0 }
            },
            aamh: {
                value: "HIMEZ\n{T}\nMIN ALT: {X}\nMAX ALT: {X1}\nTIME FROM: {W}\nTIME TO: {W1}",
                anchor: { x: 0, y: 0 }
            },
            aaw: {
                value: "WFZ\n{T}\nTIME FROM: {W}\nTIME TO: {W1}",
                anchor: { x: 0, y: 0 }
            }
        },
        variables: { // 사용자가 변경할 수 있다.
            T: "무인항공기비행경로",
            AM: 100,
            X: 1000,
            X1: 2000,
            W: "{DTGSTART}",
            W1: "{DTGEND}"
        }
    }
};