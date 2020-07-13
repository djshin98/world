var { DrawObject } = require('./drawobject');
var { CTX } = require('../ctx');

class LineEO extends DrawObject {
    constructor() {
        super(2);
    }
    create(layer, points, viewModel) {
        if (this.isReadyToCallbackVariable()) {
            //this.templateEntity.polyline.positions = points;
        } else {
            let option = {
                positions: points, //this.callbackValue(points),
                clampToGround: true,
                color: viewModel.lineColor,
                width: viewModel.lineWidth,
                material: this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth)
            };
            return layer.add({
                polyline: option
            });
        }
        /*
        if (this.isValidPoints(points)) {
            let option = {
                positions: points,
                clampToGround: true,
                color: viewModel.lineColor,
                width: viewModel.lineWidth,
                material: this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth)
            };
            return layer.add( {
                polyline: option
            });
        }
        */
    }
    type1(layer, name, points, viewModel) {
        if (points && points.length >= this.minPointCount) {

            viewModel = this.setViewModel({
                faceColor: Cesium.Color.BLUE,
                faceTransparent: 0.6,
                lineColor: Cesium.Color.YELLOW,
                lineTransparent: 0.6
            }, Q.isValid(viewModel) ? viewModel : {});

            let option = {
                positions: CTX.d2cA(points),
                clampToGround: true,
                color: viewModel.lineColor,
                width: viewModel.lineWidth,
                material: this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth)
            };
            return layer.add({
                name: name,
                polyline: option
            });
        }
    }
}
module.exports = { LineEO: LineEO };