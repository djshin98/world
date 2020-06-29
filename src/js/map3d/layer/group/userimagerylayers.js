const { LayerGroup } = require("./layergroup");
class UserImageryLayers extends LayerGroup {
    constructor(filename, group) {
        super(filename, group, false);
    }
    create(map, filename, group, json) {
        console.warn("unsupported layergroup : " + this.constructor.name);
    }
}
module.exports = { UserImageryLayers: UserImageryLayers };