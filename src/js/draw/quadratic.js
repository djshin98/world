var { DrawObject } = require('./drawobject');
var { ParabolaUtil } = require('./util');
var { CTX } = require("../map3d/ctx");

class Quadratic extends DrawObject {
    constructor() {
        super(2);
    }
    create(collection, points, viewModel) {
        if (this.isValidPoints(points)) {
            let degrees = {
                start: CTX.c2d(points[0]),
                end: CTX.c2d(points[1])
            }
            let height = viewModel.size*100 + Math.max(degrees.start.height, degrees.end.height);
            let distrance = CTX.distanceD(degrees.start, degrees.end);
            //height = distrance / 2;
            let polylinePoints = ParabolaUtil.quadratic(degrees, 100, height, true);
            console.log("polylinePoints length : " + polylinePoints.points.length);

            let _this = this;
            var positions = [CTX.c2r(polylinePoints.center[0])];
            var promise = Cesium.sampleTerrain(collection.map.viewer3d.terrainProvider, 13, positions);
            Cesium.when(promise, function(updatedPositions) {
                let heightMeterial = _this.lineMaterial(viewModel.lineStyle, viewModel.shapeColor, viewModel.lineWidth);
                let cpts = [CTX.r2c(updatedPositions[0]), polylinePoints.center[1]];
                collection.add(_this.index, {
                    polyline: {
                        positions: cpts,
                        color: viewModel.shapeColor,
                        width: 1,
                        material: heightMeterial,
                        distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 150000)
                    }
                });
                collection.add(_this.index, {
                    position: cpts[1],
                    label: {
                        text: CTX.distance(cpts[0], cpts[1]).toFixed(1) + " m",
                        font: '20px sans-serif',
                        showBackground: true,
                        pixelOffset: new Cesium.Cartesian2(0, -20),
                        eyeOffset: new Cesium.Cartesian3(0, 0, -50),
                        fillColor: viewModel.shapeColor,
                        outlineColor: Cesium.Color.BLACK,
                        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                        distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 50000)
                    }
                });
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
                            color: viewModel.faceColor
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
            let distance = CTX.distanceD(degrees.start, degrees.end);

            let polylinePoints = ParabolaUtil.quadratic(degrees, viewModel.size, height, true);
            //console.log("polylinePoints length : " + polylinePoints.points.length);

            let heightMeterial = this.lineMaterial(viewModel.lineStyle, viewModel.frameColor, viewModel.lineWidth);

            collection.add(this.index, {
                polyline: {
                    positions: polylinePoints.center,
                    color: viewModel.frameColor,
                    width: 1,
                    material: heightMeterial,
                    distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, distance * 10)
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
                            outlineColor: viewModel.shapeColor,
                            outlineWidth: viewModel.lineWidth,
                            heightReference: Cesium.HeightReference.NODE,
                            distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, distance * 10)
                        }
                    });
                });
            } else {
                let option = {
                    positions: polylinePoints.points.reverse(),
                    color: viewModel.shapeColor,
                    width: viewModel.lineWidth,
                    material: new Cesium.PolylineGlowMaterialProperty({
                        glowPower: 0.4,
                        taperPower: 0.4,
                        color: viewModel.shapeColor
                    }),
                    distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, distrance * 10)
                };
                return collection.add(this.index, { name: name, polyline: option });
            }
        }
    }
}

module.exports = { Quadratic: Quadratic };