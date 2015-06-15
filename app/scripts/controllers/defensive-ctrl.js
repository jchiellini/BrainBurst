"use strict";

angular.module('app')
  .controller('DefensiveCtrl', ['$scope', 'cache', function($scope, cache) {

    $scope.cache = cache;

  }]);