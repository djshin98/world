var { DrawObject } = require('./drawobject');
class AirCircle extends DrawObject {
    constructor() {
        super(2,2);
    }
    create(collection, points, viewModel) {
            var distance = Cesium.Cartesian3.distance(points[0], points[points.length - 1]);
            if (distance > 0) {
                if(this.isReadyToCallbackVariable()) {
                    this.templateEntity.ellipse.semiMinorAxis = distance;
                    this.templateEntity.ellipse.semiMajorAxis = distance;
                } else {
                    return collection.add(this.index, {
                        position: points[0],
                        ellipse: {
                            semiMinorAxis: this.callbackValue(distance),
                            semiMajorAxis: this.callbackValue(distance),
                            fill: true,
                            outline: true,
                            outlineColor: viewModel.lineColor,
                            outlineWidth: viewModel.lineWidth,
                            material: this.callbackColor("faceColor", viewModel),
                            height: viewModel.size * 1000,
                            extrudedHeight: viewModel.shapeSize * 1000,
                            extrudedHeightReference: Cesium.HeightReference.NONE ,
                            heightReference: Cesium.HeightReference.NONE 
                        }
                    });
                }
             }        
        }
    type1(collection, name, lnglat, radus, minHeight, maxHeight, _viewModel) {
        if (collection) {
            lnglat.height = minHeight;
            let point = CTX.d2c(lnglat);
            let viewModel = this.setViewModel({
                faceColor: Cesium.Color.WHITE,
                faceTransparent: 0.6,
                lineColor: Cesium.Color.YELLOW,
                lineTransparent: 0.6
            }, _viewModel);

            let option = {
                position: point,
                name: name,
                description: this.callbackDescirption(lnglat, { name: name }, []),
                ellipse: {
                    semiMinorAxis: radus,
                    semiMajorAxis: radus,
                    fill: true,
                    outline: true,
                    outlineColor: viewModel.lineColor,
                    outlineWidth: viewModel.lineWidth,
                    material: viewModel.faceColor,
                    height: minHeight,
                    extrudedHeight: minHeight + maxHeight + 1000,
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
                    verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                    heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND
                }
            }

            return collection.add(this.index, option);
        }
    }
}
module.exports = { AirCircle: AirCircle };