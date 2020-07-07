var { DrawObject } = require('./drawobject');
class MilLine1 extends DrawObject {
    constructor() {
        super(2);
    }
    create(collection, points, viewModel) {
        if (this.isReadyToCallbackVariable()) {
            this.templateEntity.polyline.positions = points;
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

                collection.add(this.index, {
                    polyline: option
                });

                option.width = viewModel.lineWidth * 2;
                option.material = this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth);
                collection.add(this.index, {
                    polyline: option
                });
            }

            return collection.add(this.index, {
                polyline: {
                    positions: this.callbackValue(points),
                    clampToGround: true,
                    material: viewModel.frameColor,
                    width: 3,
                }
            });
        }
        /*
        if (this.isValidPoints(points)) {
            collection.add(this.index, {
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

            collection.add(this.index, {
                polyline: option
            });

            option.width = viewModel.lineWidth * 2;
            option.material = this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth);
            return collection.add(this.index, {
                polyline: option
            });

        }
        */
    }
}
module.exports = { MilLine1: MilLine1 };