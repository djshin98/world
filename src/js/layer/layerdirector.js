"use strict";

const { IxDatabase } = require('../indexeddb/db');
const { LayerGroup } = require("./layergroup");

const LAYER_KEY = "layers";
const BASE_IMAGERY_LAYER = "baseImagery";
const USER_IMAGERY_LAYER = "userImagery";
const TERRIAN_LAYER = "terrian";
const STATISTICS_LAYER = "statistics";
const DATA_LAYER = "data";
const APPLICATION_LAYER = "application";

class LayerDirector {
    constructor(map, configLayers) {
        this.map = map;
        this.key = map.getName() + "." + LAYER_KEY;

        this.db = new IxDatabase(1);

        this.layers = [];
        this.create(configLayers);

        this.updateCallbacks = [];

        //this.db.set(this.key, "last", this.layers);

        if (!Q.isValid(this.getActiveLayer())) {
            let appLayers = this.getLayers(APPLICATION_LAYER);
            if (Q.isValid(appLayers)) {
                let layerOption;
                if (Q.isValid(appLayers.children) && appLayers.children.length > 0) {
                    layerOption = appLayers.children[0];
                    layerOption.focus = true;
                } else {
                    layerOption = {
                        name: "사용자 어플리케이션 레이어",
                        type: "check",
                        focus: true,
                        group: APPLICATION_LAYER,
                        provider: "ApplicationLayer",
                        options: {}
                    };
                }
                this.setApplicationLayer(layerOption, true, true);
            }
        }
        //this.restore();
    }
    getMap() { return this.map; }
    createLayerGroup(group) {
        return new LayerGroup(this, group, false);
    }
    create(config) {
        if (Q.isValid(config)) {
            config.forEach(g => {
                let layerGroup = this.getLayers(g.group);
                if (!Q.isValid(layerGroup)) {
                    layerGroup = this.createLayerGroup(g.group);
                    this.layers.push(layerGroup);
                }
                if (Q.isValid(layerGroup) && Q.isValid(g.children)) {
                    g.children.forEach((layer, i) => {
                        layerGroup.create(layer);
                    });
                }
            });
        }
    }
    raise(name) {
        let layer = this.find((l) => { return (l.name == name) ? true : false; });
        if (Q.isValid(layer)) {
            this.imageryLayers.raise(layer);
        }
    }
    lower(name) {
        let layer = this.find((l) => { return (l.name == name) ? true : false; });
        if (Q.isValid(layer)) {
            this.imageryLayers.lower(layer);
        }
    }
    clear() {
        this.imageryLayers.removeAll(true);
        this.db.delete(this.key, "last");
    }
    find(callback) {
        for (let i = 0; i < this.imageryLayers.length; i++) {
            let l = this.imageryLayers.get(i);
            if (callback(l)) {
                return l;
            }
        }
    }
    forEach(callback) {
        for (let i = 0; i < this.imageryLayers.length; i++) {
            callback(this.imageryLayers.get(i));
        }
    }
    restore() {
        this.db.get(this.key, "last", (result) => {
            if (result && result.value) {
                this.layers = result.value;
                this.layers.forEach(g => {
                    if (Q.isValid(g.children)) {
                        g.children.forEach(layer => {
                            if (layer.show === true) {
                                this.setLayer(layer, layer.show);
                            }
                        });
                    }
                });
            }
        });
    }
    save(url, obj, callbackable) {
        let group = this.layers.find((g) => { return g.group == url ? true : false; });
        if (Q.isValid(obj)) {
            if (Q.isValid(group)) {
                if (!Q.isValid(group.children)) { group.children = []; }
                let layer = group.children.find((layer) => { return layer.name == obj.name ? true : false; });
                if (Q.isValid(layer)) {
                    group.children = group.children.map((layer) => {
                        if (layer.name == obj.name) { return obj; }
                        return layer;
                    });
                } else {
                    group.children.push(obj);
                }
                group.children.sort((a, b) => {
                    if (a.order && b.order) return a.order - b.order;
                    if (a.order) return -1;
                    if (b.order) return 1;
                });
            }
            let layers = this.json();
            this.db.set(this.key, "last", layers);
            if (callbackable === false) {

            } else {
                if (Q.isValid(this.updateCallbacks)) {
                    this.updateCallbacks.forEach((callback) => {
                        callback(layers);
                    });
                }
            }
            if (Q.isValid(group)) {
                return true;
            }
        }

        return false;
    }
    json() {
        return this.layers.map(group => {
            return group.json();
        })
    }
    addUpdateCallback(callback, bfirstCall) {
        if (Q.isValid(callback) && Q.isFunction(callback)) {
            this.updateCallbacks.push(callback);
            if (bfirstCall === true) {
                callback(this.layers);
            }
        }
    }
    getLayers(group) {
        if (Q.isValid(group)) {
            return this.layers.find(layerGroup => { return layerGroup.group == group ? true : false; });
        }
        return this.layers;
    }
    getActiveLayer(group, bcreate) {
        let appLayers = this.getLayers(APPLICATION_LAYER);
        if (Q.isValid(appLayers)) {
            if (Q.isValid(appLayers.children)) {
                return appLayers.children.find((layer) => {
                    return layer.focus === true ? true : false;
                });
            }
        }
    }
    setLayer(obj, show, callbackable) {
        if (Q.isValid(obj.group)) {
            if (obj.group == BASE_IMAGERY_LAYER) {
                return this.setBaseImageryLayer(obj, callbackable);
            } else if (obj.group == USER_IMAGERY_LAYER) {
                return this.setUserImageryLayer(obj, show, callbackable);
            } else if (obj.group == TERRIAN_LAYER) {
                return this.setTerrianLayer(obj, callbackable);
            } else if (obj.group == STATISTICS_LAYER) {
                return this.setStatisticsLayer(obj, show, callbackable);
            } else if (obj.group == DATA_LAYER) {
                return this.setDataLayer(obj, show, callbackable);
            } else if (obj.group == APPLICATION_LAYER) {
                return this.setApplicationLayer(obj, show, callbackable);
            } else {
                console.error("unsupported layer's group name :" + obj.group);
            }
        } else {
            console.error("layer's group name has no");
        }
    }
    setBaseImageryLayer(obj, callbackable) {
        if (Q.isValid(Cesium[obj.provider])) {
            let imageryProvider = new Cesium[obj.provider](obj.options);
            let layer;
            if (typeof imageryProvider === "undefined") {
                //layer = this.imageryLayers.get(0);
            } else {

                //let activeLayerIndex = 0;
                this.imageryLayers.forEach((l, i) => {
                    if (l.isBaseLayer()) {
                        //activeLayerIndex = i;
                        this.imageryLayers.remove(l, false);
                    }
                });
                layer = new Cesium.ImageryLayer(imageryProvider);
                let index = this.imageryLayers.length == 0 ? 0 : this.imageryLayers.length /*- activeLayerIndex*/ - 1;
                this.imageryLayers.add(layer, index);
            }
            obj.show = true;
            this.save(BASE_IMAGERY_LAYER, obj, callbackable);
            return layer;
        } else {
            console.error("invalid provider : " + obj.provider);
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
    setTerrianLayer(obj, callbackable) {
        let opt = Object.assign({
            requestVertexNormals: true,
            requestWaterMask: true
        }, obj.options);

        if (Q.isValid(opt.proxy)) {
            opt.proxy = new Cesium.DefaultProxy(opt.proxy);
        }
        if (obj.provider == "createWorldTerrain") {
            this.terrainProvider = Cesium.createWorldTerrain(opt);
        } else {
            this.terrainProvider = new Cesium[obj.provider](opt);
        }
        obj.show = true;
        this.save(TERRIAN_LAYER, obj, callbackable);
        return this.terrainProvider;
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
    LayerDirector: LayerDirector,
    BASE_IMAGERY_LAYER,
    USER_IMAGERY_LAYER,
    TERRIAN_LAYER,
    STATISTICS_LAYER,
    DATA_LAYER,
    APPLICATION_LAYER
};