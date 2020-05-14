var Cesium = require('cesium/Cesium');

var { MarkerCollection } = require('../collection/markercollection');
var { DrawCollection, PinMarkers } = require('../collection/drawcollection');

var { setDrawViewModel } = require('../draw/drawobject');
var { Circle } = require('../draw/circle');
var { AirCircle } = require('../draw/aircircle');
var { Dom } = require('../draw/dom');
var { Line } = require('../draw/line');
var { Polygon } = require('../draw/polygon');
var { Radar } = require('../draw/radar');
var { Box } = require('../draw/box');
var { Bmoa } = require('../draw/bmoa');
var { ArrowLine } = require('../draw/arrowline');
var { MilLine1 } = require('../draw/milline1');
var { ShootingLine } = require('../draw/shootingline');
var { Rectangle } = require('../draw/rectangle');
var { PointO } = require('../draw/point_o');
var { PointX } = require('../draw/point_x');
var { Image } = require('../draw/image');
var { ImageLine } = require('../draw/imageline');
var { Point } = require('../draw/point');
var { AirBox } = require('../draw/airbox');
var { Parabola } = require('../draw/parabola');
var { Quadratic } = require('../draw/quadratic');
var { Air2Earth } = require('../draw/air2earth');
var { VisibilityAnalysys } = require('../draw/visibilityAnalysys');
var { TangentPlane } = require('../draw/tangentplane');
var { LineEO } = require('../draw/line_eo');
var { Wall } = require('../draw/wall');
<<<<<<< HEAD
var { ShootingArc } = require('../draw/shootingarc');
=======
var { PolygonWithLine } = require('../draw/polygonwithline');
var { Spline } = require('../draw/spline');
>>>>>>> 08d2a3e4db896421f2853f6dc63deb057fb48fec

var drawLinker = {

    circle: { name: "원", createFunc: function() { return new Circle(); } },
    dom: { name: "탐지영역", createFunc: function() { return new Dom(); } },
    line: { name: "선", createFunc: function() { return new Line(); } },
    polygon: { name: "다각형", createFunc: function() { return new Polygon(); } },
    radar: { name: "레이더", createFunc: function() { return new Radar(); } },
    box: { name: "공역박스", createFunc: function() { return new Box(); } },
    aa_rect: { name: "공역박스2", createFunc: function() { return new Rectangle(); } },
    aa_circle: { name: "공역원", createFunc: function() { return new AirCircle(); } },
    bmoa: { name: "BMOA", createFunc: function() { return new Bmoa(); } },
    arrowline: { name: "화살표", createFunc: function() { return new ArrowLine(); } },
    milline1: { name: "군사분계선", createFunc: function() { return new MilLine1(); } },
    shootingline: { name: "사격선", createFunc: function() { return new ShootingLine(); } },
    o: { name: "O", createFunc: function() { return new PointO(); } },
    x: { name: "X", createFunc: function() { return new PointX(); } },
    image: { name: "이미지", createFunc: function() { return new Image(); } },
    imageline: { name: "이미지선", createFunc: function() { return new ImageLine(); } },
    point: { name: "점", createFunc: function() { return new Point(); } },
    aa_box: { name: "공역박스3", createFunc: function() { return new AirBox(); } },
    parabola: { name: "포곡선(sin)", createFunc: function() { return new Parabola(); } },
    quadratic: { name: "포곡선(quadratic)", createFunc: function() { return new Quadratic(); } },
    air2earth: { name: "공대지(quadratic)", createFunc: function() { return new Air2Earth(); } },
    visibilityAnalysys: { name: "가시권분석", createFunc: function() { return new VisibilityAnalysys(); } },
    tangentPlane: { name: "Tangent Plane", createFunc: function() { return new TangentPlane(); } },
    eoline: { name: "전투지경선", createFunc: function() { return new LineEO(); } },
    wall: { name: "장벽", createFunc: function() { return new Wall(); } },
<<<<<<< HEAD
    shootingarc: { name: "사격선(호)", createFunc: function() { return new ShootingArc(); } },
=======
    polygonwithline: { name: "다각형(선)", createFunc: function() { return new PolygonWithLine(); } },
    spline: { name: "스플라인", createFunc: function() { return new Spline(); } }
>>>>>>> 08d2a3e4db896421f2853f6dc63deb057fb48fec
}

function registryHandler(key, name, createfunc) {
    if (Cesium.defined(drawLinker[key])) {
        console.error("이미 등록된 모듈 : " + key + "( " + name + " )");
        return false;
    }
    drawLinker[key] = { name: name, createFunc: createfunc };
    return true;
}
// widget 에 대한 표준을 만든다.

class Draw {
    constructor(map, baseLayerPicker) {
        this.viewer = map.getView();
        this.baseLayerPicker = baseLayerPicker;
        this.markerCollection = new MarkerCollection(map, { name: "DRAW" });
        this.drawCollection = new DrawCollection(map, { name: "DRAW" });
        this.viewModel = {
            mode: 'view',
            enableStyle: false,
            lineWidth: 1,
            lineColor: Cesium.Color.WHITE,
            lineTransparent: 1,
            lineStyle: 'line',
            size: 5,
            faceColor: Cesium.Color.WHITE,
            faceTransparent: 1,
            frameEnable: false,
            frameColor: Cesium.Color.WHITE,
            shapeStyle: 'point',
            shapeColor: Cesium.Color.WHITE,
            shapeSize: 5
        };

        if (!this.viewer.scene.pickPositionSupported) {
            window.alert('This browser does not support pickPosition.');
        }
        this.index = 1;
        this.activeShapePoints = [];
        this.activeShape;
        this.floatingPoint;
        this.handler = new Cesium.ScreenSpaceEventHandler(this.viewer.canvas);
    }

    init() {
        this.viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);

        var _this = this;
        this.handler.setInputAction(function(event) {
            //console.log( event.position.x + "," + event.position.y );
            // We use `viewer.scene.pickPosition` here instead of `viewer.camera.pickEllipsoid` so that
            // we get the correct point when mousing over terrain.
            _this.appendPoint(event);

        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

        this.handler.setInputAction(function(event) {
            if (Cesium.defined(_this.floatingPoint)) {

                var newPosition = _this.baseLayerPicker ? _this.viewer.scene.pickPosition(event.endPosition) :
                    _this.viewer.camera.pickEllipsoid(new Cesium.Cartesian3(event.endPosition.x, event.endPosition.y), _this.viewer.scene.globe.ellipsoid);

                if (Cesium.defined(newPosition)) {
                    _this.floatingPoint.position.setValue(newPosition);
                    _this.activeShapePoints.pop();
                    _this.activeShapePoints.push(newPosition);
                }
            }
        }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

        this.handler.setInputAction(function(event) {
            //_this.appendPoint(event);
            _this.terminateShape();
        }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);

    }
    appendPoint(event) {
        let _this = this;
        var earthPosition = _this.baseLayerPicker ? _this.viewer.scene.pickPosition(event.position) :
            _this.viewer.camera.pickEllipsoid(new Cesium.Cartesian3(event.position.x, event.position.y), _this.viewer.scene.globe.ellipsoid);

        if (Cesium.defined(earthPosition)) {
            if (_this.activeShapePoints.length === 0) {
                _this.floatingPoint = _this.createPoint(earthPosition);
                _this.activeShapePoints.push(earthPosition);
                var dynamicPositions = new Cesium.CallbackProperty(function() {
                    if (_this.viewModel.mode === 'polygon') {
                        return new Cesium.PolygonHierarchy(_this.activeShapePoints);
                    }
                    return _this.activeShapePoints;
                }, false);
                _this.activeShape = _this.drawShape(dynamicPositions);
            } else {
                _this.activeShapePoints.push(earthPosition);
                _this.createPoint(earthPosition);
            }
        }
    }
    update(viewModel) {
        var currentMode = this.viewModel.mode;

        this.viewModel = setDrawViewModel(this.viewModel, viewModel);

        if (this.viewModel.mode == "view") {
            this.handler.removeInputAction(Cesium.ScreenSpaceEventType.RIGHT_CLICK);
            this.handler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);
            this.handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK);
        } else if (currentMode != this.viewModel.mode) {
            this.init();
            this.terminateShape();

            this.activeDrawHandler = this.getHandler(this.viewModel.mode);
        }
    }
    getHandler(key) {
        if (Cesium.defined(drawLinker[key])) {
            return drawLinker[key].createFunc();
        }
    }
    getHandlerList() {
        return Object.keys(drawLinker).map(key => {
            return { key: key, name: drawLinker[key].name };
        });
    }
    createPoint(worldPosition) {
        if (Cesium.defined(this.activeDrawHandler)) {
            let pin = this.activeDrawHandler.pin(this.activeShapePoints.length);
            return this.markerCollection.add(CTX.c2d(worldPosition), pin);
        }
    }
    drawShape(positionData) {
        if (Cesium.defined(this.activeDrawHandler)) {
            return this.activeDrawHandler.create(this.drawCollection, positionData, this.viewModel);
        }
    }

    terminateShape() {
        //this.activeShapePoints.pop();
        this.drawShape(this.activeShapePoints);
        this.drawCollection.remove(this.floatingPoint);
        this.drawCollection.remove(this.activeShape);
        this.floatingPoint = undefined;
        this.activeShape = undefined;
        this.activeShapePoints = [];
        this.index++;
        this.markerCollection.removeAll();
    }

}
module.exports = { Draw: Draw, registryHandler: registryHandler };