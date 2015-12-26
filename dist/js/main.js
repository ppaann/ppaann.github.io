/*! my-site - 0.0.1 -  2015-12-26 */'use strict';

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
