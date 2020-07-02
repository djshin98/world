const { Layer } = require("../../layer/layer");
class BaseImageryLayer extends Layer {
    constructor(layerGroup, options) {
        super(layerGroup, options);
        if (options.show === true) {
            show(true);
        }
    }
    create(layerGroup, options) {
        if (Q.isValid(Cesium[options.provider])) {
            let imageryProvider = new Cesium[options.provider](options.options);
            if (typeof imageryProvider === "undefined") {
                this.layerOnMap = this.imageryLayers.get(0);
            } else {
                options.show = true;
                this.layer = new Cesium.ImageryLayer(imageryProvider);
                let index = this.imageryLayers.length == 0 ? 0 : this.imageryLayers.length /*- activeLayerIndex*/ - 1;
                this.imageryLayers.add(layer, index);
            }
            return this.layer;
        } else {
            console.error("invalid provider : " + options.provider);
        }
    }
    show(bshow) {
        if (bshow) {
            this.create(this.layerGroup, this.options);
        } else {
            this.options.show = false;
        }
    }
}
module.exports = { BaseImageryLayer: BaseImageryLayer };