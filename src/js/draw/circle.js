var { DrawObject } = require('./drawobject');
class Circle extends DrawObject {
    constructor() {
        super(2);
    }
    create(collection, points, viewModel) {
        if (this.isValidPoints(points)) {
            var distance = Cesium.Cartesian3.distance(points[0], points[points.length - 1]);
            if (distance > 0) {

                return collection.add(this.index, {
                    position: points[0],
                    ellipse: {
                        semiMinorAxis: distance,
                        semiMajorAxis: distance,
                        fill: true,
                        outline: true,
                        outlineColor: viewModel.lineColor,
                        outlineWidth: viewModel.lineWidth,
                        material: new Cesium.ColorMaterialProperty(viewModel.faceColor),
                        extrudedHeight: 100,
                        heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND
                    }
                });
            }
        }
    }
}
module.exports = { Circle: Circle };