const { LayerGroup } = require("./layergroup");
class BaseImageryLayers extends LayerGroup {
    constructor(filename, group) {
        super(filename, group, false);
    }
    create(map, filename, group, json) {
        console.warn("unsupported layergroup : " + this.constructor.name);
    }
}
module.exports = { BaseImageryLayers: BaseImageryLayers };