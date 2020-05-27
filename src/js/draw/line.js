var { DrawObject } = require('./drawobject');
class Line extends DrawObject {
    constructor() {
        super(2);
    }


    create(collection, points, viewModel) {
        if (this.isValidPoints(points)) {


            let option = {
                positions: points,
                clampToGround: true,
                color: viewModel.lineColor,
                width: viewModel.lineWidth,
                material: this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth)
            };


            var d = new Cesium.Cartesian3.distance(points[0], points[1]);

            return collection.add(this.index, {
                poistion: points[0],
                polyline: option,
                label: {
                    text: "la"
                }

            });
        }
    }
}
module.exports = { Line: Line };