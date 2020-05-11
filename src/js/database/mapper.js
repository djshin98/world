var { dirByExts } = require("../watch/image");
var mysql = require('mysql');
var mybatisMapper = require('mybatis-mapper');
var { isValid } = require("../core/block");

class Mapper {
    constructor(options) {
        this.format = { language: 'sql', indent: '  ' };
        this.index = 0;
        this.options = Object.assign({}, options);
        this.connection = mysql.createConnection(this.options.connect);
        this.init();
    }
    createIndex() {
        return this.index++;
    }
    init() {
        let _this = this;
        dirByExts(this.options.path, ["xml"], function(array) {
            _this.createMappers(array);
        });
    }
    getConnection() {
        if (this.connection.state === 'disconnected') {
            this.connection = mysql.createConnection(this.options.connect);
        }
        return this.connection;
    }
    createMappers(fileArray) {
        let _this = this;
        fileArray.forEach(file => {
            if (file.type == 'folder') {
                _this.createMappers(file.children);
            } else {
                mybatisMapper.createMapper([file.fullname]);
                console.log('create mapper : ' + file.fullname);
            }
        });
    }
    query(uris, jsonParam, callback) {
        let _this = this;

        let connect = this.getConnection();
        //this.connection.connect();
        //let jsonParam = JSON.parse(param);
        let retObj = {};
        let completeStack = [];
        let unusedMybatis = (isValid(jsonParam.unusedMybatis) && jsonParam.unusedMybatis == true) ? true : false;
        Object.keys(uris).forEach(key => {
            let accessUri = unusedMybatis ? [key, uris[key]] : uris[key].split("/");
            if (accessUri.length == 2) {
                completeStack.push(key);
                try {
                    var q = unusedMybatis ? accessUri[1] : mybatisMapper.getStatement(accessUri[0], accessUri[1], jsonParam, _this.format);
                    connect.query(q, function(err, result, fields) {
                        if (!err) { retObj[key] = result; } else {
                            retObj[key] = [];
                        }
                        completeStack = completeStack.filter(k => { return (k == key) ? false : true; });
                        if (completeStack.length == 0) {
                            callback(retObj);
                        }
                    });
                } catch (error) {
                    console.error('query error : ' + error);
                }
            } else {
                console.error('invalid query namespace/id : ' + uris[key]);
            }
        });
        //this.connection.end();
    }
}

module.exports = { Mapper: Mapper };