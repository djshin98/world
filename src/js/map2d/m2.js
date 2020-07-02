const L = require('leaflet');
require("./leaflet/korean");
const { MapCentent } = require("../app/article");

class m2 extends MapCentent {
    constructor(name, options) {
        super(name, Object.assign({
            index: 0,
            zoomToolbox: true,
            drawingToolbox: false,
            utilToolbox: false,
            scale: false,
            openDoor: true
        }, options));

        this.map = L.map(this.getId(), {
            /* crs: L.CRS.EPSG4326, */
            crs: L.Proj.CRS.VWorld,
            /* crs: L.Proj.CRS.TMS.NgiiMap, */
            continuousWorld: true,
            worldCopyJump: false,
            zoom: 7,
            minZoom: 7,
            maxZoom: 19,
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
            div.innerHTML = "<span class='hidden-xs'>농업공간정보서비스<a href='http://https://njy.mafra.go.kr/'> | njy.mafra.go.kr</a></span>";
            return div;
        };
        this.map.addControl(this.attributionControl);
        // this.map.addControl(new L.Control.Fullscreen());
        this.setAttribution = (str) => {
            if (!qU(str)) {
                $("." + this.getId() + "-attribution").html("<span class='hidden-xs'>" + str + "</span>");
            } else {
                $("." + this.getId() + "-attribution").html("<span class='hidden-xs'>농업공간정보서비스<a href='http://https://njy.mafra.go.kr/'> | njy.mafra.go.kr</a></span>");
            }

        }
        this.synchronizeMap = function(syncMap) {
            this.syncMap = syncMap;
        }
        this.map.setView({ lng: 128.0785804, lat: 36.1358642 }, this.map.getZoom());

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

    }
}

module.exports = { m2: m2 };