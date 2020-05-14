var { DrawObject } = require('./drawobject');
class Image extends DrawObject {
    constructor() {
        super(1);
    }
    pin(drawLength) {
        return { name: 'image', type: 'image', url: "img/maki/marker.png", color: Cesium.Color.NAVY, size: 48 };
    }
    create(collection, points, viewModel) {
<<<<<<< HEAD
        if (points && points.length && points.length >= this.minPointCount) {
=======
        if (this.isValidPoints(points)) {

>>>>>>> cc84257ce960ee2a27cd9c57603cb74a41077d8e
            let distance = viewModel.size;

            var points2 = [];

            var p1 = Object.assign({}, points[0]);
            p1.x -= distance;
            p1.y -= distance;
            points2.push(p1);

            var p2 = Object.assign({}, points[0]);
            p2.x -= distance;
            p2.y += distance;
            points2.push(p2);

            var p3 = Object.assign({}, points[0]);
            p3.x += distance;
            p3.y -= distance;
            points2.push(p3);

            var p4 = Object.assign({}, points[0]);
            p4.x += distance;
            p4.y += distance;
            points2.push(p4);


            collection.add(this.index, {
                position: points[0],
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
                }

            });
        }
    }
}
module.exports = { Image: Image };