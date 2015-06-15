"use strict";

angular.module('app')
  .controller('ChatDetailCtrl', ['$scope', '$stateParams', 'constants', function($scope, $stateParams, constants) {

    $scope.chat = constants.chats.get($stateParams.chatId);

  }
]);