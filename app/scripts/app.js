'use strict';

/**
 * @ngdoc overview
 * @name routingQuizApp
 * @description
 * # routingQuizApp
 *
 * Main module of the application.
 */
angular
  .module('routingQuizApp', ['ui.router']);
  .config(['$stateProvder', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state
    .state('Home', {
      url: '/',
      templateUrl: 'views/instructions.html'
    });
    .state('Red', {
      url: '/',
      templateUrl: 'views/bricks.html',
      controller: 'RedBricksCtrl as brick'
    });
    .state('Blue', {
      url: '/',
      templateUrl: 'views/bricks.html',
      controller: 'BlueBricksCtrl as brick'
    });
    .state('Green', {
      url: '/',
      templateUrl: 'views/bricks.html',
      controller: 'GreenBricksCtrl as brick'
    });
    .state('Cart', {
      url: '/',
      templateUrl: 'views/cart.html',
      controller: 'CartCtrl as cart'
    });
  }]);
