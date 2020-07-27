const { calc } = require("../../../../graphics/math");

function barrier(turnPlane, properties, bcompleted) {
    let a = properties.annotations;
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
    } else if (properties.log == "G-M-OGL") { //장애물라인
        return turnPlane.map((prev, points, index, buffer) => {
            let length = points[index + 1].y - points[index].y;
            if (Math.abs(length) >= (arrowSizeY * 2)) {
                let pts = [points[index]];
                let toggle = true;
                for (let i = 0; i < length - arrowSizeY * 2; i += arrowSizeY * 2) {
                    if (toggle === true) {
                        pts.push({ x: -arrowSize, y: i + arrowSizeY });
                        pts.push({ x: 0, y: (i + arrowSizeY * 2) });
                    } else {
                        pts.push({ x: 0, y: (i + arrowSizeY * 2) });
                    }
                    toggle = !toggle;
                }
                pts.push(points[index + 1]);
                return [{
                    type: "polyline",
                    geometry: pts
                }];
            }
        }).end();
    } else if (properties.log == "G-M-OAW") {
        let result = [];
        return turnPlane.map((prev, points, index, buffer) => {
            let distance = calc.distance(points[index], points[index + 1]);
            result.push(points[index]);
            for (let i = 1; i < distance / properties.pixelBySize.arrow; i++) {
                if ((i + 1) * arrowSize < distance) {
                    if (i % 2 == 0) {
                        result.push({ x: 0, y: i * arrowSize });
                        result.push({ x: arrowSize, y: i * arrowSize + arrowSize / 2 });
                        result.push({ x: 0, y: (i + 1) * arrowSize });
                    } else {
                        result.push({ x: 0, y: i * arrowSize });
                        result.push({ x: 0, y: (i + 1) * arrowSize });
                    }
                }
            }
            result.push(points[index + 1]);
            return {
                type: "polyline",
                geometry: result
            };
        }).end();
    } else if (properties.log == "G-M-OGB") {
        return turnPlane.reduce((prev, points, index, buffer) => {
            let length = points[index + 1].y - points[index].y;
            if (Math.abs(length) >= (arrowSizeY * 2)) {
                let pts = [points[index]];
                let toggle = true;
                for (let i = 0; i < length - arrowSizeY * 2; i += arrowSizeY * 2) {
                    if (toggle === true) {
                        pts.push({ x: -arrowSize, y: i + arrowSizeY });
                        pts.push({ x: 0, y: (i + arrowSizeY * 2) });
                    } else {
                        pts.push({ x: 0, y: (i + arrowSizeY * 2) });
                    }
                    toggle = !toggle;
                }
                if (Q.isValid(prev)) {
                    prev.geometry.splice(prev.geometry.length - 1, 1);
                    pts = prev.geometry.concat(pts);
                    pts.push(pts[0]);
                }

                let ret = [{
                    type: "polygon",
                    geometry: pts
                }];
                if (bcompleted) {
                    //ret[0].geometry.push(ret[0].geometry[0]);
                    //ret.push()
                    ret.push(calc.annotationToNorth(a, "ogb", calc.center(points)));
                }
                return ret;
            }
        }).end();
    } else if (properties.log == "G-M-OGZ") {

    } else if (properties.log == "G-M-OGF") {

    } else if (properties.log == "G-M-OGR") {

    }
}

module.exports = {
    modular: barrier,
    minPointCount: 2,
    properties: {
        size: {
            arrow: 20, //화살표 한쪽 선의 길이
        },
        annotations: {
            ogb: {
                value: "{T}\n{T1}",
                anchor: { x: 0, y: 0 }
            }

        },
        variables: {
            T: "3/27 AD",
            T1: "A1"
        }
    }
};