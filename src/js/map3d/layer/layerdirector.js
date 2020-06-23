class LayerDirector {
    constructor(map) {
        this.viewer = map.viewer3d;
        this.terrainProvider = map.viewOption.terrainProvider;
        this.imageryLayers = this.viewer.imageryLayers;
        this.restore();
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

    }
    setBaseLayer(name, provider, options) {
        let imageryProvider = new Cesium[provider](options);
        let layer;
        if (typeof imageryProvider === "undefined") {
            layer = this.imageryLayers.get(0);
            viewModel.selectedLayer = layer;
        } else {
            let activeLayerIndex = 0;
            this.forEach((l) => {
                if (l.isBaseLayer()) {
                    activeLayerIndex = i;
                    this.imageryLayers.remove(l, false);
                }
            });
            layer = new Cesium.ImageryLayer(imageryProvider);
            let index = this.imageryLayers.length == 0 ? 0 : this.imageryLayers.length - activeLayerIndex - 1;
            this.imageryLayers.add(layer, index);
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
    setUserLayer(name, provider, options, alpha, show) {
        let layer = this.find((l) => { return (!l.isBaseLayer() && l.name == name) ? true : false; });
        if (!Q.isValid(layer)) {
            layer = this.imageryLayers.addImageryProvider(new Cesium[provider](options));
        }
        if (Q.isValid(alpha)) { layer.alpha = Cesium.defaultValue(alpha, 0.5); }
        if (Q.isValid(show)) { layer.show = Cesium.defaultValue(show, true); }
        if (Q.isValid(name)) { layer.name = Cesium.defaultValue(name, "default"); }
    }
    setTerrianLayer(name, provider, options) {
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
    }
}

module.exports = { LayerDirector: LayerDirector };