"use strict";

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Data = new Schema(
{
    waterTemp: { type: Number, required: true },
    airTemp: { type: Number, required: true },
    humidity: { type: Number, require: true },
    light: { type: Number, require: true }
});



let Units = new Schema(
{
    name: { type: String, required: true },
    product: { type: String, required: true },
    harvest: {
        id: { type: Number, required: true},
        startTime: { type: Date, default: Date.now }
    }, 

    day: [{
            hour: [{
                     Data
                  }]
         }]
});

let ActiveUnits = new Schema(
{
    numUnits: { type: Number, required: true },
    units: [ Units ]  
});

module.exports = mongoose.model('ActiveUnits', ActiveUnits);


