(function(){

  'use strict';

  var ListController = function($scope, $location, Tasks) {

      $scope.tasks = Tasks.find();
      $scope.selectedTask = {};

  };

  angular.module('tasklistmanager')
     .controller('ListController', ['$scope', '$location', 'Tasks', ListController]);

})();
