var { DrawObject } = require('./drawobject');
var { ParabolaUtil } = require('./util');
var { CTX } = require("../ctx");

class Quadratic extends DrawObject {
    constructor() {
        super(2, 2);
    }
    create(layer, points, viewModel) {

        let degrees = {
            start: CTX.c2d(points[0]),
            end: CTX.c2d(points[1])
        }
        let height = viewModel.size * 100 + Math.max(degrees.start.height, degrees.end.height);
        let distrance = CTX.distanceD(degrees.start, degrees.end);
        //height = distrance / 2;
        let polylinePoints = ParabolaUtil.quadratic(degrees, 100, height, true);

        if (this.isReadyToCallbackVariable()) {
            this.removeTemplateEntity(layer);
            let entities = polylinePoints.points.map(p => {
                return {
                    position: p,
                    point: {
                        pixelSize: viewModel.shapeSize,
                        //fill: true,
                        material: this.callbackColor("faceColor", viewModel),
                        outline: true,
                        outlineColor: viewModel.lineColor,
                        outlineWidth: 1,
                        heightReference: Cesium.HeightReference.NODE
                    }
                };
            });
            this.templateEntity = layer.add(entities);
        } else {

            //console.log("polylinePoints length : " + polylinePoints.points.length);
            if (this.isComplete()) {
                let _this = this;
                var positions = [CTX.c2r(polylinePoints.center[0])];
                var promise = Cesium.sampleTerrain(layer.getTerrianProvider(), 13, positions);
                Cesium.when(promise, function(updatedPositions) {
                    let heightMeterial = _this.lineMaterial(viewModel.lineStyle, viewModel.shapeColor, viewModel.lineWidth);
                    let cpts = [CTX.r2c(updatedPositions[0]), polylinePoints.center[1]];
                    layer.add({
                        polyline: {
                            positions: cpts,
                            color: viewModel.shapeColor,
                            width: 1,
                            material: heightMeterial,
                            distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 150000)
                        }
                    });
                    layer.add({
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

                let option = {
                    positions: polylinePoints.points.reverse(),
                    color: viewModel.shapeColor,
                    width: viewModel.lineWidth,
                    material: new Cesium.PolylineGlowMaterialProperty({
                        glowPower: 0.4,
                        taperPower: 0.4,
                        color: viewModel.shapeColor
                    }),
                    //distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, distrance * 10)
                };
                return layer.add({ name: name, polyline: option });
            }
            return [];
        }
    }

    type1(layer, name, degrees, height, viewModel) {
        viewModel = Object.assign({
            size: 100,
            lineStyle: "dot",
            lineColor: Cesium.Color.LIGHTYELLOW,
            lineWidth: 5,
            frameEnable: false
        }, viewModel);
        if (layer && Q.isValid(degrees.start) && Q.isValid(degrees.end)) {
            height = Math.max(degrees.start.height, degrees.end.height) + height;
            let distance = CTX.distanceD(degrees.start, degrees.end);

            let polylinePoints = ParabolaUtil.quadratic(degrees, viewModel.size, height, true);
            //console.log("polylinePoints length : " + polylinePoints.points.length);

            let heightMeterial = this.lineMaterial(viewModel.lineStyle, viewModel.frameColor, viewModel.lineWidth);

            layer.add({
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
                    layer.add({
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
                return layer.add({ name: name, polyline: option });
            }
        }
    }
}

module.exports = { Quadratic: Quadratic };