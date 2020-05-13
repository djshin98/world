var { DrawObject } = require('./drawobject');
class Wall extends DrawObject {
    constructor() {
        super(2);
    }
    create(collection, points, viewModel) {
        if (this.isValidPoints(points)) {
            let option = {
                positions: points,
                minimumHeights: points.map(d => {
                    return CTX.c2d(d).height + 1000;
                }),
                clampToGround: true,
                color: viewModel.lineColor,
                width: viewModel.lineWidth,
                material: this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth)
            };
            return collection.add(this.index, {
                wall: option
            });
        }
    }
}
module.exports = { Wall: Wall };