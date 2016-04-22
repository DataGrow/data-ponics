'use strict';

let Archive = require('../models/ArchiveUnitSchema'),
    User = require('../models/UserCollection'),
    Unit = require('../models/UnitSchema');

module.exports = {
    
    getUnitsList: ( req, res ) => {

        
        User.find({}, ( err , UserCollection ) => {
            
            if (err) {
                return res.status(500).send(err);
            }
            
            res.send(UserCollection);
            
        })
    }
    
    
    
};