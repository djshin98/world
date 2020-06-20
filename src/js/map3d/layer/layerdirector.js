class LayerDirector {
    constructor(map) {
        this.viewer = map.viewer3d;
        this.imageryLayers = this.viewer.imageryLayers;

        this.viewModel = {
            layers: [],
            baseLayers: [],
            upLayer: null,
            downLayer: null,
            selectedLayer: null,
            isSelectableLayer: function(layer) {
                return this.baseLayers.indexOf(layer) >= 0;
            },
            raise: function(layer, index) {
                imageryLayers.raise(layer);
                viewModel.upLayer = layer;
                viewModel.downLayer = viewModel.layers[Math.max(0, index - 1)];
                updateLayerList();
                window.setTimeout(function() {
                    viewModel.upLayer = viewModel.downLayer = null;
                }, 10);
            },
            lower: function(layer, index) {
                imageryLayers.lower(layer);
                viewModel.upLayer =
                    viewModel.layers[
                        Math.min(viewModel.layers.length - 1, index + 1)
                    ];
                viewModel.downLayer = layer;
                updateLayerList();
                window.setTimeout(function() {
                    viewModel.upLayer = viewModel.downLayer = null;
                }, 10);
            },
            canRaise: function(layerIndex) {
                return layerIndex > 0;
            },
            canLower: function(layerIndex) {
                return layerIndex >= 0 && layerIndex < imageryLayers.length - 1;
            },
        };
    }
    setBaseLayer(name, provider, options) {
        this.addBaseLayerOption(name, new Cesium[provider](options));
    }
    addBaseLayerOption(name, imageryProvider) {
        var layer;
        if (typeof imageryProvider === "undefined") {
            layer = this.imageryLayers.get(0);
            viewModel.selectedLayer = layer;
        } else {
            let activeLayerIndex = 0;
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
    addAdditionalLayerOption(name, imageryProvider, alpha, show) {
        var layer = imageryLayers.addImageryProvider(imageryProvider);
        layer.alpha = Cesium.defaultValue(alpha, 0.5);
        layer.show = Cesium.defaultValue(show, true);
        layer.name = name;
        Cesium.knockout.track(layer, ["alpha", "show", "name"]);
    }

    updateLayerList() {
        var numLayers = imageryLayers.length;
        viewModel.layers.splice(0, viewModel.layers.length);
        for (var i = numLayers - 1; i >= 0; --i) {
            viewModel.layers.push(imageryLayers.get(i));
        }
    }

    setupLayers() {

        // Create the additional layers
        this.addAdditionalLayerOption(
            "United States GOES Infrared",
            new Cesium.WebMapServiceImageryProvider({
                url: "https://mesonet.agron.iastate.edu/cgi-bin/wms/goes/conus_ir.cgi?",
                layers: "goes_conus_ir",
                credit: "Infrared data courtesy Iowa Environmental Mesonet",
                parameters: {
                    transparent: "true",
                    format: "image/png",
                },
            })
        );
        this.addAdditionalLayerOption(
            "United States Weather Radar",
            new Cesium.WebMapServiceImageryProvider({
                url: "https://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi?",
                layers: "nexrad-n0r",
                credit: "Radar data courtesy Iowa Environmental Mesonet",
                parameters: {
                    transparent: "true",
                    format: "image/png",
                },
            })
        );
        this.addAdditionalLayerOption(
            "TileMapService Image",
            new Cesium.TileMapServiceImageryProvider({
                url: "../images/cesium_maptiler/Cesium_Logo_Color",
            }),
            0.2
        );
        this.addAdditionalLayerOption(
            "Single Image",
            new Cesium.SingleTileImageryProvider({
                url: "../images/Cesium_Logo_overlay.png",
                rectangle: Cesium.Rectangle.fromDegrees(-115.0,
                    38.0, -107,
                    39.75
                ),
            }),
            1.0
        );
        this.addAdditionalLayerOption(
            "Grid",
            new Cesium.GridImageryProvider(),
            1.0,
            false
        );
        this.addAdditionalLayerOption(
            "Tile Coordinates",
            new Cesium.TileCoordinatesImageryProvider(),
            1.0,
            false
        );
    }
}

module.exports = { LayerDirector: LayerDirector };