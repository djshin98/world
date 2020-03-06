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
            requestRenderMode: true, //throttled이 false이면 매번 화면 갱신으로 FPS 값이 표시됨
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