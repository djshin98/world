var { DrawObject } = require('./drawobject');
class AirBox extends DrawObject {
    constructor() {
        super(3);
    }
    create(collection, points, viewModel) {
        if (this.isValidPoints(points)) {
            return collection.add(this.index, {
                position: points[0],
                polygon: {
                    hierarchy: points,
                    material: new Cesium.ColorMaterialProperty(viewModel.faceColor),
                    fill: true,
                    outline: true,
                    outlineColor: viewModel.lineColor,
                    outlineWidth: viewModel.lineWidth,
                    material: new Cesium.ColorMaterialProperty(viewModel.faceColor),
                    height: viewModel.size * 1000,
                    extrudedHeight: viewModel.shapeSize * 1000,
                    extrudedHeightReference: Cesium.HeightReference.NONE,
                    heightReference: Cesium.HeightReference.NONE
                }
            });
        }
    }
    type1(collection, name, degree, minHeight, maxHeight, _viewModel) {
        if (collection) {
            let points = [CTX.d2c(degree.lb), CTX.d2c(degree.lu), CTX.d2c(degree.ru), CTX.d2c(degree.rb)];
            let viewModel = this.setViewModel({
                faceColor: Cesium.Color.WHITE,
                faceTransparent: 0.6,
                lineColor: Cesium.Color.YELLOW,
                lineTransparent: 0.6
            }, _viewModel);

            let option = {
                position: points[0],
                name: name,
                polygon: {
                    hierarchy: points,
                    material: new Cesium.ColorMaterialProperty(viewModel.faceColor),
                    fill: true,
                    outline: true,
                    outlineColor: viewModel.lineColor,
                    outlineWidth: viewModel.lineWidth,
                    material: new Cesium.ColorMaterialProperty(viewModel.faceColor),
                    height: minHeight,
                    extrudedHeight: maxHeight,
                    extrudedHeightReference: Cesium.HeightReference.RELATIVE_TO_GROUND,
                    heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND
                }
            };

            if (Cesium.defined(name) && name.length > 0) {
                option.label = {
                    text: name,
                    fillColor: viewModel.lineColor,
                    font: '18px Helvetica', //font : '16px 굴림체',
                    //pixelOffset : new Cesium.Cartesian2(0, -20),
                    //eyeOffset : CTX.c(0,minHeight+maxHeight+1000,-200),
                    height: maxHeight,
                    verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                    heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND
                }
            }

            return collection.add(this.index, option);
        }
    }
}
module.exports = { AirBox: AirBox };