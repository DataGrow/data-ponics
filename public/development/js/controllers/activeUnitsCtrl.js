angular.module('dataGrow').controller('activeUnitsCtrl', ['$scope', 'websocketService', function($scope, websocketService, ActiveUnits) {
	//overview ctrl
  
  // $scope.ActiveUnits = [];
  // $scope.UnitId;

  //.populate

  $scope.allUnits = allUnits;

 //  	hey asshole, use this for websockets
 //  	websocketService.startWs();

	// $scope.websocketUpdate = {};

	// 	window.setInterval(function() {
	// 	$scope.websocketUpdate = websocketService.getUpdate();
	// 	console.log($scope.websocketUpdate);
	// },2000);
  

}]);

//Get list of active units from server from /api/units/active (may need its own service)

  //Get websocket data to display on each unit from websocketService


 