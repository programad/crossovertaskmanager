

(function(){
  
  'use strict';

  var TaskService = function ($resource, $timeout) {

      var resource = $resource('/api/tasks/:taskId', {buildId:'@id'});

      var tasks = [];

      var map = function(_from, to) {
          angular.forEach(_from, function(value, key){
             to[key] = value;
         });
      };

      var TaskMonitor = function(task) {

          var self = this;

          this.task = task;

          this.verify = function()
          {
              resource.get({taskId:self.task.id})
                .$promise.then(function(res){
                    angular.forEach(tasks, function(task) {
                        if ( task.id == res.id ) {
                            map(res, task);
                            if ( task.state === 'pending' || task.state === 'running') {
                                self.wait();
                            }
                        }
                    });
                });
          };

          this.wait = function() {
              $timeout(self.verify, 500);
          };

          this.wait();
      };

      return {
          find: function() {
              if ( tasks.length === 0 ) {
              console.log('servicefind');
                  resource.query()
                    .$promise.then(function(resp) {
                        angular.forEach(resp, function(task) {
                            if ( task.state === 'pending' || task.state === 'running' ) {
                                new TaskMonitor(task);
                            }
                            tasks.push(task);
                        });
                    });
              }

              return tasks;
          },
          get: function(id) {
              return resource.get({id:id});
          }
      };
  };

  angular.module('taskmanager').service('TaskService', ['$resource', '$timeout', TaskService]);

})();
