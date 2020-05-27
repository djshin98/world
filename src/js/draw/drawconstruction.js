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

            let materialUrl = "./img/defaultMaterial.jpg";
            let material = new Cesium.ImageMaterialProperty({ image: "./img/defaultMaterial.jpg" });

            let polygonPoints = [points[0], topPoints[0], topPoints[1], points[1]];
            collection.add(this.index, {
                polygon: {
                    hierarchy: polygonPoints,
                    material: material,
                    perPositionHeight: true,
                }
            });
            polygonPoints = [points[1], topPoints[1], topPoints[2], points[2]];
            collection.add(this.index, {
                polygon: {
                    hierarchy: polygonPoints,
                    material: material,
                    perPositionHeight: true,
                }
            });

            polygonPoints = [points[2], topPoints[2], topPoints[3], points[3]];
            collection.add(this.index, {
                polygon: {
                    hierarchy: polygonPoints,
                    material: material,
                    perPositionHeight: true,
                }
            });

            polygonPoints = [points[3], topPoints[3], topPoints[0], points[0]];
            collection.add(this.index, {
                polygon: {
                    hierarchy: polygonPoints,
                    material: material,
                    perPositionHeight: true,
                }
            });

            polygonPoints = [topPoints[0], topPoints[1], topPoints[2], topPoints[3]];
            collection.add(this.index, {
                polygon: {
                    hierarchy: polygonPoints,
                    material: material,
                    perPositionHeight: true,
                }
            });
        }
    }
}

module.exports = { DrawConstruction: DrawConstruction };