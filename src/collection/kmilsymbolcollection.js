//let {Cesium} = require('cesium/Cesium');
let { OliveEntityCollection } = require('../map3d/entity_collection')
class KMilSymbolCollection extends OliveEntityCollection {
    constructor(map) {
        super(map);
    }
    isAirEntity(entity) {
        if (entity && entity.billboard && entity.billboard.options && entity.billboard.options.sic) {
            return entity.billboard.options.sic[2] == 'A' ? true : false;
        }
        return false;
    }

    add(cartesian, options){
        let image = new kms.Symbol(options.sic, options);
        this._add( cartesian , options, image.toDataURL() );
    }
    _add(cartesian, options,img){
        var obj = {
            options:options,
            image: img,
            scale:1.0,
            position: cartesian,
            heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            scaleByDistance: new Cesium.NearFarScalar(1.5e2, 1.5, 8.0e6, 0.0)
        };

        var carto = Cesium.Cartographic.fromCartesian(cartesian, Cesium.Ellipsoid.WGS84);
        var longitude = carto.longitude * Cesium.Math.DEGREES_PER_RADIAN;
        var latitude = carto.latitude * Cesium.Math.DEGREES_PER_RADIAN;

        if (options.sic[2] == 'A') {
            obj.heightReference = Cesium.HeightReference.NONE;
            cartesian = Cesium.Cartesian3.fromDegrees(longitude, latitude, 6000);
        } else if (options.sic[2] == 'P') {
            obj.heightReference = Cesium.HeightReference.NONE;
            cartesian = Cesium.Cartesian3.fromDegrees(longitude, latitude, 250000);
        }
        var sidc_desc = "";
        if (options.description) {
            sidc_desc = options.description.reduce((prev, curr) => {
                return prev + "<p>" + curr.name + " : " + curr.value + " </p>";
            }, "");
        }
        let entity = this.addEntity({
            position: cartesian,
            billboard: obj,
            /*
            description : new Cesium.CallbackProperty(function(time, result) {
                return '<img width="60px" style="float:left; margin: 0 1em 1em 0;" src="'+obj.image+'"/>\
                <p>대한민국 군대 부호.</p>\
                <p>부호코드 : '+obj.options.sic+' </p>\
                <p>위도 : '+(carto.latitude * Cesium.Math.DEGREES_PER_RADIAN).toFixed(5)+' </p>\
                <p>경도 : '+(carto.longitude * Cesium.Math.DEGREES_PER_RADIAN).toFixed(5)+' </p>\
                <p>고도 : '+(carto.height).toFixed(2)+' m </p>\
                <button>테스트</button>\
                <p>Source: <a style="color: WHITE" target="_blank" href="http://en.wikipedia.org/wiki/KMilsymbol">Wikpedia</a></p>';
            },true)
            */
            description: new Cesium.CallbackProperty(function(time, result) {
                return '<img width="60px" style="float:left; margin: 0 1em 1em 0;" src="' + obj.image + '"/>\
                <p>대한민국 군대 부호.</p>\
                <p>부호코드 : ' + obj.options.sic + ' </p>\
                <p>위도 : ' + (carto.latitude * Cesium.Math.DEGREES_PER_RADIAN).toFixed(5) + ' </p>\
                <p>경도 : ' + (carto.longitude * Cesium.Math.DEGREES_PER_RADIAN).toFixed(5) + ' </p>\
                <p>고도 : ' + (carto.height).toFixed(2) + ' m</p>\
                ' + sidc_desc + '\
                <button>테스트</button>\
                <p>Source: <a style="color: WHITE" target="_blank" href="http://en.wikipedia.org/wiki/KMilsymbol">Wikpedia</a></p>';
            }, true)
        });

        if (options.sic[2] == 'A') {
            let entity_arrow = this.viewer.entities.add({
                //name : 'billboard_arrow',
                options: { category: "KMILSYMBOL.ARROW" },
                polyline: {
                    positions: Cesium.Cartesian3.fromDegreesArrayHeights([longitude, latitude, 0,
                        longitude, latitude, 6000
                    ]),
                    width: 10,
                    material: new Cesium.PolylineGlowMaterialProperty({
                        glowPower: 0.2,
                        taperPower: 0.5,
                        color: Cesium.Color.CORNFLOWERBLUE
                    })
                }
            });
            entity.subEntites = [];
            entity.subEntites.push(entity_arrow.id);
        } else if (options.sic[2] == 'P') {
            let entity_arrow = this.viewer.entities.add({
                //name : 'billboard_arrow',
                options: { category: "KMILSYMBOL.ARROW" },
                polyline: {
                    positions: Cesium.Cartesian3.fromDegreesArrayHeights([longitude, latitude, 0,
                        longitude, latitude, 250000
                    ]),
                    width: 10,
                    material: new Cesium.PolylineGlowMaterialProperty({
                        glowPower: 0.2,
                        taperPower: 0.5,
                        color: Cesium.Color.BLUE
                    })
                }
            });
            entity.subEntites = [];
            entity.subEntites.push(entity_arrow.id);
        }
        console.log("add entity : " + entity.id);
    }
    open(entities) {
        this.close();
        if (entities) {
            let cartesians = [];
            entities.forEach(d => {
                if (d.options.category == "KMILSYMBOL") {
                    let cartesian = new Cesium.Cartesian3(d.cartesian.x, d.cartesian.y, d.cartesian.z);
                    let symbol = new kms.Symbol(d.options.sic, d.options);
                    let img = symbol.toDataURL();
                    this.add(cartesian, d.options, img);
                    cartesians.push(cartesian);
                }
            });

            let rect = Cesium.Rectangle.fromCartesianArray(cartesians);
            //this.map.oliveCamera.flyToRectangle(rect);
        }
    }


};

module.exports = {
    KMilSymbolCollection: KMilSymbolCollection
}