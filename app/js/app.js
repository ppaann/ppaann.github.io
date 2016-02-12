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
    when('/portfolio/website-for-tablet', {
      templateUrl: 'app/htmls/portfolio/website-for-tablet.html',
    }).
    when('/portfolio/redesign-internal-web-ui', {
      templateUrl: 'app/htmls/portfolio/redesign-internal-web-ui.html',
    }).
		otherwise ({
			redirectTo: '/portfolio'
		});
}]);
