'use strict';

/* Controllers */

var myAppControllers = angular.module('myAppControllers', []);

myAppControllers.controller('resumeCtrl', ['$scope','$translate', 'localStorageService',
  function($scope, $translate, localStorageService) {
  	var prefLang = localStorageService.get('lang');
	$translate.use(prefLang || $translate.preferredLanguage().match(/^..(?=_)/)[0]);
  	var lang = $translate.use();
  	$scope.toggleButton = lang == 'fr' ? "English" : "Français";
  	$scope.nextLang = lang == 'fr' ? 'en' : 'fr';

  	$scope.toggleLanguage = function(langKey) {
  		$scope.toggleButton = langKey == 'fr' ? "English" : "Français";
  		$scope.nextLang = langKey == 'fr' ? 'en' : 'fr';
  		$translate.use(langKey).
  		preferredLanguage(langKey);
  		localStorageService.set('lang', langKey);
  	};

  }]);