const { Layer } = require("./layer");
class DataLayer extends Layer {
    constructor(map, json) {
        super(map);
    }
}
module.exports = { DataLayer: DataLayer };