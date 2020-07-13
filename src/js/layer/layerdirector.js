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

        //this.restore();
    }
    getMap() { return this.map; }
    createLayerGroup(g) {
        return new LayerGroup(this, g, false);
    }
    create(config) {
        if (Q.isValid(config)) {
            config.forEach(g => {
                let layerGroup = this.getLayers(g.group);
                if (Q.isValid(layerGroup)) {
                    if (Q.isValid(g.children)) {
                        g.children.forEach(l => { layerGroup.put(l); })
                    }
                } else {
                    layerGroup = this.createLayerGroup(g);
                    this.layers.push(layerGroup);
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
                            this.setLayer(layer);
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
                callback(this.json());
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
            return appLayers.focus();
        }
    }
    setLayer(obj, callbackable) {
        if (Q.isValid(obj.group)) {
            let group = this.getLayers(obj.group);
            if (Q.isValid(group)) {
                group.put(obj, callbackable);
            } else {
                console.error("unsupported layer's group name : " + obj.group);
            }

        } else {
            console.error("layer's group name has no");
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