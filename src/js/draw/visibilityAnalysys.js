var { DrawObject } = require('./drawobject');
var { VisibilityUtil } = require('./util');
var { CTX } = require("../map3d/ctx");
class VisibilityAnalysys extends DrawObject {
    constructor() {
        super(2);
    }
    create(collection, points, viewModel) {
        if (points && points.length >= this.minPointCount) {
            var distance = Cesium.Cartesian3.distance(points[0], points[1]);
            let polylines = VisibilityUtil.radiation(CTX.c2d(points[0]), CTX.c2d(points[1]), {
                height: 10,
                divide: 10,
                degree: 3,
                terrian: true
            });
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