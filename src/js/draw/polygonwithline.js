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
            //let displayCondition = new Cesium.DistanceDisplayCondition(0, 100000);
            points.push(points[0]);
            points.push(points[1]);
            viewModel.lineColor.alpha = 1;

            let option = {
                positions: points,
                clampToGround: true,
                width: viewModel.lineWidth,
                //distanceDisplayCondition: displayCondition,
                material: this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth)
            };
            return collection.add(this.index, {
                polygon: {
                    hierarchy: points,
                    //distanceDisplayCondition: displayCondition,
                    material: new Cesium.ColorMaterialProperty(viewModel.faceColor)
                },
                polyline: option,
            });
        }
    }
}

module.exports = { PolygonWithLine: PolygonWithLine }