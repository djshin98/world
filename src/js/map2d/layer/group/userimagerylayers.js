const { LayerGroup } = require("../../../layer/layergroup");
class UserImageryLayers extends LayerGroup {
    constructor(viewer, director, g) {
        super(director, g, false);
    }
    create(json) {
        console.warn("unsupported layergroup : " + this.constructor.name);
    }
}
module.exports = { UserImageryLayers: UserImageryLayers };