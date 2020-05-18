var { DrawObject } = require('./drawobject');
var { CTX } = require('../map3d/ctx');
class Image extends DrawObject {
    constructor() {
        super(1);
    }
    pin(drawLength) {
        return { name: 'image', type: 'image', url: "img/maki/marker.png", color: Cesium.Color.NAVY, size: 48 };
    }
    create(collection, points, viewModel) {
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
            var lo = 0.1 / 10 * (Math.PI / 180);
            var la = 0.1 / 10 * (Math.PI / 180);

            carto.longitude -= lo;
            carto.latitude -= la;
            var carte = CTX.r2c(carto);
            points.push(carte);



            collection.add(this.index, {
                position: points[0],
                //plane: planetmp,



                rectangle: {
                    coordinates: Cesium.Rectangle.fromCartesianArray(points),
                    //height: 500,
                    //extrudedHeight: 1000,
                    fill: true,
                    outline: true,
                    outlineColor: viewModel.lineColor,
                    outlineWidth: viewModel.lineWidth,
                    material: viewModel.image,
                    heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND
                }
            });
        }
    }
}
module.exports = { Image: Image };