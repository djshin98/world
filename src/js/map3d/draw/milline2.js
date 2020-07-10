var { DrawObject } = require('./drawobject');
class MilLine1 extends DrawObject {
    constructor() {
        super(2);
    }
    create(layer, points, viewModel) {
        if (this.isValidPoints(points)) {
            let option = {
                positions: points,
                clampToGround: true,
                color: viewModel.faceColor,
                width: viewModel.lineWidth,
                fill: true,
                //outline : true,
                //outlineWidth : 3,
                //outlineColor : viewModel.lineColor,
                cornerType: Cesium.CornerType.ROUNDED,
                //classificationType : Cesium.ClassificationType.TERRAIN
            };

            option.material = new Cesium.ColorMaterialProperty(viewModel.faceColor);

            return layer.add({
                corridor: option
            });
        }
    }
}
module.exports = { MilLine1: MilLine1 };