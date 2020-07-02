const { LayerGroup } = require("../../../layer/layergroup");
const { UserImageryLayer } = require("../userimagerylayer");
const { USER_IMAGERY_LAYER } = require("../../../layer/layerdirector");
class UserImageryLayers extends LayerGroup {
    constructor(viewer, director) {
        super(director, USER_IMAGERY_LAYER, false);
        this.viewer = director.getMap().viewer3d;
        this.imageryLayers = this.viewer.imageryLayers;
    }
    create(json) {
        return new UserImageryLayer(this, json);
    }
}
module.exports = { UserImageryLayers: UserImageryLayers };