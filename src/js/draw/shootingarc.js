var { DrawObject } = require('./drawobject');
var { ArcUtil } = require('./util');
var { CTX } = require('../map3d/ctx');

class ShootingArc extends DrawObject {
    constructor() {
        super(3, 3);
    }
    create(collection, points, viewModel) {
        let p = points;
        let result = [p[0]].concat(ArcUtil.arcPoints2c(p[0], p[1], p[2], CTX.θ(p[0], p[1], points[2])));

        if (this.isReadyToCallbackVariable()) {
            this.templateEntity.polygon.hierarchy = result;
            this.templateEntity.polyline.positions = result;
        } else {
            let result_line = result;
            result_line.push(points[0]);
            return collection.add(this.index, {
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
    }
}
module.exports = { ShootingArc: ShootingArc };