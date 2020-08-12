"use strict";
const { IxDatabase } = require('../indexeddb/db');
const L = require('leaflet');
require('leaflet-measure');
require('leaflet-measure/dist/leaflet-measure.css');
require("./leaflet/korean");
const { MapContent } = require("../app/article");
const { LayerDirector2 } = require("./layer/layerdirector");
const configLayers = require("../../conf/layers2d.json");

const LEVEL20 = 200;
const LEVELS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].reverse();
const distanceToZoomLevel = LEVELS.map((level, i) => {
    return { level: level, dist: LEVEL20 * Math.pow(2, i) };
});

class m2 extends MapContent {
    constructor(articleDirector, name, options) {
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
        this.db = new IxDatabase(1);
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
            div.innerHTML = "<span class='hidden-xs'>MapX 5.0<a href='http://www.u3cnc.com/'> | www.u3cnc.com</a></span>";
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

        this.lineMeasure = L.control.measure({
            position: 'topleft',
            keyboard: true,
            activeKeyCode: 'M'.charCodeAt(0),
            cancelKeyCode: 27,
            lineColor: 'red',
            lineWeight: 2,
            lineDashArray: '6, 6',
            lineOpacity: 1,
            onFinish: function(type, latlngs) {

            }
        }).addTo(this.viewer2d);

        //new L.Proj.TileLayer.TMS.Provider('NaverMap.Street').addTo(this.viewer2d);

        this.layerDirector = new LayerDirector2(this, configLayers);

        articleDirector.on("opened", this, (json) => {
            this.db.get("camera", "center", (result) => {
                if (result && result.value) {
                    let obj = result.value;
                    let d = CTX.c2d(obj.position);
                    let zoom = this.calcuateZoom(obj.distance)[0].level;
                    this.viewer2d.setZoom(zoom);
                    this.viewer2d.setView({ lng: d.longitude, lat: d.latitude });
                }
            });
        }, false);

        this.viewer2d.on("moveend", (e) => {
            this.changedView(e);
        });

        this.viewer2d.on('zoomend', (e) => {
            this.changedView(e);
        });

        this.viewer2d.on("click", (e) => {
            /*
            if (!_this.isMeasuring() && !_this.isDrawing() && !_this.isSpaceSearching() && !_this.isInitializing() && !_this.isPrinting()) {
                if (!qU(_this.applicationLayer) && !qU(_this.applicationLayer.click)) {
                    _this.applicationLayer.click(e);
                }
                if (!qU(_this.extraBaseLayer) && !qU(e.latlng)) {
                    _this.extraBaseLayer.click(e);
                }
            }

            if (!qU(application)) {
                application.alive();
            }*/
        });
    }
    changedView(e) {
        let latlng = this.viewer2d.getCenter();
        let d = CTX.d2c(obj.position);
        this.db.set("camera", "center", {
            position: w,
            distance: dist
        });
    }
    calcuateZoom(dist) {
        return distanceToZoomLevel.filter((d, i) => {
            if (dist < d.dist) {
                return true;
            } else if (distanceToZoomLevel.length == (i + 1)) {
                return true;
            }
            return false;
        });
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