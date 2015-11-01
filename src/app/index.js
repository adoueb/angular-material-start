'use strict';

angular.module('criteriaViewer', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial', 'users'])
  .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'UserController as ul'
      });

    $urlRouterProvider.otherwise('/');

    $mdIconProvider
              .defaultIconSet("./assets/svg/avatars.svg", 128)
              .icon("menu"       , "./assets/svg/menu.svg"        , 24)
              .icon("share"      , "./assets/svg/share.svg"       , 24)
              .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
              .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
              .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
              .icon("phone"      , "./assets/svg/phone.svg"       , 512);

    $mdThemingProvider.theme('default')
                          .primaryPalette('lime')
                          .accentPalette('cyan');
  })
;
