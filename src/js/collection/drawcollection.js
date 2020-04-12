let { OliveEntityCollection } = require('./entity_collection');

class DrawCollection extends OliveEntityCollection {
    constructor(map,options) {
        super(map,options);
    }
    add(cartesian, opt) {
    }
}
module.exports = {
    DrawCollection: DrawCollection
}