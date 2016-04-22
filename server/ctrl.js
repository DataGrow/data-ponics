"use strict";

var ActiveUnits = require("./models/ActiveUnitsSchema.js");

module.exports = {

    getUnitsList: function ( ActiveUnitId ) {
        ActiveUnits.findById(
            "571a51621c15f9423cf9b1f1" ,
            function ( err , ActiveUnits ) {
                if ( err )
                    return err;
                else
                    return ActiveUnits.units;
            }
        )
    } ,


    createActiveUnit: function () {
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
    } ,
    createUnit : function ( Unit ) {
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
    } ,


    unit01: {
        name   : "unit01" ,
        product: "weed" ,
        harvest: {
            id: 1
        } ,
        day    : []
    }

};
//createActiveUnit();
//createUnit(unit01);

/*collection.findByIdAndUpdate(
    1,
    {$push: {items: item}},
    {safe: true, upsert: true},
    function(err, model) {
        console.log(err);
    }
  );*/