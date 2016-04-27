angular.module('dataGrow')
.service('archivedUnitsService', function( $http, $q  ) {

	this.getArchivedUnits = function() {
		return $http.get('/api/archive/').then( function(response) {
			return response;
		});
	}
}