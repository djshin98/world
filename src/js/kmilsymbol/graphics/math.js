class calc {
    static θ(p) {
        return Math.atan2(p.x, p.y);
    }
    static avg(p) {
        let sum = p.reduce((prev, curr, i) => {
            return { x: prev.x + curr.x, y: prev.y + curr.y };
        });

        return { x: sum.x / p.length, y: sum.y / p.length };
    }
    static center(p) {
        let minX = p[0].x;
        let minY = p[0].y;
        let maxX = p[0].x;
        let maxY = p[0].y;
        p.forEach(c => {
            minX = Math.min(c.x, minX);
            minY = Math.min(c.y, minY);
            maxX = Math.max(c.x, maxX);
            maxY = Math.max(c.y, maxY);
        });

        return { x: (minX + maxX) / 2, y: (minY + maxY) / 2 };
    }
    static mid(a, b) {
        return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
    }
    static moveX(p, x) {
        return { x: p.x + x, y: p.y };
    }
    static moveY(p, y) {
        return { x: p.x, y: p.y + y };
    }
    static move(p, x, y) {
        return { x: p.x + x, y: p.y + y };
    }
    static distance(p1, p2) {
        return Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2));
    }
    static extension(tp, p1, p2, dist) {
        return tp.turnStack([p1, p2], 0, 1, (p) => {
            return {
                type: "polyline",
                geometry: [p[0], { x: p[0].x, y: dist }]
            };
        });
    }

    static toDot(tp, lines, len, ratio) {
        let ret = [];
        let _len = 0;
        if (!Q.isValid(ratio)) { ratio = 3; }
        lines.reduce((prev, curr, i) => {

            tp.turnStack([prev, curr], 0, 1, (p) => {
                let dots = [];
                let y = 0;

                if (_len > 0) {
                    dots.push({ type: "polyline", geometry: [{ x: 0, y: _len }] });
                }
                for (y = _len; y <= p[1].y - len; y += len) {
                    dots.push({ type: "polyline", geometry: [{ x: 0, y: y }, { x: 0, y: y + len }] });
                }
                _len = p[1].y - y;
                if (_len > 0.0000001) {
                    dots.push({ type: "polyline", geometry: [{ x: 0, y: y }, { x: 0, y: p[1].y }] });
                } else { _len = 0; }
                return dots;
            }).forEach(g => { ret.push(g); });

            return curr;
        });

        ret.reduce((prev, curr) => {
            if (curr.geometry.length == 1) {
                prev.geometry.push(curr.geometry[0]);
                return prev;
            }
            return curr;
        });
        ret = ret.filter((g) => { return g.geometry.length == 1 ? false : true; });
        ret = ret.filter((g, i) => { return (i + 1) % ratio == 0 ? false : true; });

        return ret;
    }

    static ext(org, dir, len) {
        let o = { x: dir.x - org.x, y: dir.y - org.y };
        let rad = Math.atan2(o.y, o.x);
        return {
            x: len * Math.cos(rad) + o.x,
            y: len * Math.sin(rad) + o.y
        };
    }
    static dir(org, dir, deg, len) {
        let rdeg = deg * Math.PI / 180;
        let o = { x: dir.x - org.x, y: dir.y - org.y };
        let rad = Math.atan2(o.y, o.x) + rdeg;
        return {
            x: len * Math.cos(rad) + o.x,
            y: len * Math.sin(rad) + o.y
        };
    }
    static arc(sr, er, dist, options) {
        options = Object.assign({}, options);
        let result = [];
        let resultHair = [];
        let rad = (Q.isValid(options.div) ? options.div : 3) * Math.PI / 180;
        let mp = Q.isValid(options.translate) ? options.translate : { x: 0, y: 0 };
        let mode = 0;
        let hairLength = 0;
        let hairFreq = 0;
        let hasAnnotation = false;
        let geo = [];
        if (Q.isValid(options.hair)) {
            mode = 1;
            hairFreq = (Q.isValid(options.hair.freq) ? options.hair.freq : 15) * Math.PI / 180;
            hairLength = (1 + options.hair.length) * dist;
        }
        if (Q.isValid(options.annotation)) {
            hasAnnotation = true;
        }
        if (sr < er) {
            if (mode == 1) {
                result.push({
                    x: hairLength * Math.sin(sr) + mp.x,
                    y: hairLength * Math.cos(sr) + mp.y
                });
            }
            if (hasAnnotation) {
                for (let r = sr; r <= er; r += rad) {
                    let v = {
                        x: dist * Math.sin(r) + mp.x,
                        y: dist * Math.cos(r) + mp.y
                    };
                    if (options.annotation.inRegion(v, true)) {
                        if (result.length > 1) {
                            geo.push({
                                type: "polyline",
                                geometry: result
                            });
                            result = [];
                        }
                    } else {
                        result.push(v);
                    }
                }
            } else {
                for (let r = sr; r <= er; r += rad) {
                    result.push({
                        x: dist * Math.sin(r) + mp.x,
                        y: dist * Math.cos(r) + mp.y
                    });
                }
            }

            if (mode == 1) {
                result.push({
                    x: hairLength * Math.sin(er) + mp.x,
                    y: hairLength * Math.cos(er) + mp.y
                });
            }
            if (mode == 1) {
                for (let r = sr + hairFreq; r < er; r += hairFreq) {
                    if (hasAnnotation && Math.abs(r - ((er + sr) / 2)) < 0.0000001) {
                        let pt = [{
                            x: dist * Math.sin(r) + mp.x,
                            y: dist * Math.cos(r) + mp.y
                        }, {
                            x: hairLength * Math.sin(r) + mp.x,
                            y: hairLength * Math.cos(r) + mp.y
                        }];
                        options.annotation.linkLine(pt[0], pt[1]).forEach(l => { geo.push(l); });
                    } else {
                        resultHair.push([{
                            x: dist * Math.sin(r) + mp.x,
                            y: dist * Math.cos(r) + mp.y
                        }, {
                            x: hairLength * Math.sin(r) + mp.x,
                            y: hairLength * Math.cos(r) + mp.y
                        }]);
                    }
                }
            }
        } else {
            if (mode == 1) {
                result.push({
                    x: hairLength * Math.sin(sr) + mp.x,
                    y: hairLength * Math.cos(sr) + mp.y
                });
            }
            if (hasAnnotation) {
                for (let r = sr; r >= er; r -= rad) {
                    let v = {
                        x: dist * Math.sin(r) + mp.x,
                        y: dist * Math.cos(r) + mp.y
                    };
                    if (options.annotation.inRegion(v, true)) {
                        if (result.length > 1) {
                            geo.push({
                                type: "polyline",
                                geometry: result
                            });
                            result = [];
                        }
                    } else {
                        result.push(v);
                    }
                }
            } else {
                for (let r = sr; r >= er; r -= rad) {
                    result.push({
                        x: dist * Math.sin(r) + mp.x,
                        y: dist * Math.cos(r) + mp.y
                    });
                }
            }
            if (mode == 1) {
                result.push({
                    x: hairLength * Math.sin(er) + mp.x,
                    y: hairLength * Math.cos(er) + mp.y
                });
            }
            if (mode == 1) {
                for (let r = sr - hairFreq; r > er; r -= hairFreq) {
                    if (hasAnnotation && Math.abs(r - ((er + sr) / 2)) < 0.0000001) {
                        let pt = [{
                            x: dist * Math.sin(r) + mp.x,
                            y: dist * Math.cos(r) + mp.y
                        }, {
                            x: hairLength * Math.sin(r) + mp.x,
                            y: hairLength * Math.cos(r) + mp.y
                        }];
                        options.annotation.linkLine(pt[0], pt[1]).forEach(l => { geo.push(l); });
                    } else {
                        resultHair.push([{
                            x: dist * Math.sin(r) + mp.x,
                            y: dist * Math.cos(r) + mp.y
                        }, {
                            x: hairLength * Math.sin(r) + mp.x,
                            y: hairLength * Math.cos(r) + mp.y
                        }]);
                    }
                }
            }
        }
        geo.push({ type: "polyline", geometry: result });

        if (Q.isValid(options.hair)) {
            resultHair.forEach(h => {
                geo.push({
                    type: "polyline",
                    geometry: h
                });
            })
        }
        return geo;
    }
    static arrow(tp, start, end, arrowSize, angle, bpolygon, width) {
        let radian = (Q.isValid(angle) ? angle : 40) * Math.PI / 180;
        let xwidth = width * Math.tan(radian);
        let aflight = { x: arrowSize * Math.sin(radian), y: arrowSize * Math.cos(radian) };
        let arr = [end, start];
        return tp.turnStack(arr, 0, 1, (pt) => {
            let apt = [pt[0], pt[1], { x: -aflight.x, y: aflight.y }, { x: aflight.x, y: aflight.y }];
            return tp.turnStack(apt, 3, 2, (aapt) => {
                if (Q.isValid(width) && width > 0) {
                    let mid = { x: aapt[0].x + width, y: aapt[0].y };
                    if (bpolygon === true) {
                        return {
                            type: "polygon",
                            geometry: [mid, calc.moveY(aapt[2], -xwidth), aapt[2], aapt[0], aapt[3], calc.moveY(aapt[3], xwidth), mid]
                        };
                    } else {
                        return {
                            type: "polyline",
                            geometry: [mid, calc.moveY(aapt[2], -xwidth), aapt[2], aapt[0], aapt[3], calc.moveY(aapt[3], xwidth), mid]
                        };
                    }
                } else {
                    let mid = { x: 0, y: aapt[0].y };
                    if (bpolygon === true) {
                        return {
                            type: "polygon",
                            geometry: [mid, aapt[2], aapt[0], aapt[3], mid]
                        };
                    } else {
                        return {
                            type: "polyline",
                            geometry: [aapt[0], aapt[2], aapt[0], aapt[3]]
                        };
                    }
                }

            });
        });
    }
    static arrowLine(tp, start, end, arrowSize, angle, bpolygon, width) {
        let a = calc.arrow(tp, start, end, arrowSize, angle, bpolygon, width);
        return [a,
            {
                type: "polyline",
                geometry: [start, a.geometry[0]]
            }
        ];
    }
    static triLine(pt1, pt2, arrowSizeY, arrowSize) {
        let length = pt2.y - pt1.y;
        if (Math.abs(length) >= (arrowSizeY * 2)) {
            let pts = [pt1];
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
            pts.push(pt2);
            return [{
                type: "polyline",
                geometry: pts
            }];
        }
        return [{
            type: "polyline",
            geometry: [pt1, pt2]
        }];
    }
    static x(pt, size) {
        return [{
                type: "polyline",
                geometry: [
                    { x: pt.x + size, y: pt.y + size },
                    { x: pt.x - size, y: pt.y - size }
                ]
            },
            {
                type: "polyline",
                geometry: [
                    { x: pt.x - size, y: pt.y + size },
                    { x: pt.x + size, y: pt.y - size }
                ]
            }
        ];
    }
    static xx(pt, size) {
        return [{
            type: "polyline",
            geometry: [
                { x: pt.x - size, y: pt.y },
                { x: pt.x - size / 2, y: pt.y + size / 2 },
                { x: pt.x + size / 2, y: pt.y + size / 2 },
                { x: pt.x + size, y: pt.y },
                { x: pt.x + size / 2, y: pt.y - size / 2 },
                { x: pt.x - size / 2, y: pt.y - size / 2 },
                { x: pt.x - size, y: pt.y },
            ]
        }];
    }
    static elx(pt, index, size) {
        return [
            { x: pt.x + size / 2, y: pt.y - size / 2 },
            { x: pt.x - size / 2, y: pt.y },
            { x: pt.x + size / 2, y: pt.y + size / 2 }
        ];
    }
    static annotationOnLine(a, name, ratio, p1, p2, bxaxis, callback) {
        let r = rect((p1.x + p2.x) * ratio, (p1.y + p2.y) * ratio, a[name].width, a[name].height, bxaxis);
        let ret = [{
            type: "annotation",
            geometry: r.geometry(bxaxis),
            name: name,
            rotate: (bxaxis === true) ? Math.PI / 2 : 0,
            debug: true
        }];
        r.linkLine(p1, p2, bxaxis, callback).forEach(g => { ret.push(g); });
        return ret;
    }
    static annotation(a, name, p1, bxaxis, options) {
        let r = rect(p1.x, p1.y, a[name].width, a[name].height, bxaxis);
        return Object.assign({
            type: "annotation",
            geometry: r.geometry(bxaxis),
            name: name,
            rotate: (bxaxis === true) ? Math.PI / 2 : 0
        }, options);
    }
    static tAnnotationOnLine(tp, a, name, ratio, p1, p2, bxaxis, callback) {
        return tp.turnStack([p1, p2], 0, 1, (p) => {
            let r = rect((p[0].x + p[1].x) * ratio, (p[0].y + p[1].y) * ratio, a[name].width, a[name].height, bxaxis);
            let ret = [{
                type: "annotation",
                geometry: r.geometry(bxaxis),
                name: name,
                rotate: (bxaxis === true) ? Math.PI / 2 : 0,
                debug: true
            }];
            r.linkLine(p[0], p[1], bxaxis, callback).forEach(g => { ret.push(g); });
            return ret;
        });
    }
    static annotationToNorth(a, name, p1) {

        //, undefined, { ignoreRotate: true, rotate: Math.PI / 2 }

        let r = rect(p1.x, p1.y, a[name].height, a[name].width);
        return {
            type: "annotation",
            geometry: r.geometry(),
            name: name,
            ignoreRotate: true,
            rotate: -Math.PI / 2,
            debug: true
        };
    }
    static sinline(p1, p2, height) {
        let ret = [];
        let cnt = 20;
        let div = (p2.y - p1.y) / cnt;
        for (let i = 1; i < cnt; i++) {
            ret.push({ x: (Math.sin(Math.PI * (i / cnt)) * height) - p1.x, y: p1.y + (i * div) });
        }
        return {
            type: "polyline",
            geometry: ret
        }
    }
}
class Rectangle {
    constructor(x, y, width, height) {
        this.center = { x: x, y: y };
        this.width = width;
        this.height = height;
    }
    move(x, y) {
        this.center.x += x;
        this.center.y += y;
        return this;
    }
    left(bxaxis) {
        if (bxaxis === true) {
            return this.center.x - this.width / 2;
        } else {
            return this.center.y - this.width / 2;
        }
    }
    right(bxaxis) {
        if (bxaxis === true) {
            return this.center.x + this.width / 2;
        } else {
            return this.center.y + this.width / 2;
        }
    }
    top(bxaxis) {
        if (bxaxis === true) {
            return this.center.y + this.height / 2;
        } else {
            return this.center.x - this.height / 2;
        }
    }
    bottom(bxaxis) {
        if (bxaxis === true) {
            return this.center.y - this.height / 2;
        } else {
            return this.center.x + this.height / 2;
        }
    }
    inRegion(v, bxasix) {
        let x1 = this.right(bxasix);
        let x2 = this.left(bxasix)
        let y1 = this.top(bxasix);
        let y2 = this.bottom(bxasix);

        if (((v.x <= x1 && v.x >= x2) || (v.x >= x1 && v.x <= x2)) &&
            ((v.y <= y1 && v.y >= y2) || (v.y >= y1 && v.y <= y2))) {
            return true;
        }
        return false;
    }
    linkLine(st, et, bxasix, callback) {
        let ret = [];
        if (bxasix === true) {
            let r1 = this.right(bxasix);
            let r2 = this.left(bxasix);
            let sr, er;
            if (Math.abs(st.x - r1) < Math.abs(st.x - r2)) { //st.x는 r1에 가까이 있다.
                if (!((st.x <= r1 && st.x >= r2) || (st.x >= r1 && st.x <= r2))) { sr = r1; }
                if (!((et.x <= r2 && et.x >= r1) || (et.x >= r2 && et.x <= r1))) { er = r2; }
            } else {
                if (!((st.x <= r1 && st.x >= r2) || (st.x >= r1 && st.x <= r2))) { sr = r2; }
                if (!((et.x <= r2 && et.x >= r1) || (et.x >= r2 && et.x <= r1))) { er = r1; }
            }

            if (Q.isValid(sr)) {
                let pt = { type: "polyline", geometry: [st, { x: sr, y: st.y }] };
                ret.push(pt);
                if (Q.isValid(callback)) {
                    callback(0, pt);
                }
            }
            if (Q.isValid(er)) {
                let pt = { type: "polyline", geometry: [{ x: er, y: st.y }, et] };
                ret.push(pt);
                if (Q.isValid(callback)) {
                    callback(1, pt);
                }
            }
            return ret;
        } else {
            let r1 = this.right(bxasix);
            let r2 = this.left(bxasix);
            let sr, er;
            if (!((st.y <= r1 && st.y >= r2) || (st.y >= r1 && st.y <= r2))) {
                if (Math.abs(st.y - r1) < Math.abs(st.y - r2)) {
                    sr = r1;
                    if (!((et.y <= r2 && et.y >= r1) || (et.y >= r2 && et.y <= r1))) { er = r2; }
                } else {
                    sr = r2;
                    if (!((et.y <= r2 && et.y >= r1) || (et.y >= r2 && et.y <= r1))) { er = r1; }
                }
            } else if (!((et.y <= r2 && et.y >= r1) || (et.y >= r2 && et.y <= r1))) {
                if (Math.abs(et.y - r1) < Math.abs(et.y - r2)) {
                    er = r1;
                } else {
                    er = r2;
                }
            }
            if (Q.isValid(sr)) {
                let pt = { type: "polyline", geometry: [st, { x: st.x, y: sr }] };
                ret.push(pt);
                if (Q.isValid(callback)) {
                    callback(0, pt);
                }
            }
            if (Q.isValid(er)) {
                let pt = { type: "polyline", geometry: [{ x: et.x, y: er }, et] };
                ret.push(pt);
                if (Q.isValid(callback)) {
                    callback(1, pt);
                }
            }
            return ret;
        }

    }
    geometry(bxaxis) {
        let x = this.center.x;
        let y = this.center.y;
        let width = bxaxis === true ? this.width : this.height;
        let height = bxaxis === true ? this.height : this.width;
        return [
            { x: x - width / 2, y: y - height / 2 },
            { x: x - width / 2, y: y + height / 2 },
            { x: x + width / 2, y: y + height / 2 },
            { x: x + width / 2, y: y - height / 2 },
            { x: x - width / 2, y: y - height / 2 }
        ];
    }

    capsule(bxaxis) {
        let x = this.center.x;
        let y = this.center.y;
        let width = bxaxis === true ? this.width : this.height;
        let height = bxaxis === true ? this.height : this.width;
        //let l = calc.arc( 0 , -Math.PI, height/2, {translate:this.center});

        return [
            { x: x - width / 2, y: y - height / 2 },
            { x: x - width / 2, y: y + height / 2 },
            { x: x + width / 2, y: y + height / 2 },
            { x: x + width / 2, y: y - height / 2 },
            { x: x - width / 2, y: y - height / 2 }
        ];
    }
}

class Line {
    constructor(pt1, pt2) {
        this.s = pt1;
        this.e = pt2;
    }
    intersect(line) {
        let t;
        let s;
        let under = (line.e.y - line.s.y) * (this.e.x - this.s.x) - (line.e.x - line.s.x) * (this.e.y - this.s.y);
        if (under == 0) return undefined;

        let _t = (line.e.x - line.s.x) * (this.s.y - line.s.y) - (line.e.y - line.s.y) * (this.s.x - line.s.x);
        let _s = (this.e.x - this.s.x) * (this.s.y - line.s.y) - (this.e.y - this.s.y) * (this.s.x - line.s.x);

        t = _t / under;
        s = _s / under;

        //if (t < 0.0 || t > 1.0 || s < 0.0 || s > 1.0) return undefined;
        //if (_t == 0 && _s == 0) return undefined;

        return {
            x: this.s.x + t * (this.e.x - this.s.x),
            y: this.s.y + t * (this.e.y - this.s.y)
        };
    }
    end() {
        return {
            type: "polyline",
            geometry: [this.s, this.e]
        };
    }
}
class Road {
    constructor(p1, p2, width) {
        this.line = [p1, p2];
        this.mLines = [calc.moveX(p1, -width), calc.moveX(p2, -width)];
        this.pLines = [calc.moveX(p1, width), calc.moveX(p2, width)];
        this.width = width;
        this.buffer = [];
    }
    link(p) {
        let ml = [p[0], p[1]];
        let pl = [p[p.length - 1], p[p.length - 2]];
        let mt = this._itx(this.mLines, ml);
        let pt = this._itx(this.pLines, pl);
        if (Q.isValid(mt)) {
            if (mt.y > 0) {
                p.splice(0, 1, mt);
                p.splice(0, 0, this.mLines[0]);
            } else {
                p.splice(0, 0, this.mLines[1]);
                p.splice(0, 0, this.mLines[0]);
            }
        } else {
            p.splice(0, 0, this.mLines[0]);
        }

        if (Q.isValid(pt)) {
            if (pt.y > 0) {
                p.splice(p.length - 1, 1, pt);
                p.push(this.pLines[0]);
            } else {
                p.push(this.pLines[1]);
                p.push(this.pLines[0]);
            }
        } else {
            p.push(this.pLines[0]);
        }
        this.buffer = p;
        return this;
    }
    _itx(A, B) {
        let a = { e: A[0], s: A[1] };
        let b = { e: B[0], s: B[1] };
        let t;
        let s;
        let under = (b.e.y - b.s.y) * (a.e.x - a.s.x) - (b.e.x - b.s.x) * (a.e.y - a.s.y);
        if (under == 0) return undefined;

        let _t = (b.e.x - b.s.x) * (a.s.y - b.s.y) - (b.e.y - b.s.y) * (a.s.x - b.s.x);
        let _s = (a.e.x - a.s.x) * (a.s.y - b.s.y) - (a.e.y - a.s.y) * (a.s.x - b.s.x);

        t = _t / under;
        s = _s / under;

        //if (t < 0.0 || t > 1.0 || s < 0.0 || s > 1.0) return undefined;
        //if (_t == 0 && _s == 0) return undefined;

        return {
            x: a.s.x + t * (a.e.x - a.s.x),
            y: a.s.y + t * (a.e.y - a.s.y)
        };
    }
    end() {
        return [{
            type: "polyline",
            geometry: this.buffer
        }];
    }
}

function rect(x, y, width, height) {
    return new Rectangle(x, y, width, height);
}

function line(p1, p2) {
    return new Line(p1, p2);
}

function road(p1, p2, width) {
    return new Road(p1, p2, width);
}
module.exports = { calc: calc, rect: rect, line: line, road: road };