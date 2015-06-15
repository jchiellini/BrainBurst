"use strict";

angular.module('app')
  .controller('OffensiveCtrl', ['$scope', 'cache', function($scope, cache) {

    $scope.cache = cache;

  }]);