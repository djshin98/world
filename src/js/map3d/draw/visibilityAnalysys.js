var { DrawObject } = require('./drawobject');
var { VisibilityUtil } = require('./util');
class VisibilityAnalysys extends DrawObject {
    constructor() {
        super(2, 2);
        this.pplines = null;
    }
    create(layer, points, viewModel) {
        this.type1(layer, points, viewModel);
    }
    type0(layer, points, viewModel) {
        if (this.isValidPoints(points)) {
            var _this = this;
            var distance = Cesium.Cartesian3.distance(points[0], points[1]);
            let polylines = VisibilityUtil.radiation(CTX.c2d(points[0]), CTX.c2d(points[1]), {
                height: 1,
                divide: 20,
                degree: 4
            });
            var lineMaterial = this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth);

            this.removeTemplateEntity(layer);

            if (Q.isValid(polylines)) {
                let objects = [];
                polylines.forEach(polyline => {
                    var centerHeight = polyline[0].height;
                    var positions = polyline.map(d => {
                        let c = CTX.radian(d.longitude, d.latitude, 0);
                        return c;
                    });
                    var promise = Cesium.sampleTerrain(layer.getTerrianProvider(), 11, positions);
                    Cesium.when(promise, function(updatedPositions) {
                        updatedPositions[0].height = centerHeight;
                        let polyline = VisibilityUtil.terrianEI(updatedPositions, { margin: 10 });
                        //let polyline = CTX.r2cA(updatedPositions);
                        objects.push({
                            polyline: {
                                positions: polyline,
                                color: viewModel.lineColor,
                                width: viewModel.lineWidth,
                                material: lineMaterial
                            }
                        });

                    });
                });

                let ents = layer.add(objects);
                if (!this.isComplete()) {
                    this.templateEntity = ents;
                }
            }
        }
    }
    type1(layer, points, viewModel) {
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

            this.removeTemplateEntity(layer);

            if (Q.isValid(polylines)) {
                let objects = [];
                var center = CTX.radian(polylines[0][0].longitude, polylines[0][0].latitude, polylines[0][0].height);
                let all = polylines.reduce((prev, curr) => { return prev.concat(curr.slice(1)); }, []);
                var positions = all.map(d => {
                    let c = CTX.radian(d.longitude, d.latitude, 0);
                    return c;
                });
                var promise = Cesium.sampleTerrain(layer.getTerrianProvider(), 13, positions);
                Cesium.when(promise, function(updatedPositions) {
                    VisibilityUtil.callbackTerrianEI(center, updatedPositions, radiationOptions.divide - 1, { margin: 1 }, function(polyline) {

                        objects.push({
                            polyline: {
                                positions: polyline,
                                color: viewModel.lineColor,
                                width: viewModel.lineWidth,
                                material: lineMaterial,
                                distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 35000)
                            }
                        });

                    });
                    if (Q.isValid(_this.pplines)) {
                        layer.remove(_this.pplines);
                        _this.pplines = null;
                    }
                    _this.pplines = layer.add(objects);
                });

                return [];
            }
        }
    }
}
module.exports = { VisibilityAnalysys: VisibilityAnalysys };