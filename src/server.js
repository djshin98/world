const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const conf = require("./conf/server.json");
var session = require('express-session');
var fs = require("fs");
var { base64_encode, dir, dirByExts } = require("./js/watch/image");

const { WebSocketServer } = require('./js/ws/websocket_server');
const { MqttAdapter } = require('./js/mqtt/mqttbroker');
const { FileWatcher } = require('./js/watch/filewatcher');
var { $$ } = require("./js/core/e");

const cors = require('cors');

const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());
// 서버가 읽을 수 있도록 HTML 의 위치를 정의해줍니다.
server.set('', __dirname + '/../dist');
server.set('view engine', 'ejs');
server.engine('html', require('ejs').renderFile);

const port = process.env.PORT || 8082;

var { Mapper } = require('./js/database/mapper');
//console.dir(conf);

const wss = new WebSocketServer({
    port: conf.WebSocket.port,
    onmessage: function(ws, data) {
        if (mqttAdapter && data) {
            let msg = JSON.parse(data);
            mqttAdapter.publish(msg.topic, msg.message);
        }
    }
});

console.log('try mqtt brokder : ' + conf.MqttServer.host + ":" + conf.MqttServer.port);

var mqttAdapter = new MqttAdapter({
    host: conf.MqttServer.host,
    port: conf.MqttServer.port,
    listens: [{
            topic: "TIA.HANDLER", //표적식별
            onReady: function(topic) {
                console.log("onready : " + topic);
            },
            onReceive: function(topic, message) {
                message = JSON.parse(message);
                //console.log(topic + " received : " + message.toString() );
                if (message.cmd == "RES_TIA") {
                    mapper.query({ results: "targetMapper/res_tia" }, { idx: message.index }, (result) => {
                        message = Object.assign(message, result);
                        message.results.forEach(r => {
                            r.base64 = base64_encode(r.image);
                        });
                        wss.publish(topic, message);
                    });
                } else if (message.cmd == "REQ_TIA") {

                } else {
                    wss.publish(topic, message);
                }
            }
        },
        {
            topic: "WAA.HANDLER", //무장할당
            onReady: function(topic) {
                console.log("onready : " + topic);
            },
            onReceive: function(topic, message) {
                wss.publish(topic, message);
            }
        },
        {
            topic: "DSW.HANDLER", //상황도
            onReady: function(topic) {
                console.log("onready : " + topic);
            },
            onReceive: function(topic, message) {
                //console.log(topic + " received : " + message.toString() );
                wss.publish(topic, message);
            }
        }
    ]
});

//global.test = mqttAdapter;
var mapper = new Mapper({
    path: __dirname + '/conf/mapper',
    connect: conf.DatabaseServer
});

console.log('try file watcher : ' + conf.MqttServer["watch-folder"]);

var fsWatcher = new FileWatcher({
    folder: conf.MqttServer["watch-folder"],
    watch: function(filename, act, data) {

        let index = filename.lastIndexOf("N");
        let lastIndex = filename.lastIndexOf(".");
        var data = { cmd: "DET_TIA", org_image: filename, act: act, base64: data };

        if (index >= 0 && lastIndex > 0 && index < lastIndex) {
            let str = data.org_image.substr(index + 1, lastIndex);
            index = str.lastIndexOf("E");
            if (index > 0) {
                let latitude = parseFloat(str.substr(0, index));
                let longitude = parseFloat(str.substr(index + 1));

                data.longitude = longitude;
                data.latitude = latitude;
            }
        }
        mqttAdapter.publish("TIA.HANDLER", data);
    }
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
    var uris = queryStm.reduce((prev, curr, i) => {
        prev["row" + (i + 1)] = curr;
        return prev;
    }, {});

    mapper.query(uris, { unusedMybatis: true }, (result) => {
        res.json(result);
    });
});

server.get('/images/', (req, res) => {
    var param = req.query.param;
    let data = JSON.parse(param);
    if ($$.isValid(data.exts)) {
        dirByExts(__dirname + "/" + data.url, data.exts, function(array) {
            res.json({ result: array });
        });
    } else {
        dir(__dirname + "/" + data.url, function(array) {
            res.json({ result: array });
        });
    }
});

server.get('/Entities/', (req, res) => {
    console.log("Entitites");
    mapper.query({
        unit: 'testMapper/unit',
        bmoa: 'testMapper/bmoa',
        enemy: 'testMapper/enemy_unit',
        aircraft: 'testMapper/aircraft',
        ship: 'testMapper/ship',
        air_area: 'testMapper/air_area',
        air_control: 'testMapper/air_control',
        eo_line: 'testMapper/eo_line'
    }, JSON.parse(req.query.param), (result) => {
        res.json(result);
    });
});

server.get('/type0/', (req, res) => {
    console.log("type0");
    mapper.query({ bmoa: 'testMapper/bmoa', air_type0: 'testMapper/air_type0' }, JSON.parse(req.query.param), (result) => {
        res.json(result);
    });
});

//------------------------------- presentation 에 필요한 쿼리 -------------------------------------
server.get('/allyPre/', (req, res) => {
    mapper.query({ unit: 'testMapper/unit' }, JSON.parse(req.query.param), (result) => {
        res.json(result);
    });
});

server.get('/enemyPre/', (req, res) => {
    mapper.query({ enemy_unit: 'testMapper/enemy_unit' }, JSON.parse(req.query.param), (result) => {
        res.json(result);
    });
});

server.get('/target/', (req, res) => {
    mapper.query({
        str_tgt: 'targetMapper/str_tgt',
        bmoa: 'targetMapper/bmoa',
        tgt_info: 'targetMapper/tgt_info',
        enemy_unit: 'targetMapper/enemy_unit'
    }, JSON.parse(req.query.param), (result) => {
        res.json(result);
    });
});

server.get('/wpRecom/', (req, res) => {
    mapper.query({ wp_recom: 'wpRecom/wp_recom' }, JSON.parse(req.query.param), (result) => {
        res.json(result);
    });
});

server.get('/testError/', (req, res) => {
    try {
        throw "test error";
    } catch (error) {
        res.json({ error: error });
    }
});

server.listen(port, '0.0.0.0');