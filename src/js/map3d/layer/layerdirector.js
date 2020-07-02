"use strict";
const { BaseImageryLayers } = require("./group/baseimagerylayers");
const { UserImageryLayers } = require("./group/userimagerylayers");
const { TerrianLayers } = require("./group/terrianlayers");
const { StatisticsLayers } = require("./group/statisticslayers");
const { DataLayers } = require("./group/datalayers");
const { ApplicationLayers } = require("./group/applicationlayers");

const { IxDatabase } = require('../../indexeddb/db');
const configLayers = require("../../../conf/layers.json");

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
    constructor(map) {
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
    createLayerGroup(group) {
        if (Q.isValid(group)) {
            if (group == BASE_IMAGERY_LAYER) {
                return new BaseImageryLayers(this.map.viewer3d, this);
            } else if (group == USER_IMAGERY_LAYER) {
                return new UserImageryLayers(this.map.viewer3d, this);
            } else if (group == TERRIAN_LAYER) {
                return new TerrianLayers(this.map.viewer3d, this);
            } else if (group == STATISTICS_LAYER) {
                return new StatisticsLayers(this.map.viewer3d, this);
            } else if (group == DATA_LAYER) {
                return new DataLayers(this.map.viewer3d, this);
            } else if (group == APPLICATION_LAYER) {
                return new ApplicationLayers(this.map.viewer3d, this);
            } else {
                console.error("unsupported layer's group :" + group);
            }
        } else {
            console.error("layer's group name has no");
        }
    }
    setUserImageryLayer(obj, show, callbackable) {

        let layer = this.find((l) => { return (!l.isBaseLayer() && l.name == obj.name) ? true : false; });

        if (!Q.isValid(layer)) {
            if (Q.isValid(obj.options.rectangleDegree)) {
                obj.options.rectangle = Cesium.Rectangle.fromDegrees(obj.options.rectangleDegree);
            }
            if (this.imageryLayers.length < obj.order) { obj.order = this.imageryLayers.length; }
            layer = this.imageryLayers.addImageryProvider(new Cesium[obj.provider](obj.options), obj.order);
        }
        if (Q.isValid(obj.alpha)) { layer.alpha = Cesium.defaultValue(obj.alpha, 0.5); }
        if (Q.isValid(show)) { layer.show = Cesium.defaultValue(show, true); }
        if (Q.isValid(obj.name)) { layer.name = Cesium.defaultValue(obj.name, "default"); }
        this.save(USER_IMAGERY_LAYER, obj, callbackable);
        return layer;
    }

    setStatisticsLayer(obj, show, callbackable) {
        obj.show = show;
        this.save(STATISTICS_LAYER, obj, callbackable);
    }
    setDataLayer(obj, show, callbackable) {
        obj.show = show;
        this.save(DATA_LAYER, obj, callbackable);
    }
    setApplicationLayer(obj, show, callbackable) {
        obj.show = show;
        if (this.save(APPLICATION_LAYER, obj, callbackable)) {

        }
    }
}

module.exports = {
    LayerDirector3: LayerDirector3
};