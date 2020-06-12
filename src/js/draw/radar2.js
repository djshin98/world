var { DrawObject } = require('./drawobject');
var { CTX } = require('../map3d/ctx');

class Radar2 extends DrawObject {
    constructor() {
        super(3);
    }
    create(collection, points, viewModel) {
        if (this.isValidPoints(points)) {


            var radianCone = (CTX.θ(points[0], points[1], points[2])) * (Cesium.Math.PI / 180);

            points[0] = CTX.c2r(points[0]);
            let tmp = points[0].height;
            points[0] = CTX.r2c(points[0]);

            points[1] = CTX.c2r(points[1]);
            points[1].height = tmp;
            points[1] = CTX.r2c(points[1]);

            points[2] = CTX.c2r(points[2]);
            points[2].height = tmp;
            points[2] = CTX.r2c(points[2]);

            var m = Cesium.Cartesian3.midpoint(points[1], points[2], {});
            m = CTX.c2r(m);
            m.height += 2000;
            m = CTX.r2c(m);
            var sv = Cesium.Cartesian3.subtract(m, points[0], {});

            //let normal = Cesium.Cartesian3.cross(sv, points[0], {});
            let m2 = Cesium.Cartesian3.midpoint(points[1], points[2], {});
            let sv2 = Cesium.Cartesian3.subtract(m2, points[0], {});
            sv2 = Cesium.Cartesian3.normalize(sv2, {})
            let v2 = Object.assign({}, points[0]);
            v2 = Cesium.Cartesian3.normalize(v2, {});

            let horizenVector = Object.assign({}, points[0]);
            horizenVector = CTX.c2r(horizenVector);
            horizenVector.longitude += 0.02;
            horizenVector = CTX.r2c(horizenVector);
            //horizenVector = Cesium.Cartesian3.subtract(horizenVector, points[0], {});
            //horizenVector = Cesium.Cartesian3.normalize(horizenVector, {});

            let laPoint = Object.assign(points[0]);
            laPoint = CTX.c2r(laPoint);
            let laPoint2 = Object.assign(m2);
            laPoint2 = CTX.c2r(laPoint2);

            let degree = (laPoint.latitude < laPoint2.latitude) ? 180.0 - (CTX.θ(points[0], horizenVector, m2)) : 180.0 + (CTX.θ(points[0], horizenVector, m2));

<<<<<<< HEAD
=======
            let vector1 = Cesium.Cartesian3.subtract(points[1], points[0], {});
            let vector2 = Cesium.Cartesian3.subtract(points[2], points[0], {});
            let normalVector = Cesium.Cartesian3.cross(vector1, vector2, {});
            //let degree = (Cesium.Cartesian3.dot(normalVector, points[0]) > 0) ? 180.0 - (CTX.θ(points[0], horizenVector, m2)) : 180.0 + (CTX.θ(points[0], horizenVector, m2));

            //let normal = Cesium.Cartesian3.cross(sv2, v2, {});
            //normal = Cesium.Cartesian3.negate(normal, {});
            //var q = Cesium.Quaternion.fromAxisAngle(normal, CTX.θ(points[0], points[1], points[2]), {});
            //var sampleposition = new Cesium.SampledProperty(Cesium.Cartesian3);
            //var date = Cesium.JulianDate.fromIso8601('2020-01-01T00:00:00.00Z');
            //sampleposition.addSample(date, sv);
            //var q = new Cesium.VelocityOrientationProperty(sampleposition);
            //var q = Cesium.Quaternion.fromAxisAngle(normal, Cesium.Math.PI * 0.2);

            var q = Cesium.Quaternion.fromHeadingPitchRoll(
                new Cesium.HeadingPitchRoll(Cesium.Math.toRadians(0.0), Cesium.Math.toRadians(0.0), Cesium.Math.toRadians(radianCone)), {}
            );
>>>>>>> 39f7f8407086efde381a07c2a902a736ed55a323
            var hpr = new Cesium.HeadingPitchRoll(Cesium.Math.toRadians(degree), Cesium.Math.toRadians(30.0), Cesium.Math.toRadians(0.0));
            var orientation = Cesium.Transforms.headingPitchRollQuaternion(
                points[0],
                hpr
            );
          

            var distance = Cesium.Cartesian3.distance(points[0], points[points.length - 1]);
            if (distance > 0) {
                return collection.add(this.index, {
                    position: points[0],
                    orientation: orientation,
                    ellipsoid: {
                        radii: new Cesium.Cartesian3(distance, distance, distance),
                        innerRadii: new Cesium.Cartesian3(1, 1, 1),
                        stackPartitions: 64,
                        slicePartitions: 64,
                        subdivisions: 64,
                        //minimumCone: Cesium.Math.PI / 4,
                        //maximumCone: Cesium.Math.PI / 4,
                        //minimumCone: Cesium.Math.PI / 2.5,
                        maximumCone: radianCone,
                        //minimumClock: (2 * Cesium.Math.PI) * 0.125,
                        outline: true,
                        outlineColor: viewModel.lineColor,
                        material: viewModel.faceColor,
                        //heightReference: Cesium.HeightReference.NONE
                    }
                });
            }
        }
    }
}
module.exports = { Radar2: Radar2 };