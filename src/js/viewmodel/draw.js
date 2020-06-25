"use strict";
const Cesium = require('cesium/Cesium');

const { Q } = require("../core/e");
const { MarkerCollection } = require('../collection/markercollection');
const { DrawCollection, PinMarkers } = require('../collection/drawcollection');

const { setDrawViewModel } = require('../draw/drawobject');
const { Circle } = require('../draw/circle');
const { AirCircle } = require('../draw/aircircle');
const { Dom } = require('../draw/dom');
const { Line } = require('../draw/line');
const { Polygon } = require('../draw/polygon');
const { Radar } = require('../draw/radar');
const { Box } = require('../draw/box');
const { Bmoa } = require('../draw/bmoa');
const { ArrowLine } = require('../draw/arrowline');
const { MilLine1 } = require('../draw/milline1');
const { ShootingLine } = require('../draw/shootingline');
const { Rectangle } = require('../draw/rectangle');
const { PointO } = require('../draw/point_o');
const { PointX } = require('../draw/point_x');
const { Image } = require('../draw/image');
const { ImageLine } = require('../draw/imageline');
const { Point } = require('../draw/point');
const { AirBox } = require('../draw/airbox');
const { Parabola } = require('../draw/parabola');
const { Quadratic } = require('../draw/quadratic');
const { Air2Earth } = require('../draw/air2earth');
const { VisibilityAnalysys } = require('../draw/visibilityAnalysys');
const { TangentPlane } = require('../draw/tangentplane');
const { LineEO } = require('../draw/line_eo');
const { MeasureDistance } = require('../draw/measuredistance');
const { Wall } = require('../draw/wall');
const { ShootingArc } = require('../draw/shootingarc');
const { PolygonWithLine } = require('../draw/polygonwithline');
const { Spline } = require('../draw/spline');
const { KMilSymbol } = require('../draw/kmilsymbol');
const { QuadraticTest } = require('../draw/quadratic_test');
const { DrawModel } = require('../draw/drawmodel');
const { Slope } = require('../draw/slope');
const { Alert } = require('../draw/alert');
const { DrawConstruction } = require('../draw/drawconstruction');
const { Corn } = require('../draw/corn');
const { Radar2 } = require('../draw/radar2');
const { Delay } = require('../mildraw/delay');

const { Arrow } = require('../mildraw/arrow');

const drawLinker = {

    circle: { name: "원", createFunc: function() { return new Circle(); } },
    line: { name: "선", createFunc: function() { return new Line(); } },
    point: { name: "점", createFunc: function() { return new Point(); } },
    alert: { name: "경고", createFunc: function() { return new Alert(); } },
    o: { name: "O", createFunc: function() { return new PointO(); } },
    x: { name: "X", createFunc: function() { return new PointX(); } },
    image: { name: "이미지", createFunc: function() { return new Image(); } },
    imageline: { name: "이미지선", createFunc: function() { return new ImageLine(); } },
    polygon: { name: "다각형", createFunc: function() { return new Polygon(); } },
    polygonwithline: { name: "다각형(선)", createFunc: function() { return new PolygonWithLine(); } },
    shootingarc: { name: "사격선(호)", createFunc: function() { return new ShootingArc(); } },
    shootingline: { name: "사격선", createFunc: function() { return new ShootingLine(); } },
    dom: { name: "탐지영역", createFunc: function() { return new Dom(); } },
    visibilityAnalysys: { name: "가시권분석", createFunc: function() { return new VisibilityAnalysys(); } },
    radar: { name: "레이더", createFunc: function() { return new Radar(); } },
    arrowline: { name: "화살표", createFunc: function() { return new ArrowLine(); } },
    milline1: { name: "군사분계선", createFunc: function() { return new MilLine1(); } },
    eoline: { name: "전투지경선", createFunc: function() { return new LineEO(); } },
    aa_circle: { name: "공역원", createFunc: function() { return new AirCircle(); } },
    box: { name: "공역박스", createFunc: function() { return new Box(); } },
    aa_rect: { name: "공역박스2", createFunc: function() { return new Rectangle(); } },
    aa_box: { name: "공역박스3", createFunc: function() { return new AirBox(); } },
    bmoa: { name: "BMOA", createFunc: function() { return new Bmoa(); } },
    parabola: { name: "포곡선(sin)", createFunc: function() { return new Parabola(); } },
    quadratic: { name: "포곡선(quadratic)", createFunc: function() { return new Quadratic(); } },
    quadraticTest: { name: "포곡선(Test)", createFunc: function() { return new QuadraticTest(); } },
    air2earth: { name: "공대지(quadratic)", createFunc: function() { return new Air2Earth(); } },
    wall: { name: "장벽", createFunc: function() { return new Wall(); } },
    spline: { name: "스플라인", createFunc: function() { return new Spline(); } },
    kmilsymbol: { name: "군대부호", createFunc: function() { return new KMilSymbol(); } },
    tangentPlane: { name: "Tangent Plane", createFunc: function() { return new TangentPlane(); } },
    quadraticTest: { name: "포곡선(Test)", createFunc: function() { return new QuadraticTest(); } },
    drawModel: { name: "3D모델", createFunc: function() { return new DrawModel(); } },
    drawConstruction: { name: "건물", createFunc: function() { return new DrawConstruction(); } },
    slope: { name: "경사", createFunc: function() { return new Slope(); } },
    measureDistance: { name: "길이측정", createFunc: function() { return new MeasureDistance(); } },
    corn: { name: "콘", createFunc: function() { return new Corn(); } },
    radar2: { name: "레이더2", createFunc: function() { return new Radar2(); } },
<<<<<<< HEAD
    delay: { name: "delay", createFunc: function() { return new Delay(); } },
=======
    arrow: { name: "G*T*K-----****X", createFunc: function() { return new Arrow(); } },
>>>>>>> 621c4ccb588babe5e019e862227c512d82e4f1d1
}

function registryHandler(key, name, createfunc) {
    if (Q.isValid(drawLinker[key])) {
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
            shapeSize: 5,
            uri: ""
        };

        if (!this.viewer.scene.pickPositionSupported) {
            window.alert('This browser does not support pickPosition.');
        }
        this.index = 1;
        this.activeShapePoints = [];
        this.floatingPoint;
        this.handler = new Cesium.ScreenSpaceEventHandler(this.viewer.canvas);
    }

    init() {
        this.viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);

        var _this = this;
        this.handler.setInputAction((event) => {
            //console.log( event.position.x + "," + event.position.y );
            // We use `viewer.scene.pickPosition` here instead of `viewer.camera.pickEllipsoid` so that
            // we get the correct point when mousing over terrain.

            let newPosition = this.baseLayerPicker ? this.viewer.scene.pickPosition(event.position) :
                this.viewer.camera.pickEllipsoid(new Cesium.Cartesian3(event.position.x, event.position.y), this.viewer.scene.globe.ellipsoid);

            if (Q.isValid(newPosition)) {
                this.appendPoint(newPosition, true);
            }

        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

        this.handler.setInputAction(function(event) {
            if (Q.isValid(_this.floatingPoint)) {

                var newPosition = _this.baseLayerPicker ? _this.viewer.scene.pickPosition(event.endPosition) :
                    _this.viewer.camera.pickEllipsoid(new Cesium.Cartesian3(event.endPosition.x, event.endPosition.y), _this.viewer.scene.globe.ellipsoid);

                if (Q.isValid(newPosition)) {
                    _this.appendPoint(newPosition, false);
                }
            }
        }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

        this.handler.setInputAction(function(event) {
            let newPosition = _this.baseLayerPicker ? _this.viewer.scene.pickPosition(event.position) :
                _this.viewer.camera.pickEllipsoid(new Cesium.Cartesian3(event.position.x, event.position.y), _this.viewer.scene.globe.ellipsoid);
            if (Q.isValid(newPosition)) {
                _this.appendPoint(newPosition, true);
            }
            _this.terminateShape();
        }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);

    }
    appendPoint(earthPosition, bappend) {
        if (Q.isValid(earthPosition)) {
            let points;
            if (bappend) {
                this.floatingPoint = this.createPoint(earthPosition);
                this.activeShapePoints.push(earthPosition);
                points = this.activeShapePoints;
            } else {
                points = this.activeShapePoints.concat(earthPosition);
            }
            this.drawShape(points, bappend);
        }
    }
    update(viewModel) {
        let currentMode = this.viewModel.mode;

        this.viewModel = setDrawViewModel(this.viewModel, viewModel);

        if (this.viewModel.mode == "view") {
            this.handler.removeInputAction(Cesium.ScreenSpaceEventType.RIGHT_CLICK);
            this.handler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);
            this.handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK);
        } else if (currentMode != this.viewModel.mode) {
            this.init();
            this.terminateShape();

            this.activeDrawHandler = this.getHandler(this.viewModel.mode);
            if (Q.isValid(this.activeDrawHandler)) {
                this.activeDrawHandler.ready();
            }
        }
    }
    getHandler(key) {
        if (Q.isValid(drawLinker[key])) {
            return drawLinker[key].createFunc();
        }
    }
    getHandlerList() {
        return Object.keys(drawLinker).map(key => {
            return { key: key, name: drawLinker[key].name };
        });
    }
    createPoint(worldPosition) {
        if (Q.isValid(this.activeDrawHandler)) {
            let pin = this.activeDrawHandler.pin(this.activeShapePoints.length);

            //{ name: 'start', type: 'text', text: 'S', color: Cesium.Color.NAVY, size: 48 }
            this.markerCollection.add(CTX.c2d(worldPosition), pin);
            return worldPosition;
        }
    }
    drawShape(positionData, bappend) {
        if (Q.isValid(this.activeDrawHandler)) {
            if (bappend && this.activeDrawHandler.isCompletePoints(positionData)) {
                this.terminateShape();
                return;
            }
            return this.activeDrawHandler.createShape(this.drawCollection, positionData, this.viewModel, bappend);
        }
    }
    drawModel(positionData) {
        this.activeDrawHandler = this.getHandler("drawModel");
        if (Q.isValid(this.activeDrawHandler)) {
            return this.activeDrawHandler.create(this.drawCollection, positionData, this.viewModel);
        }
    }

    terminateShape() {
        if (Q.isValid(this.activeDrawHandler)) { this.activeDrawHandler.complete(); }

        if (Q.isValid(this.activeDrawHandler)) {
            this.activeDrawHandler.createShape(this.drawCollection, this.activeShapePoints, this.viewModel, true);
        }

        if (Q.isValid(this.activeDrawHandler)) {
            this.activeDrawHandler.ready();
        }

        this.drawCollection.remove(this.floatingPoint);
        this.floatingPoint = undefined;
        this.activeShapePoints = [];
        this.index++;
        this.markerCollection.removeAll();
    }

}
module.exports = { Draw: Draw, registryHandler: registryHandler };