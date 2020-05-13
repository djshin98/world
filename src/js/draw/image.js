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

            let distance = viewModel.size;
            points.forEach(point => {
                collection.add(this.index, {
                    position: point,
                    ellipse: {
                        semiMinorAxis: distance,
                        semiMajorAxis: distance,
                        //fill:true,
                        material: viewModel.image,
                        outline: true,
                        outlineColor: viewModel.lineColor,
                        outlineWidth: viewModel.lineWidth,

                        heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND
                    }
                });
            });

        }
    }
}
module.exports = { Image: Image };