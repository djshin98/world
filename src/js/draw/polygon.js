"use strict";
var { DrawObject } = require('./drawobject');
var { Q } = require('../core/e');

class Polygon extends DrawObject {
    constructor() {
        super(2);
    }
    create(collection, points, viewModel) {
        if (this.isReadyToCallbackVariable()) {
            let result = CTX.split.polyline(points, 10);
            this.sketch(collection, result);
            //this.templateEntity.polygon.hierarchy = points;
        } else {
            if (this.isComplete()) {
                return collection.add(this.index, {
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