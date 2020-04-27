var { DrawObject } = require('./drawobject');
class PointO extends DrawObject{
    constructor(){
        super(1);
    }
    create(collection,points,viewModel){
        if( points && points.length && points.length >= this.minPointCount ){
            
            let distance = viewModel.size;
            points.forEach(point=>{
                collection.add(this.index,{
                    position: point,
                    ellipse: {
                        semiMinorAxis : distance,
                        semiMajorAxis : distance,
                        fill:true,
                        material: viewModel.faceColor,
                        outline:true,
                        outlineColor:viewModel.lineColor,
                        outlineWidth:viewModel.lineWidth,
                        
                        heightReference:Cesium.HeightReference.CLAMP_TO_GROUND 
                    }
                });
            });
        }
    }
}
module.exports = { PointO:PointO };