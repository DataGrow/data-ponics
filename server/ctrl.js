"use strict";

var ActiveUnits = require("./models/ActiveUnitsSchema.js");

function getUnitsList() {
  ActiveUnits.findById(
    "571a51621c15f9423cf9b1f1",
    "units",
    function(err, UnitsList) {
      if(err)
        return err;
      else
        console.log(UnitsList);
        return UnitsList;
    }
  )
}

function getUnit(UnitId) {
  ActiveUnits.findById("571a51621c15f9423cf9b1f1", `units`)
             .id(UnitId)
             .then( function(err, Unit) {
                if(err)
                  return err;
                else
                  console.log(Unit);
                  return Unit;
              })
}


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
  ActiveUnits.findByIdAndUpdate(
    "571a51621c15f9423cf9b1f1",
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

getUnit("571a517d4397586a3c626b99");
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