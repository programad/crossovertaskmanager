(function(){

  'use strict';

  var TaskController = function($scope, $routeParams, Tasks) {
      $scope.task = Tasks.get($routeParams.changelist);
  };

  angular.module('taskmanager').controller('TaskController', ['$scope', '$routeParams', 'Tasks', TaskController]);

})();