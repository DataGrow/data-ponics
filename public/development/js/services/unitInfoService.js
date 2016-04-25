angular.module('dataGrow')
.service('unitInfoService', function( $http, $q  ) {

	var ws = new WebSocket("ws://dataponics.heroku.com");


	ws.getData = function() {
		return $http.get(unit.data)
			.then(function(response) {
				return response.data;
			})
			.error(function(err) {
				alert('Error retrieving data');

			})
		};

	allUnits = function() {
		return $http.get('/api/units/active');
	}

	UnitId = function() {
		return $http.get('/api/unit/:unitId');
	}
	// this.getArchivedData = function() {
	// 	return $http.get(unit.data) 
	// 		.then(function(response) {
	// 			return response.data;
	// 		})
	// 		.error(function(err) {
	// 			alert('Error retrieving data');
	// 		});
});
		
	
