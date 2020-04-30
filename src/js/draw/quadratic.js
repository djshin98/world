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
            let polylinePoints = ParabolaUtil.sin(degrees, { start: 0, end: 180 }, 100, height, true, false, 5);
            console.log("polylinePoints length : " + polylinePoints.length);
            /*
            polylinePoints.forEach(p => {
                collection.add(this.index, {
                    position: p,
                    point: {
                        pixelSize: viewModel.shapeSize,
                        fill: true,
                        material: viewModel.faceColor,
                        outline: true,
                        outlineColor: viewModel.lineColor,
                        outlineWidth: viewModel.lineWidth,
                        heightReference: Cesium.HeightReference.NODE
                    }
                });
            });
            */

            let option = {
                positions: polylinePoints,
                color: viewModel.lineColor,
                width: viewModel.lineWidth,
                material: viewModel.lineColor,
                distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 10000)
            };

            if (viewModel.lineStyle != "line") {
                option.material = new Cesium.PolylineDashMaterialProperty({
                    color: viewModel.lineColor,
                    dashPattern: this.dashPatternFromString(viewModel.lineStyle, viewModel.lineWidth)
                });
            } else {
                option.material = new Cesium.ColorMaterialProperty(viewModel.lineColor);
            }

            return collection.add(this.index, { polyline: option });

        }
    }

    _create(collection, points, viewModel) {
        if (points && points.length && points.length >= this.minPointCount) {

            var earth = Cesium.Ellipsoid.WGS84;
            var startPoint = points[0]; //earth.cartographicToCartesian(Cesium.Cartographic.fromDegrees(pointA[0][0], pointA[0][1], 0.0));
            var endPoint = points[1]; //earth.cartographicToCartesian(Cesium.Cartographic.fromDegrees(pointB[0][0], pointB[0][1], 0.0));
            let result = points[1];
            var midpointCartesian = Cesium.Cartesian3.midpoint(startPoint, endPoint, result);
            //var midpointCartesian = startPoint.add(endPoint).divideByScalar(2.0);
            earth.scaleToGeodeticSurface(midpointCartesian);
            var midpointCartographic = earth.cartesianToCartographic(midpointCartesian);    
            midpointCartographic.height = 1000;    
            midpointCartesian = earth.cartographicToCartesian(midpointCartographic);

            let firstTangent = Cesium.Cartesian3.subtract(midpointCartesian, startPoint, result);
            let lastTangent = Cesium.Cartesian3.subtract(endPoint, midpointCartesian, result);
            var hermiteSpline = new Cesium.CatmullRomSpline({
                times: [0.0, 1.0],
                points: [startPoint, endPoint],
                firstTangent: firstTangent,
                lastTangent: lastTangent
            });

            var polylinePoints = [];

                
            for (var i = 0; i < 20; ++i) {       polylinePoints.push(hermiteSpline.evaluate(i / 20));     }

            return collection.add(this.index, {
                polyline: {
                    positions: polylinePoints,
                    color: viewModel.lineColor,
                    width: viewModel.lineWidth,
                    material: viewModel.lineColor
                }
                /*
                    hierarchy: points,
                    material: new Cesium.ColorMaterialProperty(viewModel.faceColor),
                    fill: true,
                    outline: true,
                    outlineColor: viewModel.lineColor,
                    outlineWidth: viewModel.lineWidth,
                    material: new Cesium.ColorMaterialProperty(viewModel.faceColor),
                    height: 10000,
                    extrudedHeight: 30000,
                    extrudedHeightReference: Cesium.HeightReference.RELATIVE_TO_GROUND,
                    heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND
                }*/
            });
        }
    }
    type1(collection, name, degree, minHeight, maxHeight, _viewModel) {
        if (collection) {
            let points = [CTX.d2c(degree.lb), CTX.d2c(degree.lu), CTX.d2c(degree.ru), CTX.d2c(degree.rb)];
            let viewModel = this.setViewModel({
                faceColor: Cesium.Color.WHITE,
                faceTransparent: 0.6,
                lineColor: Cesium.Color.YELLOW,
                lineTransparent: 0.6
            }, _viewModel);

            let option = {
                position: points[0],
                name: name,
                polygon: {
                    hierarchy: points,
                    material: new Cesium.ColorMaterialProperty(viewModel.faceColor),
                    fill: true,
                    outline: true,
                    outlineColor: viewModel.lineColor,
                    outlineWidth: viewModel.lineWidth,
                    material: new Cesium.ColorMaterialProperty(viewModel.faceColor),
                    height: minHeight,
                    extrudedHeight: maxHeight,
                    extrudedHeightReference: Cesium.HeightReference.RELATIVE_TO_GROUND,
                    heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND
                }
            };

            if (Cesium.defined(name) && name.length > 0) {
                option.label = {
                    text: name,
                    fillColor: viewModel.lineColor,
                    //pixelOffset : new Cesium.Cartesian2(0, -20),
                    //eyeOffset : CTX.c(0,minHeight+maxHeight+1000,-200),
                    height: maxHeight,
                    verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                    heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND
                }
            }

            return collection.add(this.index, option);
        }
    }
}

module.exports = { Quadratic: Quadratic };