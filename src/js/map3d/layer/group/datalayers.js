const { LayerGroup } = require("../../../layer/layergroup");
const { DataLayer } = require("../datalayer");
const { DATA_LAYER } = require("../../../layer/layerdirector");
class DataLayers extends LayerGroup {
    constructor(viewer, director) {
        super(director, DATA_LAYER, true);
    }
    create(json) {
        return new DataLayer(this, json);
    }
}
module.exports = { DataLayers: DataLayers };