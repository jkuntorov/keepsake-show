angular.module('keepsake', [
	'ngRoute',
	'wu.masonry',
	'keepsake.index',
	'keepsake.card',
]).

config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'index/index.html',
		controller: 'IndexController'
	}).when('/card/:id/', {
		templateUrl: 'card/card.html',
		controller: 'CardController'
	}).otherwise({redirectTo: '/'});
}]);