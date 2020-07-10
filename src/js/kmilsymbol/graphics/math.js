class calc {
    static mid(a, b) {
        return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
    }
    static moveX(p, x) {
        return { x: p.x + x, y: p.y };
    }
}


module.exports = { calc: calc };