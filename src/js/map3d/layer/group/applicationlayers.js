const { LayerGroup } = require("../../../layer/layergroup");
const { ApplicationLayer } = require("../applicationlayer");
const { APPLICATION_LAYER } = require("../../../layer/layerdirector");

class ApplicationLayers extends LayerGroup {
    constructor(viewer, director) {
        super(director, APPLICATION_LAYER, true);
    }
    create(json) {
        return new ApplicationLayer(this, json);
    }
}
module.exports = { ApplicationLayers: ApplicationLayers };