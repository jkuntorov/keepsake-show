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

	$scope.clearFilters = function() {
		$scope.search = {};
	};

	$scope.$watch('search.course', function(newValue, oldValue) {
		$rootScope.search = $scope.search;
		if ($scope.search) {
			if ($scope.search.course == "") { $scope.search = {} };
			if ($scope.search.speciality && (newValue != oldValue)) { $scope.search.speciality = "" };
		}
		console.log("new " + newValue);
		console.log("old " + oldValue);
	});

	$scope.$watch('search.speciality', function() {
		$rootScope.search = $scope.search;
		console.log($rootScope.search);
	});

	// reapply filter to the listing
	var init = function () { $scope.search = $rootScope.search; };
	init();
});