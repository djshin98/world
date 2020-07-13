var { DrawObject } = require('./drawobject');
class ArrowLine extends DrawObject {
    constructor() {
        super(2);
    }
    create(layer, points, viewModel) {
        if (this.isReadyToCallbackVariable()) {
            this.templateEntity.polyline.positions = points;
        } else {
            let option = {
                positions: this.callbackValue(points),
                clampToGround: true,
                color: viewModel.lineColor,
                width: viewModel.lineWidth
            };
            option.material = new Cesium.PolylineArrowMaterialProperty(viewModel.lineColor);
            return layer.add({
                position: points[0],
                polyline: option,
            });
        }

        /*
        if (this.isValidPoints(points)) {   
            let option = {
                positions: points,
                clampToGround: true,
                color: viewModel.lineColor,
                width: viewModel.lineWidth
            };
            */




    }
}




module.exports = { ArrowLine: ArrowLine };