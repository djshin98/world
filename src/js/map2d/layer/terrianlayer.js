const { Layer } = require("../../layer/layer");
class TerrianLayer extends Layer {
    constructor(layerGroup, jsonLayer) {
        super(layerGroup, jsonLayer);
    }
    create(layerGroup, jsonLayer) {
        if (jsonLayer.show === true) {
            if (Q.isValid(jsonLayer.options.proxy)) {
                jsonLayer.options.proxy = new Cesium.DefaultProxy(jsonLayer.options.proxy);
            }
            if (jsonLayer.provider == "createWorldTerrain") {
                layerGroup.setTerrianProvider(Cesium.createWorldTerrain(jsonLayer.options));
            } else {
                layerGroup.setTerrianProvider(new Cesium[jsonLayer.provider](jsonLayer.options));
            }
        }
    }
}
module.exports = { TerrianLayer: TerrianLayer };