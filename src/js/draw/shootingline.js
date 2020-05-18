var { DrawObject } = require('./drawobject');
var { ArcUtil } = require('./util');
var { CTX } = require('../map3d/ctx');

class ShootingLine extends DrawObject {
    constructor() {
        super(3);
    }
    create(collection, points, viewModel) {
        if (this.isValidPoints(points)) {
            let p = points;
            var result = [p[0]].concat(ArcUtil.arcPoints2c(p[0], p[1], p[2], CTX.θ(p[0], p[1], p[2])));
            result = result.concat([p[0], p[1]]);
            /*var points_arc = ArcUtil.arcPoints2c(points[0], points[1], points[2], θ);
            var points_result = [];
            points_result.push(points[0]);
            points_arc.map((d) => { points_result.push(d); });
            points_result.push(points[0]);
            points_result.push(points[1]);
            */
            return collection.add(this.index, {
                position: points[0],
                polyline: {
                    positions: result,
                    clampToGround: true,
                    width: viewModel.lineWidth,
                    material: this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth)
                }
            });
        }
    }
}
module.exports = { ShootingLine: ShootingLine };