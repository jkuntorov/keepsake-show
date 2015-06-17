app.directive('footer', function() {
	return {
		restrict: 'A',
		replace: 'true',
		templateUrl: 'footer/footer.html',
		controller: 'FooterController'
	}
});

app.controller('FooterController', function($scope, $rootScope) {
	
});