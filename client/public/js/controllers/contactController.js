var ms = angular.module('marksite');
ms.controller('contactController', ['$scope', '$http', '$window', function($scope, $http, $window) {

  $scope.alerts = [];

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

  $scope.emailForm = {};
  $scope.submitForm = function() {
    $http.post('/api/email', $scope.emailForm).then(function(data) {
      $scope.alerts.push({
        type: 'success',
        msg: 'Email sent successfully!'
      });
      $window.location.reload();
    })
    .catch(function() {
      $scope.alerts.push({
        type: 'danger',
        msg: 'Email send failed! Try again later.'
      });
    });
  }
}]);
