const { LayerGroup } = require("../../../layer/layergroup");
const { BaseImageryLayer } = require("../baseimagerylayer");
class BaseImageryLayers extends LayerGroup {
    constructor(viewer, director, g) {
        super(director, g, false, true, true);
    }
    create(json) {
        return new BaseImageryLayer(this, json);
    }
    getImageryLayers() {
        return this.director.getMap().viewer3d.imageryLayers;
    }
    removeAll() {
        let imageryLayers = this.getImageryLayers();
        imageryLayers._layers.forEach((l, i) => {
            if (l.isBaseLayer()) {
                imageryLayers.remove(l, true);
            }
        });
    }

}
module.exports = { BaseImageryLayers: BaseImageryLayers };