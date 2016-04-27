'use strict';

let ctrl = require('./unitCtrl'),
    archive = require('../models/ArchiveUnitSchema'),
    user = require('../models/UserCollection'),
    unit = require('../models/UnitSchema'),
    apiCache = require('apicache').middleware;

module.exports = function( app ) {
    
    app.route(`/api/unit/:unitId`)
        .get(apiCache('2 minutes'), ctrl.getUnit)
        .delete(ctrl.decNumActiveUnits, ctrl.removeUnitFromUser, ctrl.deleteUnit);

    app.route(`/api/unit/`)
<<<<<<< HEAD
        .post( ctrl.incNumActiveUnits, ctrl.createUnit);
    
    app.route(`/api/archive`)
        .get(ctrl.getArchiveUnitsList)
        .post(ctrl.incNumArchiveUnits, ctrl.createArchiveUnit);
=======
        .post(ctrl.createUnit);
>>>>>>> df595e2629a4c3133df0e9e50205ac199394ba21
    
    app.route(`/api/unitsList`)
        .get(apiCache('2 minutes'),ctrl.getUnitsList);
    
    app.route(`/api/collection`)
       .post(ctrl.createCollection);
};