const { LayerGroup } = require("../../../layer/layergroup");
const { TerrianLayer } = require("../terrianlayer");
class TerrianLayers extends LayerGroup {
    constructor(viewer, director, g) {
        super(director, g, true);
    }
    create(json) {
        return new TerrianLayer(this, json);
    }
    setTerrianProvider(provider) {
        this.director.map.viewer3d.terrianProvider = provider;
    }
}
module.exports = { TerrianLayers: TerrianLayers };