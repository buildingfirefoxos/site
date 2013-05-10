'use strict';

/* Controllers */

/*angular.module('bffos').controller('HomeCtrl',
  function($rootScope, $scope) {
    // $rootScope es para toda la pagina
    $rootScope.h1 = 'Hello';

    // $scope es solo para lo que hay dentro de ng-view
  });
*/

function SectionCtrl($scope, $location, $route) {
  $scope.activeSection = null;
  $scope.$on('$routeChangeSuccess', function(){
    //removes page from path (eg: /building-blocks/action-menu -> /building-blocks/)
    $scope.activeSection = $location.path().replace(/[^\/]*$/, '');
  });
}

function HomeCtrl($scope) {
}

function BuildingBlocksCtrl($scope, $location, $route) {
  $scope.activePath = null;
  $scope.$on('$routeChangeSuccess', function(){
    $scope.activePath = $location.path();
  });
}

