var { DrawObject } = require('./drawobject');
class MilLine1 extends DrawObject{
    constructor(){
        super(2);
    }
    create(collection,points,viewModel){
        if( points && points.length >= this.minPointCount ){
            let option = {
                positions : points,
                clampToGround : true,
                color : viewModel.faceColor,
                width : viewModel.lineWidth,
                fill : true,
                outline : true,
                outlineWidth : 3,
                outlineColor : viewModel.lineColor,
                cornerType: Cesium.CornerType.ROUNDED,
                classificationType : Cesium.ClassificationType.TERRAIN
            };

            if( viewModel.lineStyle != "line"){
                option.material = new Cesium.PolylineDashMaterialProperty({
                    color : viewModel.faceColor,
                    dashPattern: this.dashPatternFromString(viewModel.lineStyle,viewModel.lineWidth)
                });
            }else{
                option.material = new Cesium.ColorMaterialProperty(viewModel.faceColor);
            }
            return collection.add(this.index,{
                corridor : option
            });
        }
    }
}
module.exports = { MilLine1:MilLine1 };