"use strict";

angular.module('app')
  .controller('HomeCtrl', ['$scope', 'constants', 'cache', function($scope, constants, cache) {
    $scope.constants = constants;
    $scope.cache = cache;

    $scope.Confirm = function(match){
      console.log("Confirm", match);
      cache.active_match = match;
      cache.LaunchModal(cache.modals.confirmation);
    };

  }]);