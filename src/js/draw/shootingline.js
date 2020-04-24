var { DrawObject } = require('./drawobject');
class ShootingLine extends DrawObject{
    constructor(){
        super(3);
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
                        //hierarchy: positionData,
                        rotation: (2*Cesium.Math.PI)*0.125,
                        stRotation: (2*Cesium.Math.PI)*0.375,
                        fill:true,
                        outline:true,
                        outlineColor:viewModel.lineColor,
                        outlineWidth:viewModel.lineWidth,
                        material: new Cesium.ColorMaterialProperty(viewModel.faceColor),
                        extrudedHeight:100,
                        heightReference:Cesium.HeightReference.RELATIVE_TO_GROUND 
                    }
                });
            }
        }
    }
}
module.exports = { ShootingLine:ShootingLine };