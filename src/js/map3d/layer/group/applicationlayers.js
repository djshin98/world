const { LayerGroup } = require("../../../layer/layergroup");
const { ApplicationLayer } = require("../applicationlayer");

class ApplicationLayers extends LayerGroup {
    constructor(viewer, director, g) {
        super(director, g, true);
    }
    create(json) {
        return new ApplicationLayer(this, json);
    }
}
module.exports = { ApplicationLayers: ApplicationLayers };