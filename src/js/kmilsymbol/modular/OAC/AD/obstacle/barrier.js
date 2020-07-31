const { calc, line } = require("../../../../graphics/math");

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
            return calc.triLine(points[index], points[index + 1], arrowSizeY, arrowSize);
        }).end();
    } else if (properties.log == "G-M-OAW") {
        let result = [];
        return turnPlane.map((prev, points, index, buffer) => {
            return calc.triLine(points[index], points[index + 1], arrowSizeY, -arrowSize);
        }).end();
    } else if (properties.log == "G-M-OGB") {
        return turnPlane.reduce((prev, points, index, buffer) => {
            /*
            if( !bcompleted ){
                return calc.triLine(points[index], points[index + 1], arrowSizeY, arrowSize);
            }else{

            }
            */

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
        return turnPlane.reduce((prev, points, index, buffer) => {
            let length = points[index + 1].y - points[index].y;
            let pts = [points[index]];
            //arrowSize = (arrowSize > 0) ? arrowSize * -1 : arrowSize;
            if (Math.abs(length) >= (arrowSizeY * 2)) {
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
                    pts = prev[0].geometry.concat(pts);
                }


            }

            if (index == points.length - 2) {
                let tmp = turnPlane.turnStack(points, points.length - 1, 0, (ps) => {
                    let pts = [];
                    let toggle = true;
                    let length = ps[0].y - ps[ps.length - 1].y;

                    for (let i = 0; i < length - arrowSizeY * 2; i += arrowSizeY * 2) {
                        if (toggle === true) {
                            pts.push({ x: -arrowSize, y: i + arrowSizeY });
                            pts.push({ x: 0, y: (i + arrowSizeY * 2) });
                        } else {
                            pts.push({ x: 0, y: (i + arrowSizeY * 2) });
                        }
                        toggle = !toggle;
                    }
                    return { type: "polyline", geometry: pts };
                });
                pts = pts.concat(tmp.geometry);
            }

            let ret = [{
                type: "polygon",
                geometry: pts
            }];
            if (bcompleted) {
                ret.push(calc.annotationToNorth(a, "ogz", calc.center(points)));
            }
            return ret;
        }).end();
    } else if (properties.log == "G-M-OGF") {
        return turnPlane.reduce((prev, points, index, buffer) => {
            let length = points[index + 1].y - points[index].y;
            let pts = [points[index]];
            arrowSize = (arrowSize > 0) ? arrowSize * -1 : arrowSize;
            if (Math.abs(length) >= (arrowSizeY * 2)) {
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
                    pts = prev[0].geometry.concat(pts);
                }


            }

            if (index == points.length - 2) {
                let tmp = turnPlane.turnStack(points, points.length - 1, 0, (ps) => {
                    let pts = [];
                    let toggle = true;
                    let length = ps[0].y - ps[ps.length - 1].y;

                    for (let i = 0; i < length - arrowSizeY * 2; i += arrowSizeY * 2) {
                        if (toggle === true) {
                            pts.push({ x: -arrowSize, y: i + arrowSizeY });
                            pts.push({ x: 0, y: (i + arrowSizeY * 2) });
                        } else {
                            pts.push({ x: 0, y: (i + arrowSizeY * 2) });
                        }
                        toggle = !toggle;
                    }
                    return { type: "polyline", geometry: pts };
                });
                pts = pts.concat(tmp.geometry);
            }

            let ret = [{
                type: "polygon",
                geometry: pts
            }];
            if (bcompleted) {
                ret.push(calc.annotationToNorth(a, "ogf", calc.center(points)));
            }
            return ret;
        }).end();
    } else if (properties.log == "G-M-OGR") {
        return turnPlane.reduce((prev, points, index, buffer) => {
            let length = points[index + 1].y - points[index].y;
            let pts = [points[index]];
            arrowSize = (arrowSize > 0) ? arrowSize * -1 : arrowSize;
            if (Math.abs(length) >= (arrowSizeY * 2)) {
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
                    pts = prev[0].geometry.concat(pts);
                }


            }

            if (index == points.length - 2) {
                let tmp = turnPlane.turnStack(points, points.length - 1, 0, (ps) => {
                    let pts = [];
                    let toggle = true;
                    let length = ps[0].y - ps[ps.length - 1].y;

                    for (let i = 0; i < length - arrowSizeY * 2; i += arrowSizeY * 2) {
                        if (toggle === true) {
                            pts.push({ x: -arrowSize, y: i + arrowSizeY });
                            pts.push({ x: 0, y: (i + arrowSizeY * 2) });
                        } else {
                            pts.push({ x: 0, y: (i + arrowSizeY * 2) });
                        }
                        toggle = !toggle;
                    }
                    return { type: "polyline", geometry: pts };
                });
                pts = pts.concat(tmp.geometry);
            }

            let ret = [{
                type: "polygon",
                geometry: pts
            }];
            if (bcompleted) {
                ret.push(calc.annotationToNorth(a, "ogf", calc.center(points)));
            }
            return ret;
        }).end();
    } else if (properties.log == "G-M-OAR") {
        let result = [];
        return turnPlane.map((prev, points, index, buffer) => {
            return calc.triLine(points[index], points[index + 1], arrowSizeY, -arrowSize, {
                type: "polygon",
                a: a,
                aname: "o"
            });
        }).end();
    } else if (properties.log == "G-M-OMC") {

        return turnPlane.map((prev, points, index, buffer) => {
            let result = [];
            let dist = calc.distance(points[index], points[index + 1]);
            calc.arc(0, -Math.PI, dist / 2, { translate: { x: 0, y: dist / 2 } }).forEach(g => {
                calc.toDot(turnPlane, g.geometry, arrowSize / 2, 2).forEach(gd => { result.push(gd); });
            });
            calc.toDot(turnPlane, [points[index], points[index + 1]], arrowSize / 2, 2).forEach(gd => { result.push(gd); });
            return result;
        }).end();
    } else if (properties.log == "G-M-OMTA") {
        return turnPlane.map((prev, points, index, buffer) => {
            let result = [];
            result.push(line(points[index], points[index + 1]).end());
            for (let y = a.o.width; y < points[index + 1].y; y += a.o.width * 2) {
                result.push(calc.annotation(a, "o", { x: 0, y: y }));
            }
            return result;
        }).end();
    } else if (properties.log == "G-M-OMPA") {
        return turnPlane.map((prev, points, index, buffer) => {
            let result = [];
            result.push(line(points[index], points[index + 1]).end());
            for (let y = a.o.width; y < points[index + 1].y; y += a.o.width * 2) {
                result.push(calc.annotation(a, "o", { x: 0, y: y }));
                result.push({
                    type: "polyline",
                    geometry: [{ x: -a.o.width, y: y - (a.o.width / 2) }, { x: 0, y: y }, { x: -a.o.width, y: y + (a.o.width / 2) }]
                });
            }
            return result;
        }).end();
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
            },
            ogz: {
                value: "{T}",
                anchor: { x: 0, y: 0 }
            },
            ogf: {
                value: "FREE\n{T}\n{W}\n{W1}",
                anchor: { x: 0, y: 0 }
            },
            o: {
                filter: ["G-M-OAR", "G-M-OMTA", "G-M-OMPA"],
                value: "●",
                anchor: { x: 0, y: 0 }
            },
        },
        variables: {
            T: "3/27 AD",
            T1: "A1",
            W: "200900-",
            W1: "272100Z SEP"
        }
    }
};