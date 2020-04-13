//let {Cesium} = require('cesium/Cesium');
let { OliveEntityCollection } = require('./entity_collection');
let { SIDC } = require("../viewmodel/kmilsymbol");
let { CTX } = require("../map3d/ctx");

const sampleWidths = [0.1, 1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000];
class KMilSymbolCollection extends OliveEntityCollection {
    constructor(map, options) {
        super(map, options);
    }
    isAirEntity(entity) {
        if (entity && entity.billboard && entity.billboard.options && entity.billboard.options.sic) {
            return entity.billboard.options.sic[2] == 'A' ? true : false;
        }
        return false;
    }

    terrianFromDegrees(objs, callback) {
        let _this = this;
        var positions = objs.map(d => {
            let c = CTX.cartesian(d.degree.longitude, d.degree.latitude, 0);
            let position = _this.viewer.scene.clampToHeight(c);
            return position;
        });


        var promise = Cesium.sampleTerrain(this.viewer.terrainProvider, 11, positions);


        Cesium.when(promise, function(updatedPositions) {
            // ★ Correct value is about 25.3 meters.
            // ★ However, console shows 68.71596342427405.
            //console.log(positions[0].height);
            //callback(positions);
            positions.forEach((d, i) => {
                objs[i].degree.height = d.height;
                callback(objs[i]);
            })
        });
    }

    add(degree, options) {
        let image = new kms.Symbol(options.sic, options);
        let desc = (new SIDC(options.sic[0], options.sic)).toDescription();
        return this._add(degree, options, desc, image.toDataURL());
    }
    _add(degree, options, desc, img) {

        var billboard = {
            image: img,
            scale: 1.0,
            //position: cartesian,
            heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND,
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            scaleByDistance: new Cesium.NearFarScalar(1.5e2, 1.5, 8.0e6, 0.0)
        };

        let entityOption = {
            olive_option: options,
            olive_description: desc,
            degree: degree,
            description: this.callbackDescirption(degree, options, desc, img)
        };

        let height = this.defaultHeight(options.sic);

        let carto = CTX.d2r(degree);
        let terrainHeight = degree.height;
        height += terrainHeight;
        degree.height = height;
        console.log("[ add entity ] terrian : " + terrainHeight + " , height : " + height);
        billboard.heightReference = Cesium.HeightReference.NONE;
        let cartesian = CTX.d2c(degree);
        entityOption.position = cartesian;
        billboard.position = cartesian;
        let polyline = this.cretePolylineOptions(degree, terrainHeight, height, 1, this.defaultPolylineColor(options.sic));
        return this.addCompositedEntity(entityOption, { billboard: billboard }, [{ polyline: polyline }]);

    }
    defaultHeight(sic) {
        if (sic[2] == 'A') {
            return 6000;
        } else if (sic[2] == 'P') {
            return 250000;
        }
        return 20;
    }
    defaultPolylineColor(sic) {
        if (sic[2] == 'A') {
            return Cesium.Color.CORNFLOWERBLUE;
        } else if (sic[2] == 'P') {
            return Cesium.Color.CORNFLOWERBLUE;
        }
        return Cesium.Color.ANTIQUEWHITE;
    }
    cretePolylineOptions(degree, low, high, width, color) {
        return {
            positions: Cesium.Cartesian3.fromDegreesArrayHeights([degree.longitude, degree.latitude, low,
                degree.longitude, degree.latitude, high
            ]),
            width: width,
            color: color,
            classificationType: Cesium.ClassificationType.CESIUM_3D_TILE,
            material: new Cesium.PolylineDashMaterialProperty({
                color: color,
                gapColor: Cesium.Color.TRANSPARENT,
                dashLength: 16
            })
        };
    }
    callbackDescirption(degree, options, desc, img) {
        var sidc_desc = "";
        var count = 0;
        if (desc) {
            sidc_desc = desc.reduce((prev, curr) => {
                return prev + "<p>" + curr.name + " : " + curr.value + " </p>";
            }, "");
        }
        return new Cesium.CallbackProperty(function(time, result) {
            return '<img width="60px" style="float:left; margin: 0 1em 1em 0;" src="' + img + '"/>\
            <p>대한민국 군대 부호코드.</p>\
            <p>부호 : ' + options.sic + ' </p>\
            <p>위도 : ' + (degree.latitude).toFixed(5) + ' </p>\
            <p>경도 : ' + (degree.longitude).toFixed(5) + ' </p>\
            <p>고도 : ' + (degree.height).toFixed(2) + ' m</p>\
            ' + sidc_desc + '\
            <button>테스트</button>\
            <p>Source: <a style="color: WHITE" target="_blank" href="http://en.wikipedia.org/wiki/KMilsymbol">Wikpedia</a></p>';
        }, false);
    }

    /*
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
        }*/
    /*(options.sic === "SPAAMFB--------") ? new Cesium.CallbackProperty(function(time, getPos) {
                    var carto = Cesium.Ellipsoid.WGS84.cartesianToCartographic(cartesian);
                    if (carto.height >= cartoSet.height)
                        cartesian = _this.posCollback(cartesian, targetSet, xcountSet, ycountSet, arrLonSet, arrPointSet);
                    return cartesian;
                }, false) : cartesian,*/
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

        return CTX.cartesian(lon + xcount, lat + ycount, finalRes);
    }

    open(entities) {
        this.close();
        if (entities) {
            //let cartesians = [];
            entities.forEach(d => {
                if (d.options && d.options.category == "KMILSYMBOL") {
                    this.add(d.degree, d.options);
                    //cartesians.push(cartesian);
                }
            });

            //let rect = Cesium.Rectangle.fromCartesianArray(cartesians);
            //this.map.oliveCamera.flyToRectangle(rect);
        }
    }


};

module.exports = {
    KMilSymbolCollection: KMilSymbolCollection
}