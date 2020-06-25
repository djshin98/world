"use strict";

var { DrawObject } = require('../draw/drawobject');
const { Plane } = require('../map3d/plane');
const { CTX } = require('../map3d/ctx');

class Arrow extends DrawObject {
    constructor() {
        super(2);
    }
    create(collection, points, viewModel) {
        let p = points;
        if (this.isReadyToCallbackVariable()) {
            let result = [];

            var plane = new Plane(p[0]);
            let pts = plane.input(p);
            let width = plane.distance(pts[0], pts[1]) / 3;
            pts.reduce((prev, curr) => {
                result = result.concat(plane.corrido(width, prev, curr));
                return curr;
            });

            result = plane.output(result);
            result = CTX.split.polyline(result, 10);
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