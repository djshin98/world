const { calc } = require("../../../../graphics/math");

function barrier(turnPlane, properties, bcompleted) {
    let arrowSize = properties.pixelBySize.arrow;
    let arrowSizeY = arrowSize * 2 / 3;
    if (properties.log == 'G-M-OS') {
        return turnPlane.map((prev, points, index, buffer) => {
            if (Math.abs(points[index].y - points[index + 1].y) >= (arrowSizeY * 2)) {
                return {
                    type: "polyline",
                    geometry: [points[index], { x: -arrowSize, y: arrowSizeY }, { x: 0, y: arrowSizeY * 2 }, points[index + 1]]
                };
            }
        }).end();
    } else if (properties.log == 'G-M-OADU') {
        return turnPlane.map((prev, points, index, buffer) => {
            let length = points[index + 1].y - points[index].y;
            if (Math.abs(length) >= (arrowSizeY * 2)) {
                let pts = [points[index]];
                for (let i = 0; i < length - arrowSizeY * 2; i += arrowSizeY * 2) {
                    pts.push({ x: -arrowSize, y: i + arrowSizeY });
                    pts.push({ x: 0, y: (i + arrowSizeY * 2) });
                }
                pts.push(points[index + 1]);
                return [{
                    type: "polyline",
                    geometry: pts
                }, {
                    type: "polyline",
                    geometry: [points[index], points[index + 1]]
                }];
            }
        }).end();
    } else if (properties.log == 'G-M-OADC') {
        return turnPlane.map((prev, points, index, buffer) => {
            let length = points[index + 1].y - points[index].y;
            if (Math.abs(length) >= (arrowSizeY * 2)) {
                let pts = [points[index]];
                for (let i = 0; i < length - arrowSizeY * 2; i += arrowSizeY * 2) {
                    pts.push({ x: -arrowSize, y: i + arrowSizeY });
                    pts.push({ x: 0, y: (i + arrowSizeY * 2) });
                }
                pts.push(points[index + 1]);
                pts.push(points[index]);
                return [{
                    type: "polygon",
                    geometry: pts
                }];
            }
        }).end();
    }
}

module.exports = {
    modular: barrier,
    minPointCount: 1,
    properties: {
        size: {
            arrow: 40, //화살표 한쪽 선의 길이
        },
        pixelBySize: {}
    }
};