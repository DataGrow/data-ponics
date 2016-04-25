"use strict";



let wss = require("../server.js"),
    UnitClass = require("./UnitClass.js");


wss.on('connection', function connection(ws) {
  
  ws.on('message', function incoming(newReadings) {
    
    //broadcast stringifyed live data to clients
    ws.broadcast(newReadings);

    //parse JSON data
    newReadings = JSON.parse(newReadings);

    




    
  });
    
});

let Unit = require("./models/UnitSchema.js");

setInterval(function(){
  
    Unit.findById("571aaa4cc1b68a6a189305a1", function(err, queriedUnit) {        
      //get all arrays
      var dayArr = queriedUnit.day;
      var hourArr = dayArr[dayArr.length-1].hour;
      var dataArr = hourArr[hourArr.length-1].data;
      var avgData = { waterTemp: 0, airTemp: 0, humidity: 0, light: 0 };

      console.log("Days:", dayArr.length);
      console.log("Hours:", hourArr.length);
      console.log("DataPoints:", dataArr.length);


      //push new data to data arr
      dataArr.push(avgData);
  
      //if hour has 4 data objects add new hour
      if (dataArr.length >= 4) {        
        hourArr.push({ data: [ ] });
      }

      //if hour has 4 data objects add new hour
      if (hourArr.length >= 24) {
        dayArr.push({  hour: [{   data: [ ]   }]   });
      };

      

      queriedUnit.save();
    });
  
}, 1000);

