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
                    return CTX.c2d(d).height + viewModel.size;
                }),
                clampToGround: true,
                //color: viewModel.lineColor,
                width: viewModel.lineWidth,
                fill: true,
                outline: true,
                outlineColor: viewModel.lineColor,
                outlineWidth: viewModel.lineWidth,
                material: this.lineMaterial(viewModel.lineStyle, viewModel.faceColor, viewModel.lineWidth)
            };
            return collection.add(this.index, {
                wall: option
            });
        }
    }
}
module.exports = { Wall: Wall };