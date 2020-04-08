//let {Cesium} = require('cesium/Cesium');
let { OliveEntityCollection } = require('../map3d/entity_collection');
let { SIDC } = require("../viewmodel/kmilsymbol");

class KMilSymbolCollection extends OliveEntityCollection {
    constructor(map) {
        super(map);
        this.simulationSeting = {};
    }
    isAirEntity(entity) {
        if (entity && entity.billboard && entity.billboard.options && entity.billboard.options.sic) {
            return entity.billboard.options.sic[2] == 'A' ? true : false;
        }
        return false;
    }

    add(cartesian, options) {
        let image = new kms.Symbol(options.sic, options);
        if (!options.description) {
            options.description = (new SIDC(options.sic[0], options.sic)).toDescription();
        }
        this._add(cartesian, options, image.toDataURL());
    }
    _add(cartesian, options, img) {
        var _this = this;
        var billboardOptions = {
            options: options,
            image: img,
            scale: 1.0,
            position: cartesian,
            heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND ,
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            scaleByDistance: new Cesium.NearFarScalar(1.5e2, 1.5, 8.0e6, 0.0)
        };

        var carto = Cesium.Cartographic.fromCartesian(cartesian, Cesium.Ellipsoid.WGS84);
        var longitude = carto.longitude * Cesium.Math.DEGREES_PER_RADIAN;
        var latitude = carto.latitude * Cesium.Math.DEGREES_PER_RADIAN;

        if (options.sic[2] == 'A') {
            billboardOptions.heightReference = Cesium.HeightReference.NONE;
            cartesian = Cesium.Cartesian3.fromDegrees(longitude, latitude, 6000);
        } else if (options.sic[2] == 'P') {
            billboardOptions.heightReference = Cesium.HeightReference.NONE;
            cartesian = Cesium.Cartesian3.fromDegrees(longitude, latitude, 250000);
        }
        var sidc_desc = "";
        if (options.description) {
            sidc_desc = options.description.reduce((prev, curr) => {
                return prev + "<p>" + curr.name + " : " + curr.value + " </p>";
            }, "");
        }

        if (options.sic === "SPAAMFB--------") {
            var cartoSet = Cesium.Ellipsoid.WGS84.cartesianToCartographic(cartesian);
            var lon = Cesium.Math.toDegrees(cartoSet.longitude);
            var lat = Cesium.Math.toDegrees(cartoSet.latitude);
            var targetSet = [110.0965503, 50.2573504]; // 도착지점 좌표
            var xcountSet = (targetSet[0] - lon) / 5000;
            var ycountSet = (targetSet[1] - lat) / 5000;
            var arrLonSet = lon + ((targetSet[0] - lon) / 2);
            var arrPointSet = [
                [lon, 6000],
                [arrLonSet, 100000],
                [targetSet[0], 6000] // 그냥 임시로 시작지점과 같은높이로 설정
            ];
        }
        let entity = this.addEntity({
            // position: cartesian,
            position: new Cesium.CallbackProperty(function(time, getPos) {
                if (options.sic === "SPAAMFB--------") {
                    var carto = Cesium.Ellipsoid.WGS84.cartesianToCartographic(cartesian);
                    if (carto.height >= cartoSet.height)
                        cartesian = _this.posCollback(cartesian, targetSet, xcountSet, ycountSet, arrLonSet, arrPointSet);
                }
                /* if (options.name === "지상작전사령부") {
                    app.collections
                    count++;
                    console.log(count);
                } */
                return cartesian;
            }, false),

            billboard: billboardOptions,
            description: new Cesium.CallbackProperty(function(time, result) {
                return '<img width="60px" style="float:left; margin: 0 1em 1em 0;" src="' + billboardOptions.image + '"/>\
                <p>대한민국 군대 부호.</p>\
                <p>부호코드 : ' + billboardOptions.options.sic + ' </p>\
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
        //console.log("add entity : " + entity.id);
    }
    posCollback(cartesian, target, xcount, ycount, arrLon, arrPoint) {
        var carto = Cesium.Ellipsoid.WGS84.cartesianToCartographic(cartesian);
        var lon = Cesium.Math.toDegrees(carto.longitude);
        var lat = Cesium.Math.toDegrees(carto.latitude);
        //distance 높이값 뭐뭐[]
        var res = 0;
        var xResult = [];
        var finalRes = 0;
        //val 이 구하고자 하는 x값 계속 바뀌는...

        arrPoint.forEach(function(da, i) {
            if (xResult.length < arrPoint.length) {
                arrPoint.forEach(function(d) {
                    var num = 1;
                    var den = 1;
                    var numArr = arrPoint.filter(function(f) {
                        return f[0] !== d[0];
                    });
                    numArr.forEach(function(c) {
                        num *= (lon + xcount - c[0]);
                        den *= (d[0] - c[0]);
                    });

                    xResult.push(num / den);

                });
            }
            finalRes += (xResult[i] * da[1]);
        });

        return Cesium.Cartesian3.fromDegrees(lon + xcount, lat + ycount, finalRes);
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