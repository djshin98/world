var { DrawObject } = require('./drawobject');
class Box extends DrawObject {
    constructor() {
        super(3, 4);
    }
    create(layer, points, viewModel) {
        var distance = Cesium.Cartesian3.distance(points[0], points[points.length - 1]);
        if (distance > 0)
            if (this.isReadyToCallbackVariable(points)) {
                this.templateEntity.box.dimensions = (new Cesium.Cartesian3(distance, distance, distance));
            } else {
                return layer.add({
                    position: points[0],
                    box: {
                        dimensions: this.callbackValue(new Cesium.Cartesian3(distance, distance, distance)),
                        fill: true,
                        outline: true,
                        outlineColor: viewModel.lineColor,
                        outlineWidth: viewModel.lineWidth,
                        material: this.callbackColor("faceColor", viewModel),
                        heightReference: Cesium.HeightReference.NONE
                    }
                });
            }
    }
}

module.exports = { Box: Box };