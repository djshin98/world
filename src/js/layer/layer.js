"use strict";
class Layer {
    constructor(layerGroup, jsonLayer) {
        this.layerGroup = layerGroup;
        this.jsonLayer = Object.assign(jsonLayer);
        this.layerOnMap = null;
        this.create(this.layerGroup, this.jsonLayer);
    }

    terrianFromDegrees(objs, callback) {
        let selObj = objs.filter(d => { return Q.isValid(d.degree) ? true : false; });
        selObj.forEach((d, i) => {
            selObj[i].degree.height = 0;
            if (callback) {
                callback(selObj[i], this);
            }
        });
    }
    json() {
        return this.jsonLayer;
    }
    create(layerGroup, jsonLayer) {
        console.warn("unsupported layer create : " + this.constructor.name);
    }
    update(options) {
        this.jsonLayer = Object.assign(options);
        this.create(this.layerGroup, this.jsonLayer);
    }
    remove() {

    }
    show() {
        this.update({ show: true });
    }
    hide() {
        this.update({ show: false });
    }
    setFocus(bfocus) {
        this.update({ focus: bfocus });
    }
    isFocus() {
        if (this.jsonLayer.focus === true) {
            return true;
        }
        return false;
    }
    getName() { return this.jsonLayer.name; }
    setName(newName) { this.jsonLayer.name = newName; }
    get(id) { console.warn("unsupported layer get : " + this.constructor.name + "::get"); }
}

module.exports = { Layer: Layer };