angular.module('dataGrow').controller('activeUnitsCtrl', ['$scope', 'websocketService', function($scope, websocketService) {
	//overview ctrl
  
  $scope.ActiveUnits = [];
  $scope.UnitId;

  $scope.allUnits = function() {
  	return $scope.ActiveUnits;
  }

}]);

//Get list of active units from server from /api/units/active (may need its own service)

  //Get websocket data to display on each unit from websocketService