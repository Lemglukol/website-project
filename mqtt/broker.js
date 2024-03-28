//let mosca = require('mosca')
import mosca from "mosca";
//var db = require('../config/database/database')

let settings = {
    port: 1234
}

let server = new mosca.Server(settings);

server.on('clientConnected', function(client) {
    console.log('client connected', client.id);
});
 
// fired when a message is received
server.on('published', function(packet, client) {
  message = packet.payload.toString()
  console.log(message);
});
 
server.on('ready', setup);
 
// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running');
}