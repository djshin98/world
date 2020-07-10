const { DrawObject } = require('./drawobject');
const { CTX } = require('../ctx');
const { SurfaceUtil, LineUtil } = require('./util');
class Slope extends DrawObject {
    constructor() {
        super(2);
    }
    create(layer, points, viewModel) {
        if (this.isValidPoints(points)) {
            let option = {
                positions: points,
                clampToGround: true,
                color: viewModel.lineColor,
                width: viewModel.lineWidth,
                material: this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth)
            };
            let divMeter = 10;
            let divPoints = LineUtil.divides(points, divMeter);

            SurfaceUtil.polyline(layer, divPoints, function(heightedPoints) {
                let degrees = CTX.c2dA(heightedPoints);
                let v = degrees.map((d, i) => { return { x: i * divMeter, y: d.height }; });
                layer.getMap().fireEvent("slope", v);
            });

            return layer.add({
                polyline: option
            });
        }
    }
}
module.exports = { Slope: Slope };