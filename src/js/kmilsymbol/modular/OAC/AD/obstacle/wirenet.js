"use strict";

const { calc, line } = require("../../../../graphics/math");

function wirenet(turnPlane, properties, bcompleted) {
    let s = properties.pixelBySize;
    let div = s.wiresize;
    let divUnit = (div * 2) + (div * 0.3);

    if (properties.log == "G-M-OWU") {
        return turnPlane.map((prev, p, i, buffer) => {
            let ret = [];
            for (let iy = p[i].y + div; iy < (p[i + 1].y - (div * 2)); iy += divUnit) {
                calc.x({ x: 0, y: iy }, div).forEach(p => { ret.push(p); });
            }
            return ret;
        }).end();
    } else if (properties.log == "G-M-OWS") {
        return turnPlane.map((prev, p, i, buffer) => {
            let ret = [];
            let bswitch = true;
            for (let iy = p[i].y + div; iy < (p[i + 1].y - (div * 2)); iy += divUnit) {
                if (bswitch == true) {
                    calc.x({ x: 0, y: iy }, div).forEach(p => { ret.push(p); });
                }
                bswitch != bswitch;
            }
            ret.push({
                type: "polyline",
                geometry: [p[i], p[i + 1]]
            });
            return ret;
        }).end();
    } else if (properties.log == "G-M-OWD") {
        return turnPlane.map((prev, p, i, buffer) => {
            let ret = [];
            let bswitch = 1;
            for (let iy = p[i].y + div; iy < (p[i + 1].y - (div * 2)); iy += divUnit) {
                if ((bswitch % 3) != 0) {
                    calc.x({ x: 0, y: iy }, div).forEach(p => { ret.push(p); });
                }
                bswitch++;
            }
            ret.push({
                type: "polyline",
                geometry: [p[i], p[i + 1]]
            });
            return ret;
        }).end();
    } else if (properties.log == "G-M-OWA") {
        return turnPlane.map((prev, p, i, buffer) => {
            let ret = [];
            for (let iy = p[i].y + div; iy < (p[i + 1].y - (div * 2)); iy += divUnit) {
                calc.x({ x: 0, y: iy }, div).forEach(p => { ret.push(p); });
            }
            ret.push({
                type: "polyline",
                geometry: [p[i], p[i + 1]]
            });
            return ret;
        }).end();
    } else if (properties.log == "G-M-OWL") {
        return turnPlane.map((prev, p, i, buffer) => {
            let ret = [];
            for (let iy = p[i].y + div; iy < (p[i + 1].y - (div * 2)); iy += divUnit) {
                calc.x({ x: 0, y: iy }, div).forEach(p => { ret.push(p); });
            }
            ret.push({
                type: "polyline",
                geometry: [calc.moveX(p[i], div), calc.moveX(p[i + 1], div)]
            });
            return ret;
        }).end();
    } else if (properties.log == "G-M-OWH") {
        return turnPlane.map((prev, p, i, buffer) => {
            let ret = [];
            for (let iy = p[i].y + div; iy < (p[i + 1].y - (div * 2)); iy += divUnit) {
                calc.x({ x: 0, y: iy }, div).forEach(p => { ret.push(p); });
            }
            ret.push({
                type: "polyline",
                geometry: [calc.moveX(p[i], div), calc.moveX(p[i + 1], div)]
            });
            ret.push({
                type: "polyline",
                geometry: [calc.moveX(p[i], -div), calc.moveX(p[i + 1], -div)]
            });
            return ret;
        }).end();
    } else if (properties.log == "G-M-OWCS") {
        return turnPlane.map((prev, p, i, buffer) => {
            let ret = [];
            for (let iy = p[i].y + div; iy < (p[i + 1].y - (div * 2)); iy += divUnit) {
                calc.xx({ x: 0, y: iy }, div).forEach(p => { ret.push(p); });
            }
            ret.push({
                type: "polyline",
                geometry: [calc.moveX(p[i], div), calc.moveX(p[i + 1], div)]
            });
            return ret;
        }).end();
    } else if (properties.log == "G-M-OWCD") {
        return turnPlane.map((prev, p, i, buffer) => {
            let ret = [];
            for (let iy = p[i].y + div; iy < (p[i + 1].y - (div * 2)); iy += divUnit) {
                calc.xx({ x: 0, y: iy }, div).forEach(p => { ret.push(p); });
            }
            ret.push({
                type: "polyline",
                geometry: [p[i], p[i + 1]]
            });
            ret.push({
                type: "polyline",
                geometry: [calc.moveX(p[i], div), calc.moveX(p[i + 1], div)]
            });
            return ret;
        }).end();
    } else if (properties.log == "G-M-OWCT") {
        return turnPlane.map((prev, p, i, buffer) => {
            let ret = [];
            if (buffer.length == 2) {
                let obj = buffer.find((p) => { return p.name === "top" ? true : false; });
                if (Q.isValid(obj)) {
                    let g = obj.geometry;
                    let l1 = line(g[g.length - 2], g[g.length - 1]);
                    let l2 = line(calc.moveX(p[i], -div), calc.moveX(p[i + 1], -div));
                    let lx = l1.intersect(l2);
                    if (Q.isValid(lx)) {
                        g[g.length - 1] = lx;
                        g.push(calc.moveX(p[i + 1], -div));
                    }
                }

                obj = buffer.find((p) => { return p.name === "bottom" ? true : false; });
                if (Q.isValid(obj)) {
                    let g = obj.geometry;
                    let l1 = line(g[g.length - 2], g[g.length - 1]);
                    let l2 = line(calc.moveX(p[i], div), calc.moveX(p[i + 1], div));
                    let lx = l1.intersect(l2);
                    if (Q.isValid(lx)) {
                        g[g.length - 1] = lx;
                        g.push(calc.moveX(p[i + 1], div));
                    }
                }
            }
            for (let iy = p[i].y + div; iy < (p[i + 1].y - (div * 2)); iy += divUnit) {
                calc.xx({ x: 0, y: iy }, div).forEach(p => { ret.push(p); });
            }
            if (!Q.isValid(prev)) {
                ret.push({
                    type: "polyline",
                    name: "bottom",
                    geometry: [calc.moveX(p[i], div), calc.moveX(p[i + 1], div)]
                });
                ret.push({
                    type: "polyline",
                    name: "top",
                    geometry: [calc.moveX(p[i], -div), calc.moveX(p[i + 1], -div)]
                });
                buffer.push(ret[ret.length - 2]);
                buffer.push(ret[ret.length - 1]);
            }
            return ret;
        }).end();
    } else if (properties.log == "G-M-OWCA") {
        let zz = 0;
        return turnPlane.map((prev, p, i, buffer) => {
            let ret = [];
            let iy = p[i].y;
            if (Q.isValid(prev) && prev.geometry.length > 0) {
                let last = prev.geometry[prev.geometry.length - 1];
                ret.push(last);

                ret.push({ x: p[i].x - div / 2, y: p[i].y });
                ret.push({ x: p[i].x + div / 2, y: p[i].y + div / 2 });

                iy = p[i].y + div;
            }
            for (; iy < (p[i + 1].y); iy += div) {
                calc.elx({ x: 0, y: iy }, zz++, div).forEach(p => { ret.push(p); });
            }

            if (ret.length > 0) {
                return {
                    type: "polyline",
                    geometry: ret
                };
            }

        }).end();
    }
}

module.exports = {
    modular: wirenet,
    minPointCount: 2,
    properties: {
        size: {
            wiresize: 10
        }
    }
};