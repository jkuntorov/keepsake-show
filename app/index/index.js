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

	$scope.courses = [
		{ id: 'gd', title: 'Graphic Design' },
		{ id: 'i', title: 'Illustration' }
	];

	$scope.gd_specialities = [
		{ id: 'branding', title: 'Branding' },
		{ id: 'digital', title: 'Digital Design' },
		{ id: 'editorial', title: 'Editorial Design' },
		{ id: 'photography', title: 'Photography' }
	];

	$scope.i_specialities = [
		{ id: '3d', title: '3D Design' },
		{ id: 'animation', title: 'Animation' },
		{ id: 'digital', title: 'Digital Illustration' },
		{ id: 'print', title: 'Print Illustration' }
	];

	$scope.specialities = [];

	$scope.clearFilters = function() {
		$scope.search = {};
	};

	$scope.$watch('search.course', function(newValue, oldValue) {
		console.log($scope.search);
		$rootScope.search = $scope.search;
		if ($scope.search) {
			if ($scope.search.course == 'gd') { $scope.specialities = $scope.gd_specialities; };
			if ($scope.search.course == 'i') { $scope.specialities = $scope.i_specialities; };
			if ($scope.search.course == null) { $scope.search = {} };
			if ($scope.search.speciality && (newValue != oldValue)) { $scope.search.speciality = "" };
		}
	});

	$scope.$watch('search.speciality', function() {
		$rootScope.search = $scope.search;
		if ($scope.search) {
			if ($scope.search.speciality == null) { $scope.search.speciality = ""; };
		}
	});

	// reapply filter to the listing
	var init = function () { $scope.search = $rootScope.search; };
	init();
});