const WebSocket = require('ws');

class WebSocketServer {
    constructor(options){
        this.options = Object.assign({port:8083},options);
        this.wss = new WebSocket.Server({ port: this.options.port });
        console.log('try websocket server : ' + this.options.port );
        let _this = this;
        this.wss.on('connection', function connection(ws) {
            console.log('listening websocket server : ' + this.options.port);
            ws.on('message', function incoming(data) {
                //console.log('receive message in websocket server : ' + data );
                if( _this.options.onmessage ){
                    _this.options.onmessage(ws,data);
                }
            });
        });
    }
    publish(topic,msg){
        this.wss.clients.forEach(function each(client) {
            if (client && client.readyState === WebSocket.OPEN) {
                let data = {
                    topic:topic,
                    message:msg
                }
                client.send(JSON.stringify(data));
            }
        });
    }
}

module.exports = {WebSocketServer : WebSocketServer };
