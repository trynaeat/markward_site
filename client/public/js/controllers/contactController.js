var ts = angular.module('ts');
ts.controller('contactController', ['$scope', '$http', function($scope, $http) {
  console.log('contactController');

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
    })
    .catch(function() {
      $scope.alerts.push({
        type: 'danger',
        msg: 'Email send failed! Try again later.'
      });
    });
  }
}]);
