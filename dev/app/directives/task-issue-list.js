(function(){

    'use strict';

    var taskIssueList = function ($compile) {

        return {
            restrict: 'A',
            scope: {
                id: '='
            },
            link: function(scope, element, attrs) {

                element.on('click', function(e) {
                    location.href = '/issues/' + scope.id;
                });

            }
        };
    };

  angular.module('taskmanager').directive('taskIssueList', ['$compile', taskIssueList]);

})();
