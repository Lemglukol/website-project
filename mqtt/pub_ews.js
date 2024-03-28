//let mqtt = require('mqtt')
import mqtt from 'mqtt'
//const client = mqtt.connect('mqtt://localhost:1234')
const client = mqtt.connect('mqtt://test.mosquitto.org')
var topic = 'farhantest123'
//var topic = 'testsensorews'

// client.on('connect', ()=>{
//     setInterval(()=>{
//         client.publish(topic, message)
//         console.log('Message sent!')
//     }, 5000)
// })

//Publisher (topic)
client.on('connect',() => {
    setInterval(() => {
        console.log('--------------------');
        //creating random temperatures between -5 and 5
        var temperature = Math.floor((Math.random() * 30) + 5);
        var msg1 = temperature.toString() + ' ºC';

        //sending the temperature values
        //client.publish(topic,msg);
        //console.log('Temperature is ' + msg1);

        //creating random time value 24h format
        var time = Math.floor((Math.random() * 24));
        var sen3 = Math.floor((Math.random() * 10));
        var sen4 = Math.floor((Math.random() * 8));
        var msg2 = time.toString()
        var msg3 = sen3.toString()
        var msg4 = sen4.toString()


        //sending time value
        //client.publish(topic2,msg2);
       // console.log('Time is ' + msg2);

        //Console log sent message
        console.log('Temperature and Time sent!');
        console.log(msg1+ ' & '+ msg2 )
        console.log('--------------------');
     
        var data = {"AHT20":msg1, "BNO55":msg2, "MPX5010":msg3, "SER0308":msg4};
        var msg = JSON.stringify(data);
        client.publish(topic,msg);
    }, 6000)
})
