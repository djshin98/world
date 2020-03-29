var { IxDatabase } = require('../repository/db');

class Camera{
    constructor(viewer){
        this.viewer = viewer;
        this.camera = this.viewer.scene.camera;

        this.db = new IxDatabase(1,"camera");
        this.cameraWidgetCallback = undefined;
        this.distance = 3000;
        this.load();
    }
    widget(callback){
        this.cameraWidgetCallback = callback;
    }
    load(){
        let _this = this;
        this.camera.moveEnd.addEventListener(function() {
            _this.db.set("scene", "camera", {
                position: _this.camera.position,
                heading: _this.camera.heading,
                pitch: _this.camera.pitch,
                roll: _this.camera.roll
            });
            if (_this.cameraWidgetCallback) {
                _this.cameraWidgetCallback(_this.camera);
            }
        });

        this.db.get("scene", "camera", function(result) {
            if (result && result.value) {
                let obj = result.value;
                _this.camera.flyTo({
                    destination: obj.position,
                    orientation: {
                        heading: obj.heading,
                        pitch: obj.pitch,
                        roll: obj.roll
                    }
                });
            }
        });
    }
    pitch(bfixCenter, radian){
        if( bfixCenter && radian ){
            let center = this.center();
            if( center ){
                this.distance = Cesium.Cartesian3.distance( this.camera.positionWC , center );
                this.camera.lookAt(center, new Cesium.HeadingPitchRange(this.camera.heading, radian, this.distance));
            }
            
        }else{
            return this.camera.pitch;
        }
    }
    roll(bfixCenter, radian){
        if( bfixCenter && radian ){
            //this.camera.lookAt(this.center(), new Cesium.HeadingPitchRange(Cesium.Math.PI/4, -Cesium.Math.PI/7, this.distance));
        }else{
            return this.camera.roll;
        }
    }
    heading(bfixCenter, radian){
        if( bfixCenter && radian ){
            let center = this.center();
            if( center ){
                this.distance = Cesium.Cartesian3.distance( this.camera.positionWC , center );
                this.camera.lookAt(this.center(), new Cesium.HeadingPitchRange(radian, this.camera.pitch, this.distance));
            }
        }else{
            return this.camera.heading;
        }
    }
    distance(d){
        this.distance = d;
        this.camera.lookAt(this.center(), new Cesium.HeadingPitchRange(Cesium.Math.PI/4, -Cesium.Math.PI/7, this.distance));
    }
    center(){
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
            destination: Cesium.Cartesian3.fromDegrees(x, y, this.distance),
            orientation: {
                heading: this.camera.heading,
                pitch: this.camera.pitch,
                roll: this.camera.roll
            }
        });
    }
    turn(){
        this.turnoff();
        let _this = this;
        let center = _this.center();
        if( center ){
            let count = 0;
            this.turnHandler = setInterval(function(){
                _this.camera.rotate(center, Cesium.Math.PI/1000);
                count++;
                if( count == 2000){
                    _this.turnoff();
                }
            },10);
        }
    }
    turnoff(){
        if( this.turnHandler ){
            clearInterval(this.turnHandler);
            this.turnHandler = undefined;
        }
    }
}

module.exports = { OliveCamera : Camera };