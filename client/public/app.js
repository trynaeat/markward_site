var ts = angular.module('ts', ['ngRoute', 'ui.bootstrap']);
ts.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  $routeProvider
  .when('/home', {
    templateUrl: '/client/public/templates/home.html',
    controller: 'homeController'
  })
  .when('/home/contact', {
    templateUrl: '/client/public/templates/contact.html',
    controller: 'contactController'
  })
  .otherwise({
    redirectTo: '/'
  });
});

ts.controller('rootController', ['$scope', '$location', function($scope, $location) {
  
}]);
