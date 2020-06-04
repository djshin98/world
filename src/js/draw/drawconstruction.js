var { DrawObject } = require('./drawobject');
var { CTX } = require('../map3d/ctx');

class DrawConstruction extends DrawObject {
    constructor() {
        super(4);
    }
    create(collection, points, viewModel) {
        if (this.isValidPoints(points)) {
            let topPoints = [];
            points.forEach((point) => {
                let carto = CTX.c2r(point);
                carto.height += viewModel.size;
                topPoints.push(CTX.r2c(carto));
            });

            let material = new Cesium.ImageMaterialProperty({ image: "./img/defaultMaterial.jpg" });

            let polygonPoints = [];
            let entity;
            for (let i = 0; i < points.length; i++) {
                if (i == points.length - 1) {
                    polygonPoints = [points[i], topPoints[i], topPoints[0], points[0]];
                } else {
                    polygonPoints = [points[i], topPoints[i], topPoints[i + 1], points[i + 1]];
                }

                let entity_tmp = collection.add(this.index, {
                    polygon: {
                        hierarchy: polygonPoints,
                        material: material,
                        perPositionHeight: true,
                    }
                });
                /*
                //각 면 마다 하나의 entity가 할당되므로 하나의 entity로 병합하려 했으나 이 기능은 cesium에서 제공되지 않음
                if (entity) {
                    entity.merge(entity_tmp);
                    //entity_tmp remove
                    //collection.getMap().getView().entities.remove(entity_tmp);
                } else
                    entity = entity_tmp;
                */
            }
            polygonPoints = [];
            for (let i = 0; i < points.length; i++) {
                polygonPoints.push(topPoints[i]);
            }
            let entity_tmp = collection.add(this.index, {
                polygon: {
                    hierarchy: polygonPoints,
                    material: material,
                    perPositionHeight: true,
                }
            });
            //entity.merge(entity_tmp);
            //entity_tmp remove
            //collection.getMap().getView().entities.remove(entity_tmp);
            //return entity;
        }
    }
}

module.exports = { DrawConstruction: DrawConstruction };