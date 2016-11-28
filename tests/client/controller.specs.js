describe('Controller tests', function () {

    beforeEach(module('taskmanager'));


    describe('Controller Information', function () {

        var
            scope = {};

        it('The controller should be able to provide a description of itself', inject(function ($controller) {
            $controller('ListController', {
                $scope: scope
            });

            expect(scope.controllerDescription.length).not.toEqual(0);
        }));

        it('The controller should be able to provide a description of itself', inject(function ($controller) {
            $controller('IssueController', {
                $scope: scope
            });

            expect(scope.controllerDescription.length).not.toEqual(0);
        }));

    });
});