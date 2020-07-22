const { calc } = require("../../../graphics/math");

function fix(turnPlane, properties, bcompleted) {
    let a = properties.annotations;
    return turnPlane.map((prev, points, index, buffer) => {
        if (index == 0) {
            let s = properties.pixelBySize;
            let reqMinLength = s.zigzag + s.sm + s.em;
            let lineLength = calc.distance(points[0], points[1]);
            let zl, ms, me;
            if (lineLength >= reqMinLength) {
                zl = s.zigzag;
                ms = (lineLength - zl) / 2;
                me = (lineLength - zl) / 2;
            } else {
                zl = (lineLength * s.zigzag) / reqMinLength;
                ms = (lineLength * s.sm) / reqMinLength;
                me = (lineLength * s.em) / reqMinLength;
            }
            //let divs = [points[index]];
            let div = zl / 11;
            let ret = [calc.arrow(turnPlane, { x: 0, y: ms }, points[index], s.arrow)];
            let divs = [points[index]];
            for (let i = 0; i < 11; i++) {
                divs.push({ x: 0, y: ms + (div * i) });
                divs.push({ x: ((i % 2 == 0) ? 1 : -1) * s.width / 2, y: ms + div * i + div / 2 });
            }
            //divs.push({ x: 0, y: ms + zl });

            calc.annotationOnLine(a, "f", 0.5, { x: 0, y: ms + zl }, points[index + 1], false, (i, g) => {
                if (i == 0) {
                    g.geometry = divs.concat(g.geometry);
                } else {
                    //ret.push(g);
                }
            }).forEach(g => { ret.push(g); });
            return ret;

        }
    }).end();
}

module.exports = {
    modular: fix,
    minPointCount: 2,
    maxPointCount: 2,
    properties: {
        size: {
            fontsize: 20,
            arrow: 20, //화살표 한쪽 선의 길이
            zigzag: 100, //zigzag 
            sm: 20, // 화살표가 있는 시작점과 zigzag 시작점의 최소 길이
            em: 20,
            width: 40
        },
        annotations: {
            f: {
                value: "F",
                anchor: { x: 0, y: 0 }
            }
        }
    }

};