"use strict";

angular.module('app')
  .controller('ChatsCtrl', ['$scope', 'constants', function($scope, constants) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    console.log(constants);
    $scope.chats = constants.chats.all();
    $scope.remove = function(chat) {
      constants.chats.remove(chat);
    };
  }
]);