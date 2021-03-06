const { Layer } = require("../../layer/layer");
const { OliveCollection } = require("../../collection/olivecollection");

class ApplicationLayer extends Layer {
    constructor(layerGroup, json) {
        super(layerGroup, json);
        this.collection = new OliveCollection(layerGroup.getMap(), { name: "app" });
    }
    create(layerGroup, options) {}
    add(options) {
        return this.collection.add(undefined, options, false);
    }
    remove(entity) {
        this.collection.remove(entity);
    }
    terrianFromDegrees(objs, callback) {
        let _this = this;
        let selObj = objs.filter(d => { return Q.isValid(d.degree) ? true : false; });
        if (selObj.length > 0) {
            var positions = selObj.map(d => {
                let c = CTX.radian(d.degree.longitude, d.degree.latitude, 0);
                //let position = _this.viewer.scene.clampToHeight(c);
                return c;
            });
            var promise = Cesium.sampleTerrain(this.viewer.terrainProvider, 11, positions);

            Cesium.when(promise, function(updatedPositions) {
                // ★ Correct value is about 25.3 meters.
                // ★ However, console shows 68.71596342427405.
                //console.log(positions[0].height);
                //callback(positions);
                positions.forEach((d, i) => {
                    selObj[i].degree.height = d.height;
                    if (callback) {
                        callback(selObj[i], _this);
                    }

                })
            });
        }
    }
    createCollection(name, type) {
        if (Q.isValid(name) && Q.isValid(type) && Q.isValid(this.collectionTypes[type])) {
            if (!Q.isValid(this.collections[name])) {
                this.collections[name] = new this.collectionTypes[type](this.map, { name: name });
            }
            return this.collections[name];
        }
    }
    destroyCollection(name) {
        if (Q.isValid(name) && Q.isValid(this.collections[name])) {
            this.collections[name].destroy();
            delete(this.collections[name]);
        }
    }
    collection(name) { return this.collections[name]; }


    draw3DModel(position, modeluri) {
        if (this.bLocateModel) {
            CTX.viewer.entities.add({
                position: position,
                model: {
                    uri: modeluri,
                    heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
                }
            });
            this.bLocateModel = false;
        }
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

}
module.exports = { ApplicationLayer: ApplicationLayer };