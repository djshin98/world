var { IxDatabase } = require('../repository/db');
var { Animation } = require('../util/animation');
var { Tileset } = require('./tileset');
var { Contour } = require('./contour');
var { OliveCamera } = require('./camera');
var { OliveCursor } = require('./cursor');
var { dom } = require("../util/comm");

global.Cesium = require('cesium/Cesium');
var { CTX } = require("./ctx");
var { KMilSymbolCollection } = require("../collection/kmilsymbolcollection");
var { MarkerCollection } = require("../collection/markercollection");
var { DrawCollection } = require("../collection/drawcollection");

var { WebSocketBroker } = require("../ws/websocket_broker");
const config = require("../../conf/server.json");

require('./grid/wgs84');

require('cesium/Widgets/widgets.css');

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzYjMyZDgyMS1lMGUzLTRkNmUtYWMzNS1lNzcxMDE1NGQ1NWYiLCJpZCI6MjE4NjIsInNjb3BlcyI6WyJhc2wiLCJhc3IiLCJhc3ciLCJnYyJdLCJpYXQiOjE1ODE5OTY1NjR9.SFdCmlB5cqZjQz8hv6S5ub2ik71BrbsgXWt_8P9C0ls';


var clock = new Cesium.Clock({
    shouldAnimate: true
});

class MilMap {
    constructor(options) {
        this.collectionTypes = {};
        this.collectionTypes["KMilSymbol"] = KMilSymbolCollection;
        this.collectionTypes["Marker"] = MarkerCollection;
        this.collectionTypes["Draw"] = DrawCollection;
        this.collections = {};

        this.mode = "3D";
        this.db = new IxDatabase(1);
        this.options = Object.assign({}, options);

        var extent = Cesium.Rectangle.fromDegrees(120.896284, 31.499028, 134.597380, 43.311528);
        Cesium.Camera.DEFAULT_VIEW_RECTANGLE = extent;
        Cesium.Camera.DEFAULT_VIEW_FACTOR = 0.1;

        this.viewOption = {
            //디폴트 레이어로 World_TMS 설정

            shadows: true,
            baseLayerPicker: true,
            geocoder: false,
            infoBox: true, //객체 선택 시 상세정보 표시 기능 활성화
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

            //showRenderLoopErrors : false,
            //shouldAnimate : false,
            //clockViewModel: new Cesium.ClockViewModel(clock),

            /*
            imageryProvider: new Cesium.OpenStreetMapImageryProvider({
                url: 'https://a.tile.openstreetmap.org/'
            }),
            */


            /*
                       imageryProvider: new Cesium.OpenStreetMapImageryProvider({
                           url: 'https://a.tile.openstreetmap.org/'
                       }),
                      
                        imageryProvider: Cesium.createWorldImagery({
                            style: Cesium.IonWorldImageryStyle.AERIAL_WITH_LABELS
                        }),
                       
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
                        navigationInstructionsInitiallyVisible: false, */
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

        if (this.options.map3.mapServiceMode == "internet") {
            this.viewOption.terrainProvider = Cesium.createWorldTerrain();
        } else if (this.options.map3.mapServiceMode == "offline") {
            if (this.options.map3.offlineOption.map) {
                this.viewOption.imageryProvider = new Cesium.TileMapServiceImageryProvider({
                    url: Cesium.buildModuleUrl(this.options.map3.offlineOption.map)
                });
            }
            if (this.options.map3.offlineOption.terrain) {
                this.viewOption.terrainProvider = new Cesium.CesiumTerrainProvider({
                    url: this.options.map3.offlineOption.terrain,
                    proxy: new Cesium.DefaultProxy(this.options.map3.offlineOption.proxy),
                    requestWaterMask: false,
                    requestVertexNormals: false
                });
            }
        }
        this.viewer3d = new Cesium.Viewer(this.options.map3.id, this.viewOption);
        //좌표변환 모듈부터 적용한다.
        CTX.viewer = this.viewer3d;

        if (this.options.map3.mapServiceMode == "offline" && this.options.map3.offlineBaseLayers && this.options.map3.offlineBaseLayers.length > 0) {
            var imageryLayers = this.viewer3d.imageryLayers;
            this.options.map3.offlineBaseLayers.forEach(d => {
                imageryLayers.addImageryProvider(new Cesium.TileMapServiceImageryProvider({
                    url: d.url
                }));
            });
        }

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
        }, false);

        if (this.viewOption.navigation && this.viewOption.navigation == true) {
            let ctrl = this.viewer3d.extend(Cesium.viewerCesiumNavigationMixin, {});
            console.log("ctrl");
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

        if (Cesium.defined(this.options.websocket)) {
            this.websocket = new WebSocketBroker({
                host: config.WebSocket.host,
                port: config.WebSocket.port,
                uri: '',
                reconnectable: (Cesium.defined(this.options.websocket.reconnectable) && this.options.websocket.reconnectable == true) ? true : false,
                onreconnected: function(websockerbroker) {
                    _this.websocket = websockerbroker;
                },
                onclose: function() {

                },
                onmessage: function(data) {}
            });
        }
    }
    getId() {
        return this.options.map3.id;
    }
    getView() { return this.viewer3d; }
    setMode(m) {
        this.savedCameraObj = this.oliveCamera.cache();
        if (m == 2) {
            if (map.viewer3d.scene.mode != 2) {
                this.viewer3d.scene.morphTo2D(2);
                this.mode = "2D";
            }
        } else if (m == 2.5) {
            if (map.viewer3d.scene.mode != 1) {
                this.viewer3d.scene.morphToColumbusView(2);
                this.mode = "2.5D";
            }
        } else if (m == 3) {
            if (map.viewer3d.scene.mode != 3) {
                this.viewer3d.scene.morphTo3D(2);
                this.mode = "3D";
            }
        }
    }
    _showElement(ele, bshow) { if (ele) { ele.style.display = dom.trueOrundef(bshow) ? "" : "none"; } }
    show(widget, bshow) {
        let _bshow = dom.trueOrundef(bshow) ? true : false;
        if (!widget || widget.length == 0) {
            this._showElement(this.viewer3d.container, _bshow);
        } else if (widget == "animation") {
            this._showElement(dom.e("#" + this.options.map3.id + " .cesium-viewer-animationContainer"), _bshow);
        } else if (widget == "timeline") {
            this._showElement(dom.e("#" + this.options.map3.id + " .cesium-viewer-timelineContainer"), _bshow);
        } else if (widget == "fullscreen") {
            this._showElement(dom.e("#" + this.options.map3.id + " .cesium-viewer-fullscreenContainer"), _bshow);
        } else if (widget == "credits") {
            this._showElement(dom.e("#" + this.options.map3.id + " .cesium-widget-credits"), _bshow);
        } else if (widget == "navigation") {
            this._showElement(dom.e("#" + this.options.map3.id + " #navigationDiv"), _bshow);
        } else if (widget == "fps") {
            this._showElement(dom.e("#" + this.options.map3.id + " .cesium-performanceDisplay-defaultContainer"), _bshow);
        } else if (widget == "distance") {
            this._showElement(dom.e("#" + this.options.map3.id + " .distance-legend"), _bshow);
        } else if (widget == "toolbar") {
            this._showElement(dom.e("#" + this.options.map3.id + " .cesium-viewer-toolbar"), _bshow);
        }
    }
    hide(widget) { this.show(widget, false); }

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
    createCollection(name, type) {
        if (Cesium.defined(name) && Cesium.defined(type) && Cesium.defined(this.collectionTypes[type])) {
            if (!Cesium.defined(this.collections[name])) {
                this.collections[name] = new this.collectionTypes[type](this, { name: name });
            }
            return this.collections[name];
        }
    }
    destroyCollection(name) {
        if (Cesium.defined(name) && Cesium.defined(this.collections[name])) {
            this.collections[name].destroy();
            delete(this.collections[name]);
        }
    }
    collection(name) { return this.collections[name]; }

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
    wireframe(bshow) {
        this.viewer3d.scene.globe._surface.tileProvider._debug.wireframe = bshow;
    }
    contour(viewModel) {
        if (!this.contourWidget) {
            this.contourWidget = new Contour(this.viewer3d);
        }
        this.contourWidget.update(viewModel);
    }
    terrianFromDegrees(degrees, callback) {
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
    gridGARS(bshow, options) {

            if (bshow) {
                if (!this.__gars) {
                    this.__gars = {};
                    if (options.tile && options.tile == true) {
                        this.__gars.tile = this.viewer3d.scene.imageryLayers.addImageryProvider(
                            new Cesium.TileCoordinatesImageryProvider());
                        this.__gars.tile.olive_name = "GARS_TILE";
                    }
                    /*
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
                    */
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
        /* animation(bool) {
            bool ? map.viewer3d.dataSources.add(Cesium.CzmlDataSource.load('../models/simple.czml')) : map.viewer3d.dataSources.removeAll();

        } */
    tileset() {
        let ts = new Tileset(this.viewer3d);
        ts.create();
    }

    add3DModel(x, y, z, model, name) {
        var minDistance = 10; //확대시 보여지는 최소 거리(m) 정의
        var maxDistance = 50000; //축소시 보여지는 최대 거리(m) 정의
        var CZMLName = [];
        var result = [];
        result = CTX.cartesian(x, y, z);
        CZMLName.push({
            "id": "document",
            "name": "3D Models",
            "version": "1.0",
        });

        CZMLName.push({
            "id": name,
            "name": name,
            "availability": "2020-03-14T12:00:00Z/2020-03-15T16:00:00.9962195740191Z",
            "position": {
                "interpolationAlgorithm": "LAGRANGE",
                "interpolationDegree": 1,
                "epoch": "2020-03-14T12:00:00Z",
                "cartesian": result
            },
            "path": {
                "material": {
                    "polylineOutline": {
                        "color": {
                            "rgba": [255, 0, 255, 255]
                        },
                        "outlineColor": {
                            "rgba": [0, 255, 255, 255]
                        },
                        "outlineWidth": 5
                    }
                },
                "width": 8,
                "resolution": 5
            },
            "model": {
                "gltf": model,
                "distanceDisplayCondition": {
                    "distanceDisplayCondition": [minDistance, maxDistance]
                },
                "color": {
                    "rgba": [0, 221, 221, 221]
                },
                "minimumPixelSize": 64,
            },
            "orientation": {
                "velocityReference": "#position"
            },
            "viewFrom": {
                "cartesian": [-2080, -1715, 779]
            },

            "label": {
                "show": true,
                "text": name,
                "font": "10pt Arial",
                "outlineWidth": 1,
                "horizontalOrigin": "LEFT",
                "pixelOffset": {
                    "cartesian2": [-30, -30]
                },
                "fillColor": {
                    "rgba": [255, 255, 0, 200]
                },
                "distanceDisplayCondition": {
                    "distanceDisplayCondition": [minDistance, maxDistance]
                },
                "disableDepthTestDistance": Number.POSITIVE_INFINITY
            }
        });

        this.viewer3d.dataSources.add(Cesium.CzmlDataSource.load(CZMLName)).then(function(ds) {
            map.viewer3d.trackedEntity = ds.entities.getById(name);
        });
    }



    addModel() {
        this.add3DModel(127.0215633, 37.4890219, 0, "../models/Cesium_Air.glb", "Jet1");
    }
    addHeadingPitchRoll() {
        var options = {}
        global.objtest = new Animation(options);
    }
    czmlFileLoad() {
        var _this = this;
        var czmlPath = "../models/fuel/";
        var dataSource = new Cesium.CzmlDataSource();
        var vehicleEntity;
        this.viewer3d.dataSources.add(dataSource);

        var partsToLoad = [{
            url: 'a1.czml',
            range: [0, 1500],
            requested: false,
            loaded: false
        }, {
            url: 'a2.czml',
            range: [1500, 3000],
            requested: false,
            loaded: false
        }, {
            url: 'a3.czml',
            range: [3000, 4500],
            requested: false,
            loaded: false
        }];

        function processPart(part) {
            part.requested = true;
            dataSource.process(czmlPath + part.url).then(function() {
                part.loaded = true;
                // Follow the vehicle with the camera.
                if (!_this.viewer3d.trackedEntity) {
                    _this.viewer3d.trackedEntity = vehicleEntity = dataSource.entities.getById('Vehicle');
                }
            });
        }

        processPart(partsToLoad[0]);
    }
    remove3DModel() {
        this.viewer3d.dataSources.removeAll();
    }


    addHeadingPitchRoll2() {

        var timestamp = 0;
        var scene = this.viewer3d.scene;

        var pathPosition = new Cesium.SampledPositionProperty();
        var entityPath = this.viewer3d.entities.add({
            position: pathPosition,
            name: 'path',
            path: {
                show: true,
                leadTime: 0,
                trailTime: 60,
                width: 10,
                resolution: 1,
                material: new Cesium.PolylineGlowMaterialProperty({
                    glowPower: 0.3,
                    taperPower: 0.3,
                    color: Cesium.Color.PALEGOLDENROD
                })
            }
        });

        var camera = this.viewer3d.camera;
        var controller = scene.screenSpaceCameraController;
        var r = 0;
        var center = new Cesium.Cartesian3();

        var hpRoll = new Cesium.HeadingPitchRoll();
        hpRoll.pitch = 1.5708;
        var hpRange = new Cesium.HeadingPitchRange();
        var speed = 1;
        var deltaRadians = Cesium.Math.toRadians(0.05);

        var position = Cesium.Cartesian3.fromDegrees(127.0215633, 37.4890219, 1000.0);
        var cameraPosition = new Cesium.Cartesian3(-3355072.3251947914, 4309027.65150185, 3834824.8952014796);
        var speedVector = new Cesium.Cartesian3();
        var fixedFrameTransform = Cesium.Transforms.localFrameToFixedFrameGenerator('north', 'west');

        var planePrimitive = map.viewer3d.scene.primitives.add(Cesium.Model.fromGltf({
            url: 'https://assets.agi.com/models/launchvehicle.glb',
            modelMatrix: Cesium.Transforms.headingPitchRollToFixedFrame(position, hpRoll, Cesium.Ellipsoid.WGS84, fixedFrameTransform),
            minimumPixelSize: 128
        }));

        planePrimitive.readyPromise.then(function(model) {
            // Play and loop all animations at half-speed
            model.activeAnimations.addAll({
                multiplier: 0.5,
                loop: Cesium.ModelAnimationLoop.REPEAT
            });

            // Zoom to model
            r = 2.0 * Math.max(model.boundingSphere.radius, camera.frustum.near);
            controller.minimumZoomDistance = r * 0.5;
            Cesium.Matrix4.multiplyByPoint(model.modelMatrix, model.boundingSphere.center, center);
            var heading = Cesium.Math.toRadians(230.0);
            var pitch = Cesium.Math.toRadians(-20.0);
            hpRange.heading = 6.118334442501016;
            hpRange.pitch = -0.9805559970133615;
            hpRange.range = 0.00016222259613485335;
            camera.flyTo({
                destination: cameraPosition,
                orientation: hpRange
            });
        });

        /*  document.addEventListener('keydown', function(e) {
            switch (e.keyCode) {
                case 40:
                    if (e.shiftKey) {
                        // speed down
                        speed = Math.max(--speed, 1);
                    } else {
                        // pitch down
                        hpRoll.pitch -= deltaRadians;
                        if (hpRoll.pitch < -Cesium.Math.TWO_PI) {
                            hpRoll.pitch += Cesium.Math.TWO_PI;
                        }
                    }
                    break;
                case 38:
                    if (e.shiftKey) {
                        // speed up
                        speed = Math.min(++speed, 100);
                    } else {
                        // pitch up
                        hpRoll.pitch += deltaRadians;
                        if (hpRoll.pitch > Cesium.Math.TWO_PI) {
                            hpRoll.pitch -= Cesium.Math.TWO_PI;
                        }
                    }
                    break;
                case 39:
                    if (e.shiftKey) {
                        // roll right
                        hpRoll.roll += deltaRadians;
                        if (hpRoll.roll > Cesium.Math.TWO_PI) {
                            hpRoll.roll -= Cesium.Math.TWO_PI;
                        }
                    } else {
                        // turn right
                        hpRoll.heading += deltaRadians;
                        if (hpRoll.heading > Cesium.Math.TWO_PI) {
                            hpRoll.heading -= Cesium.Math.TWO_PI;
                        }
                    }
                    break;
                case 37:
                    if (e.shiftKey) {
                        // roll left until
                        hpRoll.roll -= deltaRadians;
                        if (hpRoll.roll < 0.0) {
                            hpRoll.roll += Cesium.Math.TWO_PI;
                        }
                    } else {
                        // turn left
                        hpRoll.heading -= deltaRadians;
                        if (hpRoll.heading < 0.0) {
                            hpRoll.heading += Cesium.Math.TWO_PI;
                        }
                    }
                    break;
                default:
            }
        });
 */
        setInterval(() => {
            timestamp += 10;
            hpRoll.pitch += deltaRadians;
            // hpRoll.roll -= deltaRadians;
            if (timestamp > 38000) {
                speed = 0;

            } else {
                speed = Math.min(speed += 3, 500);
                if (hpRoll.pitch > Cesium.Math.TWO_PI) {
                    hpRoll.pitch -= Cesium.Math.TWO_PI;
                }
                ///////////////////방향 계속돌아감... 수정필요
                if (hpRoll.pitch >= 1.5708 && deltaRadians > 0) deltaRadians = -deltaRadians;
            }
        }, 10);

        // pitch up
        hpRoll.pitch += deltaRadians;
        if (hpRoll.pitch > Cesium.Math.TWO_PI) {
            hpRoll.pitch -= Cesium.Math.TWO_PI;
        }

        hpRoll.pitch -= deltaRadians;
        if (hpRoll.pitch < -Cesium.Math.TWO_PI) {
            hpRoll.pitch += Cesium.Math.TWO_PI;
        }

        scene.preUpdate.addEventListener(function(scene, time) {
            speedVector = Cesium.Cartesian3.multiplyByScalar(Cesium.Cartesian3.UNIT_X, speed / 10, speedVector);
            position = Cesium.Matrix4.multiplyByPoint(planePrimitive.modelMatrix, speedVector, position);
            pathPosition.addSample(Cesium.JulianDate.now(), position);
            Cesium.Transforms.headingPitchRollToFixedFrame(position, hpRoll, Cesium.Ellipsoid.WGS84, fixedFrameTransform, planePrimitive.modelMatrix);
            if (fromBehind.checked) {
                // Zoom to model
                Cesium.Matrix4.multiplyByPoint(planePrimitive.modelMatrix, planePrimitive.boundingSphere.center, center);
                hpRange.heading = hpRoll.heading;
                hpRange.pitch = hpRoll.pitch;
                camera.lookAt(center, hpRange);
            }
        });

        /*   this.viewer3d.scene.preRender.addEventListener(function(scene, time) {
              headingSpan.innerHTML = Cesium.Math.toDegrees(hpRoll.heading).toFixed(1);
              pitchSpan.innerHTML = Cesium.Math.toDegrees(hpRoll.pitch).toFixed(1);
              rollSpan.innerHTML = Cesium.Math.toDegrees(hpRoll.roll).toFixed(1);
              speedSpan.innerHTML = speed.toFixed(1);
          }); */
    }

    appendCollection(_this, collections) {
        collections.forEach(function(d) {
            switch (d) {
                case "MARKER":
                    _this.collections[d] = new MarkerCollection(_this.map, { name: d });
                    break;
                default:
                    _this.collections[d] = new KMilSymbolCollection(_this.map, { name: d });
                    break;
            }
        });
    }
}

/*
function keyInput() {
    const zoomAmount = 15,
        rotateAmount = 5;
    const ARROW_UP = 38;
    const ARROW_LEFT = 37;
    const ARROW_DOWN = 40;
    const ARROW_RIGHT = 39;
    document.addEventListener('keydown', e => {
        let viewer = map.viewer3d;
        // 87 -> W
        // 65 -> A
        // 83 -> S
        // 68 -> D
        // 38 -> up
        // 37 -> left
        // 40 -> down
        // 39 -> right
        // 81 -> Q
        // 69 -> E
        // 107 -> + (add)
        // 109 -> - (sub)
        switch (e.keyCode) {
            case ARROW_UP:
                viewer.camera.moveForward(rotateAmount);
                break;
                case 81:
                    viewer.camera.moveUp(rotateAmount);
                    break;
                case 69:
                    viewer.camera.moveDown(rotateAmount);
                    break;
            case ARROW_LEFT:
                viewer.camera.moveLeft(rotateAmount);
                break;
            case ARROW_DOWN:
                viewer.camera.moveBackward(rotateAmount);
                break;
            case ARROW_RIGHT:
                viewer.camera.moveRight(rotateAmount);
                break;

            case 107:
                viewer.camera.zoomIn(zoomAmount);
                break;
            case 109:
                viewer.camera.zoomOut(zoomAmount);
                break;
        }

        //e.preventDefault();
    });
}

keyInput();
*/
module.exports = {
    MilMap: MilMap
};