var { DrawObject } = require('./drawobject');
class PointX extends DrawObject {
    constructor() {
        super(2, 2)
    }
    create(collection, points, viewModel) {
        var distance = Cesium.Cartesian3.distance(points[0], points[points.length - 1]);
        if (this.isReadyToCallbackVariable()) {
            this.templateEntity.ellipse.semiMinorAxis = distance;
            this.templateEntity.ellipse.semiMajorAxis = distance;
        } else {

            if (distance == 0) { distance = 10 }
            return collection.add(this.index, {
                position: points[0],
                ellipse: {
                    semiMinorAxis: this.callbackValue(distance),
                    semiMajorAxis: this.callbackValue(distance),
                    fill: true,
                    outline: true,
                    outlineColor: viewModel.lineColor,
                    outlineWidth: viewModel.lineWidth,
                    material: this.callbackColor("faceColor", viewModel),
                    heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND
                }
            });
        }
    }
}
module.exports = { PointX: PointX };