const { Layer } = require("./layer");
class UserImageryLayer extends Layer {
    constructor(map, json) {
        super(map);
    }
}
module.exports = { UserImageryLayer: UserImageryLayer };