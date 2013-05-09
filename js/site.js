'use strict';

//App Module:
angular.module('bffos', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'}).
      when('/building-blocks/', {templateUrl: 'partials/building-blocks/action-menu.html'}).
      when('/building-blocks/action-menu', {templateUrl: 'partials/building-blocks/action-menu.html'}).
      otherwise({redirectTo: '/'});
}]);

//Twitter:
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

