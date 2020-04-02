class Animation {
    constructor(options) {
        this.timestamp = 0;
        this.scene = map.viewer3d.scene;

        this.pathPosition = new Cesium.SampledPositionProperty();
        this.entityPath = map.viewer3d.entities.add({
            position: this.pathPosition,
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

        this.camera = map.viewer3d.camera;
        this.controller = this.scene.screenSpaceCameraController;
        this.r = 0;
        this.center = new Cesium.Cartesian3();

        this.hpRoll = new Cesium.HeadingPitchRoll();
        this.hpRoll.pitch = 1.5708;
        this.hpRange = new Cesium.HeadingPitchRange();
        this.speed = 1;
        this.deltaRadians = Cesium.Math.toRadians(0.05);
        ///options.position -발사지점

        this.position = Cesium.Cartesian3.fromDegrees(127.0215633, 37.4890219, 1000.0);
        this.cameraposition = new Cesium.Cartesian3(-3355072.3251947914, 4309027.65150185, 3834824.8952014796);
        this.speedVector = new Cesium.Cartesian3();
        this.fixedFrameTransform = Cesium.Transforms.localFrameToFixedFrameGenerator('north', 'west');

        this.flyToCamera();
        this.objectSetting();
        // pitch up
        /* this.hpRoll.pitch += this.deltaRadians;
        if (this.hpRoll.pitch > Cesium.Math.TWO_PI) {
            this.hpRoll.pitch -= Cesium.Math.TWO_PI;
        }

        this.hpRoll.pitch -= this.deltaRadians;
        if (this.hpRoll.pitch < -Cesium.Math.TWO_PI) {
            this.hpRoll.pitch += Cesium.Math.TWO_PI;
        } */

    }

    objectSetting() {
        setInterval(() => {
            this.timestamp += 10;
            this.hpRoll.pitch += this.deltaRadians;
            // hpRoll.roll -= deltaRadians;
            if (this.timestamp > 38000) {
                this.speed = 0;

            } else {
                this.speed = Math.min(this.speed += 3, 500);
                if (this.hpRoll.pitch > Cesium.Math.TWO_PI) {
                    this.hpRoll.pitch -= Cesium.Math.TWO_PI;
                }
                ///////////////////방향 계속돌아감... 수정필요
                if (this.hpRoll.pitch >= 1.5708 && this.deltaRadians > 0) this.deltaRadians = -this.deltaRadians;
            }
        }, 10);
        var _this = this;
        var fromBehind = document.getElementById('fromBehind');
        this.scene.preUpdate.addEventListener(function(scene, time) {
            _this.speedVector = Cesium.Cartesian3.multiplyByScalar(Cesium.Cartesian3.UNIT_X, _this.speed / 10, _this.speedVector);
            _this.position = Cesium.Matrix4.multiplyByPoint(_this.planePrimitive.modelMatrix, _this.speedVector, _this.position);
            _this.pathPosition.addSample(Cesium.JulianDate.now(), _this.position);
            Cesium.Transforms.headingPitchRollToFixedFrame(_this.position, _this.hpRoll, Cesium.Ellipsoid.WGS84, _this.fixedFrameTransform, _this.planePrimitive.modelMatrix);
            if (fromBehind.checked) {
                // Zoom to model
                Cesium.Matrix4.multiplyByPoint(_this.planePrimitive.modelMatrix, _this.planePrimitive.boundingSphere.center, _this.center);
                _this.hpRange.heading = _this.hpRoll.heading;
                _this.hpRange.pitch = _this.hpRoll.pitch;
                _this.camera.lookAt(_this.center, _this.hpRange);
            }
        });
    }
    flyToCamera() {
        var _this = this;
        this.planePrimitive = map.viewer3d.scene.primitives.add(Cesium.Model.fromGltf({
            url: 'https://assets.agi.com/models/launchvehicle.glb',
            modelMatrix: Cesium.Transforms.headingPitchRollToFixedFrame(_this.position, _this.hpRoll, Cesium.Ellipsoid.WGS84, _this.fixedFrameTransform),
            minimumPixelSize: 128
        }));
        this.planePrimitive.readyPromise.then(function(model) {
            // Play and loop all animations at half-speed

            model.activeAnimations.addAll({
                multiplier: 0.5,
                loop: Cesium.ModelAnimationLoop.REPEAT
            });
            // Zoom to model
            // r = 2.0 * Math.max(model.boundingSphere.radius, _this.camera.frustum.near);
            // thiscontroller.minimumZoomDistance = r * 0.5;
            Cesium.Matrix4.multiplyByPoint(model.modelMatrix, model.boundingSphere.center, _this.center);
            var heading = Cesium.Math.toRadians(230.0);
            var pitch = Cesium.Math.toRadians(-20.0);
            _this.hpRange.heading = 6.118334442501016;
            _this.hpRange.pitch = -0.9805559970133615;
            _this.hpRange.range = 0.00016222259613485335;
            // center.z = 500000;
            _this.camera.flyTo({
                destination: _this.cameraposition,
                orientation: _this.hpRange
            });
        });
    }
}

module.exports = {
    Animation: Animation
};