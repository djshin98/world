const { LayerGroup } = require("./layergroup");
const { TERRIAN_LAYER } = require("../../../layer/layerdirector");
class TerrianLayers extends LayerGroup {
    constructor(viewer, director) {
        super(director, TERRIAN_LAYER, false);
    }
    create(map, filename, group, json) {
        console.warn("unsupported layergroup : " + this.constructor.name);
    }
}
module.exports = { TerrianLayers: TerrianLayers };