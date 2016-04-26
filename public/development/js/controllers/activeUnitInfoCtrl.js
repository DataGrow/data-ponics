angular.module('dataGrow')
.controller('activeUnitInfoCtrl', ['$scope', 'websocketService', 'unitInfoService', function($scope, websocketService, unitInfoService, activeUnitInfo) {

  //Get active unit data from server at /api/unit/:unitId

  //Get websocket data to display from websocketService

  $scope.ActiveUnits = [];
  $scope.UnitId;
  $scope.Data;

  function getUnitInfo() {
    $scope.UnitId = function() {
  	 $scope.Data.push($scope.UnitId)
        return UnitId.data;
    };
  }

  function getUnitWaterTemp() {
    $scope.UnitId = function() {
      return UnitId.waterTemp;
    }
  }

  function getUnitAirTemp() {
    $scope.UnitId = function() {
      return UnitId.airTemp;
    }
  }

  function getUnitHumidity() {
    $scope.UnitId = function() {
      return UnitId.humidity;
    }
  }

  function getUnitLight() {
    $scope.UnitId = function() {
      return UnitId.light;
    }
  }
  // ws.on('info', function(data) {
  //    $scope.info.push(data);
  //   })

  // $scope.sendData = function() {
  // 	return ws.send(data);
  // }
}]);
