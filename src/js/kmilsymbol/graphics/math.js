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
    static arc(sr, er, dist) {
        let result = [];
        let deg = 3 * Math.PI / 180;
        if (sr < er) {
            for (let r = sr; r < er; r += deg) {
                result.push({
                    x: dist * Math.sin(r),
                    y: dist * Math.cos(r)
                });
            }
        } else {
            for (let r = sr; r > er; r -= deg) {
                result.push({
                    x: dist * Math.sin(r),
                    y: dist * Math.cos(r)
                });
            }
        }
        return result;
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