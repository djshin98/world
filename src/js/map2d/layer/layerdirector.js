"use strict";

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

class LayerDirector2 extends LayerDirector {
    constructor(map, configLayers) {
        super(map, configLayers);

        if (!Q.isValid(this.getActiveLayer())) {
            let appLayers = this.getLayers(APPLICATION_LAYER);
            if (Q.isValid(appLayers)) {
                let layer;
                if (Q.isValid(appLayers.children) && appLayers.children.length > 0) {
                    layer = appLayers.children[0];
                    layer.focus = true;
                } else {
                    layer = {
                        name: "사용자 어플리케이션 레이어",
                        type: "check",
                        focus: true,
                        group: APPLICATION_LAYER,
                        provider: "ApplicationLayer",
                        options: {}
                    };
                }
                this.setApplicationLayer(layer, true, true);
            }
        }
        //this.restore();
    }

}

module.exports = {
    LayerDirector2: LayerDirector2
};