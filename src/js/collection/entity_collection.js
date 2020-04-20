
class OliveEntityCollection { 
    constructor(map, options) {
        this.name = options.name;
        this.map = map;
        this.viewer = map.viewer3d;
        this.objects = [];
        this.options = Object.assign({}, options);
    }
    entities() {
        return this.objects;
    }
    close() {
        this.removeAll();
    }
    ids() {
        return this.entities.values.map(d => {
            return d.id;
        });
    }
    addCompositedEntity(opt,mainObject,subObjects){
        Object.keys(mainObject).some(key=>{
            opt[key] = mainObject[key];
            return true;
        });
        let entity = this.addEntity(opt);
        
        let _this = this;
        if( Cesium.defined(entity) ){
            //let subOption = {position:opt.position,parent:entity,polyline:subObjects[0].polyline};
            //subOption[key] = sub[key];
            //_this.viewer.entities.add(new Cesium.Entity(subOption)); 
            
            subObjects.forEach(sub=>{
                Object.keys(sub).every(key=>{
                    let subOption = {position:opt.position,parent:entity};
                    subOption[key] = sub[key];
                    let subEntity = _this.viewer.entities.add(new Cesium.Entity(subOption)); 
                    subEntity.category = _this.name;
                    return true;
                });
            });
        }
        return entity;
    }
    addEntity(opt) {
        let entity = this.viewer.entities.add(new Cesium.Entity(opt)); 
        entity.category = this.name;
        this.objects.push({
            id: entity.id,
            degree: opt.degree,
            options: opt.olive_option
        });
        return entity;
    }
    removeAll() {
        let _this = this;
        this.objects.forEach(entity=>{
            _this.viewer.entities.remove( _this.viewer.entities.getById(entity.id));
        });
        this.objects = [];
    }
    get(id) {
        return this.viewer.entities.values.find((entity) => { return entity.id == id ? true : false; });
    }
    remove(id) {
        var _this = this;
        this._removeEntity(this.get(id), entity => {
            let fi = _this.objects.findIndex(d => { return entity.id == d.id ? true : false; });
            if (fi >= 0) {
                let removeEnt = this.objects.splice(fi, 1);
                if (removeEnt) {
                    if (_this.options.onRemove) {
                        _this.options.onRemove(entity, {
                            category: entity.category,
                            longitude: longitude,
                            latitude: latitude,
                            height: height
                        });
                    }
                }
            }
            let subs = _this.viewer.entities.values.filter(e=>{ 
                return (e.parent && e.parent.id == entity.id && e.category && e.category == _this.name)?true:false });
            subs.forEach(e=>{ _this.viewer.entities.remove(e); console.log( "remove sub : " + e.id ); });
        });
    }
    _removeEntity(entity, callback) {
        if (entity) {
            let _this = this;
            this.viewer.entities.remove(entity);
            !callback || callback.call(this, entity);
        }
    }
    move(id, longitude, latitude, height) {
        let entity = this.get(id);
        if (entity) {
            entity.position = CTX.cartesian(longitude, latitude, height);
            let fi = this.objects.findIndex(d => { return entity.id == d.id ? true : false; });
            if (fi >= 0) {
                this.objects[fi].degree.longitude = longitude;
                this.objects[fi].degree.latitude = latitude;
                this.objects[fi].degree.height = height;
            }
            if (this.options.onMove) {
                this.options.onMove(entity, {
                    parent: undefined,
                    category: entity.options.category,
                    longitude: longitude,
                    latitude: latitude,
                    height: height
                });
            }
        }
    }
    open(entities) {

    }
    terrianFromDegrees(degrees,callback){
        var positions = degrees.map(d=>{
            return CTX.degree(d.longitude,d.latitude);
        });
        var promise = Cesium.sampleTerrainMostDetailed(this.viewer.terrainProvider, positions);
        Cesium.when(promise, function(updatedPositions) {
            // ★ Correct value is about 25.3 meters.
            // ★ However, console shows 68.71596342427405.
            console.log(positions[0].height);
            callback(positions);
        });
    }
}

module.exports = { OliveEntityCollection: OliveEntityCollection };