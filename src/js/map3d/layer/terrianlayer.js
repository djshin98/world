const { Layer } = require("../../layer/layer");
class TerrianLayer extends Layer {
    constructor(layerGroup, options) {
        super(layerGroup, options);
    }
    create(layerGroup, options) {
        console.warn("unsupported layer create : " + this.constructor.name);
    }

    setTerrianLayer(obj, callbackable) {
        let opt = Object.assign({
            requestVertexNormals: true,
            requestWaterMask: true
        }, obj.options);

        if (Q.isValid(opt.proxy)) {
            opt.proxy = new Cesium.DefaultProxy(opt.proxy);
        }
        if (obj.provider == "createWorldTerrain") {
            this.terrainProvider = Cesium.createWorldTerrain(opt);
        } else {
            this.terrainProvider = new Cesium[obj.provider](opt);
        }
        obj.show = true;
        this.save(TERRIAN_LAYER, obj, callbackable);
        return this.terrainProvider;
    }
}
module.exports = { TerrianLayer: TerrianLayer };