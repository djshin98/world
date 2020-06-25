var { DrawObject } = require('../draw/drawobject');
var { CTX } = require('../map3d/ctx');
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
    create(collection, points, viewModel) {
        if (this.isReadyToCallbackVariable()) {
            this.templateEntity.polyline.positions = [points[0], points[1]];
        } else {
            let option = {
                positions: this.callbackValue(points),
                clampToGround: true,
                color: viewModel.lineColor,
                width: viewModel.lineWidth,
                material: this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth)
            };

            let line1array = [points[0], points[1]];

            if (this.isComplete()) {
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
                v2.height += 100;
                v2 = CTX.r2c(v2);
                v2 = CTX.math.sub(v2, midpoint);

                let vprojectionA = CTX.math.sub(p1, p0);
                let vprojectionB = CTX.math.sub(p2, p0);

                let normal = Cesium.Cartesian3.cross(v1, v2, {});
                //normal = Cesium.Cartesian3.normalize(normal, {});
                //방향 판별 후 normal vector 다시 산출
                v1 = (Cesium.Cartesian3.dot(Cesium.Cartesian3.cross(v1, normal, {}), v2)) > 0 ? CTX.math.sub(p0, midpoint) : CTX.math.sub(p1, midpoint);
                normal = Cesium.Cartesian3.cross(v1, v2, {});
                normal = Cesium.Cartesian3.normalize(normal, {});

                let projectionResult = Cesium.Cartesian3.projectVector(vprojectionB, vprojectionA, {});
                let projectionLength = Cesium.Cartesian3.magnitude(projectionResult);
                let v3 = Cesium.Cartesian3.multiplyByScalar(normal, projectionLength, {});
                let point3 = CTX.math.add(midpoint, v3);

                let d = Cesium.Cartesian3.distance(p0, p2);

                let line2array = [midpoint, point3];

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
            }
            return collection.add(this.index, {
                position: points[0],
                polyline: {
                    positions: line1array,
                    clampToGround: true,
                    color: viewModel.lineColor,
                    width: viewModel.lineWidth,
                    material: this.isComplete() ? this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth) : this.callbackColor("lineColor", viewModel)
                },
            });
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