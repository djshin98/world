var { DrawObject } = require('./drawobject');
var { LineUtil } = require('./util');
class Spline extends DrawObject {
    constructor() {
        super(3);
    }
    create(collection, points, viewModel) {
        if (this.isReadyToCallbackVariable()) {
            this.templateEntity.polyline.positions = LineUtil.spline(points, 100);
        } else {
            //let splinePoints = LineUtil.spline(points, 100);
            let option = {
                positions: this.callbackValue(LineUtil.spline(points, 100)),
                clampToGround: true,
                //color: viewModel.lineColor,
                width: viewModel.lineWidth,
                meterial: new Cesium.PolylineOutlineMaterialProperty({
                        color: Cesium.Color.BLACK, //viewModel.lineColor,
                        outlineColor: Cesium.Color.BLACK,
                        outlineWidth: 2
                    })
                    //material: new Cesium.PolylineArrowMaterialProperty(viewModel.lineColor)
                    //material: this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth)
            };
            return collection.add(this.index, {
                polyline: option
            });
        }
        /*
        if (this.isValidPoints(points)) {
            let splinePoints = LineUtil.spline(points, 100);
            let option = {
                positions: splinePoints,
                clampToGround: true,
                //color: viewModel.lineColor,
                width: viewModel.lineWidth,
                meterial: new Cesium.PolylineOutlineMaterialProperty({
                        color: Cesium.Color.BLACK, //viewModel.lineColor,
                        outlineColor: Cesium.Color.BLACK,
                        outlineWidth: 2
                    })
                    //material: new Cesium.PolylineArrowMaterialProperty(viewModel.lineColor)
                    //material: this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth)
            };
            return collection.add(this.index, {
                polyline: option
            });
        }
        */
    }
}
module.exports = { Spline: Spline };