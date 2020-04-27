var { DrawObject } = require('./drawobject');
class ImageLine extends DrawObject{
    constructor(){
        super(1);
    }
    pin(drawLength){
        return {name:'image',type:'image',url: "img/maki/marker.png",color:Cesium.Color.NAVY,size:48};
    }
    create(collection,points,viewModel){
        if( points && points.length >= this.minPointCount ){
            let option = {
                positions : points,
                clampToGround : true,
                //color : viewModel.lineColor,
                width : viewModel.lineWidth,
                //fill:true,
                //loop : true,
                material: new Cesium.ImageMaterialProperty({
                    image : viewModel.image,
                    repeat : new Cesium.Cartesian2(10.0, 1.0)
                })
            };
            /*
            if( viewModel.lineStyle != "line"){
                option.material = new Cesium.PolylineDashMaterialProperty({
                    color : viewModel.lineColor,
                    dashPattern: this.dashPatternFromString(viewModel.lineStyle,viewModel.lineWidth)
                });
            }else{
                option.material = new Cesium.ColorMaterialProperty(viewModel.lineColor);
            }*/
            return collection.add(this.index,{
                polyline : option
            });
        }
        

    }
}
module.exports = { ImageLine:ImageLine };