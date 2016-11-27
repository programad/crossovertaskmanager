(function () {

    'use strict';

    var taskIcon = function () {

        return {
            restrict: 'A',
            scope: {
                state: '=',
                type: '=',
            },
            link: function(scope, element){

                let changeIcon = function() {
                    var imageType = scope.type == 'firewall' ? 'firewall' : 'computer';
                    var imageSrc = 'images/icon-' + imageType + '-' + scope.state + '.png';

                    element.attr('src', imageSrc);
                    element.attr('alt', 'icon');
                    element.addClass('task-icon');
                };

                scope.$watch('state', function(){
                    changeIcon();
                });

                changeIcon();
            }
        };

    };

    angular.module('taskmanager').directive('taskIcon', [taskIcon]);

})();