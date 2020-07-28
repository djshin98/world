const { calc } = require("../../../graphics/math");

function route(turnPlane, properties, bcompleted) {

    let aname = "lrm";
    if (properties.log === "G-S-LRM") {
        aname = "lrm";
    } else if (properties.log === "G-S-LRA") {
        aname = "lra";
    } else if (properties.log === "G-S-LRO") {
        aname = "lro";
    } else if (properties.log === "G-S-LRT") {
        aname = "lrt";
    } else if (properties.log === "G-S-LRW") {
        aname = "lrw";
    }
    let s = properties.pixelBySize;
    let a = properties.annotations;

    return turnPlane.reduce((prev, p, i, buffer) => {

        ret = [{
            type: "polyline",
            geometry: p
        }];
        if (bcompleted === true && i == p.length - 2) {
            let centerIndex = parseInt((p.length - 1) / 2);
            turnPlane.turnStack(p, centerIndex, centerIndex + 1, (cp) => {
                if (properties.log === "G-S-LRO") {
                    let grp = [];
                    let ah = -a[aname].height / 2;
                    let ann = calc.annotation(a, aname, { x: -a[aname].height, y: cp[centerIndex + 1].y / 2 });
                    grp.push(ann);
                    calc.arrowLine(turnPlane, { x: ah, y: ann.geometry[0].y }, { x: ah, y: ann.geometry[1].y }, s.arrow).forEach(g => { grp.push(g); });
                    return grp;
                } else if (properties.log === "G-S-LRT") {
                    let grp = [];
                    let ah = -a[aname].height / 2;
                    let ann = calc.annotation(a, aname, { x: -a[aname].height, y: cp[centerIndex + 1].y / 2 });
                    let pt1 = { x: ah, y: ann.geometry[0].y };
                    let pt2 = { x: ah, y: ann.geometry[1].y };
                    calc.annotationOnLine(a, "alt", 0.5, pt1, pt2, undefined, (i, g) => {
                        if (i == 0) {
                            grp.push(calc.arrow(turnPlane, g.geometry[1], g.geometry[0], s.arrow, 30));
                        } else {
                            grp.push(calc.arrow(turnPlane, g.geometry[0], g.geometry[1], s.arrow, 30));
                        }
                    }).forEach(g => { grp.push(g); });
                    grp.push(ann);
                    return grp;
                } else if (properties.log === "G-S-LRW") {
                    let grp = [];
                    let ah1 = -a[aname].height;
                    let ah2 = -a[aname].height / 2;
                    let ann = calc.annotation(a, aname, { x: -a[aname].height * 3 / 2, y: cp[centerIndex + 1].y / 2 });
                    calc.arrowLine(turnPlane, { x: ah1, y: ann.geometry[0].y }, { x: ah1, y: ann.geometry[1].y }, s.arrow).forEach(g => { grp.push(g); });
                    calc.arrowLine(turnPlane, { x: ah2, y: ann.geometry[1].y }, { x: ah2, y: ann.geometry[0].y }, s.arrow).forEach(g => { grp.push(g); });
                    grp.push(ann);
                    return grp;
                } else {
                    return [calc.annotation(a, aname, { x: -a[aname].height * 2 / 3, y: cp[centerIndex + 1].y / 2 })];
                }

            }).forEach(g => { ret.push(g); });
        }
        return ret;

    }).end();
}

module.exports = {
    modular: route,
    minPointCount: 2,
    properties: {
        size: {
            arrow: 10,
            width: 40,
            fontsize: 20
        },
        pixelBySize: {},
        annotations: {
            lrm: {
                filter: ["G-S-LRM"],
                value: "MSR {T}",
                anchor: { x: 0.5, y: 0 }
            },
            lra: {
                filter: ["G-S-LRA"],
                value: "ASR {T}",
                anchor: { x: 0, y: 0 }
            },
            lro: {
                filter: ["G-S-LRO"],
                value: "MSR {T}",
                anchor: { x: 0, y: 0 }
            },
            lrt: {
                filter: ["G-S-LRT"],
                value: "MSR {T}",
                anchor: { x: 0, y: 0 }
            },
            lrw: {
                filter: ["G-S-LRW"],
                value: "MSR {T}",
                anchor: { x: 0, y: 0 }
            },
            alt: {
                filter: ["G-S-LRT"],
                fontSize: 10,
                value: "ALT",
                anchor: { x: 0, y: 0 }
            }
        },
        variables: { // 사용자가 변경할 수 있다.
            T: "ALPHA"
        }
    }
};