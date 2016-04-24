angular.module('dataGrow').controller('activeUnitsCtrl', ['$scope', 'websocketService', function($scope, websocketService) {

  
  $scope.ActiveUnits = [];
  $scope.UnitId;

 

  $scope.list = function() {
  	$scope.ActiveUnits.push($scope.UnitId)
  }

}]);

//Get list of active units from server from /api/units/active (may need its own service)

  //Get websocket data to display on each unit from websocketService