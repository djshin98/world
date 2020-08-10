const { calc } = require("../../graphics/math");

function route(turnPlane, properties, bcompleted) {

    let aname = "lrm";
    if (properties.log === "WA-DPFCU---L") {
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
                if (properties.log === "WA-DPFCU---L") {
                    let grp = [];
                    let ah = -a[aname].height / 2;
                    let ann = calc.annotation(a, aname, { x: -a[aname].height, y: cp[centerIndex + 1].y / 2 });
                    grp.push(ann);
                    calc.arrowLine(turnPlane, { x: ah, y: ann.geometry[0].y }, { x: ah, y: ann.geometry[1].y }, s.arrow).forEach(g => { grp.push(g); });
                    return grp;
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
            }
        },
        variables: { // 사용자가 변경할 수 있다.
            T: "ALPHA"
        }
    }
};