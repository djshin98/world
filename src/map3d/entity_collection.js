
class OliveEntityCollection{
    constructor(map){
        this.map = map;
        this.viewer = map.viewer3d;
        
    }
    entities(){
        return this.viewer.entities.values;
    }
    close(){
        this.removeAll();
    }
    ids(){
        return this.viewer.entities.values.map(d=>{
            return d.id;
        });
    }
    removeAll(){
        this.viewer.entities.removeAll();
    }
    get(id){ 
        return this.viewer.entities.values.find((entity)=>{ return entity.id == id ? true : false; } ); 
    }
    remove(id){
        removeEntity(this.get(id));
    }
    removeEntity(entity,callback){
        if( entity ){
            let _this = this;
            this.viewer.entities.remove(entity);
            if( entity.subEntites ){
                entity.subEntites.forEach(d=>{
                    let subent = this.get(d);
                    removeEntity(subent,callback?callback.call(_this,subent):undefined);
                });
            }
            !callback || callback.call(this,entity);
        }
    }
    move(id, longitude, latitude , height ){
        let entity = this.get(id);
        if( entity ){
            entity.position = Cesium.Cartesian3.fromDegrees(longitude,latitude, height);
            if( entity.subEntites ){
                let _this = this;
                entity.subEntites.forEach(d=>{
                    let sub = _this.get(d);
                    if( sub ){
                        if( sub.name && sub.name == "billboard_arrow" ){
                            sub.polyline.positions = Cesium.Cartesian3.fromDegreesArrayHeights([longitude, latitude, 0,longitude, latitude, height]);
                        }    
                    } 
                });
            }
        }
    }
}

module.exports = {OliveEntityCollection:OliveEntityCollection};