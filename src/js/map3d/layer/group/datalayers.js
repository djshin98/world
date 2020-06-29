const { LayerGroup } = require("./layergroup");
class DataLayers extends LayerGroup {
    constructor(filename, group) {
        super(filename, group, false);
    }
    create(map, filename, group, json) {
        console.warn("unsupported layergroup : " + this.constructor.name);
    }
}
module.exports = { DataLayers: DataLayers };