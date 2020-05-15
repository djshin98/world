var { DrawObject } = require('./drawobject');
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
            var dimensions1 = new Cesium.Cartesian2(6000.0, 6000.0);

            var pl = plane1.plane;
            pl.distance = 0;
            //var origin = plane1.origin;

            var planetmp = new Cesium.PlaneGraphics({
                plane: pl,
                dimensions: dimensions1,
                //material: Cesium.Color.RED.withAlpha(0.5),
                material: viewModel.image
            });

            collection.add(this.index, {
                position: points[0],
                plane: planetmp

                /*
                rectangle: {
                    coordinates: Cesium.Rectangle.fromCartesianArray(points2),
                    height: 500,
                    //extrudedHeight: 1000,
                    fill: true,
                    outline: true,
                    outlineColor: viewModel.lineColor,
                    outlineWidth: viewModel.lineWidth,
                    material: viewModel.image,
                    //material: new Cesium.ColorMaterialProperty(viewModel.faceColor),
                    heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND
                }*/

            });
        }
    }
}
module.exports = { Image: Image };