const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const server = express();
const serverConfig = require("../conf/server.json");
var session = require('express-session');
var fs = require("fs");

const cors = require('cors');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());
// 서버가 읽을 수 있도록 HTML 의 위치를 정의해줍니다.
server.set('', __dirname + '/../dist');
server.set('view engine', 'ejs');
server.engine('html', require('ejs').renderFile);

const port = process.env.PORT || 8082;
var mysql = require('mysql');
var mybatisMapper = require('mybatis-mapper');

console.log(__dirname + '/conf/mapper/testMapper.xml');
mybatisMapper.createMapper([__dirname + '/conf/mapper/testMapper.xml']);
mybatisMapper.createMapper([__dirname + '/conf/mapper/targetMapper.xml']);
/**추가적으로 맵퍼를 생성할 수 있다. */

var format = { language: 'sql', indent: '  ' };

console.log("config : " + "conf/server.json");
console.dir(serverConfig);
var connection = mysql.createConnection(serverConfig.DBconnectionInfo);

server.get('/map/juso/', (req, res) => {
    var url = req.query.url;
    console.log(url);
    var request = http.get(url, function(response) {
        var body = "";
        var jsonObj;
        response.on('data', (chunk) => {
            body += chunk;
            // res.header("Access-Control-Allow-Origin", "*");
        }).on('end', () => {
            jsonObj = JSON.parse(body);
            res.json({ obj: jsonObj });
        });
    });
});

server.get('/default/', (req, res) => {
    var queryStm = req.query.queryStm.split(';');
    console.log(queryStm);
    // var queryStm2 = req.query.queryStm2;
    //동시에 실행시키는 방법 생각해보자...
    connection.query(queryStm[0], function(err, rows1, fields) {
        if (!err) {
            connection.query(queryStm[1], function(err, rows2, fields) {
                // connection.end();
                if (!err) {
                    console.log(fields);
                    res.json({ rows1: rows1, rows2: rows2 });
                } else {
                    console.log('query error : ' + err);
                    res.send(err);
                }
            })
        } else {
            res.send('error : ' + err);
        }
    })
});

server.get('/Entities/', (req, res) => {
    console.log("Entitites");
    var param = req.query.param;
    console.log(JSON.parse(param));
    var query1 = mybatisMapper.getStatement('testMapper', 'unit', JSON.parse(param), format);
    var query2 = mybatisMapper.getStatement('testMapper', 'bmoa', JSON.parse(param), format);
    var query3 = mybatisMapper.getStatement('testMapper', 'enemy_unit', JSON.parse(param), format);

    // var queryStm2 = req.query.queryStm2;
    // connection.connect();
    //동시에 실행시키는 방법 생각해보자...
    connection.query(query1, function(err, result1, fields) {
        connection.query(query2, function(err, result2, fields) {
            connection.query(query3, function(err, result3, fields) {
                if (!err) {
                    res.json({ ally: result1, bmoa: result2, enemy: result3 });
                } else {
                    console.log('query error : ' + err);
                    res.send(err);
                }
            });
        });
    });
});


//------------------------------- presentation 에 필요한 쿼리 -------------------------------------
server.get('/allyPre/', (req, res) => {
    var param = req.query.param;
    var query = mybatisMapper.getStatement('testMapper', 'unit', JSON.parse(param), format);
    connection.query(query, function(err, result, fields) {
        res.json({ allyPres: result });
    });
});

server.get('/enemyPre/', (req, res) => {
    var param = req.query.param;
    var query = mybatisMapper.getStatement('testMapper', 'enemy_unit', JSON.parse(param), format);
    connection.query(query, function(err, result, fields) {
        res.json({ enemyPres: result });
    });
});


server.get('/target/', (req, res) => {
    var param = req.query.param;

    var query1 = mybatisMapper.getStatement('targetMapper', 'str_tgt', JSON.parse(param), format);
    var query2 = mybatisMapper.getStatement('targetMapper', 'bmoa', JSON.parse(param), format);
    var query3 = mybatisMapper.getStatement('targetMapper', 'tgt_info', JSON.parse(param), format);
    var query4 = mybatisMapper.getStatement('targetMapper', 'enemy_unit', JSON.parse(param), format);

    connection.query(query1, function(err, strTgt, fields) {
        connection.query(query2, function(err, bmoa, fields) {
            connection.query(query3, function(err, tgtInfo, fields) {
                connection.query(query4, function(err, enemyUnit, fields) {
                    if (!err) {
                        res.json({ strTgt: strTgt, bmoa: bmoa, tgtInfo: tgtInfo, enemyUnit: enemyUnit });
                    } else {
                        console.log('query error : ' + err);
                        res.send(err);
                    }
                });
            });
        });
    });
});

// mapper: mybatisMapper.getStatement


server.listen(port, '0.0.0.0');