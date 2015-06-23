var app = angular.module('keepsake', [
	'ngRoute',
	'ngAnimate',
	'angulartics',
	'angulartics.google.analytics',
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

app.run(function($rootScope, $location, $window) {
	$rootScope.$on('$stateChangeSuccess', function(event) {
		if (!$window.ga) { return; }
		$window.ga('send', 'pageview', { page: $location.path() });
	});
});