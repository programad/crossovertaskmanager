(function(){

  'use strict';

  var ListController = function($scope, $location, TaskService) {

      $scope.tasks = TaskService.find();
      $scope.selectedTask = {};

      $scope.toggleSelection = function(task)
      {
          if ( task.state === 'pending' || task.state === 'running') {
              return;
          }

          if ( $scope.selectedTask.id !== task.id ) {
              $scope.selectedTask.selected = false;
          }

          task.selected = !task.selected;
          $scope.selectedTask = task;
      };

  };

  angular.module('taskmanager').controller('ListController', ['$scope', '$location', 'TaskService', ListController]);

})();