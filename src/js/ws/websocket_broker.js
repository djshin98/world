//const WebSocket = require('ws');

const BROKER_INNER_TOPIC = "__websocket_broker__";
class WebSocketBroker{
    constructor(options){
        this.options = Object.assign({host:"localhost",port:"8083", uri:""},options);
        this.ws = new WebSocket("ws://"+this.options.host+":"+this.options.port + "/" + this.options.uri);

        let _this = this;
        this.ws.onopen = function open() {
            _this.send(BROKER_INNER_TOPIC,"open");
        };

        this.ws.onclose = function close() {
            if( _this.options.onclose ){
                _this.options.onclose();
            }else{
                console.log('disconnected : ' + _this.options.host + ":" + _this.options.port + "/" + _this.options.uri );
            }
        };

        this.ws.onmessage = function(event) {
            const data = JSON.parse(event.data);
            if( _this.options.onmessage ){
                _this.options.onmessage(data);
            }else{
                console.log( event.data );
            }
        };
    }
    send(topic,msg){
        let data = { topic : topic , message : msg };
        this.ws.send( JSON.stringify(data) );
    }
};

module.exports = { WebSocketBroker : WebSocketBroker };
