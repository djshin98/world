var { DrawObject } = require('./drawobject');
var { Q } = require('../core/e');

class Polygon extends DrawObject {
    constructor() {
        super(3);
        this.entity = null;
    }
    create(collection, points, viewModel, template) {
        if (Q.isValid(template)) {
            if (template === true) {
                console.log("new template");
                return collection.add(this.index, {
                    polygon: {
                        hierarchy: new Cesium.CallbackProperty(function() {
                            return new Cesium.PolygonHierarchy(points);
                        }, true),
                        material: new Cesium.ColorMaterialProperty(viewModel.faceColor)
                    }
                });
            } else {
                console.log("update template");
                template.polygon.hierarchy = points;
                return template;
            }
        } else {
            console.log("complete obj");
            return collection.add(this.index, {
                polygon: {
                    hierarchy: points,
                    material: new Cesium.ColorMaterialProperty(viewModel.faceColor)
                }
            });
        }
    }
}

module.exports = { Polygon: Polygon };