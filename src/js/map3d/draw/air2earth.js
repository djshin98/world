var { DrawObject } = require('./drawobject');
var { ParabolaUtil } = require('./util');

class Air2Earth extends DrawObject {
    constructor() {
        super(2);
    }
    create(collection, points, viewModel) {
        if (this.isReadyToCallbackVariable()) {
            let degrees = {
                start: CTX.c2d(points[0]),
                end: CTX.c2d(points[1])
            }
            this.templateEntity.polyline.positions = ParabolaUtil.quadraticHalf(degrees, 100, true);
        } else {
            let degrees = {
                start: CTX.c2d(points[0]),
                end: CTX.c2d(points[1])
            }
            let height = viewModel.size + Math.max(degrees.start.height, degrees.end.height);
            let distrance = CTX.distanceD(degrees.start, degrees.end);
            height = distrance / 2;
            let polylinePoints = ParabolaUtil.quadraticHalf(degrees, 100, true);

            if (viewModel.frameEnable === true) {
                polylinePoints.forEach(p => {
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
                    positions: polylinePoints.reverse(),
                    color: viewModel.lineColor,
                    width: viewModel.lineWidth,
                    material: new Cesium.PolylineGlowMaterialProperty({
                            //color: viewModel.lineColor,
                            glowPower: 0.3,
                            taperPower: 0.3,
                            color: Cesium.Color.MEDIUMTURQUOISE
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
        if (collection && Q.isValid(degrees.start) && Q.isValid(degrees.end)) {
            height = Math.max(degrees.start.height, degrees.end.height) + height;
            let distance = CTX.distanceD(degrees.start, degrees.end);

            let polylinePoints = ParabolaUtil.quadratic(degrees, viewModel.size, height, true);
            //console.log("polylinePoints length : " + polylinePoints.points.length);

            let heightMeterial = this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth);

            collection.add(this.index, {
                polyline: {
                    positions: polylinePoints.center,
                    color: viewModel.lineColor,
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
                            outlineColor: viewModel.lineColor,
                            outlineWidth: viewModel.lineWidth,
                            heightReference: Cesium.HeightReference.NODE,
                            distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, distance * 10)
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
module.exports = { Air2Earth: Air2Earth };