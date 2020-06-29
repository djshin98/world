class Graphics {
    constructor(ms) {
        this.graphicCache = {};
        this.graphicModulars = {};
    }
    addGraphics(f) {
        if (Q.isValid(f)) {
            f(this.graphicCache, this.graphicModulars);
        }
    }
    addModular(f) {
        if (Q.isValid(f)) {
            f(this.graphicCache, this.graphicModulars);
        }
    }
    get(SIDC) {
        var genericSIDC = SIDC.substr(0, 1) + "-" + SIDC.substr(2, 1) + "-" + SIDC.substr(4, 6);
        if (this.graphicCache[genericSIDC]) {
            return this.graphicCache[genericSIDC];
        }
    }
}
module.exports = { Graphic: Graphic };