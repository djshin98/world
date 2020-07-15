"use strict";

const { CTX } = require("../map3d/ctx");
const { Plane } = require("../map3d/tangent/plane");
class OliveCollection {
    constructor(map, options) {
        this.viewer = map.viewer3d;
        this.objects = [];
        this.options = Object.assign({}, options);
    }
    getName() {
        return this.options.name;
    }
    close() {
        this.removeAll();
    }
    add(parent, options, movable) {
        if (!Q.isArray(options)) { options = [options]; }
        let entities = options.map((opt, i) => {
            let obj = {};
            opt.parent = parent;
            opt.category = this.options.name;
            if (movable === true && Q.isValid(opt.position)) {
                obj.position = opt.position;
                obj.positionCallbackProperty = () => { return obj.position; };
                opt.position = new Cesium.CallbackProperty(obj.positionCallbackProperty, false);
            }
            obj.entity = this.viewer.entities.add(new Cesium.Entity(opt));
            if (i == 0) { parent = obj.entity; }
            return obj;
        });
        this.objects.push(entities);
        return entities;
    }
    removeAll() {
        this.objects.forEach(entities => {
            entities.forEach(object => {
                this.viewer.entities.remove(object.entity);
            });
        });
        //this.viewer.entities.removeAll();
        this.objects = [];
    }
    get(id, callback) {
        if (Q.isValid(id)) {
            if (Q.isArray(id)) {
                let _entities;
                this.objects.some((entities, i) => {
                    if (entities == id) {
                        _entities = entities;
                        return true;
                    }
                    return false;
                });
                if (Q.isValid(_entities) && Q.isValid(callback)) { callback(_entities); }
                return _entities;
            } else {
                if (Q.isObject(id)) {
                    id = id.id;
                }
                let _entities, _object, index;
                this.objects.some((entities, i) => {
                    return entities.some(object => {
                        if (object.entity.id == id) {
                            _entities = entities;
                            _object = object;
                            entity = object.entity;
                            index = i;
                            return true;
                        }
                        return false;
                    });
                });
                if (Q.isValid(_entities) && Q.isValid(callback)) { callback(_entities, _object, index); }
                return _entities;
            }
        }
    }
    remove(id) {
        return this.get(id, (entities, object, index) => {
            if (Q.isValid(object)) {
                this.viewer.entities.remove(object.entity);
                entities.pop(object);
                object = null;
            } else {
                entities.forEach(obj => {
                    this.viewer.entities.remove(obj.entity);
                });
                this.objects.pop(entities);
                entities = null;
            }
        });
    }
    move(id, longitude, latitude, height) {
        this.get(id, (entities, object, index) => {
            if (!Q.isValid(object)) {
                object = entities[0];
            }
            if (Q.isValid(object.position)) {
                let n = CTX.d2c(CTX.degree(longitude, latitude, height));
                let origin = CTX.c2d(object.position);
                let dist = CTX.math.sub(n, origin);

                entities.forEach(obj => {
                    if (Q.isValid(obj.position)) {
                        obj.position = CTX.math.add(obj.position, dist);
                    }
                });
            }
        });
    }
    show(id, visible) {
        this.get(id, (entities, object, index) => {
            if (Q.isValid(object)) {
                object.entity.show = visible;
            } else {
                entities.forEach(obj => {
                    obj.entity.show = visible;
                });
            }
        });
    }
    terrianFromDegrees(degrees, callback) {
        var positions = degrees.map(d => {
            return CTX.degree(d.longitude, d.latitude);
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

module.exports = { OliveCollection: OliveCollection };