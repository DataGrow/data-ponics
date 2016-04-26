'use strict';

let ctrl = require('./unitCtrl'),
    archive = require('../models/ArchiveUnitSchema'),
    user = require('../models/UserCollection'),
    unit = require('../models/UnitSchema'),
    apiCache = require('apicache').middleware;

module.exports = function( app ) {
    
    app.route(`/api/unit/:unitId`)
        .get(ctrl.getUnit)
        .delete(ctrl.deleteUnit);

    app.route(`/api/unit/`)
        .post(apiCache('2 minutes'),ctrl.createUnit);
    
    app.route(`/api/unitsList`)
        .get(apiCache('2 minutes'),ctrl.getUnitsList);
    
    app.route(`/api/collection`)
       .post(apiCache('2 minutes'),ctrl.createCollection);
};