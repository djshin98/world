class calc {
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
    static arrow(tp, pt1, p2, arrowSize, angle) {
        let arr = [p2, pt1];
        return tp.turnStack(arr, 0, 1, (pt) => {
            let temp = { x: 0, y: arrowSize };
            let radian = (Q.isValid(angle) ? angle : 40) * Math.PI / 180;
            return {
                type: "polyline",
                geometry: [{
                    x: (temp.x * Math.cos(radian)) - (temp.y * Math.sin(radian)),
                    y: (temp.x * Math.sin(radian)) + (temp.y * Math.cos(radian))
                }, pt[0], {
                    x: (temp.x * Math.cos(-radian)) - (temp.y * Math.sin(-radian)),
                    y: (temp.x * Math.sin(-radian)) + (temp.y * Math.cos(-radian))
                }]
            };
        });
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
    linkLine(st, et, bxasix) {
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

            if (Q.isValid(sr)) { ret.push({ type: "polyline", geometry: [st, { x: sr, y: st.y }] }); }
            if (Q.isValid(er)) { ret.push({ type: "polyline", geometry: [{ x: er, y: st.y }, et] }); }
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
            if (Q.isValid(sr)) { ret.push({ type: "polyline", geometry: [st, { x: st.x, y: sr }] }); }
            if (Q.isValid(er)) { ret.push({ type: "polyline", geometry: [{ x: et.x, y: er }, et] }); }
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
}

function rect(x, y, width, height) {
    return new Rectangle(x, y, width, height);
}

module.exports = { calc: calc, rect: rect };