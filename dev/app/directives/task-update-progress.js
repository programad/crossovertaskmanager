/*jshint multistr: true */
(function(){

    'use strict';

    var taskUpdateProgress = function () {

        return {
            restrict: 'A',
            scope: {
                state: '=',
                progress: '=',
            },
            link: function(scope, element) {
                var state = scope.state;
                element.addClass('step-state');
                element.addClass(state);

                if (state != 'running')
                    scope.progress = 100;

                scope.$watch('state', function(){
                    element.removeClass('pending running completed rejected');
                    element.addClass(scope.state);
                });

            },
            template: '<div data-ng-style="{ \'width\': progress + \'%\' }"></div>'
        };
    };

  angular.module('taskmanager').directive('taskUpdateProgress', [taskUpdateProgress]);

})();
