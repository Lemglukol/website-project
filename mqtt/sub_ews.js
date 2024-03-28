import mqtt from "mqtt";
import mysql from "mysql";
import db from '../config/database.js';
//const controller = require('../controller/index')

//var client  = mqtt.connect('mqtt://localhost:1234')
var client  = mqtt.connect('mqtt://test.mosquitto.org')
//var topic = 'farhantest123';
var topic = 'tessensorews';

client.on('connect', ()=>{
    client.subscribe(topic, mqtt_subscribe)
});
function mqtt_subscribe() {
    console.log("Subscribed to " + topic);
}

client.on('message', mqtt_messsageReceived);
function mqtt_messsageReceived(topic, message, packet) {
	console.log('Message received = ' + message);
    //insert_message(message, packet);
}

function insert_message(message, packet) {
    //message = packet.payload.toString()
    const obj = JSON.parse(message)

    var sql = "INSERT INTO riset1_ews_wonosobo set ?";
    var params = {
        //data1: obj.temp,
        //data2: obj.time
        AHT20: obj.AHT20,
        BNO55: obj.BNO55,
        MPX5010: obj.MPX5010,
        SER0308: obj.SER0308
    };

    sql = mysql.format(sql, params);	
    db.query(sql, function (error, results) {
        if (error) throw error;
        console.log("1 record inserted");
        });
    };		

//export default subs_ews