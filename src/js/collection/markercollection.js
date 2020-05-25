//let {Cesium} = require('cesium/Cesium');
let { OliveEntityCollection } = require('./entity_collection');
let { CTX } = require('../map3d/ctx');

var pinBuilder = new Cesium.PinBuilder();

var PinMarkers = {
    start: { name: 'start', type: 'text', text: 'S', color: Cesium.Color.NAVY, size: 48 },
    center: { name: 'center', type: 'text', text: 'C', color: Cesium.Color.DARKCYAN, size: 48 },
    end: { name: 'end', type: 'text', text: 'E', color: Cesium.Color.RED, size: 48 },
    via: { name: 'via', type: 'icon', icon: 'marker', color: Cesium.Color.CHOCOLATE, size: 48 }
};

class MarkerCollection extends OliveEntityCollection {
    constructor(map, options) {
        super(map, options);
    }
    add(cartesian, opt) {
        var options = Object.assign({
            name: 'test',
            type: 'color',
            color: Cesium.Color.ROYALBLUE,
            text: '?',
            icon: 'hospital',
            url: '',
            size: 48,
        }, opt);

        options.degree = { longitude: cartesian.longitude, latitude: cartesian.latitude, height: cartesian.height };
        if (typeof(options.color) == "string") {
            options.color = Cesium.Color.fromCssColorString(options.color);
        }
        let _this = this;
        switch (options.type) {
            case 'color':
                {
                    this.addEntity({
                        name: options.name,
                        position: CTX.d2c(cartesian),
                        billboard: {
                            image: pinBuilder.fromColor(options.color, options.size).toDataURL(),
                            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                            heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
                        },
                        olive_option: options
                    });
                }
                break;
            case 'text':
                {
                    this.addEntity({
                        name: options.name,
                        position: CTX.d2c(cartesian),
                        billboard: {
                            image: pinBuilder.fromText(options.text, options.color, options.size).toDataURL(),
                            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                            heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
                        },
                        olive_option: options
                    });
                }
                break;
            case 'icon':
                {
                    Cesium.when(pinBuilder.fromMakiIconId(options.icon, options.color, options.size), function(canvas) {
                        return _this.addEntity({
                            name: options.name,
                            position: CTX.d2c(cartesian),
                            billboard: {
                                image: canvas.toDataURL(),
                                verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                                heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
                            },
                            olive_option: options
                        });
                    });
                }
                break;
            case 'image':
                {
                    var url = Cesium.buildModuleUrl(options.url);
                    Cesium.when(pinBuilder.fromUrl(url, options.color, options.size), function(canvas) {
                        return _this.addEntity({
                            name: options.name,
                            position: CTX.d2c(cartesian),
                            billboard: {
                                image: canvas.toDataURL(),
                                verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                                heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
                            },
                            olive_option: options
                        });
                    });
                }
                break;
        }
    }
    open(entities) {
        this.close();
        let _this = this;
        if (entities) {
            let cartesians = [];
            entities.forEach(d => {
                if (d.options.category == "MARKER") {
                    //let cartesian = new Cesium.Cartesian3(d.cartesian.x, d.cartesian.y, d.cartesian.z);
                    _this.add(d.degree, d.options);
                    //cartesians.push(cartesian);
                }
            });

            //let rect = Cesium.Rectangle.fromCartesianArray(cartesians);
            //this.map.oliveCamera.flyToRectangle(rect);
        }
    }


};

module.exports = {
    MarkerCollection: MarkerCollection,
    PinMarkers: PinMarkers
}