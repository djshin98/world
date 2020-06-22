var { DrawObject } = require('./drawobject');
var { ArcUtil } = require('./util');
var { CTX } = require('../map3d/ctx');

class ShootingLine extends DrawObject {
    constructor() {
        super(3, 3);
    }
    create(collection, points, viewModel) {
        let p = points;
        let result = [p[0]].concat(ArcUtil.arcPoints2c(p[0], p[1], p[2], CTX.θ(p[0], p[1], p[2])));
        result = result.concat([p[0], p[1]]);

        if (this.isReadyToCallbackVariable()) {
            this.templateEntity.polyline.positions = result;
        } else {

            return collection.add(this.index, {
                position: points[0],
                polyline: {
                    positions: this.callbackValue(result),
                    clampToGround: true,
                    width: viewModel.lineWidth,
                    material: this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth)
                }
            });
        }
    }
}
module.exports = { ShootingLine: ShootingLine };