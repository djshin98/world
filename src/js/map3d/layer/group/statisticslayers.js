const { LayerGroup } = require("../../../layer/layergroup");
const { StatisticsLayer } = require("../statisticslayer");
const { STATISTICS_LAYER } = require("../../../layer/layerdirector");
class StatisticsLayers extends LayerGroup {
    constructor(viewer, director) {
        super(director, STATISTICS_LAYER, true);
    }
    create(json) {
        return new StatisticsLayer(this, json);
    }
}
module.exports = { StatisticsLayers: StatisticsLayers };