var { DrawObject } = require('./drawobject');
var { VisibilityUtil } = require('./util');
var { CTX } = require("../map3d/ctx");
class VisibilityAnalysys extends DrawObject {
    constructor() {
        super(2);
    }
    create(collection, points, viewModel) {
        if (points && points.length >= this.minPointCount) {
            let polylines = VisibilityUtil.circle(CTX.c2d(points[0]), CTX.c2d(points[1]), 10);
            if (Cesium.defined(polylines)) {
                polylines.forEach(polyline => {
                    collection.add(this.index, {
                        polyline: {
                            positions: polyline,
                            color: viewModel.lineColor,
                            width: viewModel.lineWidth
                        }
                    });
                });
            }

        }
    }
}
module.exports = { VisibilityAnalysys: VisibilityAnalysys };