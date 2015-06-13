angular.module('keepsake.card', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/card/:id/', {
    templateUrl: 'card/card.html',
    controller: 'CardController'
  });
}])

.controller('CardController', function($scope, $http, $routeParams) {
	$http.get('data.json').success(function(data) {
		$scope.person = data.filter(function(obj) { return obj.id == $routeParams.id; })[0];
	});
});