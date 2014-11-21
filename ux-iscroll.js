(function () {
  'use strict';
  function uxIscroll() {
    return {
      restrict: 'A',
      transclude: true,
      template: '<div ng-transclude style="min-height: 100vh; display: flex; flex-direction: column;"></div>',
      link: function (scope, element) {
        element.css({
          position: 'relative',
          overflow: 'hidden'
        });

        /* global IScroll */
        var scroll = new IScroll(element[0], {
          mouseWheel: true,
          disableMouse: true,
          disablePointer: true,
          interactiveScrollbars: true,
          scrollbars: true,
          fadeScrollbars: true
        });
        scope.$on('$destroy', function () {
          scroll.destroy();
          scroll = null;
        });
      }
    };
  }
  angular.module('angular-iscroll', []);
  angular.module('angular-iscroll').directive('uxIscroll', uxIscroll);
})();
