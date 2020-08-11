"use strict";

const { Layer } = require("../../layer/layer");
class BaseImageryLayer extends Layer {
    constructor(layerGroup, options) {
        super(layerGroup, options);
    }
    create(layerGroup, layerJson) {
        let imageryLayers = layerGroup.getImageryLayers();

        if (layerJson.show === true) {
            layerGroup.clearAll();
            //let imageryLayers = layerGroup.getImageryLayers();
            if (Q.isValid(Cesium[layerJson.provider])) {
                let imageryProvider = new Cesium[layerJson.provider](layerJson.options);
                if (typeof imageryProvider === "undefined") {
                    this.layerOnMap = imageryLayers.get(0);
                } else {
                    this.layerOnMap = new Cesium.ImageryLayer(imageryProvider);
                    //let index = imageryLayers.length == 0 ? 0 : imageryLayers.length /*- activeLayerIndex*/ - 1;
                    imageryLayers.add(this.layerOnMap, 0);
                }
            } else {
                console.error("invalid provider : " + layerJson.provider);
            }
        }
    }
    update(options) {
        super.update(options);
    }
    clear() {
        let imageryLayers = this.layerGroup.getImageryLayers();
        if (Q.isValid(this.layerOnMap)) {
            imageryLayers.remove(this.layerOnMap, true);
            this.layerOnMap = null;
        }

        imageryLayers._layers.forEach(layer => {
            if (layer.isBaseLayer()) {
                imageryLayers.remove(layer, true);
            }
        })
    }
}
module.exports = { BaseImageryLayer: BaseImageryLayer };