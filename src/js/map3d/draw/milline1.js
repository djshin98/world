var { DrawObject } = require('./drawobject');
class MilLine1 extends DrawObject {
    constructor() {
        super(2);
    }
    create(layer, points, viewModel) {
        if (this.isReadyToCallbackVariable()) {


        } else {
            if (this.isComplete()) {
                let option = {
                    positions: points,
                    clampToGround: true,
                    color: viewModel.faceColor,
                    width: viewModel.lineWidth,
                    cornerType: Cesium.CornerType.ROUNDED
                };

                option.material = new Cesium.ColorMaterialProperty(viewModel.faceColor);

                layer.add({
                    polyline: option
                });

                option.width = viewModel.lineWidth * 2;
                option.material = this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth);
                return layer.add({
                    polyline: option
                });
            }

            return layer.add({
                polyline: {
                    positions: points,
                    clampToGround: true,
                    material: viewModel.frameColor,
                    width: 3,
                }
            });
        }
        /*
        if (this.isValidPoints(points)) {
            layer.add( {
                polyline: {
                    positions: points,
                    clampToGround: true,
                    material: viewModel.frameColor,
                    width: 3,
                }
            });

            let option = {
                positions: points,
                clampToGround: true,
                color: viewModel.faceColor,
                width: viewModel.lineWidth,
                cornerType: Cesium.CornerType.ROUNDED
            };

            option.material = new Cesium.ColorMaterialProperty(viewModel.faceColor);

            layer.add( {
                polyline: option
            });

            option.width = viewModel.lineWidth * 2;
            option.material = this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth);
            return layer.add( {
                polyline: option
            });

        }
        */
    }
}
module.exports = { MilLine1: MilLine1 };