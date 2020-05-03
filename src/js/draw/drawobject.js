var { PinMarkers } = require('../collection/drawcollection');
var drawIndex = 1;

let descriptionCss = '<style>.cesium-infoBox-description table{\
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

function setDrawViewModel(defaultViewModel, viewModel) {
    let _viewModel = {
        mode: 'view',
        enableStyle: false,
        lineWidth: 1,
        lineColor: Cesium.Color.WHITE,
        lineTransparent: 1,
        lineStyle: 'line',
        faceColor: Cesium.Color.WHITE,
        faceTransparent: 1,
        frameEnable: false,
        frameColor: Cesium.Color.WHITE,
        shapeStyle: 'point',
        shapeColor: Cesium.Color.WHITE,
        size: 10,
        shapeSize: 5
    };
    _viewModel = Object.assign(_viewModel, defaultViewModel);
    _viewModel.mode = Cesium.defined(viewModel.mode) ? viewModel.mode : _viewModel.mode;
    _viewModel.enableStyle = Cesium.defined(viewModel.enableStyle) ? viewModel.enableStyle : _viewModel.enableStyle;
    _viewModel.lineStyle = Cesium.defined(viewModel.lineStyle) ? viewModel.lineStyle : _viewModel.lineStyle;
    _viewModel.frameEnable = Cesium.defined(viewModel.frameEnable) ? viewModel.frameEnable : _viewModel.frameEnable;
    _viewModel.shapeStyle = Cesium.defined(viewModel.shapeStyle) ? viewModel.shapeStyle : _viewModel.shapeStyle;

    _viewModel.size = Cesium.defined(viewModel.size) ? parseInt(viewModel.size) : _viewModel.size;
    _viewModel.shapeSize = Cesium.defined(viewModel.shapeSize) ? parseInt(viewModel.shapeSize) : _viewModel.shapeSize;
    _viewModel.lineWidth = Cesium.defined(viewModel.lineWidth) ? parseInt(viewModel.lineWidth) : _viewModel.lineWidth;
    _viewModel.image = viewModel.image;

    if (Cesium.defined(viewModel.lineColor)) {
        if (typeof(viewModel.lineColor) == "string") {
            _viewModel.lineColor = Cesium.Color.fromCssColorString(viewModel.lineColor);
        } else {
            _viewModel.lineColor = viewModel.lineColor;
        }
    }
    if (Cesium.defined(viewModel.faceColor)) {
        if (typeof(viewModel.faceColor) == "string") {
            _viewModel.faceColor = Cesium.Color.fromCssColorString(viewModel.faceColor);
        } else {
            _viewModel.faceColor = viewModel.faceColor;
        }
    }
    if (Cesium.defined(viewModel.frameColor)) {
        if (typeof(viewModel.frameColor) == "string") {
            _viewModel.frameColor = Cesium.Color.fromCssColorString(viewModel.frameColor);
        } else {
            _viewModel.frameColor = viewModel.frameColor;
        }
    }
    if (Cesium.defined(viewModel.shapeColor)) {
        if (typeof(viewModel.shapeColor) == "string") {
            _viewModel.shapeColor = Cesium.Color.fromCssColorString(viewModel.shapeColor);
        } else {
            _viewModel.shapeColor = viewModel.shapeColor;
        }
    }
    if (Cesium.defined(viewModel.faceTransparent)) {
        if (typeof(viewModel.faceTransparent) == "string") {
            _viewModel.faceTransparent = parseFloat(viewModel.faceTransparent) / 100;
        } else {
            _viewModel.faceTransparent = viewModel.faceTransparent;
        }
    }
    if (Cesium.defined(viewModel.lineTransparent)) {
        if (typeof(viewModel.lineTransparent) == "string") {
            _viewModel.lineTransparent = parseFloat(viewModel.lineTransparent) / 100;
        } else {
            _viewModel.lineTransparent = viewModel.lineTransparent;
        }
    }

    if (Cesium.defined(viewModel.size)) {
        if (typeof(viewModel.size) == "string") {
            _viewModel.size = parseInt(viewModel.size);
        } else {
            _viewModel.size = viewModel.size;
        }
    }
    if (Cesium.defined(viewModel.shapeSize)) {
        if (typeof(viewModel.shapeSize) == "string") {
            _viewModel.shapeSize = parseInt(viewModel.shapeSize);
        } else {
            _viewModel.shapeSize = viewModel.shapeSize;
        }
    }
    _viewModel.lineColor = _viewModel.lineColor.withAlpha(_viewModel.lineTransparent);
    _viewModel.faceColor = _viewModel.faceColor.withAlpha(_viewModel.faceTransparent);

    return _viewModel;
}
class DrawObject {
    constructor(minPointCount) {
        this.index = drawIndex++;
        this.minPointCount = minPointCount;
    }
    pniStart() {
        return PinMarkers.start;
    }
    pinVia() {
        return PinMarkers.via;
    }
    pinEnd() {
        return PinMarkers.end;
    }
    pin(pointLength) {
        if (pointLength == 0) {
            return this.pniStart();
        } else if (pointLength == this.minPointCount - 1) {
            return this.pinEnd();
        }
        return this.pinVia();
    }
    create(collection, points, viewModel) {

    }

    lineMaterial(style, color, width) {
        if (style != "line") {
            return Cesium.PolylineDashMaterialProperty({
                color: color,
                dashPattern: this.dashPatternFromString(style, (width) % 8)
            });
        } else {
            return color; //new Cesium.ColorMaterialProperty(viewModel.lineColor);
        }
    }

    dashPatternFromString(str, width) {
        if (str == "line") {
            return parseInt('11111111111', 2);
        } else if (str == "dot") {
            let v = '1'.repeat(width);
            return parseInt(v, 2);
        } else if (str == "long-dot") {
            return parseInt('1'.repeat(width), 2);
        } else if (str == "dot-dot-line") {
            return parseInt('1'.repeat(width) + '0'.repeat(width), 2);
        }
        return parseInt('11111111111', 2);
    }
    setViewModel(defaultVM, viewModel) {
        return setDrawViewModel(defaultVM, viewModel);
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

            let imgstr = Cesium.defined(img) ? '<img width="60px" style="margin: 0.1em;" src="' + img.toDataURL() + '"/>' : '';
            return descriptionCss + '<table><tbody><tr><td rowspan="3">' + imgstr + '</td>\
            <th><span>부대명</span></th><td><span>' + ((options.name) ? options.name : '알수없음') + ' </span></td>\
            <th><span>부호</span></th><td><span>' + options.sic + ' </span></td></tr>\
            <tr><th><span>위도</span></th><td><span>' + (degree.latitude).toFixed(5) + ' </span></td>\
            <th><span>경도</span></th><td><span>' + (degree.longitude).toFixed(5) + ' </span></td></tr>\
            <tr><th><span>고도</span></th><td><span>' + (degree.height).toFixed(2) + ' m</span></td><td></td><td></td></tr>\
            <tr><th><span>설명</span></th><td colspan="4" ><span>' + sidc_desc + ' </span></td></tr></tbody></table>';
            /*<button>테스트</button>\
            <p>Source: <a style="color: WHITE" target="_blank" href="http://en.wikipedia.org/wiki/KMilsymbol">Wikpedia</a></p>';*/
        }, true);
    }
}
module.exports = { DrawObject: DrawObject, setDrawViewModel: setDrawViewModel };