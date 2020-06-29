const { LayerGroup } = require("./layergroup");
class ApplicationLayers extends LayerGroup {
    constructor(filename, group) {
        super(filename, group, true);
    }
    create(map, filename, group, json) {
        console.warn("unsupported layergroup : " + this.constructor.name);
    }
}
module.exports = { ApplicationLayers: ApplicationLayers };