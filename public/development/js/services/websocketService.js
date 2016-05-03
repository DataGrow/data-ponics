angular.module('dataGrow').service('websocketService', function( $http, $q, $log, ws) {


	//("ws://dataponics.heroku.com");

	var lastUpdate = {};

	var fakeData = {
		waterTemp: 65 ,
		airTemp  : 74 ,
		humidity : 70 ,
		lux      : 20000
	};

	var posOrNeg = function () {
		return Math.random() <= .5 ? 1 : -1;
	};

	this.startWs = function () {

		ws.getReadyState();

		ws.on( 'message' , function ( event ) {
			
			lastUpdate = JSON.parse( event.data );

			//lastUpdate = event.data;
		} );


		// window.setInterval (function() {
		//
		//
		// 	fakeData.waterTemp += Math.floor(Math.random()*2) * posOrNeg();
		//   	fakeData.airTemp += Math.floor(Math.random()*2) * posOrNeg();
		//   	fakeData.humidity += Math.floor(Math.random()*2) * posOrNeg();
		//   	fakeData.lux += Math.floor(Math.random()*10) * posOrNeg();
		//     ws.send(JSON.stringify(fakeData));
		//
		// },2000)  
		};

		this.getUpdate = function () {
			return lastUpdate;
		}


});



