(function(){

  'use strict';

  var ListController = function($scope, $location, TaskService) {

      $scope.tasks = TaskService.find();
      $scope.selectedTask = {};

  };

  angular.module('taskmanager').controller('ListController', ['$scope', '$location', 'TaskService', ListController]);

})();