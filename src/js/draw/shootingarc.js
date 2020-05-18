var { DrawObject } = require('./drawobject');
var { ArcUtil } = require('./util');
var { CTX } = require('../map3d/ctx');

class ShootingArc extends DrawObject {
    constructor() {
        super(3);
    }
    create(collection, points, viewModel) {
        if (this.isValidPoints(points)) {
            /*
            var v1 = Object.assign({}, points[1]);
            v1.x -= points[0].x;
            v1.y -= points[0].y;
            v1.z -= points[0].z;

            var v2 = Object.assign({}, points[2]);
            v2.x -= points[0].x;
            v2.y -= points[0].y;
            v2.z -= points[0].z;

            Cesium.Cartesian3.normalize(v1, v1);
            Cesium.Cartesian3.normalize(v2, v2);
            var radian = Math.acos(Cesium.Cartesian3.dot(v1, v2));
            var degree = radian * (180 / Math.PI);*/
            let θ = CTX.θ(points[0], points[1], points[2]);
            /*
            var center = CTX.c2r(points[0]);
            var end = CTX.c2r(points[1]);
            var points_carto = ArcUtil.arcPoints(center, end, degree);
            var points_cartesian = points_carto.map((d) => { return CTX.r2c(d) });
            var points_result = [];
            points_result.push(points[0]);
            points_cartesian.map((d) => { points_result.push(d) });
            */
            var points_arc = ArcUtil.arcPoints2c(points[0], points[1], points[2], θ);
            var points_result = [points[0]].concat(points_arc);
            //points_result.concat(points_arc);
            //points_result.push(points[0]);
            //points_arc.map((d) => { points_result.push(d); });
            //points_result.push(points[0]);

            return collection.add(this.index, {
                position: points[0],
                polygon: {
                    hierarchy: points_result,
                    material: new Cesium.ColorMaterialProperty(viewModel.faceColor),
                    heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
                }
            });

        }
    }
}
module.exports = { ShootingArc: ShootingArc };