var { DrawObject } = require('./drawobject');
var { ArcUtil } = require('./util');
var { CTX } = require('../ctx');

class DrawModel extends DrawObject {
    constructor() {
        super(1);
    }
    create(layer, points, viewModel) {
        if (this.isValidPoints(points)) {
            return layer.add({
                position: points[0],
                model: {
                    uri: viewModel.uri,
                    heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
                }
            });

        }
    }
}
module.exports = { DrawModel: DrawModel };