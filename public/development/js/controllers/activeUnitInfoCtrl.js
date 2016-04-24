angular.module('dataGrow')
.controller('activeUnitInfoCtrl', ['$scope', 'websocketService', 'unitInfoService', function($scope, websocketService, unitInfoService) {

  //Get active unit data from server at /api/unit/:unitId

  //Get websocket data to display from websocketService

  $scope.ActiveUnits = [];
  $scope.UnitId;
  $scope.Data;
 
 // UnitId.Data()
 // 	.success(function(Data) {
 // 		this.Data = Data;
 // 	});

  $scope.list = function() {
  	$scope.Data.push($scope.UnitId)
  };

  ws.on('info', function(data) {
  	$scope.info.push(data);
  });

  // $scope.sendData = function() {
  // 	return ws.send(data);
  // }

}]);
