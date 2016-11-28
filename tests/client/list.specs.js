describe('Listing tests', function() {

    beforeEach(module('taskmanager'));

    describe('Clicking on Tasks tests', function() {

        var scope = {}, location = {}, Tasks = {}, task = {};

        beforeEach(function(){
           Tasks                = { find: function() { }, get: function() { return { then: function(call) { call() }}} },
           task.selected        = false;
       });

        it('when task is pending, it cannot be selected', inject(function($controller) {
              $controller('ListController', {$scope: scope, $location: location, Tasks: Tasks});
              task.state = 'pending';
              scope.toggleSelection(task);
              expect(task.selected).toBe(false);
        }));

        it('when task is running, it cannot be selected', inject(function($controller) {
              $controller('ListController', {$scope: scope, $location: location, Tasks: Tasks});
              task.state = 'running';
              scope.toggleSelection(task);
              expect(task.selected).toBe(false);
        }));

        it('when task is complete, it should be selected', inject(function($controller) {
              $controller('ListController', {$scope: scope, $location: location, Tasks: Tasks});
              task.state = 'complete';
              scope.toggleSelection(task);
              expect(task.selected).toBe(true);
        }));

        it('when task is accepted, it should be selected', inject(function($controller) {
              $controller('ListController', {$scope: scope, $location: location, Tasks: Tasks});
              task.state = 'accepted';
              scope.toggleSelection(task);
              expect(task.selected).toBe(true);
        }));

    });

});
