let unitCtrl = require('./unitCtrl');

module.exports = function( app ) {
    
    app.route(`/api/Unit`)
        .get(unitCtrl.getActiveUnits)
    
};