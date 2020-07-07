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
    turnStack(points, originIndex, verticalizeIndex, turningWork) {
        let pts = Object.assign(points);
        let rTranslate = this.origin(pts, originIndex);

        let θ = Math.atan2(pts[verticalizeIndex].x, pts[verticalizeIndex].y);
        let matrix = Cesium.Matrix2.fromRotation(θ);
        pts[verticalizeIndex] = this.rotate(matrix, pts[verticalizeIndex]);

        if (Q.isValid(turningWork)) {
            turningWork(pts);
        }
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
    distance(a, b) {
        return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
    }
    obstruction(width, height, a, b) {
        let pts = [a.clone(), b.clone()];
        let rTranslate = this.origin(pts);

        let result = [];
        result.push(this.turnStack(pts, 0, 1, (pts) => {
            return {
                type: "polyline",
                geometry: [
                    CTX.c2(0, height), pts[0],
                    CTX.c2(pts[0].x - (width / 2), 0),
                    CTX.c2(pts[0].x + (width / 2), 0)
                ]
            };
        }));

        result.push(this.turnStack(pts, 1, 2, (pts) => {
            return {
                type: "polylgon",
                geometry: [
                    CTX.c2(0, height), pts[0],
                    CTX.c2(pts[0].x - (width / 2), 0),
                    CTX.c2(pts[0].x + (width / 2), 0)
                ]
            };
        }));

        result.push(this.turnStack(pts, 2, 3, (pts) => {
            return {
                type: "polylgon",
                geometry: [
                    CTX.c2(0, height), pts[0],
                    CTX.c2(pts[0].x - (width / 2), 0),
                    CTX.c2(pts[0].x + (width / 2), 0)
                ]
            };
        }));

        return result;
    }
    debacle(points) {
        let pts = Object.assign(points);
        let rTranslate = this.origin(pts);

        let θ = Math.atan2(pts[1].x, pts[1].y);
        let matrix = Cesium.Matrix2.fromRotation(θ);
        //pts[1] = this.rotate(matrix, pts[1]);
        pts = pts.map((e) => { return this.rotate(matrix, e) });

        //----------------------------------------------------------
        // if (pts.length == 1, == 2, == 3)
        let width = this.distance(pts[0], pts[1]);
        let height = 0;

        if (pts[2])
            height = this.distance(pts[0], pts[2]);

        pts = [
            pts[0], pts[1],
            CTX.c2(0, pts[0].y + width / 2),
            CTX.c2((width / 5), pts[0].y + width / 2)
            /*
             pts[0],
             CTX.c2(pts[0].x - (width / 2), (width / 2)),
             CTX.c2(pts[0].x + (width / 2), (width / 2)),
             pts[0], pts[1]
             */
        ];
        if (height != 0) {
            pts = [
                pts[0], CTX.c2(pts[0].x - (height / 4) * 2), pts[0],
                CTX.c2(0, pts[0].y + width / 2),
                CTX.c2((width / 5), pts[0].y + width / 2),
                CTX.c2(-(height / 4) * 3, pts[0].y + width / 2),
                CTX.c2(0, pts[0].y + width / 2),
                pts[1],
                CTX.c2(-(height / 4) * 4, pts[1].y),
            ];
        }
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
            
            pts[0],
            CTX.c2(pts[0].x - (width / 2), (width / 2)),
            CTX.c2(pts[0].x + (width / 2), (width / 2)),
            pts[0], pts[1]
            */
            CTX.c2(pts[0].x - (width / 2), 0), CTX.c2(pts[0].x + (width / 2), 0), pts[0], pts[1]
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

    arc() {
        let points = [];
        let startAngel = 0;
        let endAngle = -180;


        let matrix = Cesium.Matrix2.fromRotation(i);

        Cesium.Matrix2.multiplyByVector(matrix, points[1], new Cesium.Cartesian2());


    }

    delay(width, points) {
        //let pts = [points[0].clone(), points[1].clone(), points[2].clone()];
        let pts = [];
        for (let i = 0; i < points.length; i++) {
            pts.push(points[i].clone());
        }
        let rTranslate = this.origin(pts);

        let θ = Math.atan2(pts[1].x, pts[1].y);
        let matrix = Cesium.Matrix2.fromRotation(θ);
        pts = pts.map(p => { return this.rotate(matrix, p); });
        //----------------------------------------------------------

        let p = pts;
        let tp = [];

        tp = [
            CTX.c2(p[0].x - (width / 3), (width / 3)),
            p[0],
            CTX.c2(p[0].x + (width / 3), (width / 3)),
            p[0]
        ];

        tp.push(p[0]);
        tp.push(p[1]);
        tp.push(p[2]);

        let res = [];

        pts[2].y = pts[1].y;

        for (let i = 0; i < 360; i = i + 2) {
            let r = Cesium.Math.toRadians(pts[2].x > 0 ? i : i + 180);
            let rotated = CTX.c2(pts[2].x * Math.cos(r), pts[2].x * Math.sin(r));
            rotated.x += pts[2].x;
            rotated.y += pts[1].y;
            res.push(rotated);
        }
        //res.push(pts[2])
        //res.reverse();
        tp[tp.length - 1] = res[0];
        for (let i = 1; i < res.length; i++) {
            tp.push(res[i]);
        }

        pts = tp;

        /*
        let tmp_res = res;

        let d = this.distance(points[0], points[1]);
        for(let i=0; i<tmp_res.length; i++) {
            let da = new Cesium.Cartesian2(tmp_res[i].x + d, tmp_res[i].y);
            tmp_res[i] = da;
        }

       //let tmpPts = Object.assign(pts);

        tmp_res.push(
            CTX.c2(tmp_res[tmp_res.length - 1].x - (width / 2), tmp_res[tmp_res.length - 1].y - (width / 2)),
            tmp_res[tmp_res.length - 1],
            CTX.c2(tmp_res[tmp_res.length - 1].x + (width / 2), tmp_res[tmp_res.length - 1].y - (width / 2)),);
        

        
        for(let i=0; i<tmp_res.length; i++) {
            let da = new Cesium.Cartesian2(tmp_res[i].x - d, tmp_res[i].y);
            tmp_res[i] = da;
        }
        


        res = tmp_res;

        pts = res;
        */


        /*
        let pts2 = [];
        pts2 = [
            CTX.c2(tmpPts[2].x - (width / 2), tmpPts[2].y - (width / 2)),
            tmpPts[2],
            CTX.c2(tmpPts[2].x + (width / 2), tmpPts[2].y - (width / 2)),
        ]
        
        
        res.push(pts2[0]); 
        res.push(pts2[1]); 
        res.push(pts2[2]);
        pts = res;
        */

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





    secure(points) {
        let pts = [];
        for (let i = 0; i < points.length; i++) {
            pts.push(points[i].clone());
        }
        let rTranslate = this.origin(pts);

        let θ = Math.atan2(pts[1].x, pts[1].y);
        let matrix = Cesium.Matrix2.fromRotation(θ);
        pts[0] = this.rotate(matrix, pts[0]);
        pts[1] = this.rotate(matrix, pts[1]);

        let width = this.distance(pts[0], pts[1]);

        //------------------------------------------------

        let rp = [];
        let res = [];

        rp = [
            CTX.c2(pts[1].x - (width / 3), (width / 3)),
            pts[1],
            CTX.c2(pts[1].x + (width / 3), (width / 3)),
            pts[1]
        ];


        //res.push(pts[2])

        rp[rp.length - 1] = res[0];
        for (let i = 1; i < res.length; i++) {
            rp.push(res[i]);
        }

        rp.push(pts[0]);
        rp.push(pts[1]);


        for (let i = 0; i < 330; i = i + 2) {
            let p = pts[1];
            let m = Cesium.Matrix2.fromRotation(Cesium.Math.toRadians(i));
            let rotated = Cesium.Matrix2.multiplyByVector(m, p, new Cesium.Cartesian2());
            res.push(rotated);
        }

        pts = res;


        //------------------------------------------------

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