"use strict";
let Unit = require('./models/UnitSchema')

<<<<<<< HEAD
class cacheUnit  {
=======
let Unit = require("./models/UnitSchema.js");

class CacheUnit  {
>>>>>>> b10087ddcac14f8b5eb6d1aad93527ebe08741b2
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
    for(var i = 0; i < 10; i++ ) {
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
        console.log(dataArr)


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