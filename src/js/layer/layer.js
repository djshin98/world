"use strict";
class Layer {
    constructor(layerGroup, options) {
        this.layerGroup = layerGroup;
        this.options = Object.assign(options);
        this.layerOnMap = null;
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
        return this.options;
    }
    create(layerGroup, options) {
        console.warn("unsupported layer create : " + this.constructor.name);
    }
    show() {
        this.options.show = true;
    }
    hide() {
        this.options.show = false;
    }
    getName() { return this.options.name; }
    setName(newName) { this.options.name = newName; }
}

module.exports = { Layer: Layer };