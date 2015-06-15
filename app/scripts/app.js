"use strict";

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleLightContent();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('home', {
        url: "/",
        templateUrl: "views/home.html",
        controller: 'HomeCtrl'
      })

      .state('match', {
        url: '/match/:id',
        templateUrl: 'views/match_detail.html',
        controller: 'MatchCtrl'
      })

      .state('defensive', {
        url: '/defensive/:id',
        templateUrl: 'views/defensive.html',
        controller: 'DefensiveCtrl'
      })
      .state('offensive', {
        url: '/offensive/:id',
        templateUrl: 'views/offensive.html',
        controller: 'OffensiveCtrl'
      });

    $urlRouterProvider
      .when('', '/')
      .otherwise('/');

  })
  .run(function(){
  });
