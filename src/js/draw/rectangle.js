var { DrawObject } = require('./drawobject');
class Rectangle extends DrawObject{
    constructor(){
        super(4);
    }
    create(collection,points,viewModel){
        if( points && points.length && points.length >= this.minPointCount ){
            var distance = Cesium.Cartesian3.distance(points[0], points[points.length-1]);
            if( distance > 0 ){
                return collection.add(this.index,{
                    position: points[0],
                    rectangle: {
                        coordinates : Cesium.Rectangle.fromCartesianArray(points),
                        height:1000,
                        extrudedHeight:1000,
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
module.exports = { Rectangle:Rectangle };