var { IxDatabase } = require('./db');
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
            destination: Cesium.Cartesian3.fromDegrees(x, y, 150.0),
            orientation: {
                heading: Cesium.Math.toRadians(20.0),
                pitch: Cesium.Math.toRadians(-35.0),
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
    animation(bool) {
        bool ? map.viewer3d.dataSources.add(Cesium.CzmlDataSource.load('../models/simple.czml')) : map.viewer3d.dataSources.removeAll();

    }
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

        CZMLName.push({
            "id": "document",
            "name": "3D Models",
            "version": "1.0",
        });

        CZMLName.push({
            "id": name,
            "name": name,
            "position": {
                "cartographicDegrees": [x, y, z]
            },
            "model": {
                "gltf": model,
                "distanceDisplayCondition": {
                    "distanceDisplayCondition": [minDistance, maxDistance]
                },
                "color": {
                    "rgba": [255, 0, 0, 255]
                },
                "minimumPixelSize": 64,
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

            // viewer.trackedEntity = ds.entities.getById(name);

        });
    }


    addModel() {
        this.add3DModel(125.681289395675, 39.019323547473, 2000, "models/Fighter_jet.glb", "Jet1");
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