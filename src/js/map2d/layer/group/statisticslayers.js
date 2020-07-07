const { LayerGroup } = require("../../../layer/layergroup");
class StatisticsLayers extends LayerGroup {
    constructor(viewer, director, g) {
        super(director, g, false);
    }
    create(json) {
        console.warn("unsupported layergroup : " + this.constructor.name);
    }
}
module.exports = { StatisticsLayers: StatisticsLayers };