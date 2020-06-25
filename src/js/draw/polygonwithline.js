"use strict";
var { DrawObject } = require('./drawobject');
class PolygonWithLine extends DrawObject {
    constructor() {
        super(2);
    }

    static getName() {
        return "PolygonWithLine";
    }

    create(collection, points, viewModel) {
        if (this.isReadyToCallbackVariable()) {
            let result = CTX.split.polyline(points, 10);
            this.sketch(collection, result);

            //this.templateEntity.polygon.hierarchy = points;
            //this.templateEntity.polyline.positions = points;
        } else {
            points.push(points[0]);
            points.push(points[1]);
            viewModel.lineColor.alpha = 1;
            let _this = this;
            let option = {
                positions: this.callbackValue(points),
                clampToGround: true,
                width: viewModel.lineWidth,
                //distanceDisplayCondition: displayCondition,
                material: this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth)
            };
            return collection.add(this.index, {
                polygon: {
                    hierarchy: this.callbackValue(points),
                    //distanceDisplayCondition: displayCondition,
                    material: this.callbackColor("faceColor", viewModel)
                },
                polyline: option,
            });
        }
    }
}

module.exports = { PolygonWithLine: PolygonWithLine }