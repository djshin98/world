
class OliveEntityCollection {
    constructor(map, options) {
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
        return this.viewer.entities.values.map(d => {
            return d.id;
        });
    }
    addEntity(opt) {
        let entity = this.viewer.entities.add(opt);
        this.objects.push({
            id: entity.id,
            cartesian: opt.position,
            options: opt.billboard.options
        });
        return entity;
    }
    removeAll() {
        this.viewer.entities.removeAll();
        this.objects = [];
    }
    removeCollection() {
        this.objects = [];
        // this.objects = [];
    }
    get(id) {
        return this.viewer.entities.values.find((entity) => { return entity.id == id ? true : false; });
    }
    remove(id) {
        this._removeEntity(this.get(id), entity => {
            let fi = this.objects.findIndex(d => { return entity.id == d.id ? true : false; });
            if (fi >= 0) {
                let removeEnt = this.objects.splice(fi, 1);
                if (removeEnt) {
                    if (_this.options.onRemove) {
                        _this.options.onRemove(entity, {
                            parent: entity,
                            category: sub.options.category,
                            longitude: longitude,
                            latitude: latitude,
                            height: height
                        });
                    }
                }
            }
        });
    }
    _removeEntity(entity, callback) {
        if (entity) {
            let _this = this;
            this.viewer.entities.remove(entity);
            if (entity.subEntites) {
                entity.subEntites.forEach(d => {
                    let subent = this.get(d);
                    let fi = this.objects.findIndex(d => { return entity.id == d.id ? true : false; });
                    if (fi >= 0) {
                        let removeEnt = this.objects.splice(fi, 1);
                        if (removeEnt) {
                            if (_this.options.onRemove) {
                                _this.options.onRemove(entity, {
                                    parent: entity,
                                    category: sub.options.category,
                                    longitude: longitude,
                                    latitude: latitude,
                                    height: height
                                });
                            }
                        }
                    }
                    this._removeEntity(subent, callback ? callback.call(_this, subent) : undefined);
                });
            }
            !callback || callback.call(this, entity);
        }
    }
    move(id, longitude, latitude, height) {
        let entity = this.get(id);
        if (entity) {
            entity.position = Cesium.Cartesian3.fromDegrees(longitude, latitude, height);
            if (entity.subEntites) {
                let _this = this;
                entity.subEntites.forEach(d => {
                    let sub = _this.get(d);
                    if (sub) {
                        if (_this.options.onMove) {
                            _this.options.onMove(sub, {
                                parent: entity,
                                category: sub.options.category,
                                longitude: longitude,
                                latitude: latitude,
                                height: height
                            });
                        }
                        if (sub.options.category == "KMILSYMBOL.ARROW") {
                            sub.polyline.positions = Cesium.Cartesian3.fromDegreesArrayHeights([longitude, latitude, 0, longitude, latitude, height]);
                        }
                    }
                });
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
}

module.exports = { OliveEntityCollection: OliveEntityCollection };