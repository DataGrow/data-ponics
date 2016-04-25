'use strict';

let ctrl = require('./unitCtrl'),
    archive = require('../models/ArchiveUnitSchema'),
    user = require('../models/UserCollection'),
    unit = require('../models/UnitSchema');
    
    


module.exports = function( app ) {
    
    app.route(`/api/unit/`)
        .get()
        
        .post(ctrl.createUnit);
    
    app.route(`/api/units`)
        .get(ctrl.getUnitsList)

    app.route(`/api/collection`)
       .post(ctrl.createCollection);
    
};