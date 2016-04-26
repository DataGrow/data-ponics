"use strict";



let wss = require("../server.js"),
    UnitClass = require("./UnitClass.js");

let Unit01 = new UnitClass( "571aaa4cc1b68a6a189305a1", "Unit Prime", "weed" );

wss.on('connection', function connection(ws) {

  
  ws.on('message', function incoming(newReadings) {
    
    //broadcast stringifyed live data to clients
    ws.broadcast(newReadings);

    //parse JSON data
    newReadings = JSON.parse(newReadings);
    
    
    
  });
    
});

