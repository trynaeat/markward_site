var ms = angular.module('marksite');
ms.controller('homeController', ['$scope', function($scope) {

  $scope.slideInterval = 8000;
  $scope.active = 0;
  $scope.noWrapSlides = false;
  $scope.slides = [
    {
      id: 0,
      image: '/client/public/images/Markward_1.jpg'
    },
    {
      id: 1,
      image: '/client/public/images/Markward_2.jpg'
    },
    {
      id: 2,
      image: '/client/public/images/Markward_3.jpg'
    },
    {
      id: 3,
      image: '/client/public/images/Markward_4.jpg'
    }
  ];
}]);
