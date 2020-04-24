const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const server = express();
const conf = require("./conf/server.json");
var session = require('express-session');
var fs = require("fs");
var {base64_encode} = require("./js/watch/image");

const {WebSocketServer} = require('./js/ws/websocket_server');
const {MqttAdapter} = require('./js/mqtt/mqttbroker');
const {FileWatcher} = require('./js/watch/filewatcher');

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
mybatisMapper.createMapper([__dirname + '/conf/mapper/wpRecom.xml']);
/**추가적으로 맵퍼를 생성할 수 있다. */

var format = { language: 'sql', indent: '  ' };

console.log("config : " + "conf/server.json");
console.dir(conf);
/*
var test0 = "{\"data\":[{\"dt\":\"2020.04.20 15:46:25\",\"t_id\":\"T0001\",\"lon\":\"126.1727\",\"wt\":\"23\",\"lat\":\"38.3726\"},{\"dt\":\"2020.04.20 15:46:25\",\"t_id\":\"T0010\",\"lon\":\"126.5025\",\"wt\":\"20\",\"lat\":\"38.4316\"},{\"dt\":\"2020.04.20 15:46:25\",\"t_id\":\"T0019\",\"lon\":\"127.4118\",\"wt\":\"17\",\"lat\":\"38.5516\"},{\"dt\":\"2020.04.20 15:46:25\",\"t_id\":\"T0028\",\"lon\":\"126.5339\",\"wt\":\"20\",\"lat\":\"39.1528\"},{\"dt\":\"2020.04.20 15:46:25\",\"t_id\":\"T0037\",\"lon\":\"126.5331\",\"wt\":\"20\",\"lat\":\"40.2310\"},{\"dt\":\"2020.04.20 15:46:25\",\"t_id\":\"T0046\",\"lon\":\"128.3832\",\"wt\":\"20\",\"lat\":\"40.5345\"},{\"dt\":\"2020.04.20 15:46:25\",\"t_id\":\"T0055\",\"lon\":\"125.2527\",\"wt\":\"20\",\"lat\":\"39.4424\"},{\"dt\":\"2020.04.20 15:46:25\",\"t_id\":\"T0064\",\"lon\":\"126.3502\",\"wt\":\"19\",\"lat\":\"40.3601\"},{\"dt\":\"2020.04.20 15:46:25\",\"t_id\":\"T0073\",\"lon\":\"127.1045\",\"wt\":\"19\",\"lat\":\"41.2442\"}],\"seq_id\":\"D1\",\"type\":0}";

var test1 = "{\"data\":[{\"t_id\":\"T0001\",\"weapon\":\"MK-82\",\"unit\":\"19-002 KF-16\",\"rank\":\"1\"},{\"t_id\":\"T0001\",\"weapon\":\"AGM-65\",\"unit\":\"20-001 KF-16\",\"rank\":\"2\"},{\"t_id\":\"T0001\",\"weapon\":\"GBU-10\",\"unit\":\"20-003 KF-16\",\"rank\":\"3\"},{\"t_id\":\"T0010\",\"weapon\":\"AGM-65\",\"unit\":\"19-001 KF-16\",\"rank\":\"1\"},{\"t_id\":\"T0010\",\"weapon\":\"JDAM\",\"unit\":\"19-002 KF-16\",\"rank\":\"2\"},{\"t_id\":\"T0010\",\"weapon\":\"MK-82\",\"unit\":\"19-001 KF-16\",\"rank\":\"3\"},{\"t_id\":\"T0019\",\"weapon\":\"현무-1\",\"unit\":\"F2사격대\",\"rank\":\"1\"},{\"t_id\":\"T0019\",\"weapon\":\"현무-2\",\"unit\":\"F3사격대\",\"rank\":\"2\"},{\"t_id\":\"T0019\",\"weapon\":\"현무-1\",\"unit\":\"B2사격대\",\"rank\":\"3\"},{\"t_id\":\"T0028\",\"weapon\":\"타우러스\",\"unit\":\"17-001 F-35\",\"rank\":\"1\"},{\"t_id\":\"T0028\",\"weapon\":\"슬램-ER\",\"unit\":\"17-002 F-35\",\"rank\":\"2\"},{\"t_id\":\"T0028\",\"weapon\":\"AGM-65\",\"unit\":\"19-001 KF-16\",\"rank\":\"3\"},{\"t_id\":\"T0037\",\"weapon\":\"AGM-65\",\"unit\":\"17-001 F-35\",\"rank\":\"1\"},{\"t_id\":\"T0037\",\"weapon\":\"타우러스\",\"unit\":\"17-002 F-35\",\"rank\":\"2\"},{\"t_id\":\"T0037\",\"weapon\":\"AGM-142\",\"unit\":\"17-002 F-35\",\"rank\":\"3\"},{\"t_id\":\"T0046\",\"weapon\":\"AGM-65\",\"unit\":\"18-003 KFX\",\"rank\":\"1\"},{\"t_id\":\"T0046\",\"weapon\":\"AGM-65\",\"unit\":\"18-001 KFX\",\"rank\":\"2\"},{\"t_id\":\"T0046\",\"weapon\":\"AGM-65\",\"unit\":\"18-002 KFX\",\"rank\":\"3\"},{\"t_id\":\"T0055\",\"weapon\":\"현무-1\",\"unit\":\"F2사격대\",\"rank\":\"1\"},{\"t_id\":\"T0055\",\"weapon\":\"현무-2\",\"unit\":\"F3사격대\",\"rank\":\"2\"},{\"t_id\":\"T0055\",\"weapon\":\"현무-2\",\"unit\":\"C1사격대\",\"rank\":\"3\"},{\"t_id\":\"T0064\",\"weapon\":\"타우러스\",\"unit\":\"17-003 F-35\",\"rank\":\"1\"},{\"t_id\":\"T0064\",\"weapon\":\"AGM-65\",\"unit\":\"17-002 F-35\",\"rank\":\"2\"},{\"t_id\":\"T0064\",\"weapon\":\"슬램-ER\",\"unit\":\"17-003 F-35\",\"rank\":\"3\"},{\"t_id\":\"T0073\",\"weapon\":\"슬램-ER\",\"unit\":\"17-002 F-35\",\"rank\":\"1\"},{\"t_id\":\"T0073\",\"weapon\":\"AGM-65\",\"unit\":\"17-003 F-35\",\"rank\":\"2\"},{\"t_id\":\"T0073\",\"weapon\":\"슬램-ER\",\"unit\":\"17-003 F-35\",\"rank\":\"3\"}],\"seq_id\":\"D1\",\"type\":1}";
var test2 = "{\"data\":[{\"t_id\":\"T0001\",\"result\":\"2L\",\"weapon\":\"MK-82\",\"unit\":\"19-002 KF-16\",\"rank\":\"1\"},{\"t_id\":\"T0001\",\"result\":\"4L\",\"weapon\":\"AGM-65\",\"unit\":\"20-001 KF-16\",\"rank\":\"2\"},{\"t_id\":\"T0001\",\"result\":\"3L\",\"weapon\":\"GBU-10\",\"unit\":\"20-003 KF-16\",\"rank\":\"3\"},{\"t_id\":\"T0010\",\"result\":\"lL\",\"weapon\":\"AGM-65\",\"unit\":\"19-001 KF-16\",\"rank\":\"1\"},{\"t_id\":\"T0010\",\"result\":\"3L\",\"weapon\":\"JDAM\",\"unit\":\"19-002 KF-16\",\"rank\":\"2\"},{\"t_id\":\"T0010\",\"result\":\"5L\",\"weapon\":\"MK-82\",\"unit\":\"19-001 KF-16\",\"rank\":\"3\"},{\"t_id\":\"T0019\",\"result\":\"lL\",\"weapon\":\"현무-1\",\"unit\":\"F2사격대\",\"rank\":\"1\"},{\"t_id\":\"T0019\",\"result\":\"2L\",\"weapon\":\"현무-2\",\"unit\":\"F3사격대\",\"rank\":\"2\"},{\"t_id\":\"T0019\",\"result\":\"lL\",\"weapon\":\"현무-1\",\"unit\":\"B2사격대\",\"rank\":\"3\"},{\"t_id\":\"T0028\",\"result\":\"5L\",\"weapon\":\"타우러스\",\"unit\":\"17-001 F-35\",\"rank\":\"1\"},{\"t_id\":\"T0028\",\"result\":\"lL\",\"weapon\":\"슬램-ER\",\"unit\":\"17-002 F-35\",\"rank\":\"2\"},{\"t_id\":\"T0028\",\"result\":\"3L\",\"weapon\":\"AGM-65\",\"unit\":\"19-001 KF-16\",\"rank\":\"3\"},{\"t_id\":\"T0037\",\"result\":\"2L\",\"weapon\":\"AGM-65\",\"unit\":\"17-001 F-35\",\"rank\":\"1\"},{\"t_id\":\"T0037\",\"result\":\"2L\",\"weapon\":\"타우러스\",\"unit\":\"17-002 F-35\",\"rank\":\"2\"},{\"t_id\":\"T0037\",\"result\":\"2L\",\"weapon\":\"AGM-142\",\"unit\":\"17-002 F-35\",\"rank\":\"3\"},{\"t_id\":\"T0046\",\"result\":\"4L\",\"weapon\":\"AGM-65\",\"unit\":\"18-003 KFX\",\"rank\":\"1\"},{\"t_id\":\"T0046\",\"result\":\"4L\",\"weapon\":\"AGM-65\",\"unit\":\"18-001 KFX\",\"rank\":\"2\"},{\"t_id\":\"T0046\",\"result\":\"4L\",\"weapon\":\"AGM-65\",\"unit\":\"18-002 KFX\",\"rank\":\"3\"},{\"t_id\":\"T0055\",\"result\":\"3L\",\"weapon\":\"현무-1\",\"unit\":\"F2사격대\",\"rank\":\"1\"},{\"t_id\":\"T0055\",\"result\":\"3L\",\"weapon\":\"현무-2\",\"unit\":\"F3사격대\",\"rank\":\"2\"},{\"t_id\":\"T0055\",\"result\":\"3L\",\"weapon\":\"현무-2\",\"unit\":\"C1사격대\",\"rank\":\"3\"},{\"t_id\":\"T0064\",\"result\":\"5H\",\"weapon\":\"타우러스\",\"unit\":\"17-003 F-35\",\"rank\":\"1\"},{\"t_id\":\"T0064\",\"result\":\"5L\",\"weapon\":\"AGM-65\",\"unit\":\"17-002 F-35\",\"rank\":\"2\"},{\"t_id\":\"T0064\",\"result\":\"4L\",\"weapon\":\"슬램-ER\",\"unit\":\"17-003 F-35\",\"rank\":\"3\"},{\"t_id\":\"T0073\",\"result\":\"5H\",\"weapon\":\"슬램-ER\",\"unit\":\"17-002 F-35\",\"rank\":\"1\"},{\"t_id\":\"T0073\",\"result\":\"3L\",\"weapon\":\"AGM-65\",\"unit\":\"17-003 F-35\",\"rank\":\"2\"},{\"t_id\":\"T0073\",\"result\":\"5H\",\"weapon\":\"슬램-ER\",\"unit\":\"17-003 F-35\",\"rank\":\"3\"}],\"seq_id\":\"D1\",\"type\":2}";
var test3 = "{\"data\":[{\"t_id\":\"T0001\",\"weapon\":\"MK-82\",\"unit\":\"19-002 KF-16\",\"ac_cal\":\"Dongduchen AC, Hwachen AC\",\"rank\":\"1\"},{\"t_id\":\"T0001\",\"weapon\":\"AGM-65\",\"unit\":\"20-001 KF-16\",\"ac_cal\":\"Yeanan AC\",\"rank\":\"2\"},{\"t_id\":\"T0001\",\"weapon\":\"GBU-10\",\"unit\":\"20-003 KF-16\",\"ac_cal\":\"Yeanan AC\",\"rank\":\"3\"},{\"t_id\":\"T0010\",\"weapon\":\"AGM-65\",\"unit\":\"19-001 KF-16\",\"ac_cal\":\"Yeanan AC\",\"rank\":\"1\"},{\"t_id\":\"T0010\",\"weapon\":\"JDAM\",\"unit\":\"19-002 KF-16\",\"ac_cal\":\"Yeanan AC\",\"rank\":\"2\"},{\"t_id\":\"T0010\",\"weapon\":\"MK-82\",\"unit\":\"19-001 KF-16\",\"ac_cal\":\"Yeanan AC\",\"rank\":\"3\"},{\"t_id\":\"T0019\",\"weapon\":\"현무-1\",\"unit\":\"F2사격대\",\"ac_cal\":\"Hwachen AC\",\"rank\":\"1\"},{\"t_id\":\"T0019\",\"weapon\":\"현무-2\",\"unit\":\"F3사격대\",\"ac_cal\":\"Hwachen AC\",\"rank\":\"2\"},{\"t_id\":\"T0019\",\"weapon\":\"현무-1\",\"unit\":\"B2사격대\",\"ac_cal\":\"Hwachen AC\",\"rank\":\"3\"},{\"t_id\":\"T0028\",\"weapon\":\"타우러스\",\"unit\":\"17-001 F-35\",\"ac_cal\":\"Hwachen AC\",\"rank\":\"1\"},{\"t_id\":\"T0028\",\"weapon\":\"슬램-ER\",\"unit\":\"17-002 F-35\",\"ac_cal\":\"Hwachen AC\",\"rank\":\"2\"},{\"t_id\":\"T0028\",\"weapon\":\"AGM-65\",\"unit\":\"19-001 KF-16\",\"ac_cal\":\"\",\"rank\":\"3\"},{\"t_id\":\"T0037\",\"weapon\":\"AGM-65\",\"unit\":\"17-001 F-35\",\"ac_cal\":\"Hwachen AC\",\"rank\":\"1\"},{\"t_id\":\"T0037\",\"weapon\":\"타우러스\",\"unit\":\"17-002 F-35\",\"ac_cal\":\"Hwachen AC\",\"rank\":\"2\"},{\"t_id\":\"T0037\",\"weapon\":\"AGM-142\",\"unit\":\"17-002 F-35\",\"ac_cal\":\"Hwachen AC\",\"rank\":\"3\"},{\"t_id\":\"T0046\",\"weapon\":\"AGM-65\",\"unit\":\"18-003 KFX\",\"ac_cal\":\"Hwachen AC\",\"rank\":\"1\"},{\"t_id\":\"T0046\",\"weapon\":\"AGM-65\",\"unit\":\"18-001 KFX\",\"ac_cal\":\"Hwachen AC\",\"rank\":\"2\"},{\"t_id\":\"T0046\",\"weapon\":\"AGM-65\",\"unit\":\"18-002 KFX\",\"ac_cal\":\"Hwachen AC\",\"rank\":\"3\"},{\"t_id\":\"T0055\",\"weapon\":\"현무-1\",\"unit\":\"F2사격대\",\"ac_cal\":\"Hwachen AC, CheolWeon AC\",\"rank\":\"1\"},{\"t_id\":\"T0055\",\"weapon\":\"현무-2\",\"unit\":\"F3사격대\",\"ac_cal\":\"Hwachen AC, CheolWeon AC\",\"rank\":\"2\"},{\"t_id\":\"T0055\",\"weapon\":\"현무-2\",\"unit\":\"C1사격대\",\"ac_cal\":\"\",\"rank\":\"3\"},{\"t_id\":\"T0064\",\"weapon\":\"타우러스\",\"unit\":\"17-003 F-35\",\"ac_cal\":\"Hwachen AC\",\"rank\":\"1\"},{\"t_id\":\"T0064\",\"weapon\":\"AGM-65\",\"unit\":\"17-002 F-35\",\"ac_cal\":\"Hwachen AC\",\"rank\":\"2\"},{\"t_id\":\"T0064\",\"weapon\":\"슬램-ER\",\"unit\":\"17-003 F-35\",\"ac_cal\":\"Hwachen AC\",\"rank\":\"3\"},{\"t_id\":\"T0073\",\"weapon\":\"슬램-ER\",\"unit\":\"17-002 F-35\",\"ac_cal\":\"Hwachen AC, Sepo AC\",\"rank\":\"1\"},{\"t_id\":\"T0073\",\"weapon\":\"AGM-65\",\"unit\":\"17-003 F-35\",\"ac_cal\":\"Hwachen AC, Sepo AC\",\"rank\":\"2\"},{\"t_id\":\"T0073\",\"weapon\":\"슬램-ER\",\"unit\":\"17-003 F-35\",\"ac_cal\":\"Hwachen AC, Sepo AC\",\"rank\":\"3\"}],\"seq_id\":\"D1\",\"type\":3}";
var test4 = "{\"data\":[{\"t_id\":\"T0001\",\"weapon\":\"GBU-10\",\"unit\":\"20-003 KF-16\"},{\"t_id\":\"T0010\",\"weapon\":\"AGM-65\",\"unit\":\"19-001 KF-16\"},{\"t_id\":\"T0019\",\"weapon\":\"현무-2\",\"unit\":\"B2사격대\"},{\"t_id\":\"T0028\",\"weapon\":\"슬램-ER\",\"unit\":\"19-001 KF-16\"},{\"t_id\":\"T0037\",\"weapon\":\"AGM-142\",\"unit\":\"17-002 F-35\"},{\"t_id\":\"T0046\",\"weapon\":\"AGM-65\",\"unit\":\"18-002 KFX\"},{\"t_id\":\"T0055\",\"weapon\":\"현무-2\",\"unit\":\"C1사격대\"},{\"t_id\":\"T0064\",\"weapon\":\"슬램-ER\",\"unit\":\"17-003 F-35\"},{\"t_id\":\"T0073\",\"weapon\":\"AGM-65\",\"unit\":\"17-003 F-35\"}],\"seq_id\":\"D1\",\"type\":4}";
*/
const wss = new WebSocketServer({
    port : conf.WebSocket.port , 
    onmessage : function(ws,data){
        if( mqttAdapter && data ){
            let msg = JSON.parse(data);
            //테스트 용도
            
            //msg.message.cmd = "RES_TIA";
            //msg.message.index = 2;
            
            //
            mqttAdapter.publish(msg.topic, msg.message );

            //mqttAdapter.publish("WAA.HANDLER", test4);
        }
    }
});

console.log('try mqtt brokder : ' + conf.MqttServer.host + ":" + conf.MqttServer.port );
var mqttAdapter = new MqttAdapter({
    host: conf.MqttServer.host, 
    port: conf.MqttServer.port, 
    listens:[
        {
            topic:"TIA.HANDLER",  //표적식별
            onReady:function(topic){
                console.log("onready : " + topic);
            },
            onReceive:function(topic,message){
                message = JSON.parse(message);
                //console.log(topic + " received : " + message.toString() );
                if( message.cmd == "RES_TIA"){
                    let q = mybatisMapper.getStatement('targetMapper', 'res_tia', {idx:message.index}, format);
                    connection.query(q, function(err, result, fields) {
                        if (!err) {
                            message = Object.assign(message,result);
                            message.results = result;
                            message.results.forEach(r=>{
                                //r.mil_image = "D:/mapx/ccai/tia/org_images/N126E37.jpg";
                                r.base64 = base64_encode(r.image);
                            });
                            wss.publish(topic,message);
                        } else {r
                            console.log('query error : ' + err);
                        }
                    });
                }else if( message.cmd == "REQ_TIA"){

                }else{
                    wss.publish(topic,message);
                }
            }
        },
        {
            topic:"WAA.HANDLER", //무장할당
            onReady:function(topic){
                console.log("onready : " + topic);
            },
            onReceive:function(topic,message){
                //console.log(topic + " received : " + message.toString() );
                wss.publish(topic,message);
            }
        },
        {
            topic:"DSW.HANDLER", //상황도
            onReady:function(topic){
                console.log("onready : " + topic);
            },
            onReceive:function(topic,message){
                //console.log(topic + " received : " + message.toString() );
                wss.publish(topic,message);
            }
        }
    ]
});
global.test = mqttAdapter;
var connection = mysql.createConnection(conf.DatabaseServer);

console.log('try file watcher : ' + conf.MqttServer["watch-folder"] );

var fsWatcher = new FileWatcher({
    folder : conf.MqttServer["watch-folder"],
    watch : function(filename, act, data){

        let index = filename.lastIndexOf("N");
        let lastIndex = filename.lastIndexOf(".");
        var data = {cmd:"DET_TIA", org_image: filename, act : act, base64: data };

        if( index >= 0 && lastIndex > 0 && index < lastIndex ){
            let str = data.org_image.substr( index+1, lastIndex);
            index = str.lastIndexOf("E");
            if( index > 0 ){
                let latitude = parseFloat(str.substr(0,index));
                let longitude = parseFloat(str.substr(index+1));

                data.longitude = longitude;
                data.latitude = latitude;
            }
        }
        mqttAdapter.publish("TIA.HANDLER",data);
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
    var queryAlly = mybatisMapper.getStatement('testMapper', 'unit', JSON.parse(param), format);
    var queryBmoa = mybatisMapper.getStatement('testMapper', 'bmoa', JSON.parse(param), format);
    var queryEnemy = mybatisMapper.getStatement('testMapper', 'enemy_unit', JSON.parse(param), format);
    var queryAir = mybatisMapper.getStatement('testMapper', 'aircraft', JSON.parse(param), format);
    // var queryStm2 = req.query.queryStm2;
    // connection.connect();
    //동시에 실행시키는 방법 생각해보자...
    retObj = {};
    function completeJob(obj){
        if( retObj.ally && retObj.bmoa && retObj.enemy && retObj.aircraft && retObj.ship ){
            res.json(retObj);
        }
    }
    connection.query(queryAlly, function(err, result, fields) {    
        if (!err) { retObj.ally = result;  } else { retObj.ally = []; console.log('query error : ' + err); }
        completeJob(retObj);
    });
    connection.query(queryBmoa, function(err, result, fields) {
        if (!err) { retObj.bmoa = result; } else { retObj.bmoa = []; console.log('query error : ' + err); }
        completeJob(retObj);
    });
    connection.query(queryEnemy, function(err, result, fields) {
        if (!err) { retObj.enemy = result; } else { retObj.enemy = []; console.log('query error : ' + err); }
        completeJob(retObj);
    });
    connection.query(queryAir, function(err, result, fields) {
        if (!err) { retObj.aircraft = result; } else { retObj.aircraft = []; console.log('query error : ' + err); }
        completeJob(retObj);
    });
    connection.query(queryAir, function(err, result, fields) {
        if (!err) { retObj.ship = result; } else { retObj.ship = []; console.log('query error : ' + err); }
        completeJob(retObj);
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

server.get('/wpRecom/', (req, res) => {
    var param = req.query.param;
    var query = mybatisMapper.getStatement('wpRecom', 'wp_recom', JSON.parse(param), format);

    connection.query(query, function(err, wpRecom, fields) {
        if (!err) {
            res.json({ wpRecom: wpRecom });
        } else {
            console.log('query error : ' + err);
            res.send(err);
        }
    });
});

// mapper: mybatisMapper.getStatement


server.listen(port, '0.0.0.0');