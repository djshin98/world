const { DrawObject } = require('../map3d/draw/drawobject');
const { Plane } = require('../map3d/tangent/plane');
class Debacle extends DrawObject {
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
            result = plane.debacle(pts);

            result = plane.output(result);
            result = CTX.split.polyline(result, 10);
            this.sketch(collection, result);
        } else {
            if (this.isComplete()) {
                let result = [];

                var plane = new Plane(p[0]);
                let pts = plane.input(p);
                let width = plane.distance(pts[0], pts[1]);

                let height = 0;
                if (pts[2])
                    height = plane.distance(pts[0], pts[2]);
                result = plane.debacle(pts);

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
    }
}
module.exports = { Debacle: Debacle };