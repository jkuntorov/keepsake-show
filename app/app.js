var app = angular.module('keepsake', [
	'ngRoute',
	'ngAnimate',
	'keepsake.index',
	'keepsake.card',
]);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'index/index.html',
		controller: 'IndexController'
	}).when('/card/:id/', {
		templateUrl: 'card/card.html',
		controller: 'CardController'
	}).otherwise({redirectTo: '/'});
}]);