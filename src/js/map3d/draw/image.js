var { DrawObject } = require('./drawobject');
var { CTX } = require('../ctx');
let r = 0;
class Image extends DrawObject {
    constructor() {
        super(1, 1);
    }
    pin(drawLength) {
        return { name: 'image', type: 'image', url: "img/maki/marker.png", color: Cesium.Color.NAVY, size: 48 };
    }
    create(layer, points, viewModel) {
        if (this.isValidPoints(points)) {

            //let distance = viewModel.size;

            var points2 = [];
            var plane1 = new Cesium.EllipsoidTangentPlane(points[0]); // default ellipsoid WGS84
            var dimensions1 = new Cesium.Cartesian2(3000.0, 3000.0);

            var pl = plane1.plane;
            pl.distance = 0;
            pl.normal = points[0];

            var planetmp = new Cesium.PlaneGraphics({
                plane: pl,
                dimensions: dimensions1,
                material: viewModel.image
            });


            var carto = CTX.c2r(points[0]);
            var lo = 0.1 / 100 * viewModel.size * (Math.PI / 180); //이미지 크기에 
            var la = 0.1 / 100 * viewModel.size * (Math.PI / 180);

            carto.longitude -= lo;
            carto.latitude -= la;
            var carte = CTX.r2c(carto);
            points.push(carte);


            var v1 = Object.assign({}, points[1]);
            v1.x -= points[0].x;
            v1.y -= points[0].y;
            v1.z -= points[0].z;

            v1.x /= 2;
            v1.y /= 2;
            v1.z /= 2;

            var v2 = Cesium.Cartesian3.negate(v1, {});

            var center_p1 = CTX.math.add(points[0], v1);
            var center_p2 = CTX.math.add(points[0], v2);

            var points_result = [];
            points_result.push(center_p1);
            points_result.push(center_p2);
            var rotate = ((2 * Math.PI) / 10) * (r++);
            layer.add({
                //position: points[0],
                //plane: planetmp,

                rectangle: {
                    rotation: rotate,
                    stRotation: rotate,
                    coordinates: Cesium.Rectangle.fromCartesianArray(points_result),
                    //height: 500,
                    //extrudedHeight: 1000,
                    fill: true,
                    material: viewModel.image,
                    heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND
                }
            });
        }
    }
}
module.exports = { Image: Image };