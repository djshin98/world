"use strict";
const L = require('leaflet');
require("./leaflet/korean");
const { MapContent } = require("../app/article");
const { LayerDirector2 } = require("./layer/layerdirector");
const configLayers = require("../../conf/layers2d.json");

class m2 extends MapContent {
    constructor(name, options) {
        super(name, options);
        /*
        Object.assign({
            index: 0,
            zoomToolbox: true,
            drawingToolbox: false,
            utilToolbox: false,
            scale: false,
            openDoor: true
        }, options);
        */
        this.viewer2d = L.map(this.getId(), {
            /* crs: L.CRS.EPSG4326, */
            crs: L.Proj.CRS.VWorld,
            /* crs: L.Proj.CRS.TMS.NgiiMap, */
            continuousWorld: false,
            worldCopyJump: false,
            zoom: 7,
            minZoom: 0,
            maxZoom: 24,
            // center : [ 127.29833984375, 36.85904339525896 ],
            center: [127.90283, 36.1358642],
            /*
             * maxBounds : new L.LatLngBounds(new L.LatLng(32.3900458847,
             * 121.86035), new L.LatLng(42.22946, 138.468304478)),
             */
            // layers : [ vworldMap, cartoLight ],
            zoomControl: false,
            attributionControl: false
        });

        this.attributionControl = L.control({
            position: "topleft"
        });
        this.attributionControl.onAdd = (map) => {
            var div = L.DomUtil.create("div", "leaflet-control-attribution " + this.getId() + "-attribution");
            div.innerHTML = "<span class='hidden-xs'>Olive 2D Map<a href='http://www.u3cnc.com/'> | www.u3cnc.com</a></span>";
            return div;
        };
        this.viewer2d.addControl(this.attributionControl);
        // this.viewer2d.addControl(new L.Control.Fullscreen());
        this.setAttribution = (str) => {
            if (!qU(str)) {
                $("." + this.getId() + "-attribution").html("<span class='hidden-xs'>" + str + "</span>");
            } else {
                $("." + this.getId() + "-attribution").html("<span class='hidden-xs'>Olive 2D Map<a href='http://www.u3cnc.com/'> | www.u3cnc.com</a></span>");
            }

        }

        this.viewer2d.setView({ lng: 128.0785804, lat: 36.1358642 }, this.viewer2d.getZoom());

        this.baseLayers = {
            '브이월드': L.tileLayer.koreaProvider('VWorld.Street'),
            '브이월드(위성)': L.tileLayer.koreaProvider('VWorld.Satellite'),
            '배경없음': null
                /*
                 * '브이월드(하이브리드)': L.tileLayer.koreaProvider('VWorld.Hybrid'),
                 * '브이월드(Midnight)': L.tileLayer.koreaProvider('VWorld.Midnight'),
                 * '바로e맵': L.tileLayer.koreaProvider('Ngii.Street')
                 */
        };

        this.setBaseLayer(this.baseLayers['브이월드(위성)']);

        this.zoomControl = L.control.zoom({
            position: "topright",
        }).addTo(this.viewer2d);

        L.control.scale({ imperial: false, position: 'bottomright' }).addTo(this.viewer2d);

        //new L.Proj.TileLayer.TMS.Provider('NaverMap.Street').addTo(this.viewer2d);

        this.layerDirector = new LayerDirector2(this, configLayers);
    }
    synchronizeMap(syncMap) {
        this.syncMap = syncMap;
    }
    setBaseLayer(layer) {
        if (Q.isValid(this.baseLayer)) {
            // this.baseLayer.removeTo(this.viewer2d);
            this.viewer2d.removeLayer(this.baseLayer);
            this.baseLayer = null;
        }
        this.baseLayer = layer;

        if (Q.isValid(this.baseLayer)) {
            this.baseLayer.addTo(this.viewer2d);
        }
        this.refreshLayer();
    }
    refreshLayer() {
        if (Q.isValid(this.baseLayer)) {
            this.baseLayer.bringToFront();
        }
        /*
		if( Q.isValid(this.applicationLayer) ){
			this.applicationLayer.bringToFront();
			if( Q.isValid(this.applicationLayer.showLabelLayer) ){
				this.applicationLayer.showLabelLayer(this.isLabelVisibility);	
			}
			this.applicationLayer.refresh(this.viewer2d);
		}
		if( Q.isValid(this.extraBaseLayer) ){
			this.extraBaseLayer.bringToFront();
		}*/
    }
    resize(x, y, width, height) {
        super.resize(x, y, width, height);
        this.viewer2d.invalidateSize();
    }
    json() {
        return this.getLayerDirector().json();
    }
    getLayerDirector() {
        return this.layerDirector;
    }
}

module.exports = { m2: m2 };