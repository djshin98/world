const { LayerGroup } = require("../../../layer/layergroup");
const { BaseImageryLayer } = require("../baseimagerylayer");
const { BASE_IMAGERY_LAYER } = require("../../../layer/layerdirector");
class BaseImageryLayers extends LayerGroup {
    constructor(viewer, director) {
        super(director, BASE_IMAGERY_LAYER, false, true, true);
        this.viewer = viewer;
        this.imageryLayers = this.viewer.imageryLayers;
    }
    create(json) {
        return new BaseImageryLayer(this, json);
    }
}
module.exports = { BaseImageryLayers: BaseImageryLayers };