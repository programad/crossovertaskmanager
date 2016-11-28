(function(){
    'use strict';

    var app =  angular.module('taskmanager', ['ngRoute', 'ngResource', 'ngAnimate', 'chart.js']);

    var appConfig = function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'app/views/list.html',
                controller: 'ListController'
            })
            .when('/issues/:id', {
                templateUrl: 'app/views/issues.html',
                controller: 'IssueController'
            })
            .when('/task/:id', {
                templateUrl: 'app/views/task.html',
                controller: 'TaskController'
            })
            .otherwise({
                redirectTo: '/'
            }); 

        $locationProvider.html5Mode(true);
    };

    angular.module('taskmanager').config(['$routeProvider', '$locationProvider', appConfig]);
})();