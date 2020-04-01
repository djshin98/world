/* console.log("start");

function test() {
    console.log("test");
}

test();
 */

class MariaDB {
    constructor(options) {
        this.serverUrl = "http://localhost:8082"; // 나중에 다른 DB도 연동시 공통으로 빼야함(global setting 이라던지..).
        this.options = options;
        this.entResult;
        this.excuteQuery('Entities', { allyforceId: 'KN00000001', armyCode: 3 });
    }

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
    excuteQuery(key, param) {
        var obj = this.options[key];
        var path = obj.path;
        var mapper = obj.mapper;
        axios.get(this.serverUrl + path, {
            params: {
                param: param,
                mapper: mapper
            }
        }).then(
            res => {
                console.log(res.data);
            }
        );
    }
}
module.exports = {
    MariaDB: MariaDB
}