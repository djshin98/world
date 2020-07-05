const { LayerGroup } = require("../../../layer/layergroup");
class BaseImageryLayers extends LayerGroup {
    constructor(viewer, director, g) {
        super(director, g, false, true, true);
    }
    create(json) {
        console.warn("unsupported layergroup : " + this.constructor.name);
    }
}
module.exports = { BaseImageryLayers: BaseImageryLayers };