class Layer {
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
    addBaseLayerOption(name, imageryProvider) {
        var layer;
        if (typeof imageryProvider === "undefined") {
            layer = this.imageryLayers.get(0);
            viewModel.selectedLayer = layer;
        } else {
            layer = new Cesium.ImageryLayer(imageryProvider);
        }

        layer.name = name;
        baseLayers.push(layer);
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
        // Create all the base layers that this example will support.
        // These base layers aren't really special.  It's possible to have multiple of them
        // enabled at once, just like the other layers, but it doesn't make much sense because
        // all of these layers cover the entire globe and are opaque.
        this.addBaseLayerOption("Bing Maps Aerial", undefined); // the current base layer
        this.addBaseLayerOption(
            "Bing Maps Road",
            new Cesium.BingMapsImageryProvider({
                url: "https://dev.virtualearth.net",
                mapStyle: Cesium.BingMapsStyle.ROAD,
            })
        );
        this.addBaseLayerOption(
            "ArcGIS World Street Maps",
            new Cesium.ArcGisMapServerImageryProvider({
                url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",
            })
        );
        this.addBaseLayerOption(
            "OpenStreetMaps",
            new Cesium.OpenStreetMapImageryProvider()
        );
        this.addBaseLayerOption(
            "Stamen Maps",
            new Cesium.OpenStreetMapImageryProvider({
                url: "https://stamen-tiles.a.ssl.fastly.net/watercolor/",
                fileExtension: "jpg",
                credit: "Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under CC BY SA.",
            })
        );
        this.addBaseLayerOption(
            "Natural Earth II (local)",
            new Cesium.TileMapServiceImageryProvider({
                url: Cesium.buildModuleUrl("Assets/Textures/NaturalEarthII"),
            })
        );
        this.addBaseLayerOption(
            "USGS Shaded Relief (via WMTS)",
            new Cesium.WebMapTileServiceImageryProvider({
                url: "http://basemap.nationalmap.gov/arcgis/rest/services/USGSShadedReliefOnly/MapServer/WMTS",
                layer: "USGSShadedReliefOnly",
                style: "default",
                format: "image/jpeg",
                tileMatrixSetID: "default028mm",
                maximumLevel: 19,
                credit: "U. S. Geological Survey",
            })
        );

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