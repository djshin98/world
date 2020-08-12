var { IxDatabase } = require('../indexeddb/db');
var { CTX } = require('./ctx');
var { Eventable } = require('../core/eventable');
class Camera extends Eventable {
    constructor(map) {
        super();
        this.map = map;
        this.viewer = map.viewer3d;
        this.camera = this.viewer.scene.camera;

        this.db = new IxDatabase(1);
        this.distance = 3000;
        this.load();
    }

    cache() {
        let carto = Cesium.Cartographic.fromCartesian(this.camera.position);
        return {
            rect: this.camera.computeViewRectangle(),
            x: carto.longitude,
            y: carto.latitude
        };
    }
    uncache(ca) {
        let obj = Object.assign({}, ca);
        this.camera.setView({ destination: obj });
    }
    load() {
        this.camera.moveEnd.addEventListener(() => {

            let d = CTX.c2d(this.camera.position);
            let wc = this.map.center();
            if (wc.x > 0 && wc.y > 0) {
                let w = CTX.w2c(wc.x, wc.y);
                if (w) {
                    let dist = CTX.distance(this.camera.position, w);
                    this.db.set("camera", "center", {
                        position: w,
                        distance: dist
                    });
                    let d = CTX.c2d(w);
                    console.log(" 3d save center : (" + d.longitude + " , " + d.latitude + ")");
                }
            }

            this.db.set("camera", "basic", {
                position: this.camera.position,
                heading: this.camera.heading,
                pitch: this.camera.pitch,
                roll: this.camera.roll
            });
            this.fireEvent("changed", this.camera);
        });

        this.restore();

        this.camera.changed.addEventListener(() => {
            this.fireEvent("changed", this.camera);
        });
    }
    restore() {
        this.db.get("camera", "basic", (result) => {
            if (result && result.value) {
                let obj = result.value;
                this.camera.flyTo({
                    destination: obj.position,
                    orientation: {
                        heading: obj.heading,
                        pitch: obj.pitch,
                        roll: obj.roll
                    }
                });
            }
        });

        this.db.get("camera", "center", (result) => {
            if (result && result.value) {
                let obj = result.value;
                let d = CTX.c2d(obj.position);
                this.flyOver(d.longitude, d.latitude, obj.distance);

            }
        });
    }
    position() {
        return this.camera.position;
    }
    pitch(bfixCenter, radian) {
        if (bfixCenter && radian) {
            let center = this.center();
            if (center) {
                this.distance = Cesium.Cartesian3.distance(this.camera.positionWC, center);
                this.camera.lookAt(center, new Cesium.HeadingPitchRange(this.camera.heading, radian, this.distance));
            }
        } else {
            return this.camera.pitch;
        }
    }
    roll(bfixCenter, radian) {
        if (bfixCenter && typeof(radian) != "undefined") {
            this.camera.flyTo({
                destination: this.camera.position,
                orientation: {
                    heading: this.camera.heading,
                    pitch: this.camera.pitch,
                    roll: radian
                }
            });
            //this.camera.lookAt(this.center(), new Cesium.HeadingPitchRange(Cesium.Math.PI/4, -Cesium.Math.PI/7, this.distance));
        } else {
            return this.camera.roll;
        }
    }
    heading(bfixCenter, radian) {
        if (bfixCenter && radian) {
            let center = this.center();
            if (center) {
                this.distance = Cesium.Cartesian3.distance(this.camera.positionWC, center);
                this.camera.lookAt(center, new Cesium.HeadingPitchRange(radian, this.camera.pitch, this.distance));
            }
        } else {
            return this.camera.heading;
        }
    }
    distanceFromCenter() {
        //return CTX.distance(map.oliveCamera.center(), this.camera.position);
        return 0;
    }
    setDistance(d) {
        this.distance = d;
        this.camera.lookAt(this.center(), new Cesium.HeadingPitchRange(this.camera.heading, this.camera.pitch, this.distance));
    }
    center() {
        if (this.viewer.scene.mode == 3) {
            let windowPosition = new Cesium.Cartesian2(this.viewer.container.clientWidth / 2,
                this.viewer.container.clientHeight / 2);
            let pickRay = this.viewer.scene.camera.getPickRay(windowPosition);
            let pickPosition = this.viewer.scene.globe.pick(pickRay, this.viewer.scene);
            //let pickPositionCartographic = this.viewer.scene.globe.ellipsoid.cartesianToCartographic(pickPosition);
            //console.log(pickPositionCartographic.longitude * (180 / Math.PI));
            //console.log(pickPositionCartographic.latitude * (180 / Math.PI));
            return pickPosition;
        } else if (this.viewer.scene.mode == 2) {
            let camPos = this.viewer.camera.positionCartographic;
            //console.log(camPos.longitude * (180 / Math.PI));
            //console.log(camPos.latitude * (180 / Math.PI));
            return camPos;
        }
        return this.camera.position;
    }
    flyTo(x, y) {
        this.camera.flyTo({
            destination: CTX.cartesian(x, y, this.distance),
            orientation: {
                heading: this.camera.heading,
                pitch: this.camera.pitch,
                roll: this.camera.roll
            }
        });
    }
    flyToRectangle(rect) {
        this.camera.flyTo({
            destination: rect,
            /*orientation: {
                heading: this.camera.heading,
                pitch: this.camera.pitch,
                roll: this.camera.roll
            }*/
        });
    }
    flyOver(lon, lat, height) {
        this.distance = height;
        let c = this.cameraFocus(lon, lat);
        this.flyTo(c.lon, c.lat);
    }
    flyOverEntity(layer, id) {
        if (Q.isValid(layer)) {
            let entity = layer.get(id);
            if (Q.isValid(entity)) {
                var carto = Cesium.Ellipsoid.WGS84.cartesianToCartographic(entity.position._value);
                var lon = Cesium.Math.toDegrees(carto.longitude);
                var lat = Cesium.Math.toDegrees(carto.latitude);
                var calcresult = {};
                calcresult = this.cameraFocus(lon, lat);
                this.map.oliveCamera.flyTo(calcresult.lon, calcresult.lat);
            }
        }
    }
    turn() {
        this.turnoff();
        let _this = this;
        let center = _this.center();
        if (center) {
            let count = 0;
            this.turnHandler = setInterval(function() {
                _this.camera.rotate(center, Cesium.Math.PI / 1000);
                count++;
                if (count == 2000) {
                    _this.turnoff();
                }
            }, 10);
        }
    }
    turnoff() {
        if (this.turnHandler) {
            clearInterval(this.turnHandler);
            this.turnHandler = undefined;
        }
    }
    cameraFocus(lon, lat) {
        let headingDegree = this.camera.heading * Cesium.Math.DEGREES_PER_RADIAN;
        let pitTangent = Math.tan(-(this.camera.pitch * Cesium.Math.DEGREES_PER_RADIAN) * (Math.PI / 180));


        let cameraHeight = this.distance;
        let latDistance = cameraHeight / pitTangent;
        let areaDegree;
        //   위도거리는 어디서나 1도=111Km
        //   경도거리는 우리나라기준 1도= 88.8km
        let earthLatByone = 111000;
        let earthLonByone = 88800;
        switch (parseInt(headingDegree / 90)) {
            case 4:
                areaDegree = 360;
                break;
            case 3:
                areaDegree = 360;
                break;
            case 2:
                areaDegree = 270;
                break;
            case 1:
                areaDegree = 180;
                break;
            case 0:
                areaDegree = 90;
                break;
            default:
                break;
        }
        let headCosine = Math.cos((areaDegree - headingDegree) * (Math.PI / 180));
        let headSine = Math.sin((areaDegree - headingDegree) * (Math.PI / 180));
        if (latDistance > 12000) { latDistance = 12000; } // pitch의 각이 0도에 너무 가까워지면 최초 빗변이 될 distan가 너무멀어진다.

        let resultlat = headCosine * latDistance; // 빗변의 길이라고 생각하자
        let resultlon = headSine * latDistance;
        // var lonDistance = latDistance * headSine;
        //   90도단위가 넘어가면 각도가 다시 90도부터 초기화가 되서 사인 코사인값을 바꿔줘야한다
        if (headingDegree < 90 || (180 < headingDegree && headingDegree < 270)) {
            var temp;
            temp = resultlat;
            resultlat = resultlon;
            resultlon = temp;
        }

        // 위도 좌표 조정 보는 방향에따라 위도와 경도를 더할지 뺄지 결정
        if (90 < headingDegree && headingDegree < 270)
            lat += resultlat / earthLatByone;
        else {
            lat -= resultlat / earthLatByone;
        }

        if (0 < headingDegree && headingDegree < 180) {
            lon -= resultlon / earthLonByone;
        } else {
            lon += resultlon / earthLonByone;
        }
        return { lat: lat, lon: lon };
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

module.exports = { OliveCamera: Camera };