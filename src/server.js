const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8081;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.get('/map/juso/', (req, res) => {

    var url = req.query.url;
    var request = http.get(url, function(response) {
        var body = "";
        var jsonObj;
        response.on('data', (chunk) => {
                body += chunk;
                // res.header("Access-Control-Allow-Origin", "*");
            }).on('end', () => {
                console.dir(body);
                jsonObj = JSON.parse(body);
                res.json({ obj: jsonObj });
            })
            // jsonObj = JSON.parse(body);

    });


});

app.listen(port, () => console.log(`Listening on port ${port}`));