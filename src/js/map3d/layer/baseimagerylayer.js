const { Layer } = require("./layer");
class BaseImageryLayer extends Layer {
    constructor(map, json) {
        super(map);
    }
}
module.exports = { BaseImageryLayer: BaseImageryLayer };