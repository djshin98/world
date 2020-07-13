const { DrawObject } = require('../map3d/draw/drawobject');
const { Plane } = require('../map3d/tangent/plane');
class MissionObstruction extends DrawObject {
    constructor() {
        super(2, 3);
    }
    findHeightFromCartensian(c) {
        return CTX.c2r(c).height;
    }
    setHeightCartensian(c, height) {
        let r = CTX.c2r(c);
        r.height = height;
        return CTX.r2c(r);
    }
    rotate2dPoint(point, radian) {
        let matrix = new Cesium.Matrix2(Math.cos(radian), Math.sin(radian), -Math.sin(radian), Math.cos(radian));
        return Cesium.Matrix2.multiplyByVector(matrix, point, {});
    }
    create(collection, points, viewModel) {
        let p = points;
        if (this.isReadyToCallbackVariable()) {
            let result = [];

            var plane = new Plane(p[0]);
            let pts = plane.input(p);
            let width = plane.distance(pts[0], pts[1]);

            let height = 0;
            if (pts[2])
                height = plane.distance(pts[0], pts[2]);
            result = plane.obstruction(width, height, pts[0], pts[1]);

            result = plane.output(result);
            result = CTX.split.polyline(result, 10);
            this.sketch(collection, result);
            //this.templateEntity.polyline.positions = [points[0], points[1]];
        } else {
            /*
            let option = {
                positions: this.callbackValue(points),
                clampToGround: true,
                color: viewModel.lineColor,
                width: viewModel.lineWidth,
                material: this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth)
            };

            let line1array = [points[0], points[1]];
            */
            if (this.isComplete()) {
                /*
                let pHeight = this.findHeightFromCartensian(points[0]);
                points[1] = this.setHeightCartensian(points[1], pHeight);
                points[2] = this.setHeightCartensian(points[2], pHeight);

                //let p0 = (CTX.c2r(points[0]).longitude > CTX.c2r(points[1]).longitude) ? points[0] : points[1];
                //let p1 = (CTX.c2r(points[0]).longitude > CTX.c2r(points[1]).longitude) ? points[1] : points[0];
                let p0 = points[0];
                let p1 = points[1];
                let p2 = Object.assign({}, points[2]);

                let midpoint = CTX.math.mid(p0, p1);
                //let v1 = (CTX.c2r(midpoint).longitude > CTX.c2r(p2).longitude) ? CTX.math.sub(p1, midpoint) : CTX.math.sub(p0, midpoint);
                let v1 = CTX.math.sub(p1, midpoint);
                //if(CTX.c2r(midpoint)
                let v2 = Object.assign(midpoint);
                v2 = CTX.c2r(v2);
                v2.height += 1000;
                v2 = CTX.r2c(v2);
                v2 = CTX.math.sub(v2, midpoint);

                let vprojectionA = CTX.math.sub(p1, p0);
                let vprojectionB = CTX.math.sub(p2, p0);

                let normal = Cesium.Cartesian3.cross(v1, v2, {});
                //normal = Cesium.Cartesian3.normalize(normal, {});
                //방향 판별 후 normal vector 다시 산출
                //let tvector = CTX.math.sub(p0, p1);
                v1 = (Cesium.Cartesian3.dot(Cesium.Cartesian3.cross(v1, normal, {}), v2) > 0) ? CTX.math.sub(p0, midpoint) : CTX.math.sub(p1, midpoint);
                normal = Cesium.Cartesian3.cross(v1, v2, {});
                normal = Cesium.Cartesian3.normalize(normal, {});

                let projectionResult = Cesium.Cartesian3.projectVector(vprojectionB, vprojectionA, {});
                let projectionLength = Cesium.Cartesian3.magnitude(projectionResult);
                let v3 = Cesium.Cartesian3.multiplyByScalar(normal, projectionLength, {});
                let point3 = CTX.math.add(midpoint, v3);

                let d = Cesium.Cartesian3.distance(p0, p2);

                let line2array = [midpoint, point3];
                */

                /*
                let midpoint = CTX.math.mid(points[0], points[1]);
                let p0 = Object.assign({}, points[0]);
                let p1 = Object.assign({}, points[1]);
                let p2 = Object.assign({}, points[2]);
                let d = Cesium.Cartesian3.distance(p0, p2);
                p0 = CTX.math.sub(p0, midpoint);
                p1 = CTX.math.sub(p1, midpoint);
                p2 = CTX.math.sub(p2, midpoint);
                //points.push(midpoint);
                let plane = new Plane(points[0]);
                let targetPoints = plane.input(points);
                let offset = Object.assign({}, targetPoints[0]);
                Cesium.Cartesian2.subtract(targetPoints[0], offset, targetPoints[0]);
                Cesium.Cartesian2.subtract(targetPoints[1], offset, targetPoints[1]);
                Cesium.Cartesian2.subtract(targetPoints[2], offset, targetPoints[2]);
                let xAxisPoint = new Cesium.Cartesian2(Math.abs(targetPoints[2].x), 0);

                let v1 = Object.assign({}, targetPoints[1]);
                //let v1 = Cesium.Cartesian2.subtract(targetPoints[1], targetPoints[3]);
                let v2 = xAxisPoint;
                Cesium.Cartesian2.normalize(v1, v1);
                Cesium.Cartesian2.normalize(v2, v2);

                let radian = Math.acos(Cesium.Cartesian2.dot(v1, v2));
                //let radian2 = Cesium.Cartesian2.dot(Cesium.Cartesian2.negate(v1, {}), v2);
                //radian = (Math.abs(radian) < Math.abs(radian2)) ? radian : radian2;
                let degree = radian * (180 / Math.PI);

                let transPoints = [];
                transPoints[0] = targetPoints[0];
                transPoints[1] = this.rotate2dPoint(targetPoints[1], -radian);
                transPoints[2] = this.rotate2dPoint(targetPoints[2], -radian);
                //let  = Math.acos(Cesium.Cartesian2.dot(transPoints[1], transPoints[2]));
                let yDirection = ((transPoints[1].x * transPoints[2].y - transPoints[1].y * transPoints[2].x) > 0) ? 1 : -1;
                //let yDirection = transPoints[2].y > 0 ? 1 : -1;
                let distance = Cesium.Cartesian2.distance(transPoints[0], transPoints[1]) / 2;
                let p3 = (transPoints[1].x > 0) ? new Cesium.Cartesian2(distance, d * yDirection) : new Cesium.Cartesian2(-distance, d * yDirection);
                transPoints.push(p3);

                transPoints[1] = this.rotate2dPoint(transPoints[1], radian);
                transPoints[2] = this.rotate2dPoint(transPoints[2], radian);
                transPoints[3] = this.rotate2dPoint(transPoints[3], radian);

                Cesium.Cartesian2.add(transPoints[0], offset, transPoints[0]);
                Cesium.Cartesian2.add(transPoints[1], offset, transPoints[1]);
                Cesium.Cartesian2.add(transPoints[2], offset, transPoints[2]);
                Cesium.Cartesian2.add(transPoints[3], offset, transPoints[3]);

                targetPoints = plane.output(transPoints);

                midpoint = CTX.math.mid(targetPoints[0], targetPoints[1]);
                line1array = [targetPoints[0], targetPoints[1]];
                let line2array = [midpoint, targetPoints[3]];
                

                collection.add(this.index, {
                    position: points[0],
                    polyline: {
                        positions: line1array,
                        clampToGround: true,
                        color: viewModel.lineColor,
                        width: viewModel.lineWidth,
                        material: this.isComplete() ? this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth) : this.callbackColor("lineColor", viewModel)
                    },
                });
                collection.add(this.index, {
                    position: points[0],
                    polyline: {
                        positions: line2array,
                        clampToGround: true,
                        color: viewModel.lineColor,
                        width: viewModel.lineWidth,
                        material: this.isComplete() ? this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth) : this.callbackColor("lineColor", viewModel)
                    },
                });
                
                collection.add(this.index, {
                    position: points[0],
                    polyline: {
                        positions: points,
                        clampToGround: true,
                        color: viewModel.lineColor,
                        width: viewModel.lineWidth,
                        material: this.isComplete() ? this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth) : this.callbackColor("lineColor", viewModel)
                    },
                });
                */
                let result = [];

                var plane = new Plane(p[0]);
                let pts = plane.input(p);
                let width = plane.distance(pts[0], pts[1]);

                let height = 0;
                if (pts[2])
                    height = plane.distance(pts[0], pts[2]);
                result = plane.obstruction(width, height, pts[0], pts[1]);

                result = plane.output(result);

                return collection.add(this.index, {
                    position: points[0],
                    polyline: {
                        positions: result,
                        clampToGround: true,
                        color: viewModel.lineColor,
                        width: viewModel.lineWidth,
                        material: this.isComplete() ? this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth) : this.callbackColor("lineColor", viewModel)
                    },
                });
            }
            return [];
        }

        //if (this.isValidPoints(points)) {



        /*
        var d = Cesium.Cartesian3.distance(points[i], points[i+1]);
        var s = Cesium.Cartesian3.subtract(points[i+1], points[i], {});
        var dv = Cesium.Cartesian3.divideByScalar(s, 2, {});
        var a = Cesium.Cartesian3.add(dv, points[i], {});
        */

        //}
    }
}
module.exports = { MissionObstruction: MissionObstruction };