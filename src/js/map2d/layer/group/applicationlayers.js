const { LayerGroup } = require("../../../layer/layergroup");
const { APPLICATION_LAYER } = require("../../../layer/layerdirector");
class ApplicationLayers extends LayerGroup {
    constructor(viewer, director) {
        super(director, APPLICATION_LAYER, true);
    }
    create(map, filename, group, json) {
        console.warn("unsupported layergroup : " + this.constructor.name);
    }
}
module.exports = { ApplicationLayers: ApplicationLayers };