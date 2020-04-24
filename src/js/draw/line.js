var { DrawObject } = require('./drawobject');
class Line extends DrawObject{
    constructor(){
        super(2);
    }
    create(collection,points,viewModel){
        if( points && points.length >= this.minPointCount ){
            let option = {
                positions : points,
                clampToGround : true,
                color : viewModel.lineColor,
                width : viewModel.lineWidth
            };
            if( viewModel.lineStyle != "line"){
                option.material = new Cesium.PolylineDashMaterialProperty({
                    color : viewModel.lineColor,
                    dashPattern: this.dashPatternFromString(viewModel.lineStyle,viewModel.lineWidth)
                });
            }
            return collection.add(this.index,{
                polyline : option
            });
        }
    }
}
module.exports = { Line:Line };