require('dropzone');

class GltfViewer{
    constructor(options){
        this.options = Object.assign({},options);
        this.showingBoundingVolume = false;
    
        this.initCesium();
    }

    initCesium(){
        Cesium.BingMapsApi.defaultKey = "Ag-6WHiJUeX5dm4qedvjgqzGcB-mgrZe1KtjnNz-8gwzIP_8PUu9kVZUKXhuwRsX";
    
        var globe = new Cesium.Globe();
        globe.baseColor = Cesium.Color.WHITE;
    
        this.viewer = new Cesium.Viewer(this.options.id,{
            animation: false,
            scene3DOnly: true,
            globe: globe,
            skyBox: false,
            vrButton: false,
            skyAtmosphere: false,
            shadows: false,
            baseLayerPicker: false,
            geocoder: false,
            homeButton: false,
            fullscreenButton: false,
            infoBox: false,
            sceneModePicker: false,
            selectionIndicator: false,
            timeline: false,
            navigationHelpButton: false,
            navigationInstructionsInitiallyVisible: false
        });
        this.viewer.scene.backgroundColor = Cesium.Color.WHITE;
        this.viewer.scene.imageryLayers.removeAll();
        /*
        document.body.onkeydown = function(e){
            switch((e.keyCode || e.which)){
                case 70:
                    toggleDebugAxis();
                    break;
                case 66:
                    toggleBoundingVolume();
                    break;
                case 72:
                    toggleHelpCredits();
                    break;
            }
        };
        */
    }

    initDropzone(){
        let _this = this;
        var reader  = new FileReader();
        reader.addEventListener("load", function () {
            _this.showGlTF(reader.result);
        }, false);
    
        ["div#"+this.options.id, "div#home .dragndrop"].forEach(function(container){
            var dz = new Dropzone(container, { 
                url: "#",
                acceptedFiles: ".gltf,.glb",
                maxFilesize: 1000,
                clickable: container.indexOf("dragndrop") !== -1,
                maxFiles: 1,
                createImageThumbnails: false,
                autoProcessQueue: false,
                accept: function(file, done){
                    document.getElementById("home").style.display = 'none';
                    reader.readAsDataURL(file);
                }
            });
        });
    }
    getPrimitive(){
        return this.viewer.scene.primitives.get(0);
    }
    toggleHelpCredits(){
        ["credits", "instructions"].forEach(function(id){
            var el = document.getElementById(id);
            el.style.display = el.style.display === 'block' || el.style.display === '' ? 'none' : 'block';
        });
    }
    
    toggleBoundingVolume(){
        this.showingBoundingVolume ? this.hideBoundingVolume() : this.showBoundingVolume();
    }
    
    showBoundingVolume(){
        this.debugShowBoundingVolume = this.showingBoundingVolume = true;
    }
    
    hideBoundingVolume(){
        this.getPrimitive().debugShowBoundingVolume = this.showingBoundingVolume = false;
    }
    
    toggleDebugAxis(){
        if (this.viewer && this.getPrimitive().modelMatrix){
            if (this.debugAxis){
                this.hideDebugAxis();
            }else{
                this.showDebugAxis();
            }
        }
    }
    
    showDebugAxis(){
        this.debugAxis = this.viewer.scene.primitives.add(new Cesium.DebugModelMatrixPrimitive({
          modelMatrix : this.getPrimitive().modelMatrix
        }));
    }
    
    hideDebugAxis(){
        this.viewer.scene.primitives.remove(this.debugAxis);
        this.debugAxis = null;
    }
    
    showGlTF(uri){
        if (!this.viewer){
            this.initCesium();
        }
    
        this.viewer.entities.removeAll();
        this.viewer.scene.primitives.removeAll();
        
        var entity = this.viewer.entities.add({
            position : Cesium.Cartesian3.fromDegrees(0, 0, 100000000000),
            model : {
                uri : uri,
                minimumPixelSize : 128,
                maximumScale : 20000
            }
        });
        this.viewer.trackedEntity = entity;
        /*
        let _this = this;
        function checkOnLoad(entity){
            setTimeout(function(){
                var boundingSphere = new Cesium.BoundingSphere();
                var state = _this.viewer.dataSourceDisplay.getBoundingSphere(entity, false, boundingSphere);
                if (state === Cesium.BoundingSphereState.DONE) {
                    // Set camera
                    _this.viewer.camera.moveBackward(2);
    
                    // Show debug
                    if (_this.debugAxis){
                        _this.showDebugAxis();
                    }
    
                    if (_this.showingBoundingVolume){
                        _this.showBoundingVolume();
                    }
                }else{
                    checkOnLoad(entity);
                }
            }, 50);
        }
        checkOnLoad(entity);
        */
    }
}

//initDropzone();
module.exports = { GltfViewer : GltfViewer };

global.GltfViewer = GltfViewer;