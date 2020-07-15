var { Q } = require("../../core/e");
var { PinMarkers } = require('../../collection/drawcollection');
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
    _viewModel.mode = Q.isValid(viewModel.mode) ? viewModel.mode : _viewModel.mode;
    _viewModel.enableStyle = Q.isValid(viewModel.enableStyle) ? viewModel.enableStyle : _viewModel.enableStyle;
    _viewModel.lineStyle = Q.isValid(viewModel.lineStyle) ? viewModel.lineStyle : _viewModel.lineStyle;
    _viewModel.frameEnable = Q.isValid(viewModel.frameEnable) ? viewModel.frameEnable : _viewModel.frameEnable;
    _viewModel.shapeStyle = Q.isValid(viewModel.shapeStyle) ? viewModel.shapeStyle : _viewModel.shapeStyle;

    _viewModel.size = Q.isValid(viewModel.size) ? parseInt(viewModel.size) : _viewModel.size;
    _viewModel.shapeSize = Q.isValid(viewModel.shapeSize) ? parseInt(viewModel.shapeSize) : _viewModel.shapeSize;
    _viewModel.lineWidth = Q.isValid(viewModel.lineWidth) ? parseInt(viewModel.lineWidth) : _viewModel.lineWidth;
    _viewModel.image = viewModel.image;

    if (Q.isValid(viewModel.lineColor)) {
        if (typeof(viewModel.lineColor) == "string") {
            _viewModel.lineColor = Cesium.Color.fromCssColorString(viewModel.lineColor);
        } else {
            _viewModel.lineColor = viewModel.lineColor;
        }
    }
    if (Q.isValid(viewModel.faceColor)) {
        if (typeof(viewModel.faceColor) == "string") {
            _viewModel.faceColor = Cesium.Color.fromCssColorString(viewModel.faceColor);
        } else {
            _viewModel.faceColor = viewModel.faceColor;
        }
    }
    if (Q.isValid(viewModel.frameColor)) {
        if (typeof(viewModel.frameColor) == "string") {
            _viewModel.frameColor = Cesium.Color.fromCssColorString(viewModel.frameColor);
        } else {
            _viewModel.frameColor = viewModel.frameColor;
        }
    }
    if (Q.isValid(viewModel.shapeColor)) {
        if (typeof(viewModel.shapeColor) == "string") {
            _viewModel.shapeColor = Cesium.Color.fromCssColorString(viewModel.shapeColor);
        } else {
            _viewModel.shapeColor = viewModel.shapeColor;
        }
    }
    if (Q.isValid(viewModel.faceTransparent)) {
        if (typeof(viewModel.faceTransparent) == "string") {
            _viewModel.faceTransparent = parseFloat(viewModel.faceTransparent) / 100;
        } else {
            _viewModel.faceTransparent = viewModel.faceTransparent;
        }
    }
    if (Q.isValid(viewModel.lineTransparent)) {
        if (typeof(viewModel.lineTransparent) == "string") {
            _viewModel.lineTransparent = parseFloat(viewModel.lineTransparent) / 100;
        } else {
            _viewModel.lineTransparent = viewModel.lineTransparent;
        }
    }

    if (Q.isValid(viewModel.size)) {
        if (typeof(viewModel.size) == "string") {
            _viewModel.size = parseInt(viewModel.size);
        } else {
            _viewModel.size = viewModel.size;
        }
    }
    if (Q.isValid(viewModel.shapeSize)) {
        if (typeof(viewModel.shapeSize) == "string") {
            _viewModel.shapeSize = parseInt(viewModel.shapeSize);
        } else {
            _viewModel.shapeSize = viewModel.shapeSize;
        }
    }
    if (Q.isValid(_viewModel.lineTransparent)) {
        _viewModel.lineColor = _viewModel.lineColor.withAlpha(_viewModel.lineTransparent);
    }
    if (Q.isValid(_viewModel.faceTransparent)) {
        _viewModel.faceColor = _viewModel.faceColor.withAlpha(_viewModel.faceTransparent);
    }


    return _viewModel;
}
const Template = {
    faceColor: new Cesium.Color(192, 192, 192, 0.5),
    lineColor: new Cesium.Color(90, 90, 90, 0.5)
};
class DrawObject {
    constructor(minPointCount, maxPointCount) {
        this.index = drawIndex++;
        this.minPointCount = minPointCount;
        if (!Q.isValid(this.minPointCount)) {
            console.error(this.constructor.name + "'s minPointCount is invalid in constructor : " + this.minPointCount);
            return;
        }
        this.maxPointCount = maxPointCount;
        if (Q.isValid(this.maxPointCount) && this.minPointCount > this.maxPointCount) {
            console.error(this.constructor.name + "'s minPointCount is bigger than maxPointCount : " + this.minPointCount + "," + this.maxPointCount);
            return;
        }
        this.completed = false;
        this.templateEntity = null;
    }
    template(name) {
            return Template[name];
        }
        /*  minPointCount는 도형이 그려지기 위한 최소한의 포인트 갯수이다. 
         */
    isValidPoints(points) {
            return (Q.isValid(points) && points.length >= this.minPointCount);
        }
        /*  포인트의 수가 도형을 그리는 충분한 갯수를 만족할 때 return true
            도형을 그리기에 더 이상 포인트를 불필요하다는 것을 알릴때 return true
            maxPointCount가 undefined 이면, 무한의 포인트를 입력받기 때문에 isCompletePoints는 항상 false

        */
    ready() { this.completed = false; }
    complete() { this.completed = true; }
    isComplete() { return this.completed; }
    isCompletePoints(points) {
        if (this.isValidPoints(points)) {
            if (Q.isValid(this.maxPointCount) && points.length == this.maxPointCount) {
                return true;
            } else if (this.completed) {
                return true;
            }
        }
        return false;
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
    create(layer, points, viewModel, templateEntity) {

    }

    draw(layer, points) {};

    removeTemplateEntity(layer) {
        if (Q.isValid(this.templateEntity)) {
            layer.remove(this.templateEntity);
            /*
            this.templateEntity.forEach(ent => {
                layer.remove(ent);
            });*/
            this.templateEntity = null;
        }
    }
    createShape(layer, points, viewModel, bclicked) {
        points = Object.assign([], points);
        if (bclicked && this.isCompletePoints(points)) {
            //console.log("complete");
            this.complete();
            this.removeTemplateEntity(layer);
            return this.create(layer, points, viewModel);
        } else if (this.isValidPoints(points)) {
            if (!Q.isValid(this.templateEntity)) {
                this.templateEntity = true;
                this.templateEntity = this.create(layer, points, viewModel);
                return this.templateEntity;
            } else {
                return this.create(layer, points, viewModel);
            }
        }
    }
    sketch(layer, points) {
        this.removeTemplateEntity(layer);

        let options = points.map(p => { //4
            return {
                position: p,
                point: {
                    pixelSize: 2,
                    material: Template.faceColor,
                    outline: true,
                    outlineColor: Template.lineColor,
                    outlineWidth: 1,
                    heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
                }
            }
        });
        this.templateEntity = layer.add(options);
    }
    isReadyToCallbackVariable() {
        if (Q.isValid(this.templateEntity)) {
            if (this.templateEntity !== true) {
                return true;
            }
        }
        return false;
    }
    callbackValue(v) {
        if (Q.isValid(this.templateEntity)) {
            if (this.templateEntity === true) {
                return new Cesium.CallbackProperty(function() {
                    return v;
                }, true);
            }
        }
        return v;
    }
    callbackFunction(v) {
        if (Q.isValid(this.templateEntity)) {
            if (this.templateEntity === true) {
                return new Cesium.CallbackProperty(function() {
                    return v();
                }, true);
            }
        }
        return v();
    }
    callbackColor(name, v) {
        if (Q.isValid(this.templateEntity)) {
            if (this.templateEntity === true) {
                return this.template(name);
            }
        }
        return v[name];
    }
    lineMaterial(style, color, width) {
        if (style != "line") {
            //return Cesium.Material.fromType('Dot');

            return new Cesium.PolylineDashMaterialProperty({
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

            let imgstr = Q.isValid(img) ? '<img width="60px" style="margin: 0.1em;" src="' + img.toDataURL() + '"/>' : '';
            return descriptionCss + '<table><tbody><tr><td rowspan="3">' + imgstr + '</td>\
            <th><span>부대명</span></th><td><span>' + ((options.name) ? options.name : '알수없음') + ' </span></td>\
            <th><span>부호</span></th><td><span>' + options.SIDC + ' </span></td></tr>\
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