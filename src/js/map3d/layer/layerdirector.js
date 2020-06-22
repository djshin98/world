class LayerDirector {
    constructor(map) {
        this.viewer = map.viewer3d;
        this.imageryLayers = this.viewer.imageryLayers;
    }
    find(callback) {
        for (let i = 0; i < this.imageryLayers.length; i++) {
            let l = this.imageryLayers.get(i);
            if (callback(l)) {
                return l;
            }
        }
    }
    setBaseLayer(name, provider, options) {
        let imageryProvider = new Cesium[provider](options);
        let layer;
        if (typeof imageryProvider === "undefined") {
            layer = this.imageryLayers.get(0);
            viewModel.selectedLayer = layer;
        } else {
            let activeLayerIndex = 0;
            //let currentLayer = this.find(l=>{ return (l.isBaseLayer())?true:false;});
            //if( currentLayer ){

            //}
            for (let i = 0; i < this.imageryLayers.length; i++) {
                let l = this.imageryLayers.get(i);
                if (l.isBaseLayer()) {
                    activeLayerIndex = i;
                    this.imageryLayers.remove(l, false);
                }
            }
            layer = new Cesium.ImageryLayer(imageryProvider);
            let index = this.imageryLayers.length == 0 ? 0 : this.imageryLayers.length - activeLayerIndex - 1;
            this.imageryLayers.add(layer, index);
        }
    }
    raise(name) {
        let layer;
        for (let i = 0; i < this.imageryLayers.length; i++) {
            let l = this.imageryLayers.get(i);
            if (l.name == name) {
                layer = l;
            }
        }
        // this.imageryLayers.raise(layer);
    }
    lower(name) {
        //this.imageryLayers.lower(layer);
    }
    setUserLayer(name, provider, options, alpha, show) {
        let layer;
        for (let i = 0; i < this.imageryLayers.length; i++) {
            let l = this.imageryLayers.get(i);
            if (!l.isBaseLayer() && l.name == name) {
                layer = l;
            }
        }
        if (!Q.isValid(layer)) {
            layer = this.imageryLayers.addImageryProvider(new Cesium[provider](options));
        }
        if (Q.isValid(alpha)) { layer.alpha = Cesium.defaultValue(alpha, 0.5); }
        if (Q.isValid(show)) { layer.show = Cesium.defaultValue(show, true); }
        if (Q.isValid(name)) { layer.name = Cesium.defaultValue(name, "default"); }
    }
}

module.exports = { LayerDirector: LayerDirector };