"use strict";
const { calc } = require("../../kmilsymbol/graphics/math");
global._verticalizekey = 1;
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
            this.buffer.forEach((obj) => {
                if (Q.isValid(obj)) {
                    this.end(obj);
                }
            });
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
    reduce(callback, preWork, orders) {
        let buffer = [];
        if (Q.isValid(preWork)) {
            this.points = preWork(this, this.points);
        }
        if (!Q.isValid(orders)) {
            orders = [];
            this.points.reduce((prev, curr, i) => { orders.push([i - 1, i]); });
        }
        this.append(orders.reduce((prev, curr, i) => {
            let v = this.verticalize(this.points, curr[0], curr[1], prev, buffer);
            return this.unverticalize(v, callback(v.prev, v.curr, i, v.buffer));
        }, undefined));
        return this;
    }
    map(callback, preWork, orders) {
        let buffer = [];
        if (Q.isValid(preWork)) {
            this.points = preWork(this, this.points);
        }
        if (!Q.isValid(orders)) {
            orders = [];
            this.points.reduce((prev, curr, i) => { orders.push([i - 1, i]); });
        }
        orders.reduce((prev, curr, i) => {
            let v = this.verticalize(this.points, curr[0], curr[1], prev, buffer);
            curr = this.unverticalize(v, callback(v.prev, Q.copy(v.curr), i, v.buffer));
            this.append(curr);
            return curr;
        }, undefined);
        return this;
    }
    forEach(callback, preWork, orders) {
        let buffer = [];
        if (Q.isValid(preWork)) {
            this.points = preWork(this, this.points);
        }
        if (!Q.isValid(orders)) {
            orders = [];
            this.points.reduce((prev, curr, i) => { orders.push([i - 1, i]); });
        }
        orders.reduce((prev, curr, i) => {
            let v = this.verticalize(this.points, curr[0], curr[1], prev, buffer);
            return this.unverticalize(v, callback(v.prev, Q.copy(v.curr), i, v.buffer));
        }, undefined);
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
                if (!(obj.v && obj.v.indexOf(v.vkey) >= 0)) {
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
                    if (!obj.v) { obj.v = []; }
                    obj.v.push(v.vkey);
                }
                return obj;
            }
        }
    }
    verticalKey() { if (global._verticalizekey > 1000000) { global._verticalizekey = 1; } return global._verticalizekey++; }
    verticalize(points, originIndex, verticalizeIndex, prev, buffer) {
        let v = { m: { x: points[originIndex].x, y: points[originIndex].y }, vkey: this.verticalKey() };
        points = Q.copy(points);
        if (points.length > 1) {
            v.r = Math.atan2(points[verticalizeIndex].x - v.m.x, points[verticalizeIndex].y - v.m.y);
        }
        v.curr = this._verticalize(v, { geometry: points }).geometry;
        v.prev = this._verticalize(v, prev);
        this._verticalize(v, buffer);
        v.buffer = buffer;
        return v;
    }
    _unverticalize(v, result) {
        if (Q.isValid(result)) {
            if (Q.isArray(result)) {
                return result.map(r => { return this._unverticalize(v, r); })
            } else if (Q.isValid(result.geometry)) {
                let vkeyIndex = result.v ? result.v.indexOf(v.vkey) :
                    ((result.u && result.u.indexOf(v.vkey) >= 0) ? -1 : 0);
                if (vkeyIndex >= 0) {
                    result.geometry = result.geometry.map(p => {
                        if (Q.isValid(v.r)) {
                            return {
                                x: (p.x * Math.cos(-v.r)) - (p.y * Math.sin(-v.r)) + v.m.x,
                                y: (p.x * Math.sin(-v.r)) + (p.y * Math.cos(-v.r)) + v.m.y
                            };
                        }
                        return { x: p.x + v.m.x, y: p.y + v.m.y };
                    });
                    if (Q.isValid(result.rotate)) {
                        result.rotate += -v.r;
                    } else {
                        result.rotate = -v.r;
                    }
                    if (result.v) { result.v.splice(vkeyIndex, 1); } else {
                        result.u = [v.vkey];
                    }
                }

                return result;
            }
        }
    }
    unverticalize(v, results) {
        v.curr = this._unverticalize(v, v.curr);
        v.prev = this._unverticalize(v, v.prev);
        this._unverticalize(v, v.buffer);
        return this._unverticalize(v, results);
    }
}

function tw(points, bcompleted, originIndex, options, annotations) {
    if (Q.isValid(options) && Q.isValid(options.modular)) {
        let origin = Q.isValid(originIndex) ? points[originIndex] : points[0];
        if (Q.isValid(options.properties)) {
            if (points.length > 1) {
                let px = CTX.pixels(points[0], points[1]);
                let lineLength = calc.distance(points[0], points[1]);

                if (Q.isValid(options.properties.size)) {
                    options.properties.pixelBySize = {};

                    Q.keys(options.properties.size, (key, value) => {
                        options.properties.pixelBySize[key] = (value * lineLength) / px;
                    });
                }
                if (Q.isValid(annotations) && Q.isValid(options.properties.annotations)) {
                    annotations.forEach(annotation => {
                        let ann = options.properties.annotations[annotation.name];
                        if (Q.isValid(ann)) {
                            ann.width = (annotation.width * lineLength) / px;
                            ann.height = (annotation.height * lineLength) / px;
                            let temp = {
                                x: annotation.width * annotation.anchor.x,
                                y: annotation.height * annotation.anchor.y
                            };
                            ann.offset = {
                                x: (temp.x * lineLength) / px,
                                y: (temp.y * lineLength) / px
                            };
                        }
                    });
                }
            }
        }

        if (!Q.isValid(bcompleted)) { bcompleted = false; }
        return options.modular(new TurnPlane(origin, points), options.properties, bcompleted);
    }
}

module.exports = { tw: tw };