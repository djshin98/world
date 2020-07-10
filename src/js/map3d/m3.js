global.Cesium = require('cesium/Cesium');
const { IxDatabase } = require('../indexeddb/db');
const { Animation } = require('../util/animation');
const { Tileset } = require('./tileset');
const { Contour } = require('./contour');
const { OliveCamera } = require('./camera');
const { OliveCursor } = require('./cursor');
const { Dashboard } = require('./dashboard');
const { dom } = require("../util/comm");

const { LayerDirector3 } = require("./layer/layerdirector");
const { CTX } = require("./ctx");
const { MapContent } = require("../app/article");
const { DrawController3 } = require("./draw/controller");
const configLayers = require("../../conf/layers.json");

require('./grid/wgs84');

require('cesium/Widgets/widgets.css');

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzYjMyZDgyMS1lMGUzLTRkNmUtYWMzNS1lNzcxMDE1NGQ1NWYiLCJpZCI6MjE4NjIsInNjb3BlcyI6WyJhc2wiLCJhc3IiLCJhc3ciLCJnYyJdLCJpYXQiOjE1ODE5OTY1NjR9.SFdCmlB5cqZjQz8hv6S5ub2ik71BrbsgXWt_8P9C0ls';

var clock = new Cesium.Clock({
    shouldAnimate: true
});

class m3 extends MapContent {
    constructor(name, options) {
        super(name, options);

        this.mode = "3D";
        this.db = new IxDatabase(1);

        var extent = Cesium.Rectangle.fromDegrees(120.896284, 31.499028, 134.597380, 43.311528);
        Cesium.Camera.DEFAULT_VIEW_RECTANGLE = extent;
        Cesium.Camera.DEFAULT_VIEW_FACTOR = 0.1;

        this.viewOption = {
            //디폴트 레이어로 World_TMS 설정

            shadows: true,
            terrainShadows: Cesium.ShadowMode.ENABLED,
            baseLayerPicker: true,
            geocoder: false,
            infoBox: false, //객체 선택 시 상세정보 표시 기능 활성화
            selectionIndicator: true,
            homeButton: false,
            navigationInstructionsInitiallyVisible: false,
            terrainExaggeration: 1.0, //고도 기복 비율 조정
            requestRenderMode: false, //throttled이 false이면 매번 화면 갱신으로 FPS 값이 표시됨 f
            maximumRenderTimeChange: Infinity,
            navigationHelpButton: false,
            timeline: false,
            fps: true,
            animation: false,
            navigation: true,
            fullscreenButton: false,
            creditsDisplay: false,
            distanceDisplayCondition: false,
            terrainProvider: Cesium.createWorldTerrain({
                requestVertexNormals: true,
                requestWaterMask: true
            }),
            //showRenderLoopErrors : false,
            //shouldAnimate : false,
            //clockViewModel: new Cesium.ClockViewModel(clock),

            /*
             terrainProvider: Cesium.createWorldTerrain(),
             shadows: false,
             scene3DOnly: true, //3차원 화면으로 구성 // ,
             //sceneMode: Cesium.SceneMode.SCENE2D, //2차원 화면으로 구성
             animation: true, //MS BingMap Service 제한하여 불필요한 URL 호출 막음
             baseLayerPicker: true,
             geocoder: true,
             vrButton: false,
             homeButton: false,
             infoBox: true, //객체 선택 시 상세정보 표시 기능 활성화
             sceneModePicker: false,
             selectionIndicator: false,
             creditsDisplay: true,
             //creditContainer: false,
             fullscreenButton: false,
             timeline: true,
             navigationHelpButton: false,
             terrainExaggeration: 1.0, //고도 기복 비율 조정
             shouldAnimate: true, //새로추가.. 눈 비 안개를위한 20181005
             requestRenderMode: false, //throttled이 false이면 매번 화면 갱신으로 FPS 값이 표시됨 f
             // true 인경우 장면 내 변경 사항에 따라 필요할 때만 프레임 렌더링이 이루어집니다.
             maximumRenderTimeChange: Infinity,
             navigationInstructionsInitiallyVisible: false,
             */
            /*
            skyBox: new Cesium.SkyBox({}),
            skyAtmosphere: new Cesium.SkyAtmosphere(),
            clockViewModel: new Cesium.ClockViewModel(clock),
            contextOptions: {
                id: "cesiumCanvas", //must
                webgl: {
                    preserveDrawingBuffer: true
                }
            }*/
        };

        this.viewer3d = new Cesium.Viewer(this.options.id, this.viewOption);
        //좌표변환 모듈부터 적용한다.
        CTX.viewer = this.viewer3d;

        this.viewer3d.scene.globe.enableLighting = true;

        let _this = this;
        var entity = this.viewer3d.entities.add({
            label: {
                show: true,
                showBackground: true,
                backgroundColor: Cesium.Color.BLACK,
                font: '25px sans-serif',
                horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
                verticalOrigin: Cesium.VerticalOrigin.TOP,
                pixelOffset: new Cesium.Cartesian2(15, 0)
            }
        });

        //test
        this.oliveCamera = new OliveCamera(this);
        this.oliveCursor = new OliveCursor(this.viewer3d);

        if (this.options.dashboard) {
            this.dashboard = new Dashboard(this, this.options.dashboard);
        }

        this.viewer3d.canvas.addEventListener('click', function(e) {
            var mousePosition = new Cesium.Cartesian2(e.clientX, e.clientY);

            var ellipsoid = _this.viewer3d.scene.globe.ellipsoid;
            var cartesian = _this.viewer3d.camera.pickEllipsoid(mousePosition, ellipsoid);
            if (cartesian) {
                var cartographic = ellipsoid.cartesianToCartographic(cartesian);
                var longitudeString = Cesium.Math.toDegrees(cartographic.longitude).toFixed(2);
                var latitudeString = Cesium.Math.toDegrees(cartographic.latitude).toFixed(2);

                //alert(longitudeString + ', ' + latitudeString);
            } else {
                //alert('Globe was not picked');
            }
            _this.pickedObject = _this.oliveCursor.getSelectedObjFromPoint(mousePosition);
        }, false);

        if (this.viewOption.navigation && this.viewOption.navigation == true) {
            let ctrl = this.viewer3d.extend(Cesium.viewerCesiumNavigationMixin, {});
        }

        this.viewer3d.scene.morphComplete.addEventListener(function() {
            console.log('Morph completed...');
            if (_this.mode == "2D" || _this.mode == "2.5D") {
                if (_this.savedCameraObj && _this.savedCameraObj.rect) {
                    _this.oliveCamera.uncache(_this.savedCameraObj.rect);
                }
            } else {
                //_this.oliveCamera.flyTo(_this.savedCameraObj.x * Cesium.Math.DEGREES_PER_RADIAN ,_this.savedCameraObj.y * Cesium.Math.DEGREES_PER_RADIAN );
            }

            console.log('Camera view rectangle updated...');
        });
        if (this.options.fullscreen == true) {

            /*
            let mymap = this;
            const promiseA = new Promise((resolutionFunc, rejectionFunc) => {
                resolutionFunc(777);
            });
            promiseA.then((val) => { mymap.fullscreen(true); });
            */
        }
        this.layerDirector = new LayerDirector3(this, configLayers);

        this.drawModel = new DrawController3(this, this.viewOption.baseLayerPicker);
        //this.init(options, () => {
        $("input[data-olive-widget=animation]").prop("checked", this.viewOption.animation);
        $("input[data-olive-widget=timeline]").prop("checked", this.viewOption.timeline);
        $("input[data-olive-widget=fullscreen]").prop("checked", this.viewOption.fullscreenButton);
        $("input[data-olive-widget=fps]").prop("checked", this.viewOption.fps);
        $("input[data-olive-widget=toolbar]").prop("checked", this.viewOption.baseLayerPicker);
        $("input[data-olive-widget=credits]").prop("checked", this.viewOption.creditsDisplay);
        $("input[data-olive-widget=navigation]").prop("checked", this.viewOption.navigation);
        $("input[data-olive-widget=distance]").prop("checked", this.viewOption.distance);
        this.showWidget('credits', false);
        this.showWidget('toolbar', false);
        this.showWidget('fps', false);
        this.showWidget('distance', false);

        if (this.viewOption.infoBox == true) {
            this.viewer3d.infoBox.frame.removeAttribute('sandbox');
            var cssLink = document.createElement("link");
            cssLink.href = Cesium.buildModuleUrl('css/infobox.css');
            cssLink.rel = "stylesheet";
            cssLink.type = "text/css";
            this.viewer3d.infoBox.frame.contentDocument.head.appendChild(cssLink);
        }
    }
    json() {
        return this.getLayerDirector().json();
    }
    setDrawMode(mode, modular) {
        this.drawModel.setDrawMode(mode, modular);
    }
    getDrawList() {
        return this.drawModel.getHandlerList();
    }
    getDrawModel(name) {
        return this.drawModel.getHandler(name);
    }
    getLayerDirector() {
        return this.layerDirector;
    }
    add(windowX, windowY, options) {
        let pos = CTX.w2d(windowX, windowY);

        let layer = this.getLayerDirector().getActiveLayer();
        if (Q.isValid(layer)) {
            layer.add(pos, options);
        }
    }
    addGraphics(options) {
        this.drawModel.setDrawMode("milgraphics", options);
    }
    resize(x, y, width, height) {
        super.resize(x, y, width, height);
        if (this.dashboard) {
            this.dashboard.resize(x, y, width, height);
        }
    }
    getView() { return this.viewer3d; }
    setMode(m) {
        this.savedCameraObj = this.oliveCamera.cache();
        if (m == 2) {
            if (this.viewer3d.scene.mode != 2) {
                this.viewer3d.scene.morphTo2D(2);
                this.mode = "2D";
            }
        } else if (m == 2.5) {
            if (this.viewer3d.scene.mode != 1) {
                this.viewer3d.scene.morphToColumbusView(2);
                this.mode = "2.5D";
            }
        } else if (m == 3) {
            if (this.viewer3d.scene.mode != 3) {
                this.viewer3d.scene.morphTo3D(2);
                this.mode = "3D";
            }
        }
    }
    _showElement(ele, bshow) { if (ele) { ele.style.display = dom.trueOrundef(bshow) ? "" : "none"; } }
    showWidget(widget, bshow) {
        let _bshow = dom.trueOrundef(bshow) ? true : false;
        if (!widget || widget.length == 0) {
            this._showElement(this.viewer3d.container, _bshow);
        } else if (widget == "animation") {
            this._showElement(dom.e("#" + this.options.id + " .cesium-viewer-animationContainer"), _bshow);
        } else if (widget == "timeline") {
            this._showElement(dom.e("#" + this.options.id + " .cesium-viewer-timelineContainer"), _bshow);
        } else if (widget == "fullscreen") {
            this._showElement(dom.e("#" + this.options.id + " .cesium-viewer-fullscreenContainer"), _bshow);
        } else if (widget == "credits") {
            this._showElement(dom.e("#" + this.options.id + " .cesium-widget-credits"), _bshow);
        } else if (widget == "navigation") {
            this._showElement(dom.e("#" + this.options.id + " #navigationDiv"), _bshow);
        } else if (widget == "fps") {
            this._showElement(dom.e("#" + this.options.id + " .cesium-performanceDisplay-defaultContainer"), _bshow);
        } else if (widget == "distance") {
            this._showElement(dom.e("#" + this.options.id + " .distance-legend"), _bshow);
        } else if (widget == "toolbar") {
            this._showElement(dom.e("#" + this.options.id + " .cesium-viewer-toolbar"), _bshow);
        }
    }
    hideWidget(widget) { this.show(widget, false); }

    dataSource(options, bshow) {
        let kmz = this.viewer3d.dataSources.getByName(options.name);
        if (bshow) {
            if (kmz.length == 0) {
                var dataSourceKmz = Cesium.KmlDataSource.load(options.url, {
                    camera: this.viewer3d.scene.camera,
                    canvas: this.viewer3d.scene.canvas
                });
                this.viewer3d.dataSources.add(dataSourceKmz);
                this.viewer3d.scene.requestRender();
            }
        } else {
            if (kmz.length > 0) {
                this.viewer3d.dataSources.remove(kmz[0]);
                this.viewer3d.scene.requestRender();
            }
        }
    }

    connectViewModel(id, viewModel, updateCallback) {

        var _this = this;

        this.db.get("viewmodel", id, function(result) {
            if (result && result.value) {
                viewModel = Object.assign(viewModel, result.value);
            }
            Cesium.knockout.track(viewModel);
            Cesium.knockout.applyBindings(viewModel, document.getElementById(id));
            var _viewModel = viewModel;

            for (var name in viewModel) {
                if (viewModel.hasOwnProperty(name)) {
                    Cesium.knockout.getObservable(viewModel, name).subscribe(function(newValue) {
                        updateCallback(_this.viewer3d, _viewModel, newValue);
                        _this.db.set("viewmodel", id, _viewModel);
                    });
                }
            }
            updateCallback(_this.viewer3d, viewModel);
        });
    }
    widget(name, bshow) {

    }
    fullscreen(bfull) {
        if (bfull == true) {
            Cesium.Fullscreen.requestFullscreen(document.getElementById(this.options.id));
        } else {
            Cesium.Fullscreen.exitFullscreen();
        }
    }
    wireframe(bshow) {
        this.viewer3d.scene.globe._surface.tileProvider._debug.wireframe = bshow;
    }
    shadows(bshow) {
        this.viewer3d.shadows = bshow;
    }
    terrianShadows(bshow) {
        this.viewer3d.terrainShadows = (bshow === true) ? Cesium.ShadowMode.ENABLED : Cesium.ShadowMode.DISABLE;
    }
    contour(viewModel) {
        if (!this.contourWidget) {
            this.contourWidget = new Contour(this.viewer3d);
        }
        this.contourWidget.update(viewModel);
    }

    FromDegrees(degrees, callback) {
        var positions = degrees.map(d => {
            return CTX.degree(d.longitude, d.latitude);
        });
        var promise = Cesium.sampleTerrainMostDetailed(this.viewer3d.terrainProvider, positions);
        Cesium.when(promise, function(updatedPositions) {
            // ★ Correct value is about 25.3 meters.
            // ★ However, console shows 68.71596342427405.
            //console.log(positions[0].height);
            callback(positions);
        });
    }
    testGrid(bshow) {
        var scene = this.viewer3d.scene;
        if (Q.isValid(this.pri)) {
            scene.primitives.remove(this.pri);
        }

        if (bshow) {
            var instances = [];

            for (var lon = -180.0; lon < 180.0; lon += 5.0) {
                for (var lat = -85.0; lat < 85.0; lat += 5.0) {
                    instances.push(new Cesium.GeometryInstance({
                        geometry: new Cesium.RectangleGeometry({
                            rectangle: Cesium.Rectangle.fromDegrees(lon, lat, lon + 5.0, lat + 5.0),
                            vertexFormat: Cesium.PerInstanceColorAppearance.VERTEX_FORMAT
                        }),
                        attributes: {
                            color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.fromRandom({ alpha: 0.5 }))
                        }
                    }));
                }
            }
            this.pri = new Cesium.Primitive({
                geometryInstances: instances,
                appearance: new Cesium.PerInstanceColorAppearance()
            });
            scene.primitives.add(this.pri);
        }
    }
    testGrid2(bshow) {
        var scene = this.viewer3d.scene;
        if (Q.isValid(this.pri)) {
            scene.primitives.remove(this.pri);
        }

        if (bshow) {
            var instance = new Cesium.GeometryInstance({
                geometry: new Cesium.RectangleGeometry({
                    rectangle: Cesium.Rectangle.fromDegrees(110.0, 10.0, 140.0, 60.0),
                    vertexFormat: Cesium.EllipsoidSurfaceAppearance.VERTEX_FORMAT,
                    //height: 10000.0,
                    //extrudedHeight: 300000
                })
            });

            this.pri = new Cesium.Primitive({
                geometryInstances: instance,
                appearance: new Cesium.EllipsoidSurfaceAppearance({
                    material: Cesium.Material.fromType('Grid')
                })
            })
            scene.primitives.add(this.pri);
        }
    }
    gridGARS(bshow, options) {
        //this.testGrid2(bshow);
        this._gridGARS(bshow, options);
    }
    _gridGARS(bshow, options) {
        if (bshow) {
            if (!this.__gars) {
                this.__gars = {};
                if (options.tile && options.tile == true) {
                    this.__gars.tile = this.viewer3d.scene.imageryLayers.addImageryProvider(
                        new Cesium.TileCoordinatesImageryProvider());
                    this.__gars.tile.olive_name = "GARS_TILE";
                }

                let bound = new Cesium.Rectangle(112 / Cesium.Math.DEGREES_PER_RADIAN, 30 / Cesium.Math.DEGREES_PER_RADIAN,
                    148 / Cesium.Math.DEGREES_PER_RADIAN, 48 / Cesium.Math.DEGREES_PER_RADIAN);
                options.tilingScheme = new Cesium.GeographicTilingScheme({
                    rectangle: bound,
                    numberOfLevelZeroTilesX: 18,
                    numberOfLevelZeroTilesY: 9
                });

                options.tileWidth = 256;
                options.tileHeight = 256;
                options.cells = 0;
                let grid = new Cesium.GridImageryProvider(options);

                this.__gars.layer = this.viewer3d.scene.imageryLayers.addImageryProvider(grid);

                grid.readyPromise.then(function(result) {
                    if (result) {

                    }
                    console.log("readyPromise GridImageryProvider");
                    console.log("minimumLevel " + grid.minimumLevel);
                    console.log("maximumLevel " + grid.maximumLevel);

                });

                this.__gars.layer.olive_name = "GARS";

            }
        } else {
            if (this.__gars && this.__gars.layer) {
                this.viewer3d.scene.imageryLayers.remove(this.__gars.layer, true);
                this.__gars.layer = undefined;
            }
            if (this.__gars && this.__gars.tile) {
                this.viewer3d.scene.imageryLayers.remove(this.__gars.tile, true);
                this.__gars.tile = undefined;
            }
            this.__gars = undefined;
        }
    }
    tileset() {
        let ts = new Tileset(this.viewer3d);
        ts.create();
    }
}

module.exports = {
    m3: m3
};