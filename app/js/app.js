'use strict';

var mySite = angular.module("mySite", ['ngRoute']);

mySite.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/portfolio', {
			templateUrl: 'app/htmls/portfolio.html',
		}).
		otherwise ({
			redirectTo: '/portfolio'
		});
}]);
