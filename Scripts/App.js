var App = angular.module('App', ['ngMaterial']);

App.controller('MainController', MainController);

App.config([
  '$interpolateProvider', function($interpolateProvider) {
    return $interpolateProvider.startSymbol('{(').endSymbol(')}');
  }
]);