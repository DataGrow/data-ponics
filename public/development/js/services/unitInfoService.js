angular.module('dataGrow').service('unitInfoService', function( $http, $q ) {

	this.getData = function() {
		return $http.get(unit.data)
			.then(function(response) {
				return response;
			},
			.error(function(err) {
				alert('Error retrieving data');

			}),

		});
	
});	