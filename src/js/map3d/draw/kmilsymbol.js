const { DrawObject } = require('./drawobject');
const { SIDC } = require("../../viewmodel/kmilsymbol");
const { OliveDescription } = require("../../ui/olive-description");
const { kms } = require("../../kmilsymbol/milsymbol");

class KMilSymbol extends DrawObject {
    constructor() {
        super(1, 1);

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
        };
    }
    create(layer, points, viewModel) {
        if (this.isComplete()) {
            points.forEach(point => {
                this.add(layer, CTX.c2d(point), { name: "테스트", SIDC: "SFGAEWMASR-----", size: 30 });
            });
        }
    }
    add(layer, degree, options) {
        let m = app.articles.getOpenedMap();
        if (Q.isValid(m)) {
            let graphic = kms.Graphics(options);
            if (!graphic.isIcon()) {
                m.add(graphic.modular);
            } else {
                let desc = (new SIDC(options.SIDC[0], options.SIDC)).toDescription();
                m.add(degree, { type: "milsymbol", symbol: graphic, desc: desc, options: options });

            }
        }
    }
    _add(layer, degree, options, desc, img) {

        let billboard = {
            image: img.toDataURL(),
            scale: 1.0,
            heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            eyeOffset: CTX.c(0, 0, -500),
            scaleByDistance: new Cesium.NearFarScalar(1.5e2, 1.5, 8.0e6, 0.0)
        };

        let entityOption = {
            olive_option: options,
            olive_description: desc,
            degree: degree,
            description: this.callbackDescirption(degree, options, desc, img) //this.createDescirption(degree, options, desc, img)
        };
        if (options.name) {
            entityOption.name = options.name;
            entityOption.label = {
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
            }
        }
        let height = this.defaultHeight(options.SIDC);

        let carto = CTX.d2r(degree);
        let terrainHeight = degree.height;
        height += terrainHeight;
        degree.height = height;
        //console.log("[ add entity ] terrian : " + terrainHeight + " , height : " + height);
        billboard.heightReference = this.defaultHRef(options.SIDC);
        let cartesian = CTX.d2c(degree);
        entityOption.position = cartesian;
        billboard.position = cartesian;
        let polyline = this.cretePolylineOptions(degree, terrainHeight, height, 2, this.defaultPolylineColor(options.SIDC));
        let ellipse = {
            material: 'img/pos2.png',
            semiMajorAxis: 30.0,
            semiMinorAxis: 30.0,
            heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
            distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 2000)
        }

        entityOption.billboard = billboard;
        entityOption.polyline = polyline;
        entityOption.ellipse = ellipse;

        return layer.add(entityOption);

        //return this.addCompositedEntity(entityOption, { billboard: billboard, }, [{ polyline: polyline , ellipse : ellipse }]);
        //return this.addEntity(entityOption);

    }

    callbackDescirption(degree, options, desc, img) {
        let sidc_desc = "";
        let count = 0;
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
            <th><span>부호</span></th><td><span>' + options.SIDC + ' </span></td></tr>\
            <tr><th><span>위도</span></th><td><span>' + (degree.latitude).toFixed(5) + ' </span></td>\
            <th><span>경도</span></th><td><span>' + (degree.longitude).toFixed(5) + ' </span></td></tr>\
            <tr><th><span>고도</span></th><td><span>' + (degree.height).toFixed(2) + ' m</span></td><td></td></tr>\
            <tr><th><span>설명</span></th><td colspan="4" ><span>' + sidc_desc + ' </span></td></tr></tbody></table>';
            /*<button>테스트</button>\
            <p>Source: <a style="color: WHITE" target="_blank" href="http://en.wikipedia.org/wiki/KMilsymbol">Wikpedia</a></p>';*/
        }, true);
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
        if (sidc[2] == 'A') {
            return 6000;
        } else if (sidc[2] == 'P') {
            return 250000;
        }
        return 100;
    }
    defaultPolylineColor(sidc) {
        if (sidc[2] == 'A') {
            return Cesium.Color.CORNFLOWERBLUE;
        } else if (sidc[2] == 'P') {
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
            //classificationType: Cesium.ClassificationType.CESIUM_3D_TILE,
            //heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
            //followSurface : new Cesium.ConstantProperty(false),
            //clampToGround:true,
            material: new Cesium.PolylineDashMaterialProperty({
                color: color,
                gapColor: Cesium.Color.TRANSPARENT,
                dashLength: 16
            })
        };
    }
}
module.exports = { KMilSymbol: KMilSymbol };