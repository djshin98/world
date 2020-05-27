var { DrawObject } = require('./drawobject');
class Line extends DrawObject {
    constructor() {
        super(2);
    }


    create(collection, points, viewModel) {
        if (this.isValidPoints(points)) {

            var lg = new Cesium.LableGraphics();

            var lg = {
                show: true,
                text: 'km',
                font: '30px sans-serif',
            };


            let option = {
                positions: points,
                clampToGround: true,
                color: viewModel.lineColor,
                width: viewModel.lineWidth,
                material: this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth)
            };
            return collection.add(this.index, {
                polyline: option
            });
        }
    }
}
module.exports = { Line: Line };