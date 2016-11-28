(function(){
    'use strict';

    var app =  angular.module('taskmanager', ['ngRoute', 'ngResource', 'chart.js']);

    var appConfig = function ($routeProvider, $locationProvider) {

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

    angular.module('taskmanager').config(['$routeProvider', '$locationProvider', appConfig]);
})();