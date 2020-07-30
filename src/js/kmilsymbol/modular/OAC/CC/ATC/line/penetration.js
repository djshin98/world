const { calc, rect } = require("../../../../../graphics/math");

function penetration(turnPlane, properties, bcompleted) {
    return turnPlane.map((prev, p, i, buffer) => {
        let s = properties.pixelBySize;
        let a = properties.annotations;
        let distance = calc.distance(p[0], p[1]);
        let len = s.width / 7;
        let count = distance / len;

        let result = [];
        let points = [];
        let points2 = [];
        if (i == 0) {
            if (p[2]) {
                let width = p[2].x;
                for (let i = 0; i < count; i++) {
                    if (i % 26 == 0) {
                        points.push({ x: (-s.width / 5 * 0) - width, y: i * len });
                        points.push({ x: (-s.width / 5 * 1) - width, y: (i + 1) * len });
                        points.push({ x: (-s.width / 5 * 2) - width, y: (i + 2) * len });
                        points.push({ x: (-s.width / 5 * 3) - width, y: (i + 3) * len });
                        points.push({ x: (-s.width / 5 * 4) - width, y: (i + 4) * len });
                        points.push({ x: (-s.width / 5 * 4) - width, y: (i + 5) * len });
                        points.push({ x: (-s.width / 5 * 5) - width, y: (i + 6) * len });
                        points.push({ x: (-s.width / 5 * 5) - width, y: (i + 7) * len });
                        points.push({ x: (-s.width / 5 * 4) - width, y: (i + 8) * len });
                        points.push({ x: (-s.width / 5 * 4) - width, y: (i + 9) * len });
                        points.push({ x: (-s.width / 5 * 3) - width, y: (i + 10) * len });
                        points.push({ x: (-s.width / 5 * 2) - width, y: (i + 11) * len });
                        points.push({ x: (-s.width / 5 * 1) - width, y: (i + 12) * len });
                        points.push({ x: (-s.width / 5 * 0) - width, y: (i + 13) * len });
                        points.push({ x: (-s.width / 5 * -1) - width, y: (i + 14) * len });
                        points.push({ x: (-s.width / 5 * -2) - width, y: (i + 15) * len });
                        points.push({ x: (-s.width / 5 * -3) - width, y: (i + 16) * len });
                        points.push({ x: (-s.width / 5 * -4) - width, y: (i + 17) * len });
                        points.push({ x: (-s.width / 5 * -4) - width, y: (i + 18) * len });
                        points.push({ x: (-s.width / 5 * -5) - width, y: (i + 19) * len });
                        points.push({ x: (-s.width / 5 * -5) - width, y: (i + 20) * len });
                        points.push({ x: (-s.width / 5 * -4) - width, y: (i + 21) * len });
                        points.push({ x: (-s.width / 5 * -4) - width, y: (i + 22) * len });
                        points.push({ x: (-s.width / 5 * -3) - width, y: (i + 23) * len });
                        points.push({ x: (-s.width / 5 * -2) - width, y: (i + 24) * len });
                        points.push({ x: (-s.width / 5 * -1) - width, y: (i + 25) * len });

                        points2.push({ x: (-s.width / 5 * 0) + width, y: i * len });
                        points2.push({ x: (-s.width / 5 * 1) + width, y: (i + 1) * len });
                        points2.push({ x: (-s.width / 5 * 2) + width, y: (i + 2) * len });
                        points2.push({ x: (-s.width / 5 * 3) + width, y: (i + 3) * len });
                        points2.push({ x: (-s.width / 5 * 4) + width, y: (i + 4) * len });
                        points2.push({ x: (-s.width / 5 * 4) + width, y: (i + 5) * len });
                        points2.push({ x: (-s.width / 5 * 5) + width, y: (i + 6) * len });
                        points2.push({ x: (-s.width / 5 * 5) + width, y: (i + 7) * len });
                        points2.push({ x: (-s.width / 5 * 4) + width, y: (i + 8) * len });
                        points2.push({ x: (-s.width / 5 * 4) + width, y: (i + 9) * len });
                        points2.push({ x: (-s.width / 5 * 3) + width, y: (i + 10) * len });
                        points2.push({ x: (-s.width / 5 * 2) + width, y: (i + 11) * len });
                        points2.push({ x: (-s.width / 5 * 1) + width, y: (i + 12) * len });
                        points2.push({ x: (-s.width / 5 * 0) + width, y: (i + 13) * len });
                        points2.push({ x: (-s.width / 5 * -1) + width, y: (i + 14) * len });
                        points2.push({ x: (-s.width / 5 * -2) + width, y: (i + 15) * len });
                        points2.push({ x: (-s.width / 5 * -3) + width, y: (i + 16) * len });
                        points2.push({ x: (-s.width / 5 * -4) + width, y: (i + 17) * len });
                        points2.push({ x: (-s.width / 5 * -4) + width, y: (i + 18) * len });
                        points2.push({ x: (-s.width / 5 * -5) + width, y: (i + 19) * len });
                        points2.push({ x: (-s.width / 5 * -5) + width, y: (i + 20) * len });
                        points2.push({ x: (-s.width / 5 * -4) + width, y: (i + 21) * len });
                        points2.push({ x: (-s.width / 5 * -4) + width, y: (i + 22) * len });
                        points2.push({ x: (-s.width / 5 * -3) + width, y: (i + 23) * len });
                        points2.push({ x: (-s.width / 5 * -2) + width, y: (i + 24) * len });
                        points2.push({ x: (-s.width / 5 * -1) + width, y: (i + 25) * len });
                    }
                }
                result.push({ type: "polyline", geometry: points });
                result.push({ type: "polyline", geometry: points2 });

                result.push(calc.annotation(a, "t", calc.mid(p[0], p[1])));
            } else {
                for (let i = 0; i < count; i++) {
                    if (i % 26 == 0) {
                        points.push({ x: -s.width / 5 * 0, y: i * len });
                        points.push({ x: -s.width / 5 * 1, y: (i + 1) * len });
                        points.push({ x: -s.width / 5 * 2, y: (i + 2) * len });
                        points.push({ x: -s.width / 5 * 3, y: (i + 3) * len });
                        points.push({ x: -s.width / 5 * 4, y: (i + 4) * len });
                        points.push({ x: -s.width / 5 * 4, y: (i + 5) * len });
                        points.push({ x: -s.width / 5 * 5, y: (i + 6) * len });
                        points.push({ x: -s.width / 5 * 5, y: (i + 7) * len });
                        points.push({ x: -s.width / 5 * 4, y: (i + 8) * len });
                        points.push({ x: -s.width / 5 * 4, y: (i + 9) * len });
                        points.push({ x: -s.width / 5 * 3, y: (i + 10) * len });
                        points.push({ x: -s.width / 5 * 2, y: (i + 11) * len });
                        points.push({ x: -s.width / 5 * 1, y: (i + 12) * len });
                        points.push({ x: -s.width / 5 * 0, y: (i + 13) * len });
                        points.push({ x: -s.width / 5 * -1, y: (i + 14) * len });
                        points.push({ x: -s.width / 5 * -2, y: (i + 15) * len });
                        points.push({ x: -s.width / 5 * -3, y: (i + 16) * len });
                        points.push({ x: -s.width / 5 * -4, y: (i + 17) * len });
                        points.push({ x: -s.width / 5 * -4, y: (i + 18) * len });
                        points.push({ x: -s.width / 5 * -5, y: (i + 19) * len });
                        points.push({ x: -s.width / 5 * -5, y: (i + 20) * len });
                        points.push({ x: -s.width / 5 * -4, y: (i + 21) * len });
                        points.push({ x: -s.width / 5 * -4, y: (i + 22) * len });
                        points.push({ x: -s.width / 5 * -3, y: (i + 23) * len });
                        points.push({ x: -s.width / 5 * -2, y: (i + 24) * len });
                        points.push({ x: -s.width / 5 * -1, y: (i + 25) * len });
                    }
                }
                result.push({ type: "polyline", geometry: points });
            }
            return result;
        }
    }).end();
}

module.exports = {
    modular: penetration,
    minPointCount: 2,
    maxPointCount: 3,
    properties: {
        size: {
            width: 10,
            fontsize: 20
        },
        annotations: {
            t: {
                value: "{T}",
                anchor: { x: 0.5, y: 0 }
            },
        },
        variables: { // 사용자가 변경할 수 있다.
            T: "텍스트"
        }
    }
};