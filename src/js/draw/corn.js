var { DrawObject } = require('./drawobject');

class Corn extends DrawObject {
    constructor() {
        super(2);
    }
    create(collection, points, viewModel) {
        if (this.isValidPoints(points)) {
            //vector 1
        let v1 = Object.assign({}, points[1]);
        v1 = Cesium.Cartesian3.subtract(v1, points[0], {});

        //vector 2
        let v2 = Object.assign({}, points[2]);
        v2 = Cesium.Cartesian3.subtract(v2, points[0], {});
        let THETA = CTX.θ(points[0], points[1], points[2]);
        //let THETA = Math.PI / 180;
        let len = THETA * 100;
        let a = len * Math.tan(THETA);

        /*
        var orientation = Cesium.Transforms.headingPitchRollQuaternion(
            points[0],
            Cesium.Math.toRadians(0.0),
            Cesium.Math.toRadians(0.0),
            Cesium.Math.toRadians(90.0)
            );
            */
           var pos = Object.assign({}, points[0]);
           pos = CTX.c2r(pos);
           pos.heignt += len/2;
           pos = CTX.r2c(pos);

                return collection.add(this.index, {
                    //direction
                    position: points[0],
                    //orientation: orientation,
                    cylinder: {
                        bottomRadius: 0,
                        topRadius: a,
                        length: len,
                        material: new Cesium.ColorMaterialProperty(viewModel.faceColor),
                        heightReference: Cesium.HeightReference.CLAMP_TO_GROUND

                    }
                });
            }
        }
    }

module.exports = { Corn: Corn };