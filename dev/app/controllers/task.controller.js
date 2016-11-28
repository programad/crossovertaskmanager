(function () {

  'use strict';

  var TaskController = function ($scope, $routeParams, $location, TaskService) {

    $scope.controllerDescription = 'This controller controls the task view';

    $scope.setTask = function (id) {
      $scope.currentTaskId = id;
    };

    $scope.setTask($routeParams.id);

    $scope.task = TaskService.get($scope.currentTaskId);

    $scope.goToList = function () {
      $location.path('/');
    };
  };

  angular.module('taskmanager').controller('TaskController', ['$scope', '$routeParams', '$location', 'TaskService', TaskController]);

})();