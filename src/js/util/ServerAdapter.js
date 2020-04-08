const obj = require('../../../conf/server.json');

class ServerAdapter {
    constructor(options) {
        this.serverUrl = obj.serverUrl;
        if( options ){
            if( options.serverUrl ){
                this.serverUrl = options.serverUrl;
            }
        }
        // this.excuteQuery('Entities', { allyforceId: 'KN00000001', armyCode: 3 });
    }
    /*
    init() { // 최초로 가져와야할 데이터...
            var path = this.options.default.path;
            axios.get(this.serverUrl + path, {
                params: { //파라미터를 갯수를 동적으로 넘겨줄수 잇어야됨
                    queryStm: d.query.reduce(function(prev, curr) {
                        return prev + curr;
                    })
                }
            }).then(
                res => {
                    console.log(res.data);
                }
            );
        }
        // 어떠한 이벤트를 통해 가져올 데이터 정의
        // 호출할때 dataset의 키값과 보낼 파라미터를 넣으면된다..
        // this.excuteQuery('Entities', { allyforceId: 'KN00000001', armyCode: 3 }); 로 실행
    */
    get(path, param, callback) {
        axios.get(this.serverUrl + "/" + path, {
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