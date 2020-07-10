"use strict";
const { calc } = require("../../kmilsymbol/graphics/math");

class TurnPlane extends Cesium.EllipsoidTangentPlane {
    constructor(origin, points) {
        super(origin);
        this.points = this.projectPointsToNearestOnPlane(points).map((p) => { return { x: p.x, y: p.y }; });
        this.buffer = [];
    }
    output(points) {
        return this.projectPointsOntoEllipsoid(points);
    }
    end(obj) {
        if (Q.isValid(obj)) {
            if (Q.isArray(obj)) {
                obj.forEach((o) => { this.end(o); });
            } else if (Q.isValid(obj.geometry)) {
                obj.geometry = this.projectPointsOntoEllipsoid(obj.geometry);
            }
            return obj;
        } else {
            this.buffer.forEach((obj) => { this.end(obj); });
            return this.buffer;
        }
    }
    clear() {
        this.buffer = [];
        return this;
    }
    append(objs) {
        if (Q.isValid(objs)) {
            if (Q.isArray(objs)) {
                objs.forEach(o => { this.buffer.push(o); });
            } else {
                //console.log(objs.geometry[0].x + "," + objs.geometry[0].y);
                this.buffer.push(objs);
            }
        }
    }
    reduce(callback) {
        this.buffer = this.points.reduce((prev, curr, i) => {
            if (Q.isValid(prev) && Q.isValid(prev.geometry)) { prev = Object.assign(prev); } else { prev = undefined; }
            let v = this.verticalize(this.points, i - 1, i, prev);
            return this.unverticalize(v, callback(v.prev, v.curr, i - 1, this.buffer));
        });
        return this;
    }
    map(callback) {
        this.points.reduce((prev, curr, i) => {
            let v = this.verticalize(this.points, i - 1, i, prev);
            curr = this.unverticalize(v, callback(v.prev, Q.copy(v.curr), i - 1, this.buffer));
            this.append(curr);
            return curr;
        });
        return this;
    }
    forEach(callback) {
        this.points.reduce((prev, curr, i) => {
            let v = this.verticalize(this.points, i - 1, i, prev);
            curr = this.unverticalize(v, callback(v.prev, Q.copy(v.curr), i - 1, this.buffer));
            return curr;
        });
        return this;
    }
    turnStack(points, originIndex, verticalizeIndex, turningWork) {
        let v = this.verticalize(points, originIndex, verticalizeIndex);
        let result = turningWork(v.curr);
        return this.unverticalize(v, result);
    }
    _verticalize(v, obj) {
        if (Q.isValid(obj)) {
            if (Q.isArray(obj)) {
                return obj.map(r => { return this._verticalize(v, r); })
            } else if (Q.isValid(obj.geometry)) {
                obj.geometry = obj.geometry.map(p => {
                    p.x -= v.m.x;
                    p.y -= v.m.y;
                    if (Q.isValid(v.r)) {
                        let temp = { x: p.x, y: p.y };
                        p.x = (temp.x * Math.cos(v.r)) - (temp.y * Math.sin(v.r));
                        p.y = (temp.x * Math.sin(v.r)) + (temp.y * Math.cos(v.r));
                    }
                    return p;
                });
                return obj;
            }
        }
    }
    verticalize(points, originIndex, verticalizeIndex, prev) {
        let v = { m: { x: points[originIndex].x, y: points[originIndex].y } };
        points = Q.copy(points);
        if (points.length > 1) {
            v.r = Math.atan2(points[verticalizeIndex].x - v.m.x, points[verticalizeIndex].y - v.m.y);
        }
        v.curr = this._verticalize(v, { geometry: points }).geometry;
        v.prev = this._verticalize(v, prev);
        return v;
    }
    _unverticalize(v, result) {
        if (Q.isValid(result)) {
            if (Q.isArray(result)) {
                return result.map(r => { return this._unverticalize(v, r); })
            } else if (Q.isValid(result.geometry)) {
                result.geometry = result.geometry.map(p => {
                    if (Q.isValid(v.r)) {
                        return {
                            x: (p.x * Math.cos(-v.r)) - (p.y * Math.sin(-v.r)) + v.m.x,
                            y: (p.x * Math.sin(-v.r)) + (p.y * Math.cos(-v.r)) + v.m.y
                        };
                    }
                    return { x: p.x + v.m.x, y: p.y + v.m.y };
                });
                return result;
            }
        }
    }
    unverticalize(v, results) {
        v.curr = this._unverticalize(v, v.curr);
        v.prev = this._unverticalize(v, v.prev);
        return this._unverticalize(v, results);
    }
}

function tw(points, bcompleted, originIndex, options) {
    if (Q.isValid(options) && Q.isValid(options.modular)) {
        let origin = Q.isValid(originIndex) ? points[originIndex] : points[0];
        if (Q.isValid(options.properties)) {
            if (points.length > 1) {
                if (Q.isValid(options.properties.size)) {
                    options.properties.pixelBySize = {};
                    let px = CTX.pixels(points[0], points[1]);
                    let lineLength = calc.distance(points[0], points[1]);
                    Q.keys(options.properties.size, (key, value) => {
                        options.properties.pixelBySize[key] = (value * lineLength) / px;
                    });
                }
            }
        }

        if (!Q.isValid(bcompleted)) { bcompleted = false; }
        return options.modular(new TurnPlane(origin, points), options.properties, bcompleted);
    }
}

module.exports = { tw: tw };