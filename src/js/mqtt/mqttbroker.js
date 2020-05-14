var mqtt = require('mqtt');
var Iconv = require('iconv').Iconv;
var iconv = new Iconv('EUC-KR', 'UTF-8');
class MqttAdapter {
    constructor(options) {
        this.options = Object.assign({ host: "localhost", port: 1833, listens: [] }, options);
        /*
        if( !this.options.host ){
          this.options.host = serverConfig.MqttServer.host;
        }
        if( !this.options.port ){
          this.options.port = serverConfig.MqttServer.port;
        }
        */
        this.client = mqtt.connect({ host: this.options.host, port: this.options.port });
        console.log("try connect mqtt : " + this.options.host);
        let _this = this;
        this.client.on('connect', function() {
            console.log("connected mqtt server : " + _this.options.host);
            _this.options.listens.forEach(listen => {
                _this.client.subscribe(listen.topic, function(err) {

                    if (!err) {
                        if (listen.onReady) {
                            listen.onReady(listen.topic);
                        } else {
                            console.log("listening " + listen.topic);
                        }
                    }
                })
            });
        });

        this.client.on('message', function(topic, message) {
            let listen = _this.options.listens.find(listen => { return (listen.topic == topic) ? true : false; });
            if (listen) {
                let s = iconv.convert(message);
                let msg = s.toString();
                listen.onReceive(listen.topic, msg);
            } else {
                console.log("onreceive : " + topic + " --> " + message);
            }

            //client.end()
        });
    }
    publish(channel, msg) {
        if (channel && channel.length > 0) {
            if (msg) {
                if (typeof(msg) == "object") {
                    msg = JSON.stringify(msg);
                }
                console.log("publish :" + channel + " = " + msg.substr(0, 20));
                this.client.publish(channel, msg);
                return true;
            }
        }
        return false;
    }
    destroy() {
        this.client.end();
        console.log("----end----");
    }
};



module.exports = { MqttAdapter: MqttAdapter };