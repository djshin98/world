"use strict";
const { Layer } = require("../../layer/layer");
class UserImageryLayer extends Layer {
    constructor(viewer, layerGroup, layerJson) {
        super(layerGroup, layerJson);
    }
    create(layerGroup, layerJson) {
        let imageryLayers = layerGroup.getImageryLayers();
        if (layerJson.show === true) {
            if (Q.isValid(Cesium[layerJson.provider])) {

                if (Q.isValid(this.layerOnMap)) {
                    imageryLayers.remove(this.layerOnMap, true);
                    this.layerOnMap = null;
                }
                if (Q.isValid(layerJson.rectangleDegree)) {
                    layerJson.options.rectangle = Cesium.Rectangle.fromDegrees(layerJson.rectangleDegree);
                }
                if (!Q.isValid(layerJson.order) || imageryLayers.length < layerJson.order) {
                    layerJson.order = imageryLayers.length;
                }
                this.layerOnMap = imageryLayers.addImageryProvider(new Cesium[layerJson.provider](layerJson.options), layerJson.order);
            }
        } else {
            if (Q.isValid(this.layerOnMap)) {
                imageryLayers.remove(this.layerOnMap, true);
                this.layerOnMap = null;
            }
        }
    }
    update(layerJson) {
        super.update(layerJson);
    }
}
module.exports = { UserImageryLayer: UserImageryLayer };