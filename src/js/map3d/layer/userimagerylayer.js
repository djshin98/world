const { Layer } = require("../../layer/layer");
class UserImageryLayer extends Layer {
    constructor(layerGroup, options) {
        super(layerGroup, options);
    }
    create(layerGroup, options) {
        console.warn("unsupported layer create : " + this.constructor.name);
    }
}
module.exports = { UserImageryLayer: UserImageryLayer };