var { DrawObject } = require('./drawobject');
class Alert extends DrawObject {
    constructor() {
        super(1);
    }
    create(collection, points, viewModel) {
        if (this.isValidPoints(points)) {
            let distance = viewModel.size;
            let lastSec = 0;
            let lastColor = viewModel.lineColor;
            points.forEach(point => {
                collection.add(this.index, {
                    position: point,
                    point: {
                        pixelSize: distance,
                        fill: false,
                        outline: true,
                        outlineColor: new Cesium.CallbackProperty(function(time, result) {
                            let sec = new Date().getSeconds();
                            if (lastSec != sec) {
                                let color = (sec % 2 == 0) ? new Cesium.Color(255, 0, 0) : new Cesium.Color(0, 0, 255);
                                lastColor = color;
                                lastSec = sec;
                            }
                            return lastColor;

                        }, false),
                        outlineWidth: viewModel.lineWidth,

                        heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
                    }
                });
            });
        }
    }
}
module.exports = { Alert: Alert };