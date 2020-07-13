"use strict";
class Layer {
    constructor(layerGroup, jsonLayer) {
        this.layerGroup = layerGroup;
        this.jsonLayer = Object.assign(jsonLayer);
        this.layerOnMap = null;
        this.create(this.layerGroup, this.jsonLayer);
    }
    json() {
        return this.jsonLayer;
    }
    create(layerGroup, jsonLayer) {
        console.warn("unsupported layer create : " + this.constructor.name);
    }
    update(options) {
        this.jsonLayer = Object.assign(this.jsonLayer, options);
        this.create(this.layerGroup, this.jsonLayer);
    }
    remove() {
        this.clear();
    }
    clear() {

    }
    show() {
        this.update({ show: true });
    }
    hide() {
        this.update({ show: false });
    }
    isVisible() {
        if (this.jsonLayer.show === true) {
            return true;
        }
        return false;
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