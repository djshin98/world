const { LayerGroup } = require("../../../layer/layergroup");
const { DATA_LAYER } = require("../../../layer/layerdirector");
class DataLayers extends LayerGroup {
    constructor(viewer, director) {
        super(director, DATA_LAYER, false);
    }
    create(map, filename, group, json) {
        console.warn("unsupported layergroup : " + this.constructor.name);
    }
}
module.exports = { DataLayers: DataLayers };