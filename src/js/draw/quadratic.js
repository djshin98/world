var { DrawObject } = require('./drawobject');
var { ParabolaUtil } = require('./util');
var { CTX } = require("../map3d/ctx");

class Quadratic extends DrawObject {
    constructor() {
        super(2);
    }
    create(collection, points, viewModel) {
        if (points && points.length && points.length >= this.minPointCount) {
            let degrees = {
                start: CTX.c2d(points[0]),
                end: CTX.c2d(points[1])
            }
            let height = viewModel.size + Math.max(degrees.start.height, degrees.end.height);
            let distrance = CTX.distanceD(degrees.start, degrees.end);
            //height = distrance / 2;
            let polylinePoints = ParabolaUtil.quadratic(degrees, 100, height, true);
            console.log("polylinePoints length : " + polylinePoints.points.length);

            let heightMeterial;
            if (viewModel.lineStyle != "line") {
                heightMeterial = new Cesium.PolylineDashMaterialProperty({
                    color: viewModel.lineColor,
                    dashPattern: this.dashPatternFromString(viewModel.lineStyle, 4)
                });
            } else {
                heightMeterial = new Cesium.ColorMaterialProperty(viewModel.lineColor);
            }

            collection.add(this.index, {
                polyline: {
                    positions: polylinePoints.center,
                    color: viewModel.lineColor,
                    width: 1,
                    material: heightMeterial
                }
            });
            if (viewModel.frameEnable === true) {
                polylinePoints.points.forEach(p => {
                    collection.add(this.index, {
                        position: p,
                        point: {
                            pixelSize: viewModel.shapeSize,
                            //fill: true,
                            material: viewModel.faceColor,
                            outline: true,
                            outlineColor: viewModel.lineColor,
                            outlineWidth: viewModel.lineWidth,
                            heightReference: Cesium.HeightReference.NODE
                        }
                    });
                });
            } else {
                let option = {
                    positions: polylinePoints.points.reverse(),
                    color: viewModel.lineColor,
                    width: viewModel.lineWidth,
                    material: new Cesium.PolylineGlowMaterialProperty({
                            //color: viewModel.lineColor,
                            glowPower: 0.3,
                            taperPower: 0.3,
                            color: Cesium.Color.PALEGOLDENROD
                        })
                        //distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 10000)
                };
                return collection.add(this.index, { polyline: option });
            }
        }
    }

    type1(collection, name, degrees, height, viewModel) {
        viewModel = Object.assign({
            size: 100,
            lineStyle: "dot",
            lineColor: Cesium.Color.LIGHTYELLOW,
            lineWidth: 5,
            frameEnable: false
        }, viewModel);
        if (collection && Cesium.defined(degrees.start) && Cesium.defined(degrees.end)) {
            height = Math.max(degrees.start.height, degrees.end.height) + height;
            let distrance = CTX.distanceD(degrees.start, degrees.end);

            let polylinePoints = ParabolaUtil.quadratic(degrees, viewModel.size, height, true);
            //console.log("polylinePoints length : " + polylinePoints.points.length);

            let heightMeterial;
            if (viewModel.lineStyle != "line") {
                heightMeterial = new Cesium.PolylineDashMaterialProperty({
                    color: viewModel.lineColor,
                    dashPattern: this.dashPatternFromString(viewModel.lineStyle, 4)
                });
            } else {
                heightMeterial = viewModel.lineColor;
            }

            collection.add(this.index, {
                polyline: {
                    positions: polylinePoints.center,
                    color: viewModel.lineColor,
                    width: 1,
                    material: heightMeterial,
                    distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, distrance * 10)
                }
            });
            if (viewModel.frameEnable === true) {
                polylinePoints.points.forEach(p => {
                    collection.add(this.index, {
                        position: p,
                        point: {
                            pixelSize: viewModel.shapeSize,
                            //fill: true,
                            material: viewModel.faceColor,
                            outline: true,
                            outlineColor: viewModel.lineColor,
                            outlineWidth: viewModel.lineWidth,
                            heightReference: Cesium.HeightReference.NODE,
                            distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, distrance * 10)
                        }
                    });
                });
            } else {
                let option = {
                    positions: polylinePoints.points.reverse(),
                    color: viewModel.lineColor,
                    width: viewModel.lineWidth,
                    material: new Cesium.PolylineGlowMaterialProperty({
                        //color: viewModel.lineColor,
                        glowPower: 0.3,
                        taperPower: 0.3,
                        color: Cesium.Color.PALEGOLDENROD
                    }),
                    distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, distrance * 10)
                };
                return collection.add(this.index, { name: name, polyline: option });
            }
        }
    }
}

module.exports = { Quadratic: Quadratic };