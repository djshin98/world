"use strict";
const { DrawObject } = require('../map3d/draw/drawobject');
const { ArcUtil } = require('../map3d/draw/util');
const { Plane } = require('../map3d/tangent/plane');

class Fixation extends DrawObject {
    constructor() {
        super(2, 2);
    }
    create(collection, points, viewModel) {
        let p = points;
        if (this.isReadyToCallbackVariable()) {
            let result = [];

            var plane = new Plane(p[0]);

            let pts = plane.input(p);
            let width = plane.distance(pts[0], pts[1]);

           
            result = plane.fixation(width, pts);
            result = plane.output(result);

            result = CTX.split.polyline(result, 10);
            this.sketch(collection, result);

        } else {

            if (this.isComplete()) {

                let result = [];

                var plane = new Plane(p[0]);
                let mp = CTX.math.mid(p[1], p[2]);
                p.push(mp);

                let pts = plane.input(p);
                let width = plane.distance(pts[0], pts[1]);
                
                result = plane.fixation(width, pts);
                result = plane.output(result);

                return collection.add(this.index, {
                    position: points[0],
                    polyline: {
                        positions: result,
                        clampToGround: true,
                        color: viewModel.lineColor,
                        width: viewModel.lineWidth,
                        material: this.isComplete() ? this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth) : this.callbackColor("lineColor", viewModel)
                    },
                });
            }
            return [];

        }
    }
}

module.exports = { Fixation: Fixation };