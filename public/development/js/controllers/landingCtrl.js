angular.module('dataGrow')
.controller('landingCtrl', function($scope, $rootScope, unitInfoService, websocketService, ArchivedUnit) {

	websocketService.startWs();

	//$scope.unitsList = ArchivedUnit;

	
	$scope.getUnitsList = function() {
		var promise = unitInfoService.getAllUnits();
			return promise.then (
				function(response) {
					$rootScope.activeUnits = response.data;
				}, function (error) {
					console.log('error: ', error);
				});
		};
	
});
