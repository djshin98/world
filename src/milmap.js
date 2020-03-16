var { IxDatabase } = require('./db');
var { Animation } = require('./animation');
global.Cesium = require('cesium/Cesium');

require('cesium/Widgets/widgets.css');

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzYjMyZDgyMS1lMGUzLTRkNmUtYWMzNS1lNzcxMDE1NGQ1NWYiLCJpZCI6MjE4NjIsInNjb3BlcyI6WyJhc2wiLCJhc3IiLCJhc3ciLCJnYyJdLCJpYXQiOjE1ODE5OTY1NjR9.SFdCmlB5cqZjQz8hv6S5ub2ik71BrbsgXWt_8P9C0ls';


var clock = new Cesium.Clock({
    shouldAnimate: true
});

class MilMap {
    constructor(options) {
        this.mode = "3D";
        this.db = new IxDatabase(1);
        this.options = Object.assign({}, options);
        this.viewer3d = new Cesium.Viewer(this.options.map3.id, {
            //디폴트 레이어로 World_TMS 설정
            /*
                imageryProvider: Cesium.createTileMapServiceImageryProvider({
                    url: wUrl + '/World_TMS/',
                    proxy: new Cesium.DefaultProxy(proxyUrl)
                }),
            */
            /*
             imageryProvider: Cesium.createWorldImagery({
                 style: Cesium.IonWorldImageryStyle.AERIAL_WITH_LABELS
             }),*/
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
        });
        navigationInitialization(this.options.map3.id, this.viewer3d);

        let _this = this;
        this.viewer3d.camera.moveEnd.addEventListener(function() {
            let obj = _this.viewer3d.scene.camera;
            _this.db.set("scene", "camera", {
                position: obj.position,
                heading: obj.heading,
                pitch: obj.pitch,
                roll: obj.roll
            });
            console.log("save position");
        });

        this.db.get("scene", "camera", function(result) {
            if (result.value) {
                let obj = result.value;
                _this.viewer3d.camera.flyTo({
                    destination: obj.position,
                    orientation: {
                        heading: obj.heading,
                        pitch: obj.pitch,
                        roll: obj.roll
                    }
                });
            }
        });

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
    }
    flyTo(x, y) {
        this.viewer3d.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(x, y, 500.0),
            orientation: {
                heading: Cesium.Math.toRadians(0.0),
                pitch: Cesium.Math.toRadians(-80.0),
                roll: 0.0
            }
        });
    }
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

            Cesium.knockout.track(viewModel);
            Cesium.knockout.applyBindings(viewModel, document.getElementById(id));
            var _viewModel = viewModel;
            var _this = this;

            for (var name in viewModel) {
                if (viewModel.hasOwnProperty(name)) {
                    Cesium.knockout.getObservable(viewModel, name).subscribe(function(newValue) {
                        updateCallback(_this.viewer3d, _viewModel, newValue);
                    });
                }
            }
            updateCallback(this.viewer3d, viewModel);
        }
        /* animation(bool) {
            bool ? map.viewer3d.dataSources.add(Cesium.CzmlDataSource.load('../models/simple.czml')) : map.viewer3d.dataSources.removeAll();

        } */
    tileset() {
        // A simple demo of 3D Tiles feature picking with hover and select behavior
        // Building data courtesy of NYC OpenData portal: http://www1.nyc.gov/site/doitt/initiatives/3d-building.page
        var viewer = this.viewer3d;
        viewer.scene.globe.depthTestAgainstTerrain = true;

        // Set the initial camera view to look at Manhattan
        var initialPosition = Cesium.Cartesian3.fromDegrees(-74.01881302800248, 40.69114333714821, 753);
        var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(21.27879878293835, -21.34390550872461, 0.0716951918898415);
        viewer.scene.camera.setView({
            destination: initialPosition,
            orientation: initialOrientation,
            endTransform: Cesium.Matrix4.IDENTITY
        });

        // Load the NYC buildings tileset
        var tileset = new Cesium.Cesium3DTileset({ url: Cesium.IonResource.fromAssetId(75343) });
        viewer.scene.primitives.add(tileset);

        // HTML overlay for showing feature name on mouseover
        var nameOverlay = document.createElement('div');
        viewer.container.appendChild(nameOverlay);
        nameOverlay.className = 'backdrop';
        nameOverlay.style.display = 'none';
        nameOverlay.style.position = 'absolute';
        nameOverlay.style.bottom = '0';
        nameOverlay.style.left = '0';
        nameOverlay.style['pointer-events'] = 'none';
        nameOverlay.style.padding = '4px';
        nameOverlay.style.backgroundColor = 'black';

        // Information about the currently selected feature
        var selected = {
            feature: undefined,
            originalColor: new Cesium.Color()
        };

        // An entity object which will hold info about the currently selected feature for infobox display
        var selectedEntity = new Cesium.Entity();

        // Get default left click handler for when a feature is not picked on left click
        var clickHandler = viewer.screenSpaceEventHandler.getInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK);

        // If silhouettes are supported, silhouette features in blue on mouse over and silhouette green on mouse click.
        // If silhouettes are not supported, change the feature color to yellow on mouse over and green on mouse click.
        if (Cesium.PostProcessStageLibrary.isSilhouetteSupported(viewer.scene)) {
            // Silhouettes are supported
            var silhouetteBlue = Cesium.PostProcessStageLibrary.createEdgeDetectionStage();
            silhouetteBlue.uniforms.color = Cesium.Color.BLUE;
            silhouetteBlue.uniforms.length = 0.01;
            silhouetteBlue.selected = [];

            var silhouetteGreen = Cesium.PostProcessStageLibrary.createEdgeDetectionStage();
            silhouetteGreen.uniforms.color = Cesium.Color.LIME;
            silhouetteGreen.uniforms.length = 0.01;
            silhouetteGreen.selected = [];

            viewer.scene.postProcessStages.add(Cesium.PostProcessStageLibrary.createSilhouetteStage([silhouetteBlue, silhouetteGreen]));

            // Silhouette a feature blue on hover.
            viewer.screenSpaceEventHandler.setInputAction(function onMouseMove(movement) {
                // If a feature was previously highlighted, undo the highlight
                silhouetteBlue.selected = [];

                // Pick a new feature
                var pickedFeature = viewer.scene.pick(movement.endPosition);
                if (!Cesium.defined(pickedFeature)) {
                    nameOverlay.style.display = 'none';
                    return;
                }

                // A feature was picked, so show it's overlay content
                nameOverlay.style.display = 'block';
                nameOverlay.style.bottom = viewer.canvas.clientHeight - movement.endPosition.y + 'px';
                nameOverlay.style.left = movement.endPosition.x + 'px';
                var name = pickedFeature.getProperty('BIN');
                nameOverlay.textContent = name;

                // Highlight the feature if it's not already selected.
                if (pickedFeature !== selected.feature) {
                    silhouetteBlue.selected = [pickedFeature];
                }
            }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

            // Silhouette a feature on selection and show metadata in the InfoBox.
            viewer.screenSpaceEventHandler.setInputAction(function onLeftClick(movement) {
                // If a feature was previously selected, undo the highlight
                silhouetteGreen.selected = [];

                // Pick a new feature
                var pickedFeature = viewer.scene.pick(movement.position);
                if (!Cesium.defined(pickedFeature)) {
                    clickHandler(movement);
                    return;
                }

                // Select the feature if it's not already selected
                if (silhouetteGreen.selected[0] === pickedFeature) {
                    return;
                }

                // Save the selected feature's original color
                var highlightedFeature = silhouetteBlue.selected[0];
                if (pickedFeature === highlightedFeature) {
                    silhouetteBlue.selected = [];
                }

                // Highlight newly selected feature
                silhouetteGreen.selected = [pickedFeature];

                // Set feature infobox description
                var featureName = pickedFeature.getProperty('name');
                selectedEntity.name = featureName;
                selectedEntity.description = 'Loading <div class="cesium-infoBox-loading"></div>';
                viewer.selectedEntity = selectedEntity;
                selectedEntity.description = '<table class="cesium-infoBox-defaultTable"><tbody>' +
                    '<tr><th>BIN</th><td>' + pickedFeature.getProperty('BIN') + '</td></tr>' +
                    '<tr><th>DOITT ID</th><td>' + pickedFeature.getProperty('DOITT_ID') + '</td></tr>' +
                    '<tr><th>SOURCE ID</th><td>' + pickedFeature.getProperty('SOURCE_ID') + '</td></tr>' +
                    '</tbody></table>';
            }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
        } else {
            // Silhouettes are not supported. Instead, change the feature color.

            // Information about the currently highlighted feature
            var highlighted = {
                feature: undefined,
                originalColor: new Cesium.Color()
            };

            // Color a feature yellow on hover.
            viewer.screenSpaceEventHandler.setInputAction(function onMouseMove(movement) {
                // If a feature was previously highlighted, undo the highlight
                if (Cesium.defined(highlighted.feature)) {
                    highlighted.feature.color = highlighted.originalColor;
                    highlighted.feature = undefined;
                }
                // Pick a new feature
                var pickedFeature = viewer.scene.pick(movement.endPosition);
                if (!Cesium.defined(pickedFeature)) {
                    nameOverlay.style.display = 'none';
                    return;
                }
                // A feature was picked, so show it's overlay content
                nameOverlay.style.display = 'block';
                nameOverlay.style.bottom = viewer.canvas.clientHeight - movement.endPosition.y + 'px';
                nameOverlay.style.left = movement.endPosition.x + 'px';
                var name = pickedFeature.getProperty('name');
                if (!Cesium.defined(name)) {
                    name = pickedFeature.getProperty('id');
                }
                nameOverlay.textContent = name;
                // Highlight the feature if it's not already selected.
                if (pickedFeature !== selected.feature) {
                    highlighted.feature = pickedFeature;
                    Cesium.Color.clone(pickedFeature.color, highlighted.originalColor);
                    pickedFeature.color = Cesium.Color.YELLOW;
                }
            }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

            // Color a feature on selection and show metadata in the InfoBox.
            viewer.screenSpaceEventHandler.setInputAction(function onLeftClick(movement) {
                // If a feature was previously selected, undo the highlight
                if (Cesium.defined(selected.feature)) {
                    selected.feature.color = selected.originalColor;
                    selected.feature = undefined;
                }
                // Pick a new feature
                var pickedFeature = viewer.scene.pick(movement.position);
                if (!Cesium.defined(pickedFeature)) {
                    clickHandler(movement);
                    return;
                }
                // Select the feature if it's not already selected
                if (selected.feature === pickedFeature) {
                    return;
                }
                selected.feature = pickedFeature;
                // Save the selected feature's original color
                if (pickedFeature === highlighted.feature) {
                    Cesium.Color.clone(highlighted.originalColor, selected.originalColor);
                    highlighted.feature = undefined;
                } else {
                    Cesium.Color.clone(pickedFeature.color, selected.originalColor);
                }
                // Highlight newly selected feature
                pickedFeature.color = Cesium.Color.LIME;
                // Set feature infobox description
                var featureName = pickedFeature.getProperty('name');
                selectedEntity.name = featureName;
                selectedEntity.description = 'Loading <div class="cesium-infoBox-loading"></div>';
                viewer.selectedEntity = selectedEntity;
                selectedEntity.description = '<table class="cesium-infoBox-defaultTable"><tbody>' +
                    '<tr><th>BIN</th><td>' + pickedFeature.getProperty('BIN') + '</td></tr>' +
                    '<tr><th>DOITT ID</th><td>' + pickedFeature.getProperty('DOITT_ID') + '</td></tr>' +
                    '<tr><th>SOURCE ID</th><td>' + pickedFeature.getProperty('SOURCE_ID') + '</td></tr>' +
                    '<tr><th>Longitude</th><td>' + pickedFeature.getProperty('longitude') + '</td></tr>' +
                    '<tr><th>Latitude</th><td>' + pickedFeature.getProperty('latitude') + '</td></tr>' +
                    '<tr><th>Height</th><td>' + pickedFeature.getProperty('height') + '</td></tr>' +
                    '<tr><th>Terrain Height (Ellipsoid)</th><td>' + pickedFeature.getProperty('TerrainHeight') + '</td></tr>' +
                    '</tbody></table>';
            }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
        }
    }


    add3DModel(x, y, z, model, name) {
        var minDistance = 10; //확대시 보여지는 최소 거리(m) 정의
        var maxDistance = 50000; //축소시 보여지는 최대 거리(m) 정의
        var CZMLName = [];
        var positionData = [];
        var a = 0;
        var b = -122.93797;
        var c = 39.50935;
        var d = 3076;

        for (var i = 0; i < 100000; i++) {
            a += 10;
            b += 0.0005;
            c += 0.0003;
            if (i === 50000) {
                c -= 0.0002;
            }
            d += 5;
            positionData.push(a, b, c, d);
        }
        var result = [];
        var index = 0;
        var test = [];

        /*  function reslArr(arr) {
             var index = 0;
             var result = [];
             arr.forEach(function(d, i) {
                 if (i % 4 === 0 && i > 0) {
                     for (let k = 0; k < 4; k++) {

                         result.push(test33(k, arr)[index]);
                     }
                     index++;
                 }
                 result.push(d);
             });
             return result;
         }

         function test33(x, arr) {
             var resultArr = [];
             for (let y = x; y < arr.length; y += 4) {
                 if (y + 4 < arr.length) {
                     resultArr.push((arr[y] + arr[y + 4]) / 2);
                 }

             }
             return resultArr;
         } */
        /* test.forEach(function(d, i) {

            if (i % 4 === 0 && i > 0) {
                for (let k = 0; k < 4; k++) {

                    result.push(test33(k, test)[index]);
                }
                index++;
            }
            result.push(d);
        }); */

        Cesium.Cartesian3.fromDegrees(127.0215633, 37.4890219, 1000.0);
        CZMLName.push({
            "id": "document",
            "name": "3D Models",
            "version": "1.0",
        });

        CZMLName.push({
            "id": name,
            "name": name,
            "position": {
                "epoch": "2020-03-13T08:00:00Z",
                "cartographicDegrees": result
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
                    "rgba": [0, 8, 255, 255]
                },
                "minimumPixelSize": 64,
            },
            "orientation": {
                "velocityReference": "#position"
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
        this.add3DModel(127.0215633, 37.4890219, 2000, "../models/Cesium_Air.glb", "Jet1");
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
    ragrange(val, arrPoint) {
        var res = 0;
        var xResult = [];
        var finalRes = 0;
        arrPoint.forEach(function(da, i) {
            if (xResult.length < arrPoint.length) {
                arrPoint.forEach(function(d) {
                    var num = 1;
                    var den = 1;
                    var numArr = arrPoint.filter(function(f) {
                        return f[0] !== d[0];
                    });
                    numArr.forEach(function(c) {
                        num *= (val - c[0]);
                        den *= (d[0] - c[0]);
                    });

                    xResult.push(num / den);

                });
            }
            finalRes += (xResult[i] * da[1]);
        });
        return finalRes;
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
}


function addKeyboardShortcuts() {
    const zoomAmount = 15,
        rotateAmount = 5;
    document.addEventListener('keydown', e => {
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
            case 87:
            case 38:
                viewer.camera.moveForward(rotateAmount);
                break;
            case 81:
                viewer.camera.moveUp(rotateAmount);
                break;
            case 69:
                viewer.camera.moveDown(rotateAmount);
                break;
            case 65:
            case 37:
                viewer.camera.moveLeft(rotateAmount);
                break;
            case 83:
            case 40:
                viewer.camera.moveBackward(rotateAmount);
                break;
            case 68:
            case 39:
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
//addKeyboardShortcuts();

module.exports = {
    MilMap: MilMap
};