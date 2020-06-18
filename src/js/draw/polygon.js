var { DrawObject } = require('./drawobject');
var { Q } = require('../core/e');

class Polygon extends DrawObject {
    constructor() {
        super(3);
        this.entity = null;
    }
    create(collection, points, viewModel) {
        if (this.isValidPoints(points)) {
            if (Q.isValid(this.entity)) {
                collection.remove(this.entity);
                this.entity = null;
            }
            return collection.add(this.index, {
                polygon: {
                    hierarchy: points,
                    material: new Cesium.ColorMaterialProperty(viewModel.faceColor)
                }
            });
        } else if (points instanceof Cesium.CallbackProperty) {

            if (!Q.isValid(this.entity)) {
                this.entity = collection.add(this.index, {
                    polygon: {
                        hierarchy: points,
                        material: new Cesium.ColorMaterialProperty(viewModel.faceColor)
                    }
                });
            } else {
                this.entity.polygon.hierarchy = points;
            }
            return this.entity;

        }
    }
}

module.exports = { Polygon: Polygon };