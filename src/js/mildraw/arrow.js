"use strict";

var { DrawObject } = require('../draw/drawobject');

class Arrow extends DrawObject {
    constructor() {
        super(2);
    }
    create(collection, points, viewModel) {
        let p = points;
        if (this.isReadyToCallbackVariable()) {
            let result = [];

            result = result.concat(CTX.split.polyline([p[2], p[0], p[1]], 10));
            this.sketch(collection, result);
        } else {
            if (this.isComplete()) {
                return collection.add(this.index, {
                    position: p[0],
                    polyline: {
                        positions: p,
                        clampToGround: true,
                        color: viewModel.lineColor,
                        width: viewModel.lineWidth,
                        material: this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth)
                    },
                });
            }
            return [];
        }
    }
}
module.exports = { Arrow: Arrow };