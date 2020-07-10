var { DrawObject } = require('./drawobject');
class TangentPlane extends DrawObject {
    constructor() {
        super(1);
    }
    create(layer, points, viewModel) {
        if (this.isValidPoints(points)) {
            var distance = Cesium.Cartesian3.distance(points[0], points[1]);
            //if( distance > 0 ){
            var plane1 = new Cesium.EllipsoidTangentPlane(points[0]); // default ellipsoid WGS84
            var dimensions1 = new Cesium.Cartesian2(60000.0, 60000.0);

            // My entities
            var redPlane = layer.add({
                position: points[0],
                name: 'Red plane',
                plane: {
                    plane: plane1,
                    dimensions: dimensions1,
                    material: Cesium.Color.RED.withAlpha(0.5),
                }
            });
        }
    }
}
module.exports = { TangentPlane: TangentPlane };