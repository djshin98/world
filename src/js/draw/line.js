var { DrawObject } = require('./drawobject');
class Line extends DrawObject {
    constructor() {
        super(1, 20);
    }
    create(collection, points, viewModel) {
        if (this.isReadyToCallbackVariable()) {
            this.templateEntity.polyline.positions = points;
        } else {
            let option = {
                positions: this.callbackValue(points),
                clampToGround: true,
                color: viewModel.lineColor,
                width: viewModel.lineWidth,
                material: this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth)
            };

            if (this.isComplete()) {
                for (var i = 0; i < points.length; i++) {
                    if (i != points.length - 1) {
                        var d = Cesium.Cartesian3.distance(points[i], points[i + 1]);
                        var s = Cesium.Cartesian3.subtract(points[i + 1], points[i], {});
                        var dv = Cesium.Cartesian3.divideByScalar(s, 2, {});
                        var a = Cesium.Cartesian3.add(dv, points[i], {});

                        collection.add(this.index, {
                            position: this.callbackValue(a),
                            label: {
                                text: CTX.displayMeter(d, 3),
                                font: '15px sans-serif',
                                fillColor: Cesium.Color.WHITE,
                                showBackground: true,
                                backgroundColor: Cesium.Color(1, 1, 1, 1),
                                heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
                            }

                        });
                    }
                }
            }
            return collection.add(this.index, {
                position: points[0],
                polyline: {
                    positions: this.callbackValue(points),
                    clampToGround: true,
                    color: viewModel.lineColor,
                    width: viewModel.lineWidth,
                    material: this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth)
                },
            });
        }

        //if (this.isValidPoints(points)) {



        /*
        var d = Cesium.Cartesian3.distance(points[i], points[i+1]);
        var s = Cesium.Cartesian3.subtract(points[i+1], points[i], {});
        var dv = Cesium.Cartesian3.divideByScalar(s, 2, {});
        var a = Cesium.Cartesian3.add(dv, points[i], {});
        */

        //}
    }
}
module.exports = { Line: Line };