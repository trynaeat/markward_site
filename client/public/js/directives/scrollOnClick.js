var ms = angular.module('marksite');
ms.directive('scrollOnClick', function() {
  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      var href = attrs.href;
      var idToScroll = attrs.href;
      elem.on('click', function() {
        //If it points to an element on another page, just jump to that page/element
        if(href.indexOf('/') != -1) {
          var hrefSplit = href.split('#');
          idToScroll = '#' + hrefSplit[1];
          if(window.location.pathname != hrefSplit[0]) {
            window.location = href;
            return;
          }
        }
        //Otherwise, animate a scroll to the element on this page
        var $target;
        if (idToScroll) {
          $target = $(idToScroll);
        } else {
          $target = elem;
        }
        $("body").animate({scrollTop: $target.offset().top}, "slow");
      });
    }
  }
});
