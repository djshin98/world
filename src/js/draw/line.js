var { DrawObject } = require('./drawobject');
class Line extends DrawObject {
    constructor() {
        super(2);
    }
    create(collection, points, viewModel) {
        if (this.isReadyToCallbackVariable()) {

        } else {

        }

        if (this.isValidPoints(points)) {

            let option = {
                positions: points,
                clampToGround: true,
                color: viewModel.lineColor,
                width: viewModel.lineWidth,
                material: this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth)
            };


            for (var i = 0; i < points.length; i++) {
                if (i != points.length - 1) {
                    var d = Cesium.Cartesian3.distance(points[i], points[i + 1]);
                    var s = Cesium.Cartesian3.subtract(points[i + 1], points[i], {});
                    var dv = Cesium.Cartesian3.divideByScalar(s, 2, {});
                    var a = Cesium.Cartesian3.add(dv, points[i], {});

                    collection.add(this.index, {
                        position: a,
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

            /*
            var d = Cesium.Cartesian3.distance(points[i], points[i+1]);
            var s = Cesium.Cartesian3.subtract(points[i+1], points[i], {});
            var dv = Cesium.Cartesian3.divideByScalar(s, 2, {});
            var a = Cesium.Cartesian3.add(dv, points[i], {});
            */
            collection.add(this.index, {
                position: a,
                polyline: option,
            });
        }
    }
}
module.exports = { Line: Line };