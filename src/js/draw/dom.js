var { DrawObject } = require('./drawobject');
class Dom extends DrawObject {
    constructor() {
        super(2);
    }
    create(collection, points, viewModel) {
        if (points && points.length >= this.minPointCount) {
            var distance = Cesium.Cartesian3.distance(points[0], points[points.length - 1]);
            if (distance > 0) {
                return collection.add(this.index, {
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
    }
}
module.exports = { Dom: Dom };