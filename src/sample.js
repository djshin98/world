var Cesium = require('cesium/Cesium');

function loadSample(viewer) {
    var scene = viewer.scene;

    var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
        Cesium.Cartesian3.fromDegrees(126.99996940752266, 37.00098863857905, 0.0));
    var model = scene.primitives.add(Cesium.Model.fromGltf({
        url: 'models/GroundVehicle.glb',
        modelMatrix: modelMatrix,
        scale: 1.0
    }));

    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(126.9995335844, 37.0000282437, 50.0),
        orientation: {
            heading: Cesium.Math.toRadians(20.0),
            pitch: Cesium.Math.toRadians(-35.0),
            roll: 0.0
        }
    });
}

function getPos(viewer) {
    var pos = {};

    var cartographic = null;

    //장면 모드에 따라 처리방식이 다름
    if (viewer.scene.mode == 3) { //3D 지도에서
        var windowPosition = new Cesium.Cartesian2(viewer.container.clientWidth / 2, viewer.container.clientHeight / 2);
        var pickRay = viewer.scene.camera.getPickRay(windowPosition);
        var pickPosition = viewer.scene.globe.pick(pickRay, viewer.scene);
        cartographic = viewer.scene.globe.ellipsoid.cartesianToCartographic(pickPosition);
    } else if (viewer.scene.mode == 2) { //2D 지도에서
        cartographic = viewer.camera.positionCartographic;
    }

    //현재 카메라 위치를 가져옴 : 경위도(라디안), 높이(미터)
    //var cartographic = viewer.camera.positionCartographic;

    //라디안을 도(경위도) 단위로 변경
    //경도
    pos.camera = {};
    pos.camera.lng = Number(Cesium.Math.toDegrees(viewer.camera.positionCartographic.longitude).toFixed(10));
    //위도
    pos.camera.lat = Number(Cesium.Math.toDegrees(viewer.camera.positionCartographic.latitude).toFixed(10));

    pos.center = {};
    pos.center.lng = Number(Cesium.Math.toDegrees(cartographic.longitude)); //라디안을 경위도 단위로 변경
    pos.center.lat = Number(Cesium.Math.toDegrees(cartographic.latitude)); //라디안을 경위도 단위로 변경

    return pos;
}

module.exports = { load: loadSample, pos: getPos };