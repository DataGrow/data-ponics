let unit = require('../ctrl'),
    ActiveUnits = require('../models/ActiveUnitsSchema');


module.exports = function( app ) {
    
    app.route(`/api/unit/:unitId`)
        .get(unit.getUnit)
        
        .post(function ( Unit ) {
            console.log( "CREATING UNIT" );

            ActiveUnits.findByIdAndUpdate(
                "571a51621c15f9423cf9b1f1" ,
                { $addToSet: { units: Unit } } ,

                function ( err , ActiveUnits ) {
                    if ( err )
                        console.log( err );
                    else {
                        console.log( ActiveUnits );
                        console.log( ActiveUnits.units[ ActiveUnits.units.length - 1 ] );
                    }
                }
            )
        })
    
    app.route(`/api/active`)
        .get(function ( ActiveUnitId ) {
            ActiveUnits.findById(
                "571a51621c15f9423cf9b1f1" ,
                function ( err , ActiveUnits ) {
                    if ( err )
                        return err;
                    else
                        return ActiveUnits.units;
                }
            )
        })
        
        .post(function () {
        ActiveUnits.create(
            {
                numUnits: 0 ,
                units   : []
            } , function ( err , ActiveUnit ) {
                if ( err )
                    console.log( "ERROR: " , err );
                else
                    console.log( "Units List: " , ActiveUnit );
            } );
    })
    
};