var { DrawObject } = require('./drawobject');
var { SurfaceUtil, LineUtil } = require('./util');
class Wall extends DrawObject {
    constructor() {
        super(2);
    }
    create(collection, points, viewModel) {
        if (this.isReadyToCallbackVariable()) {
            this.templateEntity.wall.positions = points;
            this.templateEntity.wall.minimumHeights = points.map(d => {
                return CTX.c2d(d).height + viewModel.size;
            });
        } else {
            let _this = this;
            let option = {
                positions: this.callbackValue(points),
                minimumHeights: this.callbackValue(points.map(d => {
                    return CTX.c2d(d).height + viewModel.size;
                })),
                clampToGround: true,
                //color: viewModel.lineColor,
                width: viewModel.lineWidth,
                fill: true,
                outline: true,
                outlineColor: viewModel.lineColor,
                outlineWidth: viewModel.lineWidth,
                material: _this.lineMaterial(viewModel.lineStyle, viewModel.faceColor, viewModel.lineWidth)
            };
            return collection.add(_this.index, {
                wall: option
            });
        }
        /*
        if (this.isValidPoints(points)) {
            let _this = this;
            SurfaceUtil.polyline(collection, LineUtil.spline(points, 100), (splinePoints) => {
                let option = {
                    positions: splinePoints,
                    minimumHeights: splinePoints.map(d => {
                        return CTX.c2d(d).height + viewModel.size;
                    }),
                    clampToGround: true,
                    //color: viewModel.lineColor,
                    width: viewModel.lineWidth,
                    fill: true,
                    outline: true,
                    outlineColor: viewModel.lineColor,
                    outlineWidth: viewModel.lineWidth,
                    material: _this.lineMaterial(viewModel.lineStyle, viewModel.faceColor, viewModel.lineWidth)
                };
                return collection.add(_this.index, {
                    wall: option
                });
            });
        }
        */
    }
}
module.exports = { Wall: Wall };