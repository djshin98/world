const { IxDatabase } = require('../../../indexeddb/db');
class LayerGroup {
    constructor(filename, group, editable) {
        this.fileName = filename;
        this.group = group;
        this.editable = editable;
        this.db = new IxDatabase(1);
        this.list = [];
    }
    create(map, filename, group, json) {
        console.warn("unsupported layergroup : " + this.constructor.name);
    }
    get(name) {
        return this.list.find((layer) => { return layer.name === name ? true : false; });
    }
    getIndex(name) {
        let index = -1;
        this.list.some((layer, i) => { if (layer.name === name) { index = i; return true; } return false; });
        return index;
    }
    focus(name, callback) {
        if (editable) {
            let layer = this.get(name);
            if (Q.isValid(layer)) {
                this.list.forEach((l) => { l.focus = false; });
                layer.focus = true;
                if (Q.isValid(callback)) { callback(layer.json()); }
            }
        }
    }
    put(map, json, callback) {
        let layer = this.get(name);
        if (Q.isValid(layer)) {
            layer.update(json);
            if (Q.isValid(callback)) { callback(layer.json()); }
        } else {
            layer = this.create(map, filename, group, json);
            if (Q.isValid(layer)) {
                this.list.push(layer);
                if (Q.isValid(callback)) { callback(layer.json()); }
            }
        }
    }
    rename(newName, oldName, callback) {
        let layer = this.get(oldName);
        if (Q.isValid(layer)) {
            layer.name = newName;
            if (Q.isValid(callback)) { callback(layer.json()); }
        }
    }
    delete(name, callback) {
        let layer = this.get(name);
        if (Q.isValid(layer)) {
            this.list = this.list.filter((l) => { return l.name === name ? false : true; });
            if (Q.isValid(callback)) { callback(layer.json()); }
            layer.remove();
            layer = null;
        }
    }
    clear(name, callback) {
        let layer = this.get(name);
        if (Q.isValid(layer)) {
            layer.clear();
            if (Q.isValid(callback)) { callback(layer.json()); }
        }
    }
    _url(name) {
        return this.fileName + "." + this.group + "." + name;
    }
    save(name, callback) {
        let layer = this.get(name);
        if (Q.isValid(layer)) {
            this.db.set("layer", this._url(name), layer.json());
            if (Q.isValid(callback)) { callback(layer.json()); }
        }
    }
    load(name, callback) {
        let layer = this.get(name);
        if (Q.isValid(layer)) {
            this.db.get("layer", this._url(name), (result) => {
                if (result && result.value) {
                    let json = result.value;
                    layer.load(json);
                    if (Q.isValid(callback)) { callback(layer.json()); }
                }
            });
        } else {
            this.db.get("layer", this._url(name), (result) => {
                if (result && result.value) {
                    let json = result.value;
                    this.put(json, callback);
                }
            });
        }
    }
    copy(name) {

    }
    paste() {

    }
    raise(name) {
        let index = this.getIndex(name);
        if (index > 0 && this.list.length > 1) {
            let layers = this.list.splice(index, 1);
            this.list.splice(index - 1, 0, layers[0]);
        }
    }
    lower(name) {
        let index = this.getIndex(name);
        if (index >= 0 && this.list.length > 1 && index < (this.list.length - 1)) {
            let layers = this.list.splice(index, 1);
            this.list.splice(index + 1, 0, layers[0]);
        }
    }
    toTop(name) {
        let index = this.getIndex(name);
        if (index > 0 && this.list.length > 1) {
            let layers = this.list.splice(index, 1);
            this.list.splice(0, 0, layers[0]);
        }
    }
    toBottom(name) {
        let index = this.getIndex(name);
        if (index > 0 && this.list.length > 1) {
            let layers = this.list.splice(index, 1);
            this.list.splice(this.list.length, 0, layers[0]);
        }
    }
}

module.exports = { LayerGroup: LayerGroup };