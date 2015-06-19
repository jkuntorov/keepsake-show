angular.module('keepsake.card', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/card/:id/', {
    templateUrl: 'card/card.html',
    controller: 'CardController'
  });
}])

.controller('CardController', function($scope, $http, $routeParams, $sce) {
	$scope.words = {
		greatAt: {
			gd_branding: 'Branding',
			gd_digital: 'Digital Design',
			gd_editorial: 'Editorial Design',
			gd_photography: 'Photography',
			i_animation: 'Animation',
			i_3d: '3D Design',
			i_digital: 'Digital Illustration',
			i_print: 'Print Illustration'
		},
		description: {
			gd_form: 'Form follows function',
			gd_comm: 'Good design communicates',
			gd_details: 'God is in the details',
			gd_rules: 'Break the rules',
			gd_minimalism: 'Minimalism is dead',
			gd_less: 'Less is more',
			i_words: 'A picture is worth a thousand words',
			i_comm: 'Good illustration communicates',
			i_imagination: 'Imagination — beginning of creation',
			i_style: 'Style is not to be trusted',
			i_rules: 'Break the rules',
			i_simple: 'Keep it simple'
		}
	};

	$http.get('data.json').success(function(data) {
		$scope.person = data.filter(function(obj) { return obj.id == $routeParams.id; })[0];

		$scope.greatAt = [];
		if ($scope.person.course == 'gd') {
			if ($scope.person.speciality != $scope.words.greatAt.gd_branding){ $scope.greatAt.push({ name: $scope.words.greatAt.gd_branding, checkmark: $scope.person.greatAtBranding }); }
			if ($scope.person.speciality != $scope.words.greatAt.gd_digital){ $scope.greatAt.push({ name: $scope.words.greatAt.gd_digital, checkmark: $scope.person.greatAtDigital }); }
			if ($scope.person.speciality != $scope.words.greatAt.gd_editorial){ $scope.greatAt.push({ name: $scope.words.greatAt.gd_editorial, checkmark: $scope.person.greatAtEditorial }); }
			if ($scope.person.speciality != $scope.words.greatAt.gd_photography){ $scope.greatAt.push({ name: $scope.words.greatAt.gd_photography, checkmark: $scope.person.greatAtPhotography }); }
		} else if ($scope.person.course == 'i') {
			if ($scope.person.speciality != $scope.words.greatAt.i_animation) { $scope.greatAt.push({ name: $scope.words.greatAt.i_animation, checkmark: $scope.person.greatAtAnimation }); }
			if ($scope.person.speciality != $scope.words.greatAt.i_3d) { $scope.greatAt.push({ name: $scope.words.greatAt.i_3d, checkmark: $scope.person.greatAt3D }); }
			if ($scope.person.speciality != $scope.words.greatAt.i_digital) { $scope.greatAt.push({ name: $scope.words.greatAt.i_digital, checkmark: $scope.person.greatAtDigital }); }
			if ($scope.person.speciality != $scope.words.greatAt.i_print) { $scope.greatAt.push({ name: $scope.words.greatAt.i_print, checkmark: $scope.person.greatAtPrint }); }
		}

		$scope.description = [];
		if ($scope.person.course == 'gd') {
			$scope.description.push({ name: $scope.words.description.gd_form, checkmark: $scope.person.descriptionFormFunction });
			$scope.description.push({ name: $scope.words.description.gd_comm, checkmark: $scope.person.descriptionGoodDesign });
			$scope.description.push({ name: $scope.words.description.gd_details, checkmark: $scope.person.descriptionDetails });
			$scope.description.push({ name: $scope.words.description.gd_rules, checkmark: $scope.person.descriptionBreakRules });
			$scope.description.push({ name: $scope.words.description.gd_minimalism, checkmark: $scope.person.descriptionMinimalismDead });
			$scope.description.push({ name: $scope.words.description.gd_less, checkmark: $scope.person.descriptionLessIsMore });
		} else if ($scope.person.course == 'i') {
			$scope.description.push({ name: $scope.words.description.i_words, checkmark: $scope.person.descriptionPictureWords });
			$scope.description.push({ name: $scope.words.description.i_comm, checkmark: $scope.person.descriptionGoodIllustration });
			$scope.description.push({ name: $scope.words.description.i_imagination, checkmark: $scope.person.descriptionImagination });
			$scope.description.push({ name: $scope.words.description.i_style, checkmark: $scope.person.descriptionStyle });
			$scope.description.push({ name: $scope.words.description.i_rules, checkmark: $scope.person.descriptionBreakRules });
			$scope.description.push({ name: $scope.words.description.i_simple, checkmark: $scope.person.descriptionSimple });
		}

		$scope.vimeoEmbedURL = $sce.trustAsResourceUrl("//player.vimeo.com/video/" + $scope.person.vimeo_id);

		$scope.showImage = function() {
			return ($scope.person.vimeo_id == null);
		}

		$scope.showVideo = function() {
			return ($scope.person.vimeo_id != null);
		}
	});

	var init = function() {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}
	init();
});