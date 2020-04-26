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
    createType(collection,point,radus,minHeight,maxHeight,viewModel){
        if( collection ){
            return collection.add(this.index,{
                position: points[0],
                ellipse: {
                    semiMinorAxis : distance,
                    semiMajorAxis : distance,
                    fill:true,
                    outline:true,
                    outlineColor:viewModel.lineColor,
                    outlineWidth:viewModel.lineWidth,
                    material: viewModel.faceColor,
                    height:1000,
                    extrudedHeight:3000,
                    extrudedHeightReference: Cesium.HeightReference.NONE,
                    heightReference: Cesium.HeightReference.NONE 
                }
            });
        }
    }
}
module.exports = { AirCircle:AirCircle };