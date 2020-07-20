"use strict";

const { DrawObject } = require('../map3d/draw/drawobject');
const { tw } = require('../map3d/tangent/turnplane');
const { CTX } = require('../map3d/ctx');
const { Annotation } = require('../draw/annotation');

const Template = {
    faceColor: new Cesium.Color(192, 0, 0, 1),
    lineColor: new Cesium.Color(0, 0, 192, 1),
    lineWidth: 3
};

const debugColor = Cesium.Color.RED;
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
            if (!Q.isValid(obj.type)) {
                console.log("invalid type : ");
                console.dir(obj);
                return;
            }
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
                    pixelSize: 3,
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
        objs = objs.filter(o => {
            return Q.isValid(obj.type) ? true : false;
        });
        objs.forEach((obj, i, arr) => {
            if (obj.type == "annotation" && obj.debug === true) {
                arr.push({
                    type: "polyline",
                    mode: "debug",
                    geometry: obj.geometry
                });
            }
        })
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
                        let color = (obj.mode === "debug") ? debugColor : viewModel.lineColor;
                        let lineWidth = (obj.mode === "debug") ? 1 : Template.lineWidth;
                        this.expansion(obj);
                        return {
                            position: obj.geometry[0],
                            polyline: {
                                positions: obj.geometry,
                                clampToGround: true,
                                width: lineWidth,
                                material: color
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
                                stRotation: -obj.rotate - Math.PI / 2,

                                material: new Cesium.ImageMaterialProperty({
                                    image: svg.img
                                })
                            }
                        };
                    }
            }
        });
    }
    expansion(obj) {

        if (Q.isValid(obj.expansion)) {
            obj.expansion.forEach((ex) => {
                if (ex.type == "arc") {

                } else if (ex.type == "remove") {
                    obj.geometry.splice(0, 1);
                }
            });
        }
    }
}
module.exports = { MilGraphics: MilGraphics };