//let {Cesium} = require('cesium/Cesium');

class KMilSymbolCollection{
    constructor(viewer){
        this.viewer = viewer;
        this.entities = [];
    }
    add(cartesian, options,x){
        var obj = {
            options:options,
            image: x,
            position: cartesian,
            heightReference : Cesium.HeightReference.CLAMP_TO_GROUND,
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
            scaleByDistance: new Cesium.NearFarScalar(1.5e2, 1.5, 8.0e6, 0.0)
        };
        // new Cesium.BillboardGraphics(options)
        // new Entity( new Cesium.BillboardGraphics() )
        //billboards.add( obj );
        
        let entity = this.viewer.entities.add({
            position: cartesian,
            billboard : obj,
            description : '<img width="60px" style="float:left; margin: 0 1em 1em 0;" src="'+obj.image+'"/>\
<p>대한민국 군대 부호.</p>\
<p>부호코드 : '+obj.options.sic+' </p>\
<p>Source: <a style="color: WHITE" target="_blank" href="http://en.wikipedia.org/wiki/KMilsymbol">Wikpedia</a></p>'
        });
        this.entities.push({
            id : entity.id,
            cartesian : { x: cartesian.x, y: cartesian.y, z: cartesian.z },
            options : options
        });
    }
    open( entities ){
        this.close();
        if( entities ){
            entities.forEach(d=>{
                if( d.options.category == "KMILSYMBOL" ){
                    let cartesian = new Cesium.Cartesian3( d.cartesian.x, d.cartesian.y, d.cartesian.z );
                    let symbol = new kms.Symbol(d.options.sic, d.options);
                    let img = symbol.toDataURL();
                    this.add( cartesian, d.options , img );
                }
            });
        }
    }
    close(){
        this.removeAll();
    }
    ids(){
        return this.entities.map(d=>{
            return d.id;
        });
    }
    removeAll(){
        this.entities.forEach(d=>{
            this.viewer.entities.remove(d);
        });
        this.entities = [];
    }
    remove(id){
        let ent;
        if( this.entities.some(d=>{
            if( d.id == id ){
                ent = d;
                this.viewer.entities.remove(d);
                return true;
            }
            return false;
        })){
            this.entities = this.entities.filter(d=>{
                if( d.id == id ){
                    return false;
                }
                return true;
            });
        }
    }
};

module.exports = {
    KMilSymbolCollection:KMilSymbolCollection
}