const { Layer } = require("./layer");
class ApplicationLayer extends Layer {
    constructor(map, json) {
        super(map);
    }
}
module.exports = { ApplicationLayer: ApplicationLayer };