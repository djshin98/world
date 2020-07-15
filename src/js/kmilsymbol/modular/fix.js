const { calc } = require("../graphics/math");

function fix(turnPlane, properties, bcompleted) {
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
            let divs = [points[index]];
            let div = zl / 11;
            for (let i = 0; i < 11; i++) {
                divs.push({ x: 0, y: ms + (div * i) });
                divs.push({ x: ((i % 2 == 0) ? 1 : -1) * s.width / 2, y: ms + div * i + div / 2 });
            }
            divs.push({ x: 0, y: ms + zl });
            divs.push(points[index + 1]);

            let fr = s.fontsize / 2;
            let tc = { x: 0, y: (points[index + 1].y + ms + zl) / 2 };
            let rect = [
                calc.move(tc, fr, -fr),
                calc.move(tc, fr, fr),
                calc.move(tc, -fr, fr),
                calc.move(tc, -fr, -fr)
            ];
            return [{
                type: "polyline",
                geometry: [
                    calc.move(points[index], -s.arrow, s.arrow), points[index], calc.move(points[index], s.arrow, s.arrow)
                ]
            }, {
                type: "polyline",
                geometry: divs
            }];
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
            arrow: 10, //화살표 한쪽 선의 길이
            zigzag: 100, //zigzag 
            sm: 20, // 화살표가 있는 시작점과 zigzag 시작점의 최소 길이
            em: 20,
            width: 40
        },
        pixelBySize: {}
    }

};