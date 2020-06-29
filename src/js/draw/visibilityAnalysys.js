var { DrawObject } = require('./drawobject');
var { VisibilityUtil } = require('./util');
class VisibilityAnalysys extends DrawObject {
    constructor() {
        super(2);
    }
    create(collection, points, viewModel) {
        this.type1(collection, points, viewModel);
    }
    type0(collection, points, viewModel) {
        if (this.isValidPoints(points)) {
            var _this = this;
            var distance = Cesium.Cartesian3.distance(points[0], points[1]);
            let polylines = VisibilityUtil.radiation(CTX.c2d(points[0]), CTX.c2d(points[1]), {
                height: 1,
                divide: 20,
                degree: 4
            });
            var lineMaterial = this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth);

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
                        let polyline = VisibilityUtil.terrianEI(updatedPositions, { margin: 10 });
                        //let polyline = CTX.r2cA(updatedPositions);
                        collection.add(_this.index, {
                            polyline: {
                                positions: polyline,
                                color: viewModel.lineColor,
                                width: viewModel.lineWidth,
                                material: lineMaterial
                            }
                        });
                    });
                });
            }
        }
    }
    type1(collection, points, viewModel) {
        if (points && points.length >= this.minPointCount) {
            var _this = this;
            var distance = Cesium.Cartesian3.distance(points[0], points[1]);
            var radiationOptions = {
                height: 2,
                divide: 20,
                degree: 4
            };

            let polylines = VisibilityUtil.radiation(CTX.c2d(points[0]), CTX.c2d(points[1]), radiationOptions);
            var lineMaterial = this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth);

            if (Cesium.defined(polylines)) {
                var center = CTX.radian(polylines[0][0].longitude, polylines[0][0].latitude, polylines[0][0].height);
                let all = polylines.reduce((prev, curr) => { return prev.concat(curr.slice(1)); }, []);
                var positions = all.map(d => {
                    let c = CTX.radian(d.longitude, d.latitude, 0);
                    return c;
                });
                var promise = Cesium.sampleTerrain(collection.map.viewer3d.terrainProvider, 13, positions);
                Cesium.when(promise, function(updatedPositions) {
                    VisibilityUtil.callbackTerrianEI(center, updatedPositions, radiationOptions.divide - 1, { margin: 1 }, function(polyline) {
                        //polyline = CTX.r2cA(polyline);
                        collection.add(_this.index, {
                            polyline: {
                                positions: polyline,
                                color: viewModel.lineColor,
                                width: viewModel.lineWidth,
                                material: lineMaterial,
                                distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 35000)
                            }
                        });
                    });
                });
            }
        }
    }
}
module.exports = { VisibilityAnalysys: VisibilityAnalysys };