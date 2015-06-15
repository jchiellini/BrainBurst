"use strict";

angular.module('app')
  .factory('cache', ['$state', '$location', function($state, $location) {
    // Might use a resource here that returns a JSON array

    var cache = {};

    cache.GoToState = function(id){
      $state.go(id);
    };

    cache.ExitModal = function(){
      $location.hash('');
    };

    cache.LaunchModal = function(modal){
      cache.active_modal = modal;
      $location.hash(modal.id);
      console.log(modal.id);
      cache.modal_content = 'views/partials/'+modal.id+'-modal.html';
      $('#modal').modal("show");
    };

    cache.getModalById = function(id){
      return _.find(cache.settings,{id:id});
    };

    cache.modals = {
      confirmation:{
        id:'confirmation',
        question:"Are you ready?",
        cancel:{
          label:"Not Yet",
          callback:function(){
            console.log("Cancel");
            cache.active_match = null;
            cache.ExitModal();
          }
        },
        success:{
          label:"Let's Do It!",
          callback:function(){
            console.log("Let's Do It!",cache.active_match);
            var path = "/"+cache.active_match.strategy+"/"+cache.active_match.id;
            console.log(path);
            $location.path(path);
            cache.ExitModal();
          }
        }
      }
    };

    return cache;
  }
]);
