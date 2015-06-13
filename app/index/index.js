angular.module('keepsake.index', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'index/index.html',
    controller: 'IndexController'
  });
}])

.controller('IndexController', function($scope, $rootScope, $http) {
	$http.get('data.json').success(function(data) {
		$scope.people = data;
	});
});