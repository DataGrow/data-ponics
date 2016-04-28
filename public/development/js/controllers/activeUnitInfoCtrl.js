angular.module('dataGrow')
.controller('activeUnitInfoCtrl', ['$scope', '$rootScope', 'websocketService', 'unitInfoService', 'activeUnit', function($scope, $rootScope, websocketService, unitInfoService, activeUnit) {

$scope.unit = activeUnit.data;

// replace unit on rootScope with unit from resolve
$scope.updateActiveUnitsList = function (unit) {
  for (var i = 0; i <$rootScope.activeUnits.length; i++) {
    if ($rootScope.activeUnits[i]._id === unit._id) {
      $rootScope.activeUnits.splice(i, 1, unit)
    };
  };
};

$scope.updateActiveUnitsList($scope.unit);

//  websocketService.startWs();

 // $scope.websocketUpdate = {};

 // window.setInterval(function() {
 // 	$scope.websocketUpdate = websocketService.getUpdate();
 // 	console.log($scope.websocketUpdate);
 // },2000);

// toggle graph functionality
$scope.showLight = true;

$scope.selectGraph = function (event){
  $(event.target).parent().children().removeClass('active');
  $(event.target).addClass('active')
};
  //Get active unit data from server at /api/unit/:unitId

  //Get websocket data to display from websocketService

}]);
