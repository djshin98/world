const { LayerGroup } = require("../../../layer/layergroup");
const { TerrianLayer } = require("../terrianlayer");
const { TERRIAN_LAYER } = require("../../../layer/layerdirector");
class TerrianLayers extends LayerGroup {
    constructor(viewer, director) {
        super(director, TERRIAN_LAYER, true);
    }
    create(json) {
        return new TerrianLayer(this, json);
    }
}
module.exports = { TerrianLayers: TerrianLayers };