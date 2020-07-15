"use strict";

const { DrawObject } = require('../map3d/draw/drawobject');
const { tw } = require('../map3d/tangent/turnplane');
const { CTX } = require('../map3d/ctx');
const { Annotation } = require('../draw/annotation');

const Template = {
    faceColor: new Cesium.Color(192, 0, 0, 1),
    lineColor: new Cesium.Color(0, 0, 192, 1)
};

class MilGraphics extends DrawObject {
    constructor(options) {
        super(options.minPointCount, options.maxPointCount);
        this.options = Q.copy(options);
        this.annotations = undefined;
    }
    createAnnotation() {
        let prop = this.options.properties;
        if (Q.isValid(prop) && Q.isValid(prop.annotations)) {
            let annotations = [];
            Q.keys(prop.annotations, (key, value) => {
                let a = prop.annotations[key];
                a.text = this.createText(a.value, prop.variables);
                let text = new Annotation(a);
                annotations.push({
                    name: key,
                    svg: text.image(),
                    anchor: a.anchor,
                    width: text.width(),
                    height: text.height()
                });
            });
            return annotations;
        }
    }
    createText(value, variables) {
        if (Q.isValid(variables)) {
            Q.keys(variables, (key, value) => {
                if (typeof(value) == "string") {
                    value = value.trim();
                    if (value.indexOf("{") == 0 && value.indexOf("}") == value.length - 1) {
                        variables[key] = this.getScript(value);
                    }
                }
            });
            let str = value;
            Q.keys(variables, (key, v) => {
                var re = new RegExp("{" + key + "}", "g");
                str = str.replace(re, v);
            });
            return str;
        }
        return value;
    }
    getScript(value) {
        if (value == "{DTGSTART}") {
            return CTX.c2dtg(this.points[0]);
        } else if (value == "{DTGEND}") {
            return CTX.c2dtg(this.points[this.points.length - 1]);
        }
        return "";
    }
    getAnnotation(name) {
        return this.annotations.find(a => { return a.name == name ? true : false; });
    }
    create(layer, points, viewModel) {
        this.points = points;
        if (this.isReadyToCallbackVariable()) {
            if (!Q.isValid(this.annotations)) {
                this.annotations = this.createAnnotation();
            }
            let objs = tw(points, this.isComplete(), 0, this.options, this.annotations);
            this.sketch(layer, objs);
        } else {
            if (this.isComplete()) {
                this.annotations = this.createAnnotation();
                let objs = tw(points, this.isComplete(), 0, this.options, this.annotations);
                let entityOptions = this.completeSketch(layer, objs, viewModel);
                return layer.add(entityOptions);
            }
            return [];
        }
    }

    sketch(layer, objs) {
        this.removeTemplateEntity(layer);
        let div = 5;
        let points = [];
        objs.forEach((obj, i) => {
            switch (obj.type) {
                case "point":
                    {
                        points = points.concat(obj.geometry);
                        return;
                    }
                case "polyline":
                    {
                        points = points.concat(CTX.split.polyline(obj.geometry, div));
                        return;
                    }
                case "polygon":
                    {
                        points = points.concat(CTX.split.polyline(obj.geometry, div));
                        return;
                    }
                case "arc":
                    {
                        points = points.concat(CTX.split.polyline(obj.geometry, div));
                        return;
                    }
                case "spline":
                    {
                        return obj.geometry;
                    }
                case "annotation":
                    {
                        return obj.geometry;
                    }
            }
        });
        let entityOptions = points.map(p => {
            return {
                position: p,
                point: {
                    pixelSize: 4,
                    color: Template.faceColor,
                    //material: Template.faceColor,
                    //outline: true,
                    //outlineColor: Template.lineColor,
                    //outlineWidth: 4,
                    heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
                }
            };
        })
        this.templateEntity = layer.add(entityOptions);
    }

    completeSketch(layer, objs, viewModel) {
        this.removeTemplateEntity(layer);
        return objs.map((obj, i) => {
            switch (obj.type) {
                case "point":
                    {
                        return {
                            position: obj.geometry[0],
                            point: {
                                pixelSize: 2,
                                material: Template.faceColor,
                                outline: true,
                                outlineColor: Template.lineColor,
                                outlineWidth: 1,
                                heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
                            }
                        };
                    }
                case "circle":
                case "ellipse":
                case "spline":
                case "arc":
                case "polyline":
                    {
                        return {
                            position: obj.geometry[0],
                            polyline: {
                                positions: obj.geometry,
                                clampToGround: true,
                                color: viewModel.lineColor,
                                width: 5,
                                material: this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, 5)
                            },
                        };
                    }
                case "polygon":
                    {
                        return {
                            polygon: {
                                hierarchy: obj.geometry,
                                material: viewModel.faceColor
                            }
                        };
                    }
                case "annotation":
                    {
                        let svg = this.getAnnotation(obj.name).svg;
                        return {
                            polygon: {
                                hierarchy: obj.geometry,
                                material: viewModel.faceColor
                            }
                        };
                        /*
                        return {
                            position: obj.geometry[0],
                            polygon: {
                                hierarchy: obj.geometry,
                                fill: true,
                                material: new Cesium.Material({
                                    fabric: {
                                        type: 'Image',
                                        uniforms: {
                                            image: svg.img
                                        }
                                    }
                                }),
                                heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND
                            }
                        };*/
                    }
            }
        });
    }
}
module.exports = { MilGraphics: MilGraphics };