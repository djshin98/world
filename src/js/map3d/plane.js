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
    obstruction(width, height, a, b) {
        let pts = [a.clone(), b.clone()];
        let rTranslate = this.origin(pts);

        let θ = Math.atan2(pts[1].x, pts[1].y);
        let matrix = Cesium.Matrix2.fromRotation(θ);
        pts[1] = this.rotate(matrix, pts[1]);

        //----------------------------------------------------------
        pts = [
            CTX.c2(0, height), pts[0],
            CTX.c2(pts[0].x - (width / 2), 0),
            CTX.c2(pts[0].x + (width / 2), 0)

            /*
             pts[0],
             CTX.c2(pts[0].x - (width / 2), (width / 2)),
             CTX.c2(pts[0].x + (width / 2), (width / 2)),
             pts[0], pts[1]
             */
        ];
        //----------------------------------------------------------   

        let inv = Cesium.Matrix2.fromRotation(-θ);
        pts = pts.map(p => {
            return this.rotate(inv, p);
        });

        pts.forEach(p => {
            p.x += rTranslate.x;
            p.y += rTranslate.y;
        });
        return pts;
    }
    corrido(width, a, b) {
        let pts = [a.clone(), b.clone()];
        let rTranslate = this.origin(pts);

        let θ = Math.atan2(pts[1].x, pts[1].y);
        let matrix = Cesium.Matrix2.fromRotation(θ);
        pts[1] = this.rotate(matrix, pts[1]);

        //----------------------------------------------------------
        pts = [
            /*
            CTX.c2(pts[0].x - (width / 2), 0), CTX.c2(pts[0].x - (width / 2), pts[1].y),
            CTX.c2(pts[0].x + (width / 2), pts[1].y), CTX.c2(pts[0].x + (width / 2), 0),
            CTX.c2(pts[0].x - (width / 2), 0)
            */
            pts[0],
            CTX.c2(pts[0].x - (width / 2), (width / 2)),
            CTX.c2(pts[0].x + (width / 2), (width / 2)),
            pts[0], pts[1]
        ];
        //circle, arrow , 
        //----------------------------------------------------------   

        let inv = Cesium.Matrix2.fromRotation(-θ);
        pts = pts.map(p => {
            return this.rotate(inv, p);
        });

        pts.forEach(p => {
            p.x += rTranslate.x;
            p.y += rTranslate.y;
        });
        return pts;
    }
    origin(pts) {
        let org = pts[0].clone();
        pts.forEach(p => {
            p.x -= org.x;
            p.y -= org.y;
        });
        return org;
    }
    rotate(matrix, p) {
        return Cesium.Matrix2.multiplyByVector(matrix, p, new Cesium.Cartesian2());
    }
    inverseMatrix(matrix) {
        return Cesium.Matrix2.negate(matrix, new Cesium.Matrix2());
    }


}

module.exports = { Plane: Plane };