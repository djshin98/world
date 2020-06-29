const { Layer } = require("./layer");
class TerrianLayer extends Layer {
    constructor(map, json) {
        super(map);
    }
}
module.exports = { TerrianLayer: TerrianLayer };