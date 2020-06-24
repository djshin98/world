"use strict";

var { DrawObject } = require('../draw/drawobject');
var { ArcUtil } = require('../draw/util');
var { CTX } = require('../map3d/ctx');

class Arrow extends DrawObject {
    constructor() {
        super(2, 3);
    }
    create(collection, points, viewModel) {
        let p = points;
        if (this.isReadyToCallbackVariable()) {
            let result = [];
            if (p.length == 3) {
                result = [p[0]].concat(CTX.split.arc(p[0], p[1], p[2]));
                p[2] = result[result.length - 1];
            } else {
                p.push(p[1]);
            }
            result = result.concat(CTX.split.polyline([p[2], p[0], p[1]], 10));
            this.sketch(collection, result);
        } else {
            if (this.isComplete()) {
                let result = [p[0]].concat(CTX.split.arc(p[0], p[1], p[2]));
                result = result.concat([p[0], p[1]]);
                return collection.add(this.index, {
                    position: points[0],
                    polyline: {
                        positions: result,
                        clampToGround: true,
                        width: viewModel.lineWidth,
                        material: this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth)
                    }
                });
            }
            return [];
        }
    }
}
module.exports = { ShootingLine: ShootingLine };