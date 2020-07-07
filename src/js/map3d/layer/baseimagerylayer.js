const { Layer } = require("../../layer/layer");
class BaseImageryLayer extends Layer {
    constructor(layerGroup, options) {
        super(layerGroup, options);
    }
    create(layerGroup, layerJson) {
        if (Q.isValid(this.layerOnMap)) {
            imageryLayers.remove(this.layerOnMap, true);
            this.layerOnMap = null;
        }
        if (layerJson.show === true) {
            layerGroup.removeAll();
            let imageryLayers = layerGroup.getImageryLayers();
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
}
module.exports = { BaseImageryLayer: BaseImageryLayer };