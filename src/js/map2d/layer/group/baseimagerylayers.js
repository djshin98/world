const { LayerGroup } = require("../../../layer/layergroup");
const { BaseImageryLayer } = require("../baseimagerylayer");
class BaseImageryLayers extends LayerGroup {
    constructor(viewer, director, g) {
        super(director, g, false, true, true);
    }
    create(json) {
        return new BaseImageryLayer(this, json);
    }
}
module.exports = { BaseImageryLayers: BaseImageryLayers };