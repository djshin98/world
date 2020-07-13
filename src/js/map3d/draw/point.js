const { DrawObject } = require('./drawobject');

class Point extends DrawObject {
    constructor() {
        super(1, 1);
    }
    create(layer, points, viewModel) {
        if (this.isReadyToCallbackVariable()) {

        } else {
            let distance = viewModel.size;
            return points.map(point => {
                return layer.add({
                    position: point,
                    point: {
                        pixelSize: distance,
                        fill: true,
                        material: viewModel.faceColor,
                        outline: true,
                        outlineColor: viewModel.lineColor,
                        outlineWidth: viewModel.lineWidth,
                        heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
                    }
                });
            });
        }
    }
}
module.exports = { Point: Point };