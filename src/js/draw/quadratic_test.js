var { DrawObject } = require('./drawobject');
var { ParabolaUtil } = require('./util');
var { CTX } = require("../map3d/ctx");

class QuadraticTest extends DrawObject {
    constructor() {
        super(2);
    }
    create(collection, points, viewModel) {
        if (this.isValidPoints(points)) {
            let degrees = {
                start: CTX.c2d(points[0]),
                end: CTX.c2d(points[1])
            }
            let v1 = Cesium.Cartesian3.subtract(points[1], points[0], {});
            let p2_carto = CTX.c2r(points[0]);
            p2_carto.height += 1000;
            let v2 = CTX.r2c(p2_carto);
            v2 = Cesium.Cartesian3.subtract(v2, points[0], {});

            let normal_dir = Cesium.Cartesian3.cross(v1, v2, {});
            Cesium.Cartesian3.normalize(normal_dir, normal_dir);

            for (let i = 0; i < 10000; i++) {
                let add_dir = Object.assign({}, normal_dir);
                add_dir.x *= i;
                add_dir.y *= i;
                add_dir.z *= i;

                let p1 = Cesium.Cartesian3.add(points[0], add_dir, {});
                let p2 = Cesium.Cartesian3.add(points[1], add_dir, {});
                degrees = {
                    start: CTX.c2d(p1),
                    end: CTX.c2d(p2)
                }


                let height = viewModel.size + Math.max(degrees.start.height, degrees.end.height);
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
                    /*
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
                    */
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
                    collection.add(this.index, { polyline: option });
                }
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

module.exports = { QuadraticTest: QuadraticTest };