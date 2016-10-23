var ms = angular.module('marksite');
ms.controller('contactController', ['$scope', '$http', '$window', function($scope, $http, $window) {

  $scope.alert = null;

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

  $scope.emailForm = {};
  $scope.submitForm = function() {
    $http.post('/api/email', $scope.emailForm).then(function(data) {
      $scope.alert = {
        type: 'success',
        msg: 'Email sent successfully!'
      };
    })
    .catch(function() {
      $scope.alert = {
        type: 'danger',
        msg: 'Email send failed! Try again later.'
      };
    });
  }

  $scope.closeAlert = function() {
    $scope.alert = null;
  }
}]);
