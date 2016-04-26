angular.module('dataGrow')
.service('unitInfoService', function( $http, $q  ) {


	this.getData = function() {
		return $http.get(unit.data)
			.then(function(response) {
				return response.data;
			})
			.error(function(err) {
				alert('Error retrieving data');

			})
		};

	this.getAllUnits = function() {
		return $http.get('/api/unitsList/').then( function(response) {
			return response;
		});

	}

	this.UnitId = function() {
		return $http.get('/api/unit/:unitId');
		console.log([Unit.day[1].hour[1].data[1]]);
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
		
	
