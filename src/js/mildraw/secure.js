"use strict";

const { DrawObject } = require('../map3d/draw/drawobject');
const { Plane } = require('../map3d/tangent/plane');

class Secure extends DrawObject {
    constructor() {
        super(2, 2);
    }
    create(collection, points, viewModel) {
        let p = points;
        if (this.isReadyToCallbackVariable()) {
            let result = [];

            var plane = new Plane(p[0]);
            let pts = plane.input(p);

            //let dp = plane.distance(p[0], p[1]);

            result = plane.secure(pts);
            result = plane.output(result);

            result = CTX.split.polyline(result, 10);
            this.sketch(collection, result);

        } else {

            if (this.isComplete()) {

                let result = [];
                var plane = new Plane(p[0]);
                //let dp = plane.distance(p[0], p[1]);
                let pts = plane.input(p);

                result = plane.secure(pts);
                result = plane.output(result);

                result = CTX.split.polyline(result, 10);
                this.sketch(collection, result);

                return collection.add(this.index, {
                    position: points[0],
                    polyline: {
                        positions: result,
                        clampToGround: true,
                        color: viewModel.lineColor,
                        width: viewModel.lineWidth,
                        material: this.isComplete() ? this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth) : this.callbackColor("lineColor", viewModel)
                    }
                });
            }
            return [];
        }
    }
}

module.exports = { Secure: Secure };