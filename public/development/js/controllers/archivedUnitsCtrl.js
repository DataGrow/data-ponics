angular.module('dataGrow').controller('archivedUnitsCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

  //Get list of archived units from server from /api/units/archived (may need its own service)

  $scope.getArchivedUnits = function() {
  	archivedUnitsService.getArchivedUnits().then (
  		function(response) {
  			$rootScope.archivedUnits = response.data;
  			$scope.Data.push($scope.UnitId)
  				return UnitId.data;
  			});
  		};
  

}]);
