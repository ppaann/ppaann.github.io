/*! my-site - 0.0.1 -  2016-02-07 */'use strict';

var mySite = angular.module("mySite", ['ngRoute']);

mySite.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/portfolio', {
			templateUrl: 'app/htmls/portfolio.html',
		}).
    when('/portfolio/design-neo-navigation', {
      templateUrl: 'app/htmls/portfolio/navigation-neo.html',
    }).
    when('/portfolio/website-for-tablet', {
      templateUrl: 'app/htmls/portfolio/website-for-tablet.html',
    }).
		otherwise ({
			redirectTo: '/portfolio'
		});
}]);
