(function(){
    'use strict';

    var app =  angular.module('taskmanager', ['ngRoute']);

    var appConfig = function ($routeProvider, $httpProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'app/views/list.html',
                controller: 'ListController'
            })
            .otherwise({
                redirectTo: '/'
            }); 

        $locationProvider.html5Mode(true);
    };


    app.config(['$routeProvider', '$httpProvider', '$locationProvider', appConfig]);

    console.log('client started!');
})();