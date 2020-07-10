const L = require('leaflet');
const { Layer } = require("../../layer/layer");
class BaseImageryLayer extends Layer {
    constructor(layerGroup, options) {
        super(layerGroup, options);
    }
    create(layerGroup, layerJson) {
        if (this.isVisible()) {
            layerGroup.clearAll();
            if (Q.isValid(L[layerJson.layer]) && Q.isValid(L[layerJson.layer][layerJson.provider])) {
                this.layerOnMap = L[layerJson.layer][layerJson.provider](layerJson.src);

                if (Q.isValid(this.layerOnMap)) {
                    this.layerOnMap.addTo(layerGroup.getMap().viewer2d);
                }
            } else {
                //console.error("invalid provider : " + layerJson.provider);
            }
        }
    }
    update(options) {
        super.update(options);
    }
    clear() {
        if (Q.isValid(this.layerOnMap)) {
            this.layerGroup.getMap().viewer2d.removeLayer(this.layerOnMap);
            this.layerOnMap = null;
        }
    }
}
module.exports = { BaseImageryLayer: BaseImageryLayer };