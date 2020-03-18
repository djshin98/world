const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8082;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/map/juso/', (req, res) => {
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

app.listen(port, () => console.log(`Listening on port ${port}`));