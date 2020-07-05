const { LayerGroup } = require("../../../layer/layergroup");
const { DataLayer } = require("../datalayer");
class DataLayers extends LayerGroup {
    constructor(viewer, director, g) {
        super(director, g, true);
    }
    create(json) {
        return new DataLayer(this, json);
    }
}
module.exports = { DataLayers: DataLayers };