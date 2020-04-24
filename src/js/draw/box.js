var { DrawObject } = require('./drawobject');
class Box extends DrawObject{
    constructor(){
        super(4);
    }
    create(collection,points,viewModel){
        if( points && points.length && points.length >= this.minPointCount ){
            var distance = Cesium.Cartesian3.distance(points[0], points[points.length-1]);
            if( distance > 0 ){
                return collection.add(this.index,{
                    position: points[0],
                    box: {
                        dimensions : new Cesium.ConstantProperty(new Cesium.Cartesian3(1500, 1500, 1500)),
                        fill:true,
                        outline:true,
                        outlineColor:viewModel.lineColor,
                        outlineWidth:viewModel.lineWidth, 
                        material: new Cesium.ColorMaterialProperty(viewModel.faceColor),
                        heightReference:Cesium.HeightReference.NONE 
                    }
                });
            }
        }
    }
}
module.exports = { Box:Box };