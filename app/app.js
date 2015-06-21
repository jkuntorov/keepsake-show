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

app.run(['$rootScope', '$location', '$window', function($rootScope, $location, $window){
	$rootScope.$on('$stateChangeSuccess', function(event) {
		if (!$window.ga)
			return;
		$window.ga('send', 'pageview', { page: $location.path() });
	});
}]);