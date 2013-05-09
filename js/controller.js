'use strict';

/* Controllers */

angular.module('bffos').controller('HomeCtrl',
  function($rootScope, $scope) {
    // $rootScope es para toda la pagina
    $rootScope.h1 = 'Hello';

    // $scope es solo para lo que hay dentro de ng-view
  });

function BuildingBlocksCtrl($scope) {

}

