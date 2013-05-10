'use strict';

var site = angular.module('bffos', []);

site.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'}).
    when('/building-blocks/action-menu', {templateUrl: 'partials/building-blocks/action-menu.html',  controller: 'BuildingBlocksCtrl'}).
    otherwise({redirectTo: '/'});
  //$locationProvider.html5Mode( true );
}]);

//Twitter:
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

