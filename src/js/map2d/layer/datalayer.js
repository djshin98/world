const { Layer } = require("../../layer/layer");
class DataLayer extends Layer {
    constructor(layerGroup, options) {
        super(layerGroup, options);
    }
    create(layerGroup, options) {
        console.warn("unsupported layer create : " + this.constructor.name);
    }
}
module.exports = { DataLayer: DataLayer };