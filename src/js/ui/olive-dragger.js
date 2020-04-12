if( !Cesium.defined($) ){
    alert('jquery unsupported in OliveDragger');
}
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
                    let kMilSymbolCollection = this.map.collection("KMILSYMBOL");
                    kMilSymbolCollection.add( CTX.w2d(pos.x,pos.y) , options);
                }
                break;
                case "MARKER":{
                    let markerCollection = this.map.collection("MARKER");
                    markerCollection.add( CTX.w2d(pos.x,pos.y) , options );
                }
                break;
            }
        }
    }
}

module.exports = { OliveDragger : OliveDragger };
