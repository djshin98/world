"use strict";

const { DrawObject } = require('../map3d/draw/drawobject');
const { tw } = require('../map3d/tangent/turnplane');
const { CTX } = require('../map3d/ctx');

const Template = {
    faceColor: new Cesium.Color(192, 0, 0, 1),
    lineColor: new Cesium.Color(0, 0, 192, 1)
};

class MilGraphics extends DrawObject {
    constructor(options) {
        super(options.minPointCount, options.maxPointCount);
        this.options = Q.copy(options);
    }
    create(layer, points, viewModel) {
        if (this.isReadyToCallbackVariable()) {
            let objs = tw(points, this.isComplete(), 0, this.options);
            this.sketch(layer, objs);
        } else {
            if (this.isComplete()) {
                let objs = tw(points, this.isComplete(), 0, this.options);
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
                        return {
                            rectangle: {
                                rotation: obj.rotate,
                                stRotation: obj.rotate,
                                coordinates: Cesium.Rectangle.fromCartesianArray(obj.geometry),
                                fill: true,
                                material: obj.image,
                                heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND
                            }
                        };
                    }
            }
        });
    }
}
module.exports = { MilGraphics: MilGraphics };