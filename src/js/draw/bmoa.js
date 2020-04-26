var { DrawObject } = require('./drawobject');
class Bmoa extends DrawObject{
    constructor(){
        super(2);
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
                        fill:true,
                        outline:true,
                        //height : 0,
                        outlineColor:viewModel.lineColor,
                        outlineWidth:viewModel.lineWidth,
                        material: viewModel.faceColor,
                        heightReference:Cesium.HeightReference.CLAMP_TO_GROUND 
                    },
                    label: {
                        text : "라벨",
                        fillColor : viewModel.lineColor,
                        eyeOffset : CTX.c(0,0,-2000),
                        verticalOrigin : Cesium.VerticalOrigin.BOTTOM,	
                        heightReference:Cesium.HeightReference.CLAMP_TO_GROUND 
                    }
                });
            }
        }
    }
    type1(collection,point,distance,viewModel){
        point = CTX.d2c(point);
        viewModel = Object.assign({
            faceColor: Cesium.Color.WHITE,
            faceTransparent: 0.6,
            lineColor: Cesium.Color.YELLOW,
            lineTransparent: 0.6},viewModel);

        if( viewModel.faceColor && typeof(viewModel.faceColor) == "string"){
            viewModel.faceColor = Cesium.Color.fromCssColorString(viewModel.faceColor);
        }
        if( viewModel.faceTransparent ){
            viewModel.faceColor = viewModel.faceColor.withAlpha(viewModel.faceTransparent);
        }

        if( viewModel.lineColor && typeof(viewModel.lineColor) == "string"){
            viewModel.lineColor = Cesium.Color.fromCssColorString(viewModel.lineColor);
        }
        if( viewModel.lineTransparent ){
            viewModel.lineColor = viewModel.lineColor.withAlpha(viewModel.lineTransparent);
        }
        
        let option = {
            position: point,
            ellipse: {
                semiMinorAxis : distance,
                semiMajorAxis : distance,
                fill:true,
                material: viewModel.faceColor,
                heightReference:Cesium.HeightReference.CLAMP_TO_GROUND 
            }
        };

        if( viewModel.text ){
            option.label = {
                text : viewModel.text,
                fillColor : viewModel.lineColor,
                eyeOffset : CTX.c(0,0,-2000),
                verticalOrigin : Cesium.VerticalOrigin.BOTTOM,	
                heightReference:Cesium.HeightReference.CLAMP_TO_GROUND 
            }
        }

        return collection.add(this.index,option);
    }
}
module.exports = { Bmoa:Bmoa };