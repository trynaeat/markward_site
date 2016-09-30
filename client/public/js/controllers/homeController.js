var ts = angular.module('ts');
ts.controller('homeController', ['$scope', function($scope) {
  console.log('homeController');

  $('#home-link').focus();
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
