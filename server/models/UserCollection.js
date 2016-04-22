"use strict";

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserCollection = new Schema(
{
    numUnits: { type: Number, required: true },
    units: [ { type: Schema.Types.ObjectId, ref: 'Unit' } ] ,
    archivedUnits : [ { type: Schema.Types.ObjectId, ref: 'ArchivedUnit' } ] 
});

module.exports = mongoose.model('UserCollection', UserCollection);


