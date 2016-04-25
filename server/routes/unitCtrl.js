'use strict';

let Archive = require('../models/ArchiveUnitSchema'),
    UserCollection = require('../models/UserCollection.js'),
    Unit = require('../models/UnitSchema');


let userCollectionId = "571a80da47dd5d6c5bd44d3b";

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
        Unit.create(req.body, function(err, newUnit) {

            //add newUnit to the users collection of active units
            UserCollection.findByIdAndUpdate(
                    userCollectionId,    
                    {$addToSet: {units: newUnit._id}},
                    {safe: true, upsert: true, new: true}, 
                    function(err, updatedCollection) {
                        console.log(updatedCollection);                        
                        if(err) 
                            res.status(300).send(err);
                        else
                            res.status(201).send(updatedCollection.units);
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