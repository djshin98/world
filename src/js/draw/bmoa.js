var { DrawObject } = require('./drawobject');
class Bmoa extends DrawObject {
    constructor() {
        super(2);
    }
    create(collection, points, viewModel) {
        if (this.isValidPoints(points)) {
            var distance = Cesium.Cartesian3.distance(points[0], points[points.length - 1]);
            if (distance > 0) {
                return collection.add(this.index, {
                    position: points[0],
                    ellipse: {
                        semiMinorAxis: distance,
                        semiMajorAxis: distance,
                        fill: true,
                        outline: true,
                        //height : 0,
                        outlineColor: viewModel.lineColor,
                        outlineWidth: viewModel.lineWidth,
                        material: viewModel.faceColor,
                        heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
                    },
                    label: {
                        text: "라벨",
                        fillColor: viewModel.lineColor,
                        eyeOffset: CTX.c(0, 0, -2000),
                        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                        heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
                    }
                });
            }
        }
    }
    type1(collection, name, lnglat, distance, _viewModel) {
        lnglat.height = 0;
        let point = CTX.d2c(lnglat);
        let viewModel = this.setViewModel({
            faceColor: Cesium.Color.BLUE,
            faceTransparent: 0.6,
            lineColor: Cesium.Color.YELLOW,
            lineTransparent: 0.6
        }, Cesium.defined(_viewModel) ? _viewModel : {});

        let option = {
            position: point,
            name: name,
            description: this.callbackDescirption(lnglat, { name: name }, []),
            ellipse: {
                semiMinorAxis: distance,
                semiMajorAxis: distance,
                fill: true,
                material: viewModel.faceColor,
                heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
            }
        };

        if (Cesium.defined(name) && name.length > 0) {
            option.label = {
                text: name,
                fillColor: viewModel.lineColor,
                eyeOffset: CTX.c(0, 0, -2000),
                verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
            }
        }
        return collection.add(this.index, option);
    }
}
module.exports = { Bmoa: Bmoa };