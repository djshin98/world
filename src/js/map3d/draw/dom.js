var { DrawObject } = require('./drawobject');
class Dom extends DrawObject {
    constructor() {
        super(2);
    }
    create(layer, points, viewModel) {
        if (this.isReadyToCallbackVariable()) {
            let distance = Cesium.Cartesian3.distance(points[0], points[points.length - 1])
            this.templateEntity.ellipsoid.radii = new Cesium.Cartesian3(distance, distance, distance);
        } else {
            let distance = Cesium.Cartesian3.distance(points[0], points[points.length - 1]);
            if (distance > 0) {
                return layer.add({
                    position: points[0],
                    ellipsoid: {
                        radii: this.callbackValue(new Cesium.Cartesian3(distance, distance, distance)),
                        outline: true,
                        outlineColor: viewModel.lineColor,
                        material: viewModel.faceColor,
                        heightReference: Cesium.HeightReference.NONE
                    }
                });
            }
        }
        /*
        if (this.isValidPoints(points)) {
            var distance = Cesium.Cartesian3.distance(points[0], points[points.length - 1]);
            if (distance > 0) {
                return layer.add( {
                    position: points[0],
                    ellipsoid: {
                        radii: new Cesium.Cartesian3(distance, distance, distance),
                        outline: true,
                        outlineColor: viewModel.lineColor,
                        material: viewModel.faceColor,
                        heightReference: Cesium.HeightReference.NONE
                    }
                });
            }
        }
        */
    }
}
module.exports = { Dom: Dom };