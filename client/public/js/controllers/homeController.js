var ms = angular.module('marksite');
ms.controller('homeController', ['$scope', function($scope) {

  $scope.slideInterval = 3000;
  $scope.active = 0;
  $scope.noWrapSlides = false;
  $scope.slides = [
    {
      id: 0,
      image: '/client/public/images/J_Shred.jpg',
      text: 'yeah boi'
    },
    {
      id: 1,
      image: '/client/public/images/J_Tiny.jpg',
      text: 'lets rip tho'
    }
  ];
}]);
