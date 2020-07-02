"use strict";
const L = require("leaflet");
require("proj4");
require("proj4leaflet");

const vworldKey = '8F4F285D-6FE7-3930-BBC1-91EDE686EEC9';

L.Proj.CRS.Daum = new L.Proj.CRS(
    'EPSG:5181',
    '+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs', {
        resolutions: [2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1, 0.5, 0.25],
        origin: [-30000, -60000],
        // West                  // South                 // East                 // North
        //bounds: L.bounds([-30000-Math.pow(2,19)*2, -60000-Math.pow(2, 19)*2], [-30000+Math.pow(2,19)*3, -60000+Math.pow(2, 19)*3])

        bounds: L.bounds([-30000 - Math.pow(2, 19) * 4, -60000], [-30000 + Math.pow(2, 19) * 5, -60000 + Math.pow(2, 19) * 5])
    }
);

L.Proj.CRS.Naver = new L.Proj.CRS(
    'EPSG:5179',
    '+proj=tmerc +lat_0=38 +lon_0=127.5 +k=0.9996 +x_0=1000000 +y_0=2000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs', {
        resolutions: [2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1, 0.5, 0.25],
        origin: [90112, 1192896],
        bounds: L.bounds([90112, 1192896], [1990673, 2761664])
    }
);

L.Proj.CRS.VWorld = L.CRS.EPSG900913;
//	L.Proj.CRS.VWorld = L.CRS.EPSG4326;
//	L.Proj.CRS.VWorld = L.CRS.EPSG3857;
/*
	L.Proj.CRS.VWorld = new L.Proj.CRS(
			'EPSG:900913',
			'+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs',
	    {
		  resolutions: [156543.0339, 78271.517, 39135.7585, 19567.8793, 9783.93965, 4891.96983, 2445.98492, 1222.99246, 611.49623, 305.748115, 152.874058, 76.437029, 38.2185145, 19.1092573, 9.55462865, 4.77731433, 2.38865717, 1.19432859, 0.5971643, 0.29858215, 0.14929108],
		  origin: [-10045.7255859375, 668996.4375],
	      bounds: L.bounds([-10045.7255859375, 668996.4375 ], [632509.5, 58100.15625])
	    }
		
	);
	*/
L.TileLayer.KoreaProvider = L.TileLayer.extend({

    initialize: function(arg, options) {

        var providers = L.TileLayer.KoreaProvider.providers;

        var parts = arg.split('.');

        var providerName = parts[0];
        var variantName = parts[1];

        if (!providers[providerName]) {
            throw 'No such provider (' + providerName + ')';
        }

        var provider = {
            url: providers[providerName].url,
            crs: providers[providerName].crs,
            options: providers[providerName].options
        };
        provider.options.base = true;
        // overwrite values in provider from variant.
        if (variantName && 'variants' in providers[providerName]) {
            if (!(variantName in providers[providerName].variants)) {
                throw 'No such variant of ' + providerName + ' (' + variantName + ')';
            }
            var variant = providers[providerName].variants[variantName];
            var variantOptions;
            if (typeof variant === 'string') {
                variantOptions = {
                    variant: variant
                };
            } else {
                variantOptions = variant.options;
            }
            provider = {
                url: variant.url || provider.url,
                crs: variant.crs || provider.crs,
                options: L.Util.extend({}, provider.options, variantOptions)
            };
        } else if (typeof provider.url === 'function') {
            provider.url = provider.url(parts.splice(1).join('.'));
        }

        var forceHTTP = window.location.protocol === 'file:' || provider.options.forceHTTP;
        if (provider.url.indexOf('//') === 0 && forceHTTP) {
            provider.url = 'http:' + provider.url;
        }

        // If retina option is set
        if (provider.options.retina) {
            // Check retina screen
            if (options.detectRetina && L.Browser.retina) {
                // The retina option will be active now
                // But we need to prevent Leaflet retina mode
                options.detectRetina = false;
            } else {
                // No retina, remove option
                provider.options.retina = '';
            }
        }

        // replace attribution placeholders with their values from toplevel provider attribution,
        // recursively
        var attributionReplacer = function(attr) {
            if (attr.indexOf('{attribution.') === -1) {
                return attr;
            }
            return attr.replace(/\{attribution.(\w*)\}/,
                function(match, attributionName) {
                    return attributionReplacer(providers[attributionName].options.attribution);
                }
            );
        };
        provider.options.attribution = attributionReplacer(provider.options.attribution);

        // Compute final options combining provider options with any user overrides
        var layerOpts = L.Util.extend({}, provider.options, options);
        L.TileLayer.prototype.initialize.call(this, provider.url, layerOpts);
    }
});

/**
 * Definition of providers.
 * see http://leafletjs.com/reference.html#tilelayer for options in the options map.
 */

//jshint maxlen:220
L.TileLayer.KoreaProvider.providers = {
    DaumMap: {
        url: 'http://map{s}.daumcdn.net/map_2d/2jap/L{z}/{y}/{x}.png',
        crs: L.Proj.CRS.Daum,
        options: {
            maxZoom: 13,
            minZoom: 0,
            zoomReverse: true,
            zoomOffset: 1,
            subdomains: '0123',
            continuousWorld: true,
            tms: true,
            attribution: 'Map data &copy; <strong>DaumMap</strong>'
        },
        variants: {
            Street: {},
            Satellite: {
                url: 'http://s{s}.maps.daum-img.net/L{z}/{y}/{x}.jpg'
            },
            Cadastral: {
                url: 'http://map{s}.daumcdn.net/map_usedistrict/2jap/L{z}/{y}/{x}.png'
            },
            Physical: {
                url: 'http://map{s}.daumcdn.net/map_shaded_relief/2.00/L{z}/{y}/{x}.png'
            },
            Hybrid: {
                url: 'http://map{s}.daumcdn.net/map_hybrid/2jap/L{z}/{y}/{x}.png'
            },
            SkyView: {
                url: 'http://map{s}.daumcdn.net/map_skyview/L{z}/{y}/{x}.jpg?v=160114'
            },
            Bicycle: {
                url: 'http://map{s}.daumcdn.net/map_bicycle/2d/3.00/L{z}/{y}/{x}.png'
                    //'http://map{s}.daumcdn.net/map_bicycle/hybrid/3.00/L{z}/{y}/{x}.png'
            },
            Traffic: {
                url: 'http://r{s}.maps.daum-img.net/mapserver/file/realtimeroad/L{z}/{y}/{x}.png'
            }
        }
    },
    NaverMap: {
        url: 'http://onetile{s}.map.naver.net/get/171/0/0/{z}/{x}/{y}/bl_vc_bg/ol_vc_an',
        crs: L.Proj.CRS.Naver,
        options: {
            maxZoom: 13,
            minZoom: 0,
            zoomOffset: 1,
            subdomains: '1234',
            continuousWorld: true,
            tms: true,
            attribution: 'Map data &copy; <strong>NaverMap</strong>'
        },
        variants: {
            Street: {},
            Satellite: {
                url: 'http://onetile{s}.map.naver.net/get/171/0/1/{z}/{x}/{y}/bl_st_bg'
            },
            Cadastral: {
                url: 'http://onetile{s}.map.naver.net/get/171/0/0/{z}/{x}/{y}/empty/ol_lp_cn'
            },
            Physical: {
                url: 'http://onetile{s}.map.naver.net/get/171/0/0/{z}/{x}/{y}/bl_tn_bg/ol_vc_bg/ol_vc_an'
            },
            Hybrid: {
                url: 'http://onetile{s}.map.naver.net/get/171/0/0/{z}/{x}/{y}/empty/ol_st_rd/ol_st_an'
            },
            Bicycle: {
                url: 'http://onetile{s}.map.naver.net/get/171/0/0/{z}/{x}/{y}/empty/ol_bc_hb'
            },
            Traffic: {
                url: 'http://onetile{s}.map.naver.net/get/171/1400247/0/{z}/{x}/{y}/empty/ol_tr_rt/ol_vc_an'
            }
        }
    },
    VWorld: {
        url: 'http://api.vworld.kr/req/wmts/1.0.0/' + vworldKey + '/Base/{z}/{y}/{x}.png',
        crs: L.Proj.CRS.VWorld,
        options: {
            maxZoom: 19,
            minZoom: 6,
            continuousWorld: true,
            attribution: 'Map data &copy; <strong>VWorld</strong>'
        },
        variants: {
            Street: {},
            Satellite: {
                url: 'http://api.vworld.kr/req/wmts/1.0.0/' + vworldKey + '/Satellite/{z}/{y}/{x}.jpeg'
            },
            Hybrid: {
                url: 'http://api.vworld.kr/req/wmts/1.0.0/' + vworldKey + '/Hybrid/{z}/{y}/{x}.png'
            },
            Gray: {
                url: 'http://api.vworld.kr/req/wmts/1.0.0/' + vworldKey + '/Gray/{z}/{y}/{x}.png'
            },
            Midnight: {
                url: 'http://api.vworld.kr/req/wmts/1.0.0/' + vworldKey + '/midnight/{z}/{y}/{x}.png'
            }
        }
    }
};

L.tileLayer.koreaProvider = function(provider, options) {
    return new L.TileLayer.KoreaProvider(provider, options);
};