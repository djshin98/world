const { LayerGroup } = require("../../../layer/layergroup");
const { StatisticsLayer } = require("../statisticslayer");
class StatisticsLayers extends LayerGroup {
    constructor(viewer, director, g) {
        super(director, g, true);
    }
    create(json) {
        return new StatisticsLayer(this, json);
    }
}
module.exports = { StatisticsLayers: StatisticsLayers };