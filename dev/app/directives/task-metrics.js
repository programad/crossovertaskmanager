/*jshint multistr: true */
(function(){

    'use strict';

    var taskMetrics = function () {

        var getUpDownDirection = function(value) {
                if ( value > 50 ){
                    return 'up';
                }
                else {
                    return 'down';
                }
        };

        var getLeftRightDirection = function(value) {
            return 'right';
        };

        var directions = {
            'test'              : getUpDownDirection,
            'maintainability'   : getUpDownDirection,
            'security'          : getLeftRightDirection,
            'workmanship'       : getLeftRightDirection
        };

        return {
            restrict: 'A',
            scope: {
                header: '=',
                metric: '=',
            },
            link: function(scope, element) {
                var className = scope.header;
                var metric = scope.metric;
                var direction = directions[className](metric);
                
                element.addClass("metric-box " + className + ' ' + direction);
            },
            template: '<span class="number">{{metric}}</span> \ <span class="description">{{header}}</span>'
        };
    };

  angular.module('taskmanager').directive('taskMetrics', [taskMetrics]);

})();
