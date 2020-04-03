class Contour{
    constructor(viewer){
        this.viewer = viewer;
        

        this.elevationRamp = [0.0, 0.045, 0.1, 0.15, 0.37, 0.54, 1.0];
        this.slopeRamp = [0.0, 0.29, 0.5, Math.sqrt(2)/2, 0.87, 0.91, 1.0];
        this.aspectRamp = [0.0, 0.2, 0.4, 0.6, 0.8, 0.9, 1.0];

        this.minHeight = -414.0; // approximate dead sea elevation
        this.maxHeight = 8777.0; // approximate everest elevation
        this.contourColor = Cesium.Color.YELLOW.clone();
        this.contourUniforms = {};
        this.shadingUniforms = {};

        this.viewModel = {
            enableContour: true, //false
            contourSpacing: 87, //150.0,
            contourWidth: 1.0, //2.0,
            selectedShading: 'elevation',
            changeColor: function() {
                this.contourUniforms.color = Cesium.Color.fromRandom({alpha: 1.0}, this.contourColor);
            }
        };

    }
    update(viewModel){
        this.viewModel = viewModel;
        this.viewer.scene.globe.enableLighting = true;
        this.updateMaterial(this.viewer);
    }
    getElevationContourMaterial() {
        // Creates a composite material with both elevation shading and contour lines
        return new Cesium.Material({
            fabric: {
                type: 'ElevationColorContour',
                materials: {
                    contourMaterial: {
                        type: 'ElevationContour'
                    },
                    elevationRampMaterial: {
                        type: 'ElevationRamp'
                    }
                },
                components: {
                    diffuse: 'contourMaterial.alpha == 0.0 ? elevationRampMaterial.diffuse : contourMaterial.diffuse',
                    alpha: 'max(contourMaterial.alpha, elevationRampMaterial.alpha)'
                }
            },
            translucent: false
        });
    }

    getSlopeContourMaterial() {
        // Creates a composite material with both slope shading and contour lines
        return new Cesium.Material({
            fabric: {
                type: 'SlopeColorContour',
                materials: {
                    contourMaterial: {
                        type: 'ElevationContour'
                    },
                    slopeRampMaterial: {
                        type: 'SlopeRamp'
                    }
                },
                components: {
                    diffuse: 'contourMaterial.alpha == 0.0 ? slopeRampMaterial.diffuse : contourMaterial.diffuse',
                    alpha: 'max(contourMaterial.alpha, slopeRampMaterial.alpha)'
                }
            },
            translucent: false
        });
    }

    getAspectContourMaterial() {
        // Creates a composite material with both aspect shading and contour lines
        return new Cesium.Material({
            fabric: {
                type: 'AspectColorContour',
                materials: {
                    contourMaterial: {
                        type: 'ElevationContour'
                    },
                    aspectRampMaterial: {
                        type: 'AspectRamp'
                    }
                },
                components: {
                    diffuse: 'contourMaterial.alpha == 0.0 ? aspectRampMaterial.diffuse : contourMaterial.diffuse',
                    alpha: 'max(contourMaterial.alpha, aspectRampMaterial.alpha)'
                }
            },
            translucent: false
        });
    }
    
    getColorRamp(selectedShading) {
        var ramp = document.createElement('canvas');
        ramp.width = 100;
        ramp.height = 1;
        var ctx = ramp.getContext('2d');

        var values;
        if (selectedShading === 'elevation') {
            values = this.elevationRamp;
        } else if (selectedShading === 'slope') {
            values = this.slopeRamp;
        } else if (selectedShading === 'aspect') {
            values = this.aspectRamp;
        }

        var grd = ctx.createLinearGradient(0, 0, 100, 0);
        grd.addColorStop(values[0], '#000000'); //black
        grd.addColorStop(values[1], '#2747E0'); //blue
        grd.addColorStop(values[2], '#D33B7D'); //pink
        grd.addColorStop(values[3], '#D33038'); //red
        grd.addColorStop(values[4], '#FF9742'); //orange
        grd.addColorStop(values[5], '#ffd700'); //yellow
        grd.addColorStop(values[6], '#ffffff'); //white

        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, 100, 1);

        return ramp;
    }

    // The viewModel tracks the state of our mini application.
    

    updateMaterial(viewer) {
        var hasContour = this.viewModel.enableContour;
        var selectedShading = this.viewModel.selectedShading;
        
        var globe = viewer.scene.globe;
        var material;
        if (hasContour) {
            if (selectedShading === 'elevation') {
                material = this.getElevationContourMaterial();
                this.shadingUniforms = material.materials.elevationRampMaterial.uniforms;
                this.shadingUniforms.minimumHeight = this.minHeight;
                this.shadingUniforms.maximumHeight = this.maxHeight;
                this.contourUniforms = material.materials.contourMaterial.uniforms;
            } else if (selectedShading === 'slope') {
                material = this.getSlopeContourMaterial();
                this.shadingUniforms = material.materials.slopeRampMaterial.uniforms;
                this.contourUniforms = material.materials.contourMaterial.uniforms;
            } else if (selectedShading === 'aspect') {
                material = this.getAspectContourMaterial();
                this.shadingUniforms = material.materials.aspectRampMaterial.uniforms;
                this.contourUniforms = material.materials.contourMaterial.uniforms;
            } else {
                material = Cesium.Material.fromType('ElevationContour');
                this.contourUniforms = material.uniforms;
            }
            this.contourUniforms.width = this.viewModel.contourWidth;
            this.contourUniforms.spacing = this.viewModel.contourSpacing;
            this.contourUniforms.color = this.contourColor;
        } else if (selectedShading === 'elevation') {
            material = Cesium.Material.fromType('ElevationRamp');
            this.shadingUniforms = material.uniforms;
            this.shadingUniforms.minimumHeight = this.minHeight;
            this.shadingUniforms.maximumHeight = this.maxHeight;
        } else if (selectedShading === 'slope') {
            material = Cesium.Material.fromType('SlopeRamp');
            this.shadingUniforms = material.uniforms;
        } else if (selectedShading === 'aspect') {
            material = Cesium.Material.fromType('AspectRamp');
            this.shadingUniforms = material.uniforms;
        }
        if (selectedShading !== 'none') {
            this.shadingUniforms.image = this.getColorRamp(selectedShading);
        }

        globe.material = material;
    }
}

module.exports = { Contour : Contour };