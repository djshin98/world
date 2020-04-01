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
server.listen(port, () => console.log(`Listening on port ${port}`));

server.get('/map/juso/', (req, res) => {
    var url = req.query.url;
    console.log(url);
    var request = http.get(url, function (response) {
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
