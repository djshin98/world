var { DrawObject } = require('./drawobject');
class ArrowLine extends DrawObject {
    constructor() {
        super(2);
    }
    create(collection, points, viewModel) {
        if (this.isValidPoints(points)) {
            let option = {
                positions: points,
                clampToGround: true,
                color: viewModel.lineColor,
                width: viewModel.lineWidth
            };

            option.material = new Cesium.PolylineArrowMaterialProperty(viewModel.lineColor);
            return collection.add(this.index, {
                polyline: option
            });
        }
    }
}
module.exports = { ArrowLine: ArrowLine };