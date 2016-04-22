"use strict";

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserCollection = new Schema(
{
    owner: { type: String, required: true },
    numActiveUnits: { type: Number },
    numArchivedUnits: { type: Number },
    units: [ { type: Schema.Types.ObjectId, ref: 'Unit' } ] ,
    archivedUnits : [ { type: Schema.Types.ObjectId, ref: 'ArchivedUnit' } ] 
});

module.exports = mongoose.model('UserCollection', UserCollection);


