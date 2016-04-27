angular.module('dataGrow', ['ui.router', 'ws'])

	.config( function ($stateProvider, $urlRouterProvider, wsProvider ) {

    wsProvider.setUrl('ws://echo.websocket.org');

    $urlRouterProvider.otherwise('/');

    $stateProvider
				.state('landing', {
						url: '/',
						templateUrl: './development/partials/landing.html',
						controller: 'landingCtrl'
				})
		        .state('active-units', {
		            url: '/units/active',
		            templateUrl: './development/partials/active-units.html',
		            controller: 'activeUnitsCtrl',
		            resolve: {
  						ActiveUnits: function(unitInfoService) {
  							return unitInfoService.allUnits();
  						}
  					}
		        })
				.state('active-unit-info', {
					url: '/unit/active/:unitId',
					templateUrl: './development/partials/active-unit-info.html',
					controller: 'activeUnitInfoCtrl',
					resolve: {
						ActiveUnitsInfo: function(unitInfoService) {
							return unitInfoService.UnitId();
						}
					}
				})
				.state('archived-units', {
		            url: '/units/archived',
		            templateUrl: './development/partials/archived-units.html',
		            controller: 'archivedUnitsCtrl',
		            resolve: {
						ActiveUnitsInfo: function(archivedUnitsService) {
							return archivedUnitsService.getArchivedUnits();
						}
					}
		        })
				.state('archived-unit-info', {
					url: '/unit/archive/:unitId',
					templateUrl: './development/partials/archived-unit-info.html',
					controller: 'archivedUnitInfoCtrl'
				})
				.state('about', {
					url: '/about',
					templateUrl:'./development/partials/about.html'
				})

    });
