var { DrawObject } = require('./drawobject');
var { SurfaceUtil, LineUtil, ParabolaUtil, VisibilityUtil } = require('./util');
var { CTX } = require('../map3d/ctx');

class ShootingArc extends DrawObject {
    constructor() {
        super(3);
    }
    create(collection, points, viewModel) {
        if (points && points.length && points.length >= this.minPointCount) {
            var distance = Cesium.Cartesian3.distance(points[0], points[1]);

            var p1 = CTX.c2w(points[0]);
            var p2 = CTX.c2w(points[1]);
            var p3 = CTX.c2w(points[2]);

            var rad = Math.atan((p2.y - p1.y) / (p2.x - p1.x)) - Math.atan((p3.y - p1.y) / (p3.x - p1.x));
            var degree = rad * (180 / Math.PI);

            let center = CTX.c2r(points[0]);
            let end = CTX.c2r(points[1]);
            var points_carto = VisibilityUtil.arc(center, end, degree);
            var points_cartesian = points_carto.map((d) => { return CTX.r2c(d) });
            var points_result = [];
            points_result.push(points[0]);
            points_cartesian.map((d) => { points_result.push(d) });
            //var points2 = [CTX.r2c(points2cato[0][0]), CTX.r2c(points2cato[0][1]), CTX.r2c(points2cato[0][2]), CTX.r2c(points2cato[0][3]), CTX.r2c(points2cato[0][4]), CTX.r2c(points2cato[0][5]), CTX.r2c(points2cato[0][6]), CTX.r2c(points2cato[0][7]), CTX.r2c(points2cato[0][8]), CTX.r2c(points2cato[0][9])];
            return collection.add(this.index, {
                position: points[0],
                polygon: {
                    hierarchy: points_result,
                    material: new Cesium.ColorMaterialProperty(viewModel.faceColor),
                    heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
                }
            });
            /*
            if (distance > 0) {
                return collection.add(this.index, {
                    position: points[0],
                    ellipsoid: {
                        radii: new Cesium.Cartesian3(distance, distance, distance),
                        innerRadii: new Cesium.Cartesian3(distance / 2, distance / 2, distance / 2),
                        */
            /*
            innerRadii: new Cesium.Cartesian3(distance/2,distance/2,distance/2),
            minimumClock: 0,
            maximumClock: 2*Cesium.Math.PI/2,
            minimumCone:0,
            maximumCone:Cesium.Math.PI/2,
            heightReference:Cesium.HeightReference.RELATIVE_TO_GROUND,
            outline:true,
            outlineColor:viewModel.lineColor,
            stackPartitions:64,
            slicePartitions:64,
            subdivisions:128,
            */
            /*
                        stackPartitions: 64,
                        slicePartitions: 64,
                        subdivisions: 64,
                        minimumCone: Cesium.Math.PI / 4,
                        maximumCone: Cesium.Math.PI / 2.5,
                        minimumClock: (2 * Cesium.Math.PI) * 0.125,
                        maximumClock: (2 * Cesium.Math.PI) * 0.375,
                        outline: true,
                        outlineColor: viewModel.lineColor,
                        material: viewModel.faceColor,
                        heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
                    }
                });
                */
        }
    }
}
module.exports = { ShootingArc: ShootingArc };