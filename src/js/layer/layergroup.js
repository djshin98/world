const { IxDatabase } = require('../indexeddb/db');
const { Layer } = require("./layer");
class LayerGroup {
    constructor(director, g, editable, selectedOnlyOne, onlyOneOnLayer) {
        this.director = director;
        this.group = g.group;
        this.editable = editable;
        this.selectedOnlyOne = (selectedOnlyOne === true) ? true : false;
        this.onlyOneOnLayer = (onlyOneOnLayer === true) ? true : false;
        this.db = new IxDatabase(1);
        this.list = [];
        this.options = {};
        Q.keys(g, (key, value) => {
            if (key !== "children") { this.options[key] = value; }
        });
        if (Q.isValid(g.children)) {
            let len = g.children.length;
            g.children.forEach((layer, i) => {
                if (!Q.isValid(layer.order)) {
                    layer.order = len - i;
                }
                this.put(layer);
            })
        }
    }
    create(json) {
        console.warn("unsupported layergroup : " + this.constructor.name);
    }
    getMap() { return this.director.getMap() }
    getName() { return this.options.name; }
    getGroup() { return this.options.group; }
    get(name) {
        return this.list.find((layer) => { return layer.getName() === name ? true : false; });
    }
    getIndex(name) {
        let index = -1;
        let layer = (name instanceof Layer) ? name : this.get(name);
        this.list.some((l, i) => { if (layer === l) { index = i; return true; } return false; });
        return index;
    }
    focus(name, callback) {
        if (Q.isValid(name)) {
            if (this.editable === true) {
                let layer = (name instanceof Layer) ? name : this.get(name);
                if (Q.isValid(layer)) {
                    this.list.forEach((l) => { l.setFocus(false); });
                    layer.setFocus(true);
                    if (Q.isValid(callback)) { callback(layer.json()); }
                }
            }
        } else {
            return this.list.find((layer) => { return layer.isFocus(); });
        }
    }
    _exclusiveShow(layer) {

    }
    show(name) {
        let layer = (name instanceof Layer) ? name : this.get(name);
        if (Q.isValid(layer)) {
            layer.show();
        }
    }
    hide(name) {
        let layer = (name instanceof Layer) ? name : this.get(name);
        if (Q.isValid(layer)) {
            layer.hide();
        }
    }
    json() {
        let j = Object.assign(this.options);
        j.children = this.list.map(layer => { return layer.json(); })
        return j;
    }
    put(json, callback) {
        let layer = this.get(json.name);
        if (Q.isValid(layer)) {
            layer.update(json);
            if (Q.isValid(callback)) { callback(layer); }
        } else {
            layer = this.create(json);
            if (Q.isValid(layer)) {
                this.list.push(layer);
                if (Q.isValid(callback)) { callback(layer); }
            }
        }
    }
    rename(newName, oldName, callback) {
        let layer = this.get(oldName);
        if (Q.isValid(layer)) {
            layer.setName(newName);
        }
        if (Q.isValid(callback)) { callback(layer.json()); }
    }

    remove(name, callback) {
        let layer = (name instanceof Layer) ? name : this.get(name);
        if (Q.isValid(layer)) {
            this.list = this.list.filter((l) => { return l.getName() === name ? false : true; });
            if (Q.isValid(callback)) { callback(layer.json()); }
            layer.remove();
            layer = null;
        }
    }
    removeAll() {
        this.list.forEach(layer => {
            layer.remove();
        });
        this.list = [];
    }
    clear(name, callback) {
        let layer = (name instanceof Layer) ? name : this.get(name);
        if (Q.isValid(layer)) {
            layer.clear();
            if (Q.isValid(callback)) { callback(layer.json()); }
        }
    }
    clearAll() {
        this.list.forEach(layer => {
            layer.clear();
        });
    }
    _url(name) {
        return this.director.getName() + "." + this.group + "." + name;
    }
    save(name, callback) {
        let layer = (name instanceof Layer) ? name : this.get(name);
        if (Q.isValid(layer)) {
            this.db.set("layer", this._url(name), layer.json());
            if (Q.isValid(callback)) { callback(layer.json()); }
        }
    }
    load(name, callback) {
        let layer = (name instanceof Layer) ? name : this.get(name);
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