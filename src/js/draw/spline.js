var { DrawObject } = require('./drawobject');
var { LineUtil } = require('./util');
class Spline extends DrawObject {
    constructor() {
        super(3);
    }
    create(collection, points, viewModel) {
        if (this.isValidPoints(points)) {
            let splinePoints = LineUtil.spline(points, 100);
            let option = {
                positions: splinePoints,
                clampToGround: true,
                color: viewModel.lineColor,
                width: viewModel.lineWidth,
                material: this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth)
            };
            return collection.add(this.index, {
                polyline: option
            });
        }
    }
}
module.exports = { Spline: Spline };