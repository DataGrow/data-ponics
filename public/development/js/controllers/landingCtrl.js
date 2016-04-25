angular.module('dataGrow')
.controller('landingCtrl', function($scope, websocketService) {

	websocketService.startWs();

});
