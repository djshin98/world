const { LayerGroup } = require("../../../layer/layergroup");
const { UserImageryLayer } = require("../userimagerylayer");
class UserImageryLayers extends LayerGroup {
    constructor(viewer, director, g) {
        super(director, g, false);
    }
    create(json) {
        return new UserImageryLayer(this, json);
    }
    getImageryLayers() {
        return this.director.getMap().viewer3d.imageryLayers;
    }
    removeAll() {
        let imageryLayers = this.getImageryLayers();
        imageryLayers._layers.forEach((l, i) => {
            if (!l.isBaseLayer()) {
                imageryLayers.remove(l, true);
            }
        });
    }
}
module.exports = { UserImageryLayers: UserImageryLayers };