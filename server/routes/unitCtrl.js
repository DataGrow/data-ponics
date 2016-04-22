'use strict';

let Archive = require('../models/ArchiveUnitSchema'),
    UserCollection = require('../models/UserCollection.js'),
    Unit = require('../models/UnitSchema');


let userCollectionId = "571a73b7b1fb75f953934e66";

module.exports = {
    
    getUnitsList: function(req, res) {        
        UserCollection
            .findOne( {}, "units" )
            .then( function(err, UnitsList) {                
                if (err) 
                   res.status(500).send(err);
                else
                   res.send(UnitsList);                
            });
    },

    createUnit: function(req, res) {
        Unit.create(req.body)
            .then(function(err, newUnit) {
                UserCollection.findByIdAndUpdate(
                    userCollectionId,    //query
                    {$push: {units: newUnit}}, //push new unit
                    {safe: true, upsert: true}, //options
                    function(err, UserCollection) {
                        if(err) 
                            res.status(300).send(err);
                        else
                            res.status(201).send(UserCollection);
                    }
                )
            })
    },

    getUnit: function(req, res) {
        Unit.findById(req.body)
            .then(function(err, queriedUnit) {
                if(err)
                    res.status(300).send(err);
                else
                    res.status(201).send(queriedUnit);
            })
    },

    deleteUnit: function(req, res) {
        Unit.findByIdandRemove(req.body)
            .then(function(err, removedUnit) {
                if(err)
                    res.status(300).send(err);
                else
                    res.status(201).send(JSON.stringified("Unit Removed"));
            })
    },










    createCollection: function(req, res) {
        console.log(UserCollection);

        UserCollection.create(req.body).then(function(err, Collection) {
            if(err) 
                res.status(300).send(err);
            else
                res.status(200).send(Collection);
        })     
    }
    
    
};