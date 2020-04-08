class OliveDragger{
    constructor(app){
        this.map = app.map;
        this.app = app;
    }
    enter(event){
        event.preventDefault();
        return true;
    }
    over(event){
        event.preventDefault();
    }
    drag(event){
        event.dataTransfer.setData("option", event.target.getAttribute("data-option"));
    }
    drop(event){
        let mpos = $("#"+this.map.getId()).position();
        let moffset = $("#"+this.map.getId()).offset();

        let pos = { x : event.clientX - (mpos.left + moffset.left) , y : event.clientY - (mpos.top + moffset.top) };

        var options = JSON.parse(decodeURIComponent(event.dataTransfer.getData("option")));
        if( Cesium.defined(options) && Cesium.defined(options.category) ){
            switch(options.category){
                case "KMILSYMBOL":{
                    let kMilSymbolCollection = this.app.getCollection("KMILSYMBOL");
    
                    var cartesian = this.map.viewOption.baseLayerPicker ? this.map.viewer3d.scene.pickPosition(new Cesium.Cartesian2(pos.x, pos.y)) :
                        this.map.viewer3d.camera.pickEllipsoid(new Cesium.Cartesian3(pos.x, pos.y), this.map.viewer3d.scene.globe.ellipsoid);
                    
                    kMilSymbolCollection.add(cartesian, options);
                }
                break;
                case "MARKER":{
                    let markerCollection = this.app.getCollection("MARKER");
                    var cartesian = this.map.viewOption.baseLayerPicker ? this.map.viewer3d.scene.pickPosition(new Cesium.Cartesian2(pos.x, pos.y)) :
                        this.map.viewer3d.camera.pickEllipsoid(new Cesium.Cartesian3(pos.x, pos.y), this.map.viewer3d.scene.globe.ellipsoid);

                    markerCollection.add( cartesian , options );
                }
                break;
            }
        }
    }
}

module.exports = { OliveDragger : OliveDragger };
