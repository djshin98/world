"use strict";

const { IxDatabase } = require('../../indexeddb/db');
const configLayers = require("../../../conf/layers.json");

const LAYER_KEY = "layers";
const BASE_IMAGERY_LAYER = "baseImagery";
const USER_IMAGERY_LAYER = "userImagery";
const TERRIAN_LAYER = "terrian";
const STATISTICS_LAYER = "statistics";
const DATA_LAYER = "data";
const APPLICATION_LAYER = "application";

class LayerDirector {
    constructor(map) {
        this.viewer = map.viewer3d;
        this.terrainProvider = map.viewOption.terrainProvider;
        this.imageryLayers = this.viewer.imageryLayers;
        this.layers = configLayers;
        this.db = new IxDatabase(1);
        this.ordering();

        this.updateCallbacks = [];

        this.restore();
    }
    ordering() {
        if (Q.isValid(this.layers)) {
            this.layers.forEach(g => {
                if (Q.isValid(g.children)) {
                    g.children.forEach((layer, i) => {
                        if (!Q.isValid(layer.order)) {
                            layer.order = i;
                        }
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
        this.db.delete(LAYER_KEY, "last");
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
        this.db.get(LAYER_KEY, "last", (result) => {
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
        this.db.set(LAYER_KEY, "last", this.layers);
        if (callbackable === false) {

        } else {
            if (Q.isValid(this.updateCallbacks)) {
                this.updateCallbacks.forEach((callback) => {
                    callback(this.layers);
                });
            }
        }
    }
    addUpdateCallback(callback, bfirstCall) {
        if (Q.isValid(callback) && Q.isFunction(callback)) {
            this.updateCallbacks.push(callback);
            if (bfirstCall === true) {
                callback(this.layers);
            }
        }
    }
    getLayers() {
        return this.layers;
    }
    setLayer(obj, show, callbackable) {
        if (Q.isValid(obj.group)) {
            if (obj.group == BASE_IMAGERY_LAYER) {
                return this.setBaseImageryLayer(obj.name, obj.provider, obj.options, callbackable);
            } else if (obj.group == USER_IMAGERY_LAYER) {
                return this.setUserImageryLayer(obj.name, obj.provider, obj.options, obj.alpha, show, callbackable);
            } else if (obj.group == TERRIAN_LAYER) {
                return this.setTerrianLayer(obj.name, obj.provider, obj.options, callbackable);
            } else if (obj.group == STATISTICS_LAYER) {
                return this.setStatisticsLayer(obj.name, obj.provider, obj.options, obj.alpha, show, callbackable);
            } else if (obj.group == DATA_LAYER) {
                return this.setDataLayer(obj.name, obj.provider, obj.options, obj.alpha, show, callbackable);
            } else if (obj.group == APPLICATION_LAYER) {
                return this.setApplicationLayer(obj.name, obj.provider, obj.options, obj.alpha, show, callbackable);
            } else {
                console.error("unsupported layer's group name :" + obj.group);
            }
        } else {
            console.error("layer's group name has no");
        }
    }
    setBaseImageryLayer(name, provider, options, callbackable) {
        if (Q.isValid(Cesium[provider])) {
            let imageryProvider = new Cesium[provider](options);

            if (typeof imageryProvider === "undefined") {
                //layer = this.imageryLayers.get(0);
            } else {
                let layer;
                //let activeLayerIndex = 0;
                this.forEach((l, i) => {
                    if (l.isBaseLayer()) {
                        //activeLayerIndex = i;
                        this.imageryLayers.remove(l, false);
                    }
                });
                layer = new Cesium.ImageryLayer(imageryProvider);
                let index = this.imageryLayers.length == 0 ? 0 : this.imageryLayers.length /*- activeLayerIndex*/ - 1;
                this.imageryLayers.add(layer, index);
            }
            this.save(BASE_IMAGERY_LAYER, { name, provider, options, show: true }, callbackable);
            return layer;
        } else {
            console.error("invalid provider : " + provider);
        }
    }
    setUserImageryLayer(name, provider, options, order, alpha, show, callbackable) {

        let layer = this.find((l) => { return (!l.isBaseLayer() && l.name == name) ? true : false; });

        if (!Q.isValid(layer)) {
            if (Q.isValid(options.rectangleDegree)) {
                options.rectangle = Cesium.Rectangle.fromDegrees(options.rectangleDegree);
            }
            if (this.imageryLayers.length < order) { order = this.imageryLayers.length; }
            layer = this.imageryLayers.addImageryProvider(new Cesium[provider](options), order);
        }
        if (Q.isValid(alpha)) { layer.alpha = Cesium.defaultValue(alpha, 0.5); }
        if (Q.isValid(show)) { layer.show = Cesium.defaultValue(show, true); }
        if (Q.isValid(name)) { layer.name = Cesium.defaultValue(name, "default"); }
        this.save(USER_IMAGERY_LAYER, { name, provider, options, alpha, show }, callbackable);
        return layer;
    }
    setTerrianLayer(name, provider, options, callbackable) {
        this.db.set(LAYER_KEY, TERRIAN_LAYER, { name, provider, options });
        let opt = Object.assign({
            requestVertexNormals: true,
            requestWaterMask: true
        }, options);
        if (Q.isValid(opt.proxy)) {
            opt.proxy = new Cesium.DefaultProxy(opt.proxy);
        }
        if (provider == "createWorldTerrain") {
            this.terrainProvider = Cesium.createWorldTerrain(opt);
        } else {
            this.terrainProvider = new Cesium[provider](opt);
        }
        this.save(TERRIAN_LAYER, { name, provider, options }, callbackable);
        return this.terrainProvider;
    }
    setStatisticsLayer(name, provider, options, alpha, show, callbackable) {
        this.save(STATISTICS_LAYER, { name, provider, options, alpha, show }, callbackable);
    }
    setDataLayer(name, provider, options, alpha, show, callbackable) {
        this.save(DATA_LAYER, { name, provider, options, alpha, show }, callbackable);
    }
    setApplicationLayer(name, provider, options, alpha, show, callbackable) {
        this.save(APPLICATION_LAYER, { name, provider, options, alpha, show }, callbackable);
    }
}

module.exports = { LayerDirector: LayerDirector };