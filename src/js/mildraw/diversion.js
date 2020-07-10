const { DrawObject } = require('../map3d/draw/drawobject');
const { Plane } = require('../map3d/tangent/plane');
class Diversion extends DrawObject {
    constructor() {
        super(2, 3);
    }
    create(collection, points, viewModel) {
        let p = points;
        if (this.isReadyToCallbackVariable()) {
            let result = [];

            let mid = CTX.math.mid(p[0], p[1]);
            p.push(mid);

            var plane = new Plane(p[0]);
            let pts = plane.input(p);

            result = plane.diversion(pts);

            result = plane.output(result);
            result = CTX.split.polyline(result, 10);
            this.sketch(collection, result);
        } else {
            if (this.isComplete()) {
                let result = [];

                let mid = CTX.math.mid(p[0], p[1]);
                p.push(mid);

                var plane = new Plane(p[0]);
                let pts = plane.input(p);

                result = plane.diversion(pts);

                result = plane.output(result);

                let arcResult = result.filter((d, i) => { if (i < result.length - 6) return true; });
                arcResult.push(arcResult[0]);
                let polylineResult = [];
                for (let i = 6; i > 0; i--) {
                    polylineResult.push(result[result.length - i]);
                }

                collection.add(this.index, {
                    position: points[0],
                    polyline: {
                        positions: polylineResult,
                        clampToGround: true,
                        color: viewModel.lineColor,
                        width: viewModel.lineWidth,
                        material: this.isComplete() ? this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth) : this.callbackColor("lineColor", viewModel)
                    },
                });

                return collection.add(this.index, {
                    position: points[0],
                    polyline: {
                        positions: arcResult,
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
module.exports = { Diversion: Diversion };