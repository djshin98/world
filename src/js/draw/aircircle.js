var { DrawObject } = require('./drawobject');
class AirCircle extends DrawObject{
    constructor(){
        super(2);
    }
    create(collection,points,viewModel){
        if( points && points.length && points.length >= this.minPointCount ){
            var distance = Cesium.Cartesian3.distance(points[0], points[points.length-1]);
            if( distance > 0 ){
                
                return collection.add(this.index,{
                    position: points[0],
                    ellipse: {
                        semiMinorAxis : distance,
                        semiMajorAxis : distance,
                        fill:true,
                        outline:true,
                        outlineColor:viewModel.lineColor,
                        outlineWidth:viewModel.lineWidth,
                        material: new Cesium.ColorMaterialProperty(viewModel.faceColor),
                        height:1000,
                        extrudedHeight:3000,
                        extrudedHeightReference: Cesium.HeightReference.NONE,
                        heightReference: Cesium.HeightReference.NONE 
                    }
                });
            }
        }
    }
    type1(collection,name,lnglat,radus,minHeight,maxHeight,_viewModel){
        if( collection ){
            lnglat.height = minHeight;
            let point = CTX.d2c(lnglat);
            let viewModel = this.setViewModel({
                faceColor: Cesium.Color.WHITE,
                faceTransparent: 0.6,
                lineColor: Cesium.Color.YELLOW,
                lineTransparent: 0.6}, _viewModel);

            return collection.add(this.index,{
                position: point,
                name:name,
                description:this.callbackDescirption(lnglat,{name:name},[]),
                ellipse: {
                    semiMinorAxis : radus,
                    semiMajorAxis : radus,
                    fill:true,
                    outline:true,
                    outlineColor:viewModel.lineColor,
                    outlineWidth:viewModel.lineWidth,
                    material: viewModel.faceColor,
                    height:minHeight,
                    extrudedHeight:minHeight+maxHeight+1000,
                    extrudedHeightReference: Cesium.HeightReference.RELATIVE_TO_GROUND,
                    heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND 
                }
            });
        }
    }
}
module.exports = { AirCircle:AirCircle };