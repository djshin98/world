var mqtt = require('mqtt');

const serverConfig = require("../../conf/server.json");

class MqttBroker{
  constructor(options){
    this.options = Object.assign({/*host:"localhost",*/listens:[]},options);
    if( !this.options.host ){
      this.options.host = serverConfig.MqttServer.host;
    }
    this.client  = mqtt.connect('mqtt://' + this.options.host);
    console.log("try connect mqtt : " + this.options.host );
    let _this = this;
    this.client.on('connect', function () {
      console.log("connected mqtt server : " + _this.options.host );
      _this.options.listens.forEach(listen=>{
        _this.client.subscribe(listen.topic, function (err) {
          
          if (!err) {
            if( listen.onReady ){
              listen.onReady( listen.topic );
            }else{
              console.log("listening " + listen.topic );
            }
          }
        })
      });
    });
 
    this.client.on('message', function (topic, message) {
      let listen = _this.options.listens.find(listen=>{ return (listen.topic == topic)?true:false; });
      if( listen ){
        listen.onReceive(listen.topic, message);
      }else{
        console.log("onreceive : " + topic + " --> " + message);
      }
      
      //client.end()
    });
  }
  publish(channel,msg){
    if( channel && channel.length > 0 ){
      if( msg ){
        if( typeof( msg ) == "object" ){
          msg = JSON.stringify(msg);
        }
        this.client.publish(channel,msg);
        return true;
      }
    }
    return false;
  }
  destroy(){
    this.client.end();
    console.log("----end----");
  }
}
/*
global.broker = new MqttBroker({listens:[
  {
    topic:"#",
    onReady:function(topic){
      console.log("onready : " + topic);
    },
    onReceive:function(topic,message){
      console.log(topic + " received : " + message.toString() );
    },
  },
  {
    topic:"a",
    onReady:function(topic){
      console.log("onready : " + topic);
    },
    onReceive:function(topic,message){
      let num = message.toString();
      let hand = num.split("").some(n=>{ return (n=='3'||n=='6'||n=='9')?true:false;});
      let no = parseInt(message.toString());
      if( no % 3 == 0 || hand ){
        console.log(topic + " received : 짝!!!" );  
      }else{
        console.log(topic + " received : " + message.toString() );
      }
      let v = parseInt(message.toString()) + 1;
      
      if( v > 888889 ){
        broker.destroy();
      }else{
        broker.publish("b", ""+ v );
      }
    }
  },
  {
    topic:"b",
    onReady:function(topic){
      console.log("onready : " + topic);
    },
    onReceive:function(topic,message){
      let num = message.toString();
      let hand = num.split("").some(n=>{ return (n=='3'||n=='6'||n=='9')?true:false;});
      let no = parseInt(message.toString());
      if( no % 3 == 0 || hand ){
        console.log(topic + " received : 짝!!!" );  
      }else{
        console.log(topic + " received : " + message.toString() );
      }
      let v = parseInt(message.toString()) + 1;
      
      if( v > 888889 ){
        broker.destroy();
      }else{
        broker.publish("c", ""+ v );
      }
    }
  },
  {
    topic:"c",
    onReady:function(topic){
      console.log("onready : " + topic);
    },
    onReceive:function(topic,message){
      let num = message.toString();
      let hand = num.split("").some(n=>{ return (n=='3'||n=='6'||n=='9')?true:false;});
      let no = parseInt(message.toString());
      if( no % 3 == 0 || hand ){
        console.log(topic + " received : 짝!!!" );  
      }else{
        console.log(topic + " received : " + message.toString() );
      }
      let v = parseInt(message.toString()) + 1;
      
      if( v > 888889 ){
        broker.destroy();
      }else{
        broker.publish("a", ""+ v );
      }
    }
  }
]});

broker.publish("a", "899990");
*/


