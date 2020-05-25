var { DrawObject } = require('./drawobject');
var { ArcUtil } = require('./util');
var { CTX } = require('../map3d/ctx');

class DrawModel extends DrawObject {
    constructor() {
        super(1);
    }
    create(collection, points, viewModel) {
        if (this.isValidPoints(points)) {
            return collection.add(this.index, {
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