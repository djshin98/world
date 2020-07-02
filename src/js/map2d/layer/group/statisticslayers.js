const { LayerGroup } = require("../../../layer/layergroup");
const { STATISTICS_LAYER } = require("../../../layer/layerdirector");
class StatisticsLayers extends LayerGroup {
    constructor(viewer, director) {
        super(director, STATISTICS_LAYER, false);
    }
    create(map, filename, group, json) {
        console.warn("unsupported layergroup : " + this.constructor.name);
    }
}
module.exports = { StatisticsLayers: StatisticsLayers };