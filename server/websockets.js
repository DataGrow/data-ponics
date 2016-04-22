"use strict";



let wss = require("../server.js"),
    ActiveUnits = require("./models/ActiveUnitsSchema.js"),
    UnitClass = require("./UnitClass.js");


wss.on('connection', function connection(ws) {
  
  ws.on('message', function incoming(newReadings) {
    
    //broadcast stringifyed live data to clients
    ws.broadcast(newReadings);

    //parse JSON data
    newReadings = JSON.parse(newReadings);

    




    
  });
    
});

