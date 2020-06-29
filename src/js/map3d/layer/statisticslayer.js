const { Layer } = require("./layer");
class StatisticsLayer extends Layer {
    constructor(map, json) {
        super(map);
    }
}
module.exports = { StatisticsLayer: StatisticsLayer };