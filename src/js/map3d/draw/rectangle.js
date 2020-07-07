var { DrawObject } = require('./drawobject');
class Rectangle extends DrawObject {
    constructor() {
        super(3, 4);
    }
    create(collection, points, viewModel) {
        if (this.isReadyToCallbackVariable()) {
            let v = Cesium.Rectangle.fromCartesianArray(points);
            this.templateEntity.rectangle.coordinates = v;
        } else {
            let distance = Cesium.Cartesian3.distance(points[0], points[points.length - 1]);
            let v = Cesium.Rectangle.fromCartesianArray(points);
            if (distance > 0) {
                let secLatitude = 0.03054402;
                let secLongitude = 0.02465;
                return collection.add(this.index, {
                    position: points[0],
                    rectangle: {
                        coordinates: this.callbackValue(v),
                        //height:1000,
                        //extrudedHeight:1000,
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
}
module.exports = { Rectangle: Rectangle };