let { OliveEntityCollection } = require('./entity_collection');
let { CTX } = require('../map3d/ctx');

var pinBuilder = new Cesium.PinBuilder();

var PinMarkers = {
    start: { name: 'start', type: 'text', text: 'S', color: Cesium.Color.NAVY, size: 48 },
    center: { name: 'center', type: 'text', text: 'C', color: Cesium.Color.DARKCYAN, size: 48 },
    end: { name: 'end', type: 'text', text: 'E', color: Cesium.Color.RED, size: 48 },
    via: { name: 'via', type: 'icon', icon: 'marker', color: Cesium.Color.CHOCOLATE, size: 48 }
};

class DrawCollection {
    constructor(map, options) {
        this.name = options.name;
        this.map = map;
        this.viewer = map.viewer3d;
        this.options = Object.assign({}, options);
    }
    entities() {
        return this.viewer.entities;
    }
    close() {
        this.viewer.entities.removeAll();
    }
    add(id, option) {
        var ent = this.viewer.entities.add(option
            /*
            {
                color : _this.viewModel.shapeColor,
                pixelSize : _this.viewModel.shapeSize,
                heightReference: Cesium.HeightReference.NONE
            }*/
        );
        ent.category = this.name;
        ent.drawId = id;
        return ent;
    }
    get(id) {
        return this.viewer.entities.values.filter((entity) => { return (entity.category == this.name && entity.drawId == id) ? true : false; });
    }
    remove(idOrEntity) {
        if (idOrEntity) {
            if (typeof(idOrEntity) == "number") {
                let ents = this.get(idOrEntity);
                ents.forEach(ent => {
                    _this.viewer.entities.remove(ent);
                });
            } else if (typeof(idOrEntity) == "string") {
                _this.viewer.entities.remove(idOrEntity);
            } else if (typeof(idOrEntity) == "object") {
                this.viewer.entities.remove(idOrEntity);
            }
        }
    }
    removeAll() {
        let _this = this;
        let list = this.viewer.entities.values.filter((entity) => { return (entity.category == _this.name) ? true : false; });
        list.forEach(ent => {
            _this.viewer.entities.remove(ent);
        });
    }
}
module.exports = {
    DrawCollection: DrawCollection,
    PinMarkers: PinMarkers
}