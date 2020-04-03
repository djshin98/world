const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const server = express();
var session = require('express-session');
var fs = require("fs");

const cors = require('cors');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());
// 서버가 읽을 수 있도록 HTML 의 위치를 정의해줍니다. 
server.set('', __dirname + '/dist');
server.set('view engine', 'ejs');
server.engine('html', require('ejs').renderFile);

const port = process.env.PORT || 8082;
var mysql = require('mysql');
var mybatisMapper = require('mybatis-mapper');
console.log(__dirname + '/js/repository/mapper/testMapper.xml');
mybatisMapper.createMapper([__dirname + '/js/repository/mapper/testMapper.xml']);
var format = { language: 'sql', indent: '  ' };

var connection = mysql.createConnection({
    host: '175.207.13.28',
    port: 3306,
    user: 'root',
    password: '#Djshin98Root2019',
    database: 'world'
});

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
    var param = req.query.param;
    var mapper = req.query.mapper;
    console.log(JSON.parse(param));
    var query1 = mybatisMapper.getStatement(mapper, 'testBasic1', JSON.parse(param), format);
    var query2 = mybatisMapper.getStatement(mapper, 'testBasic2', JSON.parse(param), format);
    var query3 = mybatisMapper.getStatement(mapper, 'testBasic3', JSON.parse(param), format);
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

// mapper: mybatisMapper.getStatement


server.listen(port, () => console.log(`Listening on port ${port}`));