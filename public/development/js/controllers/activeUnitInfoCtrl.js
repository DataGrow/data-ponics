angular.module('dataGrow')
.controller('activeUnitInfoCtrl', ['$scope', 'websocketService', 'unitInfoService', 'activeUnit', function($scope, websocketService, unitInfoService, activeUnit) {

$scope.unit = activeUnit.data;

//  websocketService.startWs();

 // $scope.websocketUpdate = {};

 // window.setInterval(function() {
 // 	$scope.websocketUpdate = websocketService.getUpdate();
 // 	console.log($scope.websocketUpdate);
 // },2000);

  //Get active unit data from server at /api/unit/:unitId

  //Get websocket data to display from websocketService

}]);
