angular.module('dataGrow')
.controller('landingCtrl', function($scope, $rootScope, unitInfoService, websocketService) {

	// websocketService.startWs();
	//
	// $rootScope.websocketUpdate = {};

	$scope.getUnitsList = function() {
		unitInfoService.getAllUnits().then (
				function(response) {
					$rootScope.activeUnits = response.data;
					console.log($rootScope.activeUnits);
				}, function (error) {
					console.log('error: ', error);
				});
	};

	$scope.getUnitsList();

	// window.setInterval(function() {
	// 	$rootScope.websocketUpdate = websocketService.getUpdate();
	// 	// console.log($scope.websocketUpdate);
	// },2000);

});
