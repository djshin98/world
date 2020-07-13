var { DrawObject } = require('./drawobject');
class PointO extends DrawObject {
    constructor() {
        super(1, 1);
    }
    create(layer, points, viewModel) {
        if (this.isReadyToCallbackVariable()) {

        } else {
            let distance = viewModel.size;
            return layer.add({
                position: points[0],
                ellipse: {
                    semiMinorAxis: distance,
                    semiMajorAxis: distance,
                    fill: true,
                    material: viewModel.faceColor,
                    outline: true,
                    outlineColor: viewModel.lineColor,
                    outlineWidth: viewModel.lineWidth,

                    heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
                }
            });
        }
    }
}
module.exports = { PointO: PointO };