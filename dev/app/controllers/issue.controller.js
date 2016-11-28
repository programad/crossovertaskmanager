(function () {

    'use strict';

    var IssueController = function ($scope, $routeParams, $location, TaskService) {

        $scope.controllerDescription = 'This controller controls the issue view for speciic task';


        $scope.setTask = function (id) {
            $scope.currentTaskId = id;
        };

        $scope.setTask($routeParams.id);

        $scope.task = TaskService.get($scope.currentTaskId);

        $scope.goToList = function () {
            $location.path('/');
        };
    };

    angular.module('taskmanager').controller('IssueController', ['$scope', '$routeParams', '$location', 'TaskService', IssueController]);

})();