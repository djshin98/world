const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8082;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
var mysql = require('mysql');
var mybatisMapper = require('mybatis-mapper');
mybatisMapper.createMapper(['./repository/mapper/testMapper.xml']);
var format = { language: 'sql', indent: '  ' };

var connection = mysql.createConnection({
    host: '175.207.13.28',
    port: 3306,
    user: 'root',
    password: '#Djshin98Root2019',
    database: 'world'
});

app.get('/map/juso/', (req, res) => {
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

app.get('/default/', (req, res) => {
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

app.get('/Entities/', (req, res) => {
    var param = req.query.param;
    var mapper = req.query.mapper;
    console.log(JSON.parse(param));
    var query = mybatisMapper.getStatement(mapper, 'testBasic', JSON.parse(param), format);
    // var queryStm2 = req.query.queryStm2;
    // connection.connect();
    //동시에 실행시키는 방법 생각해보자...
    connection.query(query, function(err, result, fields) {
        if (!err) {
            console.log(fields);
            res.json(result);
        } else {
            console.log('query error : ' + err);
            res.send(err);
        }
    })
});


mapper: mybatisMapper.getStatement



app.listen(port, () => console.log(`Listening on port ${port}`));