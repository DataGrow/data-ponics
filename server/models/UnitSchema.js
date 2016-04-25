'use strict';

let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let Data = new Schema(
{
    waterTemp: Number,
    airTemp: Number,
    humidity: Number,
    light: Number
});



let Unit = new Schema(
{
    name: { type: String, required: true },
    product: { type: String, required: true },
    harvest: {
        id: { type: Number, required: true},
        startTime: { type: Date, default: Date.now }
    }, 

    day: [{
            hour: [{
                     data: [ Data ]
                  }]
         }]
});

module.exports = mongoose.model("Unit", Unit, "Unit");





