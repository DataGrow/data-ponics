angular.module('dataGrow').controller('activeUnitsCtrl', ['$scope', '$rootScope', 'websocketService', function($scope, $rootScope, websocketService, ActiveUnits) {
	//overview ctrl
  $scope.allUnits = allUnits;

  $scope.unit.name = unit.name;
  $scope.unit.product = unit.product;
  $scope.unit.day = unit.day;

   //hey asshole, use this for websockets
    websocketService.startWs();

	$scope.websocketUpdate = {};

	$scope.getUnitData = function() {
		unitInfoService.getData().then (
			function(response) {
				$rootScope.activeUnits = response.data;
				$scope.Data.push($scope.UnitId)
        			return UnitId.data;
    		});
	};
	

	window.setInterval(function() {
	 $scope.websocketUpdate = websocketService.getUpdate();
		console.log($scope.websocketUpdate);
	},2000);

	
  


}]);

//Get list of active units from server from /api/units/active (may need its own service)

  //Get websocket data to display on each unit from websocketService


 