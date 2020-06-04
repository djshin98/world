var { DrawObject } = require('./drawobject');
class Radar2 extends DrawObject {
    constructor() {
        super(2);
    }
    create(collection, points, viewModel) {
        if (this.isValidPoints(points)) {

            var orientation = Cesium.Transforms.headingPitchRollQuaternion(
                points[0],
                new Cesium.HeadingPitchRoll(Cesium.Math.toRadians(0.0), Cesium.Math.toRadians(0.0), Cesium.Math.toRadians(90.0))
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
                        //maximumCone: Cesium.Math.PI / 2.5,
                        //minimumCone: Cesium.Math.PI / 2.5,
                        maximumCone: Cesium.Math.PI / 4,
                        //minimumClock: (2 * Cesium.Math.PI) * 0.125,
                        //maximumClock: (2 * Cesium.Math.PI) * 0.375,
                        outline: true,
                        outlineColor: viewModel.lineColor,
                        material: viewModel.faceColor,
                        heightReference: Cesium.HeightReference.NONE
                    }
                });
            }
        }
    }
}
module.exports = { Radar2: Radar2 };