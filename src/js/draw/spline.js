var { DrawObject } = require('./drawobject');
class Spline extends DrawObject {
    constructor() {
        super(2);
    }
    create(collection, points, viewModel) {
        if (points && points.length >= this.minPointCount) {
            let option = {
                positions: points,
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