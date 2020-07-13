var { DrawObject } = require('./drawobject');
var { ArcUtil } = require('./util');
var { CTX } = require('../ctx');

class ShootingArc extends DrawObject {
    constructor() {
        super(2, 3);
    }
    create(layer, points, viewModel) {
        let p = points;


        if (this.isReadyToCallbackVariable()) {
            let result = [];
            if (p.length == 3) {
                result = [p[0]].concat(CTX.split.arc(p[0], p[1], p[2]));
                p[2] = result[result.length - 1];
            } else {
                p.push(p[1]);
            }
            result = result.concat(CTX.split.polyline([p[2], p[0], p[1]], 10));
            this.sketch(layer, result);
        } else {
            if (this.isComplete()) {
                let result = [p[0]].concat(CTX.split.arc(p[0], p[1], p[2]));
                let result_line = result;

                result_line.push(points[0]);
                return layer.add({
                    position: points[0],
                    polygon: {
                        hierarchy: this.callbackValue(result),
                        material: this.callbackColor("faceColor", viewModel),
                        heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
                    },
                    polyline: {
                        positions: this.callbackValue(result_line),
                        clampToGround: true,
                        width: viewModel.lineWidth,
                        material: this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth)
                    }
                });
            }
            return [];
        }
    }
}
module.exports = { ShootingArc: ShootingArc };