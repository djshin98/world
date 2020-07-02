const { LayerGroup } = require("./layergroup");
const { BASE_IMAGERY_LAYER } = require("../../../layer/layerdirector");
class BaseImageryLayers extends LayerGroup {
    constructor(viewer, director) {
        super(director, BASE_IMAGERY_LAYER, false, true, true);
    }
    create(map, filename, group, json) {
        console.warn("unsupported layergroup : " + this.constructor.name);
    }
}
module.exports = { BaseImageryLayers: BaseImageryLayers };