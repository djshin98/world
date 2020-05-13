var { DrawObject } = require('./drawobject');
class PolygonWithLine extends DrawObject {
    constructor() {
        super(3);
    }

    static getName() {
        return "PolygonWithLine";
    }

    create(collection, points, viewModel) {
        if (this.isValidPoints(points)) {
            points.push(points[0]);
            points.push(points[1]);
            viewModel.lineColor.alpha = 1;

            let option = {
                positions: points,
                clampToGround: true,
                width: viewModel.lineWidth,
                material: this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth)
            };
            return collection.add(this.index, {
                polygon: {
                    hierarchy: points,
                    material: new Cesium.ColorMaterialProperty(viewModel.faceColor)
                },
                polyline: option,
            });
        }
    }
}

module.exports = { PolygonWithLine: PolygonWithLine }