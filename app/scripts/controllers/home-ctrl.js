"use strict";

angular.module('app')
  .controller('HomeCtrl', ['$scope', 'constants', 'cache', 'admob', function($scope, constants, cache, admob) {
    $scope.constants = constants;
    $scope.cache = cache;
    $scope.admob = admob;

    $scope.Init = function(){
    };

    $scope.Confirm = function(match){
      console.log("Confirm", match);
      cache.active_match = match;
      cache.LaunchModal(cache.modals.confirmation);
    };

  }]);