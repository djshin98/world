var { DrawObject } = require('./drawobject');
class ImageLine extends DrawObject {
    constructor() {
        super(1);
    }
    pin(drawLength) {
        return { name: 'image', type: 'image', url: "img/maki/marker.png", color: Cesium.Color.NAVY, size: 48 };
    }
    create(collection, points, viewModel) {
        if (this.isReadyToCallbackVariable()) {
            this.templateEntity.polyline.positions = points;
        } else {
            let option = {
                positions: this.callbackValue(points),
                clampToGround: true,
                //color : viewModel.lineColor,
                width: viewModel.lineWidth,
                //fill:true,
                //loop : true,
                material: new Cesium.ImageMaterialProperty({
                    image: viewModel.image,
                    repeat: new Cesium.Cartesian2(10.0, 1.0)
                })
            };
            return collection.add(this.index, {
                polyline: option
            });
        }
        /*
        if (this.isValidPoints(points)) {
            let option = {
                positions: points,
                clampToGround: true,
                //color : viewModel.lineColor,
                width: viewModel.lineWidth,
                //fill:true,
                //loop : true,
                material: new Cesium.ImageMaterialProperty({
                    image: viewModel.image,
                    repeat: new Cesium.Cartesian2(10.0, 1.0)
                })
            };
            return collection.add(this.index, {
                polyline: option
            });
        }
        */


    }
}
module.exports = { ImageLine: ImageLine };