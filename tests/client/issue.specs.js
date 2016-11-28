describe('Issue Tests', function () {

    beforeEach(module('taskmanager'));

    describe('Loading Issue', function () {

        var
            scope = {},
            routeParams = {},
            task = {};

        beforeEach(function () {
            IssueController = 'IssueController';
        });

        it('when acessing the controller, the task should be loaded', inject(function ($controller) {
            $controller(IssueController, {
                $scope: scope,
                $routeParams: routeParams,
                $location: location
            });
            expect(scope.currentTaskId).toBeUndefined();
            routeParams.id = 1;
            scope.setTask(routeParams.id);
            expect(scope.currentTaskId).toBeDefined();
            expect(scope.currentTaskId).toBe(routeParams.id);
        }));

    });

});