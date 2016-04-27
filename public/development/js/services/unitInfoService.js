angular.module('dataGrow')
.service('unitInfoService', function( $http, $q ) {

	this.getAllUnits = function() {
		return $http.get('/api/unitsList/').then( function(response) {
			return response;
		});
	};

	this.getUnit = function (unitId) {
		return $http.get('/api/unit/' + unitId)
			.success(function(response){
				return response;
		});
	}

});
