'use strict';

let Archive = require('../models/ArchiveUnitSchema'),
    UserCollection = require('../models/UserCollection.js'),
    Unit = require('../models/UnitSchema');


let userCollectionId = "571e7669be6a90ca040bae04";

module.exports = {
    
    getUnitsList: function(req, res) {        
        UserCollection
<<<<<<< HEAD
            .findOne( {}, "units" )
            .populate('units')
            .exec( function(err, UnitsList) {                
                if (err) {
                    res.status( 500 ).send( err );
                }
                    res.send( UnitsList );
=======
            .findOne( {} )
            .populate( "units" )
            .exec( function(err, userCollection) {                
                if (err) 
                    res.status( 500 ).send( err );
                else
                    res.send( userCollection.units );
>>>>>>> df595e2629a4c3133df0e9e50205ac199394ba21
            });
    },

    getArchiveUnitsList: function( req, res ) {
        UserCollection
            .findOne( {}, 'archivedUnits' )
            .populate('archivedUnits')
            .exec( function( err, archiveUnits ) {
                if (err) {
                    return res.status(500).send(err);
                }
                res.send( archiveUnits )
            })
    },

    createUnit: function(req, res) {
        Unit.create(req.body, function(err, newUnit) {
            //add newUnit to the users collection of active units
            UserCollection.findByIdAndUpdate(
<<<<<<< HEAD
                    userCollectionId,    
                    {$addToSet: {units: newUnit._id}},
                    {safe: true, upsert: true, new: true}, 
                    function(err, updatedCollection) {
                        if(err)
                            res.status(300).send(err);
                        else
                            res.status(201).send(updatedCollection.units);
                    }
=======
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
>>>>>>> df595e2629a4c3133df0e9e50205ac199394ba21
            )
        })            
    },

    incNumActiveUnits: function ( req, res, next ) {
        UserCollection.findByIdAndUpdate(
            userCollectionId,
            { $inc: { numActiveUnits : 1 }},
            function( err, updatedUser) {
                next();
            }
        )
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
    
    createArchiveUnit: function( req, res ) {
        new Archive( req.body ).save( function( err, newUnit ) {
            //add newUnit to the users collection of active units
            UserCollection.findByIdAndUpdate(
                userCollectionId,
                {$addToSet: {archivedUnits: newUnit._id}},
                {safe: true, upsert: true, new: true},
                function( err, updatedCollection ) {
                    if( err )
                        res.status( 300 ).send( err );
                    else
                        res.status( 201 ).send( updatedCollection.units );
                }
            )
        })
    },

    incNumArchiveUnits: function ( req, res, next ) {
        UserCollection.findByIdAndUpdate(
            userCollectionId,
            { $inc: { numArchiveUnits : 1 }},
            function( err, updatedUser) {
                next();
            }
        )
    },

    deleteUnit: function(req, res) {
        Unit.findByIdAndRemove(req.params.unitId)
            .then(function(err, removedUnit) {
                if(err)
                    res.status(300).send(err);
                else
                    res.status(201).send(JSON.stringified("Unit Removed"));
            })
    },

    removeUnitFromUser: function( req, res, next ) {
        UserCollection.findByIdAndUpdate(
            userCollectionId,
            { $pull : { units: req.params.unitId }},
            function( err, updatedCollection ) {
                next();
            }
        )
    },

    decNumActiveUnits: function ( req, res, next ) {
        UserCollection.findByIdAndUpdate(
            userCollectionId,
            { $inc: { numActiveUnits : -1 }},
            function( err, updatedUser) {
                next();
            }
        )
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