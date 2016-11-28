describe('Listing tests', function () {

      beforeEach(module('taskmanager'));

      describe('Clicking on Tasks tests', function () {

            var scope = {},
                  location = {},
                  TasksMock = {},
                  task = {};

            beforeEach(function () {
                  ListController = 'ListController',
                        TasksMock = {
                              find: function () {},
                              get: function () {
                                    return {
                                          then: function (call) {
                                                call()
                                          }
                                    }
                              }
                        },
                        task.selected = false;
            });

            it('when task is clicked, it should be the current selectedTask', inject(function ($controller) {
                  $controller(ListController, {
                        $scope: scope,
                        $location: location,
                        Tasks: TasksMock
                  });
                  scope.selectedTask = {};
                  task.state = 'accepted';
                  task.selected = true;
                  scope.toggleSelection(task);
                  expect(scope.selectedTask).toBe(task);
            }));

            it('when task is pending, it cannot be selected', inject(function ($controller) {
                  $controller(ListController, {
                        $scope: scope,
                        $location: location,
                        Tasks: TasksMock
                  });
                  task.state = 'pending';
                  scope.toggleSelection(task);
                  expect(task.selected).toBe(false);
            }));

            it('when task is running, it cannot be selected', inject(function ($controller) {
                  $controller(ListController, {
                        $scope: scope,
                        $location: location,
                        Tasks: TasksMock
                  });
                  task.state = 'running';
                  scope.toggleSelection(task);
                  expect(task.selected).toBe(false);
            }));

            it('when task is complete, it should be selected', inject(function ($controller) {
                  $controller(ListController, {
                        $scope: scope,
                        $location: location,
                        Tasks: TasksMock
                  });
                  task.state = 'completed';
                  scope.toggleSelection(task);
                  expect(task.selected).toBe(true);
            }));

            it('when task is accepted, it should be selected', inject(function ($controller) {
                  $controller(ListController, {
                        $scope: scope,
                        $location: location,
                        Tasks: TasksMock
                  });
                  task.state = 'accepted';
                  scope.toggleSelection(task);
                  expect(task.selected).toBe(true);
            }));

      });

      describe('Listing Deploy Targets', function () {

            var
                  scope = {};

            beforeEach(function () {
                  ListController = 'ListController';
            });
            
            it('The first selected deployTarget should be selected from the environment options', inject(function ($controller) {
                  $controller(ListController, {
                        $scope: scope;
                  });

                  expect(scope.deployTarget).toBe(scope.environments[0]);
            }));

      });

});