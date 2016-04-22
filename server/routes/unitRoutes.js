let unitCtrl = require('./unitCtrl'),
    unit = require('../temp');


module.exports = function( app ) {
    
    app.route(`/api/Unit`)
        .get(unitCtrl.getUnit)
        .post(unit.createUnit)
    
    app.route(`/api/active`)
        .get(unitCtrl.getActive)
        .post(unit.createActiveUnit)
    
};