angular.module('keepsake.card', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/card/:name/', {
    templateUrl: 'card/card.html',
    controller: 'CardController'
  });
}])

.controller('CardController', function($scope, $http, $routeParams) {
	$http.get('data.json').success(function(data) {
		$scope.person = data.filter(function(obj) { return obj.name == $routeParams.name; })[0];
	});
});