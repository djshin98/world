var { DrawObject } = require('./drawobject');
class Radar extends DrawObject{
    constructor(){
        super(2);
    }
    create(collection,points,viewModel){
        if( points && points.length >= this.minPointCount ){
            var distance = Cesium.Cartesian3.distance(points[0], points[points.length-1]);
            if( distance > 0 ){
                return collection.add(this.index,{
                    position: points[0],
                    ellipsoid: {
                        radii: new Cesium.Cartesian3(distance,distance,distance),
                        innerRadii: new Cesium.Cartesian3(distance/2,distance/2,distance/2),
                        /*
                        innerRadii: new Cesium.Cartesian3(distance/2,distance/2,distance/2),
                        minimumClock: 0,
                        maximumClock: 2*Cesium.Math.PI/2,
                        minimumCone:0,
                        maximumCone:Cesium.Math.PI/2,
                        heightReference:Cesium.HeightReference.RELATIVE_TO_GROUND,
                        outline:true,
                        outlineColor:viewModel.lineColor,
                        stackPartitions:64,
                        slicePartitions:64,
                        subdivisions:128,
                        */
                        stackPartitions:64,
                        slicePartitions:64,
                        subdivisions:64,
                        minimumCone:Cesium.Math.PI/4,
                        maximumCone:Cesium.Math.PI/2.5,
                        minimumClock: (2*Cesium.Math.PI)*0.125,
                        maximumClock: (2*Cesium.Math.PI)*0.375,
                        outline:true,
                        outlineColor:viewModel.lineColor,
                        material: viewModel.faceColor,
                        heightReference:Cesium.HeightReference.NONE 
                    }
                });
            }
        }
    }
}
module.exports = { Radar:Radar };