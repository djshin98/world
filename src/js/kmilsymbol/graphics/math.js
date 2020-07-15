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
    static arrow(tp, pt1, p2, arrowSize) {
        let arr = [p2, pt1];
        return tp.turnStack(arr, 0, 1, (pt) => {
            let temp = { x: 0, y: arrowSize };
            let radian = 40 * Math.PI / 180;
            let p1 = {};
            p1.x = (temp.x * Math.cos(radian)) - (temp.y * Math.sin(radian));
            p1.y = (temp.x * Math.sin(radian)) + (temp.y * Math.cos(radian));
            let p2 = {};
            p2.x = (temp.x * Math.cos(-radian)) - (temp.y * Math.sin(-radian));
            p2.y = (temp.x * Math.sin(-radian)) + (temp.y * Math.cos(-radian));

            return { type: "polyline", geometry: [p1, pt[0], p2] };
        });
    }
}
class Rectangle {
    constructor(x, y, width, height) {
        this.geo = [
            { x: x - height / 2, y: y - width / 2 },
            { x: x - height / 2, y: y + width / 2 },
            { x: x + height / 2, y: y + width / 2 },
            { x: x + height / 2, y: y - width / 2 }
        ];
    }
    move(x, y) {
        this.geo.forEach(p => {
            p.x += x;
            p.y += y;
        });
        return this;
    }
    geometry() {
        return this.geo;
    }
}

function rect(x, y, width, height) {
    return new Rectangle(x, y, width, height);
}

module.exports = { calc: calc, rect: rect };