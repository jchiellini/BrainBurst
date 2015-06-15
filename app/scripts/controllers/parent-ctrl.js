"use strict";

angular.module('app')
  .controller('ParentCtrl', ['$scope', 'cache', '$ionicModal', function($scope, cache, $ionicModal) {

    $scope.cache = cache;


  }]);