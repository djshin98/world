let { OliveEntityCollection } = require('./entity_collection');
let { CTX } = require('../map3d/ctx');

var pinBuilder = new Cesium.PinBuilder();

var PinMarkers = {
start : {name:'start',type:'text',text:'S',color:Cesium.Color.NAVY,size:48},
center : {name:'center',type:'text',text:'C',color:Cesium.Color.DARKCYAN,size:48},
end : {name:'end',type:'text',text:'E',color:Cesium.Color.RED,size:48},
via : {name:'via',type:'icon',icon:'marker',color:Cesium.Color.CHOCOLATE,size:48}
};

class DrawCollection extends OliveEntityCollection {
    constructor(map,options) {
        super(map,options);
    }
    add(cartesian, opt) {
        var point = this.viewer.entities.add({
            position : worldPosition,
            point : opt
            /*
            {
                color : _this.viewModel.shapeColor,
                pixelSize : _this.viewModel.shapeSize,
                heightReference: Cesium.HeightReference.NONE
            }*/
        });
        return point;
    }
}
module.exports = {
    DrawCollection: DrawCollection,
    PinMarkers : PinMarkers
}