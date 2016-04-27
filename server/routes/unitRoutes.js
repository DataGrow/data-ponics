'use strict';

let ctrl = require('./unitCtrl'),
    archive = require('../models/ArchiveUnitSchema'),
    user = require('../models/UserCollection'),
    unit = require('../models/UnitSchema'),
    apiCache = require('apicache').middleware;

module.exports = function( app ) {
    
    app.route(`/api/unit/:unitId`)
        .get(ctrl.getUnit)
        .delete(ctrl.decNumActiveUnits, ctrl.deleteUnit);

    app.route(`/api/unit/`)
        .post(apiCache('2 minutes'), ctrl.incNumActiveUnits, ctrl.createUnit);
    
    app.route(`/api/archive`)
        .get(ctrl.getArchiveUnitsList)
        .post(apiCache('2 minutes'),ctrl.createArchiveUnit);
    
    app.route(`/api/units`)
        .get(apiCache('2 minutes'),ctrl.getUnitsList);
    
    app.route(`/api/collection`)
       .post(apiCache('2 minutes'),ctrl.createCollection);
};