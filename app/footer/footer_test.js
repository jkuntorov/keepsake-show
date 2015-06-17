describe('footer directive', function() {

	beforeEach(module('amplifiAdmin'));

	describe('FooterController', function(){
		var scope, footerController;
		
		beforeEach(inject(function($rootScope, $controller) {
			scope = $rootScope.$new();
			footerController = $controller('FooterController', {$scope: scope});
		}));

		it('should be defined', inject(function($controller) {
			expect(footerController).toBeDefined();
		}));

	});
});