angular.module('dataGrow').controller('activeUnitsCtrl', ['$scope', '$rootScope', 'unitInfoService', 'websocketService', function($scope, $rootScope, unitInfoService, websocketService) {

 // websockets
    $scope.websocketUpdate = {};
  websocketService.startWs();
	

		window.setInterval(function() {
		$scope.websocketUpdate = websocketService.getUpdate();
	},3000);

  $scope.activeUnits = $rootScope.activeUnits;

}]);

//Get list of active units from server from /api/units/active

//Get websocket data to display on each unit from websocketService
