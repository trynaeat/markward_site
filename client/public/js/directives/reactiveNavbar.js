var ms = angular.module('marksite');
ms.directive('reactiveNavbar', ['$window', function($window) {
  return {
    restrict: 'A',
    scope: {
      appearHeight: '=appearHeight'
    },
    link: function(scope, elem, attrs) {
      elem.addClass('reactive-navbar-hidden');
      var window = angular.element($window);
      window.on('scroll', function() {
        scope.$apply(function() {
          if($window.scrollY < scope.appearHeight) {
            elem.addClass('reactive-navbar-hidden');
            elem.removeClass('reactive-navbar');
          } else {
            elem.addClass('reactive-navbar');
            elem.removeClass('reactive-navbar-hidden');
          }
        });
      });
    }
  };
}]);
