"use strict";

angular.module('app')
  .controller('AccountCtrl', ['$scope', function($scope) {
    $scope.settings = {
      enableFriends: true
    };
  }
  ]);
