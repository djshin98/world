const { LayerGroup } = require("../../../layer/layergroup");
class ApplicationLayers extends LayerGroup {
    constructor(viewer, director, g) {
        super(director, g, true);
    }
    create(json) {
        console.warn("unsupported layergroup : " + this.constructor.name);
    }
}
module.exports = { ApplicationLayers: ApplicationLayers };