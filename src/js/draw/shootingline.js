var { DrawObject } = require('./drawobject');
var { ArcUtil } = require('./util');
var { CTX } = require('../map3d/ctx');

class ShootingLine extends DrawObject {
    constructor() {
        super(3, 3);
    }
    create(collection, points, viewModel) {
        let p = points;


        if (this.isReadyToCallbackVariable()) {

            let result = [p[0]].concat(ArcUtil.arcPoints2c(p[0], p[1], p[2], CTX.θ(p[0], p[1], p[2])));
            // p[0] , p[1] 거리 --> 픽셀 거리 / 5 = 쪼개지는 갯수 
            // p[2] , p[0] 거리 --> 픽셀 거리 / 5 = 쪼개지는 갯수 
            result = result.concat([p[0], p[1]]);

            if (Q.isArray(this.templateEntity)) { //8
                this.templateEntity.forEach((ent, i) => {
                    collection.remove(ent);
                });

                this.templateEntity = result.map(p => { //4
                    return collection.add(this.index, {
                        position: this.callbackValue(p),
                        point: {
                            pixelSize: 2,
                            //fill: true,
                            material: this.callbackColor("faceColor", viewModel),
                            outline: true,
                            outlineColor: viewModel.lineColor,
                            outlineWidth: viewModel.lineWidth,
                            heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
                        }
                    });
                });

            }

        } else {
            let result = [p[0]].concat(ArcUtil.arcPoints2c(p[0], p[1], p[2], CTX.θ(p[0], p[1], p[2])));
            result = result.concat([p[0], p[1]]);

            if (this.isComplete()) {
                return collection.add(this.index, {
                    position: points[0],
                    polyline: {
                        positions: this.callbackValue(result),
                        clampToGround: true,
                        width: viewModel.lineWidth,
                        material: this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth)
                    }
                });
            } else {
                return result.map(p => { //4
                    return collection.add(this.index, {
                        position: this.callbackValue(p),
                        point: {
                            pixelSize: 2,
                            //fill: true,
                            material: this.callbackColor("faceColor", viewModel),
                            outline: true,
                            outlineColor: viewModel.lineColor,
                            outlineWidth: viewModel.lineWidth,
                            heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
                        }
                    });
                });
            }

        }
    }
}
module.exports = { ShootingLine: ShootingLine };