const obj = require('../../conf/server.json');

class ServerAdapter {
    constructor(options) {
        this.url = "http://" + obj.WasServer.host + ":" + obj.WasServer.port;
        if( options ){
            if( options.url ){
                this.url = options.url;
            }
        }
    }
    get(path, param, callback) {
        axios.get(this.url + "/" + path, {
            params: {
                param: param
            }
        }).then(
            res => {
                callback(res.data);
            }
        );
    }
}

global.serverAdapter = new ServerAdapter();

module.exports = {
    ServerAdapter: ServerAdapter
}