class Plane extends Cesium.EllipsoidTangentPlane {
    constructor(origin) {
        super(origin);
    }
    input(points) {
        let result = [];
        let pts = this.projectPointsToNearestOnPlane(points);
        for (let i = 0; i < pts.length; i++) {
            result.push(pts[i]);
        }
        return result;
    }
    output(points) {
        return this.projectPointsOntoEllipsoid(points);
    }
    distance(a, b) {
        return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
    }
    corrido(width, a, b) {
        let pts = [a.clone(), b.clone()];
        let rTranslate = this.origin(pts);
        let rRotate = this.rotate(pts);
    }
    origin(pts) {
        let org = pts[0].clone();
        pts.forEach(p => { p.x -= org.x;
            p.y -= org.y; });
        return org;
    }
    rotate(pts) {
        let θ = Math.atan2(pts[1].y, pts[0].x);
        let matrix = new Cesium.Matrix2(Math.cos(θ), -Math.sin(θ), Math.sin(θ), Math.cos(θ));
        pts.forEach(p => { p = Cesium.Matrix2.multiplyByVector(matrix, p, new Cesium.Cartesian2()); });
        return matrix;
    }

}

module.exports = { Plane: Plane };