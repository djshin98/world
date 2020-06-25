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
        /*
        let pts = [a.clone(), b.clone()];
        let rTranslate = origin(pts);
        let rRotate = rotate(pts, )
        */
    }

}

module.exports = { Plane: Plane };