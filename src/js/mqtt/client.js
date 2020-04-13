var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://192.168.0.1');
 
client.on('connect', function () {
  client.subscribe('olive', function (err) {
    if (!err) {
      client.publish('test/topic', 'Hello mqtt')
    }
  })
})
 
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})

client.publish('test/topic', 'Hello Test');