'use strict';

let Archive = require('../models/ArchiveUnitSchema'),
    UserCollection = require('../models/UserCollection'),
    Unit = require('../models/UnitSchema');


let userCollectionId = "571e7669be6a90ca040bae04";

module.exports = {
    
    getUnitsList: function(req, res) {        
        UserCollection
            .findOne( {}, "units" )
            .then( function(err, UnitsList) {                
                if (err) {
                    res.status( 500 ).send( err );
                }
                    console.log( UnitsList );
                    res.send( UnitsList );

            });
    },

    createUnit: function(req, res) {
        new Unit(req.body).save( function(err, newUnit) {
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
        Unit.findById(req.params.unitId)
            .then(function(err, queriedUnit) {
                if(err) {
                    res.status( 300 ).send( err );
                }
                else {
                    res.status( 201 ).send( queriedUnit );
                }
            })
    },

    deleteUnit: function(req, res) {
        Unit.findByIdandRemove(req.params.unitId)
            .then(function(err, removedUnit) {
                if(err)
                    res.status(300).send(err);
                else
                    res.status(201).send(JSON.stringified("Unit Removed"));
            })
    },


    createCollection: function(req, res) {
        UserCollection.create(req.body).then(function(err, Collection) {
            if(err) 
                res.status(300).send(err);
            else
                res.status(200).send(Collection);
        })     
    }
    
    
};