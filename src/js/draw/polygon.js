var { DrawObject } = require('./drawobject');
class Polygon extends DrawObject{
    constructor(){
        super(3);
    }
    create(collection,points,viewModel){
        if( points && points.length >= this.minPointCount ){
            return collection.add(this.index,{
                polygon: {
                    hierarchy: points,
                    material: new Cesium.ColorMaterialProperty(viewModel.faceColor)
                }
            });
        }
    }
}
module.exports = { Polygon:Polygon };