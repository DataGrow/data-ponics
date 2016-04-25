"use strict";

let Unit = require("./models/UnitSchema.js");

class CacheUnit  {
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
    Unit.findById(this.id, function(err, queriedUnit) {

      //push new data to data arr
      let dataArr = queriedUnit.day[day.length-1].hour[hour.length-1].data;
      dataArr.push(avgData);


      //if hour has 4 data objects add new hour
      if (dataArr.length >= 4) {
        queriedUnit.day[day.length-1].hour.push({ data: [ ] });
      }

      //if hour has 4 data objects add new hour
      if (queriedUnit.day[day.length-1].hour.length >= 24) {
        queriedUnit.day.push({
            hour: [{
                     data: [ ]
                  }]
            });
      };

      queriedUnit.save();
    });
            
  }


  cacheDataPoint(newReading) {
    this.dataPoints.push(newReading);

    //if unit has 15 mins of data take average and push to DB
    if(this.dataPoints.length >= 900) {
      let fifteenMinAvg = this.getAvg(this.dataPoints);
      //pushToDB(fifteenMinAvg);
    }
  }
  
}






module.exports = CacheUnit;