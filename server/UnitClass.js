"use strict";
let Unit = require('./models/UnitSchema')

class cacheUnit  {
  constructor(id, name, product, harvest) {
    this.id = id;
    this.name = name;
    this.product = product;
    this.harvest = harvest;

    this.dataPoints = [];
  } 

  getAvg(dataPoints) {
    let avgObj = { waterTemp: 0, airTemp: 0, humidity: 0, light: 0 };
    
    // get sum of all sensor data
    let sumObj = dataPoints.reduce(function(prevVal, curVal) {
        
        // iterate through sensor type in DataPoint Obj and add next value
        for(let reading in prevVal) {
          prevVal[reading] += curVal[reading];
        }

        return prevVal; 
    });

    // get average for each sensor type
    for(let reading in avgObj) {
      avgObj[reading] = sumObj[reading] / 900;  // take sum of readings and divide by num of datapoints
    }

    return avgObj;
  }

  pushToDB(avgData) {

    Unit.findByIdAndUpdate(this.id,
        { $push : { day[ day.length - 1 ].hour[ hour.length - 1 ].data : avgData } },
        ( err, unit ) => {
      
        }


  cacheDataPoint(newReading) {
    this.dataPoints.push(newReading);

    //if unit has 15 mins of data take average and push to DB
    if(this.dataPoints.length >= 900) {
      let fifteenMinAvg = this.getAvg(this.dataPoints);
      //pushToDB(fifteenMinAvg);
    }
  }

  /*collection.findByIdAndUpdate(
    1,
    {$push: {items: item}},
    {safe: true, upsert: true},
    function(err, model) {
        console.log(err);
    }
  );*/
  

}






module.exports = Unit