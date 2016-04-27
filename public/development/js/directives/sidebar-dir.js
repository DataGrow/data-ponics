angular.module('dataGrow')
	.directive('sideBar', function() {
		return {
		restrict: 'E',
		templateUrl: '../../../development/partials/sidebar.html',
		link: function (scope, elem, attrs) {
			$("#menu-toggle").click(function(e) {
			    e.preventDefault();
			    $("#wrapper").toggleClass("toggled");
			});
		}

	}
});
