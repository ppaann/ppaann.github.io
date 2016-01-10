'use strict';

var mySite = angular.module("mySite", ['ngRoute']);

mySite.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/portfolio', {
			templateUrl: 'app/htmls/portfolio.html',
		}).
    when('/portfolio/design-neo-navigation', {
      templateUrl: 'app/htmls/portfolio/navigation-neo.html',
    }).
		otherwise ({
			redirectTo: '/portfolio'
		});
}]);
