var { DrawObject } = require('./drawobject');
var { VisibilityUtil } = require('./util');
var { CTX } = require("../map3d/ctx");
class VisibilityAnalysys extends DrawObject {
    constructor() {
        super(2);
    }
    create(collection, points, viewModel) {
        if (points && points.length >= this.minPointCount) {
            var _this = this;
            var distance = Cesium.Cartesian3.distance(points[0], points[1]);
            let polylines = VisibilityUtil.radiation(CTX.c2d(points[0]), CTX.c2d(points[1]), {
                height: 1,
                divide: 20,
                degree: 4
            });
            var material;
            if (viewModel.lineStyle != "line") {
                material = new Cesium.PolylineDashMaterialProperty({
                    color: viewModel.lineColor,
                    dashPattern: this.dashPatternFromString(viewModel.lineStyle, (viewModel.lineWidth) % 8)
                });
            } else {
                material = new Cesium.ColorMaterialProperty(viewModel.lineColor);
            }

            if (Cesium.defined(polylines)) {
                polylines.forEach(polyline => {
                    var centerHeight = polyline[0].height;
                    var positions = polyline.map(d => {
                        let c = CTX.radian(d.longitude, d.latitude, 0);
                        return c;
                    });
                    var promise = Cesium.sampleTerrain(collection.map.viewer3d.terrainProvider, 11, positions);
                    Cesium.when(promise, function(updatedPositions) {
                        updatedPositions[0].height = centerHeight;
                        VisibilityUtil.terrianEI(updatedPositions, { margin: 10 });
                        let polyline = CTX.r2cA(updatedPositions);
                        collection.add(_this.index, {
                            polyline: {
                                positions: polyline,
                                color: viewModel.lineColor,
                                width: viewModel.lineWidth,
                                material: material
                            }
                        });
                    });
                });
                /*
                polylines.forEach(polyline => {
                    collection.add(this.index, {
                        polyline: {
                            positions: polyline,
                            color: viewModel.lineColor,
                            width: viewModel.lineWidth
                        }
                    });
                });*/
            }
        }
    }
}
module.exports = { VisibilityAnalysys: VisibilityAnalysys };