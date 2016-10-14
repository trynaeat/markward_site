var ms = angular.module('marksite', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);
ms.config(function($routeProvider, $locationProvider) {
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

ms.controller('rootController', ['$scope', '$location', '$document', function($scope, $location, $document) {
  $scope.appearHeight = 500;
  $scope.openMobileMenu = false;

  $scope.toggleMobileMenu = function() {
    $scope.openMobileMenu = !$scope.openMobileMenu;
  }
}]);
