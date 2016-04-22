"use strict";

var ActiveUnits = require("./models/ActiveUnitsSchema.js");


function createActiveUnit() {
  ActiveUnits.create(
    { 
      numUnits: 0,
      units: []
    }, function(err, ActiveUnit) {
      if(err)
        console.log("ERROR: ", err);
      else
        console.log("Units List: ", ActiveUnit);
    });
}

function createUnit(Unit) {
  console.log("CREATING UNIT");

  ActiveUnits.findByIdAndUpdate(
    "571a461a2fbb5a3834619dc8",
    {$addToSet: {units: Unit} },

    function(err, ActiveUnits) {
      if(err)
        console.log(err);
      else {    
        console.log(ActiveUnits);          
        console.log(ActiveUnits.units[ActiveUnits.units.length-1]);
      }
    }
  )
}


var unit01 =  {
  name: "unit01",
  product: "weed",
  harvest: {
      id: 1,
  }, 

  day: []
};

//createActiveUnit();
//createUnit(unit01);

/*collection.findByIdAndUpdate(
    1,
    {$push: {items: item}},
    {safe: true, upsert: true},
    function(err, model) {
        console.log(err);
    }
  );*/