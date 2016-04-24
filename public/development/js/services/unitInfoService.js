angular.module('dataGrow').service('unitInfoService', function( $http, $q ) {

	let ws = new WebSocket('ws://localhost:8000');
	
	ws.getData = function() {
		return $http.get(unit.data)
			.then(function(response) {
				return response;
			},
			.error(function(err) {
				alert('Error retrieving data');

			}),

		});
	
});	