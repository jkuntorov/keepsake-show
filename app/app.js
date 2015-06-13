angular.module('keepsake', [
	'ngRoute',
	'keepsake.index',
	'keepsake.card',
]).

config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'index/index.html',
		controller: 'IndexController'
	}).when('/card/:name/', {
		templateUrl: 'card/card.html',
		controller: 'CardController'
	}).otherwise({redirectTo: '/'});
}]);