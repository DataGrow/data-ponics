angular.module('dataGrow').controller('activeUnitsCtrl', ['$scope', '$rootScope', 'unitInfoService', 'websocketService', function($scope, $rootScope, unitInfoService, websocketService) {

 // websockets
  websocketService.startWs();

	$scope.websocketUpdate = {};

		window.setInterval(function() {
		$scope.websocketUpdate = websocketService.getUpdate();
		console.log($scope.websocketUpdate);
	},2000);

  $scope.activeUnits = $rootScope.activeUnits;

}]);

//Get list of active units from server from /api/units/active

//Get websocket data to display on each unit from websocketService