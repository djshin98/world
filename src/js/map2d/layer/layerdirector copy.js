"use strict";
const { BaseImageryLayers } = require("./group/baseimagerylayers");
const { UserImageryLayers } = require("./group/userimagerylayers");
const { TerrianLayers } = require("./group/terrianlayers");
const { StatisticsLayers } = require("./group/statisticslayers");
const { DataLayers } = require("./group/datalayers");
const { ApplicationLayers } = require("./group/applicationlayers");

const { IxDatabase } = require('../../indexeddb/db');

const {
    LayerDirector,
    BASE_IMAGERY_LAYER,
    USER_IMAGERY_LAYER,
    TERRIAN_LAYER,
    STATISTICS_LAYER,
    DATA_LAYER,
    APPLICATION_LAYER
} = require("../../layer/layerdirector");

class LayerDirector3 extends LayerDirector {
    constructor(map, configLayers) {
        super(map, configLayers);
        //this.restore();
    }
    createLayerGroup(g) {
        if (Q.isValid(g.group)) {
            if (g.group == BASE_IMAGERY_LAYER) {
                return new BaseImageryLayers(this.map.viewer3d, this, g);
            } else if (g.group == USER_IMAGERY_LAYER) {
                return new UserImageryLayers(this.map.viewer3d, this, g);
            } else if (g.group == TERRIAN_LAYER) {
                return new TerrianLayers(this.map.viewer3d, this, g);
            } else if (g.group == STATISTICS_LAYER) {
                return new StatisticsLayers(this.map.viewer3d, this, g);
            } else if (g.group == DATA_LAYER) {
                return new DataLayers(this.map.viewer3d, this, g);
            } else if (g.group == APPLICATION_LAYER) {
                return new ApplicationLayers(this.map.viewer3d, this, g);
            } else {
                console.error("unsupported layer's group :" + g.group);
            }
        } else {
            console.error("layer's group name has no");
        }
    }
}

module.exports = {
    LayerDirector3: LayerDirector3
};