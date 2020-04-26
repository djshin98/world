var { DrawObject } = require('./drawobject');
class MilLine1 extends DrawObject{
    constructor(){
        super(2);
    }
    create(collection,points,viewModel){
        if( points && points.length >= this.minPointCount ){
            collection.add(this.index,{
                polyline : {
                    positions : points,
                    clampToGround : true,
                    material : viewModel.frameColor,
                    width : 3,
                }
            });

            let option = {
                positions : points,
                clampToGround : true,
                color : viewModel.faceColor,
                width : viewModel.lineWidth,
                cornerType: Cesium.CornerType.ROUNDED
            };

            option.material = new Cesium.ColorMaterialProperty(viewModel.faceColor);
            
            collection.add(this.index,{
                polyline : option
            });

            option.width = viewModel.lineWidth*2;
            if( viewModel.lineStyle != "line"){
                option.material = new Cesium.PolylineDashMaterialProperty({
                    color : viewModel.lineColor,
                    dashPattern: this.dashPatternFromString(viewModel.lineStyle,viewModel.lineWidth)
                });
            }else{
                option.material = viewModel.lineColor;
            }

            return collection.add(this.index,{
                polyline : option
            });

        }
    }
}
module.exports = { MilLine1:MilLine1 };