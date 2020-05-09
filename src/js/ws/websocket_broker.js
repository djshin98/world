var { isValid } = require('../core/block');

const BROKER_INNER_TOPIC = "__websocket_broker__";
class WebSocketBroker {
    constructor(options) {
        this.options = Object.assign({ host: "localhost", port: "8083", uri: "" }, options);
        this.ws = new WebSocket("ws://" + this.options.host + ":" + this.options.port + "/" + this.options.uri);
        this.topics = {};
        let _this = this;
        this.ws.onopen = function open() {
            _this.send(BROKER_INNER_TOPIC, "open");
            console.log('-------------------------------------------------------------------------');
            console.log('|                 WebSocketBroker( version 1.1.2)                       |');
            console.log('-------------------------------------------------------------------------');
            if (_this.options.onreconnected) {
                _this.options.onreconnected(_this);
            }
        };

        this.ws.onclose = function close() {
            if (_this.options.onclose) {
                _this.options.onclose();
            } else {
                console.log('disconnected : ' + _this.options.host + ":" + _this.options.port + "/" + _this.options.uri);
            }
            console.log('Socket is closed. Reconnect will be attempted in 10 second.');
            if (_this.options.reconnectable == true) {
                setTimeout(function() {
                    _this.reconnect();
                }, 10000);
            }
        };

        this.ws.onmessage = function(event) {
            const data = JSON.parse(event.data);
            if (_this.options.onmessage) {
                _this.options.onmessage(data);
                if (Cesium.defined(data.topic) && Cesium.defined(_this.topics[data.topic])) {
                    _this.topics[data.topic](data.topic, data);
                }
            } else {
                console.log(event.data);
            }
        };
    }
    onmessage(topic, callback) {
        this.topics[topic] = callback;
    }
    reconnect() {
        this.ws = undefined;
        let ws = new WebSocketBroker(this.options);
    }
    send(topic, msg) {
        let data = { topic: topic, message: msg };
        this.ws.send(JSON.stringify(data));
    }
};

module.exports = { WebSocketBroker: WebSocketBroker };