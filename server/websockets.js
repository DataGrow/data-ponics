"use strict";



let wss = require("../server.js"),
    UnitClass = require("./UnitClass.js");

let Unit01 = new UnitClass( "571aaa4cc1b68a6a189305a1", "Unit Prime", "weed" );

wss.on('connection', function connection(ws) {

  wss.broadcast = function broadcast(data) {
    wss.clients.forEach(function each(client) {
      client.send(data);
    });
  };
  
  ws.on('message', function incoming(newReadings) {

    //broadcast stringifyed live data to clients
    wss.broadcast(newReadings);
    
    //parse JSON data
    newReadings = JSON.parse(newReadings);
    
    //Adding data to local server cache
    Unit01.cacheDataPoint(newReadings);
  });
    
});
//
// let Unit = require('./models/UnitSchema')
//
// setInterval (function() {
//
//
//
//   function pushToDB(avgData) {
//     Unit.findById('571fd58d5110c15712568a0a', function(err, queriedUnit) {
//       //get all arrays
//       var dayArr = queriedUnit.day;
//       var hourArr = dayArr[dayArr.length-1].hour;
//       var dataArr = hourArr[hourArr.length-1].data;
//
//       //push new data to data arr
//       dataArr.push(avgData);
//
//       //if hour has 4 data objects add new hour
//       if (dataArr.length >= 4) {
//         hourArr.push({ data: [ ] });
//       }
//
//       //if day has 24 hour objects add new day
//       if (hourArr.length >= 24) {
//         dayArr.push({  hour: [{   data: [ ]   }]   });
//       };
//       console.log(queriedUnit);
//       queriedUnit.save();
//     });
//
//   }
//
//
//   pushToDB( {waterTemp : Math.floor(Math.random() * (80 - 50)) + 50,
//   airTemp : Math.floor(Math.random() * (100 - 35)) + 35,
//   humidity : Math.floor(Math.random() * 100),
//   light : Math.floor(Math.random() * 1001) } );
//
//
// },750);