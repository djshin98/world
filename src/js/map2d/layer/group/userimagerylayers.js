const { LayerGroup } = require("./layergroup");
const { USER_IMAGERY_LAYER } = require("../../../layer/layerdirector");
class UserImageryLayers extends LayerGroup {
    constructor(viewer, director) {
        super(director, USER_IMAGERY_LAYER, false);
    }
    create(map, filename, group, json) {
        console.warn("unsupported layergroup : " + this.constructor.name);
    }
}
module.exports = { UserImageryLayers: UserImageryLayers };