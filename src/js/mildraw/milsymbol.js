const { Symbol } = require('../kmilsymbol/ms/symbol');
const { SIDC } = require("../viewmodel/kmilsymbol");
const { OliveDescription } = require("../ui/olive-description");
const { kms } = require("../kmilsymbol/milsymbol");

class MilSymbol {
    constructor(options) {
        this.symbol = options;

        this.labelOptions = {
            //eyeOffset : new Cesium.Cartesian3(0, -1, -500),
            pixelOffset: new Cesium.Cartesian2(0, -80),
            font: '18px Helvetica', //font : '16px 굴림체',
            style: Cesium.LabelStyle.FILL_AND_OUTLINE,
            fillColor: Cesium.Color.YELLOW,
            outlineColor: Cesium.Color.BLACK,
            outlineWidth: 2.0,
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 100000)
        }
    }
    isAirEntity(sidc) {
        if (Q.isValid(sidc)) {
            return sidc[2] == 'A' ? true : false;
        }
        return false;
    }
    create(pos) {
        let img = this.symbol.toDataURL();
        let options = this.symbol.options;
        let degree = CTX.c2d(pos);
        //let desc = (new SIDC(options.SIDC[0], options.SIDC)).toDescription();
        var billboard = {
            image: img,
            scale: 1.0,
            //position: cartesian,
            heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            eyeOffset: CTX.c(0, 0, -50),
            scaleByDistance: new Cesium.NearFarScalar(1.5e2, 1.5, 8.0e6, 0.0)
        };
        let height = this.defaultHeight(options.sidc);

        let terrainHeight = degree.height;
        height += terrainHeight;
        degree.height = height;
        //console.log("[ add entity ] terrian : " + terrainHeight + " , height : " + height);
        billboard.heightReference = this.defaultHRef(options.sidc);
        billboard.position = CTX.d2c(degree);
        let polyline = this.cretePolylineOptions(degree, terrainHeight, height, 2, this.defaultPolylineColor(options.sidc));
        let ellipse = this.createGroundImage(options.sidc);
        let ret = {
            position: billboard.position,
            billboard: billboard,
            polyline: polyline,
            ellipse: ellipse
        };
        if (Q.isValid(options.name)) {
            ret.label = {
                text: options.name,
                eyeOffset: this.labelOptions.eyeOffset,
                pixelOffset: new Cesium.Cartesian2(0, -(img.height + 30)), // this.labelOptions.pixelOffset,
                font: this.labelOptions.font,
                style: this.labelOptions.style,
                fillColor: this.labelOptions.fillColor,
                outlineColor: this.labelOptions.outlineColor,
                outlineWidth: this.labelOptions.outlineWidth,
                verticalOrigin: this.labelOptions.verticalOrigin,
                distanceDisplayCondition: this.labelOptions.distanceDisplayCondition,
            };
        }
        return [ret];
    }
    createGroundImage(sidc) {
        if (sidc[0] == 'G') {
            return {};
        } else {
            return {
                //coordinates : Cesium.Rectangle.fromDegrees(-110.0, 15.0, -80.0, 20.0),
                //material : 'Assets/Textures/maki/cross.png',
                material: 'img/pos2.png',
                semiMajorAxis: 10.0,
                semiMinorAxis: 10.0,
                heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
                /*
                fill:true,
                color: Cesium.Color.WHITE,
                outline : true,
                outlineColor : Cesium.Color.WHITE,
                outlineWidth : 12.0,
                */
                distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 2000)
            };
        }
    }
    defaultHRef(sidc) {
        if (sidc[2] == 'A') {
            return Cesium.HeightReference.NONE;
        } else if (sidc[2] == 'P') {
            return Cesium.HeightReference.NONE;
        }
        return Cesium.HeightReference.NONE;
    }
    defaultHeight(sidc) {
        if (sidc[0] == 'G') {
            return 20;
        } else {
            if (sidc[2] == 'A') {
                return 6000;
            } else if (sidc[2] == 'P') {
                return 250000;
            }
        }

        return 100;
    }
    defaultPolylineColor(sidc) {
        if (sidc[0] == 'G') {
            return Cesium.Color.YELLOW;
        } else {
            if (sidc[2] == 'A') {
                return Cesium.Color.CORNFLOWERBLUE;
            } else if (sidc[2] == 'P') {
                return Cesium.Color.CORNFLOWERBLUE;
            }
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
            //classificationType: Cesium.ClassificationType.CESIUM_3D_TILE,
            //heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
            //followSurface : new Cesium.ConstantProperty(false),
            //clampToGround:true,
            material: new Cesium.PolylineDashMaterialProperty({
                color: color,
                gapColor: Cesium.Color.TRANSPARENT,
                dashLength: 16
            }),
            distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 7000)
        }
    }
    callbackDescirption(degree, options, desc, img) {
        var sidc_desc = "";
        var count = 0;
        if (desc) {
            sidc_desc = desc.reduce((prev, curr) => {
                return prev + " " + curr.value;
                //if( prev.length > 0 ) return prev;
                //return prev + "<p>" + curr.name + " : " + curr.value + " </p>";
            }, "");
        }
        return new Cesium.CallbackProperty(function(time, result) {
            let css = '<style>.cesium-infoBox-description table{\
                color: #edffff;\
                border-collapse:collapse;\
                border: 1px solid #565656;\
                font-size: 14px;\
            }\
            .cesium-infoBox-description th{\
                color:#aaa;\
                border: 1px solid #565656;\
                text-align:right;\
            }\
            .cesium-infoBox-description td{\
                border: 1px solid #565656;\
                text-align:center;\
            }</style>';

            return css + '<table><tbody><tr><td rowspan="3"><img width="' + img.width + 'px" height="' + img.height + 'px" style="margin: 0.1em;" src="' + img.toDataURL() + '"/></td>\
            <th><span>부대명</span></th><td><span>' + ((options.name) ? options.name : '알수없음') + ' </span></td>\
            <th><span>부호</span></th><td><span>' + options.sidc + ' </span></td></tr>\
            <tr><th><span>위도</span></th><td><span>' + (degree.latitude).toFixed(5) + ' </span></td>\
            <th><span>경도</span></th><td><span>' + (degree.longitude).toFixed(5) + ' </span></td></tr>\
            <tr><th><span>고도</span></th><td><span>' + (degree.height).toFixed(2) + ' m</span></td><td></td></tr>\
            <tr><th><span>설명</span></th><td colspan="4" ><span>' + sidc_desc + ' </span></td></tr></tbody></table>';
            /*<button>테스트</button>\
            <p>Source: <a style="color: WHITE" target="_blank" href="http://en.wikipedia.org/wiki/KMilsymbol">Wikpedia</a></p>';*/
        }, true);
    }

    createDescirption(degree, options, desc, img) {
        let opt = Object.assign({}, options);
        opt.degree = degree;
        opt.desc = desc;
        opt.icon = img;
        return new OliveDescription(opt);
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

        return CTX.cartesian(lon + xcount, lat + ycount, finalRes);
    }

};

module.exports = {
    MilSymbol: MilSymbol
}