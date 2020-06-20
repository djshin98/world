var { DrawObject } = require('./drawobject');
var { Q } = require('../core/e');

class Polygon extends DrawObject {
    constructor() {
        super(3);
        this.entity = null;
    }
    create(collection, points, viewModel) {
        if (this.isReadyToCallbackVariable()) {
            this.templateEntity.polygon.hierarchy = points;
        } else {
            return collection.add(this.index, {
                polygon: {
                    hierarchy: this.callbackValue(points),
                    material: this.callbackColor("faceColor", viewModel)
                }
            });
        }
    }
}

module.exports = { Polygon: Polygon };