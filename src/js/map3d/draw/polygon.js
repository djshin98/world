"use strict";
var { DrawObject } = require('./drawobject');
var { Q } = require('../../core/e');

class Polygon extends DrawObject {
    constructor() {
        super(2);
    }
    create(layer, points, viewModel) {
        if (this.isReadyToCallbackVariable()) {
            let result = CTX.split.polyline(points, 10);
            this.sketch(layer, result);
            //this.templateEntity.polygon.hierarchy = points;
        } else {
            if (this.isComplete()) {
                return layer.add({
                    polygon: {
                        hierarchy: this.callbackValue(points),
                        material: this.callbackColor("faceColor", viewModel)
                    }
                });
            }
            return [];
        }
    }
}

module.exports = { Polygon: Polygon };