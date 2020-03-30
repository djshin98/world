//let {Cesium} = require('cesium/Cesium');

class KMilSymbolCollection{
    constructor(map){
        this.map = map;
        this.viewer = map.viewer3d;
        this.entities = [];
    }
    add(cartesian, options,x){
        var obj = {
            options:options,
            image: x,
            position: cartesian,
            heightReference : Cesium.HeightReference.CLAMP_TO_GROUND ,
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
            scaleByDistance: new Cesium.NearFarScalar(1.5e2, 1.5, 8.0e6, 0.0)
        };
        if( options.sic[2] == 'A' ){
            //obj.eyeOffset = new Cesium.Cartesian3(0, 4000, 0);
            var c = Cesium.Cartographic.fromCartesian(cartesian);
            var longitude = c.longitude * (180/ Math.PI);
            var latitude = c.latitude * (180/ Math.PI);
            obj.heightReference = Cesium.HeightReference.NONE;
            cartesian = Cesium.Cartesian3.fromDegrees(longitude,latitude, 6000);
            let entity = this.viewer.entities.add({
                name : 'billboard_arrow',
                options:{category:"KMILSYMBOL.ARROW"},
                polyline : {
                    positions : Cesium.Cartesian3.fromDegreesArrayHeights([longitude, latitude, 0,
                        longitude, latitude, 6000]),
                    width : 10,
                    material : new Cesium.PolylineGlowMaterialProperty({
                        glowPower : 0.2,
                        taperPower : 0.5,
                        color : Cesium.Color.CORNFLOWERBLUE
                    })
                }
            });
        }else if( options.sic[2] == 'P' ){

        }
        var carto = Cesium.Cartographic.fromCartesian(cartesian, Cesium.Ellipsoid.WGS84);
        console.log( Cesium.Cartographic.fromCartesian(cartesian, Cesium.Ellipsoid.WGS84).toString() );
        let entity = this.viewer.entities.add({
            name : options.sic,
            position: cartesian,
            billboard : obj,
            description : '<img width="60px" style="float:left; margin: 0 1em 1em 0;" src="'+obj.image+'"/>\
<p>대한민국 군대 부호.</p>\
<p>부호코드 : '+obj.options.sic+' </p>\
<p>위도 : '+(carto.latitude * Cesium.Math.DEGREES_PER_RADIAN).toFixed(5)+' </p>\
<p>경도 : '+(carto.longitude * Cesium.Math.DEGREES_PER_RADIAN).toFixed(5)+' </p>\
<p>고도 : '+(carto.height).toFixed(2)+' m </p>\
<p>Source: <a style="color: WHITE" target="_blank" href="http://en.wikipedia.org/wiki/KMilsymbol">Wikpedia</a></p>'
        });
        this.entities.push({
            id : entity.id,
            cartesian : { x: cartesian.x, y: cartesian.y, z: cartesian.z },
            options : options
        });
    }
    addAir(cartesian, options,x){
        var obj = {
            options:options,
            image: x,
            position: cartesian,
            heightReference : Cesium.HeightReference.REFERENCE_TO_GROUND ,
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
            //eyeOffset : new Cartesian3(0.0, 800.0, 0.0),
            scaleByDistance: new Cesium.NearFarScalar(1.5e2, 1.5, 8.0e6, 0.0)
        };
        
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
            let cartesians = [];
            entities.forEach(d=>{
                if( d.options.category == "KMILSYMBOL" ){
                    let cartesian = new Cesium.Cartesian3( d.cartesian.x, d.cartesian.y, d.cartesian.z );
                    let symbol = new kms.Symbol(d.options.sic, d.options);
                    let img = symbol.toDataURL();
                    this.add( cartesian, d.options , img );
                    cartesians.push( cartesian );
                }
            });

            let rect = Cesium.Rectangle.fromCartesianArray( cartesians );
            this.map.oliveCamera.flyToRectangle(rect);
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